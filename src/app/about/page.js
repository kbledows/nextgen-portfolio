import Link from 'next/link'
import Navbar from '@/components/Navbar';
import avatar from 'public/face-suit.png';
import Image from 'next/image';


const About = () => {
    return (
        <div className="flex min-h-screen flex-col items-center justify-between pt-20 px-12 lg:p-24 bg-[#344E41]">
            <div className="hero bg-[#A3B18A] rounded-lg text-[#344E41] max-w-7xl">
                <div className="hero-content flex-col lg:flex-row">
                    <Image src={avatar} className="w-fill md:w-72 lg:w-72 rounded-lg shadow-2xl" />
                    <div>
                        <h2 className="text-xl md:text-3xl lg:text-5xl font-bold">About Me</h2>
                        <p className="py-6">I am a software engineer with a passion for solving complex problems and creating intuitive and user-friendly applications. </p>
                        <p>I have a strong foundation in computer science principles and a track record of delivering high-quality software on time and within budget. I am constantly learning and staying up-to-date with the latest technologies and industry best practices, and I am always looking for new challenges and opportunities to grow as a software engineer.</p>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default About;