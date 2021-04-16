const open = document.querySelector("#open")
const close = document.querySelector("#close")
const container = document.querySelector(".container")

openBtn = () => {
  container.classList.add("show-nav")
  //console.log(container)
}

closeBtn = () => {
  container.classList.remove("show-nav")
  //console.log(container)
}

//open.addEventListner("click", () => container.classList.add("show-nav"))

/*close.addEventListner("click", () => {
  container.classList.remove("show-nav")
})
*/
