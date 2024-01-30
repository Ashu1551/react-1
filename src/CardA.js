import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

const CardA = () => {
  return (
    <div>
        <div className="card" style={{width:200}}>
  <img    height="400" src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Y2Fyc3xlbnwwfDB8MHx8fDA%3D"/>
  <div class="card-body">
    <h5 class="card-title">car</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="https://www.google.com/" class="btn btn-primary">Google</a>
  </div>
</div>
    </div>
  )
}

export default CardA