import { useMemo, useState } from 'react'
import { ArrowRight, ChevronDown, Search, X } from 'lucide-react'
import { Link, useSearchParams } from 'react-router-dom'

import { PrimaryButton } from '../components/ProductCard.jsx'
import { Eyebrow } from '../components/layout/SiteChrome.jsx'
import { faqs } from '../data/content.js'

const categories = [
  'All inquiries',
  'Formulations',
  'Harvest & origin',
  'Consultations',
  'Client care',
  'Gifting',
]

export function QnA() {
  const [searchParams] = useSearchParams()
  const requestedCategory = searchParams.get('category')
  const [query, setQuery] = useState('')
  const [category, setCategory] = useState(() =>
    categories.includes(requestedCategory) ? requestedCategory : 'All inquiries',
  )
  const [openItems, setOpenItems] = useState(() => new Set(['gold-infusion']))

  const filteredFaqs = useMemo(() => {
    const normalized = query.trim().toLowerCase()
    return faqs.filter((item) => {
      const matchesCategory = category === 'All inquiries' || item.category === category
      const matchesQuery =
        !normalized ||
        `${item.question} ${item.answer} ${item.category}`.toLowerCase().includes(normalized)
      return matchesCategory && matchesQuery
    })
  }, [category, query])

  function toggleQuestion(id) {
    setOpenItems((current) => {
      const next = new Set(current)
      if (next.has(id)) next.delete(id)
      else next.add(id)
      return next
    })
  }

  return (
    <>
      <section className="bg-ink text-ivory">
        <div className="mx-auto flex subpage-hero max-w-atelier flex-col justify-center px-6 pb-14 pt-14 text-center sm:px-8 sm:pb-16 sm:pt-20 lg:px-12">
          <Eyebrow>Atelier archive · client care</Eyebrow>
          <h1 className="mt-5 font-display text-5xl leading-[.98] tracking-[-0.03em] sm:text-7xl">
            Inquiries &amp;
            <br />
            <em className="font-normal text-goldlight">Revelations</em>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl font-sans text-sm leading-6 text-ivory/65 sm:text-base">
            A considered guide to our botanical formulations, rare fragrances, and atelier
            services.
          </p>
          <div className="mx-auto mt-8 flex max-w-2xl items-center border-b border-champagne/50 pb-2">
            <Search size={18} className="mr-3 shrink-0 text-champagne" />
            <label className="sr-only" htmlFor="faq-search">
              Search the atelier archive
            </label>
            <input
              id="faq-search"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Search the atelier archive"
              className="min-w-0 flex-1 scroll-mt-24 bg-transparent py-3 font-sans text-sm text-ivory outline-none placeholder:text-ivory/40"
            />
            {query && (
              <button
                type="button"
                aria-label="Clear search"
                onClick={() => setQuery('')}
                className="grid h-8 w-8 place-items-center text-ivory/60 hover:text-champagne"
              >
                <X size={15} />
              </button>
            )}
            <span className="hidden pl-4 font-sans text-[9px] uppercase tracking-[0.16em] text-goldlight sm:block">
              Search
            </span>
          </div>
        </div>
      </section>

      <section className="bg-ivory py-14 sm:py-20">
        <div className="mx-auto max-w-atelier px-6 sm:px-8 lg:px-12">
          <div className="flex flex-col gap-6 border-b border-hairline pb-6 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <Eyebrow>Curated inquiries</Eyebrow>
              <h2 className="mt-3 font-display text-4xl text-ink sm:text-5xl">A little guidance.</h2>
              <p className="mt-3 max-w-xl font-sans text-sm leading-6 text-slate">
                Notes on our ingredients, sourcing, private services, and delivery.
              </p>
            </div>
            <p className="font-sans text-xs text-slate">
              {filteredFaqs.length} {filteredFaqs.length === 1 ? 'answer' : 'answers'}
            </p>
          </div>
          <div
            className="mt-6 flex gap-3 overflow-x-auto pb-3"
            role="group"
            aria-label="Filter inquiries by category"
          >
            {categories.map((item) => (
              <button
                key={item}
                type="button"
                onClick={() => setCategory(item)}
                aria-pressed={category === item}
                className={`shrink-0 border-b px-1 pb-3 font-sans text-[9px] uppercase tracking-[0.14em] transition-colors ${category === item ? 'border-champagne text-ink' : 'border-transparent text-slate hover:text-ink'}`}
              >
                {item}
              </button>
            ))}
          </div>

          <div className="mt-8 grid gap-10 lg:grid-cols-[.74fr_1.7fr]">
            <aside className="h-fit bg-ink px-6 py-7 text-ivory sm:px-8">
              <Eyebrow>From the apothecary</Eyebrow>
              <h3 className="mt-4 font-display text-3xl">The alchemy of purity</h3>
              <div className="my-5 h-px w-12 bg-champagne" />
              <p className="font-sans text-sm leading-6 text-ivory/65">
                Every creation is shaped by careful sourcing, considered formulation, and a patient
                approach to craft.
              </p>
              <p className="mt-7 border-t border-white/15 pt-5 font-sans text-[9px] uppercase tracking-[0.17em] text-goldlight">
                Oud · rose · myrrh
              </p>
            </aside>
            <div>
              {filteredFaqs.length > 0 ? (
                <div className="divide-y divide-hairline border-y border-hairline">
                  {filteredFaqs.map((item) => {
                    const isOpen = openItems.has(item.id)
                    const answerId = `answer-${item.id}`

                    return (
                      <article key={item.id} className="py-5 sm:py-6">
                        <button
                          type="button"
                          className="flex w-full items-start justify-between gap-6 text-left"
                          onClick={() => toggleQuestion(item.id)}
                          aria-expanded={isOpen}
                          aria-controls={answerId}
                        >
                          <span>
                            <span className="font-sans text-[9px] uppercase tracking-[0.17em] text-champagne">
                              {item.category}
                            </span>
                            <span className="mt-2 block font-display text-2xl leading-tight text-ink sm:text-[1.7rem]">
                              {item.question}
                            </span>
                          </span>
                          <ChevronDown
                            size={18}
                            className={`mt-5 shrink-0 text-champagne transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
                          />
                        </button>
                        {isOpen && (
                          <div id={answerId} className="max-w-3xl pt-4 font-sans text-sm leading-6 text-slate">
                            {item.answer}
                          </div>
                        )}
                      </article>
                    )
                  })}
                </div>
              ) : (
                <div className="border-y border-hairline py-16 text-center">
                  <p className="font-display text-2xl text-ink">No matching inquiries.</p>
                  <p className="mt-2 font-sans text-sm text-slate">
                    Try a different phrase or category.
                  </p>
                  <button
                    type="button"
                    onClick={() => {
                      setQuery('')
                      setCategory('All inquiries')
                    }}
                    className="mt-5 font-sans text-[10px] uppercase tracking-[0.16em] text-champagne"
                  >
                    Reset filters
                  </button>
                </div>
              )}
              <p className="mt-6 font-sans text-sm text-slate">
                Still have a question?{' '}
                <Link
                  to="/contact"
                  className="ml-1 inline-flex items-center gap-1 text-ink underline decoration-champagne underline-offset-4 hover:text-champagne"
                >
                  Contact client care <ArrowRight size={13} />
                </Link>
              </p>
            </div>
          </div>
        </div>
      </section>

      <section
        id="consultation"
        className="scroll-mt-20 bg-ink px-6 py-16 text-ivory sm:px-8 sm:py-20 lg:px-12"
      >
        <div className="mx-auto max-w-atelier border border-champagne/25 bg-[radial-gradient(ellipse_at_0%_0%,rgba(35,42,112,.65),transparent_58%)] px-6 py-10 sm:px-12 sm:py-14">
          <div className="grid gap-8 md:grid-cols-[1.35fr_.65fr] md:items-center">
            <div>
              <Eyebrow>Private client services</Eyebrow>
              <h2 className="mt-4 font-display text-4xl leading-tight sm:text-5xl">
                Still seeking atelier guidance?
              </h2>
              <p className="mt-4 max-w-2xl font-sans text-sm leading-6 text-ivory/65">
                Our fragrance specialists and skincare formulators are available for considered,
                private guidance.
              </p>
            </div>
            <div className="flex flex-col gap-4 md:items-start">
              <PrimaryButton to="/contact">Contact the atelier</PrimaryButton>
              <p className="font-sans text-xs text-ivory/45">
                Browse the atelier’s appointment notes and service details.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
