//scroll
let menuIcon = document.querySelector('#menu-icon');
let navbar =document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx,bx');
}
/*let section = document.querySelector('section');
let navLinks = document.querySelector('header nav a');*/


   /* section.forEach(sec => {
       let top = window.scrollY;
       let offset = sec.offsetTop -100;
       let height = sec.offsetHeight;
       let id = sec.getAttribute('id');

       if(top >= offset && top < offset + height) {
        //active navbar links
        navLinks.forEach(links => {
            links.classList.remove('active');
            document.querySelector('header nav a[href * =' + id + ']').classList.add('active');
        });
       }
});*/
    //sticky
    window.onscroll = () => {
    let header = document.querySelector('header')

    header.classList.toggle('sticky',window.scrollY > 100);
}

