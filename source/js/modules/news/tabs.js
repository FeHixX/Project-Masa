const addTabHandler = () => {
  if (document.querySelector('.news__tabs')) {
    const ACTIVE__CLASS = 'is-active';
    const root = document.querySelector('.news__tabs');
    const tabs = root.querySelectorAll('.news__tab');

    root.addEventListener('click', (evt) => {
      tabs.forEach((tab) => {
        if (evt.target.matches('.news__tab')) {
          tab.classList.remove(ACTIVE__CLASS);
          evt.target.classList.add(ACTIVE__CLASS);
        }
      });
    });
  }
  return null;
};

export {addTabHandler};
