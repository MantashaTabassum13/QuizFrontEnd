import { Outlet, Navigate } from 'react-router-dom'

const PrivateRoute1 = ({value1}) => {
    
    return(

        
        value1 ? <Outlet/> : <Navigate to="/signup"/>
    )
}

export default PrivateRoute1