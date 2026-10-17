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

def find_blurs(n):
    name = n.get('name', '').encode('ascii', 'replace').decode('ascii')
    effs = n.get('effects', [])
    fills = n.get('fills', [])
    bbox = n.get('absoluteBoundingBox') or {}
    has_blur = any(e.get('type') == 'LAYER_BLUR' for e in effs)
    has_grad = any(f.get('type') in ['GRADIENT_LINEAR', 'GRADIENT_RADIAL'] for f in fills)
    if has_blur or 'Gradient' in name or 'Blur' in name or 'Ellipse' in name:
        blurs = [e.get('radius') for e in effs if e.get('type') == 'LAYER_BLUR']
        print(f"{n.get('id'):<10} | {name:<30} | y={bbox.get('y',0):<7.1f} | x={bbox.get('x',0):<7.1f} | w={bbox.get('width',0):<7.1f} | h={bbox.get('height',0):<7.1f} | blur={blurs}")
    for c in n.get('children', []):
        find_blurs(c)

find_blurs(root)
