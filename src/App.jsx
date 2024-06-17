import { useEffect } from "react";
import { fetchDatafromApi } from "./utils/Api";
import { useDispatch, useSelector } from "react-redux";
import { getApiConfiguration } from "./Store/homeSlice";

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
      console.log(res);
      dispatch(getApiConfiguration(res));
    });
  };

  return (
    <div className="App">
      <p>{url?.total_pages}</p>
    </div>
  );
}

export default App;
