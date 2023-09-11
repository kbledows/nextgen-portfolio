import { observer } from 'mobx-react-lite'

export default observer(function Qwerty({isGuessed, guess, word}){
    return (
        <>
        <div className="h-4 text-black mt-6 lg:mt-1">
            <div className={"flex justify-center gap-1 my-1 w-full"}>
                <kbd className="kbd kbd-sm lg:kbd-md">q</kbd>
                <kbd className="kbd kbd-sm lg:kbd-md">w</kbd>
                <kbd className="kbd kbd-sm lg:kbd-md">e</kbd>
                <kbd className="kbd kbd-sm lg:kbd-md">r</kbd>
                <kbd className="kbd kbd-sm lg:kbd-md">t</kbd>
                <kbd className="kbd kbd-sm lg:kbd-md">y</kbd>
                <kbd className="kbd kbd-sm lg:kbd-md">u</kbd>
                <kbd className="kbd kbd-sm lg:kbd-md">i</kbd>
                <kbd className="kbd kbd-sm lg:kbd-md">o</kbd>
                <kbd className="kbd kbd-sm lg:kbd-md">p</kbd>
                </div> 
                <div className="flex justify-center gap-1 my-1 w-full">
                <kbd className="kbd kbd-sm lg:kbd-md">a</kbd>
                <kbd className="kbd kbd-sm lg:kbd-md">s</kbd>
                <kbd className="kbd kbd-sm lg:kbd-md">d</kbd>
                <kbd className="kbd kbd-sm lg:kbd-md">f</kbd>
                <kbd className="kbd kbd-sm lg:kbd-md">g</kbd>
                <kbd className="kbd kbd-sm lg:kbd-md">h</kbd>
                <kbd className="kbd kbd-sm lg:kbd-md">j</kbd>
                <kbd className="kbd kbd-sm lg:kbd-md">k</kbd>
                <kbd className="kbd kbd-sm lg:kbd-md">l</kbd>
                </div> 
                <div className="flex justify-center gap-1 my-1 w-full">
                <kbd className="kbd kbd-sm lg:kbd-md">z</kbd>
                <kbd className="kbd kbd-sm lg:kbd-md">x</kbd>
                <kbd className="kbd kbd-sm lg:kbd-md">c</kbd>
                <kbd className="kbd kbd-sm lg:kbd-md">v</kbd>
                <kbd className="kbd kbd-sm lg:kbd-md">b</kbd>
                <kbd className="kbd kbd-sm lg:kbd-md">n</kbd>
                <kbd className="kbd kbd-sm lg:kbd-md">m</kbd>
            </div>
        </div>
        </>
    )
})