
## Installation

Basic Drop Down Component with styling

```bash
  npm install basic-dropdown-component

```
    
## Demo

![Alt Text](https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExMnhqa3NxbWxzdjhsZjFwbHVnb3dnbXphbzZ5eHZtOXVvMG9wa2JvZiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/qMBiR1Kh89PFMI17I2/giphy.gif)

## Usage/Examples

```javascript
const { initDropDown } = require('basic-dropdown-component')

// // Array of dropdown items, some examples
const dropdownItems = [
  { href: '#create', iconClass: 'bx bx-plus-circle', text: 'Create New' },
  { href: '#draft', iconClass: 'bx bx-book', text: 'All Drafts' },
  { href: '#move', iconClass: 'bx bx-folder', text: 'Move to' },
  { href: '#profile', iconClass: 'bx bx-user', text: 'Profile Settings' },
  { href: '#notification', iconClass: 'bx bx-bell', text: 'Notification' },
  { href: '#settings', iconClass: 'bx bx-cog', text: 'Settings' }
];

'body' is the element where you want to place the drop down menu component. 
function declaration is this:

function createDropdown(parent = 'body', itemList){
  // Append container to the document body
  document.querySelector(parent).appendChild(containerDiv);
}

initDropDown('body',dropdownItems);
```


## Icon library

We are using the free library called boxicons. https://boxicons.com \
The iconClass key is the classes that the icon belongs to when you click on the icon and press font! For example, the sushi icon has the class attribute set to <i class='bx bxs-sushi'></i> 
