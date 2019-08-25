import React from 'react'
import propTypes from 'prop-types'
import styled from 'styled-components'

const TileContainer = styled.div`
    border: 1px solid #E1E1E1;
    margin: 0 20px;

    &:focus {
        outline: 0;
    }
`

const ImageWrapper = styled.div`
    display: flex;
`

const StyledImage = styled.img`
    width: 300px;
`

const DetailsBlock = styled.div`
    display: flex;
    flex-direction: column;
    background-color: #F4F7F7;
    padding: 25px 20px;
    border-top: 1px solid #E1E1E1;
`

const Title = styled.span`
    font-size: 15px;
    line-height: 20px;
    color: #2E4E62;
`

const Location = styled.span`
    font-size: 13px;
    line-height: 15px;
    color: #889AB1;
`

const Tile = ({ img, title, location, width }) => (
    <TileContainer tabIndex={0} width={width}>
        <ImageWrapper>
            <StyledImage src={img} alt={title} />
        </ImageWrapper>
        <DetailsBlock>
            <Title>{title}</Title>
            <Location>{location}</Location>
        </DetailsBlock>
    </TileContainer>
)

Tile.propTypes = {
    title: propTypes.string,
    img: propTypes.string,
    location: propTypes.string,
    width: propTypes.string
}

export default Tile
