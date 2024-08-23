import { BrowserRouter } from 'react-router-dom';
import { RouterConfig } from 'application/routes/routerConfig';
import { Menu } from 'presentation/components/Menu';

function App() {
  return (
    <BrowserRouter>
      <RouterConfig />
      <Menu />
    </BrowserRouter>
  );
}

export default App
