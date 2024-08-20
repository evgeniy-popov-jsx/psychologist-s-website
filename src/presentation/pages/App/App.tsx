import { BrowserRouter } from 'react-router-dom';
import { RouterConfig } from 'application/routes/routerConfig';

function App() {
  return (
    <BrowserRouter>
      <RouterConfig />
    </BrowserRouter>
  );
}

export default App
