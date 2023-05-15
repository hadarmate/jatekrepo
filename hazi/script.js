function showContent(id) {
  var contentDivs = document.querySelectorAll('.content div');
  for (var i = 0; i < contentDivs.length; i++) {
    contentDivs[i].style.display = 'none';
  }
  document.getElementById(id).style.display = 'block';
}