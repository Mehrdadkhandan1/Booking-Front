import React from 'react'
import styled from 'styled-components'

const LinkBtn = ({ value, link }) => {
    return (
        <StyleBtn className='d-flex f-center' href={link}>
            {value}
        </StyleBtn>
    )
}

export default LinkBtn

const StyleBtn = styled.a`
    color: var(--color-blue) !important;
    background-color: var(--bg-a-link);
    padding: var(--n-padding-2x) var(--n-padding-3x);
    border-radius: 4px;
    
`