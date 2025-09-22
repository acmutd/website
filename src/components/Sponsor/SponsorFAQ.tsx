"use client";
import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { sponsorFaqs } from "../../../config/sponsors.config";

export default function SponsorFAQ() {
  return (
    <div id="faq" className="pt-12 text-[#CACACA] w-full max-w-4xl items-center flex flex-col">
      <h1 className="text-3xl md:text-4xl mb-10 text-center">
        <span className="underline underline-offset-8 decoration-1">frequently</span> asked questions
      </h1>
      <div className="flex flex-col gap-y-12 w-full max-w-5xl">
        <Accordion type="multiple" className="w-full max-w-4xl text-[#CACACA]">
          {sponsorFaqs.map((faq, i) => (
            <AccordionItem value={`item-${i}`} key={i} className="border-b border-[#cacacab0] pb-4">
              <AccordionTrigger className="flex items-start text-lg md:text-xl text-white hover:no-underline hover:text-[#CACACA] transition-colors">
                <span className="flex items-start text-left">
                  {faq.question}
                </span>
              </AccordionTrigger>
              <AccordionContent className="pl-6">
                <p className="text-base text-[#CACACA] leading-relaxed mb-4">{faq.answer}</p>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  );
}
