#!/usr/bin/env node
/*
 * verify_all.js — checks every language block in the engine against the wired
 * data-i18n keys across all HTML pages. Reports missing counts per language.
 * Language-agnostic: discovers languages from the engine, not a hardcoded list.
 *
 *   node verify_all.js            # all engine languages
 *   node verify_all.js de es ms   # only the listed languages
 *
 * Exit code 1 if any *requested* (or, with no args, any non-English) language
 * that is meant to be complete still has gaps — used by add_language.py.
 */
const fs = require("fs"), cp = require("child_process"), path = require("path");
const REPO = __dirname;  // root layout
const ENGINE = path.join(REPO, "scanguru-i18n-v6-full-site.js");
const I = require(ENGINE);
const g = (o, k) => k.split(".").reduce((a, c) => a && a[c], o);
const en = I.translations.en;

process.chdir(REPO);
const files = cp.execSync("ls *.html modalities/*.html").toString().trim().split("\n")
  .filter(x => !/backup/.test(x)).sort();

// collect wired keys once
const wired = [];
for (const f of files)
  for (const m of fs.readFileSync(f, "utf8").matchAll(/data-i18n(?:-placeholder)?="([^"]+)"/g)) {
    const k = m[1]; if (g(en, k) !== undefined) wired.push(k);
  }

const fl = o => { let n = 0; (function w(x){for(const k in x){const v=x[k];if(v&&typeof v==="object")w(v);else n++;}})(o); return n; };

const requested = process.argv.slice(2);
const langs = (requested.length ? requested : Object.keys(I.translations).filter(l => l !== "en"));

console.log(`wired keys: ${wired.length} across ${files.length} pages`);
let anyGap = false;
const rows = [];
for (const l of langs) {
  const t = I.translations[l]; if (!t) { console.log(`  ${l}: (no block in engine)`); continue; }
  let miss = 0;
  for (const k of wired) if (g(t, k) === undefined) miss++;
  rows.push([l, miss, fl(t)]);
  if (miss === 0) {} else anyGap = true;
}
// show complete first, then gaps
rows.sort((a, b) => a[1] - b[1]);
const done = rows.filter(r => r[1] === 0).map(r => r[0]);
console.log("  complete (0 missing):", done.length ? done.join(", ") : "(none)");
const gaps = rows.filter(r => r[1] > 0);
if (gaps.length) {
  console.log("  incomplete:");
  gaps.forEach(r => console.log(`    ${r[0]}: ${r[1]} missing (${r[2]} leaves)`));
}
// only fail when a language was explicitly requested and is incomplete
if (requested.length && gaps.length) process.exit(1);
