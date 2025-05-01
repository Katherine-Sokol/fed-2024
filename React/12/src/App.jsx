import Header from "./components/Header";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./pages/home-page/HomePage";
import PricePage from "./pages/price-page/PricePage";
import CommentsPage from "./pages/comments-page/CommentsPage";

function App() {
  return (
    <>
      <Router>
        <Header></Header>
        <Routes>
          <Route
            path="/"
            element={<HomePage></HomePage>}
          ></Route>
          <Route
            path="/price"
            element={<PricePage></PricePage>}
          ></Route>
          <Route
            path="/comments"
            element={<CommentsPage></CommentsPage>}
          ></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
