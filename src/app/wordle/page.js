"use client";
import Link from 'next/link'
import { observer, useLocalObservable } from 'mobx-react-lite'
import Guess from '../../components/Guess';
import Qwerty from '../../components/Qwerty';
import PuzzleStore from '../stores/PuzzleStore';
import { useEffect } from 'react';


export default observer(function Wordle() {
    const store = useLocalObservable(() => PuzzleStore)
    useEffect(() => {
        store.init()
        window.addEventListener('keyup', store.handleKeyup)
        
        return () => { //Always clean up your event listeners
            window.removeEventListener('keyup', store.handleKeyup)
        }
    }, [])
    return (
        <div className="flex flex-col">
            <div className="flex flex-row">
                <div className="flex flex-col bg-[#344E41] h-screen w-screen items-center justify-center">
                    <h1 className= "text-5xl lg:text-6xl font-bold uppercase text-transparent bg-clip-text bg-gradient-to-br from-blue-400 to-green-400">Konordle</h1>
                    {store.guesses.map((_,i) =>(
                        <Guess
                        key = {i}
                        word={store.word} 
                        guess={store.guesses[i]} 
                        isGuessed={i < store.currentGuess}
                        />
                    ))}
                    {store.won && <h3 className= "text-md lg:text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-blue-400 to-green-400">You Won!</h3>}
                    {store.lost && <h3 className= "text-md lg:text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-blue-400 to-green-400">You Lost!</h3>}
                    {(store.won || store.lost) && (
                    <button onClick={store.init} className="btn bg-[#14213d] text-[#DAD7CD] hover:text-[#344E41] hover:border-[#588157] hover:border-2">Play Again</button>
                    )}
                    <Qwerty
                    word={store.word} 
                    guess={store.guesses} 
                    currentGuess={store.currentGuess}
                    />
                </div>
            </div>
            <h1>won/loss</h1>
                <p>word: {store.word}</p>
                guesses: {JSON.stringify(store.guesses)}
        </div>
    )
})