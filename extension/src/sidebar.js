'use strict';

// Sidebar functionality
class Sidebar {
    constructor() {
        this.sidebarElement = document.getElementById('sidebar');
        this.toggleButton = document.getElementById('toggle-sidebar');
        this.init();
    }

    init() {
        this.toggleButton.addEventListener('click', () => this.toggle());
    }

    toggle() {
        this.sidebarElement.classList.toggle('active');
    }
}

// Initialize Sidebar
document.addEventListener('DOMContentLoaded', () => {
    new Sidebar();
});
