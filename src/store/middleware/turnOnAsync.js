import { TURN_ON, TURN_ON_ASYNC } from '../actions/types';

const sendTurnOn = () => {

    return new Promise((resolve) => {

        setTimeout(resolve, 2000);

    });

};

export default ({ getState, dispatch }) => (next) => (action) => {
    if (action.type === TURN_ON_ASYNC) {
        sendTurnOn()
            .then(() => {
                dispatch({
                    type: TURN_ON,
                    roomType: action.roomType
                })
            });
    }

    return next(action);
};