const nav = document.getElementById('nav');

window.addEventListener('scroll', function(){
   scrollposition = window.scrollY;

   if(scrollposition >=60  ) {
       nav.classList.add('nav-dark');
   } else if ( scrollposition <=60) {
       nav.classList.remove('nav-dark')
   }
})

document.querySelectorAll('#skill .skill-card').forEach(function (card) {
    function toggleCard() {
        card.classList.toggle('is-expanded');
    }

    card.addEventListener('click', toggleCard);
    card.addEventListener('keydown', function (event) {
        if (event.key === 'Enter' || event.key === ' ') {
            event.preventDefault();
            toggleCard();
        }
    });
});



const modal = document.getElementById('imageModal');
const modalImage = document.getElementById('modalImage');
const caption = document.getElementById('caption');
const modalLink = document.getElementById('modalLink');
const closeButton = document.querySelector('.modal .close');

function openModal(src, altText, captionText, link) {
    if (!modal || !modalImage) {
        return;
    }

    modal.style.display = 'block';
    modalImage.src = src;
    modalImage.alt = altText || '';
    if (caption) {
        caption.textContent = captionText || '';
    }
    if (modalLink) {
        if (link) {
            modalLink.href = link;
            modalLink.classList.add('is-visible');
        } else {
            modalLink.href = '#';
            modalLink.classList.remove('is-visible');
        }
    }
}

document.querySelectorAll('.cert-image').forEach(function (img) {
    img.addEventListener('click', function () {
        openModal(img.src, img.alt || 'Certificate image', img.alt || '', '');
    });
});

document.querySelectorAll('.portfolio-image').forEach(function (img) {
    img.addEventListener('click', function () {
        const captionText = img.getAttribute('data-caption') || '';
        const link = img.getAttribute('data-link') || '';
        openModal(img.src, img.alt || 'Project image', captionText, link);
    });
});

function closeModal() {
    if (!modal) {
        return;
    }
    modal.style.display = 'none';
    if (modalImage) {
        modalImage.src = '';
    }
    if (modalLink) {
        modalLink.href = '#';
        modalLink.classList.remove('is-visible');
    }
}

if (closeButton) {
    closeButton.addEventListener('click', closeModal);
}

if (modal) {
    modal.addEventListener('click', function (event) {
        if (event.target === modal) {
            closeModal();
        }
    });
}

document.addEventListener('keydown', function (event) {
    if (event.key === 'Escape') {
        closeModal();
    }
});



