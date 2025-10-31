function showSideNav(){
    const sidebar = document.querySelector('.sideNav')
    sidebar.style.display = 'flex';
}
function hideSideNav(){
    const sidebar = document.querySelector('.sideNav')
    sidebar.style.display = 'none';
} 

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
      document.getElementById(tabId).classList.add('active');
    });
  });
});