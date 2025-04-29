let note = document.getElementById('noteA');
let scoreText = document.getElementById('score');
let music = document.getElementById('music');
let position = -60;
let score = 0;
let isPlaying = false;

function startGame() {
  music.play();
  isPlaying = true;
  position = -60;
  animateNote();
}

function animateNote() {
  if (!isPlaying) return;
  position += 2;
  note.style.top = position + 'px';

  if (position < 400) {
    requestAnimationFrame(animateNote);
  } else {
    position = -60;
    animateNote(); // 반복적으로 노트 재생
  }
}

document.addEventListener('keydown', function (e) {
  if (e.key === 'a') {
    if (position > 300 && position < 360) {
      score += 100;
    } else {
      score -= 50;
    }
    scoreText.textContent = '점수: ' + score;
  }
});
