import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./component/Home";
import PageNotFound from "./component/PageNotFound";
/**
 * * is better make a folder with name page or Page and all your page be there like your Home.js and PageNotFound.js
 */
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          {
          /**
           * todo:you dont need write forward slash for page not found star(*) is enough.
           * todo: like this:<Route path="*" element={<PageNotFound />} />
           * todo: And check thisL: https://stackoverflow.com/questions/67050966/how-to-build-a-404-page-with-react-router-dom-v6
           */
           }
          <Route path="/*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
