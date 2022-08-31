import styled from 'styled-components';
import { theme } from '../../../theme';
import { IAlert } from '../model/alert.model';

export const AlertContainer = styled.div<IAlert>`
    width: 30%;
    display: ${(props)=> props.status === 'visible' ? 'block' : 'none'};
    background: ${(props)=> props.type === 'error' ? theme.error.color : props.type === 'success' ? theme.success.color : ''};
    border: solid 1px ${(props)=> props.type === 'error' ? theme.error.contraste : props.type === 'success' ? theme.success.contrast : ''};
    text-align: center;
    border-radius: 3px;
    position: absolute;
    opacity: 0;
    top: 10%;
    left: 35%;
    animation: alertStart 4s cubic-bezier(0, 0, 0, 1.08);
    z-index: 100;

    p{
        padding: 5px;
    }

    @keyframes alertStart {
        0%{
            opacity: 0;
            top: -10%;
        }
        10%{
            opacity: 1;
            top: 10%;
        }
        80%{
            opacity: 1;
            top: 10%;
        }
        100%{
            opacity: 0;
            top: -10%;
        }
    }
`;
