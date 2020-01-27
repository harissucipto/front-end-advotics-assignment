import React from "react";
import Dashborad from "./pages/Dashborad";
import { StoreProvider } from "easy-peasy";
import store from "./store";

function App() {
  return (
    <StoreProvider store={store}>
      <React.Fragment>
        <Dashborad />
      </React.Fragment>
    </StoreProvider>
  );
}

export default App;
