
import React, {useState } from 'react'
import Techselectoptions from '../../components/techs/Techselectoptions'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'
import { addLog } from '../../actions/logactions'
import M from 'materialize-css/dist/js/materialize'


 const Addlogmodal = ({addLog}) => {
     const [attention , setAttention] = useState('');
     const [message , setMessage] = useState(false);
     const [tech , settech] = useState('');

     const onsubmit=()=>{
         if(message === '' || tech === ''){

            M.toast({html: 'Please Enter a message and tech'})
             
         }
         else{
           const newLog = {
               message,
               attention,
               tech
           }
           addLog(newLog);

           M.toast({html:`Log Added by ${tech}`})
         }
        
    }
    return (
        <div id='add-log-modal' className='modal' style={{modalStyle}} >

            <div className='modal-content'>
                <h4>Enter System Log</h4>
                
                <div className='row'>
                    <div className='input-field'>
                        <input 
                        type='text' 
                        name='message' 
                        value={message} 
                        onChange={e=> setMessage(e.target.value)}/>
                        <label htmlFor='message' className='active'>Load message</label>
                    </div>
                </div>

                <div className='row'>
                    <div className='input-field'>

                        <select  
                        name='tech' 
                        value={tech} 
                        className='browser-default'
                        onChange={e=>settech(e.target.value)}>
                            <Techselectoptions/>
                        </select>

                    </div>

                    </div>
                    <div className='row'>
                        <div className='input-field'>
                            <p>
                            <label>
                           
                            <input type="checkbox"
                            className='filled-in' 
                            value={attention}
                            checked={attention}
                            onChange={e=>setAttention(!attention)}
                            />
                            <span>Needs Attention</span>
                               </label>
                           
                          
                            </p>
                         
                    </div>
                 </div>
                </div>
                <div className='modal-footer'>
                    <a href='#!'  onClick={onsubmit}  className='modal-close waves-effect blue waves-light btn'>Enter</a>
                </div>
             </div>
             
            
        
    )
};
Addlogmodal.propTypes={
    addLog:PropTypes.func.isRequired,
}
const modalStyle={
    width: '75%',
    height:'75%'
}
export default connect(null , {addLog})(Addlogmodal)
