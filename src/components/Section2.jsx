import Home from '../assets/images/Home.svg'

const Section2 = () => {
    return (
        <div className="bg-[#010609] text-[#FFF]">
            <div className="py-12 px-20 flex flex-wrap-reverse">
                <div className='w-1/2'>
                    <h1 className='text-4xl font-bold tracking-wide'>Experience the <span className='text-[#1C75BC]'>Future</span> of <span className='text-[#1C75BC]'>Home</span> Automation</h1>
                    <div className='bg-gray-700 opacity-60 lg:w-72 sm:w-40 w-28 h-0.5 rounded my-9'></div>
                    <p className='text-sm pr-10'>
                        Innovating Home Automation Solutions for a Smarter Lifestyle, embodies our dedication to revolutionizing the way people interact with their homes. We specialize in developing state-of-the-art technologies that seamlessly integrate and automate various aspects of home living, enhancing convenience, security, and energy efficiency.
                    </p>
                    <div className='mt-9 text-[#1C75BC] ring-1 ring-[#1C75BC] w-32 text-center py-2 rounded-full'>
                        Get a Quote
                    </div>
                </div>
                <div className='w-1/2'>
                    <img src={Home} alt='side_mockup' className='w-11/12 object-contain object-center' />
                </div>
            </div>
        </div>
    )
}

export default Section2