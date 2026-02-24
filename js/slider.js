const thumbs = document.querySelectorAll('.thumb');
const modal = document.getElementById('modal');
const modalImg = document.getElementById('modalImg');
const closeBtn = document.querySelector('.close');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');

let currentIndex = 0;
const images = Array.from(thumbs).map(t => t.dataset.large);

// サムネイルクリック
thumbs.forEach((thumb, index) => {
  thumb.addEventListener('click', () => {
    currentIndex = index;
    modalImg.src = images[currentIndex];
    modal.classList.add('active');
  });
});

// 次へ
nextBtn.addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % images.length;
  modalImg.src = images[currentIndex];
});

// 前へ
prevBtn.addEventListener('click', () => {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  modalImg.src = images[currentIndex];
});

// 閉じる
closeBtn.addEventListener('click', () => {
  modal.classList.remove('active');
});

// 背景クリックで閉じる
modal.addEventListener('click', (e) => {
  if (e.target === modal) {
    modal.classList.remove('active');
  }
});
