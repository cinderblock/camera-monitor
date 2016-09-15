# camera-monitor
A web interface for monitoring multiple network cameras

## Installation

Clone git repo and run `npm install`:

```
git clone git+https://github.com/cinderblock/camera-monitor.git
npm install
```

`npm install` will also run webpack and generate a folder `webpack` to serve static files from.

## Run Server

Using npm to start the server ensures that configuration options are loaded.

```
npm run main
```

## Development Server

```
npm run dev-server -- --open # --open to automatically open browser
```

## Configuration

Can be configured to run on ports other than 9000 with `npm config set ...`

```
# Change default port
npm config set camera-monitor:port 9001

# Set address to bind to
npm config set camera-monitor:hostname 127.0.0.1
```

It is also possible to use a unix socket instead:
```
npm config set camera-monitor:socket /path/to/file.sock
```

If using a unix socket, you can specify a mode sting to pass to chmod to set correct file permissions on the created socket.

```
npm config set camera-monitor:socketmode 666
```
