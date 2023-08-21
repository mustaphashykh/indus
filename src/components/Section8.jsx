import secuirity from '../assets/images/secuirity.png'
import install from '../assets/images/install.png'

const Section8 = () => {
    return (
        <div className='w-full flex flex-col items-center'>
            <img src={secuirity} className='w-72 h-56 object-contain object-center mb-40' alt="lock-logo" />
            <h1 className='font-semibold text-4xl'>How it<span className='text-[#1C75BC]'> works</span></h1>
            <div className='bg-gray-700 opacity-60 w-52 h-0.5 rounded mt-4 mb-14'></div>
            <div className='bg-[#0A0C0D] w-72 h-40 p-7 flex flex-col justify-center items-center shrink-0 ring-1 ring-[#17466a8a] rounded mb-36 text-center'>
                <img src={install} alt='card-logo' className='w-8 pb-3' />
                <h3 className='text-[#1C75BC] text-xl font-semibold'>Install </h3>
                <div className='bg-gray-700 opacity-60 w-28 h-0.5 rounded mt-1 mb-3'></div>
                <p className='text-xs tracking-wide'>
                    Follow the instructions provided in the user manual.
                </p>
            </div>
        </div>
    )
}

export default Section8