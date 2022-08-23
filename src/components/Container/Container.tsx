import styled from 'styled-components';
import { theme } from '../../theme';

export const Container = styled.div<{width?: string}>`
    width: ${(props)=> props.width ? props.width : '100%'};
    height: 55vh;
    background: ${ theme.blue.color };
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: relative;
`;