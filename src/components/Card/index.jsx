// import {  useState, useEffect } from 'react';
// import styled from 'styled-components';
// import { buscar } from '../../api/api';



// el border deberia de traerse de .json segun la categoria del video

// const StyleIframe = styled.iframe`
//     width: 100%;
//     height: 100%;
// `

// const Card = ({url}) => {
//     const [videos, setVideos] = useState([]);

//     useEffect( ()=> {
//         buscar(url,setVideos);
//     }, [url])


//     return (
//         <StyleCard>
//             {
//             videos.map(video => {
//                 const { id , url} = video;
//                 return <iframe key={id} width="1280" height="720" src={url} title="Qué Significa Pensar Como Programador" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>    
//             })
//             }
//         </StyleCard>
//     )
// }

// export default Card;