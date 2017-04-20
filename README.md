# isMyMAC
this is mainly for establishing a network white-list without the necessity of manual checking each of the machine’s IP & MAC ADDRESS during the period of #congressoccupied

## Usage
* `node app.js [port] [arp command]`
  * `[port]` default: `3000`
  * `[arp command]` default: `arp -a`
* under LAN, you can check their IP & MAC ADDRESS by connecting to `http://[server ip]:[port]`
