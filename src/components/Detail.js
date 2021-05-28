import React from 'react'
import styled from 'styled-components';

function Detail() {
    return (
        <Container>
            <Background>
                <img src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/4F39B7E16726ECF419DD7C49E011DD95099AA20A962B0B10AA1881A70661CE45/scale?width=1440&aspectRatio=1.78&format=jpeg" />
            </Background>

            <ImageTitle>
                <img src="/images/logo.p.png" width="200px" />
            </ImageTitle>

            <Controls>
                <PlayButton>
                    <img src="/images/play-icon-black.png" />
                    <span>PLAY</span>
                </PlayButton>
                <TrailerButton>
                    <img src="/images/play-icon-white.png" />
                    <span>Trailer</span>
                </TrailerButton>
                <AddButton>
                    <span>+</span>
                </AddButton>
                <GroupWatchButton>
                    <img src="/images/group-icon.png" />
                </GroupWatchButton>
            </Controls>
            <Subtitle>
                2018. 7m . Family . Fantasy . Kids . Animation
            </Subtitle>
            <Description>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos tempore sed,
                     ullam libero quaerat deserunt ratione iste, error distinctio
                     similique voluptas voluptatem ipsam minus veritatis quasi iusto magni rerum saepe.</p>
            </Description>
        </Container>
    )
}

export default Detail

const Container = styled.div `
    min-height: calc(100vh - 70px);
    padding: 0 calc(3.5vw + 5px);
    position: relatives

`

const Background = styled.div `
    position: fixed;
    top: 0;
    left: 0;
    bottom 0;
    right: 0;
    z-index: -1;
    
    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }

`
const ImageTitle = styled.div `
    padding-top: 50px;
    height: 30vh;
    min-height: 170px;
    min-width: 200px;
    width: 35vw;
    

    img {
        width: 100%;
        height: 100%;
        object-fit: contain;
    }

`
const Controls = styled.div `
    padding-top: 50px;
    display: flex;
    align-items:center;
`
const PlayButton = styled.button `
    font-size: 16px;
    border-radius: 4px;
    padding: 0 24px;
    display: flex;
    align-items: center;
    height: 50px;
    background: rgb (249, 249, 249);
    border: none;
    margin-right: 24px;
    letter-spacing: 1.8px;

    &:hover {
        background: rgb(198, 198, 198);
    }
    
`
const TrailerButton = styled(PlayButton) `
    background: rgba(0,0,0, 0.3);
    border: 1px solid rgb(249, 249, 249);
    color: rgb(249, 249, 249);
`
const AddButton = styled.button `
    width: 44px;
    height: 44px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius:50%;
    background-color: rgba(0, 0, 0, 0.6);
    border: 2px solid white;
    margin-left: 24px;

    span {
        font-size: 30px;
    }
`
const GroupWatchButton = styled(AddButton) `
    background: #000;

`
const Subtitle = styled.div `
    color: rgb(249, 249, 249);
    font-size: 15px;
    min-height: 25px;
    margin-top: 26px;

`
const Description = styled.div `
    line-height: 1.4;
    font-size: 20px;
`