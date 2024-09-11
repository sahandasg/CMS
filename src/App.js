import {useRoutes} from "react-router-dom";
import routes from "./routes";
import Sidebar from "./components/sidebar/Sidebar";
import Header from "./components/Header";

function App() {
    const content = useRoutes(routes)
  return (
    <>
        <Header/>
        <div className="flex flex-row w-full h-full relative top-20">
        <Sidebar/>
        {content}
        </div>
    </>
  );
}

export default App;
