const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8080';

class ApiService {
  constructor() {
    this.baseURL = `${API_BASE_URL}/api`;
  }

  async request(endpoint, options = {}) {
    const url = `${this.baseURL}${endpoint}`;

    const config = {
      headers: {
        'Content-Type': 'application/json',
        ...options.headers,
      },
      ...options,
    };

    try {
      const response = await fetch(url, config);

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      return await response.json();
    } catch (error) {
      console.error('API request failed:', error);
      throw error;
    }
  }

  // Métodos específicos para vessels
  async getVessel(tugId) {
    return this.request(`/vessels/tugs/${tugId}`);
  }

  async getAsdTug3212() {
    return this.request('/vessels/tugs/asd-tug-3212');
  }

  async getVesselKeyFigures(tugId) {
    return this.request(`/vessels/tugs/${tugId}/key-figures`);
  }

  async getVesselDimensions(tugId) {
    return this.request(`/vessels/tugs/${tugId}/dimensions`);
  }

  async getVesselPerformances(tugId) {
    return this.request(`/vessels/tugs/${tugId}/performances`);
  }

  async getVesselCapacities(tugId) {
    return this.request(`/vessels/tugs/${tugId}/capacities`);
  }

  async getVesselComparisons(tugId) {
    return this.request(`/vessels/tugs/${tugId}/comparisons`);
  }

  async getVesselNews(tugId) {
    return this.request(`/vessels/tugs/${tugId}/news`);
  }

  async getVesselImages(tugId) {
    return this.request(`/vessels/tugs/${tugId}/images`);
  }

  async healthCheck() {
    return this.request('/vessels/tugs/health');
  }
}

export default new ApiService();
