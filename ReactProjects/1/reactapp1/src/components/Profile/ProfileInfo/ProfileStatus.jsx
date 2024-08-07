import Preloader from "../../additional/Preloader/Preloader";
import s from "./ProfileInfo.module.css";
import userPhoto from "../../../images/img.jpg"
import React from "react";

class ProfileStatus extends React.Component{
    state = {
        editMode: false,
        status: this.props.status
    }

    activateEditMode = () => {
        this.setState({
            editMode: true
        }) 
    }
    deactivateEditMode = () => {
        this.setState({
            editMode: false
        })
        this.props.updateStatus(this.state.status);  
    }

    onStatusChange = (e) =>{
        this.setState({
            status: e.target.value
        })
    }

    componentDidUpdate(prevProps, prevState){
        if (prevProps.status != this.props.status){
            this.setState({
                status: this.props.status
            });
        }
    }

    render(){
        return (
            <div>
                {this.state.editMode 
                ?
                <div>
                    <input onChange={this.onStatusChange} autoFocus={true} onBlur = { this.deactivateEditMode } value={this.state.status} />
                </div>
                :
                <div>
                    <span onDoubleClick={ this.activateEditMode }>{this.props.status}</span>
                </div>
                }
            </div>
        );   
    }
};

export default ProfileStatus;
