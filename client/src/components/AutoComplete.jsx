import React from 'react'
import styled from 'styled-components'

function AutoComplete({ ...props }) {
    return (
        <Input {...props} />
    )
}

export default AutoComplete

const Input = styled.input`
    padding: 0.5em;
`;