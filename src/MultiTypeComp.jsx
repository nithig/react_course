import PropTypes from "prop-types";
export const MultiTypeComp = (props) => {
  return <div>This is s value: {props.value}</div>;
};

MultiTypeComp.propTypes = {
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.bool,
  ]),
};
