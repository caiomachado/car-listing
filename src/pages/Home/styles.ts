import styled from "styled-components";

export const HomeContainer = styled.main`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 10px;

    h1 {
        text-align: center;
        position: relative;
        font-size: 40px;
        font-family: 'Alegreya Sans SC', sans-serif;

        &::before {
            content: '';
            position: absolute;
            top: 15px;
            display: block;
            width: 100%;
            height: 6px;
            background-color: black;
        }
    }

    .display-wrapper {
        display: flex;
        align-items: center;
        justify-content: center;
        position: relative;
        width: 100%;
        height: 60vh;

        aside {
            display: flex;
            flex-direction: column;
            gap: 16px;
            position: absolute;
            left: 0;
            padding-right: 16px;
            height: 60%;
            overflow-y: auto;

            &::-webkit-scrollbar {
                display: none;
            }
        }
    }

    .brand-wrapper {
        width: 100%;
        display: flex;
        align-items: center;
        padding-left: 16px;
        gap: 16px;
        opacity: 0.5;
        transition: all 0.2s ease;
        cursor: pointer;

        &:hover {
            opacity: 1;
        }

        &.active {
            opacity: 1;
        }

        .dash {
            width: 20px;
            height: 2px;
            background: #a0a0a0;
            border-radius: 4px;
        }
    }

    .image-block {
        width: 40%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;

        img {
            width: 100%;
            height: 100%;
            object-fit: contain;
        }
    }

    .list-section {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;
        border-top: 2px solid #a0a0a0;
        border-bottom: 2px solid #a0a0a0;
    }

    .add-block {
        padding: 16px 12px;
        border: none;
        border-left: 2px solid #a0a0a0;
        background: none;
        height: auto;
        transition: all 0.2s ease;
        cursor: pointer;

        &:hover {
            background: #a0a0a0;
            color: black;
        }

        &:disabled {
            opacity: 0.6;
            pointer-events: none;
        }
    }
`