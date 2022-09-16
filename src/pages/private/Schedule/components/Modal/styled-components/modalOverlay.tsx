import styled from 'styled-components';

interface Props{
    status: boolean
}

export const ModalOverlay = styled.div<Props>`
    width: 100vw;
    height: 100vh;
    display: ${(props)=> props.status ? 'block' : 'none' };
    background: rgba(0, 0, 0, 0.7);
    position: absolute;
    top: 0;
    left: 0;
`;