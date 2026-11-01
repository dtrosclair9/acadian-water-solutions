/**
 * Complete Home Softener & Filtration System — specification breakdown.
 *
 * Rebuilt from the supplier's system diagram as markup rather than an image so
 * the numbers stay legible on a phone, screen readers get the spec table, and
 * search and AI answer engines can actually read the specifications. A flat
 * JPEG of a spec sheet is invisible to all three.
 *
 * Specs are transcribed verbatim from the supplier sheet. Two things were NOT
 * carried over and the reason is deliberate:
 *   - the valve's supplier brand name, which belongs to another dealer
 *   - three health claims (hydration, nutrient levels, "toxin-free"), which are
 *     structure/function claims we cannot substantiate
 */

const specs: { label: string; value: string }[] = [
  { label: 'Valve flow rate', value: '30 GPM' },
  { label: 'System flow rate', value: '27 GPM' },
  { label: 'Bypass size', value: '1"' },
  { label: 'Softening capacity', value: '48,000 grains' },
  { label: 'Resin volume', value: '1.5 cu ft' },
  { label: 'Media tank size (D x H)', value: '10" x 54"' },
  { label: 'Brine / salt tank size', value: '15" x 35" square' },
  { label: 'Shipping weight, system', value: '125 lbs' },
  { label: 'Shipping weight, brine', value: '17 lbs' },
]

/** Media layers, top to bottom, matched to the cutaway colors. */
const media: { name: string; fill: string; points: string[] }[] = [
  {
    name: 'Granular activated coconut shell carbon',
    fill: '#2F3A40',
    points: [
      'Treats chlorine, chloramine and other contaminants.',
      'Sourced from renewable coconut shell.',
      'Designed for extended filtration capacity.',
    ],
  },
  {
    name: 'USA made high-capacity softening resin',
    fill: '#C8922F',
    points: [
      '10% crosslinked resin removes hardness and lasts longer.',
      'Resists chlorine and oxidation for a longer lifespan.',
      'Delivers high-flow soft water.',
    ],
  },
  {
    name: 'Polishing gravel',
    fill: '#6E7A82',
    points: [
      'Supports the resin bed for even water flow.',
      'Prevents channeling so water distributes evenly.',
    ],
  },
]

const valve = [
  'Ceramic discs for longer life and reduced maintenance.',
  'Configurable through an on-unit program interface.',
  'Long-term memory for program functions.',
  '72-hour memory backup.',
]

const stages: { stage: string; body: string }[] = [
  {
    stage: 'Stage 1',
    body: '5 micron polypropylene sediment pre-filter to extract suspended materials.',
  },
  {
    stage: 'Stages 2–3',
    body: 'Double NSF carbon block filters to absorb chlorine by-products such as chloramine, THM and TCE. The double carbon briquettes filter out organic matter without releasing carbon fines, and prepare the water to enter the reverse osmosis element.',
  },
  {
    stage: 'Stage 4',
    body: 'High rejection (95–99%) NSF thin film composite RO membrane, 100 GPD, to reject a wide spectrum of impurities including total dissolved solids (TDS) and heavy metals.',
  },
  {
    stage: 'Stage 5',
    body: 'In-line NSF coconut shell GAC filter removes dissolved gases, bad taste and odor from the product water.',
  },
  {
    stage: 'Alkaline filter',
    body: 'Balances the pH of the treated water and improves the taste of purified water.',
  },
]

function TankCutaway() {
  return (
    <svg viewBox="0 0 200 420" className="w-full h-auto max-w-[190px]" role="img" aria-labelledby="tank-t tank-d">
      <title id="tank-t">Cutaway of the media tank</title>
      <desc id="tank-d">
        The tank holds three layers: granular activated coconut shell carbon on
        top, high-capacity softening resin in the middle, and polishing gravel at
        the base, with the control valve mounted on top.
      </desc>
      {/* control valve */}
      <rect x="62" y="8" width="76" height="46" rx="6" fill="#12323E" />
      <rect x="76" y="20" width="48" height="22" rx="3" fill="#0087B5" opacity="0.85" />
      {/* tank body */}
      <rect x="46" y="60" width="108" height="344" rx="52" fill="#F4F7F3" stroke="#12323E" strokeWidth="3" />
      {/* media layers, clipped to the tank */}
      <clipPath id="tankclip">
        <rect x="46" y="60" width="108" height="344" rx="52" />
      </clipPath>
      <g clipPath="url(#tankclip)">
        <rect x="46" y="70" width="108" height="104" fill="#2F3A40" />
        <rect x="46" y="174" width="108" height="150" fill="#C8922F" />
        <rect x="46" y="324" width="108" height="80" fill="#6E7A82" />
      </g>
      <rect x="46" y="60" width="108" height="344" rx="52" fill="none" stroke="#12323E" strokeWidth="3" />
      {/* layer leader lines */}
      {[122, 249, 364].map((y) => (
        <line key={y} x1="154" y1={y} x2="184" y2={y} stroke="#12323E" strokeWidth="1.5" />
      ))}
      {[122, 249, 364].map((y, i) => (
        <circle key={y} cx="186" cy={y} r="9" fill="#006F9D" />
      ))}
      {[122, 249, 364].map((y, i) => (
        <text key={`n${y}`} x="186" y={y + 4} textAnchor="middle" fill="#FFFFFF" fontSize="11" fontWeight="700">
          {i + 1}
        </text>
      ))}
    </svg>
  )
}

export default function SystemSpec() {
  return (
    <div className="rounded-[4px] border border-zinc-200 bg-white overflow-hidden">
      <div className="border-b border-zinc-200 px-5 py-5 sm:px-7">
        <p className="text-[13px] font-semibold uppercase tracking-[0.07em] text-ink/70">
          Complete Home Package
        </p>
        <h3 className="mt-1 text-2xl font-bold text-ink">
          Complete home softener and filtration system
        </h3>
        <p className="mt-2 text-[15px] text-zinc-600 max-w-2xl">
          A softener with in-tank filtration, a five stage reverse osmosis system
          for drinking water, and an alkaline filter. Your water test determines
          whether this configuration fits your home.
        </p>
      </div>

      {/* cutaway + media layers */}
      <div className="px-5 py-7 sm:px-7 grid gap-8 md:grid-cols-[190px_1fr] items-start">
        <div className="mx-auto md:mx-0">
          <TankCutaway />
        </div>
        <div>
          <h4 className="text-[13px] font-semibold uppercase tracking-[0.07em] text-ink/70">
            What is inside the tank
          </h4>
          <ol className="mt-4 space-y-5">
            {media.map((m, i) => (
              <li key={m.name} className="flex gap-3.5">
                <span
                  className="mt-0.5 w-6 h-6 rounded-full bg-primary text-white text-[12px] font-bold grid place-items-center shrink-0"
                  aria-hidden="true"
                >
                  {i + 1}
                </span>
                <div>
                  <p className="font-bold text-ink text-[15px] flex items-center gap-2">
                    <span
                      className="inline-block w-3 h-3 rounded-sm border border-black/10"
                      style={{ backgroundColor: m.fill }}
                      aria-hidden="true"
                    />
                    {m.name}
                  </p>
                  <ul className="mt-1.5 space-y-1 text-[14px] text-zinc-600 leading-relaxed">
                    {m.points.map((p) => (
                      <li key={p}>{p}</li>
                    ))}
                  </ul>
                </div>
              </li>
            ))}
          </ol>

          <h4 className="mt-7 text-[13px] font-semibold uppercase tracking-[0.07em] text-ink/70">
            Control valve
          </h4>
          <ul className="mt-3 space-y-1 text-[14px] text-zinc-600 leading-relaxed">
            {valve.map((v) => (
              <li key={v}>{v}</li>
            ))}
          </ul>
        </div>
      </div>

      {/* spec table */}
      <div className="border-t border-zinc-200 px-5 py-7 sm:px-7">
        <h4 className="text-[13px] font-semibold uppercase tracking-[0.07em] text-ink/70">
          Softener specifications
        </h4>
        <div className="mt-4 overflow-x-auto">
          <table className="w-full text-left border-collapse min-w-[320px]">
            <caption className="sr-only">
              Manufacturer specifications for the water softener
            </caption>
            <tbody>
              {specs.map((s) => (
                <tr key={s.label} className="border-b border-zinc-100 last:border-0">
                  <th scope="row" className="py-2.5 pr-4 font-normal text-zinc-600 text-[15px]">
                    {s.label}
                  </th>
                  <td className="py-2.5 font-bold text-ink text-[15px] tabular-nums whitespace-nowrap text-right sm:text-left">
                    {s.value}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="mt-3 text-[13px] text-ink/70">
          Flow rates are manufacturer ratings. Actual flow at your fixtures
          depends on your incoming pressure, plumbing and how much water is used
          at once.
        </p>
      </div>

      {/* RO stages */}
      <div className="border-t border-zinc-200 bg-mist px-5 py-7 sm:px-7">
        <h4 className="text-[13px] font-semibold uppercase tracking-[0.07em] text-ink/70">
          Reverse osmosis drinking water, stage by stage
        </h4>
        <ol className="mt-4 space-y-4">
          {stages.map((s) => (
            <li key={s.stage} className="grid gap-1 sm:grid-cols-[130px_1fr] sm:gap-5">
              <p className="font-bold text-primary text-[15px]">{s.stage}</p>
              <p className="text-[14px] text-zinc-600 leading-relaxed">{s.body}</p>
            </li>
          ))}
        </ol>
        <p className="mt-5 text-[13px] text-ink/70">
          Reverse osmosis treats the water delivered through that system, not
          every tap in the house. Filters and the membrane need replacement
          according to the equipment&apos;s requirements.
        </p>
      </div>
    </div>
  )
}
