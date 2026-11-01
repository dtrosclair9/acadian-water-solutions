/**
 * Flat-vector cutaway of a treated home.
 *
 * Built as inline SVG rather than a generated image on purpose: the homepage's
 * credibility strategy is "we show you real information," and a generated photo
 * of an installation Acadian has not performed would undercut it.
 *
 * Navy outlines, blue water paths, green only as small media markers.
 */
export default function HeroSchematic({ className = '' }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 720 500"
      className={className}
      role="img"
      aria-labelledby="schematic-title schematic-desc"
    >
      <title id="schematic-title">
        How whole-home and drinking-water treatment fit into a house
      </title>
      <desc id="schematic-desc">
        Water enters from the supply line on the left, passes through two
        whole-home treatment tanks, then branches to the shower, laundry and
        kitchen. A separate drinking-water unit sits under the kitchen sink.
      </desc>

      {/* ---------- house shell ---------- */}
      <path
        d="M236 168 L466 62 L696 168 Z"
        fill="#F4F7F3"
        stroke="#12323E"
        strokeWidth="3"
        strokeLinejoin="round"
      />
      <rect x="236" y="168" width="460" height="228" fill="#FFFFFF" stroke="#12323E" strokeWidth="3" />

      {/* ---------- supply line in ---------- */}
      <circle cx="14" cy="366" r="7" fill="#0087B5" />
      <line x1="14" y1="366" x2="120" y2="366" stroke="#0087B5" strokeWidth="6" strokeLinecap="round" />

      {/* ---------- whole-home treatment tanks ---------- */}
      <rect x="120" y="256" width="46" height="140" rx="8" fill="#FFFFFF" stroke="#12323E" strokeWidth="3" />
      <rect x="174" y="256" width="46" height="140" rx="8" fill="#FFFFFF" stroke="#12323E" strokeWidth="3" />
      {/* treatment media */}
      <rect x="126" y="322" width="34" height="68" rx="4" fill="#0087B5" opacity="0.18" />
      <rect x="180" y="322" width="34" height="68" rx="4" fill="#609C35" opacity="0.24" />
      {/* control heads */}
      <rect x="128" y="244" width="30" height="14" rx="4" fill="#12323E" />
      <rect x="182" y="244" width="30" height="14" rx="4" fill="#12323E" />
      <line x1="166" y1="366" x2="174" y2="366" stroke="#0087B5" strokeWidth="6" />

      {/* ---------- treated riser into the house ---------- */}
      <path
        d="M220 366 H228 V206 H236"
        fill="none"
        stroke="#0087B5"
        strokeWidth="6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* ---------- distribution trunk ---------- */}
      <line x1="236" y1="206" x2="612" y2="206" stroke="#0087B5" strokeWidth="6" strokeLinecap="round" />
      <line x1="322" y1="206" x2="322" y2="268" stroke="#0087B5" strokeWidth="5" strokeLinecap="round" />
      <line x1="466" y1="206" x2="466" y2="292" stroke="#0087B5" strokeWidth="5" strokeLinecap="round" />
      <line x1="612" y1="206" x2="612" y2="286" stroke="#0087B5" strokeWidth="5" strokeLinecap="round" />

      {/* ---------- shower ---------- */}
      <rect x="284" y="268" width="76" height="128" rx="6" fill="#FFFFFF" stroke="#12323E" strokeWidth="3" />
      <line x1="306" y1="268" x2="338" y2="268" stroke="#12323E" strokeWidth="4" strokeLinecap="round" />
      <line x1="314" y1="280" x2="312" y2="300" stroke="#0087B5" strokeWidth="3" strokeLinecap="round" />
      <line x1="322" y1="280" x2="322" y2="304" stroke="#0087B5" strokeWidth="3" strokeLinecap="round" />
      <line x1="330" y1="280" x2="332" y2="300" stroke="#0087B5" strokeWidth="3" strokeLinecap="round" />
      <text x="322" y="378" textAnchor="middle" fill="#12323E" fontSize="15" fontWeight="600">Shower</text>

      {/* ---------- laundry ---------- */}
      <rect x="428" y="292" width="76" height="104" rx="6" fill="#FFFFFF" stroke="#12323E" strokeWidth="3" />
      <circle cx="466" cy="334" r="21" fill="none" stroke="#12323E" strokeWidth="3" />
      <circle cx="466" cy="334" r="9" fill="#0087B5" opacity="0.28" />
      <text x="466" y="378" textAnchor="middle" fill="#12323E" fontSize="15" fontWeight="600">Laundry</text>

      {/* ---------- kitchen counter, sink, under-sink unit ---------- */}
      <rect x="556" y="286" width="112" height="110" rx="6" fill="#FFFFFF" stroke="#12323E" strokeWidth="3" />
      <line x1="556" y1="316" x2="668" y2="316" stroke="#12323E" strokeWidth="3" />
      <path d="M598 286 V300 H626" fill="none" stroke="#12323E" strokeWidth="4" strokeLinecap="round" />
      <line x1="612" y1="316" x2="612" y2="332" stroke="#0087B5" strokeWidth="5" strokeLinecap="round" />
      <rect x="578" y="332" width="68" height="48" rx="6" fill="#FFFFFF" stroke="#12323E" strokeWidth="3" />
      <rect x="588" y="343" width="48" height="9" rx="3" fill="#609C35" opacity="0.55" />
      <rect x="588" y="358" width="30" height="9" rx="3" fill="#0087B5" opacity="0.45" />

      {/* ---------- floor ---------- */}
      <line x1="236" y1="396" x2="696" y2="396" stroke="#12323E" strokeWidth="3" />

      {/* ---------- labels ---------- */}
      <text x="14" y="332" fill="#12323E" fontSize="15" fontWeight="700">Water</text>
      <text x="14" y="350" fill="#12323E" fontSize="15" fontWeight="700">supply</text>

      <line x1="170" y1="396" x2="170" y2="412" stroke="#12323E" strokeWidth="1.5" />
      <text x="170" y="430" textAnchor="middle" fill="#12323E" fontSize="15" fontWeight="700">Whole-home</text>
      <text x="170" y="448" textAnchor="middle" fill="#12323E" fontSize="15" fontWeight="700">treatment</text>

      <line x1="612" y1="396" x2="612" y2="412" stroke="#12323E" strokeWidth="1.5" />
      <text x="612" y="430" textAnchor="middle" fill="#12323E" fontSize="15" fontWeight="700">Drinking-water</text>
      <text x="612" y="448" textAnchor="middle" fill="#12323E" fontSize="15" fontWeight="700">treatment</text>

      {/* ---------- caption ---------- */}
      <text x="355" y="484" textAnchor="middle" fill="#4A5A63" fontSize="13">
        Treatment layout illustration. Equipment depends on your water test.
      </text>
    </svg>
  )
}
