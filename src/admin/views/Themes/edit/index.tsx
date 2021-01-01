import React, { useCallback, useEffect } from 'react'
import { useHistory } from "react-router-dom"
import { useSelector, useDispatch } from 'react-redux'
import { useParams } from "react-router"
import {
  Box,
  Container,
  Grid,
  Card,
  CardHeader,
  Divider,
} from '@material-ui/core'

import { ThemesActionCreators } from '../../../../redux/actions/theme'
import { ThemesActionTypes } from '../../../../redux/types'

import Layout from '../../Layout'
import Page from '../../../components/Page'
import Form from '../Form'

import { ThemeI } from '../../../../models/theme'

interface RouteParams {
  id: string
}

const findTheme = (themes: ThemeI[], id: string) => themes.find(theme => theme.id === parseInt(id))

const ThemeEdit = () => {
  const { id }: RouteParams = useParams()
  const history = useHistory()
  const dispatch = useDispatch()

  const { themes, loading, themeError, theme } = useSelector(
    (state: any) => state.ThemeReducer,
  )

  const getThemesData = useCallback(() => {
    const { getThemes } = ThemesActionCreators
    dispatch(getThemes())
  }, [dispatch])

  const setTheme = useCallback((theme) => {
    dispatch({
      type: ThemesActionTypes.SET_THEME_RES,
      payload: theme,
    })
  }, [dispatch])

  useEffect(() => {
    if (!loading && !themeError && !themes.length) {
      getThemesData()
    }
  }, [loading, themes, themeError, getThemesData])

  useEffect(() => {
    if (themes) {
      const theme = findTheme(themes, id)
      if (theme) {
        setTheme(theme)
      }
    }
  }, [id, themes, setTheme])

  const onCancel = () => history.push('/admin/themes')

  const onSubmit = useCallback((fields) => {
    const { editTheme } = ThemesActionCreators
    dispatch(editTheme(fields))
    history.push('/admin/themes')
  }, [dispatch, history])

  return (
    <Page>
      <Container maxWidth="lg">
        <Grid
          container
        >
          <Card style={{ width: '100%' }}>
            <CardHeader title="Themes" />
            <Divider />
            <Box mt={3}>
              <Form
                onSubmit={onSubmit}
                onCancel={onCancel}
                theme={theme}
              />
            </Box>
          </Card>
        </Grid>
      </Container>
    </Page>
  )
}

const WrappedThemeEdit = () => <Layout component={ThemeEdit} />

export default WrappedThemeEdit