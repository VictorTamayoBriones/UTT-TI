import styled from 'styled-components';
import { theme } from '../../../theme';

export const ButtonStyled = styled.button`
    width: 100%;
    padding: 5px 0;
    border: solid 1px ${ theme.blue.contrast };
    background: none;
    color: ${ theme.blue.contrast };
    border-radius: 3px;
    cursor: pointer;
    transition: ease-in all .2s;

    &:hover{
        background: ${ theme.blue.contrast };
        border: solid 1px ${ theme.blue.color };
        color: ${ theme.blue.color };
    }
`