export default function Qwerty({isGuessed, guess, word}){
    let bgColor = "white";
    let yellows = [];
    let greens = [];
    let grays = [];
    return (
        <>
        <div className="h-4 text-black mt-6 lg:mt-1">
            <div className="flex justify-center gap-0.5 my-1 w-full">
                <kbd className="kbd kbd-sm lg:kbd-lg">q</kbd>
                <kbd className="kbd kbd-sm lg:kbd-lg">w</kbd>
                <kbd className="kbd kbd-sm lg:kbd-lg">e</kbd>
                <kbd className="kbd kbd-sm lg:kbd-lg">r</kbd>
                <kbd className="kbd kbd-sm lg:kbd-lg">t</kbd>
                <kbd className="kbd kbd-sm lg:kbd-lg">y</kbd>
                <kbd className="kbd kbd-sm lg:kbd-lg">u</kbd>
                <kbd className="kbd kbd-sm lg:kbd-lg">i</kbd>
                <kbd className="kbd kbd-sm lg:kbd-lg">o</kbd>
                <kbd className="kbd kbd-sm lg:kbd-lg">p</kbd>
                </div> 
                <div className="flex justify-center gap-1 my-1 w-full">
                <kbd className="kbd kbd-sm lg:kbd-lg">a</kbd>
                <kbd className="kbd kbd-sm lg:kbd-lg">s</kbd>
                <kbd className="kbd kbd-sm lg:kbd-lg">d</kbd>
                <kbd className="kbd kbd-sm lg:kbd-lg">f</kbd>
                <kbd className="kbd kbd-sm lg:kbd-lg">g</kbd>
                <kbd className="kbd kbd-sm lg:kbd-lg">h</kbd>
                <kbd className="kbd kbd-sm lg:kbd-lg">j</kbd>
                <kbd className="kbd kbd-sm lg:kbd-lg">k</kbd>
                <kbd className="kbd kbd-sm lg:kbd-lg">l</kbd>
                </div> 
                <div className="flex justify-center gap-1 my-1 w-full">
                <kbd className="kbd kbd-sm lg:kbd-lg">z</kbd>
                <kbd className="kbd kbd-sm lg:kbd-lg">x</kbd>
                <kbd className="kbd kbd-sm lg:kbd-lg">c</kbd>
                <kbd className="kbd kbd-sm lg:kbd-lg">v</kbd>
                <kbd className="kbd kbd-sm lg:kbd-lg">b</kbd>
                <kbd className="kbd kbd-sm lg:kbd-lg">n</kbd>
                <kbd className="kbd kbd-sm lg:kbd-lg">m</kbd>
            </div>
        </div>
        </>
    )
}
