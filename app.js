const video1 = document.getElementById('project-video1');
const videoList = [video1];
const hoverSign = document.querySelector('.hover-sign');
videoList.forEach(function (video) {
    video.addEventListener('mouseover', function () {
        video.play();
        hoverSign.classList.add('active');
    })
    video.addEventListener('mouseout', function () {
        video.pause();
        hoverSign.classList.remove('active');
    })
})
const form = document.getElementById('contactForm');

form.addEventListener('submit', function (e) {
    // optional: prevent page reload for nicer UX
    e.preventDefault();

    // submit form via fetch to Formspree
    const formData = new FormData(form);
    fetch(form.action, {
        method: 'POST',
        body: formData,
        headers: {
            'Accept': 'application/json'
        }
    }).then(response => {
        if (response.ok) {
            alert('Message sent successfully!');
            form.reset(); // ← this clears all text boxes
        } else {
            alert('Oops! There was a problem sending your message.');
        }
    }).catch(error => {
        alert('Oops! There was a problem sending your message.');
    });
});