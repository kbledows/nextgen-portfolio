import { observer } from 'mobx-react-lite'
import Link from 'next/link';

export default observer(function Qwerty({ currentGuess, guess, word, exactGuesses }) {

    const rowOne = ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p'];
    const rowTwo = ['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l'];
    const rowThree = ['z', 'x', 'c', 'v', 'b', 'n', 'm'];

    let doneWords = [];
    if (currentGuess > 0) {
        doneWords = guess.slice(0, currentGuess);
    };

    function getColor(letter) {
        if (doneWords.length > 0) {
            for (let i = 0; i < doneWords.length; i++) {
                if (doneWords[i].includes(letter)) {
                    if (word.includes(letter)) {
                        if (exactGuesses.includes(letter)) {
                            return "bg-[#6ca965]";
                        }
                        return "bg-[#c8b653]"; //yellow
                    }
                    else {
                        return "bg-[#787c7f]" //gray
                    }
                }
            }

        }
        return "bg-[#dad7cd]";
    };
    return (
        <div className="h-4 text-black mt-6 lg:mt-1">
            <div className={"flex justify-center  lg:gap-1 lg:my-1 w-full "}>
                {new Array(rowOne.length).fill(0).map((_, i) => {
                    return (
                        <div key={i} >
                            <kbd className={`kbd kbd-md lg:kbd-lg ${getColor(rowOne[i])}`}>{rowOne[i]}</kbd>
                        </div>

                    )
                })}
            </div>
            <div className={"flex justify-center lg:gap-1 lg:my-1 w-full"}>
                {new Array(rowTwo.length).fill(0).map((_, i) => {
                    return (
                        <div key={i} >
                            <p><kbd className={`kbd kbd-md lg:kbd-lg ${getColor(rowTwo[i])}`}>{rowTwo[i]}</kbd></p>
                        </div>

                    )
                })}
            </div>
            <div className={"flex justify-center lg:gap-1 lg:my-1 w-full"}>
                {new Array(rowThree.length).fill(0).map((_, i) => {
                    return (
                        <div key={i} >
                            <kbd className={`kbd kbd-md lg:kbd-lg ${getColor(rowThree[i])}`}>{rowThree[i]}</kbd>
                        </div>

                    )
                })}
            </div>
        </div>

    )

})