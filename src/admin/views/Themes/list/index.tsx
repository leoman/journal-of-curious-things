import React, { useEffect, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from "react-router-dom"
import {
  Box,
  Button,
  Container,
  Grid,
  Card,
  CardHeader,
  Divider,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from '@material-ui/core'
import DeleteIcon from '@material-ui/icons/Delete'
import PerfectScrollbar from 'react-perfect-scrollbar'

import { ThemesActionCreators } from '../../../../redux/actions/theme';

import Layout from '../../Layout'
import Page from '../../../components/Page'
import Toolbar from '../../../components/Toolbar'

import { TableRowsI, TableRowI } from '../../../../models/theme'

const TableRows = ({ themes, ...links }: TableRowsI) => (
  <TableBody>  
    {themes.map(theme => <TableRowComp key={theme.id} {...theme} {...links} />)}
  </TableBody>  
)

const TableRowComp = ({ id, name, editLink, deleteLink }: TableRowI) => (
  <TableRow>
    <TableCell colSpan={10}>{ name }</TableCell>
    <TableCell size="small" className="text-center">
      <Button
        color="primary"
        variant="outlined"
        size="small"
        onClick={() => editLink(id)}
      >
        Edit
      </Button>
    </TableCell>
    <TableCell size="small" className="text-center">
      <Button
        color="secondary"
        variant="contained"
        size="small"
        onClick={() => deleteLink(id)}
        startIcon={<DeleteIcon />}
      >
        Delete
      </Button>
    </TableCell>
  </TableRow>
)

const ThemesList = () => {
  const history = useHistory()
  const dispatch = useDispatch()

  const { themes, loading, loaded, themeError } = useSelector(
    (state: any) => state.ThemeReducer,
  );

  const getThemeData = useCallback(() => {
    const { getThemes } = ThemesActionCreators;
    dispatch(getThemes());
  }, [dispatch]);

  const removeTheme = useCallback((id) => {
    const { deleteTheme } = ThemesActionCreators;
    dispatch(deleteTheme(id));
  }, [dispatch]);

  useEffect(() => {
    if (!loading && !themeError && !loaded) {
      getThemeData();
    }
  }, [loading, loaded, getThemeData, themeError]);

  if (!themes) return null

  const addTheme = () => history.push('/admin/themes/create')
  const editTheme = (id: number) => history.push(`/admin/themes/edit/${id}`)
  const deleteTheme = (id: number) => {
    const result = window.confirm("Are you sure you want to delete this theme?");
    if (result) { removeTheme(id) }
  }

  return (
    <Page>
      <Container maxWidth="lg">

        <Toolbar link={addTheme} title={'Add Theme'} />

        <Grid
          container
        >
          <Card style={{ width: '100%' }}>
            <CardHeader title="Themes" />
            <Divider />
            <PerfectScrollbar>
              <Box minWidth={800}>
                <Table>
                  <TableHead>
                    <TableRow>
                      <TableCell colSpan={10}>Name</TableCell>
                      <TableCell size="small" colSpan={2}></TableCell>
                    </TableRow>
                  </TableHead>

                  <TableRows
                    themes={themes}
                    editLink={editTheme}
                    deleteLink={deleteTheme}
                  />

                </Table>
              </Box>
              </PerfectScrollbar>
            </Card>
        </Grid>
      </Container>
    </Page>
  )
}

const WrappedThemesList = () => <Layout component={ThemesList} />

export default WrappedThemesList