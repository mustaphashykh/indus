import secuirity from '../assets/images/secuirity.png'
import install from '../assets/images/install.png'
import control from '../assets/images/Control Rooms (LOGO).svg'
import join from '../assets/images/Join (LOGO).svg'
import setting from '../assets/images/Configure (LOGO).svg'

const Section8 = () => {
    const cardData = [
        {
            name: 'Install',
            des: 'Follow the instructions provided in the user manual.',
            img: install
        }, {
            name: 'Connect',
            des: 'Scan the QR code on the box.',
            img: join
        }, {
            name: 'Configure',
            des: 'Open HomeKit/google home and add accessories.',
            img: setting
        }, {
            name: 'Use',
            des: 'Now you are ready to enjoy your home.',
            img: control
        },
    ]
    return (
        <div className='w-full flex flex-col items-center'>
            <img src={secuirity} className='w-72 h-56 object-contain object-center mb-40' alt="lock-logo" />
            <h1 className='font-semibold text-4xl'>How it<span className='text-[#1C75BC]'> works</span></h1>
            <div className='bg-gray-700 opacity-60 w-52 h-0.5 rounded mt-4 mb-14'></div>
            <div className="relative w-full">
                <div className="flex overflow-x-auto px-2" style={{ scrollbarWidth: 'none' }}>
                    {
                        cardData.map((item, index) => {
                            return <div key={index} className='bg-[#0A0C0D] flex-none w-72 h-40 p-7 flex flex-col justify-center items-center shrink-0 ring-1 ring-[#17466a8a] rounded text-center my-0.5 ml-14'>
                                <img src={item.img} loading='lazy' alt='card-logo' className='w-8 pb-3' />
                                <h3 className='text-[#1C75BC] text-xl font-semibold'>{item.name}</h3>
                                <div className='bg-gray-700 opacity-60 w-28 h-0.5 rounded mt-1 mb-3'></div>
                                <p className='text-xs tracking-wide'>{item.des}</p>
                            </div>
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default Section8