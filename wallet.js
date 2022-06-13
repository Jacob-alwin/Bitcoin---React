

const bjl = require('bitcoinjs-lib');  
const bip32 = require('bip32');
const axios = require('axios');

const coinselect = require('coinselect');


class Wallet{
	constructor(network){
		this.network = network;
		this.chain=`m`
		this.seed=`000102030405060708090a0b0c0d0e0f`
		this.xpub =`xpub661MyMwAqRbcFtXgS5sYJABqqG9YLmC4Q1Rdap9gSE8NqtwybGhePY2gZ29ESFjqJoCu1Rupje8YtGqsefD265TMg7usUDFdp6W1EGMcet8`
		this.token = "5849c99db61a468db0ab443bab0a9a22";
	}



	address_list(xpub, chain, start, end){

	}

	//this function will generate bitcoin testnet addresses using "xpub" for "chain" index = 0 or 1 from range index "start" to "end". 

	add_wallet (name, addresses){


	}

	//this function will add the "addresses" list on blockcypher database. This list is recognised by the "name" argument.


	add_addresses(name, addresses){

	}

	//this function will add the "addresses" on blockcypher database to an already existing wallet recognised by the "name" argument.



	async fetch_wallet(name){

	}

	//this function will fetch the "addresses" from blockcypher database of an already existing wallet recognised by the "name" argument.




	async fetch_utxo(recieve, change){


	}

	//this function will fetch "UTXOs" using wallet name provided in "receive" and "change" argumnets using blockcypher APIs


	async generate_unsigned_transaction(xpub, output_address, amount){

	}

	//this fucntion will generate unsigned txn using "xpub" to send "amount" to "output_address"


}




let a = new Wallet(bjl.networks.testnet);

a.generate_unsigned_transaction("tpubDCXQSRz1QR71xTm78eE75gXcV4goo6sYG5yRuSVeTfpLbT2P4Aaf4KBgQpHpZ1GhaR6Z4ktazi1hHbzMeJG6htSyiracJYmz1zQReiJmLsN","n3AUMFmYXE9FNgXHWkXZQVkkmxfCF5kbnd", 500);