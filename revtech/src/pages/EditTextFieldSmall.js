import React from 'react';
import { Input, Button, Icon } from 'antd';
import firebase from '../firebase/firebase.js';






class EditTextFieldSmall extends React.Component {
    state = {
        value: this.props.text,
        editMode: false
    }
    componentDidMount() {
       console.log(this.props.text)
       console.log(this.props.userKey)
       console.log(this.props.userId)
    }

    changeEditMode = () => {
        this.setState({ editMode: !this.state.editMode })
        console.log("editMode")

    }

    updateValue = () => {
        //set state to be the value in the text field
        this.setState({
            editMode: false,
            value: document.getElementById("textInputVal").value
        })

        //update firebase
        // const userRef = firebase.database().ref("students/"+this.props.userId+"/bio");
        // userRef.set(document.getElementById("textInputVal").value)
        // userRef.on('value', (snapshot) => {
        //     let tasks = snapshot.val();
        //     console.log(tasks)
            
        // });
       
        

    }

    //renders the edit text view
    renderEditView = () => {

        return <div style = {{display: 'flex', flexDirection:'row', marginTop: '10px'}}>
            {/* <input type="text" defaultValue={this.state.value} ref = "textInputVal">
            </input> */}
            <Input
                defaultValue={this.state.value}
                autosize={{ minRows: 1, maxRows: 2  }}
                
                id = "textInputVal"
            />
            
            {/* the X button cancels the changes by changing the editmode to false without updating the value in state */}
            
            <Button onClick={this.changeEditMode} >cancel</Button>
          
            {/* the OK button updates state and changes the edit mode */}
            <Button onClick={this.updateValue}>submit</Button>
           
        </div>
    }

    // renders a regular text field
    renderDefaultView = () => {
        return <div onDoubleClick={this.changeEditMode}>
            <p style={{ fontSize: 15, marginTop: 20, textAlign: 'left', maxWidth: 550 }}>{this.state.value}</p>
        </div>


    }
    render() {
        return (
            this.state.editMode ? this.renderEditView() : this.renderDefaultView()

        );
    }
}
export default EditTextFieldSmall;


