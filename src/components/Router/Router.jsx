import React from 'react'
import { Link } from 'react-router-dom'

import './Router.css'
function Router() {
    return (
        <>
            <nav className="nav nav-pills flex-column flex-sm-row">
                <Link className="flex-sm-fill text-sm-center nav-link active-form" to="/">Form</Link>
                <Link className="flex-sm-fill text-sm-center nav-link active-table" to="/table">Table</Link>
            </nav>
        </>
    )
}

export default Router
