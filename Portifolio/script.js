const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.querySelector(".email");

email.addEventListener("invalid", function (e) {
  console.log("qualquer coisa");
  console.log(e);
  e.preventDefault();
  document.querySelector(".mensagem_erro").classList.add("active");
  setTimeout(function () {
    document.querySelector(".mensagem_erro").classList.remove("active");
  }, 2000);
});
