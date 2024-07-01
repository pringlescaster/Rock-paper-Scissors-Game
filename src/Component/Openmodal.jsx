import React from "react";

function Openmodal({ onFightClick }) {
  return (
    <div className="flex h-screen justify-center items-center rounded-md bg-[#020100] ">
      <div className="px-4 py-4 grid justify-center items-center gap-y-10">
        <h1 className="text-[#3772FF] font-black-han-sans text-md text-center">
          Welcome to the Sudden Death Rock, Paper, Scissors Game! <h1>The default selection of this is Rock.</h1>
        </h1>
        <div className="grid gap-y-4">
          <h1 className="text-white text-md font-bold font-open-sans text-center ">
            This is a high-stakes game where you face off against the computer
            in a single round. The rules are simple:
          </h1>
          <div className="grid text-center font-open-sans font-semibold text-md gap-y-2">
            <h1 className="text-[#F1D302]">Rock beats Scissors</h1>
            <h1 className="text-[#F1D302]">Scissors beats Paper</h1>
            <h1 className="text-[#F1D302]">Paper beats Rock</h1>
          </div>
        </div>
        <div className="flex justify-center items-center">
          <button
            onClick={onFightClick}
            className="text-white text-sm font-nosifer bg-[#B30309] px-[12px] py-[10px] rounded-[10px]"
          >
            fight!!!
          </button>
        </div>
      </div>
    </div>
  );
}

export default Openmodal;
