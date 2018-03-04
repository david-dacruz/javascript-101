const name = 'David';
const age = 29;
const job = 'Web developer';
const city = 'Paris';
let html;



// without template strings
// es5 way
html = '<ul>' +
        '<li>Name: ' + name + '</li>' +
        '<li>Age: ' + age + '</li>' +
        '<li>Job: ' + job + '</li>' +
        '<li>City: ' + city + '</li>' +
        '</ul>';

//document.body.innerHTML = html;

// with template literals
// es6 just do backticks
html = `
<ul>
  <li>Name: ${name}</li>
  <li>Age: ${age}</li>
  <li>Job: ${job}</li>
  <li>City: ${city}</li>
  <li>${2 + 2}</li>
  <li>${yo(name)}</li>
  <li>${age > 30 ? 'Over 30' : 'Under 30 age =>' + age}</li>
</ul>
`

function yo(name)
{
  return 'yo ' + name;
}

document.body.innerHTML = html;
