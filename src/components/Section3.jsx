import MIC from '../assets/images/MIC (LOGO).svg'
import LOGO2 from '../assets/images/Automation we provide with (LOGO).svg'
import siri from '../assets/images/Siri.png'
import alexa from '../assets/images/Alexa (LOGO).svg'
import goggle from '../assets/images/Google Assitant (LOGO).svg'
import home from '../assets/images/Apple HomeKit (LOGO).svg'
import goggleHome from '../assets/images/Google Home (LOGO).svg'
import matter from '../assets/images/Matter (LOGO).svg'
import smart from '../assets/images/Smart Things (LOGO).svg'
import LOGO3 from '../assets/images/Energy.svg'
import LOGO4 from '../assets/images/Elegance (LOGO).svg'

const Section3 = () => {
    return (
        <div className="my-28 relative">
            <div className="flex overflow-x-auto px-6 gap-6 py-0.5" style={{ scrollbarWidth: 'none' }}>
                <div className='w-72 h-60 flex-none bg-[#0A0C0D]'>
                    <div className=" w-full h-full ring-1 rounded-md ring-[#1c75bc33] text-center flex flex-col items-center justify-evenly">
                        <img src={MIC} alt='section3-logo' loading='lazy' className='w-7' />
                        <p className='text-xxs tracking-wider'>Assisted by Voice</p>
                        <div className='bg-gray-700 opacity-60 w-36 h-0.5 rounded'></div>
                        <p className='text-base font-semibold tracking-wider'>A place where you are <span className='text-[#1C75BC]'>Heard</span></p>
                        <p className='text-xxs tracking-wider'>Google Assistant, Alexa, and Siri supported.</p>
                        <div className='flex gap-2'>
                            <img src={goggle} loading='lazy' alt='google-assistant' className='w-6 object-contain object-center' />
                            <img src={alexa} alt='google-assistant' loading='lazy' className='w-6 object-contain object-center' />
                            <img src={siri} alt='google-assistant' loading='lazy' className='w-6 object-contain object-center' />
                        </div>
                    </div>
                </div>
                <div className='w-72 h-60 flex-none bg-[#0A0C0D]'>
                    <div className=" w-full h-full ring-1 rounded-md ring-[#1c75bc33] text-center flex flex-col items-center justify-evenly">
                        <img src={LOGO2} alt='section3-logo' loading='lazy' className='w-7' />
                        <p className='text-xxs tracking-wider'>Automation we provide with</p>
                        <div className='bg-gray-700 opacity-60 w-36 h-0.5 rounded'></div>
                        <p className='text-base font-semibold tracking-wider'>Showcasing unmatched <span className='text-[#1C75BC]'>Compatibility</span>.</p>
                        <p className='text-xxs tracking-wider px-10'>Experience effortless Connectivity and Unleash the full potential of Smart Home.</p>
                        <div className='flex gap-2'>
                            <img src={matter} alt='google-assistant' loading='lazy' className='w-6 object-contain object-center' />
                            <img src={goggleHome} alt='google-assistant' loading='lazy' className='w-6 object-contain object-center' />
                            <img src={home} alt='google-assistant' loading='lazy' className='w-6 object-contain object-center' />
                            <img src={smart} alt='google-assistant' loading='lazy' className='w-6 object-contain object-center' />
                        </div>
                    </div>
                </div>
                <div className='w-72 h-60 flex-none bg-[#0A0C0D]'>
                    <div className=" w-full h-full ring-1 rounded-md ring-[#1c75bc33] text-center flex flex-col items-center justify-evenly">
                        <img src={LOGO3} alt='section3-logo' loading='lazy' className='w-7' />
                        <p className='text-xxs tracking-wider'>Energy Efficient</p>
                        <div className='bg-gray-700 opacity-60 w-36 h-0.5 rounded'></div>
                        <p className='text-base font-semibold tracking-wid px-2 text-center'>Save money, resources, and the <span className='text-[#92C12D]'>environment </span>all at once.</p>
                        <p className='text-xxs tracking-wide px-7'>Harness the potential of our latest technologies to ensure you’re only paying for what you genuinely use.</p>
                    </div>
                </div>
                <div className='w-72 h-60 flex-none bg-[#0A0C0D]'>
                    <div className=" w-full h-full ring-1 rounded-md ring-[#1c75bc33] text-center flex flex-col items-center justify-evenly">
                        <img src={LOGO4} alt='section3-logo' className='w-14' />
                        <p className='text-xxs tracking-wider'>Living in the Elegance</p>
                        <div className='bg-gray-700 opacity-60 w-36 h-0.5 rounded'></div>
                        <p className='text-base font-semibold tracking-wider'>The Perfect Balance of <span className='text-[#1C75BC]'>Aesthetics</span> and <span className='text-[#1C75BC]'>Function</span>!</p>
                        <p className='text-xxs tracking-wider'>Revolutionize Your Space with Sleek Touch Panels Where Elegance Meets Functionality.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Section3