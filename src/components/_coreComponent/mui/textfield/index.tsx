// import { InputLabelProps, Stack, SxProps, TextField } from "@mui/material";
// import React from "react";

// interface MuiTextFieldProps {
//   value: string;
//   type?: string;
//   variant: 'outlined' | 'standard' | 'filled';
//   size?: "small" | "medium"
//   label?: string;
//   onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
//   required?: boolean;
//   fullWidth?: boolean;
//   id?: string;
//   name?: string;
//   autoComplete?: string;
//   autoFocus?: boolean;
//   className:string
//    sx?:SxProps
//    InputLabelProps?:Partial<InputLabelProps> | undefined
// }

// const MuiTextField: React.FC<MuiTextFieldProps> = ({size,InputLabelProps,sx,className, value, onChange, label,variant,type, ...otherProps }) => {
//   return (
//     <Stack spacing={4}>
//       <Stack direction={"row"} spacing={2}>
//         <TextField
//         className={className}
//         type={type}
//         label={label}
//         variant={variant}
//         value={value}
//         onChange={onChange}
//         InputLabelProps={InputLabelProps}
//         sx={sx}
//         size={size}
//         {...otherProps}
//         />
//       </Stack>
//     </Stack>
//   );
// };

// export default MuiTextField;
