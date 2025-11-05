#"""GeneratorController"""

from flask import Blueprint, jsonify
from services.generator_service import IGeneratorService


generator_bp = Blueprint("generator", __name__)


def create_generator_routes(generator_service: IGeneratorService):
    @generator_bp.route("/paragraphs/<int:quantity>")
    def generate_paragraphs(quantity: int):
        paragraph_result = generator_service.generate_paragraphs(quantity)
        if isinstance(paragraph_result, str):
            return jsonify(error=paragraph_result), 400

        return jsonify(paragraphs=paragraph_result), 200

    return generator_bp
