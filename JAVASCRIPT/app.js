document.addEventListener('DOMContentLoaded', function () {
    const sections = document.querySelectorAll('.section');
    const sectBtns = document.querySelectorAll('.control');

    // Button click active class
    sectBtns.forEach(function (btn) {
        btn.addEventListener('click', function () {
            document.querySelector('.active-btn').classList.remove('active-btn');
            this.classList.add('active-btn');
            activateSection(this.dataset.id);
        });
    });

    // Section Action
    function activateSection(id) {
        const activeBtn = document.querySelector('.active');
        if (activeBtn) activeBtn.classList.remove('active');

        const activeSection = document.getElementById(id);
        activeSection.classList.add('active');
    }

    // Initialize the first section as active
    activateSection(sections[0].id);
});
