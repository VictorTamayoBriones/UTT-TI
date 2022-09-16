import styled from 'styled-components';
import { theme } from '../../../../../../theme';

export const ModalContainer = styled.div`
    width: 50%;
    height: 80vh;
    margin: 10vh auto;
    background: ${ theme.blue.color };
    border: solid 1px ${ theme.blue.contrast };
    border-radius: 5px;
`;