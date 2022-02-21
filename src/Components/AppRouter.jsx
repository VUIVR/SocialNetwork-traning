import React, { useContext } from 'react'
import { Routes, Route } from 'react-router-dom'
import AuthContext from '../Context'
import { privatRouters, publicRouters } from '../Routers'


function AppRouter() {
    const  {isAuth} = useContext(AuthContext)

    return (
        <Routes>
            {isAuth
                ? <>{privatRouters.map(rr =>
                    <Route
                        key={rr.path}
                        path={rr.path}
                        element={rr.component} />)} </>
                : <>{publicRouters.map(rr =>
                    <Route
                        key={rr.path}
                        path={rr.path}
                        element={rr.component} />)}</>
            }
        </Routes>
    )
}

export default AppRouter