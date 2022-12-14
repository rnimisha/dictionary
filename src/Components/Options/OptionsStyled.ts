import styled from 'styled-components'

export const OptionContainer = styled.div`
    width: 100%;
    height: 100px;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    flex-direction: row;

    @media (max-width: 350px) {
        flex-direction: column;
        margin-top : 10px;
    }
`

interface Props {
    active : boolean
}

export const MiniDiv = styled.div<Props>`
    font-size: 1.4rem;
    color : ${(props) => props.active === true ? '#5e5853' : '#7a7979'};
    position: relative;

`

export const Span = styled.span<Props>`
    cursor: pointer;

    &:hover{
        color : #96887d;
    }

    &::after{
        content: '';
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 0.1em;
        background-color: #5e5853;
        opacity: ${(props)=>props.active === true ? 1 : 0};
        transition: opacity 300ms, transform 300ms;
    }

    &:hover::after,
    &:focus::after {
        background-color: #96887d;
        opacity: 1;
        transform: translate3d(0, 0.2em, 0);
        transform: translate3d(-100%, 0, 0);
        transform: translate3d(0, 0, 0);
    }

    @media (max-width: 500px) {
        font-size: 1rem;
    }

`