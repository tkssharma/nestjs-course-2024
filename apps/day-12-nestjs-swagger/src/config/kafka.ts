export default () => ({
  kafka: {
    broker: process.env.KAFKA_BROKER,
    topic: process.env.KAFKA_TOPIC || '',
  },
});
