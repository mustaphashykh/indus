import iphone from '../assets/images/iPhone14.png'
import android from '../assets/images/Pixel7.png'

const Section7 = () => {
    return(
        <div className='px-6 pb-24'>
            <div className="w-full flex items-center justify-center gap-7">
                <img src={iphone} alt="" className="w-32 h-72 shrink-0" />
                <img src={android} alt="" className="w-32 h-72 shrink-0 mb-60" />
            </div>
            <div className='w-full text-center flex flex-col items-center'>
                <h1 className='text-3xl font-semibold'>Privacy is <span className='text-[#1C75BC]'>priority</span></h1>
                <div className='bg-gray-700 opacity-60 w-52 h-0.5 rounded my-5'></div>
                <p className='tracking-wide'>All of our proactive safety precautions are focused on giving you peace of mind, which is why secure AWS Cloud services enable all of our technology.</p>
            </div>
        </div>
    )
}

export default Section7