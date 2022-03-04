import { FormEvent, useState } from "react";
import Form from "./components/Form/Form";

const App = () => {

  const [paragraphQuantity, setParagraphQuantity] = useState<number>(0);
  const [result, setResult] = useState<string[]>([]);

  const generateIpsum = (e: FormEvent<HTMLFormElement>) => {

    e.preventDefault();
    setResult(['teste'])
  }

  return (
    <div className="container">
      <Form
        onSubmit={generateIpsum}
        onChangeQuantity={setParagraphQuantity}
      />
      <div className="row">
        {
          result.map((p, index) => {
            return (
              <p key={index}>{p}</p>
            )
          })
        }
      </div>
    </div>
  )
}

export default App;
