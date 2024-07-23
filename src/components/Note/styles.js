import styled from "styled-components";

export const Container = styled.button`
    background: #272024;
    border: 0;
    border-radius: 16px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 32px;

    h1 {
        font-size: 24px;
        color: ${({theme}) => theme.COLORS.GRAY_100};
        margin-bottom: 8px;
    }

    p {
        text-align: justify;
        font-weight: 400;
        color: ${({theme}) => theme.COLORS.GRAY_400};
        margin: 15px 0;
    }
`;