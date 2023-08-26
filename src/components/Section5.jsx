import Home from '../assets/images/Apple HomeKit (BIG-LOGO).svg'

const Section5 = () => {
    return (
        <div className="bg-[#010609] text-[#FFF] h-72 grid grid-cols-3">
            <div className=''>
                <img src={Home}   alt='side_mockup' className='absolute -left-24 lg:-left-10 h-72 lg:h-96 object-contain object-center' />
            </div>
            <div className='col-span-2 pl-9 lg:pl-0'>
                <h1 className='text-2xl lg:text-4xl pr-9 lg:pr-14 font-bold tracking-wide'><span className='text-[#04BB00]'>Pakistan’s</span> first <span>Home Automation</span> System, supporting
                    Apple <span className='text-[#FFBE41]'>Homekit</span>
                </h1>
                <div className='bg-gray-700 opacity-60 w-36 lg:w-52 h-0.5 rounded my-3 lg:my-8'></div>
                <p className='text-xs lg:text-lg lg:font-semibold pr-12'>
                    Presenting Pakistan’s pioneering Home Automation System, offering seamless functionality without the need for any additional App installations.
                </p>
            </div>
        </div>
    )
}

export default Section5