const RootLayout = ({ children }) => {
  return (
    <>
      <header className="header">
        <h1 className="my-app-title">myApp</h1>
        <button className="sign-out-action">Sign out</button>
      </header>
      <main className="container">
        {children}
      </main>
    </>
  )
}

export default RootLayout