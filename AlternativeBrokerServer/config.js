exports.development = {
  port: 8011,
  settlementTimePercentage: .50,
  systemIp: 'http://localhost:8000/brokers',
  brokerFeePercent: .1
};

exports.production = {
  port: process.env.PORT
};


