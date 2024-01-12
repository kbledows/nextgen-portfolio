"use client";
import Link from 'next/link'
import { observer, useLocalObservable } from 'mobx-react-lite'
import Guess from '../../components/Guess';
import Qwerty from '../../components/Qwerty';
import PuzzleStore from '../stores/PuzzleStore';
import { useEffect } from 'react';


export default observer(function Wordle() {
    let word_def = "https://www.dictionary.com/browse/";
    const store = useLocalObservable(() => PuzzleStore)
    useEffect(() => {
        store.init()
        window.addEventListener('keyup', store.handleKeyup)
        return () => { //Always clean up your event listeners
            window.removeEventListener('keyup', store.handleKeyup)
        }
    }, [store]);
    word_def += store.word;
    return (
        <div className="flex flex-col">
            <div className="flex flex-row">
                <div className="flex flex-col bg-[#344E41] h-screen w-screen items-center justify-center">
                    <h1 className="text-5xl lg:text-6xl font-bold uppercase text-transparent bg-clip-text bg-gradient-to-br from-blue-400 to-green-400">Konordle</h1>
                    {store.guesses.map((_, i) => (
                        <Guess
                            key={i}
                            word={store.word}
                            guess={store.guesses[i]}
                            isGuessed={i < store.currentGuess}
                            exactGuesses={store.exactGuesses}
                            inExactGuesses={store.inexactGuesses}
                            currGuess={store.currentGuess}
                            guesses={store.guesses}
                            currentWord={i}
                        />
                    ))}
                    {store.won && <h3 className="text-md lg:text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-blue-400 to-green-400">You Won!</h3>}
                    {store.lost && <h3 className="text-md lg:text-2xl font-bold text-red-600">You Lost <a href={word_def} rel="noopener noreferrer" target="_blank" className="text-md lg:text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-blue-400 to-green-400">{store.word} </a></h3>}
                    {(store.won || store.lost) && (
                        <button onClick={store.init} className="btn bg-[#14213d] text-[#DAD7CD] hover:text-[#344E41] hover:border-[#588157] hover:border-2">Play Again</button>
                    )}
                    {(store.won || store.lost) && (store.guesses.map((_, i) => (
                        <p className="text-sm" key={store.colors}>{store.colors[i]}</p>)
                    ))}
                    {(store.won || store.lost) && (<p>{store.currentGuess}/6 Konordle</p>)}
                    {(store.won || store.lost) && (<br></br>) && (<p>https://bledowski.vercel.app/</p>)}
                    <Qwerty
                        word={store.word}
                        guess={store.guesses}
                        currentGuess={store.currentGuess}
                        exactGuesses={store.exactGuesses}
                    />
                </div>
            </div>
            {/* DEBUG MENU
            <p>word: {store.word}</p>
            <p>guesses: {JSON.stringify(store.guesses)}</p>
            <p>exact_guesses: {JSON.stringify(store.exactGuesses)}</p>
            <p>in_exact_guesses: {JSON.stringify(store.inexactGuesses)}</p>
            <p>ALL_guesses: {JSON.stringify(store.allGuesses)}</p>
            <p>colors: {JSON.stringify(store.colors)}</p> */}
        </div>
    )
})