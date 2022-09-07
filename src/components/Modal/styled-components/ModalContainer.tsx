import styled from 'styled-components';
import { theme } from '../../../theme';

export const ModalContainer = styled.div`
    width: 50%;
    height: 50%;
    position: absolute;
    left: 25%;
    top: 25%;
    border-radius: 5px;
    border: solid 1px ${ theme.blue.contrast };
    background: ${ theme.blue.color };
`;