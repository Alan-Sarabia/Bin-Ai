import React from 'react'
import {Spinner} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
function Load() {
    return (
        <div>
            <div class="spinner-grow text-success" role="status">
                <span class="visually-hidden">Loading...</span>
            </div>
        </div>
    )
}

export default Load
