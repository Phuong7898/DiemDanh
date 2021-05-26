import { takeLatest, call, put } from 'redux-saga/effects'
import *  as actions from '../action';
import * as api from '../api';
function* fetchPostsSaga() {
    try {
        const posts = yield call(api.fetchPosts);
        yield put(actions.getPosts.getSuccess(posts.data));
    } catch (err) {
        console.error(err);
        yield put(actions.getPosts.getFailure(err))
    }
}

function* createPostSaga(action) {
    try {
        const post = yield call(api.createPost, action.payload);
        yield put(actions.create.createSuccess(post.data));

    } catch (err) {
        console.error(err);
        yield put(actions.create.createFailure(err))
    }

}

function* updatePostSaga(action) {
    try {
        const updatePost = yield call(api.updatePost, action.payload);
        yield put(actions.update.updateSuccess(updatePost));
    } catch (err) {
        console.error(err);
        yield put(actions.update.updateFailure(err))
    }

}

function* mySaga() {
    yield takeLatest(actions.getPosts.getRequest, fetchPostsSaga);
    yield takeLatest(actions.create.createRequest, createPostSaga);
    yield takeLatest(actions.update.updateRequest, updatePostSaga);
}

export default mySaga;