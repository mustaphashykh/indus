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
        <div className='w-full flex flex-col items-center lg:py-10'>
            <h1 className='font-semibold text-4xl lg:text-6xl'>How it<span className='text-[#1C75BC]'> works</span></h1>
            <div className='bg-gray-700 opacity-60 w-52 h-0.5 rounded mt-4 mb-14'></div>
            <div className="relative w-full">
                <div className="flex overflow-x-auto px-2" style={{ scrollbarWidth: 'none' }}>
                    {
                        cardData.map((item, index) => {
                            return <div key={index} className='bg-[#0A0C0D] mb-1 flex-none w-72 lg:w-96 h-40 lg:h-64 p-7 flex flex-col justify-center items-center shrink-0 ring-1 ring-[#17466a8a] rounded lg:rounded-lg text-center my-0.5 ml-14'>
                                <img src={item.img}   alt='card-logo' className='w-8 pb-3 lg:w-14' />
                                <h3 className='text-[#1C75BC] text-xl lg:text-3xl font-semibold'>{item.name}</h3>
                                <div className='bg-gray-700 opacity-60 w-28 lg:w-44 h-0.5 rounded mt-1 mb-3 lg:mt-6 lg:mb-6'></div>
                                <p className='text-xs lg:text-lg tracking-wide'>{item.des}</p>
                            </div>
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default Section8