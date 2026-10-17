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

root = find_node(doc, '1:792')

def inspect_nodes(n, depth=0):
    bbox = n.get('absoluteBoundingBox') or {}
    y = bbox.get('y', 0)
    x = bbox.get('x', 0)
    w = bbox.get('width', 0)
    h = bbox.get('height', 0)
    name = n.get('name', '').encode('ascii', 'replace').decode('ascii')
    fills = n.get('fills', [])
    effs = n.get('effects', [])
    if 850 <= y <= 1600 and x < 600:
        print(f"{n.get('id'):<10} | {name:<30} | y={y:<7.1f} | x={x:<7.1f} | w={w:<7.1f} | h={h:<7.1f} | fills={len(fills)} | effs={len(effs)}")
        for f in fills:
            if f.get('type') in ['GRADIENT_LINEAR', 'GRADIENT_RADIAL']:
                print('   FILL:', f.get('type'), [(s.get('position'), s.get('color')) for s in f.get('gradientStops', [])])
        for e in effs:
            if e.get('type') == 'LAYER_BLUR':
                print('   BLUR:', e.get('radius'))
    for c in n.get('children', []):
        inspect_nodes(c, depth+1)

inspect_nodes(root)
