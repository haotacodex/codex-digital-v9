import re, sys
filepath = 'components/sections/ServicesStrip.tsx'
with open(filepath, encoding='utf-8') as f:
    c = f.read()
c = c.replace(chr(39) + 'aria-hidden' + chr(39) + '?: string | boolean', chr(39) + 'aria-hidden' + chr(39) + '?: Booleanish | undefined')
if 'Booleanish' not in c:
    c = c.replace('from ' + chr(39) + '@/lib/types' + chr(39), 'from ' + chr(39) + '@/lib/types' + chr(39) + chr(10) + 'import type { Booleanish } from ' + chr(39) + 'react' + chr(39))
with open(filepath, 'w', encoding='utf-8') as f:
    f.write(c)
print('Fixed')
