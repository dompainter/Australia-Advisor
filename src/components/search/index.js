import React from 'react'
import propTypes from 'prop-types'
import styled from 'styled-components'

const SearchContainer = styled.div`
    width: 33%;
    padding-bottom: 20px;
`

const StyledInput = styled.input`
    font-size: 15px;
    width: 100%;
    height: 30px;
    padding: 5px 10px;
    border: 1px solid #E1E1E1;
    transition: border-color 0.5s;

    &:focus {
        outline: 0;
        border-color: #7E76FF;
    }
`

const Search = ({ handleSearchChange }) => (
    <SearchContainer>
        <StyledInput
            onChange={handleSearchChange}
            type="text"
            placeholder="Search for..."
            maxLength={40}
        />
    </SearchContainer>
)

Search.propTypes = {
    handleSearchChange: propTypes.func
}

export default Search
