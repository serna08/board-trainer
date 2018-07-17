from flask import Flask, render_template

app = Flask(__name__, static_folder="../../client/dist", template_folder="../../client")

@app.route("/")
def index():
    return render_template("src/index.html")

@app.route("/flask")
def flask():
    return "hello flask"

if __name__ == "__main__":
    app.run()
