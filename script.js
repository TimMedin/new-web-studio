document.addEventListener('DOMContentLoaded', function() {
  var button = document.getElementById('toggleButton');
  var container = document.getElementById('container');
  var isOpen = false;

  button.addEventListener('click', function() {
    if (isOpen) {
      container.classList.add('hidden');
      isOpen = false;
    } else {
      container.classList.remove('hidden');
      isOpen = true;
    }
  });
});
