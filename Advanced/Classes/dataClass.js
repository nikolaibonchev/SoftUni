class Request {
    constructor(method, uri, ver, msg){
        this.method = method;
        this.uri = uri;
        this.ver = ver;
        this.msg = msg;
        this.response = undefined;
        this.fulfilled = false;
    }
}

let myData = new Request('GET', 'http://google.com', 'HTTP/1.1', '')
console.log(myData);