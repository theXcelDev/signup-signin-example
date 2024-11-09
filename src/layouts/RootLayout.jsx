const RootLayout = ({ session, children, onSignOut }) => {
  const { user } = session

  return (
    <>
      <header className="header">
        <h1 className="my-app-title">myApp</h1>
        {
          user &&
          <button
            className="action sign-out-action"
            onClick={() => onSignOut()}
          >
            Sign out
          </button>
        }
      </header>
      <main className="container">
        {children}
      </main>
    </>
  )
}

export default RootLayout