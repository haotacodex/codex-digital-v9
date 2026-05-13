import re
with open('components/sections/ServicesStrip.tsx', encoding='utf-8') as f:
    c = f.read()
c = c.replace('Booleanish | undefined', 'boolean | undefined')
c = c.replace("import type { Booleanish } from 'react'\n", "")
with open('components/sections/ServicesStrip.tsx', 'w', encoding='utf-8') as f:
    f.write(c)
print('Fixed')
