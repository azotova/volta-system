module.exports = {
  port: 9001,
  socketioPort: 9010,
  rootDir: '/Users/anastasiazotova/hr/volta',
  nodes: [
    {
      name: 'consumer',
      dir: '/volta-consumer/servers',
      args: ['consumerServer.js']
    },
    {
      name: 'consumerProducer',
      dir: '/volta-consumer/producer-server',
      args: ['server.js']
    },
    {
      name: 'consumerClient',
      dir: '/volta-consumer/consumer-server',
      args: ['server.js']
    },
    {
      name: 'producer',
      dir: '/volta-producer',
      args: ['server.js', 'development']
    },
    {
      name: 'broker',
      dir: '/volta-system/AlternativeBrokerServer',
      args: ['server.js']
    },
    {
      name: 'system',
      dir: '/volta-system/SystemServer',
      args: ['server.js']
    }
  ]
}
