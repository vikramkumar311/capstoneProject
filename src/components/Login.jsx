import { useContext } from 'react'
import { userContext } from '../context/UserProvider'
import ImageLogo from './unitComponents/ImageLogo'
import Button from './unitComponents/Button'

const Login = () => {

    const { handleLogin, handleSignup } = useContext(userContext)


    return (
        <div className="fixed left-0 w-full flex items-center justify-between border p-4 bg-blue-500">
            <ImageLogo />
            <div className='flex items-center gap-2'>
                <Button title="Login" onClick={handleLogin} />
                <Button title="Signup" onClick={handleSignup} />
            </div>
        </div>
    )
}

export default Login