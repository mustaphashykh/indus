import main_logo from '../assets/images/Indus-logo.svg'
import Slider from './MobileSLider'
import { useState } from 'react'

export const NavBAr = () => {
    const [open, setOpen] = useState(false)
    const toggleHanlder = () => {
        setOpen(false)
    }
    return (
        <div className="w-full px-8 pt-20 lg:pt-12 text-[#1C75BC]">
            <div className='flex items-center justify-between'>
                <img src={main_logo} alt="brand_logo" className='w-28 lg:w-52' />
                <div className='block lg:hidden'>
                    <i className="fa-solid fa-bars text-2xl cursor-pointer" onClick={() => setOpen(true)}></i>
                </div>
                <Slider open={open} toggler={toggleHanlder} />
                <ul className='lg:flex hidden items-center gap-7'>
                    <li className='nav-items'>Product</li>
                    <li className='nav-items'>Testimonials</li>
                    <li className='nav-items'>Company <i className="fa-solid fa-chevron-down"></i></li>
                    <li className='nav-items'>Other Services</li>
                    <li className='text-[#1C75BC] font-semibold ring-1 ring-[#1C75BC] px-5 py-2 rounded-full cursor-pointer transition-all transform active:scale-95'>Get in Touch</li>
                </ul>
            </div>
        </div>
    )
}