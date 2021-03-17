import React from 'react'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'
import Moment from 'react-moment'
import {deleteLog , setCurrent , clearCurrent} from '../../actions/logactions'
import M from 'materialize-css/dist/js/materialize'

const Logsitem = ({log,deleteLog , setCurrent }) => {

    const ondelete=()=>{

        deleteLog(log.id);
        M.toast({html:`Log Deleted`});
    }
    return (
        <li className='collection-item'>
            <div>
                <a href='#edit-log-modal'
                className={`modal-trigger 
                ${ log.attention ? 'blue-text': 'red-text'}`}
                onClick={()=>{
                    setCurrent(log)
                }}
                > {log.message}
                </a>
                <br/>
                <span className='grey-text'>
                    <span className='dark-text'>ID #{log.id} </span>last updated{' '}
                    <span className='dark-text'>{log.tech} </span>on{' '}
                    <Moment format='MMMM Do YYYY , h:mm:ss a'>{log.date}</Moment>

                </span>
                <a href='#!' onClick={ondelete} className='secondary-content'>
                    <i className='material-icons grey-text'>delete</i>
                    </a>
           </div>
         </li>
      
    )
}

Logsitem.propTypes = {
    log:PropTypes.object.isRequired,
    deleteLog:PropTypes.func.isRequired,
    setCurrent:PropTypes.func.isRequired,
    

}

export default connect(null , {deleteLog,setCurrent,clearCurrent})(Logsitem)
