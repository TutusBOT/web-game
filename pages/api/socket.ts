import { Server } from "socket.io";

export default function SocketHandler(req: any, res: any) {
	if (res.socket.server.io) {
		console.log("Socket is already running");
	} else {
		console.log("Socket is initializing");
		const io = new Server(res.socket.server, {
			path: "/api/socket_io",
			addTrailingSlash: false,
		});
		res.socket.server.io = io;

		io.on("connection", (socket) => {
			console.log("client connected", socket.id);
			socket.on("test", (msg: string) => {
				console.log("Msg: ", msg);
			});
		});
	}
	res.end();
}
