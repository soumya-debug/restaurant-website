// Spinner
var preloader = document.getElementById("loading");
function myFunction() {
  preloader.style.display = "none";
}

$(document).ready(function () {
  // Form submission handling
  $("#contactForm").submit(function (event) {
    event.preventDefault();
    var name = $("#name").val();
    var email = $("#email").val();
    var message = $("#message").val();

    // Custom form submission logic
    // Here, you can perform actions like sending an email or saving the data to a database
    // Replace the following code with your own logic

    // Simulating a successful form submission
    if (name && email && message) {
      // Perform your actions here
      // For example, sending an email
      sendEmail(name, email, message);

      // Display a success message
      showAlert("success", "Form submitted successfully!");

      // Reset the form fields
      $("#name").val("");
      $("#email").val("");
      $("#message").val("");
    } else {
      // Display an error message if any of the fields are empty
      showAlert("error", "Please fill in all the required fields.");
    }
  });

  // Fetch menu items dynamically
  fetchMenuItems();
});

function fetchMenuItems() {
  // Simulating an API call to fetch menu items
  setTimeout(function () {
    var menuItems = [
      {
        title: "Dish 1",
        image: "assets/dish1.jpg",
        description: "Grilled Salmon Salad with Lemon Basil Dressing.",
      },
      {
        title: "Dish 2",
        image: "assets/dish2.jpg",
        description:
          "Pan Seared Steak with garlic butter, olive oil, sea salt, rosemary.",
      },
      {
        title: "Dish 3",
        image: "assets/dish3.jpg",
        description:
          "Italian Chicken and Pasta with sun dried tomatoes, skinless chicken breasts.",
      },
      {
        title: "Dish 4",
        image: "assets/dish4.jpg",
        description:
          "Healthy Steam Chicken Salad with crispy onions and lettuce.",
      },
      {
        title: "Dish 5",
        image: "assets/dish5.jpg",
        description:
          "Thai-Inspired Chicken and rice noodle Soup with olive oil and soy sauce.",
      },
      {
        title: "Dish 6",
        image: "assets/dish6.jpg",
        description: "Hamburger and Fries with myonnaise, coleslaw and butter.",
      },
      {
        title: "Dish 7",
        image: "assets/dish7.jpg",
        description:
          "Ravioli with deep fried chicken nuggets and sea salt with chicken curry sauce.",
      },
      {
        title: "Dish 8",
        image: "assets/dish8.jpg",
        description:
          "Grilled Pork Chops with lemon, paper seasoning and soysauce.",
      },
      {
        title: "Dish 9",
        image: "assets/dish9.jpg",
        description:
          "The great english breakfast with half boied egg omelette.",
      },
      {
        title: "Dish 10",
        image: "assets/dish10.jpg",
        description:
          "Japanese Ramen Bowl with chinese five spice, chilli and eggs.",
      },
      {
        title: "Dish 11",
        image: "assets/dish11.jpg",
        description:
          "Crispy Oysters with tangy tomato soup and hot chicken broth.",
      },
      {
        title: "Dish 12",
        image: "assets/dish12.jpg",
        description: "Hot and spicy chickpeas with chicken broth and rusk.",
      },
      // Add more menu items here
    ];

    var menuItemsHTML = "";
    var carouselIndicatorsHTML = "";
    var itemsPerPage = 3; // Number of menu items to display per page
    var pageCount = Math.ceil(menuItems.length / itemsPerPage);

    for (var i = 0; i < pageCount; i++) {
      var startIndex = i * itemsPerPage;
      var endIndex = (i + 1) * itemsPerPage;
      var menuItemsPage = menuItems.slice(startIndex, endIndex);

      var carouselItemClass =
        i === 0 ? "carousel-item active" : "carousel-item";
      var carouselIndicatorClass = i === 0 ? "active" : "";

      menuItemsHTML +=
        '<div class="' + carouselItemClass + '">' + '<div class="card-deck">';

      menuItemsPage.forEach(function (item) {
        menuItemsHTML +=
          '<div class="card">' +
          '<img src="' +
          item.image +
          '" class="card-img-top" alt="' +
          item.title +
          '">' +
          '<div class="card-body">' +
          '<h5 class="card-title">' +
          item.title +
          "</h5>" +
          '<p class="card-text">' +
          item.description +
          "</p>" +
          "</div>" +
          "</div>";
      });

      menuItemsHTML += "</div></div>";

      carouselIndicatorsHTML +=
        '<li data-target="#menuCarousel" data-slide-to="' +
        i +
        '" class="' +
        carouselIndicatorClass +
        '"></li>';
    }

    $("#menu .carousel-indicators").html(carouselIndicatorsHTML);
    $("#menu .carousel-inner").html(menuItemsHTML);

    // Initialize the carousel
    $(".carousel").carousel();
  }, 1000);
}

function sendEmail(name, email, message) {
  // Custom code to send email
  // Replace this with your own email sending logic
  console.log("Sending email to: " + email);
  console.log("Message: " + message);
}

function showAlert(type, message) {
  // Display an alert message with the given type (success, error)
  // You can customize this as per your needs
  var alertClass = type === "success" ? "alert-success" : "alert-danger";
  var alertHTML =
    '<div class="alert ' +
    alertClass +
    ' alert-dismissible fade show" role="alert">' +
    message +
    '<button type="button" class="close" data-dismiss="alert" aria-label="Close">' +
    '<span aria-hidden="true">&times;</span>' +
    "</button>" +
    "</div>";

  $("#alertContainer").html(alertHTML);
}
