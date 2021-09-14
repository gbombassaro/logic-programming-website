//1. executes javscript when document is ready (window.onload means that page is finished loading)
window.onload = function() {

  // 2. get button element by id
  var button = document.getElementById("change_color_button")

  // 3. get target text element
  var element = document.getElementById("paragrafoDinamico")
  
  // 4. assign function to button onclick prop
  button.onclick = handleClick

  // 5. function that executes text change
  function handleClick() {
    element.innerHTML = "Jumps over the lazy dog"
  }
}