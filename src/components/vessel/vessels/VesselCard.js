
// /app/components/vessel/vessels/VesselCard.js
'use client';
import { useState, useEffect } from 'react';

export default function VesselCard({ tugId }) {
  const [vesselData, setVesselData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchVesselData() {
      try {
        setLoading(true);
        const apiUrl = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8080';
        const endpoint = `/api/vessels/tugs/${tugId === 'asd-tug-3212' ? 'asd-tug-3212' : tugId}`;
        
        console.log('Attempting to fetch from:', apiUrl + endpoint);
        
        const response = await fetch(apiUrl + endpoint);
        
        console.log('Response status:', response.status);
        
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        console.log('Data received:', data);
        setVesselData(data);
      } catch (err) {
        console.error('Full error:', err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    if (tugId) {
      fetchVesselData();
    }
  }, [tugId]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  if (!vesselData) return <div>No data found</div>;

  return (
    <div>
      <h1>Debug Connection</h1>
      <pre>{JSON.stringify(vesselData, null, 2)}</pre>
    </div>
  );
}