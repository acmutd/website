'use client';

export default function Form() {
  const handleSend = (e) => {
    e.preventDefault()

    console.log('Send email');
  };

  return (
    <form className="flex flex-col gap-y-8 rounded-2xl border-primary/50 bg-gray-300/10 p-12 text-primary">
      <p className="text-lg lg:text-xl">
        Have any questions, want to sponsor us, or just want to say hi? Send us a message
      </p>
      <div className="flex flex-col gap-y-1">
        <label className="text-xl font-semibold lg:text-2xl">name</label>
        <input type="text" className="h-10 rounded-xl text-black" required />
      </div>
      <div className="flex flex-col gap-y-1">
        <label className="text-xl font-semibold lg:text-2xl">email</label>
        <input type="email" className="h-10 rounded-xl text-black" required />
      </div>
      <div className="flex flex-col gap-y-1">
        <label className="text-xl font-semibold lg:text-2xl">message</label>
        <textarea className="h-64 rounded-xl text-black" required />
      </div>
      <div className="flex justify-center">
        <button className="w-fit rounded-xl border-2 px-8 py-2 text-2xl transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 hover:bg-acm-gradient" onClick={(event) => handleSend(event)}>
          Send
        </button>
      </div>
    </form>
  );
}
