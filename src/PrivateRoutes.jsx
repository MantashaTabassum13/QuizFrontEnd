import { Outlet, Navigate } from 'react-router-dom'

const PrivateRoutes = ({value}) => {
    
    return(


        value ? <Outlet/> : <Navigate to="/signup"/>
    )
}

export default PrivateRoutes