import './style.css';
// require('./style.css');

// // Array of dropdown items
// const dropdownItems = [
//   { href: '#create', iconClass: 'bx bx-plus-circle', text: 'Create New' },
//   { href: '#draft', iconClass: 'bx bx-book', text: 'All Drafts' },
//   { href: '#move', iconClass: 'bx bx-folder', text: 'Move to' },
//   { href: '#profile', iconClass: 'bx bx-user', text: 'Profile Settings' },
//   { href: '#notification', iconClass: 'bx bx-bell', text: 'Notification' },
//   { href: '#settings', iconClass: 'bx bx-cog', text: 'Settings' }
// ];



// initDropDown('.content', dropdownItems)


function initDropDown(parent, itemList) {

  createDropdown(parent, itemList);
  const dropdownBtn = document.getElementById('btn');
  const dropdownMenu = document.getElementById('dropdown');
  const toggleArrow = document.getElementById('arrow');


  const toggleDropdown = function () {
    dropdownMenu.classList.toggle('show');
    toggleArrow.classList.toggle('arrow')
  }

  dropdownBtn.addEventListener('click', function (e) {
    e.stopPropagation();
    toggleDropdown();
  })

  document.documentElement.addEventListener('click', function () {
    if (dropdownMenu.classList.contains('show')) {
      toggleDropdown();
    }
  });

}



function createDropdown(parent = 'body', itemList) {
  // Create container div
  const containerDiv = document.createElement('div');
  containerDiv.classList.add('container');

  // Create button
  const button = document.createElement('button');
  button.classList.add('btn');
  button.id = 'btn';
  button.textContent = 'Dropdown';

  // Create arrow icon inside button
  const arrowIcon = document.createElement('i');
  arrowIcon.classList.add('bx', 'bx-chevron-down');
  arrowIcon.id = 'arrow';

  // Append arrow icon to button
  button.appendChild(arrowIcon);

  // Create dropdown div
  const dropdownDiv = document.createElement('div');
  dropdownDiv.classList.add('dropdown');
  dropdownDiv.id = 'dropdown';


  // Create dropdown items
  itemList.forEach(item => {
    const link = document.createElement('a');
    link.href = item.href;

    const icon = document.createElement('i');
    icon.classList.add(item.iconClass.split(' '));

    const textNode = document.createTextNode(item.text);

    link.appendChild(icon);
    link.appendChild(textNode);
    dropdownDiv.appendChild(link);
  });

  // Append button and dropdown to container
  containerDiv.appendChild(button);
  containerDiv.appendChild(dropdownDiv);

  // Append container to the document body
  document.querySelector(parent).appendChild(containerDiv);

}


export { initDropDown };