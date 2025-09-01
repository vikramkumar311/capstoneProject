import  { useContext } from 'react'
import { userContext } from '../context/UserProvider'
import ImageLogo from './unitComponents/ImageLogo'
import Button from './unitComponents/Button'

const Login = () => {

    const {handleLogin} = useContext(userContext)


    return (
        <div className="fixed left-0 w-full flex items-center justify-between border p-4 bg-blue-500">
            <ImageLogo />
            <Button title="Login" onClick={handleLogin} />
        </div>
    )
}

export default Login