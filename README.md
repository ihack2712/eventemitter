# EventEmitter

A typed-event emitter.

See [examples](./examples).

```ts
const events = new EventEmitter<{
	event_1 (a: number, b: number, c: number): any
	event_2 (): any
	event_3 (a: boolean): any
}>();

// This will not compile:
events.on("event_4", () => console.log("Never"))

// This will compile:
events.on("event_2", async () => console.log("Async listeners are also supported!"));
events.on("event_2", async () => console.log("And when used in combination with `<EventEmitter>.queue()` or `await <EventEmitter>.emit()`"));
events.on("event_2", async () => console.log(" they will also execute in order. Use `<EventEmitter>.emitSync()` to not wait for each listener."));
events.on("event_2", async () => console.log(""));
events.on("event_2", async () => console.log("Here's the proof:"));
events.on("event_2", async () => console.log("1"));
events.on("event_2", async () => await delay(1000) && console.log("2"));
events.on("event_2", async () => console.log("3"));

await events.emit("event_2");
```

Works without typings too!

```ts
const events = new EventEmitter();

events.on("test", (a, b, c) => {
	console.log(a, b c);
});

await events.emit("test", 1, 2, 3);

events.emitSync("test", 3, 2, 1);
```
