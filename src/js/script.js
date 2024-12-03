// *** LIGHTBOX ***

const lightbox = document.getElementById("lightbox");
const lightboxImg = lightbox.querySelector('img');


document.querySelectorAll("ul img").forEach(thumbnail => {
    thumbnail.onclick = () => {
        lightboxImg.src = thumbnail.dataset.fullImg;
        lightbox.showModal();
    };
});

lightbox.addEventListener("click", (e) => {
    if (e.target === lightbox) {
        lightbox.close();
    }
});