export default class Socket {
    connectWebSocket(address) {
        console.log('Connecting to ', address);
        this.ws = new WebSocket(address);
    
        this.ws.onopen = function() {
          console.log('websocket connected');
        };

        this.ws.onerror = (error) => {
          // console.log('Fout: ', error);
        }

        this.ws.onclose = (message) => {
          // console.log('close ' , message)
        }
    
        this.ws.onmessage = this.handleMessage;
      }
}