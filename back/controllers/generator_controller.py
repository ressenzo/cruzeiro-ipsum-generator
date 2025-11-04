from flask import Blueprint, jsonify
from services.generator_service import IGeneratorService

generator_bp = Blueprint("generator", __name__)

def create_generator_routes(generator_service: IGeneratorService):

    @generator_bp.route("/paragraphs/<int:quantity>")
    def generate_paragraphs(quantity: int):
        paragraphResult = generator_service.generate_paragraphs(quantity)
        if isinstance(paragraphResult, str):
            return jsonify(error=paragraphResult), 400
        
        return jsonify(paragraphs=paragraphResult), 200
    
    return generator_bp
