import reactImg from "./assets/react-core-concepts.png";
import componentImg from "./assets/components.png";
import Header from "./components/Header.jsx";
import CoreConcepts from "./components/CoreConcepts.jsx";
import Examples from "./components/Examples.jsx";







function App() {
  
  
  return (
    <div className="parent">
      <Header />
      
      <CoreConcepts />
      <main>
        <h2>Time to get started!</h2>
      </main>
      
      <Examples />
    </div>
  );
}

export default App;
