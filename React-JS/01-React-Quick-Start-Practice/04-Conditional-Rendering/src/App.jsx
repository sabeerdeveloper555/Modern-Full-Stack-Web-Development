function LoginStatus() {
  const isLoggedIn = true;

  // if...else
  // let content;

  // if (isLoggedIn) {
  //   content = <h2>Welcome, Sabeer!</h2>;
  // } else {
  //   content = <h2>Please login to continue</h2>;
  // }

  return (
    <>
      {/* {content} */}

      {/* Ternary */}
      {/* {isLoggedIn ? (
        <h2>Welcome, Sabeer!</h2>
      ) : (
        <h2>Please login to continue</h2>
      )} */}

      {/* Logical AND */}
      {isLoggedIn && <h2>Welcome, Sabeer!</h2>}
    </>
  );
}

function App() {
  return <LoginStatus />;
}

export default App;
