import Android from '../assets/images/Android (LOGO).svg'
import Apple from '../assets/images/AppleLogo.svg'
import iphone from '../assets/images/iPhone14.png'
import android from '../assets/images/Pixel7.png'


const Section6 = () => {
    return (
        <div className="px-6 pt-32 pb-16 lg:pb-0 lg:flex lg:pt-72 lg:px-28 lg:gap-28">
            <div className=''>
                <h1 className="font-bold text-3xl lg:text-5xl tracking-wider pr-20 lg:pr-0">
                    No matter where
                    you are stay
                    <span className="text-[#1C75BC]"> connected</span> to your home
                </h1>
                <div className='bg-gray-700 opacity-60 w-36 lg:w-52 h-0.5 rounded my-6 lg:my-7'></div>
                <p className="text-lg tracking-wide lg:font-semibold">
                    Experience a new level of control and peace of mind with our innovative home automation solutions. With just a tap on your device, you can ensure that your lights are off, your security system is armed, and your thermostat is set just the way you like it. Stay in touch with the heart of your home, no matter where life takes you.
                </p>
                <div className="pt-7 w-fit flex gap-7">
                    <img src={Apple} className='w-12' alt='apple-logo' />
                    <img src={Android} className='w-12' alt='android-logo' />
                </div>
            </div>
            <div className="w-full flex items-center justify-center gap-7">
                <img src={iphone} alt="iphone" className="w-32 h-72 shrink-0" />
                <img src={android} alt="android" className="w-32 h-72 shrink-0 mb-60" />
            </div>
        </div>
    )
}

export default Section6