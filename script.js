const cursorGlow = document.getElementById('cursorGlow');
document.addEventListener('mousemove', (e) => {
    cursorGlow.style.left = e.clientX + 'px';
    cursorGlow.style.top  = e.clientY + 'px';
});

const menuBtn  = document.getElementById('menu-btn');
const sidebar  = document.getElementById('sidebar');
const overlay  = document.getElementById('overlay');
const navItems = document.querySelectorAll('.nav-item');

function toggleMenu() {
    sidebar.classList.toggle('active');
    overlay.classList.toggle('active');
}

menuBtn.addEventListener('click', toggleMenu);
overlay.addEventListener('click', toggleMenu);
navItems.forEach(item => item.addEventListener('click', toggleMenu));

function scrollToTab(tabName) {
    const fakeEvent = { currentTarget: document.getElementById('tab-' + tabName) };
    openTab(fakeEvent, tabName);
    document.getElementById('works').scrollIntoView({ behavior: 'smooth' });
}

function openTab(evt, tabName) {
    Array.from(document.getElementsByClassName('tab-content'))
        .forEach(el => el.style.display = 'none');
    Array.from(document.getElementsByClassName('tab-btn'))
        .forEach(btn => btn.classList.remove('active'));
    document.getElementById(tabName).style.display = 'block';
    evt.currentTarget.classList.add('active');
}

const fadeEls = document.querySelectorAll('.fade-in');
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animationPlayState = 'running';
            observer.unobserve(entry.target);
        }
    });
}, { threshold: 0.12 });

fadeEls.forEach(el => {
    if (!el.closest('.home-content')) el.style.animationPlayState = 'paused';
    observer.observe(el);
});
