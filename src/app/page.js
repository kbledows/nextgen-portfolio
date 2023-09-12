import Image from 'next/image'
import Head from 'next/head'
import Link from 'next/link'
import avatar from 'public/IMG_8110.png'
import avatar2 from 'public/face-suit.png'
import pokemon from 'public/bulbasaur.gif'

export default function Home() {
  return (
    <main>
      <div className="flex min-h-screen flex-col items-center justify-center pt-20 px-12 lg:p-24">
        <div className="hero bg-[#A3B18A] rounded-lg text-[#344E41] max-w-7xl">
          <div className="hero-content flex-col lg:flex-row">
            <Image src={avatar2} className="w-fill md:w-72 lg:w-72 rounded-lg shadow-2xl" />
            <div>
              <h1 className="text-xl md:text-4xl lg:text-7xl font-bold">Konrad Bledowski</h1>
              <p className="py-6">Hello 👋 my name is Konrad and welcome to my portfolio website! Please use the buttons at the top of the page to navigate my website, or simply scroll down. Thank you for visiting my website, and I hope you enjoy exploring my past projects and learning more about my skills and experience.</p>
              <button className="btn bg-[#344E41] text-[#DAD7CD] hover:text-[#344E41] hover:border-[#588157] hover:border-2">Get Started</button>
            </div>
          </div>
        </div>
        <div className="hero bg-[#A3B18A] rounded-lg text-[#344E41] mt-7 max-w-7xl">
          <div className="hero-content flex-col lg:flex-row-reverse">
          <Image src={pokemon} className="w-56 md:w-72 lg:w-82 rounded-lg" />
          <div>
              <h1 className="text-xl md:text-4xl lg:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-blue-800 to-green-800 pb-1">Coding for Fun</h1>
              <p className="py-6">Please enjoy a game of Konordle ! I am an avid fan of video games, and an obsession with the famous Wordle has led me to create my own version. Play it by clicking the button below!</p>
              <Link href="/wordle"><button className="btn bg-[#344E41] text-[#DAD7CD] hover:text-[#344E41] hover:border-[#588157] hover:border-2">Konordle</button></Link>
            </div>
          </div>
        </div>
      </div>
    </main >
  )
}
