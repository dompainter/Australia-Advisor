import React, { useEffect, useState } from 'react'
import ReactDOM from 'react-dom'
import styled, { createGlobalStyle } from 'styled-components'

import getData from './lib/get-data'

import Carousel from './components/carousel'
import Title from './components/title'

const CAROUSEL_API_URL = 'http://demo6045376.mockable.io/carousel'
// const FEATURED_API_URL = 'http://demo6045376.mockable.io/featured'

const GlobalStyle = createGlobalStyle`
    body {
        margin: 0;
        background-color: #EEEFF3;
        padding: 20px 40px;
        font-family: Arial, Helvetica, sans-serif;
    }
`

const AppContainer = styled.main`
    width: 100%;
    height: 100%;
`

const ContentContainer = styled.section`
    background-color: #FFF;
    padding: 15px 20px;
`

const App = () => {
    const [carouselItems, setCarouselItems] = useState([])

    // Get API data on mount
    useEffect(() => {
        async function fetchData () {
            const carouselItems = getData(CAROUSEL_API_URL)
            setCarouselItems(await carouselItems)
        }
        fetchData()
    }, [])

    return (
        <AppContainer>
            <ContentContainer>
                <Title>Popular around you</Title>
                {carouselItems.length &&
                    <Carousel items={carouselItems} />
                }
            </ContentContainer>
            <GlobalStyle />
        </AppContainer>
    )
}

ReactDOM.render(<App/>, document.getElementById('app'))
