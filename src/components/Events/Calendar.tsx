function Calendar() {
  return (
    <div className="rounded-3xl border border-[#ffffff82] bg-gradient-to-tr from-[#ffffff1f] from-[3.07%] to-[#ffffff08] to-[96.39%] p-5 shadow-md backdrop-blur-xl">
      <iframe
        src="https://calendar.google.com/calendar/embed?src=c_893d7ec01b0d651ddfadf46f6792b1d470abe97c6d9f33157a1f4be2d4420a51%40group.calendar.google.com&ctz=America%2FChicago"
        title="ACM Calendar"
        height={657}
        width={540}
      />
    </div>
  );
}

export default Calendar;
