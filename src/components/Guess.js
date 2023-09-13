export default function Guess({ isGuessed, guess, word, exactGuesses, inExactGuesses, currentGuess, guesses, currentWord }) {

    // function getExactGuessesForThis() {
    //     return (
    //         word
    //             .split('')
    //             // if any guesses include this letter in this position/index
    //             .filter((letter, i) => {
    //                 return guesses
    //                     .slice(0, currentWord)
    //                     .map((word) => word[i])
    //                     .includes(letter)
    //             })
    //     )
    // }

    // function getInExactGuessesForThis() {
    //     return word
    //         .split('')
    //         .filter((letter) => guess.includes(letter))
    // }

    // function getNumLetterInExactGuesses(letter) {
    //     let counter = 0;
    //     for (let i = 0; i < getExactGuessesForThis().length; i++) {
    //         if (getExactGuessesForThis()[i] == letter) {
    //             counter += 1;
    //         }
    //     }
    //     return counter;
    // }

    // function isYellow(letter) {
    //     if (word.includes(letter)) {
    //         if (getExactGuessesForThis().includes(letter)) {
    //             if ((word.split(letter).length - 1) > (getNumLetterInExactGuesses(letter))) {
    //                 return "bg-[#c8b653]"; //yellow, exists in exactGuesses and again in the word
    //             }
    //             else {

    //                 return "bg-[#787c7f]"; //gray, exists in exactGuesses but no more in word
    //             }
    //         }
    //         return "bg-[#c8b653]"; //yellow, doesnt exist in exactGuesses
    //     }
    //     return "bg-[#787c7f]"; //gray, doesn't exist in the word at all
    // }

    function getExactGuesses() {
        let exacts = ""
        for (let i = 0; i < guess.length; i++) {
            if (guess[i] == word[i]) {
                exacts += guess[i]
            }
        }
        return exacts
    }
    function count(str, find) {
        return (str.split(find)).length - 1;
    }
    function findNthIndexOfCharacter(str, char, n) {
        let index = -1;
        for (let i = 0; i < str.length; i++) {
            if (str[i] === char) {
                n--;
                if (n === 0) {
                    index = i;
                    break;
                }
            }
        }
        return index;
    }

    function isYellow(letter, index) {
        //true = yellow, false = gray
        //first check if its already been marked green
        if (getExactGuesses().includes(letter)) {
            if (count(getExactGuesses(), letter) < count(word, letter)) { //not all [i] have been found
                if (count(guess, letter) > count(word, letter)) { //less letters in guess than in word
                    let num_left = (count(word, letter) - count(guess, letter)) //number of characters we need yellow
                    if (index == findNthIndexOfCharacter(guess, letter, num_left)) {
                        return true;
                    }
                }
            }
        }
        //2 > 1, so only the first letter is yellow
        //CALLS
        //LOAFS
        //Only first L should be yellow
        if (count(guess, letter) > count(word, letter)) { //less letters in guess than in word
            let num_left = (count(guess, letter) - count(word, letter)) //number of characters we need yellow
            if (index == findNthIndexOfCharacter(guess, letter, num_left)) {
                return true;
            }
            return false;
        }
        return true;
    }

    return (
        <div className="grid grid-cols-5 gap-2 my-1">
            {new Array(5).fill(0).map((_, i) => {
                let bgColor = "bg-[#344E41]" //blue, unguessed
                if (isGuessed === true) {
                    bgColor = 'bg-[#787c7f]'; //gray, incorrect letter
                    if (guess[i] == word[i]) { //green, correct letter & spot
                        bgColor = "bg-[#6ca965]"
                    }
                    else if (word.includes(guess[i])) { //yellow, correct letter, wrong spot
                        if (isYellow(guess[i], i)) {
                            bgColor = "bg-[#c8b653]"
                        }
                    }
                }
                return (
                    <div key={i} className={`w-14 h-14 lg:w-16 lg:h-16 border border-gray-400 text-white uppercase font-bold flex items-center justify-center ${bgColor}`}>
                        {guess[i]}
                    </div>


                )
            })}
        </div>
    )
}