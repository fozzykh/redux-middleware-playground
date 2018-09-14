import React from 'react';

const App = ({ lights, onLightToggle }) => (
  <div style={{ padding: 30, backgroundColor: 'black', display: 'flex' }}>

    <div style={{ flex: 1 }}>
      {lightToEmoji(lights)}
    </div>

    {renderLightsToggleButtons(lights, onLightToggle)}

  </div>
);

const getLightStatusAsText = (lights, roomType) => lights[roomType] === 'off' ? 'on' : 'off'

const lightStateToEmoji = (ledState) => ledState === 'on' ? '🔴  ' : '⚪️  ';

const lightToEmoji = ({ bedroom, kitchen, livingRoom }) => [
  bedroom,
  kitchen,
  livingRoom
].map(lightStateToEmoji).join('');

const renderLightsToggleButtons = (lights, onLightToggle) => Object.keys(lights).map( light => (
  <button
    key={light}
    style={{ marginRight: 15 }}
    onClick={() => onLightToggle(light, lights[light])}
  >
    Turn { getLightStatusAsText(lights, light) } { light }
  </button>
));
export default App;
