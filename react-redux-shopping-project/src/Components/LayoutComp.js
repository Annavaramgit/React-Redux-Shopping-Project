import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from './Header'
import { Provider } from 'react-redux'
import store from '../store/store'

const LayoutComp = () => {
    return (
        <>
            {/* wrap compoents who wants store inside Provide in root component ,here LayoutComp is root component
                bcz whenver application renders this one is default page*/}
            <Provider store={store}>
                <div><Header /></div>
                <div><Outlet /></div>
            </Provider>
        </>
    )
}

export default LayoutComp

