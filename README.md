#isMyMAC

## 為什麼有這東西？
在攻佔立法院的時候，幫忙建網路白名單但又不想一台台機器手動去查 IP & MAC ADDRESS

## 它能幹麻？
在區域網路下，可以用網頁查自己的 IP & MAC ADDRESS

## 安裝
* 首先，先安裝 nodejs
    - **ubuntu:** `sudo apt-get install nodejs`
    - **openSUSE:** `sudo zypper in nodejs`
* `git clone https://github.com/rsghost/isMyMAC`
* `cd ./isMyMAC`
* `npm install -l`
* `vi config.json`
```javascript
{
    "port": "3000",
    "command": "arp -a"
    // ubuntu: arp -a
    // openSUSE: /sbin/arp -a
}
```

## 使用
* `node app.js`
* 在區域網路環境底下，連上 `http://serverIP:3000` 就可以查到自己的 IP & MAC ADDRESS


# English version

## Why this thing exists?
This is mmainly for establishing a network white-list without the necessity of manual checking each of the machine’s IP & MAC ADDRESS during the period of #congressoccupied

## What can this thing do?
It can be used for checking your IP & MAC Address through a webpage under LAN.

## Install
* First, install nodejs
    - **ubuntu:** `sudo apt-get install nodejs`
    - **openSUSE:** `sudo zypper in nodejs`
* `git clone https://github.com/rsghost/isMyMAC`
* `cd ./isMyMAC`
* `npm install -l`
* `vi config.json`
```javascript
{
    "port": "3000",
    "command": "arp -a"
    // ubuntu: arp -a
    // openSUSE: /sbin/arp -a
}
```

## Usage
* `node app.js`
* Under LAN, you can check their IP & MAC ADDRESS by connecting to `http://serverIP:3000`
