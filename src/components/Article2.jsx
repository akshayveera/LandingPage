
import React from 'react'
import pattern from "../assets/Pattern.png"
import patternDark from "../assets/Pattern-dark.png"
import globe from "../assets/globe.png"

const Article2 = () => {
  return (
    <article className='w-screen bg-[#2A2A2B] overflow-x-hidden relative py-24 flex flex-col items-center justify-center gap-10 px-5 sm:px-20 xl:px-32 '>

      {/* this is outof flow */}
      <p className='w-full h-[0.1rem] bg-gradient-to-r from-[transparent] via-[#8d8d8d] from-20% to-60% to-[transparent] absolute top-0'></p>

      <div className='w-fit flex flex-col items-center bg-gradient-to-r from-[#FFFFFF] to-[#999999] text-center bg-clip-text text-transparent'>
        <h1 className='font-bricolage text-2xl md:text-3xl lg:text-4xl font-semibold lg:w-[80%] text-center '>FanCloud CDN network revolutionizes video infrastructure with community-driven Innovation</h1>
        {/* <h1 className='font-bricolage text-4xl font-semibold'>with community-driven Innovation</h1> */}
      </div>

      <p className='text-[#D2D2D2] w-full text-sm sm:text-base sm:w-[80%] lg:w-[55%] text-center font-bricolage'>FanCloud pioneers a new era of connectivity with its decentralised content delivery network (dCDN), leveraging a global network of community-powered nodes. By harnessing a decentralised architecture, dCDN drastically reduces data transfer and compute costs while enhancing load time. Join FanCloud’s dCDN network and experience the future of seamless, secure and community- driven consumption</p>

      <img className='pb-10 lg:h-[500px]' src={globe} alt="" />

      <section className='w-full flex gap-20  items-center justify-evenly flex-wrap'>

        <div className='bg-[#6B61FF] w-[350px] h-[220px] p-6 rounded-2xl flex flex-col relative'>

          <div className='flex flex-col gap-3 w-full'>
            <h1 className='text-[#EDF0FF] text-[32px] font-bricolage font-medium'>Content Nodes</h1>
            <p className='text-[#EDF0FF] font-bricolage text-sm font-light leading-none w-[90%]'>Content Nodes, Earn rewards for supplying their GPU, Storage and bandwidth for dCDN</p>
          </div>

          <div className='bg-purple-400 w-fit rounded-full absolute bottom-7 right-5  z-10   '>
            <button className='flex items-center gap-3 font-bold bg-white py-2 px-7 rounded-full relative -top-1 text-sm'>Deploy <img className='h-5' src="https://cdn-icons-png.flaticon.com/128/13487/13487357.png" alt="" /></button>
          </div>

          <img className='absolute bottom-0' src={pattern} alt="" />

        </div>


        <div className='bg-[#FE9BF3] w-[350px] h-[220px] p-6 rounded-2xl flex flex-col relative'>

          <div className='flex flex-col gap-3 w-full'>
            <h1 className=' text-[32px] font-bricolage font-medium'>Orchestrators</h1>
            <p className=' font-bricolage  text-sm font-light leading-none w-[90%]'>Orchestrators will be responsible for connecting the client with the content node for seamless streaming. Traffic distribution will be based on multiple factors like job type, performance</p>
          </div>

          <div className='bg-[#7A186F] text-white text-xs p-1 px-3  rounded-full border-4 border-[#f3ccee] absolute bottom-5 right-5 z-10 cursor-pointer -rotate-12'>Coming Soon</div>

          <img className='absolute bottom-0' src={pattern} alt="" />

        </div>

        
        <div className='bg-[#ADFFE4] w-[350px] h-[220px] p-6 rounded-2xl flex flex-col relative'>

          <div className='flex flex-col gap-3 w-full'>
            <h1 className=' text-[32px] font-bricolage font-medium'>Validators</h1>
            <p className=' font-bricolage  text-sm font-light leading-none w-[90%]'>Validators will be responsible for validating the execution of dCDN Network. Validators will earn rewards from Staking and earn a cut on the executions validated.</p>
          </div>

          <div className='bg-[#0A9B6B] text-white text-xs p-1 px-3  rounded-full border-4 border-[#4deaa1] absolute bottom-5 right-5 z-10 cursor-pointer -rotate-12 '>Coming Soon</div>

          <img className='absolute bottom-0' src={patternDark} alt="" />

        </div>        

      </section>

      


    </article>
  )
}

export default Article2