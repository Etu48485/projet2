// ParkingDetailPage.js
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom'; // Assurez-vous d'avoir react-router-dom installé

const ParkingDetailPage = () => {
  const { parkingId } = useParams();
  const [parkingData, setParkingData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`URL_DE_VOTRE_API/parkings/${parkingId}`);
        const data = await response.json();
        setParkingData(data);
      } catch (error) {
        console.error('Erreur lors de la récupération des données du parking : ', error);
      }
    };

    fetchData();
  }, [parkingId]);

  return (
    <div>
      {parkingData ? (
        <div>
          <h2>{parkingData.name}</h2>
          <p>Places disponibles : {parkingData.availableSpaces}</p>
          {/* Ajoutez d'autres informations du parking selon vos besoins */}
        </div>
      ) : (
        <p>Chargement des données du parking...</p>
      )}
    </div>
  );
};

export default ParkingDetailPage;