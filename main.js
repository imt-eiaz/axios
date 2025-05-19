//Get Request by Axios();
function getTodos() {
  axios({
    method: "get",
    url: "https://jsonplaceholder.typicode.com/users",
  })
    .then((res) => showOutput(res))
    .catch((err) => console.log(err));
}

//Showoutput in browser
function showOutput(res) {
  document.getElementById("res").innerHTML = ` 
  <div class="card mt-3">
    <div class="card-header">
      Customer Names
    </div>
    <div class="card-body">
      <ul>
        <li>Name : ${JSON.stringify(res.data[0].name, null, 2)}</li>
        <li>Name : ${JSON.stringify(res.data[1].name, null, 2)}</li>
      </ul>
    </div>
  </div>`;
}

// Event listeners
document.getElementById("get").addEventListener("click", getTodos);
