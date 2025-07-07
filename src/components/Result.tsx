const Result = () => {
  return (
    <div className="basis-1/2 bg-gradient-to-b from-[var(--color-gradient-light-slate-blue)] to-[var(--color-gradient-light-royal-blue)] p-6 sm:rounded-3xl rounded-b-3xl flex flex-col items-center gap-6">
      <h2 className="text-white/70 text-lg font-semibold">Your Result</h2>
      <div className="bg-gradient-to-b from-[var(--color-gradient-violet-blue)] to-[var(--color-gradient-persian-blue)] rounded-full w-36 h-36 flex flex-col items-center justify-center">
        <h1 className="text-white text-5xl font-bold mb-2">76</h1>
        <p className="text-white/70 text-sm font-semibold">of 100</p>
      </div>
      <p className="text-white text-lg font-bold">Great</p>
      <p className="text-white/70 text-sm text-center">
        You scored higher than 65% of the people who have taken these tests.
      </p>
    </div>
  );
};

export default Result;
