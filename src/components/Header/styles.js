import styled from 'styled-components';

export const Container = styled.header`
    grid-area: header;
    
    width: 100%;
    height: 116px;

    border-bottom-width: 1px;
    border-bottom-style: solid;
    border-bottom-color: ${({theme}) => theme.COLORS.BACKGROUND_500};

    display: flex;
    justify-content: space-between;
    align-items: center;

    padding: 0 123px;

    > h1 {
        font-size: 24px;
        color: ${({theme}) => theme.COLORS.PINK};
    }
`;

export const Search = styled.div`
    width: 800px;
    display: flex;
    align-items: center;

    background-color: ${({theme}) => theme.COLORS.BACKGROUND_700};
    color: ${({theme}) => theme.COLORS.GRAY_300};

    margin: 0 64px;
    border-radius: 10px;

    > input {
        height: 56px;

        padding: 19px 24px;

        font-size: 14px;
        color: ${({theme}) => theme.COLORS.WHITE};
        background: transparent;
        border: 0;
    }
`;

export const Profile = styled.div`
    display: flex;
    align-items: center;

    > div {
        display: flex;
        flex-direction: column;
        align-items: flex-end;
        margin-right: 9px;

        p {
            font-size: 14px;
            font-weight: 700;
            color: ${({theme}) => theme.COLORS.WHITE};
        }
    }
    
    > img {
        width: 64px;
        height: 64px;
        border-radius: 50%;
    }
`;

export const Logout = styled.button`
    border: none;
    background: none;

    font-size: 14px;
    color: ${({theme}) => theme.COLORS.GRAY_300};
`;