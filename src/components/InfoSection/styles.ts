import styled, { keyframes } from "styled-components";

const drop = keyframes`
    from {
    height: 0px;
    opacity: 0;
    }

    to {
    height: 60px;
    opacity: 1;
    }
`

export const InfoSectionContainer = styled.section`
    width: 60%;
    display: flex;
    align-items: center;
    padding: 0 16px;
    gap: 16px;
    background-color: #161616;
    justify-content: space-between;
    border-left: 2px solid #161616;
    border-right: 2px solid #161616;
    border-bottom: 2px solid #161616;
    border-radius: 4px;
    animation: ${drop} 0.1s linear forwards;
`

export const FormContainer = styled.form`
    width: 95%;
    display: flex;
    align-items: center;
    padding: 0 16px;
    gap: 16px;
    background-color: #161616;
    justify-content: space-between;
    border-left: 2px solid #161616;
    border-right: 2px solid #161616;
    border-bottom: 2px solid #161616;
    border-radius: 4px;
    animation: ${drop} 0.1s linear forwards;
`

export const InfoBlock = styled.div`
    display: flex;
    flex-direction: column;
    gap: 4px;

    input {
        background: transparent;
        border: none;
        border-bottom: 2px solid #a0a0a0;
        outline: none;
        width: 100px;
    }

    span {
        font-size: 12px;
        color: #a0a0a0;
    }
`

export const ActionBlock = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 16px;

    .action-btn {
        outline: none;
        padding: 8px 16px;
        border: 1px solid;
        border-radius: 8px;
        transition: all 0.2s ease;
        cursor: pointer;
        color: white;

        &.submit-btn {
            background: #237f23;
            border-color: #237f23;

            &:hover {
                background: transparent;
                border-color: transparent;
                color: #237f23;
            }
        }

        &.cancel-btn {
            background: #da0d0d;
            border-color: #da0d0d;

            &:hover {
                background: transparent;
                border-color: transparent;
                color: #da0d0d;
            }
        }
    }
`