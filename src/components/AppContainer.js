import React from 'react';
import { connect } from 'react-redux';

import { turnOn, turnOff } from '../store/actions';
import App from './App';

const AppContainer = ({ lights, toggleLight }) => (
  <App
    lights={lights}
    onLightToggle={toggleLight}
  />
);

const mapStateToProps = ({ lights }) => ({
  lights: lights
});

const mapDispatchToProps = (dispatch) => ({
  toggleLight: async (roomType, currentState) => {
    if (currentState === 'off') {
      dispatch(turnOn(roomType));
    } else {
      dispatch(turnOff(roomType));
    }
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(AppContainer);
