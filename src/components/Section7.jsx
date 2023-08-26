import secuirity from '../assets/images/secuirity.png'

const Section7 = () => {
    return (
        <div className='flex flex-col lg:flex-row items-center justify-center lg:gap-28 lg:pl-32 lg:pr-16 lg:py-20'>
            <img src={secuirity} className='hidden lg:block w-72 h-56 lg:h-auto object-contain object-center mb-40 lg:mb-0' alt="lock-logo" />
            <div className='px-6 pb-24 lg:pb-0 lg:px-0'>
                <div className='w-full lg:w-fit text-center lg:text-left flex flex-col items-center lg:items-start'>
                    <h1 className='text-3xl lg:text-5xl font-semibold'>Privacy is <span className='text-[#1C75BC]'>priority</span></h1>
                    <div className='bg-gray-700 opacity-60 w-52 h-0.5 rounded my-6'></div>
                    <p className='tracking-wide'>We understand that in a connected world, your privacy matters more than ever. As a leader in smart home innovation, we take your security seriously. Our state-of-the-art home automation solutions are meticulously crafted to safeguard your personal data and protect the sanctity of your living space.</p>
                </div>
            </div>
            <img src={secuirity} className='lg:hidden w-72 h-56 object-contain object-center mb-40 lg:mb-0' alt="lock-logo" />
        </div>
    )
}

export default Section7