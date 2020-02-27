import {CREATE_LINK_SUCCESS} from "./actions";

const initialState = {
    shortUrl: ''
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case CREATE_LINK_SUCCESS:
            return {...state, shortUrl: action.link.shortUrl};
        default:
            return state;
    }
};

export default reducer;