import { observer } from 'mobx-react-lite'

export default observer(function Qwerty({currentGuess, guess, word}){
    const rowOne = ['q','w','e','r','t','y','u','i','o','p'];
    const rowTwo = ['a','s','d','f','g','h','j','k','l'];
    const rowThree = ['z','x','c','v','b','n','m'];

    let doneWords = [];
    if (currentGuess > 0){
        doneWords = guess.slice(0,currentGuess);
    };
    function getColor(letter) {
        if (doneWords.length > 0){
            for (let i = 0; i < doneWords.length; i++){
                if (doneWords[i].includes(letter)){
                    if (word.includes(letter)){
                        for (let j = 0; j < doneWords[i].length; j++){
                            if (word[j] === doneWords[i][j]){
                                return "bg-[#6ca965]"; //green
                            }
                        }
                        return "bg-[#c8b653]"; //yellow
                    }
                    else {
                        return "bg-[#787c7f]"
                    }
                }
            }
            
        }
        else{
            return "bg-[#FFFFFF]";
        }
      };
    return (
        <>
        <div className="h-4 text-black mt-6 lg:mt-1">
            <div className={"flex justify-center gap-1 my-1 w-full"}>
                {new Array(rowOne.length).fill(0).map((_,i) => {
                let bgColor = "bg-[#FFFFF]" //blue, unguessed
                return (
                    <div key = {i} >
                        <kbd className={`kbd kbd-sm lg:kbd-md ${getColor(rowOne[i])}`}>{rowOne[i]}</kbd>
                    </div>
                    
                )  
            })}
            </div> 
            <div className={"flex justify-center gap-1 my-1 w-full"}>
                {new Array(rowTwo.length).fill(0).map((_,i) => {
                let bgColor = "bg-[#FFFFF]" //blue, unguessed
                return (
                    <div key = {i} >
                        <kbd className={`kbd kbd-sm lg:kbd-md ${getColor(rowTwo[i])}`}>{rowTwo[i]}</kbd>
                    </div>
                    
                )  
            })}
            </div> 
            <div className={"flex justify-center gap-1 my-1 w-full"}>
                {new Array(rowThree.length).fill(0).map((_,i) => {
                let bgColor = "bg-[#FFFFF]" //blue, unguessed
                return (
                    <div key = {i} >
                        <kbd className={`kbd kbd-sm lg:kbd-md ${getColor(rowThree[i])}`}>{rowThree[i]}</kbd>
                    </div>
                    
                )  
            })}
            </div> 
        </div>
        </>
    )
})