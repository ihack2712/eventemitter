// Imports
import EventEmitter from "../mod.ts";

const delay = (ms: number) => new Promise<true>(resolve => setTimeout(() => resolve(true), ms));

const events = new EventEmitter<{
	1 (): any
	2 (): any
}>();

events.on(1, async () => console.log("1.1"));
events.on(1, async () => await delay(1000) && console.log("1.2"));
events.on(1, async () => console.log("1.3"));

events.on(2, async () => console.log("2.1"));
events.on(2, async () => await delay(10) && console.log("2.2"));
events.on(2, async () => console.log("2.3"));

events.queue(1);
events.queue(2);
