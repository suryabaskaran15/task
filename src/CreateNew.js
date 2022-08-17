import React from "react";
import MainLogIn from "./MainLogIn"

class CreateNew extends React.Component {
    constructor() {
        super();
        this.state = ({
            usrId: undefined,
            password: undefined,
            email: undefined,
            phoneNo: undefined,
            flag: false
        });
    }
    created = () => {
        this.setState({
            usrId: document.getElementById('usrid').value,
            password: document.getElementById('passWord').value,
            email: document.getElementById('email').value,
            phoneNo: document.getElementById('phoneNo').value,
            flag: true,
            backbtnFlag : false
        })

        console.log(this.state);
    }
    render() {
        return (
            <div>
                <h1>Enter Your details</h1>
                <br />
                <label>User Id : </label>
                <input id="usrid" type={'number'} />
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
                        this.setState.backbtnFlag = true;
                    }
                }>Back</button>

                {this.state.flag ? <h3>
                    <h1>Account created successfully.....!</h1>

                    user Id : {this.state.usrId}
                    <br />
                    Password : {this.state.password}
                    <br />
                    Email Id : {this.state.email}
                    <br />
                    Phone No : {this.state.phoneNo}
                </h3>
                    : null
                }
                {
                    this.state.backbtnFlag?
                    <MainLogIn />
                    :null
                }
            </div>
        );
    }
}

export default CreateNew;