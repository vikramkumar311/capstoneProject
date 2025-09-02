import React, { useContext } from 'react'
import ImageLogo from '../unitComponents/ImageLogo'
import Button from '../unitComponents/Button'
import { userContext } from '../../context/UserProvider'

const NavBar = () => {
  const { handleLogin, handleSignup, handleLogout, status } = useContext(userContext)


    return (
        <div className="fixed left-0 w-full flex items-center justify-between border p-4 bg-blue-500">
            <ImageLogo />
            <div className='flex items-center gap-2'>
                {status ? (
                    <>
                        <Button title="Login" onClick={handleLogin} />
                        <Button title="Signup" onClick={handleSignup} />
                    </>
                ) : (
                    <Button title="Logout" onClick={handleLogout} />
                )}
            </div>
        </div>
    )
}

export default NavBar