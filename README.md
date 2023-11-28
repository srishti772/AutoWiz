todo

Pending pages
add listing, and view bookings

add price range and mileage filter
add date to carsCollection so as to get lates cars on home page - can be done using id
add functionality to create a car - add listing
add admin - set IsAdmin state - hide login sign up for admin..show edit delete button on search for admin only
show wishlist button for non admin users only
show bookings in my booking -??


DB team:
set session
hide login sign up and user buttons for admin
Wishlist, Booking tables
Car, User tables



do we need a admin dashboard? for searching through user accounts and removing them?


# Buy/Sell New/Used Cars Website Components

This README provides an overview of the components used in the Buy/Sell New/Used Cars website. The website's primary purpose is to facilitate the buying and selling of new and used cars at affordable prices. Below are the key components used in the website:

## 1. Button

**Description:** Bootstrap Button component for creating clickable buttons.

**Usage:** Previous button (<) and next button (>) for navigating through the carousel. Styling and positioning for navigation buttons. Used to create "New" and "Used" buttons with custom styles in search.

## 2. List Group (Cards)

**Description:** Bootstrap Cards component for displaying structured content in cards.

**Usage:** The individual car cards are created using the LatestCarsCards component, which likely utilizes Bootstrap Card components.

## 3. Navbar

**Description:** Bootstrap Navbar component for creating a responsive navigation bar.

**Usage:** The entire navigation bar is enclosed within the Navbar component. It defines the overall structure of the navigation bar, including branding and navigation items.

## 4. Container

**Description:** Bootstrap Container component for controlling the layout and responsiveness of content.

**Usage:** Used to wrap the content of the navigation bar, providing padding and control over the content width.

## 5. ButtonGroup

**Description:** Bootstrap ButtonGroup component for grouping related buttons together.

**Usage:** Groups "New" and "Used" buttons together using the ButtonGroup component.

## 6. Form

**Description:** Bootstrap Form component for creating forms and form elements.

**Usage:** The search bar and select elements are enclosed within the Form component.

## 7. Row and Col

**Description:** Bootstrap Grid components for creating responsive layouts.

**Usage:** Used to structure the form elements (input, selects, and buttons) within a row and columns to ensure proper alignment and spacing.

## 8. Card

**Description:** Bootstrap Card component for creating a card-like container for displaying content.

**Usage:** The main component used to structure and style each car card.

## 9. Badge

**Description:** Bootstrap Badge component for displaying a small badge or label.

**Usage:** Used to display the "status" badge on the card with custom styles.

## 10. Image

**Description:** Bootstrap Image component for displaying images.

**Usage:** Displays the car image within the card.

## 11. Placeholder

**Description:** Bootstrap Placeholder component for creating placeholder content.

**Usage:** Used within the card text to create a placeholder animation.

## 12. Bootstrap Icons

**Description:** Bootstrap Icons for adding icons to various elements.

**Usage:** Icons may be used for visual enhancements or to convey specific actions.

## 13. Modal

**Description:** Bootstrap Modal component for creating modal dialogs.

**Usage:** Used for pop-up dialogs, such as displaying additional car details or confirmation prompts.

## 14. Toast

**Description:** Bootstrap Toast component for displaying non-intrusive messages.

**Usage:** Toasts are used for displaying notifications or alerts to users.

## 15. Carousel

**Description:** Bootstrap Carousel component for creating image carousels.

**Usage:** Utilized for creating carousels that display images of cars or promotional content.

## 16. Dropdown

**Description:** Bootstrap Dropdown component for creating dropdown menus.

**Usage:** Dropdowns are used in navigation menus or for additional options within forms.

## 17. Alert

**Description:** Bootstrap Alert component for displaying alert messages.

**Usage:** Alerts are used to notify users of important information or actions on the website.

**Dependencies:**
npm add react-bootstrap bootstrap
npm add react-bootstrap-icons
npm install --save prop-types
yarn add @react-spring/web
npm i react-router-dom
