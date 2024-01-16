import { observer } from 'mobx-react-lite'

export default observer(function guess({ isGuessed, guess, word, exactGuesses, inExactGuesses, currentGuess, guesses, currentWord }) {

    const textboxes = document.querySelectorAll('input');

    // Add an event listener to each text box
    textboxes.forEach((textbox) => {
        textbox.addEventListener('input', (event) => {
            // Prevent the default behavior (auto-scrolling)
            event.preventDefault();

            // Continue with your logic or processing here
        });
    });


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
                    <div id="box" key={i} className={`w-14 h-14 lg:w-16 lg:h-16 border border-gray-400 text-white uppercase font-bold flex items-center justify-center relative ${bgColor}`}>
                        {guess[i]}
                        <input type="text" value="" className={`lg:hidden md:hidden flex w-12 h-12 opacity-0 absolute`} />
                    </div>


                )
            })}
        </div>
    )
})