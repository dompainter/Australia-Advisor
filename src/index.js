import React from 'react'
import ReactDOM from 'react-dom'
import styled, { createGlobalStyle } from 'styled-components'

import Header from './components/header'

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

const ContentContainer = styled.main`
    background-color: #FFF;
    padding: 15px;
`

const App = () => {
    return (
        <AppContainer>
            <Header title="Australia-Advisor"/>
            <ContentContainer>
                <span>Content goes here</span>
            </ContentContainer>
            <GlobalStyle />
        </AppContainer>
    )
}

ReactDOM.render(<App/>, document.getElementById('app'))
