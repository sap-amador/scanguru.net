#!/usr/bin/env python3
# Add a footer "Live Metrics" -> /scanguru-metrics.html link to EVERY marketing page,
# inserted INSIDE the <footer> block. Handles both footer shapes. Idempotent (safe to re-run;
# skips any page that already links the metrics page). Run from the repo root:
#     python3 add_metrics_footer_link.py
import re, glob, io, os
HREF = "/scanguru-metrics.html"
LI   = f'<li><a href="{HREF}" data-i18n="footer.live_metrics">Live Metrics</a></li>'
FOOTER = re.compile(r'(<footer\b.*?</footer>)', re.DOTALL)
A_RE = re.compile(r'(<li>\s*<a [^>]*href="/modalities"[^>]*>\s*All Modalities\s*</a>\s*</li>)')  # standard
B_RE = re.compile(r'(<a href="/modalities"([^>]*)>\s*Modalities\s*</a>)')                        # inline

report = []
for path in sorted(set(glob.glob("*.html") + glob.glob("modalities/*.html"))):
    if os.path.basename(path) == "scanguru-metrics.html":
        report.append((path, "skip (self)")); continue
    src = io.open(path, encoding="utf-8").read()
    if "scanguru-metrics" in src:
        report.append((path, "already linked")); continue
    m = FOOTER.search(src)
    if not m:
        report.append((path, "NO <footer> block — manual")); continue
    foot = m.group(1); new = None; shape = None
    a = A_RE.search(foot)
    if a:
        new = foot[:a.end()] + '\n                    ' + LI + foot[a.end():]; shape = "standard"
    else:
        b = B_RE.search(foot)
        if b:
            inline = f'<a href="{HREF}"{b.group(2)} data-i18n="footer.live_metrics">Live Metrics</a>'
            new = foot[:b.end()] + '\n                        ' + inline + foot[b.end():]; shape = "inline"
    if new:
        src = src[:m.start()] + new + src[m.end():]
        io.open(path, "w", encoding="utf-8").write(src)
        report.append((path, f"added ({shape})"))
    else:
        report.append((path, "no footer modalities anchor — manual"))

w = max(len(p) for p,_ in report)
for p,s in report: print(f"  {p:<{w}}  {s}")
print(f"\n{sum(1 for _,s in report if s.startswith('added'))} pages updated.")
