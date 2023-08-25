import { useEffect, useRef } from 'react';
import back_video from '../assets/images/video.mp4'
import { NavBAr } from './NavBAr'

const Section1 = () => {
    const videoRef = useRef(null);

    useEffect(() => {
        if (videoRef.current) {
            videoRef.current.play();
        }
    }, []);
    return (
        <div className="relative w-full h-screen text-[#FFF]">
            <video ref={videoRef} autoPlay muted loop className="absolute z-0 inset-0 w-full h-screen object-cover">
                <source src={back_video} type="video/mp4" />
            </video>
            <div className='relative w-full h-screen bg-[#00060ae6]'>
                <NavBAr />
                <div className='relative w-80 mx-auto py-60'>
                    <div className='text-4xl font-bold'>Innovating <span className='text-[#1C75BC]'>Technologies</span> for a better Tomorrow!</div>
                    <div className='bg-gray-700 opacity-60 w-28 h-1 rounded my-6'></div>
                    <div className='text-[#1C75BC] w-fit font-semibold ring-1 ring-[#1C75BC] px-5 py-2 rounded-full cursor-pointer transition-all transform active:scale-95'>Get in Touch</div>
                </div>
            </div>
        </div>
    )
}

export default Section1