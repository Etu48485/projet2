import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import Root from './pages/Root';
import FirstPage from './pages/Firstpage';
import SecondPage from './pages/SecondPage';

function App() {

	const router = createBrowserRouter([
	{
		path: '/',
		element:<Root/>,
		children:[
	{
		path: 'first',
		element:<FirstPage/>
	}
   ]
  },
  {
	path:'second',
	element:<secondPage/>
	}

])

return (
	<>
		<RouterProvider router={router}/>
	</>
   )
  }

export default App