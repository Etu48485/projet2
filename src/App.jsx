Page principale avec la liste des noms de parkings :
jsx
Copy code
// ParkingListPage.js
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'; // Assurez-vous d'avoir react-router-dom installé

const ParkingListPage = () => {
  const [parkingList, setParkingList] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://data.namur.be/api/explore/v2.1/catalog/datasets/namur-mobilite-parking/records?limit=30');
        const data = await response.json();
        setParkingList(data);
      } catch (error) {
        console.error('Erreur lors de la récupération de la liste des parkings : ', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>Liste des parkings</h1>
      <ul>
        {parkingList.map((parking) => (
          <li key={parking.id}>
            <Link to={`/parking/${parking.id}`}>{parking.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ParkingListPage;


/*
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
	element:<SecondPage/>
	}

])

return (
	<>
		<RouterProvider router={router}/>
	</>
   )
  }

export default App

*/