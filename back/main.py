from flask import Flask

from services.generator_service import GeneratorService
from controllers.generator_controller import create_generator_routes


def create_app():
    app = Flask(__name__)
    generator_service = GeneratorService()
    app.register_blueprint(
        create_generator_routes(generator_service)
    )
    return app


if __name__ == "__main__":
    app = create_app()
    app.run(debug=True)
