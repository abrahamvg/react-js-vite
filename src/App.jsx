import "./App.css";
import { Route, Routes, useParams } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";
import List from "./pages/List";
import Product from "./pages/Product";
import Sidebar from "./components/Sidebar";
import { Theme} from "@radix-ui/themes";
import '@radix-ui/themes/styles.css';

function App() {
  
  return (
    <Theme accentColor="ruby">
      <Router>
        <div className="grid grid-cols-12 h-screen">
          <div className="col-span-2">
            <Sidebar />
          </div>
          <div className="col-span-10">
            <Routes>
              <Route path="/" element={<List />} />
              <Route path=":doggoId" element={<Product />} />
              {/* <Route path='/product'/> */}
            </Routes>
          </div>
        </div>
      </Router>
    </Theme>
  );
}

export default App;
