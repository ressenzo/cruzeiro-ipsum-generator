"""Constants"""


from typing import Final


# pylint: disable=R0903
class Constants:
    """Constants values used on service module"""
    IPSUM_WORDS: Final[list[str]] = [
        'lorem',
        'ipsum',
        'dolor',
        'sit',
        'amet',
        'consectetur',
        'adipiscing',
        'elit',
        'etiam',
        'eget',
        'ligula',
        'eu',
        'lectus',
        'lobortis',
        'condimentum',
        'aliquam',
        'nonummy',
        'auctor',
        'pellentesque',
        'habitant',
        'morbi',
        'tristique',
        'senectus',
        'et',
        'netus',
        'malesuada',
        'fames',
        'ac',
        'turpis',
        'egestas',
        'nulla',
        'at',
        'risus',
        'quisque',
        'purus',
        'magna',
        'auctor',
        'sagittis',
        'ac',
        'posuere',
        'eu',
        'lectus',
        'nam',
        'mattis',
        'felis',
        'ut',
        'adipiscing'
    ]

    CRUZEIRO_WORDS: Final[list[str]] = [
        'maior de minas',
        'cabuloso',
        'tríplice coroa',
        '6a1',
        'cruzeiro',
        'hexacampeão',
        'tetracampeão',
        'raposa'
    ]

    QUANTITY_INVALID_TYPE_ERROR_MESSAGE: Final[str] = "Invalid quantity value"

    PARAGRAPHS_MIN_QUANTITY: Final[int] = 1
    PARAGRAPHS_MIN_QUANTITY_ERROR_MESSAGE: Final[str] = "Paragraphs min len is 1"

    PARAGRAPHS_MAX_QUANTITY: Final[int] = 10
    PARAGRAPHS_MAX_QUANTITY_ERROR_MESSAGE: Final[str] = "Paragraphs max len is 10"

    SENTENCES_MIN_QUANTITY: Final[int] = 1
    SENTENCES_MAX_QUANTITY: Final[int] = 10

    WORDS_BEFORE_MIN_QUANTIY: Final[int] = 1
    WORDS_BEFORE_MAX_QUANTIY: Final = 5

    WORDS_AFTER_MIN_QUANTIY: Final[int] = 1
    WORDS_AFTER_MAX_QUANTIY: Final[int] = 5
