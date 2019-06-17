import React, { Component } from "react";
import { Grid, TextField, Button, Link, InputLabel } from "@material-ui/core/";

class AuthForm extends Component {
  constructor() {
    super();
    this.state = {
      email: null,
      password: null
    };
    this.onEmailChange = this.onEmailChange.bind(this);
    this.onPasswordChange = this.onPasswordChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }
  onEmailChange(event) {
    console.log(`${event.target.value}`);
    this.setState({ email: event.target.value });
  }
  onPasswordChange(event) {
    console.log(`${event.target.value}`);
    this.setState({ password: event.target.value });
  }
  onFormSubmit(event) {
    console.log(event.target.value);
    event.preventDefault();
  }
  render() {
    return (
      <Grid container item>
        <form noValidate>
          <InputLabel shrink htmlFor="email">
            Email
          </InputLabel>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            name="email"
            autoComplete="email"
            autoFocus
          />
          <InputLabel shrink htmlFor="password">
            Password
          </InputLabel>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            type="password"
            id="password"
            autoComplete="current-password"
          />
          <Button type="submit" fullWidth variant="contained" color="primary">
            Sign In
          </Button>
          <Button type="submit" fullWidth variant="outlined" color="primary">
            CREATE AN ACCOUNT
          </Button>
          <Grid container>
            <Grid container item xs>
              <Link href="#" variant="body2">
                Forgot password?
              </Link>
            </Grid>
          </Grid>
        </form>
      </Grid>
    );
  }
}
export default AuthForm;
