// es5 lib with prototypes

// constructor
function ezHTTP(){
  this.http = new XMLHttpRequest();
}

// make an http GET request
ezHTTP.prototype.get = function (url, callback) {
 
  let self = this;

  this.http.open('GET', url , true);

  this.http.onload = function(){
    if(self.http.status === 200){
      callback(null, self.http.responseText);
    } else {
      callback("Error : " + self.http.status);
    }
  }

  this.http.send();
}

// make an http POST request
ezHTTP.prototype.post = function(url, data, callback){

  let self = this;

  this.http.open('POST', url, true);

  this.http.setRequestHeader('Content-type',
  'application/json');

  this.http.onload = function() {
    callback(null, self.http.responseText);
  }

  this.http.send(JSON.stringify(data));
}

// make an http PUT request
ezHTTP.prototype.put = function(url, data, callback){

  let self = this;

  this.http.open('PUT', url, true);

  this.http.setRequestHeader('Content-type',
  'application/json');

  this.http.onload = function() {
    callback(null, self.http.responseText);
  }

  this.http.send(JSON.stringify(data));
}

// make an http DELETE request
ezHTTP.prototype.delete = function (url, callback) {
 
  let self = this;

  this.http.open('DELETE', url , true);

  this.http.onload = function(){
    if(self.http.status === 200){
      callback(null, "Success : " + self.http.status);
    } else {
      callback("Error : " + self.http.status);
    }
  }

  this.http.send();
}