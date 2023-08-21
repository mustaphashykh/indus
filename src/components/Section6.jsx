import Android from '../assets/images/Android (LOGO).svg'
import Apple from '../assets/images/AppleLogo.svg'

const Section6 = () => {
    return (
        <div className="px-6 pt-32 pb-16">
            <h1 className="font-bold text-3xl">
                No matter where
                you are stay
                <span className="text-[#1C75BC]"> connected</span> to your home
            </h1>
            <div className='bg-gray-700 opacity-60 w-36 h-0.5 rounded my-6'></div>
            <p className="text-lg tracking-wide">
                You may rest certain that everything is as it should be at home thanks to our simple-to-use app. While you are away, the fans, lights, and appliances are all turned off. If necessary, turn off the neglected lights and appliances using our intuitive interface while you’re in bed.
            </p>
            <div className="pt-7 w-fit flex gap-7">
                <img src={Apple} className='w-12' alt='apple-logo' />
                <img src={Android} className='w-12' alt='android-logo' />
            </div>
        </div>
    )
}

export default Section6