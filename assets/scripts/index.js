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