function showSideNav(){
    const sidebar = document.querySelector('.sideNav')
    sidebar.style.display = 'flex'
}
function hideSideNav(){
    const sidebar = document.querySelector('.sideNav')
    sidebar.style.display = 'none'
} 
const gallery = document.querySelector('.projects-gallery');
document.querySelector('.next').addEventListener('click', () => {
  gallery.scrollBy({ left: 320, behavior: 'smooth' });
});
document.querySelector('.prev').addEventListener('click', () => {
  gallery.scrollBy({ left: -320, behavior: 'smooth' });
});          