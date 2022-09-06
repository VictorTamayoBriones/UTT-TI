import styled from 'styled-components';
import { theme } from '../../../theme';

export const Card = styled.div`
    width: max-content;
    min-width: 300px;
    height: 80px;
    background: ${(props)=>props.color ? props.color : 'teal'};
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: space-around;
    border-radius: 3px;
    cursor: pointer;
    transition: ease all .3s;

    p{
        width: 50%;
        font-size: 20px;
        letter-spacing: 1px;
    }

    &:hover{
        box-shadow: 0px 0px 9px #7d7d7d;
        div{
            svg{
                scale: 3.5;
                transform: translateX(-20%);
                opacity: .5;
            }
        }
    }
`;

export const ImageCard = styled.div`
    width: 30%;
    display: flex;
    justify-content: flex-end;
    padding: 0 5% 0 0;
    svg{
        opacity: .7;
        scale: 2.5;
        transition: ease-in all .3s;
    }
`;

export const LabelCard = styled.label`
    color: ${ theme.error.color };
    margin-top: -4%;
`;