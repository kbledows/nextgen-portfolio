import Link from 'next/link'
import Navbar from '@/components/Navbar';
import js from 'public/Modern_icons/javascript.png';
import css from 'public/Modern_icons/css3.png';
import github from 'public/Modern_icons/github.png';
import gitlab from 'public/Modern_icons/gitlab.png';
import html5 from 'public/Modern_icons/html5.png';
import java from 'public/Modern_icons/java.png';
import linux from 'public/Modern_icons/linux.png';
import kubernetes from 'public/Modern_icons/kubernets.png';
import vue from 'public/Modern_icons/vuejs.png';
import vscode from 'public/Modern_icons/visual-studio.png';
import python from 'public/Modern_icons/python.png';
import android from 'public/Modern_icons/globe.png';

import Image from 'next/image';



const Skills = () => {
    return (
        <div className="flex min-h-screen flex-col items-center justify-between pt-20 px-12 lg:p-24 bg-[#344E41]">
            <div className="hero bg-[#A3B18A] rounded-lg text-[#344E41] max-w-7xl mb-5">
                <div className="hero-content flex-col lg:flex-row">
                    <div>
                        <h2 className="text-xl md:text-3xl lg:text-5xl font-bold">Skills</h2>
                        <p className="py-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    </div>
                </div>
            </div>
            {/* <h2 className="text-xl md:text-3xl lg:text-5xl font-bold">ToolKit</h2>
            <span className="flex flex-row space-x-4 space-y-4 ">
                <div >
                    <Image src={js} className='w-24 md:w-36 lg:w-32' />
                    <div className='text-center'>
                        <p>Javascript</p>
                    </div>
                </div>
                <div className=''>
                    <Image src={css} className='w-24 md:w-36 lg:w-32' />
                    <div className='text-center'>
                        <p>CSS</p>
                    </div>
                </div>
                <div >
                    <Image src={github} className='w-24 md:w-36 lg:w-32' />
                    <div className='text-center'>
                        <p>Github</p>
                    </div>
                </div>
                <div >
                    <Image src={gitlab} className='w-24 md:w-36 lg:w-32' />
                    <div className='text-center'>
                        <p>Gitlab</p>
                    </div>
                </div>
                <div >
                    <Image src={html5} className='w-24 md:w-36 lg:w-32' />
                    <div className='text-center'>
                        <p>HTML</p>
                    </div>
                </div>
                <div >
                    <Image src={java} className='w-24 md:w-36 lg:w-32' />
                    <div className='text-center'>
                        <p>Java</p>
                    </div>
                </div>
            </span>
            <span className="flex flex-row space-x-4 space-y-4 mb-12">
                <div >
                    <Image src={python} className='w-24 md:w-36 lg:w-32' />
                    <div className='text-center'>
                        <p>Python</p>
                    </div>
                </div>
                <div >
                    <Image src={linux} className='w-24 md:w-36 lg:w-32' />
                    <div className='text-center'>
                        <p>Linux</p>
                    </div>
                </div>
                <div >
                    <Image src={android} className='w-24 md:w-36 lg:w-32' />
                    <div className='text-center'>
                        <p>Android</p>
                    </div>
                </div>
                <div >
                    <Image src={kubernetes} className='w-24 md:w-36 lg:w-32' />
                    <div className='text-center'>
                        <p>Kubernetes</p>
                    </div>
                </div>
                <div >
                    <Image src={vscode} className='w-24 md:w-36 lg:w-32' />
                    <div className='text-center'>
                        <p>VSCode</p>
                    </div>
                </div>
                <div >
                    <Image src={vue} className='w-24 md:w-36 lg:w-32' />
                    <div className='text-center'>
                        <p>Vue</p>
                    </div>
                </div> */}
        </div >
    )
}
export default Skills;