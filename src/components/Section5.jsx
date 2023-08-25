import Home from '../assets/images/Apple HomeKit (BIG-LOGO).svg'

const Section5 = () => {
    return (
        <div className="bg-[#010609] text-[#FFF] h-72 grid grid-cols-3">
            <div>
                <img src={Home}   alt='side_mockup' className='absolute -left-24 h-72 object-contain object-center' />
            </div>
            <div className='col-span-2 pl-9'>
                <h1 className='text-2xl pr-9 font-bold tracking-wide'><span className='text-[#04BB00]'>Pakistan’s</span> first <span>Home Automation</span> System, supporting
                    Apple <span className='text-[#FFBE41]'>Homekit</span>
                </h1>
                <div className='bg-gray-700 opacity-60 w-52 h-0.5 rounded my-3'></div>
                <p className='text-xs pr-12'>
                    Presenting Pakistan’s pioneering Home Automation System, offering seamless functionality without the need for any additional App installations.
                </p>
            </div>
        </div>
    )
}

export default Section5