import axiosApi from "../axios-api";

export const CREATE_LINK_SUCCESS = 'POST_LINK_SUCCESS';

export const createLinkSuccess = link => ({type: CREATE_LINK_SUCCESS, link});

export const createShortLink = url => {
    return async dispatch => {
        try {
            const response = await axiosApi.post('/links', url);
            dispatch(createLinkSuccess(response.data));
        } catch (error) {
            console.log(error);
        }
    }
};