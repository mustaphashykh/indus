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
            <div className="flex overflow-x-auto px-6 gap-6 lg:gap-24 py-0.5 lg:px-24" style={{ scrollbarWidth: 'none' }}>
                <div className='w-72 h-60 lg:h-auto lg:w-section3-slider-card flex-none bg-[#0A0C0D]  lg:mb-5'>
                    <div className=" w-full h-full ring-1 rounded-md ring-[#1c75bc33] text-center flex flex-col items-center justify-evenly lg:py-14">
                        <img src={MIC} alt='section3-logo' className='w-7 lg:w-20 lg:mb-9' />
                        <p className='text-xxs lg:text-base lg:font-semibold tracking-wider'>Assisted by Voice</p>
                        <div className='bg-gray-700 opacity-60 w-36 lg:w-96 lg:my-7 h-0.5 rounded'></div>
                        <p className='text-base lg:text-5xl font-semibold lg:font-bold tracking-wider lg:tracking-normal'>A place where you are <span className='text-[#1C75BC]'>Heard</span></p>
                        <p className='text-xxs lg:text-base lg:font-semibold tracking-wider px-10 lg:mx-48 lg:my-8'>Amazon Alexa, Google Assistant and Siri are also compatible with us.</p>
                        <div className='flex gap-2 lg:gap-4'>
                            <img src={goggle} alt='google-assistant' className='w-6 lg:w-14 object-contain object-center' />
                            <img src={alexa} alt='google-assistant' className='w-6 lg:w-14 object-contain object-center' />
                            <img src={siri} alt='google-assistant' className='w-6 lg:w-14 object-contain object-center' />
                        </div>
                    </div>
                </div>
                <div className='w-72 h-60 lg:h-auto lg:w-section3-slider-card flex-none bg-[#0A0C0D] lg:mb-5'>
                    <div className=" w-full h-full ring-1 rounded-md ring-[#1c75bc33] text-center flex flex-col items-center justify-evenly lg:py-14">
                        <img src={LOGO2} alt='section3-logo' className='w-7 lg:w-20 lg:mb-9' />
                        <p className='text-xxs lg:text-base lg:font-semibold tracking-wider'>Automation we provide with</p>
                        <div className='bg-gray-700 opacity-60 w-36 lg:w-96 lg:my-7 h-0.5 rounded'></div>
                        <p className='text-base lg:text-5xl font-semibold lg:font-bold tracking-wider lg:tracking-normal'>Showcasing unmatched <span className='text-[#1C75BC]'>Compatibility</span>.</p>
                        <p className='text-xxs lg:text-base lg:font-semibold tracking-wider px-10 lg:mx-48 lg:my-8'>Experience effortless Connectivity and Unleash the full potential of Smart Home.</p>
                        <div className='flex gap-2 lg:gap-4'>
                            <img src={matter} alt='google-assistant' className='w-6 lg:w-14 object-contain object-center' />
                            <img src={goggleHome} alt='google-assistant' className='w-6 lg:w-14 object-contain object-center' />
                            <img src={home} alt='google-assistant' className='w-6 lg:w-14 object-contain object-center' />
                            <img src={smart} alt='google-assistant' className='w-6 lg:w-14 object-contain object-center' />
                        </div>
                    </div>
                </div>
                <div className='lg:hidden w-72 h-60 flex-none bg-[#0A0C0D]'>
                    <div className=" w-full h-full ring-1 rounded-md ring-[#1c75bc33] text-center flex flex-col items-center justify-evenly">
                        <img src={LOGO3} alt='section3-logo' className='w-7' />
                        <p className='text-xxs tracking-wider'>Energy Efficient</p>
                        <div className='bg-gray-700 opacity-60 w-36 h-0.5 rounded'></div>
                        <p className='text-base font-semibold tracking-wid px-2 text-center'>Save money, resources, and the <span className='text-[#92C12D]'>environment </span>all at once.</p>
                        <p className='text-xxs tracking-wide px-7'>Harness the potential of our latest technologies to ensure you’re only paying for what you genuinely use.</p>
                    </div>
                </div>
                <div className='lg:hidden w-72 h-60 flex-none bg-[#0A0C0D]'>
                    <div className=" w-full h-full ring-1 rounded-md ring-[#1c75bc33] text-center flex flex-col items-center justify-evenly">
                        <img src={LOGO4} alt='section3-logo' className='w-14' />
                        <p className='text-xxs tracking-wider'>Living in the Elegance</p>
                        <div className='bg-gray-700 opacity-60 w-36 h-0.5 rounded'></div>
                        <p className='text-base font-semibold tracking-wider'>The Perfect Balance of <span className='text-[#1C75BC]'>Aesthetics</span> and <span className='text-[#1C75BC]'>Function</span>!</p>
                        <p className='text-xxs tracking-wider'>Revolutionize Your Space with Sleek Touch Panels Where Elegance Meets Functionality.</p>
                    </div>
                </div>
            </div>
            <div className='hidden lg:flex items-center justify-center px-24 gap-9 mt-32'>
                <div className='w-72 h-80 flex-none bg-[#0A0C0D] grow'>
                    <div className=" w-full h-full ring-1 rounded-md ring-[#1c75bc33] text-center flex flex-col items-center justify-evenly">
                        <img src={LOGO3} alt='section3-logo' className='w-14' />
                        <p className='text-base tracking-wide'>Energy Efficient</p>
                        <div className='bg-gray-700 opacity-60 w-40 h-0.5 rounded'></div>
                        <p className='text-2xl font-bold tracking-wide text-center'>Save money, resources, and the <span className='text-[#92C12D]'>environment </span>all at once.</p>
                        <p className='text-sm text-center px-2 tracking-wide'>Harness the potential of our latest technologies to ensure you’re only paying for what you genuinely use.</p>
                    </div>
                </div>
                <div className='w-72 h-80 flex-none bg-[#0A0C0D] grow'>
                    <div className="w-full h-full ring-1 rounded-md ring-[#1c75bc33] text-center flex flex-col items-center justify-evenly">
                        <img src={LOGO4} alt='section3-logo' className='w-28' />
                        <p className='text-base tracking-wide'>Living in the Elegance</p>
                        <div className='bg-gray-700 opacity-60 w-40 h-0.5 rounded'></div>
                        <p className='text-2xl font-bold tracking-wider'>The Perfect Balance of <span className='text-[#1C75BC]'>Aesthetics</span> and <span className='text-[#1C75BC]'>Function</span>!</p>
                        <p className='text-sm text-center px-5 tracking-wide'>Revolutionize Your Space with Sleek Touch Panels Where Elegance Meets Functionality.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Section3