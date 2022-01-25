const contactme = document.getElementById("contact-me-form");
const output=document.getElementById("output");
const loader=document.getElementById("loading");
contactme.addEventListener("submit", function (e) {
  e.preventDefault();
  const name = document.getElementById("name");
  const email = document.getElementById("email");
  const message = document.getElementById("message");
  fetch("https://resources.jaysoftworks.ae/contact", {
    method: "post",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify({
      name: name.value,
      id: 2,
      email: email.value,
      message: message.value,
    }),
  })
    .then(function (response) {
      return response.json();
      displayLoading();

    })
    .then(function (text) {
    hideLoading();
    output.innerText=text.message;
    name.value="";
    email.value="";
    message.value="";
    })
    .catch(function (error) {
      console.error(error);
    });
});
function displayLoading(){
  loader.classList.add("display");
  setTimeout(()=>{
    loader.classList.add("display");
  },500
  );
}

function hideLoading(){
  loader.classList.remove("display");
}

