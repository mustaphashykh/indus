import Home from '../assets/images/Home.svg'

const Section2 = () => {
    return (
        <div className="bg-[#010609] text-[#FFF]">
                <div className='w-full flex flex-col items-center text-center pt-24 pb-8'>
                    <h1 className=' text-4xl font-bold tracking-wide'>Experience the <span className='text-[#1C75BC]'>Future</span> of <span className='text-[#1C75BC]'>Home</span> Automation</h1>
                    <div className='bg-gray-700 opacity-60 w-28 h-0.5 rounded my-9'></div>
                    <p className='text-sm px-8'>
                        Innovating Home Automation Solutions for a Smarter Lifestyle, embodies our dedication to revolutionizing the way people interact with their homes. We specialize in developing state-of-the-art technologies that seamlessly integrate and automate various aspects of home living, enhancing convenience, security, and energy efficiency.
                    </p>
                    <div className='mt-9 text-[#1C75BC] ring-1 ring-[#1C75BC] w-32 text-center py-2 rounded-full cursor-pointer transition-all transform active:scale-95'>
                        Get a Quote
                    </div>
                </div>
                <div className='w-full h-72'>
                    <img src={Home} loading='eager' alt='home' className='w-full h-full object-contain object-center' />
                </div>
            </div>
    )
}

export default Section2