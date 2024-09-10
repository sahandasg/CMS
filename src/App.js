import {useRoutes} from "react-router-dom";
import routes from "./routes";
import Sidebar from "./components/sidebar/Sidebar";
import Header from "./components/Header";

function App() {
    const content = useRoutes(routes)
  return (
    <>
        <Header/>
        <Sidebar/>
        {content}
    </>
  );
}

export default App;
