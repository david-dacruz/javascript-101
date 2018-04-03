// get customer event listener
document.getElementById('button1').addEventListener('click', loadCustomer);
document.getElementById('button2').addEventListener('click', loadCustomers);

function loadCustomers(e){
  
  const xhr = new XMLHttpRequest;
  
  xhr.open('GET', 'customers.json', true);

  xhr.onload = function () {
    if(this.status === 200){
      const customers = JSON.parse(this.responseText);
      
      let output = '';

      customers.forEach(customer => {
         output += `
                    <ul>
                      <li>${customer.id}</li>
                      <li>${customer.name}</li>
                      <li>${customer.phone}</li>
                      <li>${customer.company}</li>
                    </ul>
                  `;
      });

      document.getElementById('customers').innerHTML = output;

    }
  }

  xhr.send();
}
function loadCustomer(e){
  // instantiate object 
  const xhr = new XMLHttpRequest();
  
  // open
  xhr.open('GET', 'customer.json', true);

  xhr.onload = function(){
    if(this.status === 200) {
      //console.log(this.responseText);
      const customer = JSON.parse(this.responseText);

      const output = `
        <ul>
          <li>${customer.id}</li>
          <li>${customer.name}</li>
          <li>${customer.phone}</li>
          <li>${customer.company}</li>
        </ul>
      `;
      document.getElementById('customer').innerHTML = output;
    }
  }

  xhr.send();
}
