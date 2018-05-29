import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';

import PasswordChangeForm from '../../components/AuthWithFirebase/PasswordChange';
import withAuthorization from '../withAuthorization';

@inject('session')
@observer
class Security extends Component {
  render() {
    const { session } = this.props;
    return (
      <div>
        <br />
        <h1>Security: {session.user.email}</h1>
        <br />
        <PasswordChangeForm />
      </div>
    )
  }
}

export default withAuthorization(Security);