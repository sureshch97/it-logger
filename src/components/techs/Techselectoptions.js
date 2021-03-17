import React ,{useEffect}from 'react'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'
import {getTechs} from '../../actions/techactions'




const Techselectoptions = ({ getTechs , tech:{techs , loading}}) => {

    useEffect(() => {

        getTechs();
        //eslint-disable-next-line 
    }, []);

    return (
       !loading && 
       techs !== null && 
       techs.map( t => (
           <option key={t.id} value={`${t.firstName} ${t.lastName}`}>
               {t.firstName}{t.lastName}
               </option>
       ))
    );
};

Techselectoptions.propTypes = {
    tech:PropTypes.object.isRequired,
    getTechs:PropTypes.func.isRequired,

}
const mapStateToProps =state=> ({
    tech:state.tech
});
   


export default connect(mapStateToProps , {getTechs})(Techselectoptions)
