/**
 * Sidebar Toggle Functionality
 * Used on homepage to show/hide navigation sidebar
 */

function toggleSidebar() {
    const sidebar = document.getElementById("sidebar");
    const toggleContainer = document.getElementById("toggle-container");

    if (sidebar.classList.contains("open")) {
        sidebar.classList.remove("open");
        toggleContainer.classList.remove("open");
    } else {
        sidebar.classList.add("open");
        toggleContainer.classList.add("open");
    }
}
