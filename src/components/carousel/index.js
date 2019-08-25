import React from 'react'
import propTypes from 'prop-types'
import styled from 'styled-components'

import Tile from '../tile'

const CarouselContainer = styled.div`
    display: flex;
    flex-direction: row;
    margin: 15px 0;
    overflow: hidden;
`

const Carousel = ({ items }) => (
    <CarouselContainer>
        {items.map((item, index) => (
            <Tile
                key={`carousel-item-${index}`}
                width="33%"
                {...item}
            />
        ))}
    </CarouselContainer>
)

Carousel.propTypes = {
    items: propTypes.arrayOf(propTypes.shape({
        title: propTypes.string,
        img: propTypes.string,
        location: propTypes.string
    }))
}

export default Carousel
