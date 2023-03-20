import net from 'net';
import Web3 from 'web3';

const endpoints = {
  //aurora: 'wss://mainnet.aurora.dev',
  //metis: 'wss://andromeda-ws.metis.io',
  binance: 'ws://alexey:7rVAta4DkQtyuneJWE4spPhhDhXHA8GI@geth.kulikov.fi:80/ws',
  //moonriver: 'wss://moonbeam.unitedbloc.com:3001',
  //boba: 'wss://ws.mainnet.boba.network',
};
const web3 = new Web3(new Web3.providers.WebsocketProvider(endpoints.metis));

// console.log(`Block: ${await web3.eth.getBlockNumber()}`);

const SYNC_EVENT_TOPIC =
  '0x1c411e9a96e071241c2f21f7726b17ae89e3cab4c78be50e062b03a9fffbbad1';
const HERMES_SYNC_EVENT_TOPIC =
  '0xcf2aa50876cdfbb541206f89af0ee78d44a2abf8d328e37fa4917f982149848a';

const txCache = {};

const onEventLog = (type) => (log) => {
  const t1 = new Date().getTime();

  if (!txCache[log.transactionHash]) {
    txCache[log.transactionHash] = true;

    web3.eth.getTransactionReceipt(log.transactionHash).then((receipt) => {
      const t2 = new Date().getTime();
      console.log(
        `[${new Date().toISOString()}] [${type}] Time to get receipt: ` +
          (t2 - t1) +
          `ms | tx: ${log.transactionHash}`
      );
    });
  }
};

const subscribeToLogs = (topic, handler) => {
  console.log('subscribing to', topic);
  return web3.eth
    .subscribe('logs', {
      topics: [topic],
    })
    .on('connected', (subscriptionId) => {
      console.log('connected', subscriptionId);
    })
    .on('data', handler);
};
