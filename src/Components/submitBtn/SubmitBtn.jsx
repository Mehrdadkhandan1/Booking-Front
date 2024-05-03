import React from 'react'
import styled from 'styled-components'
import loader from './../../images/Eclipse@1x-1.0s-200px-200px.svg'
const SubmitBtn = ({ click, loading }) => {
    return (
        <Style className='d-flex align-center' onClick={() => click()}>
            {loading ?
                <img src={loader} alt="" />
                : 'Search'
            }
        </Style>
    )
}

export default SubmitBtn



const Style = styled.button`
    padding: var(--n-padding) calc(var(--n-padding)*6);
    background-color: var(--color-blue);
    color: #fff;
    min-height: 52px;
    border-radius: 4px;
    font-weight: 500;
    font-size: var(--sub-title-fonts);
    img{
        width: 40px;
        height: 40px;
    }
`