module.exports = {
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: 'https://proyectonaval-backend.onrender.com/api/:path*'
      }
    ]
  }
}