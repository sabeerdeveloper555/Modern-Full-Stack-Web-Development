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

function App() {
  return <UserCard />;
}

export default App;
