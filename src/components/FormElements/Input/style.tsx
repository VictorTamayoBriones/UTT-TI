import styled from 'styled-components';
import { theme } from '../../../theme';

export const InputStyled = styled.div`
    width: 100%;
    margin: 50px 0;
    display: flex;
    flex-direction: column;
    position: relative;



    label{
        width: 100%;
        letter-spacing: 1px;
        z-index: 1;
        pointer-events: none;
        transform: translateX(5px) translateY(5px);
        color: ${ theme.label.color };
        transition: ease-in all .2s;
    }

    input{
        width: 100%;
        position: absolute;
        caret-color: ${ theme.blue.color };
        padding: 5px;
        outline: none;
        &:focus{
            &~label{
                color: ${ theme.blue.contrast };
                transform: translateY(-25px);
            }
        }
    }




`;