import {INC, DEC, INC_ASYNC} from '../actions/counter';

const counter = (state=1, action) => {
    switch (action.type) {
        case INC:
            return state + 1;
        case DEC:
            return state - 1;
        case INC_ASYNC:
            return state + 100;
        default:
            return state;
    }
}

export default counter;
