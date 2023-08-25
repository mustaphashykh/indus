import bettle from '../assets/images/Device.svg'

const Section4 = () => {
    return (
        <div className="bg-[#010609] text-[#FFF]">
            <div className='w-full flex flex-col items-center text-center'>
                <img src={bettle}   alt='side_mockup' className='w-80 h-full object-contain object-center' />
                <div className='w-full flex flex-col items-center text-center py-28'>
                    <h1 className='text-[#1C75BC] font-bold text-5xl'>
                        Beetle
                    </h1>
                    <div className='bg-gray-700 opacity-60 w-52 h-0.5 rounded my-6'></div>
                    <p>
                    Pakistan first-ever home automation device, revolutionizing the way you interact with your home.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Section4