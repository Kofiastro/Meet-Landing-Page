import Image from 'next/image';

export default function Home() {
  return (
    <main className='{`${}`}'>
      {/* Hero section */}
      <section id='Hero' className='bg-Heaven overflow-clip '>
        <div className=' flex flex-col items-center justify-center '>
          {/* Add Hero Images Here */}
          <Image
            src={'/logo.svg'}
            width={119}
            height={28}
            className='mt-20 mb-16'
            alt='Logo for hero section'
          />
          <div className='flex flex-col mx-auto items-center lg:flex-row '>
            {/* Desktop left image */}
            <Image
              src={'/desktop/image-hero-left.png'}
              width={394}
              height={303}
              className='hidden lg:block  '
              alt='Desktop left image'
            />
            {/* Tablet Hero Image */}
            <Image
              src={'/tablet/image-hero.png'}
              className=' block lg:hidden'
              width={820}
              height={303}
              alt='Desktop hero image'
            />
            
            <div className=' text-center text-wrap mx-auto flex flex-col space-y-6 items-center justify-center pt-14 lg:pt-24 lg:space-y-9   '>
              <h1 className='text-DarkPink font-bold text-4xl max-w-sm md:text-6xl '>
                Group Chat for Everyone
              </h1>
              <h2 className='text-AshyPink font-semibold text-md w-2/3 md:text-lg md:tracking-tight'>
                Meet makes it easy to connect with others face-to-face virtually
                and collaborate across any device.
              </h2>
              {/* Buttons */}
              <div className='flex flex-col space-y-4 md:space-y-0  md:space-x-4 md:flex-row'>
                {/* button 1 */}
                <button className='px-14 py-4 rounded-full text-Heaven font-bold bg-Cyan hover:bg-SkyBlue'>
                  Download
                  <span className='text-heaven'> v1.3</span>
                </button>
                {/* button 2 */}
                <button className='px-14 py-4 rounded-full text-Heaven font-bold bg-ShadyPink hover:bg-PinkyPish'>
                  What is it?
                </button>
              </div>
            </div>
            {/* Desktop right image */}
            <Image
              src={'/desktop/image-hero-right.png'}
              width={394}
              height={303}
              className=' hidden lg:block'
              alt='Desktop right image'
            />
           
          </div>
        </div>
        {/* Content section */}
        {/* 01 Number indicator  */}
        <div className=' relative mt-32 mx-auto w-20 flex mb-10 rotate-90 border-b border-1 border-AshyPink '></div>
        <div className=' relative w-[52px] h-[52px] mx-auto flex font-bold mb-24 text-AshyPink items-center justify-center rounded-full border border-1 border-AshyPink'>
          01
        </div>
        {/* Cards section */}
        <div className='flex flex-col items-center '>
          <div className='grid grid-cols-2 mx-9 md:grid-cols-4 gap-6 '>
            <Image
              src={'/desktop/image-woman-in-videocall.jpg'}
              width={255}
              height={242}
              className='md:block rounded-lg'
              alt=' gridimages'
            />
            <Image
              src={'/desktop/image-women-videochatting.jpg'}
              width={255}
              height={242}
              className='md:block rounded-lg'
              alt=' gridimages'
            />
            <Image
              src={'/desktop/image-men-in-meeting.jpg'}
              width={255}
              height={252}
              className=' md:block rounded-lg'
              alt=' gridimages'
            />
            <Image
              src={'/desktop/image-man-texting.jpg'}
              width={255}
              height={252}
              className=' md:block rounded-lg'
              alt=' gridimages'
            />
          </div>
        </div>
        {/* Content Section */}
        <div className='flex flex-col px-9 mx-auto mb-[184px] justify-center text-center md:px-0 max-w-md items-center space-y-5 mt-20 lg:max-w-lg'>
          <h1 className='text-Cyan uppercase font-bold text-base'>
            Built for Modern Use
          </h1>
          <h1 className='text-DarkPink font-bold text-3xl md:text-5xl '>
            Smarter meetings, all in one place
          </h1>
          <p className='text-AshyPink text-lg font-semibold'>
            Send messages, share files, show your screen, and record your
            meetings — all in one workspace. Control who can join with
            invite-only team access, data encryption, and data export.
          </p>
        </div>
        
        {/* Footer */}
        <div className='w-full absolute px-9 flex flex-col py-[92px] items-center bg-Cyan mx-auto md:px-0 lg:space-y-0 lg:justify-between lg:flex-row  lg:px-[165px] lg:h-[320px] '>
          <Image fill src={"/desktop/image-footer.jpg"} className='hidden lg:block  opacity-30 mix-blend-overlay object-cover 'alt='footer images' />
          <Image fill src={"/tablet/image-footer.jpg"} className='sm:hidden md:block lg:hidden opacity-30 mix-blend-overlay object-cover 'alt='footer images'/>
          <Image fill src={"/mobile/image-footer.jpg"} className=' block md:hidden lg:hidden opacity-30 mix-blend-overlay object-cover 'alt='footer images'/>
          <h1 className='relative font-bold text-4xl text-center lg:text-left text-Heaven max-w-sm'>
            Experience more together
          </h1>
          <h2 className=' relative font-semibold py-[32px]  text-Heaven max-w-sm text-center text-lg lg:text-left lg:w-1/3 '>
            Stay connected with reliable HD meetings and unlimited one-on-one
            and group video sessions.
          </h2>
          {/* button footer */}
          <button className='relative px-10 py-4 rounded-full text-Heaven font-bold bg-ShadyPink hover:bg-SkyBlue '>
            Download
            <span className='text-PinkyPish'> v1.3</span>
          </button>
        </div>
        {/* 02 Number indicator  */}
        <div className='-mt-16 relative'>
        <div className=' mt-32 mx-auto w-20 flex mb-10 rotate-90 border-b border-1 border-AshyPink '></div>
        <div className='w-[52px] h-[52px] mx-auto flex font-bold  text-AshyPink items-center justify-center rounded-full border border-1 border-AshyPink bg-Heaven'>
          02
        </div>
        </div>
      </section>
    </main>
  );
}
