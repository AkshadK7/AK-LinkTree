import React from 'react';
import './App.css';
import img from "./assets/circle.png";

//Material UI
//import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Typography from '@material-ui/core/Typography';


function App() {

  return (
    <div className="App">
      <div className='c-player'>
    <Card className="root" >
 
      <CardMedia
          image= {img} 
          className = "image"
      />

      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p" style={{textAlign: "center"}}>
          "If you get up in the morning and think the future is going to be better, it is a bright day. Otherwise, it's not."
        </Typography>
      </CardContent>
      <CardActions disableSpacing style={{justifyContent: 'center'}}>
        <a href="https://instagram.com/akshadk_7"><h2 style={{textAlign: "center", fontWeight: "normal"}}>@Akshad Kolhatkar</h2></a>
      </CardActions>

      <CardContent>
        <div className="grid">
          <a href="https://akshad.netlify.app" className="card">
            <h3> <i className="fas fa-user pl-5 pr-5"></i>{" "} Portfolio</h3>
          </a>

          <a href="https://github.com/AkshadK7" className="card">
            <h3> <i className="fab fa-github pl-5 pr-5"></i>{" "} GitHub</h3>
          </a>

          <a href="https://medium.com/@akshadkolhatkar" className="card">
            <h3> <i className="fab fa-medium pl-5 pr-5"></i>{" "} Medium</h3>
          </a>

          <a href="https://linkedin.com/in/AkshadK7" className="card">
            <h3> <i className="fab fa-linkedin pl-5 pr-5"></i>{" "} Linkedin</h3>
          </a>

          {/* <a href="https://twitter.com/AkshadK7" className="card">
            <h3>Twitter</h3>
          </a> */}

          <a href="https://drive.google.com/uc?id=1ERtP3kBnxEoF8LRyHvD0Csmu3Ovmz7mH&export=download" className="card">
            <h3>Resume {" "}<i className="fas fa-download pl-5 pr-5"></i> </h3>  
            {/* chevron-circle-down  download  arrow-circle-down save  */}
          </a>
    </div>


    </CardContent>
    </Card>
    </div>  
    </div>
  );
}

export default App;

