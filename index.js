window.addEventListener('scroll', moveScrollIndicator);
const scrollBar = document.getElementByID('scrollIndicator');
const maxScrollableHeight = document.body.scrollHeight - window.innerHeight;


function moveScrollIndicator() {
  const percentage = ((window.scrollY) / maxScrollableHeight) * 100;
  scrollBar.style.width = percentage + '%';
}
