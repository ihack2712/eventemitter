// Imports
import EventEmitter from "../mod.ts";

const delay = (ms: number) => new Promise<true>(resolve => setTimeout(() => resolve(true), ms));

const events = new EventEmitter<{
	event_1 (): any
	event_2 (): any
}>();

events.on("event_1", async () => console.log("1.1"));
events.on("event_1", async () => await delay(1000) && console.log("1.2"));
events.on("event_1", async () => console.log("1.3"));

events.on("event_2", async () => console.log("2.1"));
events.on("event_2", async () => await delay(10) && console.log("2.2"));
events.on("event_2", async () => console.log("2.3"));

events.queue("event_1");
events.queue("event_2");
