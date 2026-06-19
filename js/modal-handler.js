function showModal(modalElement) {
  modalElement.classList.remove("modal-exit");
  modalElement.style.display = "block";
  void modalElement.offsetWidth;
}

function closeModal(modalElement) {
  modalElement.classList.add("modal-exit");
  setTimeout(() => {
    modalElement.style.display = "none";
    modalElement.classList.remove("modal-exit");
  }, 300);
}
