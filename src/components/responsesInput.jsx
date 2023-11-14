import React from "react";

const responsesInput = () => {
  const [response, setResponse] = useState("Votre réponse ici");
  return (
    <div>
      <label htmlFor="response"></label>
      <input type="text" id="response" value={response} />
    </div>
  );
};

export default responsesInput;
