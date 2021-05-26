import { createActions, createAction } from 'redux-actions';
export const getType = (reduxAction) => {
    return reduxAction().type;
}
export const getPosts = createActions({
    getRequest: undefined,
    getSuccess: (payload) => payload,
    getFailure: (err) => err
});

export const create = createActions({
    createRequest: (payload) => payload,
    createSuccess: (payload) => payload,
    createFailure: (err) => err
});
export const update = createActions({
    updateRequest: (payload) => payload,
    updateSuccess: (payload) => payload,
    updateFailure: (err) => err
});
export const showModal = createAction('SHOW_CREATE_MODAL');
export const hideModal = createAction('HIDE_CREATE_MODAL');