// Add your code here


function submitData(userName, email) {
    let formData = {
        name: "Steve",
        email: "steve@steve.com"
    }
    
    let configObj = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify(formData)
      };
    
    return fetch('http://localhost:3000/users', configObj)
    .then(response => response.json())
    .then(users => {
        console.log(users)
        document.body.innerHTML = object["id"]
    })
    
}