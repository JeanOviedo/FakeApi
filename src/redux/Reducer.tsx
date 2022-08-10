import {MODAL, USUARIO, ERROR, LOADING} from "./Types";
const initialState = {
    usuario: [],
    modal: [],
    error: "",
    loading: false


};


export default function rooReducer(state = initialState, action : any) {

    switch (action.type) {


        case USUARIO:
            return {
                ... state,
                usuario: action.payload


            };
        case LOADING:
            return {
                ... state,

                loading: action.payload

            };

        case ERROR:
            return {
                ... state,

                error: action.payload

            };


        case MODAL:
            return {
                ... state,

                modal: action.payload

            };


        default:
            return state;
    }
}
