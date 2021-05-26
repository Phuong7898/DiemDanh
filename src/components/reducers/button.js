import { INIT_STATE } from "../../constant";
import { create, getPosts, getType } from "../action";

export default function postsReducer(state = INIT_STATE.post, action) {
    switch (action.type) {
        case getType(getPosts.getRequest):
            return {
                ...state,
                isLoading: true,
            }
        case getType(getPosts.getSuccess):
            return {
                ...state,
                isLoading: false,
                data: action.payload,
            }
        case getType(getPosts.getFailure):
            return {
                ...state,
                isLoading: false,
            }
        case getType(create.createSuccess):
            return {
                ...state,
                data: [...state.data, action.payload]
            }

        default:
            return state;
    }

}
