import React, { useCallback } from 'react';
import { useHistory } from "react-router-dom"
import { useDispatch } from 'react-redux'
import {
  Box,
  Container,
  Grid,
  Card,
  CardHeader,
  Divider,
} from '@material-ui/core'

import { ThemesActionCreators } from '../../../../redux/actions/theme';

import Layout from '../../Layout'
import Page from '../../../components/Page'
import Form from '../Form'

// eslint-disable-next-line react/display-name
const ThemeCreate = () => {
  const history = useHistory()
  const dispatch = useDispatch()
  const onCancel = () => history.push('/admin/themes')

  const onSubmit = useCallback((fields) => {
    const { addTheme } = ThemesActionCreators;
    dispatch(addTheme(fields));
    history.push('/admin/themes')
  }, [dispatch, history]);

  return (
    <Page>
      <Container maxWidth="lg">
        <Grid
          container
        >
          <Card style={{ width: '100%' }}>
            <CardHeader title="themes" />
            <Divider />
            <Box mt={3}>
              <Form
                onSubmit={onSubmit}
                onCancel={onCancel}
              />
            </Box>
          </Card>
        </Grid>
      </Container>
    </Page>
  );
}

const WrappedThemeCreate = () => <Layout component={ThemeCreate} />

export default WrappedThemeCreate