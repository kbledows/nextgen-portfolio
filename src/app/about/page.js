import Link from 'next/link'
import Navbar from '@/components/Navbar';
import Image from 'next/image';

const About = () => {
    return (
        <div className="flex min-h-screen flex-col items-center justify-between p-24 bg-[#344E41]">
            <div className="display-block">
                <Image className="rounded-3xl" src="/IMG_8110.jpg" alt="Picture of the author" width={365} height={365}></Image>
                <p>about</p>
                <p>about2</p>
                <p>about3</p>
                <p>about4</p>
            </div>
        </div>
    )
}

export default About;