export default function Guess({isGuessed, guess, word}){
    return (
        <div className="grid grid-cols-5 gap-2 my-1">
            {new Array(5).fill(0).map((_,i) => {
                let bgColor = "bg-[#14213d]" //blue, unguessed
                if (isGuessed === true) {
                    bgColor = 'bg-[#787c7f]'; //gray, incorrect letter
                    if (guess[i] == word[i]){ //green, correct letter & spot
                        bgColor = "bg-[#6ca965]"
                    }
                    else if (word.includes(guess[i])){ //yellow, correct letter 
                        bgColor = "bg-[#c8b653]"
                    }
                }
                return (
                    <div className={`w-14 h-14 lg:w-16 lg:h-16 border border-gray-400 text-white uppercase font-bold flex items-center justify-center ${bgColor}`}>
                        {guess[i]}
                    </div>
                )  
            })}
        </div>
    )
}