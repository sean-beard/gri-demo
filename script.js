const handleContactFormSubmit = (e) => {
  e.preventDefault();

  const firstName = document.getElementById("firstName").value;
  const lastName = document.getElementById("lastName").value;

  console.log(firstName + " " + lastName);
};

(() => {
  const formElement = document.querySelector("form");
  formElement.addEventListener("submit", handleContactFormSubmit);
})();
