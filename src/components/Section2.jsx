import Home from '../assets/images/Home.svg'

const Section2 = () => {
    return (
        <div className="text-[#FFF] lg:flex lg:items-center lg:px-28">
            <div className='w-full flex lg:block flex-col items-center text-center lg:text-left pt-24 pb-8'>
                <h1 className=' text-4xl lg:text-5xl font-bold tracking-wide lg:tracking-tight'>Experience the <span className='text-[#1C75BC]'>Future</span> of <span className='text-[#1C75BC]'>Home</span> Automation</h1>
                <div className='bg-gray-700 opacity-60 w-28 lg:w-80 h-0.5 rounded my-9'></div>
                <p className='text-sm lg:text-base px-8 lg:px-0'>
                    Innovating Home Automation Solutions for a Smarter Lifestyle, embodies our dedication to revolutionizing the way people interact with their homes. We specialize in developing state-of-the-art technologies that seamlessly integrate and automate various aspects of home living, enhancing convenience, security, and energy efficiency.
                </p>
                <div className='mt-9 text-[#1C75BC] ring-1 ring-[#1C75BC] w-32 text-center py-2 rounded-full cursor-pointer transition-all transform active:scale-95'>
                    Get a Quote
                </div>
            </div>
            <div className='w-full lg:w-fit h-72'>
                <img src={Home} alt='home' className='w-full lg:w-section2-image h-full object-contain object-center' />
            </div>
        </div>
    )
}

export default Section2