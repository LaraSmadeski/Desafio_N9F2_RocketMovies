import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 100vh;

    display: grid;
    grid-template-rows: 105px auto;
    grid-template-areas:
    "header"
    "content";

    main {
        padding: 40px 123px;
        
        .top {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 40px;

            h1 {
                font-weight: 400;
                font-size: 32px;
            }

            button {
                height: 48px;
                padding: 16px 32px;
                border: 0;
                border-radius: 8px;

                background-color: ${({theme}) => theme.COLORS.PINK};
                color: ${({theme}) => theme.COLORS.BACKGROUND_800};

                display: flex;
                align-items: center;
                gap: 8px;
            }
        }
    }
`;

export const Content = styled.div`

`;