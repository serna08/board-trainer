#tictactoe server style
def game_end(squares):
    lines, i =    [ [0, 1, 2],
                    [3, 4, 5],
                    [6, 7, 8],
                    [0, 3, 6],
                    [1, 4, 7],
                    [2, 5, 8],
                    [0, 4, 8],
                    [2, 4, 6] ], 0
    for i in range(len(lines)):
        [a, b, c] = lines[i]
        if( str(squares[a]).replace("\\","") == 'X'):
            if((squares[a] == squares[b]) and (squares[a] == squares[c])):
                return("x wins")
        if( str(squares[a]).replace("\\","") == 'O'):
            if((squares[a] == squares[b]) and (squares[a] == squares[c])):
                return("o wins")
    return 7

def alive_tictactoe(request,turns):
    import json
    status = 1
    print("yes post cycles:" + str(turns) + "   response: " + str(request) )
    turns = turns + 1
    b=[0]*10
    raw = request.get_data()
    raw2 = str(raw).replace('{','[').replace('}',']').replace('"','')
    raw3 = raw2.split(',')
    print(raw3)
    print(str(raw2))
    print(list(raw3))
    #TODO parse reqs
    i,boardstate = 0,['i']*10
    for i in range(len(boardstate)):
        boardstate[i] = b[i]
    #TODO feed game_end properly
    status = game_end(boardstate)
    return(status,turns)
