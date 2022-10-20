import { useState } from "react";

function ML5() {
  const [classifier, setClassifier] = useState();
  const [result, setResult] = useState();

  const buildMl5 = () => {
    setClassifier(ml5.imageClassifier("MobileNet", modelReady));
  };

  const runAnalysis = () => {
    const image = document.getElementById("image");
    classifier.predict(image, 3, dataReturn);
  };

  const modelReady = () => {
    console.log("DONE");
  };

  const dataReturn = (err, result) => {
    if (err) console.log(err);
    else {
      console.log(result);
      setResult(result);
    }
  };

  return { buildMl5, runAnalysis, result, setResult };
}

export default ML5;
