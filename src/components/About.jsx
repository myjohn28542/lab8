import React from 'react'
import { Link } from 'react-router-dom';

export default function About() {
  return (
    <div>
      <div className="container mt-5">
        <div className="card">
          <img src={"https://firebasestorage.googleapis.com/v0/b/lab8-40b63.appspot.com/o/2018-Singer-DLS-V9-2000.jpg?alt=media&token=c22bcbd4-97f3-4014-a2e4-2f4e6f22fd6a"} className='card-img-top' alt="..." />
          <div className="card-body">
            <h5 className="card-title">Developer information</h5>
            <p>suphachai mawong (610610618)</p>
            <p>This app use Google Firebase as backend.</p>
            <Link to="/lab8/">
              <h3>
                <button type="button" className="btn btn-primary">Home</button>
              </h3>
            </Link>
          </div>

        </div>
        
      </div>
      
    </div>
  )
}
