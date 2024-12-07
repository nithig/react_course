import { Header } from "./components/Header";
import "./App.css";
import { FunctionSample } from "./FunctionSample";
import { MultiTypeComp } from "./MultiTypeComp";
import { OneofSample } from "./OneofSample";
import { ArraySample } from "./ArraySample";
import { ChildComponent } from "./components/ChildComponent";
import { Student } from "./components/Student";

function App() {
  const items = [
    { id: 1, name: "Item 1" },
    { id: 2, name: "Item 2" },
    { id: 3, name: "Item 3" },
    { id: 4, name: "Item 4" },
  ];

  const handleClick = () => {
    alert("Button Clicked");
  };
  return (
    <>
      <Header />

      <Student name="John" age={32} isMarried={true} />
      <Student name="Richard" age={23} isMarried={false} />
      <Student name="Flemming" age={28} isMarried={true} />
      <Student />

      <ChildComponent>
        <p>Child Component 1</p>
        <p>Child Component 2</p>
      </ChildComponent>

      <ArraySample items={items} />

      <OneofSample color="yellow" />

      <MultiTypeComp value="hello" />
      <MultiTypeComp value={45} />
      <MultiTypeComp value={true} />

      <FunctionSample handleClick={handleClick} />
    </>
  );
}

export default App;
