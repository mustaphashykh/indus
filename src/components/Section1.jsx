import back_video from '../assets/images/video.mp4'
import { NavBAr } from './NavBAr'

const Section1 = () => {
    return (
        <div className="relative w-full lg:h-screen h-96 text-[#FFF]">
            <video autoPlay loop className="absolute inset-0 w-full lg:h-screen h-96 object-cover">
                <source src={back_video} type="video/mp4" />
            </video>
            <div className='w-full h-full bg-[#010609] opacity-90'>
                <NavBAr />
                <div className='lg:px-20 sm:px-14 px-6 lg:text-7xl sm:text-5xl sm:block flex flex-col text-center sm:text-left items-center font-semibold my-auto'>
                    <div className='lg:py-20 md:py-16 py-32'>Innovating <span className='text-[#1C75BC]'>Technologies</span> for a better Tomorrow!</div>
                    <div className='bg-gray-700 opacity-60 lg:w-72 sm:w-40 w-28 h-0.5 rounded'></div>
                </div>
            </div>
        </div>
    )
}

export default Section1