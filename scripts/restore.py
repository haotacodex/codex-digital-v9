import os

base = r'D:\WORK\Codex Digital\Codex Digital\New Website\02_WORK\Code\V9'
path = os.path.join(base, 'components', 'sections', 'ServicesStrip.tsx')

with open(path, 'r', encoding='utf-8-sig') as f:
    content = f.read()
    
print(f"Read {len(content)} chars")

# Remove BOM
if content.startswith('\ufeff'):
    content = content[1:]
    print("Removed BOM")

# Fix the corrupted Link line - find the HTML artifact
import re
# The corrupted line has <span class="katex"> inside the href
if 'katex' in content:
    print("Found katex corruption - fixing...")
    # Replace the entire corrupted Link line
    old = '''        <Link href={/services/<span class="katex"><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.6944em;"></span><span class="mord">{</span></span></span></span>service.slug}} style={{textDecoration: 'none', display: 'flex', flexDirection: 'column', gap: '16px', color: 'inherit', height: '100%'}}>'''
    new = '''        <Link
          href={'/services/' + service.slug}
          style={{
            textDecoration: 'none',
            display: 'flex',
            flexDirection: 'column',
            gap: '16px',
            color: 'inherit',
            height: '100%',
          }}
        >'''
    content = content.replace(old, new)
    print("Fixed Link corruption")

# Check if the file structure looks complete
if 'export function ServicesStrip' in content:
    print("Export function found - OK")
else:
    print("WARNING: export function missing!")

if 'use client' in content:
    print("use client directive found - OK")
else:
    print("WARNING: use client missing!")

if 'renderCard' in content:
    print("renderCard function found - OK")
else:
    print("WARNING: renderCard missing!")

with open(path, 'w', encoding='utf-8') as f:
    f.write(content)

print(f"Written {len(content)} chars to file")
print("Done!")
