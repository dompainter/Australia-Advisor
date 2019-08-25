import React from 'react'
import propTypes from 'prop-types'
import styled from 'styled-components'

const TitleText = styled.h3`
    color: #2E4E62;
    font-weight: 300;
    margin: 0;
`

const Title = ({ children }) => (
    <TitleText>
        {children}
    </TitleText>
)

Title.propTypes = {
    children: propTypes.node
}

export default Title
