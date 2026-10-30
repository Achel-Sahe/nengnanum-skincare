import { ArrowRight, ArrowUpRight } from 'lucide-react'

import { Eyebrow, SectionHeading } from '../components/layout/SiteChrome.jsx'

// Temporary visuals: reuse existing atelier/catalog images until reseller portraits are provided.
const resellers = [
  { name: 'Risma Zulfi', image: 'founder-atelier.jpg', alt: 'Portrait of reseller Risma Zulfi' },
  { name: 'Nurhalimah', image: 'rose-harvest.jpg', alt: 'Portrait of reseller Nurhalimah' },
  { name: 'Syahla Zalfa Nayara', image: 'heritage-hero.jpg', alt: 'Portrait of reseller Syahla Zalfa Nayara' },
  { name: 'Afifatus Sukmawati', image: 'night-serum.jpg', alt: 'Portrait of reseller Afifatus Sukmawati' },
  { name: 'Rofiqotuzahro', image: 'radiance-cream.jpg', alt: 'Portrait of reseller Rofiqotuzahro' },
  { name: 'Musdalifa', image: 'rose-mist.jpg', alt: 'Portrait of reseller Musdalifa' },
]

const joinResellerUrl = 'https://wa.me/6281248318777'

// Brand icons: lucide v1 no longer ships social logos, so use inline SVGs.
// TODO: replace "#" with each reseller's real profile URLs.
const socialPlatforms = [
  {
    label: 'Facebook',
    path: 'M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z',
  },
  {
    label: 'Twitter',
    path: 'M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z',
  },
  {
    label: 'Instagram',
    path: 'M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z',
  },
  {
    label: 'TikTok',
    path: 'M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z',
  },
]


function ResellerCard({ person, index }) {
  return (
    <article className="group min-w-0">
      <div className="relative overflow-hidden border border-champagne/25 bg-paper">
        <img
          src={`/images/${person.image}`}
          alt={person.alt}
          loading={index > 2 ? 'lazy' : 'eager'}
          className="aspect-[1.2/1] w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.025]"
        />
      </div>
      <div className="pt-5">
        <Eyebrow>Nengnanum Beauty</Eyebrow>
        <h3 className="mt-2 min-h-[2.25rem] font-display text-2xl leading-tight text-ink">{person.name}</h3>
        <div className="mt-3 flex items-center justify-between border-t border-hairline pt-3">
          <span className="font-sans text-[10px] uppercase tracking-[0.18em] text-slate">Reseller</span>
          <span className="font-display text-sm text-champagne">0{index + 1}</span>
        </div>
        <div className="mt-3 flex items-center gap-2">
          {socialPlatforms.map(({ label, path }) => (
            <a
              key={label}
              href="#"
              onClick={(event) => event.preventDefault()}
              title={`${person.name} on ${label}`}
              aria-label={`${person.name} on ${label}`}
              className="grid size-8 place-items-center rounded-full border border-hairline text-slate transition-colors hover:border-champagne hover:text-champagne"
            >
              <svg
                viewBox="0 0 24 24"
                className="size-3.5"
                fill="currentColor"
                aria-hidden="true"
                focusable="false"
              >
                <path d={path} />
              </svg>
            </a>
          ))}
        </div>
      </div>
    </article>
  )
}

export function Team() {
  return (
    <>
      <section className="relative overflow-hidden bg-ink text-ivory">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_72%_46%,rgba(35,42,112,.55),transparent_48%)]" />
        <div className="relative mx-auto grid subpage-hero max-w-atelier items-center gap-12 px-6 py-20 sm:px-8 lg:grid-cols-[1.15fr_.85fr] lg:px-12">
          <div className="max-w-2xl">
            <Eyebrow>The Nengnanum community</Eyebrow>
            <h1 className="mt-6 font-display text-6xl leading-[.96] tracking-[-0.035em] sm:text-7xl">Meet Our Team</h1>
            <p className="mt-5 font-display text-3xl italic text-goldlight sm:text-4xl">A closer connection to beauty.</p>
            <p className="mt-6 max-w-lg font-sans text-sm leading-6 text-ivory/65 sm:text-base">Meet the Nengnanum Beauty resellers.</p>
            <a href="#our-team" className="mt-9 inline-flex items-center gap-2 font-sans text-[10px] uppercase tracking-[0.18em] text-goldlight transition-colors hover:text-champagne">
              Meet the team <ArrowRight size={14} />
            </a>
            <div className="mt-10 border-t border-white/15 pt-4 font-sans text-[9px] uppercase tracking-[0.18em] text-ivory/45">Six resellers · One community</div>
          </div>
          <div aria-hidden="true" className="relative mx-auto hidden aspect-square w-full max-w-[340px] items-center justify-center lg:flex">
            <span className="absolute inset-4 rounded-full border border-champagne/15" />
            <span className="absolute inset-12 rounded-full border border-champagne/25" />
            <span className="relative grid h-36 w-36 place-items-center rounded-full border border-champagne/45 bg-midnight/60 shadow-gold">
              <span className="absolute inset-2 rounded-full border border-champagne/20" />
              <span className="font-display text-7xl text-goldlight">N</span>
            </span>
            <span className="absolute bottom-10 left-1/2 h-14 w-px -translate-x-1/2 rotate-45 bg-champagne/40" />
          </div>
        </div>
      </section>

      <section id="our-team" className="scroll-mt-20 bg-ivory py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-atelier px-6 sm:px-8 lg:px-12">
          <div className="flex flex-col justify-between gap-5 border-b border-hairline pb-6 sm:flex-row sm:items-end">
            <SectionHeading eyebrow="Our people" title="The team" />
            <p className="font-sans text-[10px] uppercase tracking-[0.18em] text-slate">06 resellers</p>
          </div>
          <div className="mt-10 grid gap-x-7 gap-y-12 sm:grid-cols-2 lg:grid-cols-3 lg:gap-y-16">
            {resellers.map((person, index) => <ResellerCard key={person.name} person={person} index={index} />)}
          </div>
        </div>
      </section>

      <section className="bg-ink px-6 py-16 text-ivory sm:px-8 sm:py-20 lg:px-12 lg:py-24">
        <div className="mx-auto max-w-atelier text-center">
          <div aria-hidden="true" className="mx-auto mb-7 grid h-12 w-12 place-items-center rounded-full border border-champagne/55 font-display text-xl text-goldlight">N</div>
          <Eyebrow>Grow with us</Eyebrow>
          <h2 className="mx-auto mt-4 max-w-3xl font-display text-3xl leading-tight sm:text-4xl">Ingin Bergabung Menjadi Reseller Kami</h2>
          <p className="mt-2 font-display text-2xl italic text-goldlight sm:text-3xl">Klik Link Dibawah ini</p>
          <a
            href={joinResellerUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-7 inline-flex min-h-12 items-center justify-center gap-2 bg-champagne px-7 py-4 font-sans text-[10px] font-semibold uppercase tracking-[0.17em] text-ink transition-colors hover:bg-goldlight focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-champagne"
          >
            Join Reseller <ArrowUpRight size={15} />
          </a>
          <p className="mt-4 font-sans text-[9px] uppercase tracking-[0.16em] text-ivory/40">Continue the conversation on WhatsApp</p>
        </div>
      </section>
    </>
  )
}
