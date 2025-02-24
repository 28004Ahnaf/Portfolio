document.addEventListener('DOMContentLoaded', function() {
    const filterLinks = document.querySelectorAll('.project-filter a');
    const projectCards = document.querySelectorAll('.project-card');

    filterLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const filter = this.getAttribute('data-filter');

            projectCards.forEach(card => {
                if (filter === 'all' || card.getAttribute('data-category') === filter) {
                    card.style.display = 'block';
                } else {
                    card.style.display = 'none';
                }
            });

            filterLinks.forEach(link => link.classList.remove('active'));
            this.classList.add('active');
        });
    });
});
