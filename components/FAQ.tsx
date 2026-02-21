"use client";

import { useState } from "react";

type FAQItem = {
  question: string;
  answer: string;
};

type Props = {
  items: FAQItem[];
};

export function FAQ({ items }: Props) {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <div className="space-y-4">
      {items.map((item, index) => {
        const expanded = open === index;
        return (
          <article key={item.question} className="rounded-2xl border border-black/10 bg-white p-5 shadow-soft">
            <button
              className="flex w-full items-center justify-between gap-4 text-left"
              onClick={() => setOpen(expanded ? null : index)}
              aria-expanded={expanded}
            >
              <h3 className="text-lg font-semibold">{item.question}</h3>
              <span className="text-2xl leading-none text-accent">{expanded ? "−" : "+"}</span>
            </button>
            {expanded ? <p className="mt-3 text-black/75">{item.answer}</p> : null}
          </article>
        );
      })}
    </div>
  );
}
