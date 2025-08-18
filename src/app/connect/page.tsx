import Side from '@/components/Contact/Side';
import Form from '@/components/Contact/Form';

export default function Contact() {
  return (
    <div className="flex h-fit flex-col gap-y-56 bg-[url(/assets/apply/apply-bg.png)] bg-cover py-10 pb-48 text-white">
      <main className="flex w-full flex-col items-center gap-x-8 gap-y-10 p-10 md:flex-row md:p-10">
        <Side />
        <Form />
      </main>
    </div>
  );
}
