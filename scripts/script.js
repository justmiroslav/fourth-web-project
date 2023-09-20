let isVisible = false;

const input = document.querySelector('.input input'); 

input.addEventListener('click', function() {

  if(isVisible) {
    hideRecentSearch();
    isVisible = false; 
  } else {
    showRecentSearch();
    isVisible = true;
  }

});

function showRecentSearch() {
  document.querySelector('.recent-search').style.visibility = 'visible'; 
}

function hideRecentSearch() {
  document.querySelector('.recent-search').style.visibility = 'hidden';
}