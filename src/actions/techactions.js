import {
GET_TECHS,
ADD_TECH,
DELETE_TECH,
SET_LOADING,
TECHS_ERROR
} from './types'


//set loading true

const setLoading = ()=>{
    return{
        type:SET_LOADING
    }
}

//get techs from server

export const getTechs = ()=> async dispatch=>{
    try {
        
        setLoading();
        
        const res = await fetch('http://localhost:5000/techs');
        const data = await res.json();

        dispatch({
            type:GET_TECHS,
            payload:data
        });

    } catch (error) {
        dispatch({
            type:TECHS_ERROR,
            payload: error
        })
        
    }
};

// ADD TECHS

export const addTech = (tech)=> async dispatch=>{

    try {
        
        setLoading();

        const res = await fetch('http://localhost:5000/techs' , {
            method:'POST',
            body:JSON.stringify(tech),
            headers:{
                'Content-type':'application/json'
            }

        });
        const data = res.json();

        dispatch({
            type:ADD_TECH,
            payload:data
        });

    } catch (error) {

        dispatch({
            type:TECHS_ERROR,
            payload:error
        })
        
    }};

// DELETE TECHS

export const deleteTech = (id)=> async dispatch=>{

    try {
        
        setLoading();

         await fetch(`http://localhost:5000/techs/${id}` , {

            method:'DELETE'

         });
        

        dispatch({
            type:DELETE_TECH,
            payload:id
        });

    } catch (error) {

        dispatch({
            type:TECHS_ERROR,
            payload:error
        })
        
    }};




