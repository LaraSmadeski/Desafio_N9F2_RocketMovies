import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    height: 100vh;

    display: grid;
    grid-template-areas: 
    "header"
    "button"
    "content";

    .button {
        margin-left: 123px;
        margin-top: 40px;
    }
`;

export const Content = styled.div`
    grid-area: content;
    overflow-y: auto;

    &::-webkit-scrollbar {
        width: 8px;
    }

    &::-webkit-scrollbar-thumb {
        background-color: ${({theme}) => theme.COLORS.PINK};
        border-radius: 8px;
    }

    margin: 24px 123px;

    > div {
        display: flex;

        > h1 {
            font-size: 36px;
            font-weight: 500;

            margin-right: 19px;
            margin-bottom: 24px;
        }

        .stars {
            display: flex;
            align-items: center;

            font-size: 20px;
            color: ${({theme}) => theme.COLORS.PINK};
        }

        svg {
            margin-right: 10px;
        }
    }

    > p {
        margin-top: 40px;
        margin-right: 24px;
        text-align: justify;

        font-weight: 400;
        font-size: 16px;
    }
`;

export const By = styled.div`
    display: flex;
    margin-bottom: 40px;
    
    .name, .timestamp {
        display: flex;
        align-items: center;

        margin-right: 16px;
    }

    .name img {
        width: 16px;
        height: 16px;
        border-radius: 50%;

        margin-right: 8px;
    }

    .name p, .timestamp p {
        font-size: 16px;
        color: ${({theme}) => theme.COLORS.WHITE};
    }

    .timestamp svg {
        width: 16px;
        height: 16px;
        border-radius: 50%;

        margin-right: 8px;
        color: ${({theme}) => theme.COLORS.PINK};
    }
`;