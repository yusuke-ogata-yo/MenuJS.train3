'use strict';

{
  let show = document.getElementById('show');
  let main = document.getElementById('main');

  show.addEventListener('click', function() {
    main.className = main.className === 'manu-open' ? '' : 'menu-open';
  });
}