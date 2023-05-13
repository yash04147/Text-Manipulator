import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import { useState } from "react";

function App() {
  const [mode, setmode] = useState("light");

  const togglemode = () => {
    if (mode === "light") {
      setmode("dark");
      document.body.style.backgroundColor = "#233441";
    } else {
      setmode("light");
      document.body.style.backgroundColor = "white";
    }
  };
  return (
    <>
      {/* <Router> */}
      <Navbar title="TextManip" mode={mode} togglemode={togglemode} />
      <div className="container my-3">
        {/* <Routes>
            <Route exact path="/about" element={<About />} />
            <Route exact path="/" element={<TextForm heading="Enter the text to analyze" mode={mode} />} />
          </Routes> */}
        <TextForm
          heading="Enter the text to analyze & manipulate"
          mode={mode}
        />
      </div>
      {/* </Router> */}
    </>
  );
}

export default App;
