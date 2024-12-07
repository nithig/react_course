export const Header = () => {
  const isLoggedIn = false;
  const greeting = isLoggedIn ? <p>Welcome back!</p> : <p>Please log in</p>;
  const items = ["Item 1", "Item 2", "Item 3", "Item 4"];
  return (
    <>
      <div>
        <h1 className="headerText">Scorpion Designs</h1>
        <p className="slogan">Learn more make unique</p>
      </div>
      {/* JSX Expressions */}
      34+12 = {34 + 12}
      {/* JSX Conditional Rendering: */}
      {greeting}
      {/* JSX with List: */}
      <ul>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </>
  );
};
