window.onload = function() {
  // index.htmlの進捗表示
  if (document.getElementById('stamps')) {
    const stamps = ['qgis', 'vr', 'gown', 'research'];
    let completed = 0;
    stamps.forEach(id => {
      if (localStorage.getItem('stamp-' + id) === '1') {
        document.getElementById('stamp-' + id).classList.add('got');
        completed++;
      }
    });
    if (completed === 4) {
      document.getElementById('complete-btn').disabled = false;
      document.getElementById('complete-btn').onclick = function(){
        window.location.href = "complete.html";
      }
    }
  }
};
