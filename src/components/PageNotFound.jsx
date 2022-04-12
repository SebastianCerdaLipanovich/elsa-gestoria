import React from 'react'
import { Link } from 'react-router-dom'

const PageNotFound = () => {
    return (
        <div id="wrapper">
            <div id="info" className='itemListContainerLoader {
'>
                <h3>This page could not be found</h3>
                <h3><Link to="/">Better back home</Link></h3>
            </div>
        </div >
    )
}

export default PageNotFound