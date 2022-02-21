import React from 'react'
import { Routes, Route } from 'react-router-dom'
import router from '../Routers'


function AppRouter() {
    return (
        <Routes>
            {router.map(rr =>
                <Route
                    key={rr.path}
                    path={rr.path}
                    element={rr.component} />)}
        </Routes>
    )
}

export default AppRouter