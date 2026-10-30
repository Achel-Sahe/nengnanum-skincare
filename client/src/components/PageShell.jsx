export function PageShell({ title, description, children }) {
  return (
    <section className="mx-auto w-full max-w-atelier px-5 py-14 sm:px-8 sm:py-20 lg:px-12">
      <header className="max-w-2xl border-b border-hairline pb-8">
        <p className="eyebrow text-champagne">Nengnanum Beauty Atelier</p>
        <h1 className="mt-4 font-display text-4xl font-normal leading-[1.03] tracking-[-0.025em] text-ink sm:text-5xl">
          {title}
        </h1>
        {description && <p className="mt-4 font-sans text-sm leading-6 text-slate sm:text-base">{description}</p>}
      </header>

      {children && <div className="mt-10">{children}</div>}
    </section>
  )
}
