import React from 'react'

function Resultopenmodal({result, onPlayAgain}) {
  return (
    <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-70">
    <div className="bg-white rounded-lg p-8 text-center">
      <h2 className="text-2xl mb-4">{result}</h2>
      <button
        onClick={onPlayAgain}
        className="text-white bg-blue-500 px-4 py-2 rounded"
      >
        Play Again
      </button>
    </div>
  </div>
  )
}

export default Resultopenmodal
