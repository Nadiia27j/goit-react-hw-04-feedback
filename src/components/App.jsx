import { useState } from "react";


export function App()  {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bed, setBed] = useState(0);

  return (
    <div>
      React homework template
    </div>
  );
};
