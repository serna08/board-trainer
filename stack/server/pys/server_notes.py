#server logic by
#midnight

## server logic templates - flask python_____________________________________01
##
## --HTTPS request handling--
## is request presentable?          else ignore req     probably not a user
## is user authorized?              else ignore req     tampering / hacking
## is auth-user request logical?    else discard req    bugs / miss-auth
## is auth-user log-req possible?   else notify error   user/client error
## is req for timed data?           else to scheduler   not lag - scheduler
## is req live game data?           forward to Q        lag
##
## scheduler: (pusher, popper, shifter, checker) by (user level, op cost, size)
## tend by membership, then resource cost, then size
##
## -- Q -- time sensitive request omnibroker
##
##


### filter client requests by new or existing
## if( [client.req == new(g)] && client.auth ):
##      server.send(new{g.template}), server.start(g.match)
##  else:
##      buffer.push(client.req)
##      server.gameBroker(buffer)
##
##
