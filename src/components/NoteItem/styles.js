import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    align-items: center;

    background-color: ${({theme, isNew}) => isNew ? "transparent" : theme.COLORS.BACKGROUND_700};
    color: ${({theme}) => theme.COLORS.WHITE_WHITE};

    border: ${({theme, isNew}) => isNew ? `1px dashed ${theme.COLORS.GRAY_300}` : "none"};

    margin-right: 24px;
    border-radius: 10px;
    padding-right: 16px;

    > button {
        border: none;
        background: none;
    }

    .button-delete, .button-add {
        color: ${({theme}) => theme.COLORS.PINK};
        font-size: 24px;
        margin-bottom: -5px;
    }

    > input {
        height: 56px;
        width: 100%;

        padding: 12px;

        color: ${({theme}) => theme.COLORS.WHITE_WHITE};
        background: transparent;

        border: none;

        &::placeholder {
            color: ${({theme}) => theme.COLORS.GRAY_300};
        }
    }
`