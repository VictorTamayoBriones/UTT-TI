import styled from 'styled-components';

export const TableMain = styled.div`
    width: 100%;
    table{
        width: 100%;
        text-align: center;
        .hours{
            width: 120px;
        }
        td{
            cursor: pointer;
            height: 100px;
            background: teal;
            p{
                pointer-events: none;
            }
        }
    }
`;