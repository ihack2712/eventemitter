// Imports
import EventEmitter from "../mod.ts";

const delay = (ms: number) => new Promise<true>(resolve => setTimeout(() => resolve(true), ms));

const events = new EventEmitter<{
	event_1 (a: number, b: number, c: number): any
	event_2 (): any
	event_3 (a: boolean): any
}>();

events.on("event_2", async () => console.log("1"));
events.on("event_2", async () => await delay(1000) && console.log("2"));
events.on("event_2", async () => console.log("3"));

events.emitSync("event_2");
