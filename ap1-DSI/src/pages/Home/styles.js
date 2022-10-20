import { styled } from "@stitches/react";
import { Button } from "@mui/material";

const ImgContainer = styled("div", {
  width: "300px",
  height: "300px",
  "& img": {
    width: "100%",
    height: "100%",
    objectFit: "contain",
  },
});

const AppContent = styled("div", {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
});

const CardContainer = styled("div", {
  display: "flex",
  flexDirection: "row",
  margin: "10px",
});

const ResetButton = styled(Button, {
  marginTop: "10px",
});

export { ImgContainer, AppContent, CardContainer, ResetButton };
