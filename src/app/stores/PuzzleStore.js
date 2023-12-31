import words from '../wordle/words.json'
import allowedwords from '../wordle/allowed_words.json'

const date = new Date();
let day = date.getDate();

export default {
  word: '', //guessing word
  guesses: [], //guesses
  currentGuess: 0, //current guess
  share_txt: '',

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

  get share() {
    return this.share_txt
  },

  init() {
    // this.word = words[day] //single word based on day
    this.word = words[Math.round(Math.random() * words.length)] //random words
    this.guesses.replace(new Array(6).fill(''))
    this.currentGuess = 0
    this.share_txt = ''
  },
  submitGuess() {
    if (allowedwords.includes(this.guesses[this.currentGuess])) {
      this.currentGuess += 1
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
}
