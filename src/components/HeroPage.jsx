
import React from 'react'
import gridLines from "../assets/grid-lines.png"
import rightArrow from "../assets/right-arrow.png"
import "../fonts.css"
import fig1 from "../assets/fig-1.png"

const HeroPage = () => {
  return (
    <article className='w-full h-fit text-white bg-rg from-[#242241] to-[#1E1E1E] relative flex flex-col justify-center items-center pt-40 pb-32 gap-16 px-5 sm:px-20 xl:px-32 '>

        <div className='h-[150vh] w-full mx-auto absolute left-[4%] top-36'>
            <img className='max-h-full min-w-full' src={gridLines} alt="" />
        </div>


        <div className='w-fit bg-gradient-to-r from-[#FFFFFF] to-[#6B61FF] bg-clip-text text-[transparent] flex flex-col gap-5'>
            <p className="font-bricolage text-5xl md:text-56 font-extrabold text-center font-width-75 leading-none">EMPOWERING THE DIGITAL ERA:</p>
            <p className="font-bricolage text-5xl md:text-56 font-extrabold text-center font-width-75 leading-none">DECENTRALIZING ENTERTAINMENT</p>
        </div>

        <p className='text-[#D2D2D2] font-bricolage sm:w-[40%] text-center'>Join the world’s first DePIN: Revolutionizing Content Streaming with faster, Safer and Cheaper Access</p>

        <div className='flex flex-col items-center justify-center md:w-[full]'>
            <button className='flex justify-center items-center gap-2 bg-[#6B61FF] text-sm font-semibold py-2 px-5 rounded-full z-10'>Coming Soon <img className='h-5' src={rightArrow} alt="" /></button>

            <img className='w-[full]' src={fig1} alt="" />
        </div>
        
        <div className='flex w-full justify-center gap-10 md:justify-evenly items-center md:items-stretch flex-col md:flex-row '>

            <div className='bg-white w-[80%] md:w-[45%] min-h-[150px] rounded-xl bg-rg-btm from-[#a6a0ff] to-white to-60% relative p-5 flex flex-col gap-5'>

                <div className='h-8 w-[0.1rem] bg-gradient-to-t from-[transparent] via-black to-[transparent] absolute right-9 top-6'></div>
                <div className='h-[0.1rem] w-8 bg-gradient-to-r from-[transparent] via-black to-[transparent] absolute right-5 top-10'></div>
                

                <p className='text-black text-xl sm:text-[1.7rem] font-bricolage font-semibold '>No. of Node Operators</p>
                <p className='text-black text-[4rem] font-bricolage font-semibold font-width-75 leading-none'>2000</p>
            </div>

            <div className='bg-white w-[80%] md:w-[45%] min-h-[150px]  rounded-xl bg-rg-btm from-[#a6a0ff] to-white to-60% relative p-5 flex flex-col gap-5'>

                <div className='h-8 w-[0.1rem] bg-gradient-to-t from-[transparent] via-black to-[transparent] absolute right-9 top-6'></div>
                <div className='h-[0.1rem] w-8 bg-gradient-to-r from-[transparent] via-black to-[transparent] absolute right-5 top-10'></div>
                
                <div className='flex gap-1 items-baseline '>
                    <p className='text-black text-xl sm:text-[1.7rem] font-bricolage font-semibold '>Data Transferred in TB</p>
                    <p className='text-black font-bricolage text-sm font-semibold hidden xl:block  '>{"(last 30 days)"}</p>
                </div>

                <p className='text-black text-[4rem] font-bricolage font-semibold font-width-75 leading-none'>12,000</p>
            </div>

        </div>


    </article>
  )
}

export default HeroPage