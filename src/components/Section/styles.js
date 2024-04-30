import styled from 'styled-components';

export const Container = styled.section`
    grid-area: section;

    margin: 40px 123px;

    display: flex;
    align-items: center;
    justify-content: space-between;

    > h2 {
        color: ${({theme}) => theme.COLORS.WHITE_WHITE};
        font-size: 32px;
        font-weight: 400;
    }
`;