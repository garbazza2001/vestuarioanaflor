document.querySelectorAll('.delay').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const href = this.href;
        setTimeout(() => {
            window.location.href = href;
        }, 3000);
    });
});