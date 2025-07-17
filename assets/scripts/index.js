document.querySelectorAll('.scroll').forEach(anchor => {
    anchor.addEventListener('click', (event) => {
        event.preventDefault();
        const targetId = anchor.getAttribute('href');
        const targetElement = document.querySelector(targetId);

        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

document.addEventListener("DOMContentLoaded", () => {
    const navLinks = document.querySelectorAll("#nav .scroll");

    const sectionIds = [...navLinks].map(link => link.getAttribute("href").slice(1));
    const sections = sectionIds.map(id => document.getElementById(id));

    window.addEventListener("scroll", () => {
        let currentIndex = sections.findIndex((section, i) => {
            const nextSection = sections[i + 1];
            const top = section.offsetTop - 100;
            const bottom = nextSection ? nextSection.offsetTop - 100 : document.body.scrollHeight;
            return window.scrollY >= top && window.scrollY < bottom;
        });

        if (currentIndex === -1) return;

        navLinks.forEach(link => {
            link.parentElement.classList.remove("active");
        });

        navLinks[currentIndex].parentElement.classList.add("active");
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const modal = document.getElementById("image-modal");
    const modalImg = document.getElementById("modal-image");
    const closeBtn = document.querySelector(".image-modal .close");

    // 모든 .image 클래스 이미지에 클릭 이벤트 추가
    const images = document.querySelectorAll("img.image");
    images.forEach(img => {
        img.addEventListener("click", function () {
            modal.style.display = "block";
            modalImg.src = this.src;
        });
    });

    // 닫기 버튼 클릭 시 모달 닫기
    closeBtn.addEventListener("click", function () {
        modal.style.display = "none";
    });

    // 모달 바깥 클릭 시 닫기
    modal.addEventListener("click", function (e) {
        if (e.target === modal) {
            modal.style.display = "none";
        }
    });
});