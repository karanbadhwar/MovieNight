import { useEffect } from "react";
import { fetchDatafromApi } from "./utils/Api";

function App() {
  const apiTesting = () => {
    fetchDatafromApi("/movie/popular").then((res) => {
      console.log(res);
    });
  };
  useEffect(() => {
    apiTesting();
  }, []);

  return <div className="App">App</div>;
}

export default App;
