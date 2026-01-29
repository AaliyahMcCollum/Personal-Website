function showSideNav(){
    const sidebar = document.querySelector('.sideNav')
    sidebar.style.display = 'flex';
}
function hideSideNav(){
    const sidebar = document.querySelector('.sideNav')
    sidebar.style.display = 'none';
} 


window.addEventListener("load", () => {
  const hand = document.querySelector("#heading img");
  hand.classList.add("wave-on-load");

  hand.addEventListener("animationend", () => {
    hand.classList.remove("wave-on-load");
  }, { once: true });
});


document.addEventListener("DOMContentLoaded", () => {
  const tabButtons = document.querySelectorAll('.tabButton');
  const tabContents = document.querySelectorAll('.tabContent');

  tabButtons.forEach(button => {
    button.addEventListener('click', () => {
      //Remove active class from all buttons and contents
      tabButtons.forEach(btn => btn.classList.remove('active'));
      tabContents.forEach(content => content.classList.remove('active'));

      //Add active class to clicked tab w/ content
      button.classList.add('active');
      const tabId = button.getAttribute('data-tab');
      const targetTab = document.getElementById(tabId);
      if (targetTab) targetTab.classList.add('active');
    });
  });
});


// Projects Container

const container = document.querySelector('.projectContainer');
const leftArrow = document.querySelector('.arrow.left');
const rightArrow = document.querySelector('.arrow.right');

const scrollAmount = () => {
  const card = container.querySelector('.projectCard');
  return card.offsetWidth + 10;

};

rightArrow.addEventListener('click', () => {
  container.scrollBy({ left: scrollAmount(), behavior: 'smooth'})
})

leftArrow.addEventListener('click', () => {
  container.scrollBy({ left: -scrollAmount(), behavior: 'smooth'})
})