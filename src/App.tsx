import React from "react"
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom"
import { Provider } from 'react-redux';

import store from './redux';

import AdminPostsList from './admin/views/Posts/list'
import AdminPostsCreate from './admin/views/Posts/create'
import AdminPostsEdit from './admin/views/Posts/edit'

import AdminProductsList from './admin/views/Products/list'
import AdminProductsCreate from './admin/views/Products/create'
import AdminProductsEdit from './admin/views/Products/edit'

import AdminThemesList from './admin/views/Themes/list'
import AdminThemesCreate from './admin/views/Themes/create'
import AdminThemesEdit from './admin/views/Themes/edit'

import PostsList from './views/posts/list'
import PostView from './views/posts/view'

import ProductsList from './views/products/list'
import ProductView from './views/products/view'

import { AppWrapper } from './styles'

const App = () => (
  <Provider store={store}>
    <AppWrapper>
      <Router>
        <Switch>
          <Route path="/admin/posts/edit/:id" exact component={AdminPostsEdit} />
          <Route path="/admin/posts/create" exact component={AdminPostsCreate} />
          <Route path="/admin/posts" exact component={AdminPostsList} />
          <Route path="/admin/products/edit/:id" exact component={AdminProductsEdit} />
          <Route path="/admin/products/create" exact component={AdminProductsCreate} />
          <Route path="/admin/products" exact component={AdminProductsList} />
          <Route path="/admin/themes/edit/:id" exact component={AdminThemesEdit} />
          <Route path="/admin/themes/create" exact component={AdminThemesCreate} />
          <Route path="/admin/themes" exact component={AdminThemesList} />
          <Route path="/products/:slug" exact component={ProductView} />
          <Route path="/products" exact component={ProductsList} />
          <Route path="/posts/:slug" exact component={PostView} />
          <Route path="/" exact component={PostsList} />
          <Route>
            <Redirect to="/"/>
          </Route>
        </Switch>
      </Router>
    </AppWrapper>
  </Provider>
)

export default App;
