import data from "../data.json";
import Item from "./Item";

const Summary = () => {
  return (
    <div className="basis-1/2 bg-[var(--color-neutral-white)] p-6 rounded-3xl flex flex-col items-center">
      <h2 className="text-[var(--color-neutral-dark-gray-blue)] text-lg font-semibold mb-4">
        Summary
      </h2>
      <ul className="w-full grid gap-4">
        {data.map((item) => (
          <li key={item.category}>
            <Item title={item.category} score={item.score} color={item.color} />
          </li>
        ))}
      </ul>{" "}
      <button className="w-full bg-gradient-to-b from-[var(--color-gradient-light-slate-blue)] to-[var(--color-gradient-light-royal-blue)] text-white font-semibold py-3 rounded-3xl mt-6 transition-all duration-150 relative overflow-hidden before:absolute before:inset-0 before:bg-[var(--color-neutral-dark-gray-blue)] before:transition-opacity before:duration-150 hover:before:opacity-0 before:rounded-3xl">
        <span className="relative z-10">Continue</span>
      </button>
    </div>
  );
};

export default Summary;
