import Link from 'next/link'
import Navbar from '@/components/Navbar';
import Image from 'next/image';

const Projects = () => {
    return (
        <div className="flex min-h-screen flex-col items-center justify-between pt-20 px-12 lg:p-24 bg-[#344E41]">
            <div className="hero bg-[#A3B18A] rounded-lg text-[#344E41] max-w-7xl">
                <div className="hero-content flex-col lg:flex-row">
                    <div>
                        <h2 className="text-xl md:text-3xl lg:text-5xl font-bold">Projects</h2>
                        <p className="py-6">As a software engineer, I have had the opportunity to work on a wide range of projects that have allowed me to showcase my skills and expertise in developing innovative solutions for a variety of problems Some of my notable projects include: </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Projects;