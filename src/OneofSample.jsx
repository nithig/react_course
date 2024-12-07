import PropTypes from "prop-types";
export const OneofSample = (props) => {
  const { color } = props;
  return (
    <div style={{ backgroundColor: color, padding: "10px" }}>
      <p>this colour is {color}</p>
    </div>
  );
};

OneofSample.propTypes = {
  color: PropTypes.oneOf(["red", "green", "blue"]),
};
