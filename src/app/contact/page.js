import Link from 'next/link'
import Navbar from '@/components/Navbar';
import avatar from 'public/face-suit.png';
import connect from 'public/shake.png';
import Image from 'next/image';

const Contact = () => {
    return (
        <div className="flex px-4 min-h-screen flex-col items-center pt-20 px-12 bg-[#344E41]">
            <div className="hero bg-[#A3B18A] rounded-lg text-[#344E41] max-w-7xl">
                <div className="hero-content flex-col lg:flex-row">
                    <Image src={connect} className="w-fill md:w-72 lg:w-80 rounded-lg" />
                    <div>
                        <h2 className="text-xl md:text-3xl lg:text-5xl font-bold text-white drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]">Contact</h2>
                        <p className="py-6">Welcome to my contact page!</p>
                        <p>"Got a project in mind or just want to connect? Drop me a line! Whether its about collaboration opportunities, inquiries, or just to say hello, Im all ears.</p>
                        <div className='my-5 items-center'>
                            <div className="flex flex-row gap-5">
                                <a className="transform transition rounded-full duration-700 hover:scale-150 hover:text-[#582f0e]" href="https://github.com/kbledows"><svg xmlns="http://www.w3.org/2000/svg" width="75" height="75" viewBox="0 0 64 64" className="fill-current"><path d="M32 1.7998C15 1.7998 1 15.5998 1 32.7998C1 46.3998 9.9 57.9998 22.3 62.1998C23.9 62.4998 24.4 61.4998 24.4 60.7998C24.4 60.0998 24.4 58.0998 24.3 55.3998C15.7 57.3998 13.9 51.1998 13.9 51.1998C12.5 47.6998 10.4 46.6998 10.4 46.6998C7.6 44.6998 10.5 44.6998 10.5 44.6998C13.6 44.7998 15.3 47.8998 15.3 47.8998C18 52.6998 22.6 51.2998 24.3 50.3998C24.6 48.3998 25.4 46.9998 26.3 46.1998C19.5 45.4998 12.2 42.7998 12.2 30.9998C12.2 27.5998 13.5 24.8998 15.4 22.7998C15.1 22.0998 14 18.8998 15.7 14.5998C15.7 14.5998 18.4 13.7998 24.3 17.7998C26.8 17.0998 29.4 16.6998 32.1 16.6998C34.8 16.6998 37.5 16.9998 39.9 17.7998C45.8 13.8998 48.4 14.5998 48.4 14.5998C50.1 18.7998 49.1 22.0998 48.7 22.7998C50.7 24.8998 51.9 27.6998 51.9 30.9998C51.9 42.7998 44.6 45.4998 37.8 46.1998C38.9 47.1998 39.9 49.1998 39.9 51.9998C39.9 56.1998 39.8 59.4998 39.8 60.4998C39.8 61.2998 40.4 62.1998 41.9 61.8998C54.1 57.7998 63 46.2998 63 32.5998C62.9 15.5998 49 1.7998 32 1.7998Z" /></svg></a>
                                <a className="transform transition rounded-full duration-700 hover:scale-150 hover:text-[#582f0e]" href="https://www.linkedin.com/in/konrad-bledowski/" rel="noopener noreferrer" target="_blank"><svg fill="#1C2033" width="75" height="75" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" className="fill-current"><path d="M58.5016 1H5.60156C3.10156 1 1.10156 3 1.10156 5.5V58.5C1.10156 60.9 3.10156 63 5.60156 63H58.3016C60.8016 63 62.8016 61 62.8016 58.5V5.4C63.0016 3 61.0016 1 58.5016 1ZM19.4016 53.7H10.3016V24.2H19.4016V53.7ZM14.8016 20.1C11.8016 20.1 9.50156 17.7 9.50156 14.8C9.50156 11.9 11.9016 9.5 14.8016 9.5C17.7016 9.5 20.1016 11.9 20.1016 14.8C20.1016 17.7 17.9016 20.1 14.8016 20.1ZM53.9016 53.7H44.8016V39.4C44.8016 36 44.7016 31.5 40.0016 31.5C35.2016 31.5 34.5016 35.3 34.5016 39.1V53.7H25.4016V24.2H34.3016V28.3H34.4016C35.7016 25.9 38.6016 23.5 43.1016 23.5C52.4016 23.5 54.1016 29.5 54.1016 37.7V53.7H53.9016Z" /></svg></a>
                                <a className="transform transition rounded-full duration-700 hover:scale-150 hover:text-[#582f0e]" href="mailto:kbled19@gmail.com"><svg fill="#1C2033" className="fill-current" width="75" height="75" id="lni_lni-envelope" xmlns="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 64 64"> <path d="M56,9.6H8c-3.4,0-6.3,2.8-6.3,6.3v32.4c0,3.4,2.8,6.3,6.3,6.3h48c3.4,0,6.3-2.8,6.3-6.3V15.8C62.3,12.4,59.4,9.6,56,9.6zM56,14.1c0.1,0,0.2,0,0.3,0L32,29.7L7.7,14.1c0.1,0,0.2,0,0.3,0H56z M56,49.9H8c-1,0-1.8-0.8-1.8-1.8V18.5l23.4,15c0.7,0.5,1.5,0.7,2.3,0.7c0.8,0,1.6-0.2,2.3-0.7l23.4-15v29.7C57.8,49.2,57,49.9,56,49.9z" /></svg></a>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact;