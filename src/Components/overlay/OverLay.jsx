import React from 'react'
import styled from 'styled-components'

const OverLay = ({ children }) => {
    return (
        <Style>
            {children}
        </Style>
    )
}

export default OverLay



const Style = styled.div`
    position :fixed;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #000000b0;
`