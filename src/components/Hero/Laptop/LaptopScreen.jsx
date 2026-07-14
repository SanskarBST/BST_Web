import React from 'react';
import { Html } from '@react-three/drei';

const greenCodeLines = [
  { line: 1, content: "struct group_info init_groups = { .usage = ATOMIC_INIT(2) };" },
  { line: 2, content: "struct group_info *groups_alloc(int gidsetsize) {" },
  { line: 3, content: "    struct group_info *group_info;" },
  { line: 4, content: "    int nblocks;" },
  { line: 5, content: "    int i;" },
  { line: 6, content: "" },
  { line: 7, content: "    nblocks = (gidsetsize + NGROUPS_PER_BLOCK - 1) / NGROUPS_PER_BLOCK;" },
  { line: 8, content: "    /* Make sure we always allocate at least one indirect block pointer */" },
  { line: 9, content: "    nblocks = nblocks ? : 1;" },
  { line: 10, content: "    group_info = kmalloc(sizeof(*group_info) + nblocks*sizeof(gid_t *), GFP_USER);" },
  { line: 11, content: "    if (!group_info)" },
  { line: 12, content: "        return NULL;" },
  { line: 13, content: "    group_info->ngroups = gidsetsize;" },
  { line: 14, content: "    group_info->nblocks = nblocks;" },
  { line: 15, content: "    atomic_set(&group_info->usage, 1);" },
  { line: 16, content: "" },
  { line: 17, content: "    if (gidsetsize <= NGROUPS_SMALL) {" },
  { line: 18, content: "        group_info->blocks[0] = group_info->small_block;" },
  { line: 19, content: "    } else {" },
  { line: 20, content: "        // Allocating larger blocks for massive data streams..." }
];

function CodeScreen() {
  const repeatedLines = [...greenCodeLines, ...greenCodeLines];

  return (
    <div
      style={{
        width: '920px', 
        height: '560px',
        backgroundColor: 'rgba(5, 5, 5, 0.85)',
        border: '3px solid rgba(0, 255, 0, 0.5)',
        boxShadow: '0 0 30px rgba(0, 255, 0, 0.3)',
        overflow: 'hidden',
        borderRadius: '16px'
      }}
    >
      <div className="relative h-full w-full p-8">
        <div className="font-mono text-[18px] leading-8 text-[#00ff00] whitespace-pre" style={{ textShadow: '0 0 10px #00ff00' }}>
          {repeatedLines.map((item, index) => (
            <p key={`code-${index}`}>{item.content}</p>
          ))}
        </div>
      </div>
    </div>
  );
}

export function LaptopScreen({ screenGroupRef, screenDomRef }) {
  return (
    <Html
      transform
      position={[0, 1.0, 0.2]} // Center of the monitor
      scale={0.0055} 
      distanceFactor={1}
      ref={screenGroupRef}
      zIndexRange={[100, 0]}
    >
      <div ref={screenDomRef} style={{ opacity: 1, pointerEvents: 'auto' }}>
        <CodeScreen />
      </div>
    </Html>
  );
}