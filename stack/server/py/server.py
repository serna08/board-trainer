from flask import Flask, render_template, render_template_string
from otherpys import *

app = Flask(__name__, static_folder="../../client/dist", template_folder="../../client")

#main bundled (webpacked) react app
@app.route("/")
def index():
    return render_template("src/index.html")

#constant string
@app.route("/flask")
def flask():
    return "hello flask"

#variable string
@app.route("/hello/<name>")
def personalhello(name):
    return "hello "+ name + "!"

#predefined function
@app.route("/otherpy")
def otherpy():
    return sumis5()

#inline variable
@app.route('/post/<int:post_id>')
def show_post(post_id):
    return 'post is {}'.format(post_id)

#function that takes args
@app.route('/sq/<int:calc_id>')
def show_calc(calc_id):
    return whatsquare(calc_id)


if __name__ == "__main__":
    app.run()
