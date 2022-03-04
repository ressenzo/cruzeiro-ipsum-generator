import { FormEvent, useRef, useState } from "react";
import Form from "./components/Form/Form";
import { CRUZEIRO_WORDS } from "./words/cruzeiro-words";
import { IPSUM_WORDS } from "./words/ipsum-words";

const MIN_PHRASES_PER_PARAGRAPH = 6;
const MAX_PHRASES_PER_PARAGRAPH = 9;

const MAX_WORDS_BEFORE_CRUZEIRO_WORD = 6;
const MAX_WORDS_AFTER_CRUZEIRO_WORD = 5;

const App = () => {

  const [paragraphQuantity, setParagraphQuantity] = useState<number>(0);
  const [result, setResult] = useState<string[]>([]);

  const divTexto = useRef<HTMLDivElement>(null);

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
      const phrase = generatePhrase();
      paragraph += phrase;
    }

    return paragraph;
  }

  const generatePhrase = () => {

    let phrase = '';

    phrase += getIpsumWords(true);
    phrase += getCruzeiroWord();
    phrase += getIpsumWords(false);

    return phrase;
  }

  const getIpsumWords = (isBefore: boolean) => {
    
    let phrase = '';
    const ipsumSize = IPSUM_WORDS.length;
    const number = isBefore ? MAX_WORDS_BEFORE_CRUZEIRO_WORD : MAX_WORDS_AFTER_CRUZEIRO_WORD;
    const numberOfWords = getRandom(1, number);

    for (let index = 0; index < numberOfWords; index++) {
      const ipsumWordIndex = getRandom(0, ipsumSize);
      const ipsumWord = IPSUM_WORDS[ipsumWordIndex];
      
      if (isBefore) {
        phrase += index === 0 ? `${ipsumWord.charAt(0).toUpperCase() + ipsumWord.slice(1)} ` : `${ipsumWord} `;
      } else {
        phrase += index === numberOfWords - 1 ? `${ipsumWord}. ` : `${ipsumWord} `;
      }
    }

    return phrase;
  }

  const getCruzeiroWord = () => {
    
    const cruzeiroSize = CRUZEIRO_WORDS.length;
    const cruzeiroWordIndex = getRandom(0, cruzeiroSize);
    const cruzeiroWord = CRUZEIRO_WORDS[cruzeiroWordIndex];
    return `${cruzeiroWord} `;
  }

  const getRandom = (min: number, max: number) => {
    return Math.floor(Math.random() * (max - min)) + min;
  }

  const copyToClipboard = () => {
    const text = divTexto.current?.innerText as string;
    navigator.clipboard.writeText(text);
  }

  return (
    <div className="container">
      <Form
        onSubmit={generateIpsum}
        onChangeQuantity={setParagraphQuantity}
      />
      <div className="row" ref={divTexto}>
        {
          result.map((p, index) => {
            return (
              <p key={index}>{p}</p>
            )
          })
        }
      </div>
      <div className="row">
        <button
          type="button"
          className="btn btn-primary"
          onClick={copyToClipboard}
        >
          Copiar
        </button>
      </div>
    </div>
  )
}

export default App;
