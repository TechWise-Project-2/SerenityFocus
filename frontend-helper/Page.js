
import { useState, useEffect } from "react";
import { FaVolumeMute, FaVolumeUp } from "react-icons/fa";
import { TbMusicOff, TbMusic } from "react-icons/tb";
import { FaCircleMinus, FaCirclePlus } from "react-icons/fa6";


const Home = ({ value}) => {  
  const timer = `${new Date().getHours()}:${new Date().getMinutes()}`
  const [counter, setCounter] = useState<number>(59);

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (counter > 0){
        setCounter(counter - 1);
      }
    }, 1000);

    return () => clearInterval(intervalId);
  }, [counter]);
  
  
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-10 bg-orange-300 dark:bg-neutral-800">
      <section className="">
        {/* inert timer  */}
        <div className="flex flex-col items-center content-center justify-items-center p-25">
          <div className="timer text-neutral-900">
            <div className="grid grid-flow-col gap-5 text-center auto-cols-max">
              <div className="flex flex-col">
                <span className="countdown font-mono text-5xl">
                  <span style={{"--value": 10}}></span>
                </span>
                hours
              </div> 
              <div className="flex flex-col">
                <span className="countdown font-mono text-5xl">
                  <span style={{"--value":24}}></span>
                </span>
                min
              </div> 
              <div className="flex flex-col">
                <span className="countdown font-mono text-5xl">
                  <span style={{"--value": counter}}></span>
                </span>
                sec
              </div>
            </div>
          </div>

          <div className="my-5">
            <button className="inline hover:opacity-50">
              <FaCircleMinus className="fill-content text-amber-600"/>
            </button>

            <p className="inline px-10 text-2xl text-orange-950">{timer}</p>

            <button className="inline hover:opacity-50">
              <FaCirclePlus className="fill-content text-amber-600"/>
            </button>
          </div>

          <div>
            <button className="rounded-full bg-amber-600 px-7 py-1 hover:opacity-75">
              Start
            </button>
          </div>
        </div>

        {/* mute / sound toggle */}
        <div className="absolute bottom-10 left-10 text-neutral-900">
          <label className="swap">
            <input type="checkbox"/>

            <FaVolumeMute className="swap-off fill-current w-10 h-10"/>

            <FaVolumeUp className="swap-on fill-current w-10 h-10"/>

          </label>
        </div>

        {/* music toggle */}
        <div className="absolute bottom-10 right-10 text-neutral-900">
          <label className="swap">
            <input type="checkbox"/>

            <TbMusic className="swap-on  w-10 h-10"/>
            <TbMusicOff className="swap-off  w-10 h-10"/>
          </label>
        </div>
      </section>
    </main>
  )
}

export default Home;