import React from "react"
import Fade from '../components/react-reveal/fade'
import Player from '../components/react-player/player'
const songContainer = ({ data }) => {
    const option = { left: false, right: false, up: true, down: false };
    console.log(data)
    return (
        <Fade option={option}>
            <div>
                <p>Name: {data.name}</p>
                <p>Artist: {data.artist}</p>
                <p>Lyrics: {data.lyrics}</p>
            </div>
            <div>
                <p>link: {data.youtubeLink}</p>
                <Player url={data.youtubeLink} controls/>
            </div>
        </Fade>
    );
}

export default songContainer;