const Slider = (props) => {
    // eslint-disable-next-line react/prop-types
    const {open, toggler} = props
    return (
            <div className={`fixed w-full h-screen bg-[#01070B] top-0 right-0 z-10 transition-all duration-300 transform ${open ? 'translate-x-0': 'translate-x-full'}`}>
                <div className='relative w-full'>
                    <i className=" fa-solid fa-xmark absolute text-2xl top-16 right-9 cursor-pointer" onClick={() => {toggler()}}></i>
                    <ul className=" text-xl relative top-44 left-14">
                    <li className='mb-14' onClick={() => {toggler()}}>Product</li>
                    <li className='mb-14' onClick={() => {toggler()}}>Testimonials</li>
                    <li className='mb-14'>Company <i className="fa-solid fa-chevron-down"></i></li>
                    <li onClick={() => {toggler()}}>Other Services</li>
                    </ul>
                </div>
            </div>
    )
}

export default Slider