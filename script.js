document.getElementById('moreBtn').addEventListener('click', function () {
  const contentSection = document.getElementById('contentSection');
  if (contentSection.style.display === 'none') {
    contentSection.style.display = 'block';
  } else {
    contentSection.style.display = 'none';
  }
});
