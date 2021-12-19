import React from 'react'
import styled from 'styled-components'
function SearchBar() {
    return (
        <SearchBarContainer>
            <SearchText style={{width:'400px'}} type='text' placeholder='Waar ben je naar op zoek?'></SearchText>           
        </SearchBarContainer>
    )
}

export default SearchBar
const SearchBarContainer = styled.div`
    padding: 4px 0px 0px 0px;
`
const SearchText = styled.input`
    position: relative
    height: 38px;
    padding: 0px 8px;
    border: 0.5px solid rgba(147,147,147,0.5);
    
`
