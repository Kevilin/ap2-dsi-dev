import { styled } from "@stitches/react";
import { Stack } from "@mui/material";
const ButtonsContainer = styled(Stack, {
  display: "flex",
  justifyContent: "center",
  marginTop: "10px",

  "& img": {
    width: "300px",
    height: "300px",
    objectFit: "contain",
  },
});

export { ButtonsContainer };
