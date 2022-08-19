import styled from 'styled-components';


export const Overlay = styled.div`
    width: 100%;
    height: 100%;
    position: absolute;
    pointer-events: none;

    img{
        position: absolute;
        width: 80%;
        top: -13%;
        left: -8%;

        &:nth-child(2){
            width: 50%;
            position: absolute;
            top: 86%;
            left: 70%;
        }
    }

`;
