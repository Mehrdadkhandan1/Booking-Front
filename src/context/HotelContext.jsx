import React, { useReducer } from 'react'

const initialState = {
    hotels: [],
}


const reducerF = (state, action) => {
    switch (action.key) {
        case "SET_HOTELS":
            return {
                ...state,
                hotels: action.value.data,
                country_code: action.value.country_code
            }

            break;

        default:
            break;
    }
}

export const ContextHotel = React.createContext()

const HotelContext = ({ children }) => {
    const [state, dispatch] = useReducer(reducerF, initialState)
    return (
        <ContextHotel.Provider value={{ state, dispatch }}>
            {children}
        </ContextHotel.Provider>
    )
}

export default HotelContext
