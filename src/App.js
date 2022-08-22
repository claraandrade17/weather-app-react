import Footer from "./components/Layout/Footer";

import Header from "./components/Layout/Header";
import Calendar from "./components/Weather/Calendar";
import Today from "./components/Weather/Today";

function App() {
  return (
    <div>
      <Header />
      <Today />
      <Calendar />
      <Footer></Footer>
    </div>
  );
}

export default App;