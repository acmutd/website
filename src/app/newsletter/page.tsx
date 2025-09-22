import Image from "next/image";

export default function Newsletter() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-[url(/assets/apply/apply-bg.png)] bg-cover p-8 text-white">
      <div className="w-[750px] h-[750px] flex flex-col rounded-2xl bg-gray-300/10 px-10 py-8 gap-y-6 text-primary font-['Gilroy']">

        <div className="flex items-center gap-x-6 pb-2 pt-4">
          <Image
            src="/assets/footer/logo.png"
            alt="Newsletter icon"
            width={96}
            height={64}
            className="w-24 h-16 object-contain"
          />
          <h1 className="text-4xl font-bold underline leading-9">
            Sign up for the ACM Mailing List
          </h1>
        </div>

        <div className="flex flex-col gap-y-1 pt-6">
          <label className="text-2xl font-bold text-stone-50">
            First Name <span className="text-orange-600">*</span>
          </label>
          <input
            type="text"
            placeholder="Please enter your first name."
            className="h-14 rounded-[10px] bg-white px-4 py-2 text-xl text-zinc-700 outline outline-[2.5px] outline-offset-[-1.5px] outline-neutral-200 font-['Arial']"
          />
        </div>

        <div className="flex flex-col gap-y-1 pt-6">
          <label className="text-2xl font-bold text-stone-50">
            Last Name <span className="text-orange-600">*</span>
          </label>
          <input
            type="text"
            placeholder="Please enter your last name."
            className="h-14 rounded-[10px] bg-white px-4 py-2 text-xl text-zinc-700 outline outline-[2.5px] outline-offset-[-1.5px] outline-neutral-200 font-['Arial']"
          />
        </div>

        <div className="flex flex-col gap-y-1 pt-6">
          <label className="text-2xl font-bold text-stone-50">
            Email <span className="text-orange-600">*</span>
          </label>
          <input
            type="email"
            placeholder="Please enter your email."
            className="h-14 rounded-[10px] bg-white px-4 py-2 text-xl text-zinc-700 outline outline-[2.5px] outline-offset-[-1.5px] outline-neutral-200 font-['Arial']"
          />
        </div>

        <div className="mt-auto flex items-center justify-end pb-6">
          <button
            type="submit"
            className="w-44 h-16 rounded-[10px] bg-white text-2xl font-bold text-neutral-900 hover:bg-gray-100 transition"
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
}
