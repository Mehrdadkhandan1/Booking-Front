import React from 'react'
import styled from 'styled-components'

const PickerInput = ({ children }) => {
    return (

        <Style  className="result-search">
            {children}
        </Style>
    )
}

export default PickerInput



const Style = styled.div`
    position: absolute;
    box-shadow: 0px 1px 4px 0px #858585;
    transform: translateY(8px);
    border-radius :8px ;
    background-color: #fff;
    min-height: 100px;
    min-width: 400px;
    

`