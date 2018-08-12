from flask import Flask, render_template, render_template_string
from flask import request, redirect, url_for
from flask import jsonify, json
from pys.otherpys import *
from pys.games.tictactoe.instance import *

dbx = [0,0]
app = Flask(__name__, static_folder="../client/dist", template_folder="../client")

#main bundled (webpacked) react app
@app.route("/", methods=["GET", "POST"])
def index():
    turns = dbx[0]
    inProgress = 0
    if request.method == "POST":
        print("old status: " + str(dbx))
        inProgress = 1
        dbx[1] = dbx[1] + 1
        status,turns = alive_tictactoe(request,turns)
        print(status)
    return render_template("src/index.html", ButtonPressed = inProgress)


@app.route("/ttt", methods=["GET", "POST"])
def ttt():
    boardID = 'banana'
    print(boardID)
    if request.method == "POST":
        print("\nttt: " + boardID)
    return render_template("src/index.html", ButtonPressed = '67')

#json example request
@app.route("/listen")
def listen():
    deal = []
    for i in range(0,1):
        inbound = ['deal.id', 'ee', [ 'tx_total', 'qx' ] ]
        deal.append(inbound)
    print(deal)
    jsonDeal = json.dumps(deal)
    print(jsonDeal)
    return jsonify(jsonDeal)

#predefined function
@app.route("/otherpy")
def otherpy():
    return sumis5()

#function that takes args
@app.route('/sq/<int:calc_id>')
def show_calc(calc_id):
    return whatsquare(calc_id)

@app.route('/data')
def names():
    data = {"names": ["John", "Jacob", "Julie", "Jennifer"]}
    return jsonify(data)

@app.route('/queryx')
def query_example():
    deal = request.args.get('deal')
    auth = request.args['auth']
    return '''<h1>The deal is: {} with {}</h1>'''.format(deal,auth)

@app.route('/formx', methods=['GET', 'POST'])
def form_example():
    if request.method == 'POST':
        deal = request.form.get('deal')
        auth = request.form['auth']
        return '''<h1>The deal value is: {}</h1>
                  <h1>The auth value is: {}</h1>'''.format(deal, auth)
    return '''<form method="POST">
                  deal: <input type="text" name="deal"><br>
                  auth: <input type="text" name="auth">
                  <input type="submit" value="send">
              </form>'''

@app.route('/jsonx/<rawjson>', methods=['GET', 'POST'])
def json_xraw(rawjson):
    deal = '10x96121'
    auth = '8x5257'
    return '''raw: {} >> deal ID: {} auth code: {}'''.format(rawjson ,deal, auth)

@app.route('/jsonx', methods=['GET', 'POST'])
def json_example():
    req_data = [request.args.get('deal'),request.args.get('auth')]
    print(req_data)
    deal = req_data[0]
    auth = req_data[1]
    return '''in >> deal ID: {} auth code: {}'''.format(deal, auth)

##



if __name__ == "__main__":
#    contextssl = ('cert.crt', 'key.key')
    app.run(host='127.0.0.1',port='5001', debug = False, ssl_context='adhoc')
#    sslify = SSLify(app, permanent=True)


#
