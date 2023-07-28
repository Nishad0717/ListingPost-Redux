import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux/store";
import PostListPage from "./pages/PostListPage";
import NewPostPage from "./pages/NewPostPage";
import PostDetailPage from "./pages/PostDetailPage";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/" component={PostListPage} />
          <Route exact path="/posts/new" component={NewPostPage} />
          <Route exact path="/posts/:postId" component={PostDetailPage} />
        </Switch>
      </Router>
    </Provider>
  );
};

export default App;
