"""GeneratorService"""
from abc import ABC, abstractmethod
from random import randint

from services.constants import Constants


# pylint: disable=R0903
class IGeneratorService(ABC):
    """Contract of GeneratorService"""
    @abstractmethod
    def generate_paragraphs(self, quantity: int) -> list[str] | str:
        """Generates paragraphs based on quantity"""


# pylint: disable=R0903
class GeneratorService(IGeneratorService):
    """Implementation of GeneratorService"""

    def generate_paragraphs(self, quantity: int) -> list[str] | str:
        if not isinstance(quantity, int):
            return Constants.QUANTITY_INVALID_TYPE_ERROR_MESSAGE

        if quantity < Constants.PARAGRAPHS_MIN_QUANTITY:
            return Constants.PARAGRAPHS_MIN_QUANTITY_ERROR_MESSAGE

        if quantity > Constants.PARAGRAPHS_MAX_QUANTITY:
            return Constants.PARAGRAPHS_MAX_QUANTITY_ERROR_MESSAGE

        paragraphs = []
        for _ in range(quantity):
            paragraphs.append(self.__generate_paragraph())
        return paragraphs

    def __generate_paragraph(self) -> str:
        sentences_per_paragraph = randint(
            Constants.SENTENCES_MIN_QUANTITY,
            Constants.SENTENCES_MAX_QUANTITY
        )
        paragraph = ""
        for i in range(sentences_per_paragraph):
            if i == sentences_per_paragraph-1:
                paragraph += self.__generate_sentence() + ""
            else:
                paragraph += self.__generate_sentence() + " "
        return paragraph

    def __generate_sentence(self) -> str:
        sentence = ""

        ipsum_words = randint(
            Constants.WORDS_BEFORE_MIN_QUANTIY,
            Constants.WORDS_BEFORE_MAX_QUANTIY
        )
        sentence += self.__gerate_ipsum(ipsum_words, True)

        sentence += Constants.CRUZEIRO_WORDS[
            randint(0, len(Constants.CRUZEIRO_WORDS)-1)
        ] + " "

        ipsum_words = randint(
            Constants.WORDS_AFTER_MIN_QUANTIY,
            Constants.WORDS_AFTER_MAX_QUANTIY
        )
        sentence += self.__gerate_ipsum(ipsum_words, False)

        return sentence

    def __gerate_ipsum(self, quantity_words: int, is_before: bool) -> str:
        ipsum = ""
        for i in range(quantity_words):
            if i == 0 and is_before:
                ipsum += Constants.IPSUM_WORDS[
                    randint(0, len(Constants.IPSUM_WORDS)-1)
                ].capitalize() + " "
                continue

            if i == quantity_words-1 and not is_before:
                ipsum += Constants.IPSUM_WORDS[
                    randint(0, len(Constants.IPSUM_WORDS)-1)
                ] + "."
                continue

            ipsum += Constants.IPSUM_WORDS[
                randint(0, len(Constants.IPSUM_WORDS)-1)
            ] + " "
        return ipsum
