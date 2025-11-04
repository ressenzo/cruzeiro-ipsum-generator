from abc import ABC, abstractmethod
import services.constants
from random import randint

class IGeneratorService(ABC):
    @abstractmethod
    def generate_paragraphs(self, quantity: int) -> list[str] | str:
        pass

class GeneratorService(IGeneratorService):
    def generate_paragraphs(self, quantity: int) -> list[str] | str:
        if not isinstance(quantity, int):
            return services.constants._QUANTITY_INVALID_TYPE_ERROR_MESSAGE

        if quantity < services.constants._PARAGRAPHS_MIN_QUANTITY:
            return services.constants._PARAGRAPHS_MIN_QUANTITY_ERROR_MESSAGE
        
        if quantity > services.constants._PARAGRAPHS_MAX_QUANTITY:
            return services.constants._PARAGRAPHS_MAX_QUANTITY_ERROR_MESSAGE
        
        paragraphs = []
        for _ in range(quantity):
            paragraphs.append(self._generate_paragraph())
        return paragraphs
    
    def _generate_paragraph(self) -> str:
        sentencesPerParagraph = randint(
            services.constants._SENTENCES_MIN_QUANTITY,
            services.constants._SENTENCES_MAX_QUANTITY
        )
        paragraph = ""
        for i in range(sentencesPerParagraph):
            if i == sentencesPerParagraph-1:
                paragraph += self.__generate_sentence() + ""
            else:
                paragraph += self.__generate_sentence() + " "
        return paragraph

    
    def __generate_sentence(self) -> str:
        sentence = ""
        
        ipsumWords = randint(
            services.constants._WORDS_BEFORE_MIN_QUANTIY,
            services.constants._WORDS_BEFORE_MAX_QUANTIY
        )
        sentence += self._gerate_ipsum(ipsumWords, True)
        
        sentence += services.constants._CRUZEIRO_WORDS[
            randint(0, len(services.constants._CRUZEIRO_WORDS)-1)
        ] + " "
        
        ipsumWords = randint(
            services.constants._WORDS_AFTER_MIN_QUANTIY,
            services.constants._WORDS_AFTER_MAX_QUANTIY
        )
        sentence += self._gerate_ipsum(ipsumWords, False)
        
        return sentence
    
    def _gerate_ipsum(self, quantityWords: int, isBefore: bool) -> str:
        ipsum = ""
        for i in range(quantityWords):
            if i == 0 and isBefore:
                ipsum += services.constants._IPSUM_WORDS[
                    randint(0, len(services.constants._IPSUM_WORDS)-1)
                ].capitalize() + " "
                continue
            
            if i == quantityWords-1 and isBefore == False:
                ipsum += services.constants._IPSUM_WORDS[
                    randint(0, len(services.constants._IPSUM_WORDS)-1)
                ] + "."
                continue

            ipsum += services.constants._IPSUM_WORDS[
                randint(0, len(services.constants._IPSUM_WORDS)-1)
            ] + " "
        return ipsum
