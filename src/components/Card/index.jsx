import {  useState, useEffect } from 'react';
import styled from 'styled-components';
import { buscar } from '../../api/api';
import { colorGray, colorFrontend } from '../UI/variables'

const StyleCard = styled.div`
    width: 40%;
    min-width: 25%;
    height: 90%;
    border: 4px solid ${colorFrontend} ;
    border-radius: 4px;
    color:${colorGray};
`

// el border deberia de traerse de .json segun la categoria del video

const StyleIframe = styled.iframe`
    width: 100%;
    height: 100%;
`

const Card = (url) => {
    const [video, setVideo] = useState([]);

    useEffect( ()=> {
        buscar(url,setVideo);
    }, [url])

    return (
        <StyleCard>
            {/* <StyleIframe width="1280" height="720" src="https://www.youtube.com/embed/ov7vA5HFe6w" title="Qué Significa Pensar Como Programador" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></StyleIframe> */}
        </StyleCard>
    )
}

export default Card;