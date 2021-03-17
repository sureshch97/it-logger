import {
    GET_TECHS,
    ADD_TECH,
    DELETE_TECH,
    SET_LOADING,
    TECHS_ERROR
    } from '../actions/types'


const intialstate = {

    techs:null,
    loading:false,
    error:null
}

export default (state= intialstate , action) => {

    switch (action.type) {

        case GET_TECHS:
            return{
                ...state,
                techs:action.payload,
                loading:false
            };
        case ADD_TECH:
            return{
                ...state,
                techs:[...state.techs , action.payload],
                loading:false
            } 
        case DELETE_TECH:
            return{
                ...state,
                techs:state.techs.filter(tech=>tech.id)
            }
        case TECHS_ERROR:
            return{
                ...state,
                error:action.payload
            }           
        case SET_LOADING:
            return{
                ...state,
                loading:true
            };    
      
        default:
            return state
          
    }
}
