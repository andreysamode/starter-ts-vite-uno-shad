import { useState } from 'react';
import { Button } from './components/ui/button';

export default function App() {
  const [coinState, setCoinState] = useState('');
  const coinCast = () => {
    if (coinState === '') {
      if (Math.random() < 0.5) {
        setCoinState('heads');
      } else {
        setCoinState('tails');
      }
    }
  }

  return (
    <main className='w-full h-100vh mx-auto py-5 flex flex-col gap-2 items-center justify-start text-center
    bg-([radial-gradient(at_top_left,#f0e9df_10%,transparent_40%,transparent_60%,#dfe0f0_100%)] center no-repeat)'>
      <h1 className='uppercase tracking-2 font-400'>Andrey's Starter Project</h1>
      <div className='uppercase font-400 tracking-1'>TypeScript + Vite + UnoCSS + shadcn/ui</div>
      <div className='pt-55px text-center flex w-fit mx-auto
        [&>.heads]:(animate-flipHeads animate-forwards) 
        [&>.tails]:(animate-flipTails animate-forwards)'>
        <div className={`${coinState} relative mx-10px w-100px h-100px transition duration-1000 ease-in preserve-3d
          [&>div]:(w-100px h-100px rounded-full shadow-[0_12px_20px_-10px_#777] bg-contain absolute backface-hidden)`}>
          <div className='bg-[url(/images/coin-front.png)] z-100' onMouseEnter={coinCast}></div>
          <div className='bg-[url(/images/coin-back.png)] -rotate-y-180' onMouseEnter={coinCast}></div>
        </div>
      </div>
      <Button className='mt-20 shadow-sm tracking-0.25 !font-400' variant='outline' disabled={coinState === '' ? true : false } onClick={() => setCoinState('')}>RESET</Button>
    </main>
  )
}
