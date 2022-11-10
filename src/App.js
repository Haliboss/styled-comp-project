import Header from "./components/Header";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./components/styles/Global.styled";
import Card from "./components/Card";
import data from './data';

const style = {
  colors: {
    header: "#fff",
    body: "#fff",
    footer: "#8a1c4a",
  },
  margins: {},
  responsive: '768px',
};

const App = () => {
  return (
    <ThemeProvider theme={style}>
      <GlobalStyles/>
      <Header />
      <Card data={data}/>
    </ThemeProvider>
  );
};

export default App;
