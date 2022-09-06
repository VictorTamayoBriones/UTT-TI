import styled from 'styled-components';
import { theme } from '../../../../../theme';

export const Header=styled.header`
    width: 100%;
    height: 40px;
    background: #2b2b2b;
    border-radius: 3px 3px 0 0;
    display: flex;
    align-items: center;
    padding: 0 10px;
    gap: 10px;
`;

export const Dot = styled.div`
    width: 15px;
    height: 15px;
    border-radius: 50%;

    &:nth-child(1){
        background: ${ theme.error.color };
    }
    &:nth-child(2){
        background: ${ theme.warning.color };
    }
    &:nth-child(3){
        background: ${ theme.success.color };
    }
`;