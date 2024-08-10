<script>
document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('section');
    let currentIndex = 0;

    const updateSections = () => {
        sections.forEach((section, index) => {
            section.classList.toggle('active', index === currentIndex);
        });
    };

    const handleScroll = (event) => {
        if (event.deltaY > 0) {
            // Scrolling down
            currentIndex = Math.min(sections.length - 1, currentIndex + 1);
        } else {
            // Scrolling up
            currentIndex = Math.max(0, currentIndex - 1);
        }
        updateSections();
    };

    window.addEventListener('wheel', handleScroll);
    updateSections(); // Initialize with the first section
});
</script>
