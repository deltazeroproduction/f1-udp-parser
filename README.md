# F1 UDP Parser

The F1 series of games support the outputting of key game data via a UDP data stream. This data can be interpreted by external apps or connected peripherals for a range of different uses, including providing additional telemetry information, customised HUD displays, motion platform hardware support or providing force feedback data for custom steering wheels.

This is a TypeScript UDP client and telemetry parser for EA - Codemaster's F1 2022, F1 23, and F1 24.

## Installing

```
$ npm install @deltazeroproduction/f1-udp-parser
```

or

```
$ yarn add @deltazeroproduction/f1-udp-parser
```

## Running the parser

```
$ npm run start
```

or

```
$ yarn start
```

## Usage

```
import { F1TelemetryClient, constants } from "f1-telemetry-client";
// or: const { F1TelemetryClient, constants } = require('f1-telemetry-client');
const { PACKETS } = constants;

/*
*   'port' is optional, defaults to 20777
*   'forwardAddresses' is optional, it's an array of Address objects to forward unparsed telemetry to. each address object is comprised of a port and an optional ip address
*                   defaults to undefined
*   'skipParsing' is optional, setting it to true will make the client not parse and emit content. You can consume telemetry data using forwardAddresses instead.
*                   defaults to false
*/
const client = new F1TelemetryClient({ port: 20777 });
client.on(PACKETS.event, console.log);
client.on(PACKETS.motion, console.log);
client.on(PACKETS.carSetups, console.log);
client.on(PACKETS.lapData, console.log);
client.on(PACKETS.session, console.log);
client.on(PACKETS.participants, console.log);
client.on(PACKETS.carTelemetry, console.log);
client.on(PACKETS.carStatus, console.log);
client.on(PACKETS.finalClassification, console.log);
client.on(PACKETS.lobbyInfo, console.log);
client.on(PACKETS.carDamage, console.log);
client.on(PACKETS.sessionHistory, console.log);
client.on(PACKETS.tyreSets, console.log); // F1 23 and 24 only
client.on(PACKETS.motionEx, console.log); // F1 23 and 24 only
client.on(PACKETS.timeTrial, console.log); // F1 24 only

// to start listening:
client.start();

// and when you want to stop:
client.stop();
```

## Documentation

The following links contain information that summarises the UDP data structures so that developers of supporting hardware or software are able to configure these to work correctly with the F1 game.

[F1 2022 UDP Spec](https://answers.ea.com/t5/General-Discussion/F1-22-UDP-Specification/td-p/11551274)

[F1 23 UDP Spec](https://answers.ea.com/t5/General-Discussion/F1-23-UDP-Specification/m-p/12633159)

[F1 24 UDP Spec](https://answers.ea.com/t5/General-Discussion/F1-24-UDP-Specification/m-p/13745220)

## License

Licensed under the MIT License.
