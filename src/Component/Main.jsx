import React, { useState, useEffect } from 'react';
import rock from './assets/Rock.svg';
import scissors from './assets/Scissors.svg';
import paper from './assets/Paper.svg';
import Resultopenmodal from './Resultopenmodal';

function Main() {
  const [selectedPiece, setSelectedPiece] = useState(rock);
  const [cpuPiece, setCpuPiece] = useState(rock); // Default CPU piece
  const [showResult, setShowResult] = useState(null);
  const [isUserTurn, setIsUserTurn] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false); // Track whether modal is open

  function handleClick(piece) {
    if (!isModalOpen) { // Check if modal is open
      setSelectedPiece(piece);
      setIsUserTurn(false);
      forCpu(); // Select a random option for the CPU after player selection
    }}

  function forCpu() {
    const options = [rock, paper, scissors];
    const randomIndex = Math.floor(Math.random() * options.length);
    const randomOption = options[randomIndex];
    setCpuPiece(randomOption); // Update CPU's selected piece
    console.log("CPU's selection:", randomOption);
    evaluateResult(selectedPiece, randomOption);
  }
  
  useEffect(() => {
    if (!isUserTurn) {
      forCpu();
    }
  }, [isUserTurn]);
  
  function evaluateResult(playerPiece, cpuPiece) {
    if (
      (playerPiece === rock && cpuPiece === scissors) ||
      (playerPiece === scissors && cpuPiece === paper) ||
      (playerPiece === paper && cpuPiece === rock)
    ) {
      setShowResult("Player 1 wins");
    } else if (
      (cpuPiece === rock && playerPiece === scissors) ||
      (cpuPiece === scissors && playerPiece === paper) ||
      (cpuPiece === paper && playerPiece === rock)
    ) {
      setShowResult("CPU wins");
    } else {
      setShowResult("Draw");
    }
    setIsModalOpen(true); // Open the modal
  }
  function forCpu() {
    const options = [rock, paper, scissors];
    const randomIndex = Math.floor(Math.random() * options.length);
    const randomOption = options[randomIndex];
    setCpuPiece(randomOption); // Update CPU's selected piece
    console.log("CPU's selection:", randomOption);
    evaluateResult(selectedPiece, randomOption);
  }
  
  useEffect(() => {
    if (!isUserTurn) {
      forCpu();
    }
  }, [isUserTurn]);
  
  
  function playAgain() {
    setSelectedPiece(null);
    setCpuPiece(null);
    setShowResult(null);
    setIsUserTurn(true); // Allow the user to play again
    setIsModalOpen(false); // Close the modal
  }

  return (
    <div className="py-10 px-4 grid min-h-screen gap-y-8 md:flex md:justify-center md:items-center md:gap-x-20 lg:gap-x-32">
      {showResult && <Resultopenmodal result={showResult} onPlayAgain={playAgain} />}
      <div className="flex flex-col md:flex-col-reverse justify-center gap-y-4 md:gap-y-8">
        <h1 className="text-blue-500 font-black-ops text-center md:relative md:bottom-[388px]">Player 1</h1>
        <div className="flex justify-center gap-x-4 mt-0 md:relative md:top-10">
          <div className={`flex justify-center ${selectedPiece === rock ? 'border-[#DF2935] border-[1.5px] rounded-md py-2 px-2' : ''}`} onClick={() => handleClick(rock)}>
            <img className="w-16" src={rock} alt="Rock" />
          </div>
          <div className={`flex justify-center ${selectedPiece === paper ? 'border-[#DF2935] border-[1.5px] rounded-md py-2 px-2' : ''}`} onClick={() => handleClick(paper)}>
            <img className="w-16" src={paper} alt="Paper" />
          </div>
          <div className={`flex justify-center ${selectedPiece === scissors ? 'border-[#DF2935] border-[1.5px] rounded-md py-2 px-2' : ''}`} onClick={() => handleClick(scissors)}>
            <img className="w-16" src={scissors} alt="Scissors" />
          </div>
        </div>
        <div className="grid justify-center">
          <img className="w-[140px] md:w-[200px]" src={selectedPiece} alt="Selected Piece" />
        </div>
      </div>
      <div className="md:flex md:items-center md:justify-center md:relative md:bottom-20">
        <h1
          className="text-center text-4xl font-creepster bg-clip-text text-transparent"
          style={{
            backgroundImage: 'linear-gradient(45deg, #F1D302 30%, #C1292E 70%)',
          }}
        >
          VS
        </h1>
      </div>
      <div className="grid justify-center gap-y-4 md:flex md:flex-col">
        <div className="grid justify-center">
          <img className="w-[140px] md:w-[200px]" src={cpuPiece} alt="CPU's Piece" />
        </div>
        <h1 className="text-yellow-400 font-black-ops text-center md:relative md:bottom-[280px]">CPU</h1>
        <div className="flex justify-center gap-x-4">
          <div className={`flex justify-center ${cpuPiece === rock ? 'border-[#DF2935] border-[1.5px] rounded-md py-2 px-2' : ''}`}>
            <img className="w-16" src={rock} alt="Rock" />
          </div>
          <div className={`flex justify-center ${cpuPiece === paper ? 'border-[#DF2935] border-[1.5px] rounded-md py-2 px-2' : ''}`}>
            <img className="w-16" src={paper} alt="Paper" />
          </div>
          <div className={`flex justify-center ${cpuPiece === scissors ? 'border-[#DF2935] border-[1.5px] rounded-md py-2 px-2' : ''}`}>
            <img className="w-16" src={scissors} alt="Scissors" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
