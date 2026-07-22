import React from 'react';

export const Timeline = ({ eyebrow, headline, ctaLabel, data }) => {
  return (
    <section className="bg-[#f6f7fb] px-6 py-24 text-slate-900 md:px-12 lg:px-16">
      <div className="mx-auto max-w-[1400px]">
        <div className="mb-16 flex max-w-3xl flex-col gap-6">
          <span className="inline-flex w-fit rounded-full border border-[#1a44e5]/15 bg-white px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.22em] text-[#1a44e5]">
            {eyebrow}
          </span>
          <h2 className="max-w-2xl text-4xl font-semibold leading-tight text-slate-950 md:text-5xl lg:text-[3.6rem]">
            {headline}
          </h2>
          <a
            href="#"
            className="inline-flex w-fit items-center gap-2 rounded-full bg-[#1a44e5] px-7 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#1236bd]"
          >
            {ctaLabel}
            <span aria-hidden="true">&rarr;</span>
          </a>
        </div>

        <div className="relative pl-6 md:pl-10">
          <div className="absolute left-0 top-2 h-[calc(100%-1rem)] w-px bg-gradient-to-b from-[#1a44e5] via-[#8eb0ff] to-transparent md:left-4" />

          <div className="flex flex-col gap-10">
            {data.map((item, index) => (
              <article key={item.title} className="relative">
                <div className="absolute -left-[1.95rem] top-8 flex h-8 w-8 items-center justify-center rounded-full border border-[#1a44e5]/20 bg-white shadow-[0_10px_35px_rgba(26,68,229,0.12)] md:-left-[2.9rem]">
                  <div className="h-3 w-3 rounded-full bg-[#1a44e5]" />
                </div>

                <div className="rounded-[2rem] border border-slate-200/80 bg-white p-8 shadow-[0_20px_60px_rgba(15,23,42,0.06)] md:p-10">
                  <div className="mb-6 flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
                    <div>
                      <p className="mb-2 text-sm font-semibold uppercase tracking-[0.22em] text-[#1a44e5]">
                        Step {index + 1}
                      </p>
                      <h3 className="text-2xl font-semibold text-slate-950 md:text-3xl">
                        {item.title}
                      </h3>
                    </div>
                    <div className="text-[4.5rem] font-semibold leading-none text-slate-100 md:text-[6rem]">
                      0{index + 1}
                    </div>
                  </div>

                  <div className="max-w-3xl text-base leading-8 text-slate-600 md:text-lg">
                    {item.content}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
