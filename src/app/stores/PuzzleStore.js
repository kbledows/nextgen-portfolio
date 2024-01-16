import words from '../wordle/words.json'
import allowedwords from '../wordle/allowed_words.json'

const date = new Date();
let day = date.getDate();

export default {
  word: '', //guessing word
  guesses: [], //guesses
  currentGuess: 0, //current guess
  share_txt: '',
  colors: [],

  get won() {
    return this.guesses[this.currentGuess - 1] === this.word
  },
  get lost() {
    return ((this.currentGuess === 6) && (this.guesses[this.currentGuess - 1] != this.word))
  },
  get allGuesses() {
    return this.guesses.slice(0, this.currentGuess).join('').split('')
  },
  get exactGuesses() {
    return (
      this.word
        .split('')
        // if any guesses include this letter in this position/index
        .filter((letter, i) => {
          return this.guesses
            .slice(0, this.currentGuess)
            .map((word) => word[i])
            .includes(letter)
        })
    )
  },
  get inexactGuesses() {
    return this.word
      .split('')
      .filter((letter) => this.allGuesses.includes(letter))
  },

  share() {
    var text = "";
    for (let i = 0; i < this.colors.length; i++) {
      text += this.colors[i];
      text += "\n";
    }
    if (this.currentGuess === 6 && this.lost) {
      text += ("X/6 Konordle https://bledowski.vercel.app/wordle")
    }
    else {
      text += (this.currentGuess + "/6 Konordle https://bledowski.vercel.app/wordle")
    }
    this.share_txt = text;
    return
  },



  init() {
    this.word = words[day] //single word based on day
    // this.word = words[Math.round(Math.random() * words.length)] //random words
    this.guesses.replace(new Array(6).fill(''))
    this.currentGuess = 0
    this.colors = []
    this.share_txt = ''
  },
  submitGuess() {
    if (allowedwords.includes(this.guesses[this.currentGuess])) {
      console.log("made it here");
      this.color(this.guesses[this.currentGuess]);
      console.log(this.guesses[this.currentGuess]);
      this.currentGuess += 1
      this.share()
    }
  },
  handleKeyup(e) {
    if (this.won || this.lost) {
      return
    }

    if (e.key === 'Enter') {
      return this.submitGuess()
    }
    if (e.key === 'Backspace') {
      this.guesses[this.currentGuess] = this.guesses[this.currentGuess].slice(
        0,
        this.guesses[this.currentGuess].length - 1
      )
      return
    }
    if (this.guesses[this.currentGuess].length < 5 && e.key.match(/^[A-z]$/)) {
      this.guesses[this.currentGuess] =
        this.guesses[this.currentGuess] + e.key.toLowerCase()
    }
  },
  handleBtnPress(btn) {
    if (this.won || this.lost) {
      return
    }
    if (this.guesses[this.currentGuess].length < 5) {
      this.guesses[this.currentGuess] =
        this.guesses[this.currentGuess] + btn.toLowerCase()
    }
  },
  updateShare(letter) {
    this.share_txt += letter
  },
  findNthIndexOfCharacter(str, char, n) {
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
  },

  color(currentWord) {
    let word_colors = ""
    for (let i = 0; i < currentWord.length; i++) {
      let color = "⬜";
      console.log(this.word);
      if (this.word.includes(currentWord[i])) {
        color = "🟨";
      }
      if (currentWord[i] === this.word[i]) {
        color = "🟩";
        word_colors += color;
        continue;
      }
      // else if (this.word.includes(currentWord[i])) {
      //   let exacts = ""
      //   for (let i = 0; i < currentWord.length; i++) {
      //     if (currentWord[i] == this.word[i]) {
      //       exacts += currentWord[i]
      //     }
      //   }
      //   if (exacts.includes(currentWord[i])) {
      //     if (((exacts.split(currentWord[i])).length - 1) < ((this.word.split(currentWord[i])).length - 1)) { //not all i have been found
      //       if (((currentWord.split(currentWord[i])).length - 1) < ((this.word.split(currentWord[i])).length - 1)) {
      //         let num_left = (((this.word.split(currentWord[i])).length - 1) - (currentWord.split(currentWord[i])).length - 1);
      //         if (i == this.findNthIndexOfCharacter(currentWord, currentWord[i], num_left)) {
      //           if (color != "green") {
      //             let color = "yellow";
      //           }
      //         }
      //       }
      //     }
      //   }
      //   if (((currentWord.split(currentWord[i])).length - 1) < ((this.word.split(currentWord[i])).length - 1)) {
      //     let num_left = (((this.word.split(currentWord[i])).length - 1) - (currentWord.split(currentWord[i])).length - 1);
      //     if (i == this.findNthIndexOfCharacter(currentWord, currentWord[i], num_left)) {
      //       if (color != "green") {
      //         let color = "yellow";
      //       }
      //     }
      //     if (color != "green") {
      //       let color = "yellow";
      //     }
      //   }
      // }
      if (color != "🟩") {
        word_colors += color;
      }

    }
    this.colors.push(word_colors);
    return;
  },
}
