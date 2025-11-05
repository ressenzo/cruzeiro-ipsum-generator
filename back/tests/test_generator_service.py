from services.constants import Constants
from services.generator_service import GeneratorService


def test_return_message_when_quantity_is_not_a_number():
    gs = GeneratorService()
    message = gs.generate_paragraphs("3")
    assert message == "Invalid quantity value"


def test_return_message_when_quantity_is_less_than_1():
    gs = GeneratorService()
    message = gs.generate_paragraphs(0)
    assert message == "Paragraphs min len is 1"


def test_return_message_when_quantity_is_greater_than_10():
    gs = GeneratorService()
    message = gs.generate_paragraphs(11)
    assert message == "Paragraphs max len is 10"


def test_return_paragraphs():
    gs = GeneratorService()
    paragraphs = gs.generate_paragraphs(2)
    assert isinstance(paragraphs, list)
    assert len(paragraphs) == 2
    assert all(isinstance(p, str) for p in paragraphs)
    assert all(len(p.strip()) for p in paragraphs)
    assert any(
        word in Constants.CRUZEIRO_WORDS for p in paragraphs for word in p.split())
    assert any(
        word in Constants.IPSUM_WORDS for p in paragraphs for word in p.split())
    assert all("." in p for p in paragraphs)
