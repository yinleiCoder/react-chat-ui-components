import logo from './logo.svg';
import './App.css';
import ChatApp from 'components/ChatApp';
import { ThemeProvider } from 'styled-components';
import theme from './theme';
function App() {
  return (
    <ThemeProvider theme={theme}>
      <ChatApp/>
    </ThemeProvider>
  )
}

export default App;
