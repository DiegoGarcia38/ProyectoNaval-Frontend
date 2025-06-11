// src/lib/hooks/useVessel.js
'use client';

import { useState, useEffect } from 'react';
import ApiService from '../api';

export const useVessel = (tugId) => {
  const [vessel, setVessel] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchVessel = async () => {
      try {
        setLoading(true);
        const data = await ApiService.getVessel(tugId);
        setVessel(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    if (tugId) {
      fetchVessel();
    }
  }, [tugId]);

  return { vessel, loading, error };
};

export const useVesselSection = (tugId, section) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        let result;

        switch (section) {
          case 'key-figures':
            result = await ApiService.getVesselKeyFigures(tugId);
            break;
          case 'dimensions':
            result = await ApiService.getVesselDimensions(tugId);
            break;
          case 'performances':
            result = await ApiService.getVesselPerformances(tugId);
            break;
          case 'capacities':
            result = await ApiService.getVesselCapacities(tugId);
            break;
          case 'comparisons':
            result = await ApiService.getVesselComparisons(tugId);
            break;
          case 'news':
            result = await ApiService.getVesselNews(tugId);
            break;
          case 'images':
            result = await ApiService.getVesselImages(tugId);
            break;
          default:
            throw new Error(`Unknown section: ${section}`);
        }

        setData(result);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    if (tugId && section) {
      fetchData();
    }
  }, [tugId, section]);

  return { data, loading, error };
};
