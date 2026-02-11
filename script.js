document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Gestion des Onglets (Tabs)
    const tabs = document.querySelectorAll('.tab-btn');
    const contents = document.querySelectorAll('.content-box');

    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            tabs.forEach(t => t.classList.remove('active'));
            contents.forEach(c => c.classList.remove('active'));
            tab.classList.add('active');
            const targetId = tab.getAttribute('data-target');
            document.getElementById(targetId).classList.add('active');
        });
    });

    // 2. Animation des compteurs (Stats)
    const animateValue = (obj, start, end, duration) => {
        let startTimestamp = null;
        const step = (timestamp) => {
            if (!startTimestamp) startTimestamp = timestamp;
            const progress = Math.min((timestamp - startTimestamp) / duration, 1);
            obj.innerHTML = Math.floor(progress * (end - start) + start);
            if (progress < 1) {
                window.requestAnimationFrame(step);
            }
        };
        window.requestAnimationFrame(step);
    };

    // On récupère tous les éléments avec la classe 'number'
    const stats = document.querySelectorAll('.number');
    
    stats.forEach(stat => {
        // On récupère la valeur cible écrite dans ton HTML
        const targetValue = parseInt(stat.innerText);
        // On lance l'animation de 0 à la cible sur 1.5 seconde
        animateValue(stat, 0, targetValue, 1500);
    });
});