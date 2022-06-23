import "./index.css";
import Sidebar from "./components/Sidebar";
import Content from "./components/Content";
function App() {
  return (
    <>
      <div className="bg-gradient-to-b from-indigo-900 to-orange-400 via-purple-700 h-screen">
        <Sidebar />
        <Content />
      </div>
    </>
  );
}

export default App;
