import styled from 'styled-components';

export const ModalOverLay = styled.div<{status?: string}>`
    width: 100vw;
    display: ${(props)=> props.status === 'visible' ? 'block' : props.status === 'hidden' ? 'none' : 'none'};
    height: 100vh;
    background: #000000a5;
    position: absolute;
    top: 0;
    z-index: 101;
`;