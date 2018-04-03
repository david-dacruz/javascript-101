const outputDiv = document.getElementById('output');
// event listconstener
document.getElementById('button').addEventListener('click',
 loadData);

function loadData(){
  // create xhr object
  const xhr = new XMLHttpRequest();

   // 0	UNSENT	Client has been created. open() not called yet.
  // 1	OPENED	open() has been called.
  // 2	HEADERS_RECEIVED	send() has been called, and headers and status are available.
  // 3	LOADING	Downloading; responseText holds partial data.
  // 4	DONE	The operation is complete.
  console.log('READYSTATE 0 >', xhr.readyState);


  // OPEN first param type of request,
  // url or file we make request to,
  // asychronous boolean
  xhr.open('GET', 'data.txt', true);

  console.log('READYSTATE 1 >', xhr.readyState);

    // optional - used for spinners
    xhr.onprogress = function(){
      console.log('Load spinner on READYSTATE 3 >', xhr.readyState);
    }

  // xhr.onreadystatechange = function(){
  //   console.log(`READYSTATE ${xhr.readyState} >`, xhr.readyState);
  //   if(this.status === 200 && this.readyState === 4){
  //       console.log(this.responseText);
  //     }
  //   }

        xhr.onload = function(){
        // make sur status is 200 
        if(this.status === 200){
          document.getElementById('output').innerHTML = `
            <h1>${this.responseText}</h1>
          `;
        }
      }


    // ONLY RUNS ON ERROR
    xhr.onerror = function(){
      console.log('request error show a message...');
    }
  

  xhr.send();
}