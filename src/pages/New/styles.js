import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    height: 100vh;

    display: grid;
    grid-template-areas: 
    "header"
    "section"
    "content";

    a {
        margin: 40px 123px 0;
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

    > h1 {
        font-weight: 500;
        font-size: 36px;
        color: ${({theme}) => theme.COLORS.WHITE};

        margin-bottom: 40px;
    }

    .input {
        display: flex;
        flex-direction: row;
        gap: 40px;
        margin-bottom: 40px;

        > input {
            border: none;
            border-radius: 10px;

            padding: 18px 16px;

            font-size: 16;
            color: ${({theme}) => theme.COLORS.GRAY_300};
            background-color: ${({theme}) => theme.COLORS.BACKGROUND_700};
        }
    }

    > h2 {
        margin-bottom: 24px;

        font-size: 20px;
        font-weight: 400;
        color: ${({theme}) => theme.COLORS.GRAY_400};
    }

    .tags {
        display: flex;
        flex-wrap: wrap;

        background-color: ${({theme}) => theme.COLORS.BACKGROUND_900};
        padding: 16px;
        border-radius: 10px;

        margin-bottom: 40px;
    }

    .buttons {
        display: flex;
        justify-content: space-between;
        gap: 40px;

        > button {
            width: 100%;
            border: none;
            border-radius: 10px;
            
            padding: 17px;

            font-weight: 500;
            font-size: 16px;
        }

        .delete {
            background-color: ${({theme}) => theme.COLORS.BACKGROUND_900};
            color: ${({theme}) => theme.COLORS.PINK};
        }

        .add {
            background-color: ${({theme}) => theme.COLORS.PINK};
            color: ${({theme}) => theme.COLORS.BACKGROUND_600};
        }
    }
`;