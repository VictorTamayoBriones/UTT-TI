import styled from 'styled-components';
import { theme } from '../../theme';

export const Container = styled.div<{width?: string}>`
    background: ${ theme.blue.color };
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: relative;
    
    @media(min-width:300px){
        width: 100%;
        height: 90vh;
    }
    
    @media(min-width:700px){
        width: 80%;
        height: 70vh;
    }
    
    @media(min-width:1200px){
        width: ${(props)=> props.width ? props.width : '100%'};
        height: 55vh;
    }
    
`;

export const ContainerSection = styled.section<{overflow?: string}>`
    width: 100%;
    height: 90vh;
    padding: 3% 5% 5% 5%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-content: flex-start;
    gap: 20px;
    overflow: ${(props)=> props.overflow ? props.overflow : 'auto'};
    h1{
        width: 100%;
        text-align: center;
    }
`;