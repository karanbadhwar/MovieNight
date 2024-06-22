import { useEffect } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { fetchDatafromApi } from "./utils/Api";
import { useDispatch, useSelector } from "react-redux";
import { getApiConfiguration } from "./Store/homeSlice";

//Components
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";

//Pages
import Home from "./pages/home/Home";
import Detail from "./pages/details/Detail";
import SearchResult from "./pages/searchResult/SearchResult";
import Explore from "./pages/explore/Explore";
import PageNotFound from "./pages/404/PageNotFound";

function App() {
  const dispatch = useDispatch();

  //State Below have the complete Store states.
  const url = useSelector((state) => state.home.url);
  console.log(url);
  /*
    Testing API Calls
   */

  useEffect(() => {
    apiTesting();
  }, []);

  const apiTesting = () => {
    fetchDatafromApi("/movie/popular").then((res) => {
      // console.log(res);
      dispatch(getApiConfiguration(res));
    });
  };

  //Routes
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/:mediaType/:id",
      element: <Detail />,
    },
    {
      path: "/search/:query",
      element: <SearchResult />,
    },
    {
      path: "/explore/:mediaType",
      element: <Explore />,
    },
    {
      path: "*",
      element: <PageNotFound />,
    },
  ]);

  return (
    <>
      {/* <Header /> */}
      <RouterProvider router={router}></RouterProvider>
      {/* <Footer /> */}
    </>
  );
}

export default App;
