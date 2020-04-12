import React from 'react'
import ReactPlayer from 'react-player'

const player = ({ url, controls }) => {
    return (
        <div>
            <ReactPlayer
                url={url}
                config={{
                    youtube: {
                        playerVars: { showinfo: 1 }
                    },
                }}
                controls
            />
        </div>
    )
}

export default player;