#tic tac toe by
#midnight


#standard assets
m=1                                         #std maps
chip = [ [1],["x","o","i","b"] ]            #std chip
line = [ [1],["win","draw"]]                #std end
u= [chip,line]                              #std unit composition
r=3                                         #std rows
c=3                                         #std cols
l=1                                         #std number of rematchs
d=r,c,l                                     #std field dimensions
v='vanilla'                                 #std std
start = 0                                   #std start
#TODO: move primitives to primitives file

#TODO: advanced - create RossetaPrimitive for programatic game creation (rules)


#client request
codename =  ['eagle_landing_ttt_555_00']    #layout, here also the game
qx =        [ 'qx:go' ]                     #qixtats
a=          ['p1', 'p2', 'broker']          #agents
t=          [0,]                            #current turn
d=          [r,c,l]                         #dimensions
f=          [m,d,u]                         #fields
s=          [444]                           #status: during client request
#de-jsonified unbundled data
inbound = (codename,qx,a,t,f,s,v,start)
#send inbound to view controller
list(inbound)



#######    this is where the server starts    #######
#TODO: move imbound to other file
#
#store inbound request values.
rows,cols,levs,maps,qx,h,n,msg = r,c,l,m,"blu",333,'map_id:ref','msg::hi'
#TODO: create receiving template
## receiver = [rows,cols,levs,maps,qx,h,n,msg]
#board state instance
ttvanilla = [
    inbound[0],[qx,inbound[1]],
    [[[[[[ (100*(rows+1)+10*(1+cols)+levs),
    "b" ] for rows in range(rows)] for cols in range(cols)],
    inbound[3] ] for levs in range(levs)] for maps in range(maps)] ,n],msg

#send board to view controller
list(ttvanilla)
ttvanilla
#


#TODO: example deal JSON structure
#example deal: Relative
deal = ["a","b","c","a","b","c","a","b","c"]


#TODO: chronobroker definition
### make fake/random deals
### have chronobroker receive deals
### chronobroker allocate resources for deal
### have chronobroker timesort and send one-at-a-time deals to mapbroker
### have mapbroker call dealbroker to verify each deal
### repeat until dealbroker reports end
### mapbroker verifies end, notifies chronobroker
### chronobroker warns players, terminates resource allocation


#TODO: netbroker: ping/connection tests
#TODO: rtsbroker: reconcile clients/server map



## -- chronobroker -- time master
## check if available resources
## determine mods, handicaps
## (optional) establish connection to all parties
## -- mapbroker -- map master
## board state with initial mods
## broker/player  deals[actions,reactions]
## repeat : break on win/end
## score screen








#
#

## tic tac toe map template class
from dataclasses import dataclass
@dataclass()
class TicTacToeMap:
    name = ["VanillaTicTac", ["map_id",'h'] ]
    qx = ["colorCode", [5,2,"full_Status"] ]
    agents = [1,2,"broker"]
    time = [['active'],['last turn'],['first turn'],['initial_deal'] ]
    fields = [('grid'),('not placed')]
    status = ["full_Status",0,1,2,"color"]
## make new map (start a game of ttt)
LiveTM1 = TicTacToeMap()
#

#
