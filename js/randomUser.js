const loadUser = () => {
  const URL = "https://randomuser.me/api";
  fetch(URL)
    .then((res) => res.json())
    .then((data) => showUser(data));
};
const showUser = (users) => {
  console.log(users);
  console.log(users.results[0].gender);
  const randomUserContainer = document.getElementById("random-user-container");
  randomUserContainer.innerHTML = `
  <h4> Name: ${
    users.results[0].name.title +
    ". " +
    users.results[0].name.first +
    " " +
    users.results[0].name.last
  } </h4>
  <h4> Gender: ${users.results[0].gender} </h4>
  <h4> Country: ${users.results[0].location.country} </h4>
  <h4> Email: ${users.results[0].email} </h4>
  <h4> Phone: ${users.results[0].phone} </h4>
  <img src="${users.results[0].picture.large}" alt="">
  `;
};


loadUser();
