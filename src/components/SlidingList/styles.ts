import styled from "styled-components";

export const ListContainer = styled.div`
    width: 85%;
    height: 100%;
    padding: 0 16px;
    display: flex;
    align-items: center;
    position: relative;
    gap: 16px;

    .list-btn {
        border: none;
        font-size: 24px;
        transition: all 0.2s ease;
        cursor: pointer;
        background: transparent;
        color: white;

        &:last-child {
            margin-left: auto;
        }

        &:hover {
            transform: scale(1.3);
        }

        &:disabled {
            pointer-events: none;
            opacity: 0.5;
        }
    }

    .list {
        display: flex;
        align-items: center;
        overflow: hidden;
        max-width: 90%;
    }

    .item-block {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 150px;
        height: 100%;
        padding: 16px 8px;
        position: relative;
        cursor: pointer;
        transition: all 0.2s ease;

        &.active {
            background: white;

            span {
                opacity: 1;
                color: black;
            }
        }
        
        &:hover {
            background: white;

            span {
                opacity: 1;
                color: black;
            }
        }

        span {
            opacity: 0.8;
            transition: all 0.2s ease;
        }
    }
`