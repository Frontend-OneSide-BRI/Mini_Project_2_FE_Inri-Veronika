import React from "react";

export function Modal({ visible, onClose }) {
  const handleOnClose = (e) => {
    if (e.target.id === "container") onClose();
  };
  if (!visible) return null;
  return (
    <div
      id="container"
      onClick={handleOnClose}
      className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center"
    >
      <div class="flex items-center justify-center min-h-screen px-4">
        <div class="bg-white rounded-xl shadow-lg dark:bg-gray-800 dark:border-gray-700 max-w-md w-full p-6">
          <div class="flex justify-end">
            <button
              class="text-gray-400 hover:text-gray-500 focus:outline-none"
              onClick={onClose}
            >
              X
            </button>
          </div>
          <div class="text-start">
            <h1 class="block text-2xl font-bold text-gray-800 dark:text-white">
              About this page
            </h1>
            <p class="mt-2 text-sm text-gray-600 dark:text-gray-400">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Architecto iure vero animi deleniti cumque quisquam necessitatibus
              molestias doloribus alias dolore porro numquam, dolores, error
              eveniet hic sit? Voluptates, illo ipsa.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Modal;
