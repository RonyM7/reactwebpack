import React from "react";
import {Link} from 'react-router';


export default class Home extends React.Component {
  render() {
   

    return (
    	<div>
      <div id="myCarousel" class="carousel slide" data-ride="carousel">
	  
	    <ol class="carousel-indicators">
	      <li data-target="#myCarousel" data-slide-to="0" class="active"></li>
	      <li data-target="#myCarousel" data-slide-to="1"></li>
	    </ol>

	   
	    <div class="carousel-inner">
	      <div class="item active">
	        <img src="assets/images/sabers.jpg" alt=""  />
	      </div>

	      <div class="item">
	        <img src="assets/images/dog.jpg" alt=""  />
	      </div> 
	     
	    </div>

	    
	    <a class="left carousel-control" href="#myCarousel" data-slide="prev">
	      <span class="glyphicon glyphicon-chevron-left"></span>
	      <span class="sr-only">Previous</span>
	    </a>
	    <a class="right carousel-control" href="#myCarousel" data-slide="next">
	      <span class="glyphicon glyphicon-chevron-right"></span>
	      <span class="sr-only">Next</span>
	    </a>
	  </div>

	  <div class="container-fluid">
	    <h1>Headline 1</h1>
	    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce faucibus efficitur justo in luctus. Nullam mattis dapibus arcu nec scelerisque. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Sed ornare molestie justo, in imperdiet urna rutrum vitae. Maecenas aliquet mattis erat, eu dignissim sem pulvinar id. Fusce in ligula venenatis, aliquam velit vel, cursus nisi. Pellentesque fringilla semper massa, vel ornare nibh laoreet sit amet. Etiam egestas libero et euismod auctor. Maecenas at viverra sapien. Nunc vel diam quis lectus accumsan rhoncus. Aenean maximus tincidunt ante, eu imperdiet urna tempus vitae. Nulla facilisi. Nunc urna diam, varius vel lacus eget, consectetur luctus metus. Donec fringilla vel est quis dignissim. Aliquam erat volutpat. Sed sed tincidunt mi, eget finibus tortor.

Aliquam sed libero at enim condimentum convallis. Praesent finibus diam in lorem aliquet sodales. Vivamus id sapien sed nunc volutpat vehicula egestas sed dolor. In hac habitasse platea dictumst. Cras cursus consectetur nulla sit amet tincidunt. Integer purus ex, pretium in diam ut, egestas maximus elit. In varius, magna eget dictum blandit, diam lectus varius sapien, quis facilisis nulla dolor sit amet lacus. Pellentesque ut dictum nulla.</p>

	  </div>
	  </div>


    );
  }
}