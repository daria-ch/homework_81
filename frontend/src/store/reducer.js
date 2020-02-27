import {POST_LINK_SUCCESS} from "./actions";

const initialState = {
    shortUrl: ''
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case POST_LINK_SUCCESS:
            return {...state, shortUrl: action.link};
        default:
            return state;
    }
};


export default reducer;