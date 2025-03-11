import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="flex flex-col justify-center items-center text-white h-[44vh]">
        <div className="font-bold text-3xl flex gap-3">
          <span>Buy me a Coffee</span>
          <span><img className="mx-auto" width={44} src="/coffee-gif.gif" alt="" /></span>
        </div>
        <p>Love what I’m building? Your support means the world! Every coffee helps me keep creating, coding, and sharing awesome projects. If you’d like to show some love, this is a great way to do it. Thanks for your support! 🙌🚀</p>
        <div>
          <button type="button" className="text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Start Now</button>
          <button type="button" className="text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Read more</button>
        </div>
      </div>
      <div className="bg-white h-1 opacity-5"></div>
      <div className="text-white space-y-5 flex flex-col text-center justify-center m-2 py-10">
        <h2 className="text-2xl font-bold">Your fans can buy you a coffee</h2>
        <div className="flex gap-5 justify-around ">
          <div className="item space-y-3 flex justify-center items-center flex-col">
            <img className="bg-slate-400 border-1 rounded-md mx-auto p-1" width={44} src="/working.png" alt="" />
            <div>
              <p className="">Fund Yourself</p>
              <p>Your fans are available to help you</p>
            </div>
          </div>
          <div className="item space-y-3 flex justify-center items-center flex-col">
            <img className="bg-slate-400 border-1 rounded-md mx-auto p-1" width={44} src="/coin.png" alt="" />
            <div>
              <p className="">Fund Yourself</p>
              <p>Your fans are available to help you</p>
            </div>
          </div>
          <div className="item space-y-3 flex justify-center items-center flex-col">
            <img className="bg-slate-400 border-1 rounded-md mx-auto p-1" width={44} src="/group.png" alt="" />
            <div>
              <p className="">Fans want to help</p>
              <p>Your fans are available to help you</p>
            </div>
          </div>

        </div>
      </div>
      <div className="bg-white h-1 opacity-5"></div>
      <div className="text-white space-y-5 flex flex-col text-center justify-center m-2 py-10 items-center">
        <h2 className="text-2xl font-bold">Learn more about us</h2>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/KZ9Z2IcsdV4?si=BRApYQGioJJ-j-zJ" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
      </div >
    </>
  );
}
