import { useState } from "react";
import { PackagesProviders } from "./infra/packages";
import { Header } from "./ui/components/Header";
import { Agronomic } from "./ui/screens/Agronomic";
import { Financial } from "./ui/screens/Financial";
import { CurrentPageEnum } from "./ui/types";

type GetCurrentPageType = () => React.ReactNode;

function App() {
  const [currentPage, setCurrentPage] = useState<CurrentPageEnum>(
    CurrentPageEnum.agronomic
  );

  const getCurrentPage: GetCurrentPageType = () => {
    if (currentPage === CurrentPageEnum.agronomic) {
      return <Agronomic />;
    }
    if (currentPage === CurrentPageEnum.financial) {
      return <Financial />;
    }

    return <Agronomic />;
  };

  return (
    <PackagesProviders>
      <Header handleChangePage={setCurrentPage} currentPage={currentPage} />

      {getCurrentPage()}
    </PackagesProviders>
  );
}

export default App;
