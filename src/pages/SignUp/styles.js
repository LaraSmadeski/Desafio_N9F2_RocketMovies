import styled from 'styled-components';
import backgroundImg from '../../assets/Background.png';

export const Container = styled.div`
    height: 100vh;

    display: flex;
    align-items: stretch;
`;

export const Form = styled.form`
    padding: 0 134px 0 163px;
    
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    text-align: center;

    > header {
        display: flex;
        flex-direction: column;
        align-items: flex-start;

        > h1 {
            font-size: 48px;
            color: ${({theme}) => theme.COLORS.PINK};
        }
    
        > h2 {
            font-size: 24px;
            font-weight: 500;
            margin: 48px 0;
        }
    
        > p {
            font-size: 14px;
            font-weight: 400;
            color: ${({theme}) => theme.COLORS.GRAY_200};
        }
    }

    > button {
        width: 100%;
        margin-top: 24px;
        padding: 16px;

        font-weight: 500;
        color: ${({theme}) => theme.COLORS.BACKGROUND_600};
        background-color: ${({theme}) => theme.COLORS.PINK};

        border: none;
        border-radius: 10px;
    }

    > div {
        > a {
            margin-top: 42px;
            border: none;
            background: transparent;
            
            font-weight: 400;
            color: ${({theme}) => theme.COLORS.PINK};

            > svg {
                width: 16px;
                height: 16px;
    
                margin-right: 8px;
                margin-bottom: -2px;
            }
        }
    }
`;

export const Background = styled.div`
    flex: 1;
    background: url(${backgroundImg}) no-repeat center center;
    background-size: cover;
`;