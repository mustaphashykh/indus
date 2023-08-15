import main_logo from '../assets/images/Indus-logo.svg'

export const NavBAr = () => {
    return (
        <div className="w-full lg:py-10 lg:px-20 sm:py-8 sm:px-14 py-4 px-6 text-sm">
            <div className='flex items-center justify-between'>
                <img src={main_logo} alt="brand_logo" className='lg:w-36 sm:w-32 w-28' />
                <ul className='lg:flex hidden items-center gap-10'>
                    <li className='nav-items'>Product</li>
                    <li className='nav-items'>Testimonials</li>
                    <li className='nav-items'>Company <i className="fa-solid fa-chevron-down"></i></li>
                    <li className='nav-items'>Other Services</li>
                    <li className='text-[#1C75BC] font-semibold ring-1 ring-[#1C75BC] px-5 py-2 rounded-full cursor-pointer transition-all transform active:scale-95'>Get in Touch</li>
                </ul>
                <div className='lg:hidden block cursor-pointer'>
                    <i className="fa-solid fa-bars"></i>
                </div>
            </div>
        </div>
    )
}  