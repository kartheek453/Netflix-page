<script>
  const aboutButton = document.getElementById('showAbout');
  const aboutSection = document.getElementById('aboutMe');

  aboutButton.addEventListener('click', function() {
    if (aboutSection.style.display === 'none') {
      aboutSection.style.display = 'block';
    } else {
      aboutSection.style.display = 'none';
    }
  });
</script>