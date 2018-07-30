///react component structure
// TODO: Arena                        LV0
//arena is a super lobby
<Arena />
//this is a lobby
//volumes                             LV1
<Volume>
  <LayoutVersus />
  <LayoutSimula />
</Volume>
//layout: this is a game instance, can be multiple games
//                                    LV2
<Layout>
  <MapChess />
  <GameTwo />
</Layout>
//map: board or map or table, game container
//                                    LV3
<Map>
  <Agents />
  <Rounds />
  <Fields />
  <Ends />
  <Status />
</Map>
//players, bots, brokers, ais, teams, archons
//                                    LV3a
<Agents>
  <Deals />
  <Status />
</Agents>
//rounds are a set of turns. for RTS, a round is a game cycle
//                                    LV3b
<Round>
  <Turns />
</Round>
//turn is a set of actions all done in sequence by a player, like combos
//                                    LV3b1
<Turn>
  <Deals />
</Turn>
//deals are any itemized (logged) re/action. a deal combo is a turn
//                                    LV3b1a
<Deal>
  <Actions />
</Deal>
//actions are verb bits or intents
//                                    LV3b1a1
<Action>
  <BoardAdvantage />
  <CurrentAction />
  <BoardClosings />
  <DoomCheck />
</Action>
//fields are map regions
//                                    LV3c
<Field>
  <Tiles />
  <Units />
  <Agents />
  <DoomCheck />
</Field>
//ends are wins or losses or doom tickers
//                                    LV3d
<End>
  <Doom />
  <Win />
  <AlertLevel />
</End>
//score screen ending
//                                    LV3d1
<ScoreScreen>
  <Alert />
  <Logs />
  <Timetravel />
</ScoreScreen>
//status embedded in the styling
//                                    LV3e
<Status>
  <Status_ID />
  <Layout_and_Field_Info />
  <Log_recent />
  <AlertLevel />
</Status>





//////basic template: pass along
//////
import React from 'react';
import nameSimple from './namer.jsx';
//
class SimpleTemplate extends React.Component {
   render() {
      return (
         <div>
            <h1>hello</h1>
            <nameSimple/>
         </div>
      );
   }
export default SimpleTemplate;
//

//////advanced template with props
import React from 'react';
import nameSimple from './namer.jsx';
//
class Content extends React.Component {
   render() {
      return (
         <div>
            <p>The content text!!!</p>
            <p>button1</p>
            <button type="button" disabled={1}>A</button>
            <button type="button" disabled={0}>B</button>
            <br/>
            <button type="button" disabled={1}>C</button>
            <button type="button" disabled={1}>D</button>
            <p>turn</p>
         </div>
      );
   }
}
export default Content;
//



///react component structure
