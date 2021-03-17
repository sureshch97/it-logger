
 import React , {useEffect} from 'react'
import LogItem from './Logsitem'
import {connect} from 'react-redux'
import Preloader from '../layout/preloader'
import PropTypes from 'prop-types'
import {getLogs} from '../../actions/logactions'


 const Logs = ({logs : { log, loading}, getLogs}) => {

  

    useEffect(() => {
        getLogs();
        // eslint-disable-next-line
      }, []);
    
      if (loading || log === null) {
        return <Preloader />;
      }

    return (
       
         <ul  className='collection with-header'>
                 <li className='collection-header'>
                     <h4 className='center'>System Logs</h4>
                 </li>
                
            {!loading && log.length === 0 ? (
                    <p className='center'>No logs to show...</p>
                ) : (
                    log.map(l => <LogItem log={l} key={l.id} />)
                )}
                    
          </ul> 
    )
};
Logs.propTypes={
    logs:PropTypes.object.isRequired,
    getLogs:PropTypes.func.isRequired,
}
const mapStateToProps = state =>({
     logs : state.log
})
   

export default connect(mapStateToProps, {getLogs})(Logs);
