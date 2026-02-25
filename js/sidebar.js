/**
 * Sidebar Toggle Functionality
 * Used on homepage to show/hide navigation sidebar
 */

function toggleSidebar() {
    const sidebar = document.getElementById("sidebar");
    const toggleContainer = document.getElementById("toggle-container");
    const toggleBtn = toggleContainer.querySelector('.toggle-btn');

    if (sidebar.classList.contains("open")) {
        sidebar.classList.remove("open");
        toggleContainer.classList.remove("open");
        if (toggleBtn) toggleBtn.setAttribute('aria-expanded', 'false');
    } else {
        sidebar.classList.add("open");
        toggleContainer.classList.add("open");
        if (toggleBtn) toggleBtn.setAttribute('aria-expanded', 'true');
    }
}
