import React from 'react';
import { useState } from 'react';
import Image from "next/image";
const Replicant = () => {
  const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
  
  const [prediction, setPrediction] = useState(null);
  const [error, setError] = useState(null);
  const handleSubmit = async (e) => {

    e.preventDefault();
    const response = await fetch("/api/predictions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        prompt: e.target.prompt.value,
      }),
    });
    let prediction = await response.json();
    if (response.status !== 201) {
      setError(prediction.detail);
      return;
    }
    setPrediction(prediction);

    while (
      prediction.status !== "succeeded" &&
      prediction.status !== "failed"
    ) {
      await sleep(1000);
      const response = await fetch("/api/predictions/" + prediction.id);
      prediction = await response.json();
      if (response.status !== 200) {
        setError(prediction.detail);
        return;
      }
      console.log({ prediction })
      setPrediction(prediction);
    }
  };
  return (
    <div className={"container"}>



      <p>
        Dream something with{" "}
        <a href="https://replicate.com/stability-ai/stable-diffusion">stability-ai/stable-diffusion</a>:
      </p>

      <form className={"form"} onSubmit={handleSubmit}>
        <input type="text" name="prompt" placeholder="Enter a prompt to display an image" />
        <button type="submit">Go!</button>
      </form>

      {error && <div>{error}</div>}

      {console.log(prediction)}
      {prediction && (
        <div>
          {prediction.output && (
            <div className={"imageWrapper"}>
              <Image
                fill
                src={prediction.output[prediction.output.length - 1]}
                alt="output"
                sizes='100vw'
              />
            </div>
          )}
          <p>status: {prediction.status}</p>
        </div>
      )}
    </div>
  );
}

export default Replicant;
