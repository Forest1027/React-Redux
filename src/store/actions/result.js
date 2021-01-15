import * as actionTypes from "./actionsTypes";

export const saveResult = (res) => {
    return {
        type: actionTypes.STORE_RESULT,
        result: res
    };
}

export const storeResult = (res) => {
    // redux-thunk middleware catches dispatch after action dispatches and before dispatch reaches reducer
    // and execute below function, then dispatch action again to allow it to reach reducer
    return dispatch => {
        setTimeout(() => {
            dispatch(saveResult(res));
        }, 2000);
    }
};

export const deleteResult = (id) => {
    return {
        type: actionTypes.DELETE_RESULT,
        resultElId: id
    };
};
