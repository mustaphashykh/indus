import Android from '../assets/images/Android (LOGO).svg'
import Apple from '../assets/images/AppleLogo.svg'

const Section6 = () => {
    return (
        <div className="px-6 pt-32 pb-16">
            <h1 className="font-bold text-3xl tracking-wider pr-20">
                No matter where
                you are stay
                <span className="text-[#1C75BC]"> connected</span> to your home
            </h1>
            <div className='bg-gray-700 opacity-60 w-36 h-0.5 rounded my-6'></div>
            <p className="text-lg tracking-wide">
                Experience a new level of control and peace of mind with our innovative home automation solutions. With just a tap on your device, you can ensure that your lights are off, your security system is armed, and your thermostat is set just the way you like it. Stay in touch with the heart of your home, no matter where life takes you.
            </p>
            <div className="pt-7 w-fit flex gap-7">
                <img src={Apple} loading='lazy' className='w-12' alt='apple-logo' />
                <img src={Android} loading='lazy' className='w-12' alt='android-logo' />
            </div>
        </div>
    )
}

export default Section6