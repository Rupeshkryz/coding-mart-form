import React, { Component } from 'react';
import Dialog from '@material-ui/core/Dialog';
import AppBar from '@material-ui/core/AppBar';
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

export class FormPersonalDetails extends Component {
  continue = e => {
    e.preventDefault();
    this.props.nextStep();
  };

  back = e => {
    e.preventDefault();
    this.props.prevStep();
  };

  render() {
    const { values, handleChange } = this.props;
    return (
      <MuiThemeProvider>
        <>
          <Dialog
            open
            fullWidth
            maxWidth='sm'
          >
            <AppBar title="Enter Personal Details"></AppBar>
            <h1>Login</h1>
            <TextField
              placeholder="Enter Your E-mail"
              label="E-mail"
              onChange={handleChange('email')}
              defaultValue={values.occupation}
              margin="normal"
              fullWidth
            />
            <br />
            <TextField
          
              placeholder="Enter Your Password"
              label="Password"
              type="password"
              onChange={handleChange('password')}
              defaultValue={values.city}
              margin="normal"
              fullWidth
            />
            <br />

            <Button
              color="primary"
              variant="contained"
              onClick={this.continue}
            >Login</Button>
          </Dialog>
          
        </>
        
      </MuiThemeProvider>
    );
  }
}

export default FormPersonalDetails;
