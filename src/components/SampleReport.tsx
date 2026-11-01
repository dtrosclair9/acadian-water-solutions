/**
 * Sample of the written results sheet a homeowner gets after the free test.
 *
 * Every number here is illustrative and labelled as such on the page. This
 * exists because the business has no reviews or install photos yet, so the
 * thing that earns trust is showing the actual artifact of the visit rather
 * than asking people to take our word for it.
 */

type Row = {
  measure: string
  result: string
  unit: string
  /** where the result sits: ok = no action, watch = borderline, treat = recommended */
  state: 'ok' | 'watch' | 'treat'
  note: string
}

const rows: Row[] = [
  {
    measure: 'Hardness',
    result: '14',
    unit: 'grains per gallon',
    state: 'treat',
    note: 'Scale on fixtures and inside the water heater',
  },
  {
    measure: 'Iron',
    result: '1.8',
    unit: 'parts per million',
    state: 'treat',
    note: 'Orange staining in tubs, sinks and laundry',
  },
  {
    measure: 'Hydrogen sulfide',
    result: 'Present',
    unit: 'by odor',
    state: 'treat',
    note: 'The rotten egg smell at the tap',
  },
  {
    measure: 'Chlorine',
    result: '0.0',
    unit: 'parts per million',
    state: 'ok',
    note: 'Not expected on a private well',
  },
  {
    measure: 'pH',
    result: '6.6',
    unit: '',
    state: 'watch',
    note: 'Slightly acidic. Affects which media we use',
  },
  {
    measure: 'Total dissolved solids',
    result: '310',
    unit: 'parts per million',
    state: 'watch',
    note: 'Taste, and sizing for drinking water treatment',
  },
]

const stateStyles: Record<Row['state'], { dot: string; label: string }> = {
  ok: { dot: 'bg-ok', label: 'No treatment needed' },
  watch: { dot: 'bg-accent', label: 'Affects sizing' },
  treat: { dot: 'bg-ink', label: 'Treatment recommended' },
}

export default function SampleReport() {
  return (
    <div className="border-t-2 border-t-ink border-x border-b border-ink/15 bg-white overflow-hidden">
      {/* sheet header */}
      <div className="border-b border-ink/15 px-5 py-4 sm:px-7 sm:py-5">
        <div className="flex items-start justify-between gap-4 flex-wrap">
          <div>
            <p className="text-[13px] font-semibold uppercase tracking-[0.07em] text-ink/70">
              In-home water test results
            </p>
            <p className="mt-1 text-lg font-bold text-ink">Walker, LA · private well</p>
          </div>
          <span className="text-[13px] font-semibold uppercase tracking-[0.07em] text-ink/80 border border-ink/30 rounded-[2px] px-2 py-1">
            Illustrative example
          </span>
        </div>
      </div>

      {/* results */}
      <div className="px-5 sm:px-7">
        <table className="w-full text-left border-collapse">
          <caption className="sr-only">
            Example water test results for a private well, with what each
            measurement affects
          </caption>
          <thead>
            <tr className="text-[13px] uppercase tracking-[0.07em] text-ink/70">
              <th scope="col" className="py-3 font-bold">Measurement</th>
              <th scope="col" className="py-3 font-bold text-right sm:text-left">Result</th>
              <th scope="col" className="py-3 font-bold hidden md:table-cell">What it affects</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((r) => (
              <tr key={r.measure} className="border-t border-ink/10 align-top">
                <th scope="row" className="py-3.5 pr-4 font-semibold text-ink text-[15px]">
                  <span className="flex items-center gap-2.5">
                    <span
                      className={`w-2 h-2 rounded-full shrink-0 ${stateStyles[r.state].dot}`}
                      aria-hidden="true"
                    />
                    {r.measure}
                  </span>
                  <span className="sr-only"> — {stateStyles[r.state].label}</span>
                </th>
                {/* The value must not wrap, but the note beneath it must. Keep
                    nowrap on the value span only: on the cell it is inherited by
                    the note, which then forces the row wider than the card and
                    the card's overflow-hidden clips it on a phone. */}
                <td className="py-3.5 pr-4 text-right sm:text-left tabular-nums">
                  <span className="whitespace-nowrap">
                    <span className="font-bold text-ink text-[15px]">{r.result}</span>{' '}
                    {r.unit && <span className="text-ink/70 text-[13px]">{r.unit}</span>}
                  </span>
                  <span className="block md:hidden whitespace-normal text-[13px] text-zinc-600 mt-1 font-normal text-left">
                    {r.note}
                  </span>
                </td>
                <td className="py-3.5 text-[14px] text-zinc-600 hidden md:table-cell">{r.note}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* legend */}
      <div className="px-5 sm:px-7 pb-5 pt-4 flex flex-wrap gap-x-5 gap-y-2 border-t border-ink/10">
        {(['treat', 'watch', 'ok'] as const).map((s) => (
          <span key={s} className="flex items-center gap-2 text-[12px] text-zinc-600">
            <span className={`w-2 h-2 rounded-full ${stateStyles[s].dot}`} aria-hidden="true" />
            {stateStyles[s].label}
          </span>
        ))}
      </div>

      {/* quote strip */}
      <div className="bg-mist border-t border-ink/15 px-5 py-5 sm:px-7">
        <p className="text-[13px] font-semibold uppercase tracking-[0.07em] text-ink/70">
          Your written quote
        </p>
        <dl className="mt-3 space-y-2 text-[15px]">
          <div className="flex justify-between gap-4">
            <dt className="text-zinc-700">Recommended for this water</dt>
            <dd className="font-semibold text-ink text-right">
              Iron and sulfur system + softener
            </dd>
          </div>
          <div className="flex justify-between gap-4">
            <dt className="text-zinc-700">Installation</dt>
            <dd className="font-semibold text-ink">Included</dd>
          </div>
          <div className="flex justify-between gap-4 border-t border-ink/25 pt-2">
            <dt className="text-zinc-700">Price you see before scheduling</dt>
            <dd className="font-bold text-ink">Itemized, in writing</dd>
          </div>
        </dl>
      </div>
    </div>
  )
}
