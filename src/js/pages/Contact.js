import React from "react";
import {Link} from 'react-router';


export default class Contact extends React.Component {
  render() {

    return (
    	<div>
    	  <div className="hero">
    	    <h1 className="page-title">Contact Us</h1>
    	    <img src="assets/images/building.jpg" />
    	  </div>
    	  <div className="container-fluid">
			    <div className="row">
			      <div className="col-xs-12 content">
			        
			       <h2>Contact form</h2>
					  <form class="form-horizontal" action="/action_page.php">
					  <div class="form-group">
					      <label class="control-label col-sm-2" for="name">Full Name:</label>
					      <div class="col-sm-10">
					        <input type="text" class="form-control" id="fname" placeholder="Enter full name" name="full name" />
					      </div>
					    </div>
					    <div class="form-group">
					      <label class="control-label col-sm-2" for="email">Email:</label>
					      <div class="col-sm-10">
					        <input type="email" class="form-control" id="email" placeholder="Enter email" name="email" />
					      </div>
					    </div>
					    
					    <div class="form-group">        
					      <div class="col-sm-offset-2 col-sm-10">
					        <button type="submit" class="btn btn-default">Submit</button>
					      </div>
					    </div>
					  </form>
			    </div>
		    </div>
		  </div>
		  </div>
    );
  }
}