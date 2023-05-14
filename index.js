// Add your code here


function submitData(name, email) {
  const url = 'http://localhost:3000/users';
  const data = { name: name, email: email };

  return fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    },
    body: JSON.stringify(data)
  })
  .then(response => response.json())
  .then(data => {
    const id = data.id;
    document.body.append(id);
  })
  .catch(error => {
    console.log(error.message);
    document.body.append(error.message);
  });
}
