const panels = document.querySelectorAll(".panel")

const removeActiveClasses = () => {
  panels.forEach((panel) => {
    panel.classList.remove("active")
  })
}

panels.forEach((panel) => {
  panel.addEventListener("click", () => {
    //console.log("clicked")
    //console.log(panel.classList)
    removeActiveClasses()
    panel.classList.add("active")
  })
})
