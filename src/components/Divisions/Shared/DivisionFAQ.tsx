import Image from 'next/image';
import { DivisionProps } from './divisionUtil';
import { getFAQ } from '@/../config/divisions.config';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function DivisionFAQ(props: DivisionProps) {
  const questions = getFAQ(props);

  return (
    <div id="faq" className="pt-12 text-[#CACACA] w-full max-w-4xl">
      <h1 className="text-3xl md:text-4xl">frequently asked questions</h1>
      <div className="mb-10 md:mb-20 h-[1px] w-40 bg-[#cacacab0]" />

      <Accordion type="multiple" className="w-full max-w-4xl text-[#CACACA]">
        {questions.map((faq, i) => (
          <AccordionItem value={`item-${i}`} key={i} className="border-b border-[#cacacab0] pb-4">
            <AccordionTrigger className="flex items-start text-lg md:text-xl text-white hover:no-underline hover:text-[#CACACA] transition-colors">
              <span className="flex items-start text-left">
                {faq.question}
              </span>
            </AccordionTrigger>
            <AccordionContent className="pl-6">
              <p className="text-base text-[#CACACA] leading-relaxed mb-4">{faq.answer}</p>
              {faq.images && (
                <div className="flex flex-col md:flex-row py-6 md:py-10 gap-4 md:gap-0">
                  {faq.images.map((image, i) => (
                    <Image
                      alt={`${props.division}_${i}`}
                      src={image}
                      key={i}
                      height="178"
                      width="278"
                      className="md:mr-4 w-full md:w-auto"
                    />
                  ))}
                </div>
              )}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
}
