import { useRoutes } from 'react-router'; 
import routes from './routes'; 


function App() {
  const element = useRoutes(routes); 
  return (
    <div className="App">
      {element}
    </div>
  );
}

export default App;
