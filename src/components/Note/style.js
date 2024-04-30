import styled from 'styled-components';

export const Container = styled.button`
    background-color: ${({theme}) => theme.COLORS.BACKGROUND_400};
    border: none;
    border-radius: 16px;

    padding: 32px 32px;
    margin-right: 123px;
    margin-left: 123px;
    margin-bottom: 24px;

    display: flex;
    flex-direction: column;
    align-items: flex-start;
    
    > h1 {
        padding-bottom: 8px;
        font-size: 24px;
        font-weight: 700;

        color: ${({theme}) => theme.COLORS.WHITE};
    }

    > div {
        svg {
            font-size: 12px;
            color: ${({theme}) => theme.COLORS.PINK};
            margin-right: 6px;
            margin-bottom: 15px;
        }
    }

    > p {
        text-align: justify;
        font-size: 16px;
        color: ${({theme}) => theme.COLORS.GRAY_400};
        margin-bottom: 15px;
    }
`;