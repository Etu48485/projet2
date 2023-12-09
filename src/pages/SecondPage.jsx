import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Card, Layout } from 'antd';
import axios from 'axios';

const { Content } = Layout;

const SecondPage = () => {
  const { id } = useParams();
  const [parkingDetails, setParkingDetails] = useState(null);

  useEffect(() => {
    getParkingDetails();
  }, [id]);

  const getParkingDetails = () => {
    axios
      .get(`URL_DE_L_API_DU_PARKING_AVEC_L_ID/${id}`) // Remplacez URL_DE_L_API_DU_PARKING_AVEC_L_ID par votre URL API réelle
      .then((response) => {
        setParkingDetails(response.data);
      })
      .catch((error) => {
        console.error('Error fetching parking details:', error);
      });
  };

  return (
    <Layout>
      <Content style={{ padding: '50px' }}>
        {parkingDetails && (
          <Card title={parkingDetails.plsy_descri} style={{ width: '100%' }}>
            <p>Places: {parkingDetails.places}</p>
            <p>Fonction: {parkingDetails.plsy_fonction}</p>
            {/* Affichez d'autres détails du parking ici */}
          </Card>
        )}
      </Content>
    </Layout>
  );
};

export default SecondPage;
