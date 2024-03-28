import "./App.css";
import Counter from "./counter";
import Team from "./Team";
import User from "./User";
import Friends from "./friends";
import "./Friend.css"

function App() {
  function handleClick() {
    alert("Button clicked");
  }

  const handleClick2 = () => alert("Second button is pressed");

  const addToFive = (num) => {
    alert(num + 5);
  };

  return (
    <>
      <h3>React core concepts 2</h3>

      <Friends></Friends>

      {/* <Counter></Counter> */}
      {/* <User></User> */}
      {/* <Team></Team> */}

      {/* <button onclick="handleClick()">Click Me</button> */}
      {/* <button onClick={handleClick}>Click Me</button>
      <button onClick={handleClick2}>Click 2</button>
      <button onClick={() => {alert('third bro is clicked')}}>This is third</button> */}
      {/* vejailla */}
      {/* <button onClick={() => addToFive(3)}>Click the 4</button> */}
    </>
  );
}

export default App;
