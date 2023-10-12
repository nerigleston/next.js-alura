module.exports = {
  trailingSplash: true,
  async redirects(){
    return[
      {
        source: '/perguntas',
        destination: '/faq/',
        permanent: true,
      }
    ]
  }
}