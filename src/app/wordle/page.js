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