from flask import Flask, render_template, render_template_string
from flask import request, redirect, url_for
from flask import jsonify, json
from pys.otherpys import *

dbx = [6,6]

app = Flask(__name__, static_folder="../client/dist", template_folder="../client")
app.config['DEBUG'] = True

#main bundled (webpacked) react app
@app.route("/", methods=["GET", "POST"])
def index():
    ButtonPressed = 0
    print(dbx)
    if request.method == "POST":
        dbx[1] = dbx[1] + 1
        print(dbx)
    else:
        print(dbx)
    return render_template("src/index.html", ButtonPressed = ButtonPressed)

#json example request
@app.route("/listen")
def listen():
    deal = []
    for i in range(0,2):
        inbound = ['deal.id', 'ee', [ 'tx_total', 'qx' ] ]
        deal.append(inbound)
    print(deal)
    jsonDeal = json.dumps(deal)
    print(jsonDeal)
    return jsonify(jsonDeal)



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
@app.route('/post/<int:post_ids>')
def show_post(post_ids):
    return 'post is {}'.format(post_ids)

#function that takes args
@app.route('/sq/<int:calc_id>')
def show_calc(calc_id):
    return whatsquare(calc_id)

##





if __name__ == "__main__":
    app.run(debug=True)

#
