import { useEffect, useState } from "react"

import RootLayout from "../layouts/RootLayout"

import Home from "../pages/Home"
import SignUser from "../pages/SignUser"

const initialState = {
  users: [],
  session: {
    user: undefined
  }
}

const App = () => {
  const [data, setData] = useState(initialState)

  const { users, session } = data
  const { user } = session

  const handleSignUp = (user) => {
    const { username, password } = user

    if (!username || !password) {
      return;
    }

    const exists = users.some((item) => item.username === user.username)
    if (!exists) {
      setData({
        ...data,
        users: [...users, user]
      })
    }
  }

  const handleSignIn = (user) => {
    const exists = users.find((item) => item.username === user.username)
    if (!exists) {
      return
    }

    const isValid = exists.password == user.password
    if (!isValid) {
      return
    }

    setData({
      ...data,
      session: { ...session, user }
    })
  }

  const handleSignOut = () => {
    setData({
      ...data,
      session: { ...session, user: undefined }
    })
  }

  useEffect(() => {}, [data])

  return (
    <RootLayout session={session} onSignOut={handleSignOut}>
      {!user && <SignUser
        onSignUp={handleSignUp}
        onSignIn={handleSignIn}
      />}
      {user && <Home />}
    </RootLayout>
  )
}

export default App