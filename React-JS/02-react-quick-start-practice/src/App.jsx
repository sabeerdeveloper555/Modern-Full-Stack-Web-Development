import "./App.css";

function MyHeading() {
  return <h1>Hello React</h1>;
}

function MyParagraph() {
  return <p>Learn React</p>;
}

function MyButton() {
  return <button className="my-btn">Click Me</button>;
}

function UserCard() {
  const user = {
    name: "Sabeer Alam",
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-glnQvYcKQEf_-RiZGHz9GFqBJzFN6WxpJJokYBmpow&s=10",
    role: "Full Stack Development",
    imageSize: 150,
    age: 24,
  };
  return (
    <>
      <h2 className="user-title">User Profile</h2>
      <p className="user-name">{user.name}</p>
      <img
        className="avatar"
        src={user.imageUrl}
        alt={"Photo of " + user.name}
        style={{
          width: user.imageSize,
          height: user.imageSize,
        }}
      />
      <p className="user-role">{user.role}</p>
      <p className="user-age">Age: {user.age}</p>
    </>
  );
}

function LoginStatus() {
  const isLoggedIn = true;
  // let content;

  // if(isLoggedIn){
  //   content = <h2>Welcome, Sabeer!</h2>
  // }
  // else{
  //   content = <h2>Please login to continue</h2>
  // }
  return (
    <>
      {/* {content} */}

      {/* {isLoggedIn ? (
        <h2>Welcome, Sabeer!</h2>
      ) : (
        <h2>Please login to continue</h2>
      )} */}

      {isLoggedIn && <h2>Welcome, Sabeer!</h2>}
    </>
  );
}

function App() {
  return (
    <>
      <MyHeading />
      <MyParagraph />
      <UserCard />
      <MyButton />
      <LoginStatus />
    </>
  );
}

export default App;
