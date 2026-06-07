document.addEventListener('DOMContentLoaded', function(){
  const y = document.getElementById('year');
  if(y){ y.textContent = new Date().getFullYear(); }

  const menuToggle = document.querySelector('.menu-toggle');
  const nav = document.querySelector('.nav');
  if(menuToggle && nav){
    menuToggle.addEventListener('click', function(){
      const isOpen = nav.classList.toggle('open');
      menuToggle.classList.toggle('open', isOpen);
      menuToggle.setAttribute('aria-expanded', String(isOpen));
      document.body.style.overflow = isOpen ? 'hidden' : '';
    });

    // Close menu when clicking a nav link
    nav.querySelectorAll('a').forEach(function(link){
      link.addEventListener('click', function(){
        nav.classList.remove('open');
        menuToggle.classList.remove('open');
        menuToggle.setAttribute('aria-expanded', 'false');
        document.body.style.overflow = '';
      });
    });

    document.addEventListener('click', function(event){
      if (!nav.classList.contains('open')) return;
      if (menuToggle.contains(event.target) || nav.contains(event.target)) return;
      nav.classList.remove('open');
      menuToggle.classList.remove('open');
      menuToggle.setAttribute('aria-expanded', 'false');
      document.body.style.overflow = '';
    });
  }
});
