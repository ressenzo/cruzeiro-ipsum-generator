import { FormEvent, useEffect, useRef, useState } from "react";
import Button from "./components/Button/Button";
import Footer from "./components/Footer/Footer";
import Form from "./components/Form/Form";
import Header from "./components/Header/Header";
import ResultContainer from "./components/ResultContainer/ResultContainer";
import Toast from "./components/Toast/Toast";
import { CRUZEIRO_WORDS } from "./words/cruzeiro-words";
import { IPSUM_WORDS } from "./words/ipsum-words";

const MIN_PHRASES_PER_PARAGRAPH = 6;
const MAX_PHRASES_PER_PARAGRAPH = 9;

const MAX_WORDS_BEFORE_CRUZEIRO_WORD = 6;
const MAX_WORDS_AFTER_CRUZEIRO_WORD = 5;

const App = () => {

  const [paragraphQuantity, setParagraphQuantity] = useState<number>(0);
  const [result, setResult] = useState<string[]>([]);
  const [showButton, setShowButton] = useState<boolean>(false);

  const textDiv = useRef<HTMLDivElement>(null);

  const [showToast, setShowToast] = useState<boolean>(false);

  useEffect(() => {
    document.body.style.position = 'relative';
    document.body.style.minHeight = '100vh';
    document.body.style.paddingBottom = '90px';
  }, [])

  const generateIpsum = (e: FormEvent<HTMLFormElement>) => {

    e.preventDefault();
    const finalText = new Array<string>();

    for (let paragraphs = 0; paragraphs < paragraphQuantity; paragraphs++) {
      let paragraph = generateParagraph();
      finalText.push(paragraph.trim());
    }

    setResult(finalText);
    setShowButton(true);
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
    const maxNumber = isBefore ? MAX_WORDS_BEFORE_CRUZEIRO_WORD : MAX_WORDS_AFTER_CRUZEIRO_WORD;
    const numberOfWords = getRandom(1, maxNumber);

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
    const text = textDiv.current?.innerText as string;
    navigator.clipboard.writeText(text);

    showCopiedTextToast();
  }

  const showCopiedTextToast = () => {
    setShowToast(true);
    setTimeout(() => setShowToast(false), 4000);
  }

  return (
    <>
      <Header />

      <main>
        <div className="container mt-5">

          <p>
            Digite a quantidade de par??grafos desejados e clique no bot??o para gerar o texto. Em seguida,
            basta copiar o conte??do e utilizar!
          </p>

          <Form
            onSubmit={generateIpsum}
            onChangeQuantity={setParagraphQuantity}
          />

          <ResultContainer
            result={result}
            ref={textDiv}
          />

          <div className="row mt-4">
            <div className="col">
              {
                showButton ?
                  <Button
                    type="button"
                    classNames="btn button__btn-main"
                    onClick={copyToClipboard}
                    text="Copiar"
                    disabled={false}
                  /> :
                  null
              }
            </div>
          </div>
        </div>
      </main>

      <Toast
        text="Texto copiado"
        show={showToast}
      />

      <Footer />
    </>
  )
}

export default App;
