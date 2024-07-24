document.addEventListener('DOMContentLoaded', function () {
    const sections = document.querySelectorAll('.section');

    sections.forEach(section => {
        section.addEventListener('click', function (event) {
            if (!event.target.closest('.content-section')) {
                const content = this.querySelector('.content-section');
                const isVisible = content.style.display === 'flex';

                document.querySelectorAll('.content-section').forEach(section => {
                    section.style.display = 'none';
                });

                content.style.display = isVisible ? 'none' : 'flex';
            }
        });
    });

    document.querySelectorAll('.save-button button').forEach(button => {
        button.addEventListener('click', function (event) {
            event.stopPropagation();
            const section = this.closest('.section');
            const textarea = section.querySelector('textarea').value.trim();

            if (textarea === '') {
                alert('Please fill in all the fields before saving.');
                return;
            }

            const sectionId = section.id;
            localStorage.setItem(sectionId, textarea); // Save data to local storage

            console.log('Saved Data for section:', sectionId, textarea);

            section.querySelector('.content-section').style.display = 'none';

            const nextSection = section.nextElementSibling;

            if (nextSection && nextSection.classList.contains('section')) {
                nextSection.querySelector('.content-section').style.display = 'flex';
            } else {
                alert('Data saved successfully!');
            }
        });
    });

    document.querySelector('.next-step').addEventListener('click', function () {
        let allSectionsFilled = true;

        sections.forEach(section => {
            const textarea = section.querySelector('textarea').value.trim();

            if (textarea === '') {
                alert('Please fill in all the fields before proceeding.');
                allSectionsFilled = false;
                return;
            }
        });

        if (allSectionsFilled) {
            window.location.href = 'createcvTemplatepage.html';
        }
    });

    // Load data from local storage when the page loads
    sections.forEach(section => {
        const sectionId = section.id;
        const storedData = localStorage.getItem(sectionId);

        if (storedData) {
            section.querySelector('textarea').value = storedData;
        }
    });
});

