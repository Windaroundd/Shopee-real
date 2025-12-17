import { BrowserRouter } from "react-router-dom";
import "./App.css";
import useRouteElements from "./useRouteElements";

function App() {
  const routeElements = useRouteElements();
  return routeElements;
}

export default function AppWrapper() {
  return (
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
}
