function openModal(modalId) {
    document.getElementById(modalId).style.display = "flex";
}

function closeModal(modalId) {
    document.getElementById(modalId).style.display = "none";
}

function closeOnOverlayClick(event, modalId) {
    const modal = document.getElementById(modalId);
    // Если клик был на область вне модального контента
    if (event.target === modal) {
        closeModal(modalId);
    }
}
