fetch("https://jsonplaceholder.typicode.com/users").
    then(response => response.json()).
    then(data => f1(data))

function f1(data) {
    console.log(data)
    console.log(data[0].id)
    console.log(data[0].name)
    console.log(data[0].username)
    console.log(data[0].email)
    console.log(data[0].phone)
    console.log(data[0].website)

    
    let t = document.getElementById('t1');
    for (let i in data){
    row =
        `
    <tr>
    <td>${data[i].id}</td>
    <td>${data[i].name}</td>
    <td>${data[i].username}</td>
    <td>${data[i].email}</td>
    <td>${data[i].phone}</td>
    <td>${data[i].website}</td>
    </tr>`
    
    
    t.innerHTML+=row
    }
}