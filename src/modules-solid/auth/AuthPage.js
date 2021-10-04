import React from 'react'
import Signin from './components/Signin'

export default ({session, setSession}) => {
    return <div>
        <Signin session={session} setSession={setSession}/>
    </div>
}
