import {MODAL, USUARIO, ERROR, LOADING , SESION} from "./Types";
const initialState = {
    usuario: [],
    modal: [],
    error: "",
    loading: false,
    sesion: false,


};


export default function rooReducer(state = initialState, action : any) {

    switch (action.type) {


        case USUARIO:
            return {
                ... state,
                usuario: action.payload


            };

            case SESION:
                return {
                    ... state,
                    sesion: action.payload
    
    
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
