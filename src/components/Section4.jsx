import bettle from '../assets/images/Device.svg'

const Section4 = () => {
    return (
        <div className="bg-[#010609] text-[#FFF]">
            <div className='w-full flex flex-col items-center text-center'>
                <img src={bettle}   alt='side_mockup' className='w-80 lg:w-section2-image h-full object-contain object-center' />
                <div className='w-full flex flex-col items-center text-center py-28'>
                    <h1 className='text-[#1C75BC] font-bold text-5xl lg:text-8xl'>
                        Beetle
                    </h1>
                    <div className='bg-gray-700 opacity-60 w-52 lg:w-96 h-0.5 rounded my-6 lg:my-10'></div>
                    <p className='lg:text-3xl lg:font-semibold lg:text-center lg:px-12 lg:w-[66rem] bg-pink-800'>
                    Pakistan first-ever home automation device, revolutionizing the way you interact with your home.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Section4