import React from 'react'

const Body = () => {
    return (
        <div className='bg-[url("/nature_1.jpeg")] h-screen bg-cover bg-no-repeat bg-center-fixed flex items-center relative'>
            <div className='absolute insert-0 bg-black/50'>
                <div className='container mx-auto px-4 z-10'>
                    <div className='max-w-[450px] text-white flex flex-col gap-[40px]'>
                        <div>
                            <h1 className='text-5xl font-semibold'>Design your Dreams and imaginations</h1>
                        </div>
                        <div>
                            <h1>Take your <span className='text-green-600 text-2xl font-bold'>Dreams</span> as far as possible from your mind and put it into something dynamic</h1>
                        </div>
                        <div className='bg-red-600 h-[2px] w-[50px]'></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Body