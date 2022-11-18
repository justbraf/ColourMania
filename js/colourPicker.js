document.addEventListener("DOMContentLoaded", () => {
  let rndButton = document.querySelector("#js-rnd")
  let colBlock = document.querySelectorAll(".colBlk")

  randomizeColours()

  rndButton.addEventListener("click", () => {
    randomizeColours()
  })

  colBlock.forEach(cBlk => {
    cBlk.addEventListener("click", () => {
      // console.log(cBlk.childNodes[0])
      navigator.clipboard.writeText("#" + cBlk.childNodes[0].textContent).then(
        () => {
          /* clipboard successfully set */
          cBlk.lastElementChild.classList.add("icnShow")
          setTimeout(() => {
            cBlk.lastElementChild.classList.remove("icnShow")
          }, 1000);
        },
        () => {
          /* clipboard write failed */
          alert("Error occured")
        }
      );
    })
  })
})

let randomizeColours = () => {
  let colBlock = document.querySelectorAll(".colBlk")
  colBlock.forEach(cBlk => {
    let newColour = newRndCol()
    cBlk.style.background = "#" + newColour //#afbc57
    let spanNode = document.createTextNode(newColour)
    cBlk.replaceChild(spanNode, cBlk.childNodes[0])
  })
}

let newRndCol = () => {
  return Math.random().toString(16).substring(2, 8)
}