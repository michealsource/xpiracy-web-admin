import PropTypes from "prop-types";

const CustomButton = ({
  title,
  color,
  width,
  padding,
  borderRadius,
  border,
  fontSize,
  icon,
  ...restProps
}) => {
  const buttonStyles = {
    backgroundColor: color,
    width: width,
    padding: padding,
    borderRadius: borderRadius,
    border: border,
    fontSize: fontSize,
    icon: icon,
    // Add any other custom styles here
  };

  return (
    <button style={buttonStyles} {...restProps}>
      {title}
    </button>
  );
};

CustomButton.propTypes = {
  title: PropTypes.string.isRequired, // title should be a required string
  color: PropTypes.string,
  width: PropTypes.string,
  padding: PropTypes.string,
  borderRadius: PropTypes.string,
  border: PropTypes.string,
  fontSize: PropTypes.string,
  icon: PropTypes.string,
};

export default CustomButton;
