"use client";

import { io } from "socket.io-client";

const page = () => {
	const socketInitializer = async () => {
		await fetch("http://localhost:3000/api/socket");
	};
	socketInitializer();
	// @ts-expect-error next 13 bug with socket io, without this params socket.io gets stuck on "pending"
	let socket = io(undefined, { path: "/api/socket_io" });
	socket.on("connect", () => {
		console.log("test");
	});
	return <button>Test</button>;
};
export default page;
