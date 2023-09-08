export default function Guess({isGuessed, guess, word}){
    return (
        <div className="grid grid-cols-5 gap-2">
            {new Array(5).fill(0).map((_,i) => {
                let bgColor = "bg-black"
                if (isGuessed === true) {
                    bgColor = 'bg-black';
                    if (guess[i] == word[i]){
                        bgColor = "bg-green-400"
                    }
                    else if (word.includes(guess[i])){
                        bgColor = "bg-yellow-400"
                    }
                }
                return (
                    <div className={`w-16 h-16 border border-gray-400 text-white uppercase font-bold flex items-center justify-center ${bgColor}`}>
                        {guess[i]}
                    </div>
                )  
            })}
        </div>
    )
}