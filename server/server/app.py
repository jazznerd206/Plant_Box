from os import environ

from flask import Flask, request
from requests import get

IS_DEV = environ["FLASK_ENV"] == "development"
# print(IS_DEV)
WEBPACK_DEV_SERVER_HOST = "http://localhost:3000"

app = Flask(__name__)

def proxy(host, path):
    response = get(f"{host}{path}")
    # print('response ', response)
    excluded_headers = [
        "content-encoding",
        "content-length",
        "transfer-encoding",
        "connection",
    ]
    headers = {
        name: value
        for name, value in response.raw.headers.items()
        if name.lower() not in excluded_headers
    }
    return (response.content, response.status_code, headers)

@app.route("/")
def getRoot():
    return "Welcome! hot reload not enabled"

@app.route("/app/", defaults={"path": "index.html"})
@app.route("/app/<path:path>")
def getApp(path):
    if IS_DEV:
        return proxy(WEBPACK_DEV_SERVER_HOST, request.path)
    return app.send_static_file(path)