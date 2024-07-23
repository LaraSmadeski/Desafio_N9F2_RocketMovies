import styled from "styled-components";

export const Container = styled.div`
    main {
        margin: 40px 123px;
    }
`;

export const Content = styled.form`
    margin-top: 24px;

    h1 {
        font-size: 36px;
        font-weight: 500;
        color: ${({theme}) => theme.COLORS.GRAY_100};
        margin-bottom: 40px;
    }

    .top {
        display: flex;
        gap: 40px;

        margin-bottom: 40px;

        input {
            width: 50%;
            padding: 18px 16px;
            border: 0;
            border-radius: 10px;
            background-color: ${({theme}) => theme.COLORS.BACKGROUND_700};
        }
    }

    .tags {
        margin-top: 24px;
        background-color: ${({theme}) => theme.COLORS.BACKGROUND_900};
        padding: 16px;
        border-radius: 10px;

        display: flex;
        gap: 24px;
    }

    .buttons {
        display: flex;
        gap: 40px;
        margin-top: 40px;

        button:first-child {
            width: 100%;
            background-color: ${({theme}) => theme.COLORS.BACKGROUND_900};
            color: ${({theme}) => theme.COLORS.PINK};

            height: 56px;
            border: 0;
            border-radius: 10px;
            padding: 0, 16px ;
            font-weight: 500;
        }
    }
`;