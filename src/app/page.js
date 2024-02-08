import Image from 'next/image'
import Link from 'next/link'
import avatar from 'public/IMG_8110.png'
import pokemon from 'public/bulbasaur.gif'
import art from 'public/art_station.gif'

export default function Home() {
  return (
    <main>
      <div className="flex min-h-screen flex-col items-center justify-center pt-20 px-12 lg:p-24">
        <div className="hero bg-[#A3B18A] rounded-lg text-[#344E41] max-w-7xl">
          <div className="hero-content flex-col lg:flex-row">
            <Image src={avatar} className="w-fill md:w-72 lg:w-72 rounded-lg shadow-2xl" />
            <div>
              <h1 className="text-xl md:text-4xl lg:text-7xl font-bold lg:drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]">Konrad Bledowski</h1>
              <p className="py-6">Hello 👋 my name is <span className='font-bold text-[#dad7cd] drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]'>Konrad</span> and welcome to my portfolio website! Please use the buttons at the top of the page to navigate my website, or simply scroll down. Thank you for visiting my website, and I hope you enjoy exploring my past projects and learning more about my skills and experience.</p>
            </div>
          </div>
        </div>
        <div className="hero bg-[#A3B18A] rounded-lg text-[#344E41] mt-7 max-w-7xl">
          <div className="hero-content flex-col lg:flex-row-reverse">
            <Image src={art} className="w-56 md:w-72 lg:w-82 rounded-lg" />
            <div>
              <h1 className="text-xl md:text-4xl lg:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-blue-800 to-green-800 pb-2 lg:drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]">Coding for Fun</h1>
              <p className="text-lg py-6">Please enjoy a game of Konordle ! A fun take on the massively popular Wordle. <span className='text-[#780000] font-bold italic'> Now with hard mode! </span>Play by clicking the button below! </p>
              <Link href="/wordle"><button className="btn bg-[#344E41] text-[#DAD7CD] hover:text-[#344E41] hover:border-[#588157] hover:border-2 hover:bg-[#dad7cd]">Konordle</button></Link>
            </div>
          </div>
        </div>
      </div>
    </main >
  )
}
