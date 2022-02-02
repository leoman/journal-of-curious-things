import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { useSelector, shallowEqual } from 'react-redux';

import ProtectedRoute from "./admin/components/ProtectedRoute";

import Login from "./admin/views/Login";

import AdminPostsList from "./admin/views/Posts/list";
import AdminPostsCreate from "./admin/views/Posts/create";
import AdminPostsEdit from "./admin/views/Posts/edit";

import AdminProductsList from "./admin/views/Products/list";
import AdminProductsCreate from "./admin/views/Products/create";
import AdminProductsEdit from "./admin/views/Products/edit";

import AdminThemesList from "./admin/views/Themes/list";
import AdminThemesCreate from "./admin/views/Themes/create";
import AdminThemesEdit from "./admin/views/Themes/edit";

import AdminGalleryList from "./admin/views/Gallery/list";

import AdminOrdersList from "./admin/views/Orders/list";

import Gallery from "./views/gallery";

import PostsList from "./views/posts/list";
import PostView from "./views/posts/view";

import ProductsList from "./views/products/list";
import ProductView from "./views/products/view";

import { AppWrapper } from "./styles";

const Routing = () => {

  // const [isTokenCheckingComplete, setIsTokenCheckingComplete] = useState(false);

  const isAuthenticated = useSelector(
    (state: any) => state.AuthReducer.isAuthenticated,
    shallowEqual,
  );

  return (
    <AppWrapper>
      <Router>
        <Switch>
          <Route path="/admin/login" exact component={Login} />
          <ProtectedRoute isVerified={isAuthenticated} path="/admin/posts/preview/:slug" exact component={PostView} />
          <ProtectedRoute
            isVerified={isAuthenticated}
            path="/admin/posts/edit/:id"
            exact
            component={AdminPostsEdit}
          />
          <ProtectedRoute
            isVerified={isAuthenticated}
            path="/admin/posts/create"
            exact
            component={AdminPostsCreate}
          />
          <ProtectedRoute isVerified={isAuthenticated} path="/admin/posts" exact component={AdminPostsList} />
          <ProtectedRoute
            isVerified={isAuthenticated}
            path="/admin/products/preview/:slug"
            exact
            component={ProductView}
          />
          <ProtectedRoute
            isVerified={isAuthenticated}
            path="/admin/products/edit/:id"
            exact
            component={AdminProductsEdit}
          />
          <ProtectedRoute
            isVerified={isAuthenticated}
            path="/admin/products/create"
            exact
            component={AdminProductsCreate}
          />
          <ProtectedRoute isVerified={isAuthenticated} path="/admin/products" exact component={AdminProductsList} />
          <ProtectedRoute
            isVerified={isAuthenticated}
            path="/admin/themes/edit/:id"
            exact
            component={AdminThemesEdit}
          />
          <ProtectedRoute
            isVerified={isAuthenticated}
            path="/admin/themes/create"
            exact
            component={AdminThemesCreate}
          />
          <ProtectedRoute isVerified={isAuthenticated} path="/admin/themes" exact component={AdminThemesList} />
          <ProtectedRoute isVerified={isAuthenticated} path="/admin/gallery" exact component={AdminGalleryList} />
          <ProtectedRoute isVerified={isAuthenticated} path="/admin/orders" exact component={AdminOrdersList} />
          <ProtectedRoute isVerified={isAuthenticated} path="/admin">
            <Redirect to="/admin/posts" />
          </ProtectedRoute>
          <Route path="/gallery" exact component={Gallery} />
          <Route path="/products/:slug" exact component={ProductView} />
          <Route path="/products" exact component={ProductsList} />
          <Route path="/posts/:slug" exact component={PostView} />
          <Route path="/" exact component={PostsList} />
          <Route>
            <Redirect to="/" />
          </Route>
        </Switch>
      </Router>
    </AppWrapper>
  );
};

export default Routing;
