import styled from 'styled-components'

export const HeaderContainer = styled.header`
    width: 100%;

    nav {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-around;
        padding: 12px 16px;
    }

    .nav-block {
        display: flex;
        align-items: center;
        gap: 32px;

        img {
            width: 100%;
            height: 50px;
        }

        a {
            text-decoration: none;
            opacity: 0.8;
            transition: all 0.2s ease;

            &:hover {
                opacity: 1;
            }
        }
    }
` 