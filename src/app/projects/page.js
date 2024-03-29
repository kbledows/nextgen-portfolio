import Link from 'next/link'
import Navbar from '@/components/Navbar';
import Image from 'next/image';
import konordle from 'public/konordle.png'
import pong from 'public/pong.avif'

const Projects = () => {
    return (
        <div className="flex px-4 min-h-screen flex-col items-center justify-center pt-20 lg:px-12 bg-[#344E41]">
            <div className="hero bg-[#A3B18A] rounded-lg text-[#344E41] max-w-4xl mb-6">
                <div className="hero-content flex-col lg:flex-row">
                    <div>
                        <h2 className="text-xl md:text-3xl lg:text-5xl font-bold">Projects</h2>
                        <p className="text-lg py-6">As a software engineer, I have had the opportunity to work on a wide range of projects that have allowed me to showcase my skills and expertise in developing innovative solutions for a variety of problems Some of my notable projects include... </p>
                    </div>
                </div>
            </div>
            <div className="hero bg-[#A3B18A] rounded-lg text-[#344E41] max-w-7xl mb-6">
                <div className="hero-content flex-col lg:flex-row">
                    <Image src={konordle} className="w-fill md:w-72 lg:w-82 rounded-lg" />
                    <div>
                        <h2 className="text-xl md:text-3xl lg:text-5xl font-bold">Konordle</h2>
                        <p className="text-lg py-6">Please enjoy a game of Konordle ! A fun take on the massively popular Wordle. <span className='text-[#780000] font-bold italic'> Now with hard mode! </span>Play by clicking the button below! </p>
                        <Link href="/wordle"><button className="btn bg-[#344E41] text-[#DAD7CD] hover:text-[#344E41] hover:border-[#588157] hover:border-2 hover:bg-[#dad7cd]">Konordle</button></Link>
                    </div>
                </div>
            </div>
            <div className="hero bg-[#A3B18A] rounded-lg text-[#344E41] max-w-7xl mb-6">
                <div className="hero-content flex-col lg:flex-row">

                    <div>
                        <h2 className="text-xl md:text-3xl lg:text-5xl font-bold">Ping Pong Score Keeper</h2>
                        <p className="text-lg py-6">In order to keep track of the score in ping pong, I created this useful tool. Simply use the buttons to increment each players score.</p>
                        <Link href="/pong"><button className="btn bg-[#344E41] text-[#DAD7CD] hover:text-[#344E41] hover:border-[#588157] hover:border-2 hover:bg-[#dad7cd]">Ping Pong</button></Link>
                    </div>
                    <Image src={pong} className="w-fill md:w-72 lg:w-96 rounded-lg" />
                </div>
            </div>
        </div >

    )
}


export default Projects;