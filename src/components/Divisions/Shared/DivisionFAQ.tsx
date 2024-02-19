import Image from 'next/image';
import { Division } from './divisionUtil';

type Questions = {
  question: string;
  answer: string;
  images?: string[];
};

type QuestionMap = Record<Division, Array<Questions>>;

const QUESTION_MAP: QuestionMap = {
  education: [
    {
      question: 'What is the application process like?',
      answer:
        'The first step is to fill out our application. Our application consists of general questions intended to give us insight into your previous development and leadership experience. From these applications, we select the most promising candidates for one-on-one interviews. The interview is the last step of the application process. Based on the application and interview, we select the very best candidates to create around 8 teams of 5 people.',
    },
    {
      question: 'How do I stand out during the application process?',
      answer:
        'Be genuine! We want to see your passion for technology and desire to learn. We can only judge your experience and character based on what we see in the application, so fill all of the questions out! Leaving questions blank is a lost opportunity for us to learn more about you.',
    },
  ],
  research: [
    {
      question: 'What is the application process like?',
      answer:
        'The first step is to fill out our application. Our application consists of general questions intended to give us insight into your previous development and leadership experience. From these applications, we select the most promising candidates for one-on-one interviews. The interview is the last step of the application process. Based on the application and interview, we select the very best candidates to create around 8 teams of 5 people.',
    },
    {
      question: 'Do I need to have prior development experience?',
      answer:
        "ACM Projects is designed for those new to software development. Although some experience is great, we're looking for passionate and committed candidates who have a desire to learn and grow in software development",
      images: [
        '/assets/divisions/shared/research_faq_0.png',
        '/assets/divisions/shared/research_faq_1.png',
      ],
    },
    {
      question: 'How do I stand out during the application process?',
      answer:
        'Be genuine! We want to see your passion for technology and desire to learn. We can only judge your experience and character based on what we see in the application, so fill all of the questions out! Leaving questions blank is a lost opportunity for us to learn more about you.',
    },
    {
      question: 'How is ACM Projects structured?',
      answer:
        'You will be placed into a team of five students with a project and a mentor. We will have weekly (and mandatory) build nights every Wednesday from 8:30 pm - 10:00 pm. This is time for you to work with your team, meet with your mentor and learn. Some build nights may include a short tech-related workshop designed to diversify your tech skills.',
    },
    {
      question: 'What is the time commitment?',
      answer:
        "The minimum time commitment is the 1.5 hours required for each weekly build night. Beyond this, you and your team may need extra time to complete your project so it's up to you to schedule the time amongst yourselves.",
    },
  ],
  projects: [
    {
      question: 'What is the application process like?',
      answer:
        'The first step is to fill out our application. Our application consists of general questions intended to give us insight into your previous development and leadership experience. From these applications, we select the most promising candidates for one-on-one interviews. The interview is the last step of the application process. Based on the application and interview, we select the very best candidates to create around 8 teams of 5 people.',
    },
    {
      question: 'Do I need to have prior development experience?',
      answer:
        "ACM Projects is designed for those new to software development. Although some experience is great, we're looking for passionate and committed candidates who have a desire to learn and grow in software development",
      images: [
        '/assets/divisions/shared/proj_faq_0.png',
        '/assets/divisions/shared/proj_faq_1.png',
      ],
    },
    {
      question: 'How do I stand out during the application process?',
      answer:
        'Be genuine! We want to see your passion for technology and desire to learn. We can only judge your experience and character based on what we see in the application, so fill all of the questions out! Leaving questions blank is a lost opportunity for us to learn more about you.',
    },
    {
      question: 'How is ACM Projects structured?',
      answer:
        'You will be placed into a team of five students with a project and a mentor. We will have weekly (and mandatory) build nights every Wednesday from 8:30 pm - 10:00 pm. This is time for you to work with your team, meet with your mentor and learn. Some build nights may include a short tech-related workshop designed to diversify your tech skills.',
    },
    {
      question: 'What is the time commitment?',
      answer:
        "The minimum time commitment is the 1.5 hours required for each weekly build night. Beyond this, you and your team may need extra time to complete your project so it's up to you to schedule the time amongst yourselves.",
    },
  ],
};

type Props = {
  division: Division;
};

export default function DivisionFAQ({ division }: Props) {
  const questions = QUESTION_MAP[division];
  return (
    <div id="faq" className="pt-12 text-[#CACACA]">
      <h1 className="text-4xl ">frequently asked questions</h1>
      <div className="mb-20 h-[1px] w-40 bg-[#cacacab0]" />

      <div className="w-[50rem] text-[#CACACA]">
        {questions.map((faq, i) => (
          <div className="space-y-2 pb-10" key={i}>
            <h1 className="text-2xl font-semibold">{faq.question}</h1>
            <p>{faq.answer}</p>
            {faq.images && (
              <div className="flex py-10">
                {faq.images.map((image, i) => (
                  <Image alt={`${division}_${i}`} src={image} key={i} height="178" width="278" />
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
