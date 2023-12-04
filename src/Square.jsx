import React from 'react'

const Square = ({value , onSquareClick}) => {
  return (
    <button className='w-[10vw] h-[10vw] text-[4vw] text-orange-600 border-solid border-4 border-gray-700 bg-black' onClick={onSquareClick}>{value}</button>
  );
}

export default Square