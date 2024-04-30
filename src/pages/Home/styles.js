import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    height: 100vh;

    display: grid;
    grid-template-areas: 
    "header"
    "section"
    "content"
    ;

    > Section {
        button {
            display: flex;
            align-items: center;
            border: none;
            border-radius: 8px;
            padding: 16px 32px;
            background-color: ${({theme}) => theme.COLORS.PINK};

            font-size: 16px;
            color: ${({theme}) => theme.COLORS.BACKGROUND_800};
        }

        svg {
            margin-right: 8px;
            font-size: 16px;
        }
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
`;