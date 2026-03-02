"use client";

import { useState } from "react";

type Item = {
  title: string;
  content: string;
};

type AccordionProps = {
  items: Item[];
};

export function Accordion({ items }: AccordionProps) {
  const [openIndex, setOpenIndex] = useState<number>(0);

  return (
    <div className="space-y-4">
      {items.map((item, index) => {
        const isOpen = openIndex === index;
        return (
          <div
            key={item.title}
            className="overflow-hidden rounded-[1.5rem] border border-black/10 bg-white/80 shadow-[0_18px_40px_rgba(17,17,17,0.06)] backdrop-blur"
          >
            <button
              type="button"
              className="flex w-full items-center justify-between gap-6 px-6 py-5 text-left md:px-8"
              aria-expanded={isOpen}
              onClick={() => setOpenIndex(isOpen ? -1 : index)}
            >
              <span className="text-base font-semibold md:text-lg">{item.title}</span>
              <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full border border-black/10 bg-bg text-xl leading-none text-black/70">
                {isOpen ? "−" : "+"}
              </span>
            </button>
            <div
              className={`grid transition-all duration-300 ease-out ${isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}
            >
              <div className="overflow-hidden">
                <p className="px-6 pb-6 text-sm text-black/70 md:px-8 md:text-base">{item.content}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
