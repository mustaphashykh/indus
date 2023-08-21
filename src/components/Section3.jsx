import MIC from '../assets/images/MIC (LOGO).svg'
import LOGO from '../assets/images/Automation we provide with (LOGO).svg'
import siri from '../assets/images/Siri.png'
import alexa from '../assets/images/Alexa (LOGO).svg'
import goggle from '../assets/images/Google Assitant (LOGO).svg'
import home from '../assets/images/Apple HomeKit (LOGO).svg'
import goggleHome from '../assets/images/Google Home (LOGO).svg'
import matter from '../assets/images/Matter (LOGO).svg'
import smart from '../assets/images/Smart Things (LOGO).svg'

const Section3 = () => {
    return (
        <div className="my-28 relative">
            <div className="flex overflow-x-auto px-2 gap-3" style={{ scrollbarWidth: 'none' }}>
                <div className={`flex-none w-96 rounded`}>
                    <div className='w-96 p-0.5'>
                        <div className="bg-[#0A0C0D] w-full ring-1 rounded ring-[#1c75bc33] text-center px-8 py-4">
                            <div className='flex flex-col items-center w-full h-full'>
                                <img src={MIC} alt='section3-logo' className='w-5 pb-2' />
                                <p className='text-xs tracking-wide'>Assisted by Voice</p>
                                <div className='bg-gray-700 opacity-60 w-36 h-0.5 rounded my-3'></div>
                                <p className='text-xl font-bold tracking-wider'>A place where you are <span className='text-[#1C75BC]'>Heard</span></p>
                                <p className='text-xs tracking-wide py-3'>Google Assistant, Alexa, and Siri supported.</p>
                                <div className='flex gap-2'>
                                    <img src={goggle} alt='google-assistant' className='w-6 object-contain object-center' />
                                    <img src={alexa} alt='google-assistant' className='w-6 object-contain object-center' />
                                    <img src={siri} alt='google-assistant' className='w-6 object-contain object-center' />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={`flex-none w-96 rounded`}>
                    <div className='w-96 p-0.5'>
                        <div className="bg-[#0A0C0D] w-full ring-1 rounded ring-[#1c75bc33] text-center px-5 py-0.5">
                            <div className='flex flex-col items-center w-full h-full'>
                                <img src={LOGO} alt='section3-logo' className='w-5 pb-2' />
                                <p className='text-xs tracking-wide p-1'>Automation we provide with</p>
                                <p className='text-xl font-bold tracking-wider'>Our Invaluable partners providing unwavering <span className='text-[#1C75BC]'>support</span></p>
                                <div className='bg-gray-700 opacity-60 w-36 h-0.5 rounded my-3'></div>
                                <p className='text-xs tracking-wide pb-1.5'>Experience effortless Connectivity and Unleash the full potential of Smart Home.</p>
                                <div className='flex gap-2'>
                                    <img src={matter} alt='google-assistant' className='w-6 object-contain object-center' />
                                    <img src={goggleHome} alt='google-assistant' className='w-6 object-contain object-center' />
                                    <img src={home} alt='google-assistant' className='w-6 object-contain object-center' />
                                    <img src={smart} alt='google-assistant' className='w-6 object-contain object-center' />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Section3