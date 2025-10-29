from flask import Blueprint

from services.generator_service import GeneratorService

generator_bp = Blueprint("generator", __name__)
service = GeneratorService()

@generator_bp.route("/paragraphs/<int:quantity>")
def hello(quantity: int):
    print(quantity)
    return {
        "hello": "world"
    }, 200
