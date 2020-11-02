# nodejs-download-upload-server
Node.JS simple server to upload and download files

## 1. Running in terminal

### 1.1 Pre-requisit
**Nothing** No NPM Module dependency, as it is written using pure Node.JS API. Only nodejs should be installed.


### 1.2 How to get the project
Just download zip folder or clone the repo using git command on your system.

### 1.3 Start server with default port 3000
```
node server.js
```

### 1.4 Start server with specific port 4200
```
node server.js 4200
```

### 1.5 Open in browser, show download/upload UI
```
e.g http://localhost:3000
```

## 2. Running in docker

### 2.1 Build docker image

```
docker build -t fileserver:1.1 .
```

### 2.2 Run by docker container

Execute command in terminal:

```
docker run  -d -v $PWD/file-server:/app/download -p 3000:3000 --restart=always fileserver:1.1
```

or

Execute shell script:
```
chmod +x docker-run.sh
./docker-run.sh
```

Ps: The files will be stored in `$PWD/file-server` in your local disk.

### 2.3 Open in browser, show download/upload UI
```
e.g http://localhost:3000
```