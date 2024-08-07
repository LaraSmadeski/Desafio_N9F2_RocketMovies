import styled from "styled-components";

export const Container = styled.span`
    font-size: 12px;
    padding: 5px 13px;
    border-radius: 8px;
    margin-right: 8px;
    color: ${({theme}) => theme.COLORS.GRAY_200};
    background-color: ${({theme}) => theme.COLORS.BACKGROUND_600};
`;