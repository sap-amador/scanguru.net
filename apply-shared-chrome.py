#!/usr/bin/env python3
"""
apply-shared-chrome.py  —  one-time rollout of the shared nav/footer.

Run once from the root of your local scanguru.net clone, AFTER copying
scanguru-chrome.js into that root:

    python3 apply-shared-chrome.py .

What it does (idempotent — safe to re-run):
  1. Adds  <script src="/scanguru-chrome.js"></script>  to every .html page,
     right after the i18n engine include (or before </body> as a fallback).
  2. Adds  data-sg-theme="dark"  to modalities/index.html <body> (the one dark page).
It does NOT remove each page's existing <nav>/<footer> — scanguru-chrome.js
replaces them at runtime, so the old markup is harmless (and easy to strip later).
"""
import re, sys, pathlib

root = pathlib.Path(sys.argv[1] if len(sys.argv) > 1 else ".")
INCLUDE = '<script src="/scanguru-chrome.js"></script>'
I18N_RE = re.compile(
    r'(<script src="https://cdn\.jsdelivr\.net/gh/sap-amador/scanguru\.net@[^"]*'
    r'/scanguru-i18n-v6-full-site\.js">\s*</script>)', re.S)

pages = sorted(root.glob("*.html")) + sorted(root.glob("modalities/*.html"))
changed = 0
for p in pages:
    h = p.read_text(encoding="utf-8")
    if "scanguru-chrome.js" in h:
        print(f"  skip (already wired): {p.relative_to(root)}")
        continue
    if I18N_RE.search(h):
        h = I18N_RE.sub(r"\1\n    " + INCLUDE, h, 1)
    else:
        h = h.replace("</body>", "    " + INCLUDE + "\n</body>", 1)
    p.write_text(h, encoding="utf-8")
    changed += 1
    print(f"  wired: {p.relative_to(root)}")

mi = root / "modalities" / "index.html"
if mi.exists():
    h = mi.read_text(encoding="utf-8")
    if "data-sg-theme" not in h:
        h = re.sub(r"<body", '<body data-sg-theme="dark"', h, 1)
        mi.write_text(h, encoding="utf-8")
        print("  dark theme flag added: modalities/index.html")

print(f"\nDone. {changed} page(s) wired. Now: git add -A && git commit && git push")
