import { Client } from 'discord.js';
import EventEmitter from 'events';

export class DiscordStat extends EventEmitter {
	private readonly client: Client;
	private readonly key: string;
	private sharding: boolean;

	constructor({ client, key }: { client: Client; key: string; }) {
		super();

		this.client = client;
		this.key = key;

		if (this.client.shard) {
			this.sharding = true;

			throw new Error("Use ShardingClient instead.");
		} else {
			this.sharding = false;
		}
	}
}