import React from 'react'

const Username = ({ params }) => {
    return (
        <>
            {params.username}
            < div className='cover w-full' >
                <img src="https://c10.patreonusercontent.com/4/patreon-media/p/campaign/70936/fccab496244a439ea726d3177546295a/eyJ3IjoxMjAwLCJ3ZSI6MX0%3D/9.png?token-time=1746316800&token-hash=JJ_OPoi-GHPMgS65IlPoRe5wxs--VuiOJeM3tNQ1SQY%3D" alt="" />
                <div>
                    <img width={50} src="https://i.pinimg.com/474x/7a/23/b1/7a23b17de2db58d12f3561351c793e05.jpg" alt="" />
                </div>
            </div >
        </>
    )
}

export default Username
