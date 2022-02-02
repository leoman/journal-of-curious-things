import React, { useState, useCallback } from "react";
import { useDispatch } from 'react-redux';
import { useHistory, useLocation } from 'react-router-dom';
import {
  Box,
  Button,
  ButtonGroup,
  Container,
  Card,
  CardHeader,
  CardContent,
  Divider,
  Grid,
  FormControl,
  TextField,
} from "@material-ui/core";
import { createStyles, makeStyles } from "@material-ui/core/styles";
import SaveIcon from "@material-ui/icons/Save";
import PerfectScrollbar from "react-perfect-scrollbar";

import Layout from "../Layout";
import Page from "../../components/Page";

import { AuthActionCreators } from '../../../redux/actions/auth';

const useStyles = makeStyles(() =>
  createStyles({
    formControl: {
      minWidth: "100%",
      marginTop: "16px",
    },
    switch: {
      textAlign: "center",
      marginTop: "16px",
    },
    buttonGroup: {
      marginTop: "16px",
    },
  })
);

const Login = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const history = useHistory();
  const location = useLocation();

  const [user, setUser] = useState('');
  const [password, setPassword] = useState('');

  const handleUser = useCallback(({ target: { value } }) => setUser(value), [
    setUser,
  ]);

  const handlePassword = useCallback(({ target: { value } }) => setPassword(value), [
    setPassword,
  ]);

  const onSubmit = useCallback(async (fields) => {
    const { login } = AuthActionCreators;
    const result: any = await dispatch(login(fields));
    if (!result.error) {
      const searchParams = new URLSearchParams(location.search);
      const returnUrl = searchParams.get('return_url');
      if (returnUrl) {
        return history.push(returnUrl);
      }
    }
    return history.push('/admin');
  }, [dispatch, history, location]);

  const handleSubmit = useCallback(
    () =>
      onSubmit({
        user,
        password,
      }),
    [
      user,
      password,
      onSubmit,
    ]
  );

  return (
    <Page>
      <Container maxWidth="lg">

        <Grid container>
          <Card style={{ width: "100%" }}>

            <CardHeader title="Login" />
            <Divider />
            <PerfectScrollbar>
              <Box minWidth={800}>
                
                <CardContent>
                  <Grid container spacing={3}>
                    <Grid item xs={4}>
                      <FormControl className={classes.formControl} variant="outlined">
                        <TextField
                          fullWidth
                          label="User"
                          margin="normal"
                          name="user"
                          onChange={handleUser}
                          type="text"
                          value={user}
                          variant="outlined"
                        />
                      </FormControl>

                      <FormControl className={classes.formControl} variant="outlined">
                        <TextField
                          fullWidth
                          label="Password"
                          margin="normal"
                          name="password"
                          onChange={handlePassword}
                          type="password"
                          value={password}
                          variant="outlined"
                        />
                      </FormControl>

                      <ButtonGroup className={classes.buttonGroup}>
                        <Button
                          variant="contained"
                          color="primary"
                          size="large"
                          onClick={handleSubmit}
                          startIcon={<SaveIcon />}
                        >
                          Login
                        </Button>
                      </ButtonGroup>
                    </Grid>
                  </Grid>
                </CardContent>
              </Box>
            </PerfectScrollbar>
          </Card>
        </Grid>
      </Container>
    </Page>
  );
};

const WrappedLogin = () => <Layout showNavigation={false} component={Login} />;

export default WrappedLogin;
