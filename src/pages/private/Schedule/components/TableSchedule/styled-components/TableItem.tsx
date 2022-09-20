import styled from 'styled-components';

interface Props{
    color: string
}

export const TableItemSchedule = styled.td<Props>`
    background: ${(props)=>props.color ? props.color : 'orange'} !important;
`;