import React, { useState, useEffect } from 'react';
import { Layout, List, Card, Space } from 'antd';
import axios from 'axios';

const { Content } = Layout;

const App = () => {
  const [parkings, setParking] = useState([]);

  useEffect(() => {
    getParkingData();
  }, []);

  const getParkingData = () => {
    axios
      .get(
        'https://data.namur.be/api/explore/v2.1/catalog/datasets/namur-mobilite-parking/records?limit=30'
      )
      .then((response) => {
        setParking(response.data.results);
      })
      .catch((error) => {
        console.error('Error fetching parking data:', error);
      });
  };

  return (
    <Layout>
      <Content style={{ padding: '0 50px' }}>
        <Space direction="vertical" size={16} style={{ width: '100%' }}>
          {parkings.map((parking, index) => (
            <Card
              key={index}
              title={parking.plsy_descri}
              extra={<a href="#">More</a>}
              style={{ width: '100%' }}
            >
              <p>Places: {parking.places}</p>
              <p>Fonction: {parking.plsy_fonction}</p>
            </Card>
          ))}
        </Space>
      </Content>
    </Layout>
  );
};

export default App;

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