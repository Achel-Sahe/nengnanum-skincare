import { useState } from 'react'
import { ArrowRight, ChevronDown, Clock3, Droplets, Flower2 } from 'lucide-react'
import { Link } from 'react-router-dom'

import { PrimaryButton } from '../components/ProductCard.jsx'
import { Eyebrow, SectionHeading, TextLink } from '../components/layout/SiteChrome.jsx'
import { faqs } from '../data/content.js'

const pillars = [
  {
    icon: Flower2,
    roman: 'I',
    title: 'Nocturnal botanicals',
    text: 'Rare blossoms and aromatic materials, gathered with care at their most expressive moment.',
    note: 'Botanical provenance',
  },
  {
    icon: Droplets,
    roman: 'II',
    title: 'Damascene stills',
    text: 'A slow distillation tradition, carried forward with a considered, modern atelier hand.',
    note: 'Inherited craft',
  },
  {
    icon: Clock3,
    roman: 'III',
    title: 'Horlogerie precision',
    text: 'Measured refinement and patient maturation, where time is part of the composition.',
    note: 'Measured refinement',
  },
]

const stages = [
  {
    no: '01',
    title: 'Predawn harvest',
    text: 'Petals gathered at first light, selected for their delicate aromatic character.',
    detail: '03:00–05:30',
  },
  {
    no: '02',
    title: 'Slow hydro-distillation',
    text: 'Botanical materials are distilled in copper stills through a patient extraction process.',
    detail: 'A slow atelier process',
  },
  {
    no: '03',
    title: 'Rest & maturation',
    text: 'The finished composition rests before presentation in a limited seasonal edition.',
    detail: 'Numbered editions',
  },
]

const figures = [
  ['36+', 'Years of alchemy', 'An atelier story since 1988'],
  ['100%', 'Heirloom petals', 'Botanical tradition'],
  ['420', 'Flacons per batch', 'Numbered & signed'],
  ['24K', 'Colloidal gold', 'A signature detail'],
]

function HeritageFAQ() {
  const heritageFAQs = faqs.filter(({ id }) =>
    ['rose-harvest', 'gold-infusion', 'consultation'].includes(id),
  )
  const [openId, setOpenId] = useState('rose-harvest')

  return (
    <section className="bg-ivory py-20 sm:py-24">
      <div className="mx-auto grid max-w-atelier gap-10 px-6 sm:px-8 lg:grid-cols-[.75fr_1.25fr] lg:px-12">
        <div>
          <Eyebrow>Atelier archive</Eyebrow>
          <h2 className="mt-3 font-display text-4xl leading-tight text-ink sm:text-5xl">
            A few thoughtful answers.
          </h2>
          <p className="mt-4 max-w-md font-sans text-sm leading-6 text-slate">
            Notes on botanical origin, considered formulas, and private consultations.
          </p>
          <Link
            to="/qna"
            className="mt-7 inline-flex items-center gap-2 border-b border-champagne pb-2 font-sans text-[10px] uppercase tracking-[0.17em] text-ink hover:text-champagne"
          >
            Visit all inquiries <ArrowRight size={14} />
          </Link>
        </div>
        <div className="divide-y divide-hairline border-y border-hairline">
          {heritageFAQs.map((item) => {
            const isOpen = openId === item.id
            const answerId = `heritage-answer-${item.id}`

            return (
              <article key={item.id} className="py-5">
                <button
                  type="button"
                  className="flex w-full items-start justify-between gap-5 text-left"
                  aria-expanded={isOpen}
                  aria-controls={answerId}
                  onClick={() => setOpenId((current) => (current === item.id ? null : item.id))}
                >
                  <span>
                    <span className="font-sans text-[9px] uppercase tracking-[0.17em] text-champagne">
                      {item.category}
                    </span>
                    <span className="mt-2 block font-display text-2xl leading-tight text-ink">
                      {item.question}
                    </span>
                  </span>
                  <ChevronDown
                    size={17}
                    className={`mt-5 shrink-0 text-champagne transition-transform ${isOpen ? 'rotate-180' : ''}`}
                  />
                </button>
                {isOpen && (
                  <p id={answerId} className="max-w-3xl pt-4 font-sans text-sm leading-6 text-slate">
                    {item.answer}
                  </p>
                )}
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export function About() {
  return (
    <>
      <section className="overflow-hidden bg-ink text-ivory">
        <div className="mx-auto grid subpage-hero max-w-atelier items-center gap-12 px-6 py-16 sm:px-8 lg:grid-cols-[1.05fr_.95fr] lg:px-12 lg:py-20">
          <div className="max-w-xl">
            <Eyebrow>The heritage monograph</Eyebrow>
            <h1 className="mt-6 font-display text-6xl leading-[.94] tracking-[-0.04em] sm:text-7xl">
              Born in Darkness,
              <br />
              <em className="font-normal text-goldlight">Sculpted in Light.</em>
            </h1>
            <p className="mt-7 max-w-lg font-sans text-sm leading-6 text-ivory/65 sm:text-base sm:leading-7">
              Where Damascene rose traditions meet a contemporary atelier hand. A quiet tribute to
              nocturnal botanicals, patient craft, and luminous ritual.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <PrimaryButton href="#foundation">Explore the chronicle</PrimaryButton>
              <TextLink to="/qna?category=Consultations#faq-search" light>
                Consultation guidance
              </TextLink>
            </div>
            <div className="mt-12 grid max-w-md grid-cols-3 gap-5 border-t border-white/15 pt-5">
              <div>
                <span className="font-display text-2xl text-goldlight">1988</span>
                <p className="mt-1 font-sans text-[9px] uppercase tracking-[0.12em] text-ivory/45">
                  Atelier roots
                </p>
              </div>
              <div>
                <span className="font-display text-2xl text-goldlight">420</span>
                <p className="mt-1 font-sans text-[9px] uppercase tracking-[0.12em] text-ivory/45">
                  Seasonal flacons
                </p>
              </div>
              <div>
                <span className="font-display text-2xl text-goldlight">24K</span>
                <p className="mt-1 font-sans text-[9px] uppercase tracking-[0.12em] text-ivory/45">
                  Gold detail
                </p>
              </div>
            </div>
          </div>
          <div className="relative mx-auto w-full max-w-[450px]">
            <div className="absolute -inset-4 rounded-t-[14rem] border border-champagne/35" />
            <img
              src="/images/heritage-hero.jpg"
              alt="A blue Nengnanum flacon set against a warm, glowing atelier backdrop"
              className="relative aspect-[.88/1] w-full rounded-t-[13rem] object-cover"
            />
            <div className="absolute bottom-5 left-5 bg-midnight/90 px-5 py-4">
              <p className="eyebrow text-champagne">Imperial reserve</p>
              <p className="mt-1 font-display text-xl text-ivory">Damascene Absolute</p>
            </div>
          </div>
        </div>
      </section>

      <section id="foundation" className="bg-ivory py-20 sm:py-24">
        <div className="mx-auto max-w-atelier px-6 sm:px-8 lg:px-12">
          <SectionHeading
            eyebrow="Our foundation & ethos"
            title="The triad of eternal alchemy"
            description="Three principles guide each formulation: botanical provenance, inherited craft, and considered refinement."
            align="center"
          />
          <div className="mt-12 grid gap-8 border-t border-hairline pt-8 md:grid-cols-3">
            {pillars.map(({ icon: Icon, roman, title, text, note }) => (
              <article
                key={title}
                className="border-b border-hairline pb-7 md:border-b-0 md:pb-0 md:pr-8 md:last:border-0"
              >
                <div className="flex items-center justify-between">
                  <Icon size={19} strokeWidth={1.25} className="text-champagne" />
                  <span className="font-display text-xl text-champagne/70">{roman}</span>
                </div>
                <h3 className="mt-5 font-display text-2xl text-ink">{title}</h3>
                <p className="mt-3 font-sans text-sm leading-6 text-slate">{text}</p>
                <p className="mt-6 font-sans text-[9px] uppercase tracking-[0.18em] text-champagne">
                  {note}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-ink py-20 text-ivory sm:py-24">
        <div className="mx-auto grid max-w-atelier items-center gap-12 px-6 sm:px-8 md:grid-cols-2 lg:px-12">
          <div className="relative">
            <div className="absolute -left-4 -top-4 h-full w-full border border-champagne/35" />
            <img
              src="/images/rose-harvest.jpg"
              alt="An artisan pouring a botanical distillation in the atelier"
              loading="lazy"
              className="relative aspect-[1.2/1] w-full object-cover"
            />
          </div>
          <div className="md:pl-4">
            <SectionHeading
              eyebrow="Historical record · archive no. 19"
              title="The sacred rhythm of Damascus roses"
              description="Our rose story begins in the quiet hours of the harvest. Carefully gathered petals are handled with restraint, preserving the character of the botanical material through a patient distillation tradition."
              light
            />
            <TextLink to="/qna" light className="mt-8">
              Read the botanical monograph
            </TextLink>
          </div>
        </div>
      </section>

      <section className="bg-ivory py-20 sm:py-24">
        <div className="mx-auto grid max-w-atelier items-center gap-12 px-6 sm:px-8 md:grid-cols-[.82fr_1.18fr] lg:px-12">
          <div className="mx-auto w-full max-w-[420px] overflow-hidden bg-paper">
            <img
              src="/images/founder-atelier.jpg"
              alt="Atelier founder Mireille Al-Mansoor in her fragrance studio"
              loading="lazy"
              className="aspect-[.86/1] w-full object-cover object-right"
            />
          </div>
          <div>
            <Eyebrow>The master’s conviction</Eyebrow>
            <blockquote className="mt-6 font-display text-3xl italic leading-[1.15] text-ink sm:text-4xl">
              “True luxury lies not in excess, but in the patience of extraction. If an oil requires
              three moons to settle into harmony, we grant it four.”
            </blockquote>
            <p className="mt-6 max-w-2xl font-sans text-sm leading-6 text-slate">
              Mireille Al-Mansoor leads the atelier with a belief in slow craft, botanical precision,
              and formulas made with intention. Her work bridges Damascene heritage with a modern,
              considered approach to fragrance and skincare.
            </p>
            <div className="mt-7 border-t border-hairline pt-5">
              <p className="font-display text-2xl italic text-champagne">Mireille Al-Mansoor</p>
              <p className="mt-1 font-sans text-[9px] uppercase tracking-[0.17em] text-slate">
                Master nose &amp; co-founder · Paris · Damascus · Geneva
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="process" className="bg-ink py-20 text-ivory sm:py-24">
        <div className="mx-auto max-w-atelier px-6 sm:px-8 lg:px-12">
          <SectionHeading
            eyebrow="The sourcing & maturation cycle"
            title="The alchemy of creation"
            description="A measured three-stage journey, from harvest to final flacon."
            light
          />
          <div className="mt-12 grid gap-8 border-t border-white/15 pt-8 md:grid-cols-3">
            {stages.map(({ no, title, text, detail }) => (
              <article key={no} className="border-b border-white/15 pb-7 md:border-0 md:pb-0">
                <span className="font-display text-3xl text-champagne/65">{no}</span>
                <h3 className="mt-5 font-display text-2xl text-ivory">{title}</h3>
                <p className="mt-3 min-h-12 font-sans text-sm leading-6 text-ivory/60">{text}</p>
                <p className="mt-7 border-t border-white/15 pt-4 font-sans text-[9px] uppercase tracking-[0.18em] text-goldlight">
                  {detail}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-paper py-12 sm:py-16">
        <div className="mx-auto grid max-w-atelier grid-cols-2 gap-y-8 px-6 sm:px-8 md:grid-cols-4 lg:px-12">
          {figures.map(([value, label, note]) => (
            <div key={label} className="text-center">
              <p className="font-display text-4xl text-champagne sm:text-5xl">{value}</p>
              <p className="mt-2 font-sans text-[9px] uppercase tracking-[0.16em] text-ink">
                {label}
              </p>
              <p className="mt-1 font-sans text-xs text-slate">{note}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-midnight px-6 py-16 sm:px-8 sm:py-20 lg:px-12">
        <div className="mx-auto grid max-w-atelier gap-10 border border-champagne/25 bg-[radial-gradient(ellipse_at_0%_0%,rgba(35,42,112,.7),transparent_55%)] p-7 sm:p-12 md:grid-cols-[1.2fr_.8fr] md:items-center">
          <div>
            <Eyebrow>Private atelier consultation</Eyebrow>
            <h2 className="mt-4 max-w-2xl font-display text-4xl leading-tight text-ivory sm:text-5xl">
              An invitation to the private salons.
            </h2>
            <p className="mt-4 max-w-xl font-sans text-sm leading-6 text-ivory/65">
              Explore a bespoke fragrance conversation or considered skincare guidance with our
              atelier team.
            </p>
            <PrimaryButton to="/qna?category=Consultations#faq-search" className="mt-7">
              Explore consultation guidance
            </PrimaryButton>
          </div>
          <div className="border-t border-white/15 pt-6 md:border-l md:border-t-0 md:pl-8 md:pt-0">
            <p className="eyebrow text-champagne">Parisian suite</p>
            <p className="mt-2 font-display text-xl text-ivory">By appointment</p>
            <p className="mt-6 eyebrow text-champagne">Damascus sanctuary</p>
            <p className="mt-2 font-display text-xl text-ivory">Private atelier</p>
          </div>
        </div>
      </section>

      <HeritageFAQ />
    </>
  )
}
