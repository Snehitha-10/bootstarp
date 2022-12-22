fetch("https://api.openweathermap.org/data/2.5/weather?lat=21&lon=50&appid=9b658b6d96ad53bdd216ecb2efd8a4b2").
then(response=>response.json()).
then(data=>f1(data))

function f1(data){
    console.log(data)
    console.log(data.sys.sunrise)
    console.log(data.main.humidity)
    console.log(data.main.pressure)
    console.log(data.weather[0].main)

  //  let tab_data=document.getElementsByClassName("table")
   let t1=document.getElementById('t1');
  row=`
  <tr><td class="col">weather</td> <td class="col">data</td> </tr>
  <tr><td>sunrise</td> <td>${data.sys.sunrise}</td></tr>
<tr><td>humidity</td> <td>${data.main.humidity}</td> </tr>
<tr><td >pressure</td> <td >${data.main.pressure}</td> </tr>
<tr><td>weather</td><td>${data.weather[0].main}</td> </tr>`
t1.innerHTML+=row

console.log(t1.innerHTML)

}
{/* <th>   <td class="row">weather</td> <td class="col">data</td> </th> */}