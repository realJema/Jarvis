import flask
from flask import request, jsonify
from flask_cors import CORS

app = flask.Flask(__name__)
CORS(app)
app.config["DEBUG"] = True

def execute(instruction):
    pass


@app.route('/api', methods=['GET'])
def home():
    return 'Welcome! I am Jarvis!'

@app.route('/api/execute', methods=['POST'])
def count_chapters():
    'Get instructions from request'
    theInstruction = request.json['params']
    print(theInstruction['instructions'])

    return str('processing: ' + theInstruction['instructions']), 200


@app.errorhandler(404)
def page_not_found(e):
    return "<h1>404</h1><p>The resource could not be found.</p>", 404

app.run()