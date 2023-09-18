
submitBtn.addEventListener("click", async (event) => {
    event.preventDefault()

    console.log("clicked")

    resultContainer.innerHTML= `<img src="img/loading.svg" width="150"/>`

    let key = "ema_live_QUqHdm9mShaqtUvlj3ngIzquXw5SHlDg8wIpjWex"

    let email = document.getElementById("email").value

    let url = `https://api.emailvalidation.io/v1/info?apikey=${key}&email=${email}`

    let res = await fetch(url)
    let result = await res.json()

    let str = ""
    for (key of Object.keys(result)) {

        if (result[key] !== "" && result[key] !== " ") {

            str = str + `<div>${key}:${result[key]}</div>`
        }

    }

    resultContainer.innerHTML = str

})

