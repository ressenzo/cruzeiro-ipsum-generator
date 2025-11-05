#"""Main entrypoint"""

from flask import Flask

from services.generator_service import GeneratorService
from controllers.generator_controller import create_generator_routes


def __create_app():
    flask = Flask(__name__)
    generator_service = GeneratorService()
    flask.register_blueprint(
        create_generator_routes(generator_service)
    )
    return flask


if __name__ == "__main__":
    app = __create_app()
    app.run(debug=True)
