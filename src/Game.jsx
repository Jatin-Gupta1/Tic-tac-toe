import React , {useState} from 'react'
import Board from './Board';

const Game = () => {
    const [xIsNext,setxIsNext] = useState(true);
    const [history , setHistory] = useState([Array(9).fill(null)]);
    const [currentMove , setCurrentMove] = useState(0);
    const currentSquares = history[currentMove];

    function handlePlay(nextSquares){
        const nextHistory = [...history.slice(0,currentMove + 1) , nextSquares];
        setHistory(nextHistory);
        setCurrentMove(nextHistory.length -1);
        setxIsNext(!xIsNext);
    }

    function jumpTo(nextMove){
        setCurrentMove(nextMove)
        setxIsNext(nextMove%2 === 0)
    }

    const moves = history.map((squares , move)=>{
        let description;
        if(move > 0){
            description = 'Go to move #' + move;
        }
        else{
            description = 'Go to game start';
        }
        return(
            <li key={move} className='mb-[2vh] bg-black text-center rounded-lg px-[8px]'>
                <button onClick={()=> jumpTo(move)}>{description}</button>
            </li>
        )
    })
  return (
    <div className='w-[100vw] h-[100vh] bg-gray-700 '>
    <div className='flex justify-evenly flex-wrap'>
        <div className=''>
            <Board xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay}></Board>
        </div>
        <div className='mt-[10vh]'>
            <ol className='te text-orange-700 font-semibold text-[2vw]'>{moves}</ol>
        </div>
    </div>
    
    </div>
  )
}



export default Game