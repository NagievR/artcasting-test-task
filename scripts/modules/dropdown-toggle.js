const dropdownList = document.querySelectorAll('.dropdown');
const activeClass = 'active-dropdown';

const dropdownToggle = () => {
  dropdownList.forEach(dropdown => dropdown.addEventListener('click', e => {
    selectOption(e.target);
    closeAnotherDropdown(dropdown);
    dropdown.classList.toggle(activeClass);
  }));
};

const selectOption = target => {
  const select = target.closest('.dropdown').firstElementChild;
  select.innerHTML = target.innerHTML;
};

const closeAnotherDropdown = dropdown => {
  const allOpened = document.querySelectorAll('.' + activeClass);

  for (const opened of allOpened) {
    if (opened.dataset.type !== dropdown.dataset.type) {
      opened.classList.remove(activeClass);
    }
  }
};

// if click is outside a dropdown then close it
document.addEventListener('click', e => {
  const isClickOutsideDropdown = !e.target.closest('.dropdown');
  
  if (isClickOutsideDropdown) {
    dropdownList.forEach(dropdown => {
      dropdown.classList.remove(activeClass);
    });
  }
});

export default dropdownToggle;
