import indus_logo from '../assets/images/Indus-logo.svg'

const Section10 = () => {
    return (
        <div className='lg:py-10 lg:px-10'>
            <div className="px-8 py-14 bg-[#02090E] lg:rounded">
                <div className='lg:flex lg:gap-6'>
                    <div>
                        <img src={indus_logo} alt='indus-logo' className=' w-52' />
                        <div className='bg-[#1C75BC] opacity-60 w-36 h-1 rounded mt-8 mb-14'></div>
                        <div className='text-white opacity-50 text-xs font-light tracking-wide'>
                            <p>National Incubation Center, Old Campus Sindh University Hyderabad.</p>
                            <p className='py-4'>+92 336 387 8329</p>
                            <p>info@industechnetronic.com</p>
                        </div>
                        <div className='mt-12 mb-20 text-4xl text-[#1C75BC] opacity-60 flex gap-6'>
                            <i className="fa-brands fa-youtube cursor-pointer transition duration-500 transform hover:-translate-y-1.5"></i>
                            <i className="fa-brands fa-linkedin cursor-pointer transition duration-500 transform hover:-translate-y-1.5"></i>
                            <i className="fa-brands fa-whatsapp cursor-pointer transition duration-500 transform hover:-translate-y-1.5"></i>
                            <i className="fa-brands fa-facebook-f cursor-pointer transition duration-500 transform hover:-translate-y-1.5"></i>
                            <i className="fa-brands fa-instagram cursor-pointer transition duration-500 transform hover:-translate-y-1.5"></i>
                        </div>
                    </div>
                    <div className='flex gap-4 lg:gap-12'>
                        <div className='grow lg:border-l-2 lg:border-r-2 lg:border-gray-700 lg:border-opacity-50 lg:px-12'>
                            <p className='text-xl text-[#1C75BC] font-bold'>Useful Links</p>
                            <div className='bg-[#1C75BC] opacity-60 w-20 h-0.5 rounded mt-1'></div>
                            <div className='mt-11 text-white opacity-50 text-xs font-light tracking-wide flex flex-col gap-7'>
                                <p className='cursor-pointer hover:text-[#1C75BC]'>Home</p>
                                <p className='cursor-pointer hover:text-[#1C75BC]'>Products</p>
                                <p className='cursor-pointer hover:text-[#1C75BC]'>Company</p>
                                <p className='cursor-pointer hover:text-[#1C75BC]'>Contact Us</p>
                            </div>
                        </div>
                        <div className='grow'>
                            <p className='text-xl text-[#1C75BC] font-bold invisible lg:visible'>Other Links</p>
                            <div className='bg-[#1C75BC] opacity-60 w-20 h-0.5 rounded mt-1 invisible lg:visible'></div>
                            <div className='mt-11 text-white opacity-50 text-xs font-light tracking-wide flex flex-col gap-7'>
                                <p className='cursor-pointer hover:text-[#1C75BC]'>FAQ’s</p>
                                <p className='cursor-pointer hover:text-[#1C75BC]'>Testimonials</p>
                                <p className='cursor-pointer hover:text-[#1C75BC]'>Privacy Policy</p>
                                <p className='cursor-pointer hover:text-[#1C75BC]'>Terms & Conditions</p>
                            </div>
                        </div>
                    </div>
                </div>
                <p className='text-white text-center opacity-30 tracking-wider text-xs mt-16'>© 2023 . All Rights Reserved. Industechnetronic</p>
            </div>
        </div >
    )
}

export default Section10