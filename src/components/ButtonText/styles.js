import styled from 'styled-components';

export const Container = styled.button`
    display: flex;
    align-items: center;

    font-size: 16px;
    color: ${({theme}) => theme.COLORS.PINK};

    background: none;
    border: none;

    svg {
        width: 16px;
        height: 16px;

        margin-right: 8px;
        color: ${({theme}) => theme.COLORS.PINK};
    }
`;