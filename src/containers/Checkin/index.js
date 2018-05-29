import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const styles = {
  paper: {
    margin: '10px',
    /* うまい具合に分割してくれる */
    display: 'block',
    justifyContent: 'center',
    alignItems: 'center',
    /* うまい具合に分割してくれる */
  },
  textField: {
    margin: 40,
    width: '400px',
  },
  submit: {
    margin: 20,
  },
};

@inject('guest')
@observer
export default class Checkin extends Component {
  render() {
    const { guest } = this.props;

    const isInvalid =
      guest.name === '' ||
      guest.sex === '' ||
      guest.age === '' ||
      guest.address === '' ||
      guest.comingFrom === '';

    return (
      <div>        
        <br />
        <h1>Confirm Check-In information</h1>
        <br />
        <form>
          <Paper style={styles.paper} elevation={6}>
            <TextField
              id="name"
              label="Name"
              className="name"
              style={styles.textField}
              value={guest.name}
              onChange={guest.handleChange('name')}
              margin="normal"
            />
            <TextField
              id="sex"
              label="Sex"
              className="sex"
              style={styles.textField}
              value={guest.sex}
              onChange={guest.handleChange('sex')}
              margin="normal"
            />
            <TextField
              id="age"
              label="Age"
              className="age"
              style={styles.textField}
              value={guest.age}
              onChange={guest.handleChange('age')}
              margin="normal"
            />
            <TextField
              id="address"
              label="Address"
              className="address"
              style={styles.textField}
              value={guest.address}
              onChange={guest.handleChange('address')}
              margin="normal"
            />
            <TextField
              id="comingFrom"
              label="Coming From"
              className="comingFrom"
              style={styles.textField}
              value={guest.comingFrom}
              onChange={guest.handleChange('comingFrom')}
              margin="normal"
            />
            <TextField
              id="nationality"
              label="Nationality"
              className="nationality"
              style={styles.textField}
              value={guest.nationality}
              onChange={guest.handleChange('nationality')}
              margin="normal"
            />
            <TextField
              id="passportNumber"
              label="Passport Number"
              className="passportNumber"
              style={styles.textField}
              value={guest.passportNumber}
              onChange={guest.handleChange('passportNumber')}
              margin="normal"
            />
          </Paper>

          <Button variant="raised" disabled={isInvalid} style={styles.submit} type="submit" color="primary" className="submit-btn" onClick={guest.submit}>
            Submit
          </Button>
        </form>
        <br />
        <div className='result'>
          {guest.result}
        </div>
      </div>
    )
  }

}