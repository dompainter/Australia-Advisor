import React, { useEffect, useState } from 'react'
import ReactDOM from 'react-dom'
import styled, { createGlobalStyle } from 'styled-components'

import getData from './lib/get-data'

import Carousel from './components/carousel'
import Title from './components/title'
import Search from './components/search'

const CAROUSEL_API_URL = 'http://demo6045376.mockable.io/carousel'

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
    padding: 15px 0;
`

const Message = styled.p`
    padding-left: 20px;
    color: #889AB1;
`

const App = () => {
    const [carouselItems, setCarouselItems] = useState([])
    const [filteredCarouselItems, setFilteredCarouselItems] = useState([])
    const [searchTerm, setSearchTerm] = useState(null)

    // Get API data on mount
    useEffect(() => {
        async function fetchData () {
            const carouselItems = getData(CAROUSEL_API_URL)
            setCarouselItems(await carouselItems)
            setFilteredCarouselItems(await carouselItems)
        }
        fetchData()
    }, [])

    const handleSearchChange = event => {
        const newSearchTerm = event.currentTarget.value
        setSearchTerm(newSearchTerm)

        const allCarouselItems = carouselItems

        if (!newSearchTerm || !newSearchTerm.length) {
            setFilteredCarouselItems(allCarouselItems)
        } else {
            const filteredResults = allCarouselItems
                .filter(({ title }) => title.toLowerCase().includes(newSearchTerm.toLowerCase()))

            setFilteredCarouselItems(filteredResults)
        }
    }

    return (
        <AppContainer>
            <Search handleSearchChange={handleSearchChange} />
            <ContentContainer>
                <Title>Popular around you</Title>
                {filteredCarouselItems.length
                    ? <Carousel items={filteredCarouselItems} />
                    : <Message>No activities for search term: {searchTerm}</Message>
                }
            </ContentContainer>
            <GlobalStyle />
        </AppContainer>
    )
}

ReactDOM.render(<App/>, document.getElementById('app'))
