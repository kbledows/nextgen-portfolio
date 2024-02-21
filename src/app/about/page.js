import Link from 'next/link'
import Navbar from '@/components/Navbar';
import avatar from 'public/face-suit.png';
import Image from 'next/image';


const About = () => {
    return (
        <div className="flex px-4 min-h-screen flex-col items-center justify-between pt-20 lg:px-12 bg-[#344E41]">
            <div className="hero bg-[#A3B18A] rounded-lg text-[#344E41] max-w-7xl">
                <div className="hero-content flex-col lg:flex-row">
                    <Image src={avatar} className="w-fill md:w-72 lg:w-80 rounded-lg shadow-2xl" />
                    <div>
                        <h2 className="text-xl md:text-3xl lg:text-5xl font-bold text-white drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]">About Me</h2>
                        <p className="py-6">I am a software engineer with a passion for solving complex problems and creating intuitive and user-friendly applications. </p>
                        <p>I have a strong foundation in computer science principles and a track record of delivering high-quality software on time and within budget. I am constantly learning and staying up-to-date with the latest technologies and industry best practices, and I am always looking for new challenges and opportunities to grow as a software engineer.</p>
                    </div>
                </div>
            </div>
            <div className="hero bg-[#A3B18A] rounded-lg text-[#344E41] max-w-7xl mt-10 py-7">
                <div className="hero-content flex-col lg:flex-row">
                    <div>
                        <h2 className="text-xl md:text-3xl lg:text-5xl font-bold text-center text-white drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]">My Personal Timeline</h2>
                        {/* <div className='flex flex-col justify-between space-y-5 mt-5 text-white'>
                            <div tabIndex={0} className="collapse bg-[#344E41] text-primary-content focus:bg-[#582f0e] focus:text-secondary-content lg:px-72 text-center">
                                <div className="collapse-title">
                                    Click to learn about my education history
                                </div>
                                <div className="collapse-content">
                                    <p>tabIndex={0} attribute is necessary to make the div focusable</p>
                                </div>
                            </div>
                            <div tabIndex={0} className="collapse bg-[#344E41] text-primary-content focus:bg-[#582f0e] focus:text-secondary-content lg:px-72 text-center">
                                <div className="collapse-title">
                                    Focus me to see content
                                </div>
                                <div className="collapse-content">
                                    <p>tabIndex={0} attribute is necessary to make the div focusable</p>
                                </div>
                            </div>
                            <div tabIndex={0} className="collapse bg-[#344E41] text-primary-content focus:bg-[#582f0e] focus:text-secondary-content lg:px-72 text-center">
                                <div className="collapse-title">
                                    Focus me to see content
                                </div>
                                <div className="collapse-content">
                                    <p>tabIndex={0} attribute is necessary to make the div focusable</p>
                                </div>
                            </div>
                        </div> */}
                        <ul className="mt-10 timeline text-xs timeline-vertical justify-center lg:text-lg lg:timeline-horizontal lg:mt-1">
                            <li>
                                <div className="timeline-start lg:text-2xl font-bold text-white drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]">2018</div>
                                <div className="timeline-middle">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
                                </div>
                                <div className="timeline-end timeline-box bg-[#582f0e] text-white">Graduated High School</div>
                                <hr />
                            </li>
                            <li>
                                <hr />
                                <div className="timeline-end lg:text-2xl font-bold text-white drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]">2021</div>
                                <div className="timeline-middle">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
                                </div>
                                <div className="timeline-start timeline-box bg-[#582f0e] text-white">Undergraduate Teaching Assistant</div>
                                <hr />
                            </li>
                            <li>
                                <hr />
                                <div className="timeline-start lg:text-2xl font-bold text-white drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]">2022</div>
                                <div className="timeline-middle">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
                                </div>
                                <div className="timeline-end timeline-box bg-[#582f0e] text-white">Internship @ KnackWorks</div>
                                <div className="mt-24 timeline-end timeline-box bg-[#582f0e] text-white lg:mt-14">Graduated from GMU</div>
                                <hr />
                            </li>
                            <li>
                                <hr />
                                <div className="timeline-end lg:text-2xl font-bold text-white drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]">2023</div>
                                <div className="timeline-middle">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
                                </div>
                                <div className="timeline-start timeline-box bg-[#582f0e] text-white">Software Developer @ Freddie Mac</div>
                                <hr />
                            </li>
                            <li>
                                <hr />
                                <div className="timeline-start lg:text-2xl font-bold text-white drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]">2024</div>
                                <div className="timeline-middle timeline-box bg-[#582f0e] text-white">????</div>
                            </li>
                        </ul>
                        <h3 className="text-lg md:text-xl lg:text-xl font-bold text-center text-white drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)] mt-7" >Timeline Summary</h3>
                        <p className="mt-5 text-center font-semibold">Welcome to my journey timeline! Here, youll find a chronological record of significant milestones and achievements in my life. From graduating college to landing my dream software job, each entry represents a pivotal moment in my personal and professional development. As you explore this timeline, youll gain insights into the experiences that have shaped who I am today. Enjoy the journey through my milestones!</p>
                    </div>
                </div>
            </div>
        </div >

    )
}

export default About;