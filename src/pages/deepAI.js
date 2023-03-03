import React from 'react';


const DeepAI = () => {
  const deepai = require('deepai')
  deepai.setApiKey('b4e79a79-4603-40a6-b825-9737b7ce11de')

    (async function () {
      var resp = await deepai.callStandardApi("text2img", {
        text: "YOUR_TEXT_HERE",
      });
      console.warn(resp);
    })()
  return (
    <div>

    </div>
  );
}

export default DeepAI;
