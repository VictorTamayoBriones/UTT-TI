import styled from 'styled-components';
import { theme } from '../../../theme';

export const Nav = styled.nav`
    width: 100vw;
    padding: 10px 20px;
    display: block;
    background: ${ theme.blue.color };
    display: flex;
    justify-content: space-between;
    align-items: center;

    h3{
        font-weight: 400;
        letter-spacing: 1px;
    }

    ul{
        display: flex;
        align-items: center;
        list-style: none;
        gap: 20px;
        a{
            text-decoration: none;
            letter-spacing: .5px;
        }
        button{
            background: ${ theme.error.color };
            color: ${ theme.error.contraste };
            border: none;
            border-radius: 3px;
            padding: 3px 9px;
            &:hover{
                background: #ca084c;
            }
        }
    }
`;