import React from "react";
import Button, { ButtonProps } from "@mui/material/Button";
import { Link } from "react-router-dom";

interface MuiButtonProps extends Omit<ButtonProps, "size" | "variant"> {
  size: "small" | "medium" | "large";
  variant: "text" | "outlined" | "contained";
  className?: string;
  route?: string;
}

const variants = {
  text: {
    backgroundColor: "#FFA559",
    color: "#454545",
    boxShadow:
      "0 4px 6px 0 rgba(69, 69, 69, 0.7), 0 5px 15px rgba(69, 69, 69, 0.1)",
    border: "1px solid #C4CCCC",
  },
  outlined: {
    backgroundColor: "#C4CCCC",
    color: "#FF6000",
    border: "2px solid #454545",
    boxShadow:
      "0 4px 6px 0 rgba(255,255,255,0.7), 0 5px 15px rgba(255,255,255,0.1)",
  },
  contained: {
    backgroundColor: "#C4CCCC",
    color: "black",
    border: "1px solid #454545",
    
  },
};

const MuiButton: React.FC<MuiButtonProps> = ({
  size,
  variant,
  children,
  className,
  ...otherProps
}) => {
  const customVariants = variants[variant];

  return (
    <Button
      size={size}
      style={customVariants}
      variant={variant}
      {...otherProps}
    >
      <Link to={otherProps.route || ""}>
        <div className={className}>{children}</div>
      </Link>
    </Button>
  );
};

export default MuiButton;
