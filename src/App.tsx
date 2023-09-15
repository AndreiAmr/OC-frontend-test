import { PackagesProviders } from "./infra/packages";
import { Header } from "./ui/components/Header";

function App() {
  return (
    <PackagesProviders>
      <Header />
    </PackagesProviders>
  );
}

export default App;
