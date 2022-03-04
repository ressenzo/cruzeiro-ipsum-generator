import { FormEvent, useState } from "react";
import Form from "./components/Form/Form";

const MIN_PHRASES_PER_PARAGRAPH = 6;
const MAX_PHRASES_PER_PARAGRAPH = 9;

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

    let paragraph = '';
    const phrasesPerParagraph = getRandom(MIN_PHRASES_PER_PARAGRAPH, MAX_PHRASES_PER_PARAGRAPH);

    for (let index = 0; index < phrasesPerParagraph; index++) {
      const phrase = 'new phrase';
      paragraph += phrase;
    }

    return paragraph;
  }

  const getRandom = (min: number, max: number) => {
    return Math.floor(Math.random() * (max - min)) + min;
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
