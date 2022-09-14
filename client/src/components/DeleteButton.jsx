import React from 'react'
import axios from 'axios';
    
const DeleteButton = props => {
    
    const { recordId, successCallback } = props;
    
    const deleteRecord = () => {
        axios.delete('http://localhost:8000/api/records/' + recordId)
            .then(res=>{
                successCallback();
            })
    }
    
    return (
        <button className="btn btn-danger" onClick={deleteRecord}>
            Delete
        </button>
    )
}

export default DeleteButton
