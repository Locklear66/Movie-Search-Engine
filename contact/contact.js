function openMenu() {
    document.body.classList += " menu--open"
 }
 
 function closeMenu() {
    document.body.classList.remove('menu--open')
 }
 
 function contact(event) {
    event.preventDefault()
    emailjs
       .sendForm(
          'service_uc6u3wm',
          'template_bpavk3e',
          event.target,
          'rJeubM889V0KM5C2W'
 
       ).then(() => {
          console.log('this worked')
       })
       setTimeout(function(){
          location.reload();
        }, 2000);
 }