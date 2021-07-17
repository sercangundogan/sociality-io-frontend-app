// Sass
import './assets/sass/main.scss'
// Pages and Components
import Home from "./components/Home"
import Sidebar from "./components/Sidebar"
import SidebarMobile from "./components/SidebarMobile"

function App() {
  return (
    <div className="wrapper">
      <Sidebar />
      <SidebarMobile />
      <Home />
    </div>
  );
}

export default App;
