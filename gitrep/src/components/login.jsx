import "../css/login.css";
import logo from './WIP_expand.gif';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";




function Login(){

    const upperImageUrl=logo;
    return(
        <div>
            {/* sliderhere */}
            <div class="wrapper" >
            <div class="upperImage" style={{backgroundImage:`url(${upperImageUrl})`}}></div>
            <div class= "login-form">
            <form class="form-1" method="post" action="/homepage" >
                <label for="username" >USERNAME</label><br/>
                <input type="text" name="username" placeholder="Enter your username" class="login-input1 , inputfields" ></input>
                <br/><br/>
                <label for="username" >PASSWORD</label><br/>
                <input type="password" name="password" placeholder="Enter your password" class="login-input2 , inputfields"></input>
                <br/>
                <button type="submit" class="but-1" name="login-button">LOG IN</button>

                <Link to="/signup" className="but-1" method="get" ><button class="signup-but">SIGN UP</button></Link>

            </form>



            </div>
            </div>
        </div>

    )
}

export default Login;