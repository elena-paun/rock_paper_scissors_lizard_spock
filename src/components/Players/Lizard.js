import React from "react";

export const Lizard = ({ className, handleLizard }) => (
    <div className={className} onClick={handleLizard}>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 63 60">
        <path
          fill="#3B4262"
          d="M49.483 2.096c3.229-2 6.324-2.433 8.714-1.219 5.359 2.72 4.583 12.845 2.39 17.232-1.238 2.477-3.432 4.287-6.527 5.387-1.2 3.799-2.884 7.064-5.034 9.764a7.904 7.904 0 005.079 1.837h.09l3.02-2.982c.761-.75 1.994-.751 2.754 0 .76.75.76 1.968 0 2.718l-.267.264h.608c1.075 0 1.947.861 1.947 1.923 0 1.061-.872 1.922-1.947 1.922h-.608l.267.264c.76.75.76 1.968 0 2.719-.38.375-.878.563-1.376.563-.499 0-.997-.188-1.377-.563l-3.022-2.983h-.09a11.823 11.823 0 01-7.724-2.857c-.415.377-.843.738-1.284 1.083-3.732 2.92-8.294 4.617-13.627 5.082a12.08 12.08 0 01.343 6.352l-.02.09 2.325 3.66a1.998 1.998 0 01-.589 2.741 1.936 1.936 0 01-1.057.316 1.953 1.953 0 01-1.651-.912l-.206-.324-.13.605a1.966 1.966 0 01-1.913 1.562 1.95 1.95 0 01-.419-.046 1.984 1.984 0 01-1.498-2.36l.13-.605-.32.209a1.946 1.946 0 01-2.709-.597 1.998 1.998 0 01.59-2.74l3.617-2.353.02-.09a8.073 8.073 0 00-.713-5.394 44.773 44.773 0 01-4.797-.4c-4.684-.634-7.341 1.433-8.044 2.081-5.518 5.093-6.586 14.092-6.596 14.183a1.977 1.977 0 01-1.96 1.757 1.97 1.97 0 01-1.63-.867c-.087-.13-2.164-3.234-3.075-7.615-1.237-5.95.238-11.407 4.266-15.783a20.702 20.702 0 018.738-5.615l-.407.106a7.99 7.99 0 00-3.375-.747h-.09l-3.032 2.983a1.965 1.965 0 01-1.382.563c-.5 0-1-.188-1.382-.563a1.9 1.9 0 010-2.719l.268-.264h-.61c-1.08 0-1.954-.86-1.954-1.922 0-1.062.875-1.922 1.954-1.922h.61l-.268-.264a1.9 1.9 0 010-2.72c.763-.75 2-.75 2.764 0l3.032 2.983h.09a11.87 11.87 0 018.661 3.726l-.217-.223a22.914 22.914 0 015.352.095c4.946.67 8.99-.018 12.113-2.052a12.215 12.215 0 01-2.71-7.7v-.092L30.6 16.287a2.034 2.034 0 010-2.812 1.885 1.885 0 012.725 0l.265.273v-.621c0-1.099.862-1.989 1.926-1.989s1.927.89 1.927 1.989v.62l.265-.272a1.885 1.885 0 012.725 0c1.146 1.183.32 2.483 0 2.812l-2.99 3.086v.091c0 1.878.635 3.673 1.771 5.098 1.412-1.686 2.522-3.808 3.325-6.36-.587-1.625-1.5-5.473.828-9.837 1.22-2.285 3.564-4.687 6.117-6.269z"
        />
      </svg>
    </div>
  );
