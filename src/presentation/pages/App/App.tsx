import { BrowserRouter } from 'react-router-dom';
import { RouterConfig } from 'application/routes/routerConfig';
import { Menu } from 'presentation/components/Menu';
import ScrollToTop from 'presentation/components/ScrollToTop';

function App() {

  return (
    <BrowserRouter>
      <ScrollToTop />
      <RouterConfig />
      <Menu />
    </BrowserRouter>
  );
}

export default App
