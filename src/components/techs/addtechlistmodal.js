import React , {useEffect} from 'react'
import Addtechitem from './addtechitem'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'
import {getTechs} from '../../actions/techactions'




 const Techs = ({getTechs , tech:{techs,loading}}) => {

    useEffect(()=>{
        getTechs();
        //eslint-disable-next-line
    },[])
    return (
       <div id='tech-list-modal' className='modal'>
           <div className='modal-content'>
               <h4>Technician List</h4>
               <ul className='collection'>
                   {!loading && 
                   techs !== null &&
                   techs.map(tech=>(
                       <Addtechitem tech={tech} key={tech.id} />
                   ))}
                </ul>
               </div>


           </div>

            
       
    )
};
Techs.propTypes={
    tech:PropTypes.object.isRequired,
    getTechs:PropTypes.func.isRequired,
}
const getStateToProps=state=>({
    tech:state.tech
})
export default connect(getStateToProps, {getTechs})(Techs)
