import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.header`
    grid-area: header;

    height: 105px;
    width: 100%;

    border-bottom: 1px solid ${({theme}) => theme.COLORS.BACKGROUND_400};

    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 123px;

    h1 {
        font-size: 24px;
        font-weight: 700;
        color: ${({theme}) => theme.COLORS.PINK};
    }
`;

export const Search = styled.div`
    input {
        width: 630px;
        height: 56px;

        border: 0;
        border-radius: 10px;

        background-color: ${({theme}) => theme.COLORS.BACKGROUND_700};
        color: ${({theme}) => theme.COLORS.GRAY_300};

        font-size: 14px;
        padding: 24px;
    }
`;

export const Logout = styled.div`
    display: flex;
    position: absolute;
    right: 190px;
    top: 55px;
    font-size: 14px;
    color: ${({ theme }) => theme.COLORS.GRAY_100};
    cursor: pointer;
`;

export const Profile = styled(Link)`
    display: flex;
    align-items: center;
    
    > img {
        width: 56px;
        height: 56px;
        border-radius: 50%;
        border: 1px solid ${({ theme }) => theme.COLORS.BACKGROUND_600};
    }

    > strong {
        display: flex;
        flex-direction: column;
        margin-right: 9px;
        margin-bottom: 15px;
        line-height: 24px;
        font-size: 18px;
        color: ${({ theme }) => theme.COLORS.GRAY_100};
    }
`;