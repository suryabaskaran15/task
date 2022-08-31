import React from "react";
import ComponentRendering from "./ComponentRendering";
import {
    useLocation,
    useNavigate,
    useParams,link
  } from "react-router-dom";

class CreateNewClass extends React.PureComponent {
    constructor() {
        super();
        this.textInput = React.createRef();
        this.state = ({
            usrId: undefined,
            password: undefined,
            email: undefined,
            phoneNo: undefined,
            flag: false,
        });
    }
    created = async() => {
        await this.setState({
            usrId: document.getElementById('usrid').value,
            password: document.getElementById('passWord').value,
            email: document.getElementById('email').value,
            phoneNo: document.getElementById('phoneNo').value,
            flag: true
            })
            this.userDetail.push(this.state);
            console.log(this.userDetail);
    }
    userDetail = [];
    componentDidMount() {
        this.textInput.current.focus();
      }
    render() {
        return (
            <div>
                <div>
                <h1>Enter Your details</h1>
                <br />
                <label>User Id : </label>
                <input id="usrid" type={'number'} ref={this.textInput} />
                <br />
                <label>Password : </label>
                <input id="passWord" type={'number'} />
                <br />
                <label>Email Id : </label>
                <input id="email" type={'text'} />
                <br />
                <label>Phone No : </label>
                <input id="phoneNo" type={'tel'} /> <br />
                <button onClick={this.created}>Create</button>
                <button onClick={
                    ()=>{
                        this.props.navigate(-1);
                        
                    }
                }>Back</button>
                </div>

                {this.state.flag &&
                 <>
                    <h1>Account created successfully.....!</h1>
                    <h3>
                    user Id : {this.state.usrId}
                    <br />
                    Password : {this.state.password}
                    <br />
                    Email Id : {this.state.email}
                    <br />
                    Phone No : {this.state.phoneNo}
                    </h3>
                </>
                }
               
            </div>
        );
    }
}

const CreateNew = () => {
    let location = useLocation();
      let navigate = useNavigate();
      let params = useParams();

    return <CreateNewClass 
    navigate={navigate}
    />
}

export default ComponentRendering(CreateNew);