import json
import os
from flask import Flask, Response, send_from_directory

app = Flask(__name__, static_folder=None)

@app.route('/', defaults={'path': 'index.html'})
@app.route('/<path:path>')
def catch_all(path):
    return send_from_directory('../client/build', path) 