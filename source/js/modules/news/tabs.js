const addTabHandler = () => {
  if (document.querySelector('.news')) {
    const ACTIVE__CLASS = 'is-active';
    const root = document.querySelector('.news');
    const tabsContainer = root.querySelector('.news__tabs');
    const tabs = tabsContainer.querySelectorAll('.news__tab');

    tabsContainer.addEventListener('click', (evt) => {
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
