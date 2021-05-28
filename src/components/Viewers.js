import React from 'react'
import styled from 'styled-components'

function Viewers() {
    return (
        <Container>
            <Wrap>
                <img src="/images/viewers-disney.png" />
            </Wrap>

            <Wrap>
                <img src="/images/viewers-marvel.png" />
            </Wrap>

            <Wrap>
                <img src="/images/viewers-national.png" />
            </Wrap>

            <Wrap>
                <img src="/images/viewers-pixar.png" />
            </Wrap>

            <Wrap>
                <img src="/images/viewers-starwars.png" />
            </Wrap>
        </Container>
    )
}

export default Viewers

const Container = styled.div `
    padding-bottom: 26px;
    // display: flex;
    // flex-wrap: wrap;

    display: grid;
    grid-template-columns: repeat(5, minmax(0, 1fr));
    grid-gap: 25px;
    cursor:pointer;
    padding-top: 30px;
    padding-bottom: 25px; 
    box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
    rgb(0 0 0 / 73%) 0px 16px 10px -10px;
    

    
`

const Wrap = styled.div `
    // flex-basis: 20%;
    border: 3px solid rgba(249, 249, 249, 0.1);
    border-radius: 10px;
    box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
    rgb(0 0 0 / 73%) 0px 16px 10px -10px;
    transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;

    img {
        width: 100%;
        height: 100%;
        oject-fit: cover;
    }

    &:hover {
        transform: scale(1.05);
        box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
        rgb(0 0 0 / 73%) 0px 16px 10px -10px;
        border-color: rgba(249, 249, 249, 0.8);
        // transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
    }
`