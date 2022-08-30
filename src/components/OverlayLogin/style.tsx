import styled from 'styled-components';


export const Overlay = styled.div`
    width: 100%;
    height: 100%;
    position: absolute;
    pointer-events: none;

    img{
        position: absolute;
        width: 25%;
        top: -12%;
        left: -6.9%;

        &:nth-child(2){
            width: 50%;
            position: absolute;
            top: 91.8%;
            left: 70%;
        }
    }

    @media(min-width:300px){
        img{
            display: none;
        }    
    }

    @media(min-width:1200px){
        img{
            display: block;
        }    
    }
`;
