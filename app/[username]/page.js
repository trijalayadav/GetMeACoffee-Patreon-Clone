import React from 'react'

const Username = ({ params }) => {
    return (
        <>
            < div className='cover top-0' >
                <img className='w-full h-80' src="https://c10.patreonusercontent.com/4/patreon-media/p/campaign/70936/fccab496244a439ea726d3177546295a/eyJ3IjoxMjAwLCJ3ZSI6MX0%3D/9.png?token-time=1746316800&token-hash=JJ_OPoi-GHPMgS65IlPoRe5wxs--VuiOJeM3tNQ1SQY%3D" alt="" />
                <div className='relative bottom-10 flex flex-col items-center'>
                    <img className='w-28 h-28 border border-black border-1 rounded-md' src="https://i.pinimg.com/474x/7a/23/b1/7a23b17de2db58d12f3561351c793e05.jpg" alt="" />
                    <div className='info flex flex-col justify-center items-center gap-2'>
                        <div className='font-bold'>{params.username}</div>
                        <div className=''>Making mountains out of molehills</div>
                        <button className='bg-white text-black font-medium border-white border-1 rounded-md py-2 px-14'>Join for free</button>
                        <div>
                            <svg data-tag="IconBrandInstagram" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12 3.803c2.67 0 2.987.01 4.042.058 2.71.123 3.975 1.409 4.099 4.099.048 1.054.057 1.37.057 4.04 0 2.672-.01 2.988-.057 4.042-.124 2.687-1.387 3.975-4.1 4.099-1.054.048-1.37.058-4.041.058-2.67 0-2.987-.01-4.04-.058-2.718-.124-3.977-1.416-4.1-4.1-.048-1.054-.058-1.37-.058-4.041 0-2.67.01-2.986.058-4.04.124-2.69 1.387-3.977 4.1-4.1 1.054-.047 1.37-.057 4.04-.057M12 2c-2.716 0-3.056.012-4.122.06-3.632.167-5.65 2.182-5.817 5.817C2.01 8.944 2 9.284 2 12s.012 3.057.06 4.123c.167 3.632 2.182 5.65 5.817 5.817 1.067.048 1.407.06 4.123.06s3.057-.012 4.123-.06c3.629-.167 5.652-2.182 5.816-5.817.05-1.066.061-1.407.061-4.123s-.012-3.056-.06-4.122c-.163-3.629-2.18-5.65-5.816-5.817C15.057 2.01 14.716 2 12 2m0 4.865a5.135 5.135 0 1 0 0 10.27 5.135 5.135 0 0 0 0-10.27m0 8.468a3.333 3.333 0 1 1 0-6.666 3.333 3.333 0 0 1 0 6.666m5.338-9.87a1.2 1.2 0 1 0 0 2.4 1.2 1.2 0 0 0 0-2.4"></path></svg>
                            <svg data-tag="IconBrandTiktok" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M20.497 10.092a5.275 5.275 0 0 1-3.01-.617 5.316 5.316 0 0 1-1.916-1.773v8.222a6.106 6.106 0 0 1-1.017 3.375 6.045 6.045 0 0 1-2.709 2.239 5.998 5.998 0 0 1-3.487.345 6.023 6.023 0 0 1-3.09-1.663 6.09 6.09 0 0 1-1.652-3.11 6.114 6.114 0 0 1 .343-3.512 6.068 6.068 0 0 1 2.223-2.727 6.007 6.007 0 0 1 3.354-1.024c.126 0 .249.012.373.02v2.994c-.124-.015-.246-.038-.373-.038-.817 0-1.6.327-2.179.908a3.112 3.112 0 0 0 0 4.386 3.07 3.07 0 0 0 2.179.909c1.701 0 3.204-1.35 3.204-3.063L12.77 2h2.845A5.35 5.35 0 0 0 17.2 5.275a5.284 5.284 0 0 0 3.3 1.489v3.328"></path></svg>
                        </div>
                    </div>
                </div>
            </div>
            <div className='flex justify-center gap-5 py-2'>
                <div>Home</div>
                <div>About</div>
            </div>
            <hr />
            <div className='payment mt-10'>

                <div className='Home'>
                    <h2>Choose your membership</h2>
                    <div>
                        <h3>Low-land Pioneer</h3>
                        <div>$5 / month</div>
                        <button>Join</button>
                    </div>
                    <div>
                        <div>YOU MIGHT LIKE</div>
                        <div>
                            <h3>Mound Conqueror</h3>
                            <div>$10 / month</div>
                            <button>Join</button>
                        </div>
                    </div>
                    <div>
                        <h3>Norfolk Summit Club</h3>
                        <div>$20 / month</div>
                        <button>Join</button>
                    </div>
                    <div>
                        <img src="https://c5.patreon.com/external/gifting/gift_white_three_times_loop.gif" alt="" />
                        <div>Gift membership</div>
                        <div>Bring the world of Ben Woodier to your friends and family.</div>
                        <button>Gift</button>
                    </div>
                </div>
                <div className='About flex flex-col items-center gap-3'>
                    <div className='bg-gray-800 w-[50vw] border-gray-800 border-1 rounded-lg p-5'>I’m Ben Woodier, an explorer of Norfolk’s "mountainous" terrain. If you’re wondering what Norfolk has in the way of peaks... so am I.

                        I documents my relentless search for these mythical summits, from the dizzying heights of Beeston Bump to any raised bit of earth that dares to stand above sea level.

                        It’s a saga of disappointment with a suspicious amount of dedication to finding high ground where there is none.

                        Join if you’d like to support the misadventures.
                    </div>
                    <div className='bg-gray-800 w-[50vw] border-gray-800 border-1 rounded-lg flex flex-col p-5 items-center'>
                        <div>Total members</div>
                        <div className='font-semibold'>2</div>
                    </div>
                </div>
            </div>


        </>
    )
}

export default Username
