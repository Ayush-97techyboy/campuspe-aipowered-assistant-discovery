import json

with open('C:/Users/ayush/.gemini/antigravity/brain/e67f355d-4c61-4b97-b768-90f343f46a93/scratch/figma_K3IkSJ4AKV5frK4dY0K833.json', 'r', encoding='utf-8') as f:
    data = json.load(f)

doc = data.get('document', data)
def find_node(node, target_id):
    if node.get('id') == target_id:
        return node
    for child in node.get('children', []):
        res = find_node(child, target_id)
        if res:
            return res
    return None

w = find_node(doc, '1:1341')

def dump_node(n, indent=0):
    bbox = n.get('absoluteBoundingBox') or {}
    name = n.get('name', '').encode('ascii', 'replace').decode('ascii')
    print('  '*indent + f"{n.get('id')} {name} type={n.get('type')} bbox={bbox.get('width')}x{bbox.get('height')} @ ({bbox.get('x')}, {bbox.get('y')})")
    if n.get('type') == 'TEXT':
        style = n.get('style', {})
        chars = n.get('characters', '').encode('ascii', 'replace').decode('ascii')
        print('  '*indent + f"  TEXT: {chars} | font={style.get('fontFamily')} {style.get('fontWeight')} {style.get('fontSize')}px lh={style.get('lineHeightPx')}px")
    for c in n.get('children', []):
        dump_node(c, indent+1)

dump_node(w)
