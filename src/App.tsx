import { FormEvent, useState } from "react";
import Form from "./components/Form/Form";

const App = () => {

  const [paragraphQuantity, setParagraphQuantity] = useState<number>(0);
  const [result, setResult] = useState<string[]>([]);

  const generateIpsum = (e: FormEvent<HTMLFormElement>) => {

    e.preventDefault();
    const finalText = new Array<string>();

    for (let paragraphs = 0; paragraphs < paragraphQuantity; paragraphs++) {
      let paragraph = generateParagraph();
      finalText.push(paragraph.trim());
    }

    setResult(finalText)
  }

  const generateParagraph = () => {

    return 'test paragraph'
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
