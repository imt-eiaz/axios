//Get Request by Axios();
function getTodos() {
  //   axios({
  //     method: "get",
  //     url: "https://jsonplaceholder.typicode.com/photos",
  //     params: {
  //       _limit: 5,
  //     },
  //   })
  //     .then((res) => showOutput(res))
  //     .catch((err) => console.log(err));

  axios({
    method: "get",
    url: "https://jsonplaceholder.typicode.com/photos",
    params: {
      _limit: 5,
    },
  })
    .then((res) => showOutput(res))
    .catch((err) => console.log(err));
}

//Showoutput in browser
function showOutput(res) {
  document.getElementById("res").innerHTML = ` 
  <div class="card mt-3">
    <div class="card-header">
      Data
    </div>
    <div class="card-body">
      <pre>${JSON.stringify(res.data, null, 2)}</pre>
      
    </div>
  </div>`;
}

// Event listeners
document.getElementById("get").addEventListener("click", getTodos);
