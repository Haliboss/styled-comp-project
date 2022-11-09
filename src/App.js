import Header from "./components/Header";
import { ThemeProvider } from "styled-components";


const App = () => {
  return (
    <ThemeProvider>
      <Header/>
    </ThemeProvider>
  );
};

export default App;
