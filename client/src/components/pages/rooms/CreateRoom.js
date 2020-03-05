import React, { Component } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';


const useStyles = makeStyles(theme => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
        width:200,
      },
    },
  }));
//   const classes = useStyles();

class CreateRoom extends Component {

    state= {name: '', description: ''}

    nameAdded = (event) => {
        this.setState({name: event.target.value});
    }
    descriptionAdded = (event) => {
        this.setState({description: event.target.value});
    }
    ready = (event) => {
        event.preventDefault();
        this.props.isReady(this.state);
        this.setState({name:'', description:''});
    }

    render() {
        return (
                <Typography component="div" style={{ height: '20vh', padding: ' 50px' }}>
                    <h1>Create Chat room</h1>             
                <form noValidate autoComplete="off" onSubmit={this.ready}>
                <TextField id="standard-basic" label="Room name" value={this.state.name} onChange={this.nameAdded} />
                <TextField id="standard-basic" label="Room description" value={this.state.description} onChange={this.descriptionAdded}/>
                
                {/* <form className="CreateDiv" onSubmit={this.ready}> */}
                    {/* Create a new room: <input type="text" value={this.state.name} onChange={this.nameAdded} /><br />
                    Write description for this room: <input type="textarea" value={this.state.description} onChange={this.descriptionAdded} /> <br /> */}
                <Button variant="contained" type="submit" color="primary" style={{margin: 'px'}}>Create</Button>
                </form>
                </Typography>
        );
    }
}

export default CreateRoom;