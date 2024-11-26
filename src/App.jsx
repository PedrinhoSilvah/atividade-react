import HelloWorld2 from "./components/HelloWorld2";
import HelloWorld1 from "./components/HelloWorld1";
import HelloWorld3 from "./components/HelloWorld3";
import HelloWorld4 from "./components/HelloWorld4";
import HelloWorld5 from "./components/HelloWorld5"
import HelloWorld6 from "./components/HelloWorld6"
import HelloWorld7 from "./components/HelloWorld7"
import HelloWorld8 from "./components/HelloWorld8"
import HelloWorld9 from "./components/HelloWorld9"

function App() {

  const date = new Date().toLocaleDateString()
  const horus = new Date().toLocaleTimeString()
  return (
    <>
      <p>Hello, World {date} {horus} </p>
      <HelloWorld1 text="hello world" />
      <HelloWorld2 />
      <HelloWorld3 />
      <HelloWorld4 />
      <HelloWorld5 />
      <HelloWorld6 />
      <HelloWorld7 />
      <HelloWorld8 />
      <HelloWorld9 render={() => <h1>Hello, World! {date} {horus}</h1>} />
    </>
  );
}

export default App;

