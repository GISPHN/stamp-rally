window.onload = function() {
  // スタンプ進捗表示
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

  // カメラボタン
  const camBtn = document.getElementById('open-camera');
  if(camBtn){
    camBtn.onclick = function(){
      const qrReaderDiv = document.getElementById('qr-reader');
      qrReaderDiv.style.display = 'block';
      if(window.html5QrCodeObj){ return; } // 多重起動防止
      window.html5QrCodeObj = new Html5Qrcode("qr-reader");
      window.html5QrCodeObj.start(
        { facingMode: "environment" },
        {
          fps: 10,
          qrbox: 250
        },
        qrCodeMessage => {
          window.html5QrCodeObj.stop().then(() => {
            window.html5QrCodeObj.clear();
            delete window.html5QrCodeObj;
            window.location.href = qrCodeMessage;
          });
        },
        errorMessage => {
          // 無視でOK
        }
      ).catch(err => {
        alert("カメラを起動できません：" + err);
      });
    };
  }
};
