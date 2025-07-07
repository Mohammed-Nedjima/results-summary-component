import Card from "./components/Card";
import Result from "./components/Result";
import Summary from "./components/Summary";

function App() {
  return (
    <div className="bg-[var(--color-neutral-pale-blue)] min-h-screen flex items-center justify-center">
      <Card>
        <Result />
        <Summary />
      </Card>
    </div>
  );
}

export default App;
