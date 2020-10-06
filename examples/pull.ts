// Imports
import EventEmitter from "../mod.ts";

const delay = (ms: number) => new Promise<true>(resolve => setTimeout(() => resolve(true), ms));

const events = new EventEmitter<{
	0 (str: string): any
}>();

setTimeout(() => events.emitSync(0, "Hello World"), 1000);

const [ str ] = await events.pull(0);

console.log(str);
