from flask import Flask

from controllers.generator_controller import generator_bp

def create_app():
    app = Flask(__name__)
    app.register_blueprint(generator_bp)
    return app

if __name__ == "__main__":
    app = create_app()
    app.run(debug=True)
