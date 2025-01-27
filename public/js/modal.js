const deleteButtons = document.querySelectorAll(".admin-table__btn");
const deleteModal = document.getElementById("confirm-dialog");
const cancelButton = document.getElementById("cancel-button");
const confirmButton = document.getElementById("confirm-button");

let selectedLevelId = null;

// Afficher la modale
deleteButtons.forEach((button) => {
  button.addEventListener("click", () => {
    selectedLevelId = button.dataset.id;
    confirmButton.href = `/levels/${selectedLevelId}/delete`;
    deleteModal.showModal();
  });
});

// Fermer la modale (annulation de l'action)
cancelButton.addEventListener("click", () => {
  deleteModal.close();
});

// Supprimer la donnée
confirmButton.addEventListener("click", () => {
  console.log("La donnée a bien été supprimée");
  deleteModal.close();
});
