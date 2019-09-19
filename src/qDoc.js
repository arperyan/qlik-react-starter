const enigma = require('enigma.js');
const schemas = require('enigma.js/schemas/12.20.0.json');
// const SenseUtilities = require('enigma.js/sense-utilities');

const config = {
  schema: schemas,
  host: 'localhost',
  prefix: '',
  port: '4848',
  url: 'ws://localhost:4848/app/Cars.qvf',
  rejectUnauthorized: false,
  appId: 'Cars.qvf',
};

async function qDocAsync() {
  // const url = SenseUtilities.buildUrl(config);
  const session = enigma.create(config);
  const global = await session.open();
  const qDoc = await global.openDoc(config.appId);
  return qDoc;
}

const qDocPromise = qDocAsync();

export default qDocPromise;
