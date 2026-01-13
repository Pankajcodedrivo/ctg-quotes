import Swal from "sweetalert2";
import deleteIcon from "../assets/images/delete-icon.svg";

interface ConfirmDeleteAccountOptions {
  title?: string;
  description?: string;
  confirmText?: string;
  cancelText?: string;
}

export const confirmDeleteAccount = async ({
  title = "Delete Account",
  description = "Are you sure you want to delete your account?",
  confirmText = "Yes",
  cancelText = "No",
}: ConfirmDeleteAccountOptions = {}) => {
  const result = await Swal.fire({
    html: `
      <div class="modal-box text-center back-wh">
        <div class="modal-box-body">
          <span class="mb-14 delete-icon">
            <img src="${deleteIcon}" alt="delete" />
          </span>
          <div class="mb-40">
            <h3>${title}</h3>
            <p>${description}</p>
          </div>
        </div>

        <div class="modal-box-footer d-flex">
          <button
            id="cancel-delete"
            class="btn btn-secondary w-100"
          >
            ${cancelText}
          </button>

          <button
            id="confirm-delete"
            class="btn red-btn clr-08 w-100"
          >
            ${confirmText}
          </button>
        </div>
      </div>
    `,
    showConfirmButton: false,
    showCancelButton: false,
    backdrop: true,
    allowOutsideClick: true,
    didOpen: () => {
      document
        .getElementById("confirm-delete")
        ?.addEventListener("click", () => {
          Swal.close({ isConfirmed: true });
        });

      document
        .getElementById("cancel-delete")
        ?.addEventListener("click", () => {
          Swal.close({ isConfirmed: false });
        });
    },
  });

  return result.isConfirmed;
};
