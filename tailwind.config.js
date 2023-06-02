/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        sea: 'url("https://img.freepik.com/free-photo/fantastic-seascape-with-ripples_1232-424.jpg")',
        sea2: 'url("https://cdn.thewire.in/wp-content/uploads/2018/08/30135059/waves-1867285_1920.jpg")',
        sea3: 'url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVwO1W4iXS6PbakOHdSqkGdMNULtyn_CiSd8jIOFNbEqLD-g8bE-iIzvNaQpVJLnmAxIU&usqp=CAU")',
      },
    },
  },
  plugins: [],
};
