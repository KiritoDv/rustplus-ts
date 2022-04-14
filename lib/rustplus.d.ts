/// <reference types="node" />
import EventEmitter from 'events';
export default class RustPlus extends EventEmitter {
    /**
     * @param server The ip address or hostname of the Rust Server
     * @param port The port of the Rust Server (app.port in server.cfg)
     * @param playerId SteamId of the Player
     * @param playerToken Player Token from Server Pairing
     * @param useFacepunchProxy True to use secure websocket via Facepunch's proxy, or false to directly connect to Rust Server
     *
     * Events emitted by the RustPlus class instance
     * - connecting: When we are connecting to the Rust Server.
     * - connected: When we are connected to the Rust Server.
     * - message: When an AppMessage has been received from the Rust Server.
     * - request: When an AppRequest has been sent to the Rust Server.
     * - disconnected: When we are disconnected from the Rust Server.
     * - error: When something goes wrong.
    */
    server: string;
    port: string;
    playerId: string;
    playerToken: string;
    useFacepunchProxy: boolean;
    seq: number;
    seqCallbacks: any[];
    AppRequest: any;
    AppMessage: any;
    websocket: any;
    constructor(server: string, port: string, playerId: string, playerToken: string, useFacepunchProxy?: boolean);
    /**
     * This sets everything up and then connects to the Rust Server via WebSocket.
     */
    connect(): void;
    /**
     * Disconnect from the Rust Server.
     */
    disconnect(): void;
    /**
     * Send a Request to the Rust Server with an optional callback when a Response is received.
     * @param data this should contain valid data for the AppRequest packet in the rustplus.proto schema file
     * @param callback
     */
    sendRequest(data: any, callback: any): void;
    /**
     * Send a Request to the Rust Server and return a Promise
     * @param data this should contain valid data for the AppRequest packet defined in the rustplus.proto schema file
     * @param timeoutMilliseconds milliseconds before the promise will be rejected. Defaults to 10 seconds.
     */
    sendRequestAsync(data: any, timeoutMilliseconds?: number): Promise<unknown>;
    /**
     * Send a Request to the Rust Server to set the Entity Value.
     * @param entityId the entity id to set the value for
     * @param value the value to set on the entity
     * @param callback
     */
    setEntityValue(entityId: number, value: any, callback?: any): void;
    /**
     * Turn a Smart Switch On
     * @param entityId the entity id of the smart switch to turn on
     * @param callback
     */
    turnSmartSwitchOn(entityId: number, callback: any): void;
    /**
     * Turn a Smart Switch Off
     * @param entityId the entity id of the smart switch to turn off
     * @param callback
     */
    turnSmartSwitchOff(entityId: number, callback: any): void;
    /**
     * Quickly turn on and off a Smart Switch as if it were a Strobe Light.
     * You will get rate limited by the Rust Server after a short period.
     * It was interesting to watch in game though 😝
     */
    strobe(entityId: number, timeoutMilliseconds?: number, value?: boolean): void;
    /**
     * Send a message to Team Chat
     * @param message the message to send to team chat
     * @param callback
     */
    sendTeamMessage(message: any, callback: any): void;
    /**
     * Get info for an Entity
     * @param entityId the id of the entity to get info of
     * @param callback
     */
    getEntityInfo(entityId: number, callback: any): void;
    /**
     * Get the Map
     */
    getMap(callback: any): void;
    /**
     * Get the ingame time
    */
    getTime(callback: any): void;
    /**
     * Get all map markers
     */
    getMapMarkers(callback: any): void;
    /**
     * Get the server info
     */
    getInfo(callback: any): void;
    /**
     * Get team info
     */
    getTeamInfo(callback: any): void;
    /**
     * Get CCTV Camera frame
     * @param identifier CCTV Camera Identifier, such as OILRIG1 (or custom name)
     * @param frame integer that should be incremented for each frame request. Otherwise a cached frame is returned
     * @param callback
     */
    getCameraFrame(identifier: string, frame: number, callback: any): void;
}
