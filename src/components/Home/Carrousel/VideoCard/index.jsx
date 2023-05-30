import React from 'react';
import styled from 'styled-components';

// el border deberia de traerse de .json segun la categoria del video

const StyleIframe = styled.iframe`
    width: 100%;
    height: 100%;
    border: 1px solid red;
`

const VideoCard = ({video}) => {

    return (
        <StyleIframe>
            <div>
                <p>{video}</p>
            </div>
            {/* <iframe width="1280" height="720" srcDoc={video} sandbox ='allow-same-origin' loading='eager'></iframe> */}
        </StyleIframe>
    )
}

export default VideoCard;