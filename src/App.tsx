import { FormEvent, useState } from "react";
import Form from "./components/Form/Form";

const App = () => {

  const [paragraphQuantity, setParagraphQuantity] = useState<number>(0);

  const generateIpsum = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(paragraphQuantity)
  }

  return (
    <div className="container">
      <Form
        onSubmit={generateIpsum}
        onChangeQuantity={setParagraphQuantity}        
      />
    </div>
  )
}

export default App;
