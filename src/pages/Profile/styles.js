import styled from "styled-components";

export const Container = styled.div`
    background-color: ${({theme}) => theme.COLORS.BACKGROUND_300};
    height: 144px;

    a {
        button {
            padding-top: 64px;
            padding-left: 144px;
        }
    }
`;

export const Avatar = styled.div`
    position: relative;
    margin: -60px auto 64px;

    width: 186px;
    height: 186px;

    > img {
        width: 186px;
        height: 186px;
        border-radius: 50%;
    }

    > label {
        width: 48px;
        height: 48px;

        background-color: ${({theme}) => theme.COLORS.PINK};
        border-radius: 50%;

        display: flex;
        align-items: center;
        justify-content: center;

        position: absolute;
        bottom: 7px;
        right: 7px;

        cursor: pointer;

        input {
            display: none;
        }

        svg {
            width: 20px;
            height: 20px;
            color: ${({theme}) => theme.COLORS.BACKGROUND_600};
        }
    }
`;

export const Form = styled.form`
    max-width: 340px;
    margin: 30px auto 0;

    > div:nth-child(4){
        margin-top: 24px;
    }

    > button {
        width: 100%;

        font-size: 16px;
        font-weight: 500;

        border: none;
        border-radius: 10px;

        padding: 15px;
        margin-top: 24px;

        background-color: ${({theme}) => theme.COLORS.PINK};
        color: ${({theme}) => theme.COLORS.BACKGROUND_600};
    }
`;