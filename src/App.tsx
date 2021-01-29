import React from "react";
import Container from "react-bootstrap/Container";

import { CommitsPage } from "./pages/commits.component";

export const App: React.FC = () => (
  <Container>
    <CommitsPage />
  </Container>
);

export default App;
