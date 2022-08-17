import React from "react";
import { Route, Routes } from "react-router-dom";
// State management
import { Provider } from "react-redux";
import store from "./redux/store";
// Components
import Header from "./components/Header";
import Home from "./pages/Home";
import NewPosts from "./pages/NewPosts";
import PostDetail from "./pages/PostDetail";

const App = () => {
  return (
    <Provider store={store}>
      <div className="container mx-auto p-3">
        <Header />
        <Routes>
          {/* <Route path="/" element={<Home />} />
          <Route path=":id" element={<PostDetail />} /> */}
          <Route path="/" element={<NewPosts />} />
        </Routes>
      </div>
    </Provider>
  );
};

export default App;
