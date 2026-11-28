function MyHeading() {
  return <h1>Hello React</h1>;
}

function MyParagraph() {
  return <p>Learn React</p>;
}

function MyButton() {
  return <button className="my-btn">Click Me</button>;
}

function App() {
  return (
    <>
      <MyHeading />
      <MyParagraph />
      <MyButton />
    </>
  );
}

export default App;