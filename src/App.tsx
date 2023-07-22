import Calander from "./components/Calander";

function App() {
  return (
    <div className="flex flex-col">
      <header>header</header>
      <main className="grow">
        <Calander />
      </main>
      <footer>bloop</footer>
    </div>
  );
}

export default App;
