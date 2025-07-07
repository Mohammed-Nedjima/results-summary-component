import React from "react";

const Card = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="bg-[var(--color-neutral-white)] sm:rounded-3xl flex sm:flex-row flex-col w-screen sm:w-[38.5rem] shadow-md">
      {children}
    </div>
  );
};

export default Card;
