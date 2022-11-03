import ML5 from "../../components/ml5";
import { useEffect, useState } from "react";
import UploadButton from "../../components/UploadButtons";
import { AppContent, ImgContainer, CardContainer, ResetButton } from "./styles";
import Card from "@mui/material/Card";

function Home() {
  const [image, setImage] = useState();
  const [isAnalized, setIsAnalized] = useState();

  const { buildMl5, runAnalysis, result, setResult } = ML5();

  useEffect(() => {
    buildMl5();
  }, [image]);

  return (
    <>
      <CardContainer>
        {result &&
          result.map((elem, index) => (
            <Card sx={{ padding: "20px", margin: "5px" }} key={elem.label}>
              <h3>{index + 1}ª Opção</h3>
              <p textAlign="center">{elem.label}</p>
              <h3>Percentual de certeza:</h3>
              <p textAlign="center">{(elem.confidence * 100).toFixed(2)}%</p>
            </Card>
          ))}
      </CardContainer>
      <AppContent>
        <ImgContainer>
          {image ? (
            <img id="image" src={URL.createObjectURL(image)}></img>
          ) : (
            <p>Faça upload da sua imagem!</p>
          )}
        </ImgContainer>
        {!isAnalized ? (
          <UploadButton
            setImage={setImage}
            image={image}
            setIsAnalized={setIsAnalized}
            runAnalysis={runAnalysis}
          />
        ) : (
          <ResetButton
            variant="contained"
            onClick={() => {
              setResult(undefined);
              setImage(undefined);
              setIsAnalized(false);
            }}
          >
            Resetar
          </ResetButton>
        )}
      </AppContent>
    </>
  );
}

export default Home;
