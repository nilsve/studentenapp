export default class Socket {
  connectWebSocket(address, onConnected, onDisconnected, onMessage) {
    console.log('Connecting to ', address);
    this.ws = new WebSocket(address);

    this.ws.onopen = onConnected;
    this.ws.onerror = onDisconnected;
    this.ws.onclose = onDisconnected;

    this.ws.onmessage = onMessage;
  }

  sendMessage(message) {
    // TODO: Validatie oid
    this.ws.send(message);
  }
}