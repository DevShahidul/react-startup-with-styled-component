import styled from 'styled-components';
import { ButtonStyle, ButtonHover } from '../../../globalStyles';

export const Button = styled.button`
    ${ButtonStyle};
    &:hover{
        ${ButtonHover}
    }
`;

