import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 100vh;

    display: grid;
    grid-template-rows: 105px auto;
    grid-template-areas:
    "header"
    "content";
`;

export const Content = styled.div`
    grid-area: content;
    padding: 40px 123px;

    .top {
        display: flex;
        align-items: center;
        gap: 20px;

        margin-top: 24px;
        margin-bottom: 24px;
    }

    .mid {
        display: flex;
        align-items: center;
        margin-top: 24px;
        margin-bottom: 40px;
        

        > svg {
            color: ${({theme}) => theme.COLORS.PINK};
            margin-right: 8px;
        }

        span {
            font-size: 16px;
            font-weight: 400;
            color: ${({theme}) => theme.COLORS.GRAY_100};
            margin-right: 8px;
        }

        img {
            width: 16px;
            height: 16px;
            border-radius: 50%;
            border: 1px solid ${({theme}) => theme.COLORS.BACKGROUND_600};
            margin-right: 8px;
        }
    }

    p {
        color: ${({theme}) => theme.COLORS.GRAY_100};
        font-weight: 400;

        margin-top: 40px;
        margin-bottom: 60px;
    }
`;