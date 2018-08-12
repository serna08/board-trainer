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
