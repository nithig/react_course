export const ArraySample = (props) => {
  const { items } = props;
  return (
    <div>
      <h2>List Items</h2>
      <ul>
        {items.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
};
