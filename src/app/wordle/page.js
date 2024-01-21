"use client";
import Link from 'next/link'
import { observer, useLocalObservable } from 'mobx-react-lite'
import Guess from '../../components/Guess';
import Qwerty from '../../components/Qwerty';
import PuzzleStore from '../stores/PuzzleStore';
import CopyToClipboardButton from '../../components/CopyToClipboardButton';
import HardModeTimer from '../../components/HardModeTimer';

import { useState, useEffect } from 'react';


export default observer(function Wordle() {
    const [hardMode, setHardMode] = useState(false);
    const [started, setStarted] = useState(false);
    const [given_time, setTime] = useState(90);
    let final_time = given_time;
    let word_def = "https://www.dictionary.com/browse/";
    const store = useLocalObservable(() => PuzzleStore)
    function changeHard() {
        setHardMode((prevHardMode) => !prevHardMode);
        // console.log(hardMode);
    }
    const changeStart = () => {
        setStarted(true);
        // console.log(started);
    };
    function hideTimer() {
        if (store.won || store.lost) {
            setHardMode(false);
        }
    }
    function reset() {
        document.getElementById('my_modal_1').showModal();
        store.init();
    }
    useEffect(() => {
        store.init()
        window.addEventListener('keyup', store.handleKeyup)
        document.getElementById('my_modal_1').showModal();
        return () => { //Always clean up your event listeners
            window.removeEventListener('keyup', store.handleKeyup)
        }
    }, [store]);
    const updateTime = (newValue) => {
        if (newValue <= 0) {
            final_time = newValue;
            setTime(90);
            changeHard();
        }
    };
    word_def += store.word;

    return (
        <div className="flex flex-col">
            <dialog id="my_modal_1" className="modal modal-bottom sm:modal-middle">
                <div className="modal-box bg-[#0d1b2a]">
                    <h3 className="font-bold text-lg">Hello!</h3>
                    <p className="py-4">Welcome to Konordle. To play simply enter any 5 letter word to attempt a guess at todays mystery word.</p>
                    <p><span className="text-[#ffc300] font-bold">Green</span> letters = the letter exists in the mystery word. </p>
                    <p><span className="text-[#588157] font-bold">Yellow</span> letters = the letter is in the correct spot. </p>
                    <p><span className="text-[#dee2e6] font-bold">Gray</span> letters = the letter does not exist in todays mystery word.</p>
                    <p className="py-3">To enable <span className="text-[#dc2f02] font-bold">HARD MODE</span>, click the toggle below!</p>
                    <p>Press ESC key or click the button below to close</p>
                    <div className="modal-action">
                        <form method="dialog">
                            <input type="checkbox" id="other" className="toggle mr-5" onChange={changeHard} />
                            {/* if there is a button in form, it will close the modal */}
                            <button onClick={changeStart} className="btn">Close</button>
                        </form>
                    </div>
                </div>
            </dialog>
            <div className="flex flex-row">
                <div className="flex flex-col bg-[#344E41] h-screen w-screen items-center justify-center">
                    <h1 className="text-5xl lg:text-6xl font-bold uppercase text-transparent bg-clip-text bg-gradient-to-br from-blue-400 to-green-400">Konordle</h1>
                    <HardModeTimer showTimer={hardMode}
                        time_left={given_time}
                        updateTime={updateTime}
                        started={started}
                        hideTimer={hideTimer} />
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
                        <div><button onClick={reset} className="btn bg-[#14213d] text-[#DAD7CD] hover:text-[#8ac926] hover:border-[#8ac926] hover:border-2">Play Again</button><CopyToClipboardButton textToCopy={store.share_txt} /></div>

                    )}
                    {/* {(store.won || store.lost) && (store.guesses.map((_, i) => (
                        <p className="text-sm" key={store.currentGuess}>{store.colors[i]}</p>)
                    ))} */}
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
        </div >
    )
})