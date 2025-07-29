import { Board } from '@/entities/board'

function HomePage() {
  return (
    <div
      className='relative mx-auto mt-10 min-h-[888px] w-full max-w-[1440px]
        overflow-hidden rounded-[48px] bg-vimpireBlack'>
      <div>
        <div
          className='absolute right-0 size-[100px] -translate-y-[60%]
            translate-x-[15%] rounded-full bg-lightGreen opacity-40 blur-3xl
            lg:size-[402px] lg:blur-[277px]'></div>
        <div
          className='absolute bottom-0 left-0 size-[100px] bg-paradiseRed
            opacity-40 blur-3xl lg:size-[402px] lg:blur-[277px]'></div>
        <img
          src='./website-icons/Candles.png'
          className='absolute'></img>
        <img
          src='./website-icons/Dots.png'
          className='absolute'></img>
        <div
          className='absolute inset-0 mx-auto flex max-w-[700px] flex-col
            items-center gap-6 px-4 pt-20 text-center'>
          <h1
            className='text-center font-Nexa text-5xl font-bold
              text-trafficWhite'>
            Maximize your wealth with Expert{' '}
            <span className='text-tangerine'>Stock Advice</span>
          </h1>

          <p className='text-center font-PTSerif text-lg text-silverGray'>
            Expert insights, data-driven strategies, and personalized stock
            recommendations to grow your wealth with confidence.
          </p>
          <div
            className='flex items-center justify-between gap-2 font-Nexa
              text-trafficWhite'>
            <button
              className='primary-button text-md flex items-center justify-center
                rounded-[8px] px-6 py-3 uppercase'>
              Get Started
            </button>
            <div
              className='text-md flex items-center justify-center rounded-[8px]
                bg-gradient-to-r from-[#FF8A65] to-[#FF5722] p-[1px]'>
              <button
                className='rounded-[8px] bg-[#161617] px-6 py-3 uppercase
                  text-white'>
                Contact Us
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className='relative top-[100px]'>
        <Board />
      </div>
    </div>
  )
}

export const Component = HomePage
