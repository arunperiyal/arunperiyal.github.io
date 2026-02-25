/**
 * Sidebar Toggle Functionality
 * Site-wide navigation sidebar toggle
 */

function toggleSidebar() {
    const sidebar = document.getElementById("sidebar");
    const toggleBtn = document.querySelector('.sidebar-toggle .toggle-btn');

    if (sidebar.classList.contains("open")) {
        sidebar.classList.remove("open");
        if (toggleBtn) toggleBtn.setAttribute('aria-expanded', 'false');
    } else {
        sidebar.classList.add("open");
        if (toggleBtn) toggleBtn.setAttribute('aria-expanded', 'true');
    }
}

// Close sidebar when clicking outside
document.addEventListener('DOMContentLoaded', () => {
    const sidebar = document.getElementById("sidebar");

    document.addEventListener('click', (event) => {
        const toggleBtn = document.querySelector('.sidebar-toggle');
        const isClickInsideSidebar = sidebar.contains(event.target);
        const isClickOnToggle = toggleBtn && toggleBtn.contains(event.target);

        if (!isClickInsideSidebar && !isClickOnToggle && sidebar.classList.contains('open')) {
            sidebar.classList.remove('open');
            const btn = document.querySelector('.sidebar-toggle .toggle-btn');
            if (btn) btn.setAttribute('aria-expanded', 'false');
        }
    });
});
