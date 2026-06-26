#!/usr/bin/env bash
# deploy_lang.sh <lang> — build one language into the engine, commit, bump jsDelivr
# pin across all HTML, push, purge CDN. macOS (zsh/bash). Run from repo root.
#
#   bash deploy_lang.sh ms
#
# Assumes glossary_<lang>.json is already in the repo root (add_language.py puts
# it there; if you downloaded it, drop it in repo root first).
set -euo pipefail
LANG_CODE="${1:?usage: deploy_lang.sh <lang>}"
REPO="$(cd "$(dirname "$0")" && pwd)"  # root layout
cd "$REPO"

[ -f "glossary_${LANG_CODE}.json" ] || { echo "MISSING glossary_${LANG_CODE}.json in repo root"; exit 1; }

# regenerate en_leaves then refresh just this language's block
node -e 'const fs=require("fs");const I=require("./scanguru-i18n-v6-full-site.js");const out=[];
(function w(o,p){for(const k in o){const v=o[k];const np=p?p+"."+k:k;
 if(v&&typeof v==="object")w(v,np);else if(typeof v==="string")out.push([np,v]);}})(I.translations.en,"");
fs.writeFileSync("en_leaves.json",JSON.stringify(out));'
python3 build_packs.py "$LANG_CODE" "glossary_${LANG_CODE}.json" --refresh
node -e 'require("./scanguru-i18n-v6-full-site.js");console.log("engine OK")'

git add scanguru-i18n-v6-full-site.js
git commit -m "i18n(${LANG_CODE}): complete — site 100%" || echo "nothing to commit (engine unchanged)"
git push origin main

NEW=$(git rev-parse --short HEAD); echo "pin -> $NEW"
grep -rl 'scanguru-i18n-v6-full-site.js' --include='*.html' . | while read -r f; do
  sed -i '' -E "s|scanguru\.net@[a-z0-9]+/scanguru-i18n|scanguru.net@${NEW}/scanguru-i18n|g" "$f"
done
for f in $(grep -rl 'scanguru-i18n-v6-full-site.js\|SCANGURU-CHROME' --include='*.html' --include='*.js' .); do
  case "$f" in *_backup_*|*_LOCAL_*) ;; *) git add "$f";; esac
done
if git diff --cached --name-only | grep -qi backup; then echo "STOP-backup-staged"; exit 1; else echo "clean"; fi
git commit -m "pin bump @ $NEW (${LANG_CODE})" || echo "nothing"
git push origin main
curl -s "https://purge.jsdelivr.net/gh/sap-amador/scanguru.net@main/scanguru-i18n-v6-full-site.js" >/dev/null && echo "purged"
echo "DONE: ${LANG_CODE} deployed."
