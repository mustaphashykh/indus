import indus_logo from '../assets/images/Indus-logo.svg'

const Section10 = () => {
    return (
        <div className="px-8 py-14 bg-[#02090E]">
            <img src={indus_logo} alt='indus-logo'   className=' w-52' />
            <div className='bg-[#1C75BC] opacity-60 w-36 h-1 rounded mt-8 mb-14'></div>
            <div className='text-white opacity-50 text-xs font-light tracking-wide'>
                <p>National Incubation Center, Old Campus Sindh University Hyderabad.</p>
                <p className='py-4'>+92 336 387 8329</p>
                <p>info@industechnetronic.com</p>
            </div>
            <div className='mt-12 mb-20 text-4xl text-[#1C75BC] opacity-60 flex gap-6'>
                <i className="fa-brands fa-youtube"></i>
                <i className="fa-brands fa-linkedin"></i>
                <i className="fa-brands fa-whatsapp"></i>
                <i className="fa-brands fa-facebook-f"></i>
                <i className="fa-brands fa-instagram"></i>
            </div>
            <div>
                <p className='text-xl text-[#1C75BC] font-bold'>Useful Links</p>
                <div className='bg-[#1C75BC] opacity-60 w-20 h-0.5 rounded mt-1'></div>
                <div className='mt-11 flex gap-4'>
                    <div className='grow text-white opacity-50 text-xs font-light tracking-wide flex flex-col gap-7'>
                        <p>Home</p>
                        <p>Products</p>
                        <p>Company</p>
                        <p>Contact Us</p>
                    </div>
                    <div className='grow text-white opacity-50 text-xs font-light tracking-wide flex flex-col gap-7'>
                        <p>FAQ’s</p>
                        <p>Testimonials</p>
                        <p>Privacy Policy</p>
                        <p>Terms & Conditions</p>
                    </div>
                </div>
            </div>
            <p className='text-white text-center opacity-30 tracking-wider text-xs mt-16'>© 2023 . All Rights Reserved. Industechnetronic</p>
        </div>
    )
}

export default Section10