from flask import Flask, render_template, render_template_string
from flask import request, redirect, url_for
from pys.otherpys import *

app = Flask(__name__, static_folder="../client/dist", template_folder="../client")
app.config['DEBUG'] = True

    #obslote    #app.config['FLASK_ENV'] = development

#main bundled (webpacked) react app
@app.route("/", methods=["GET", "POST"])
def index():
    ButtonPressed = 0
    if request.method == "POST":
        ButtonPressed += 1
        print('button was pressed')
    else:
        print('button not pressed')
    return render_template("src/index.html", ButtonPressed = ButtonPressed)

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
    app.run(debug=True)
