import * as React from "react";
import PhotoCamera from "@mui/icons-material/PhotoCamera";
import { Button } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import { ButtonsContainer } from "./styles";

export default function UploadButton({
  setImage,
  image,
  runAnalysis,
  setIsAnalized,
}) {
  return (
    <ButtonsContainer direction="row" spacing={2}>
      <Button variant="outlined" component="label" startIcon={<PhotoCamera />}>
        Upload
        <input
          hidden
          accept="image/*"
          multiple
          type="file"
          onChange={(e) => setImage(e.target.files[0])}
        />
      </Button>
      <Button
        disabled={!image}
        variant="contained"
        endIcon={<SendIcon />}
        onClick={() => {
          setIsAnalized(true);
          runAnalysis(image);
        }}
      >
        Analisar
      </Button>
    </ButtonsContainer>
  );
}
