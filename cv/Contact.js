const form = document.querySelector("Formulaire")

const nameInput = document.querySelector("#name")

const telinput = document.querySelector("#name2")

const successMessage = document.querySelector("#success-message")


form.addEventListener("submit", function(event) {
    event.preventDefault()

    if (nameInput.value === "") {

        nameError.classList.remove("hidden")
    }

else {
    nameError.classList.add("hidden")

    console.log("name:", nameInput.value)


    successMessage.classList.remove("hidden")

    form.reset()
}})

form.addEventListener("submit", function(event) {
    event.preventDefault()

    if (telinput.value === "") {

        nameError.classList.remove("hidden")
    }

else {
    nameError.classList.add("hidden")

    console.log("name2:", telinput.value)


    successMessage.classList.remove("hidden")

    form.reset()
}})