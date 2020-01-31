let image = document.getElementsByTagName('img')[0]

image.addEventListener('mouseenter', function(e){
  image.src =  "https://www.nationalgeographic.com/content/dam/news/2016/07/19/slothlove/01_slothlove_leaves.jpg"
})

image.addEventListener('mouseleave',function(e){
  image.src = "https://media.giphy.com/media/UDjF1zMreMld6/giphy.gif"
})

// image.addEventListener('click', function (e) {
//   image.style.border = "thick dashed blue"
// })