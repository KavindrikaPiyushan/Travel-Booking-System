import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlane,faCar } from "@fortawesome/free-solid-svg-icons";

export const navList = [
  {
    id: 1,
    path: "/home",
    text: "Home",
  },
  {
    id: 2,
    path: "/about",
    text: "About",
  },
  {
    id: 3,
    path: "/services",
    text: "Services",
  },
  {
    id: 4,
    path: "/hotels",
    text: "Hotels",
  },
  {
    id: 7,
    path: "/flightBooking",
    text: "Flight Booking",
  },
  {
    id: 8,
    path: "/carRentals",
    text: "Car Rentals",
  },
  {
    id: 6,
    path: "/contact",
    text: "Contact",
  },
];
export const socialIcons = [
  {
    icon: <i className="fab fa-facebook-f"></i>,
  },
  {
    icon: <i className="fab fa-twitter"></i>,
  },
  {
    icon: <i className="fab fa-instagram"></i>,
  },
  {
    icon: <i className="fab fa-linkedin-in"></i>,
  },
  {
    icon: <i className="fab fa-youtube"></i>,
  },
];

export const carouselData = [
  {
    img: "../assets/img/bg1.jpg",
    title: " Book Your Dream Flight with Ease",
    subtitle: "Explore the World Safely",
    btn2: "Book Flight",
    link:"/flightBooking"
  },
  {
    img: "../assets/img/bg3.webp",
    title: "Top Most Hotles in the World",
    subtitle: "Book with lowest price",
    btn2: "Book Hotel",
    link:"/hotels"
  },
  {
    img: "../assets/img/bg2.webp",
    title: " Book Your Dream Car with Ease",
    subtitle: "Explore the World Safely",
    btn2: "Rent Car",
    link:"/carRentals"
  },
 
];
export const about = [
  {
    icon: <i class="fa fa-hotel fa-2x text-primary mb-2"></i>,
    text: "Hotel Bookings",
    count: "7861",
  },
  {
    icon: <FontAwesomeIcon icon={faPlane} size="2x" className="text-primary mb-2" />,
    text: "Flight Bookings",
    count: "1234",
  },
  {
    icon: <FontAwesomeIcon icon={faCar} size="2x" className="text-primary mb-2" />,
    text: "Cat Rentals",
    count: "4321",
  },
];

export const services = [
  {
    icon: <i class="fa fa-plane-departure fa-2x text-primary"></i>,
    name: "Flight Booking",
    description: "Book flights to destinations worldwide with competitive rates.",
  },
  {
    icon: <i class="fa fa-hotel fa-2x text-primary"></i>,
    name: "Hotel Reservations",
    description: "Find the perfect stay with a wide range of hotels to choose from.",
  },
  {
    icon: <i class="fa fa-car fa-2x text-primary"></i>,
    name: "Car Rentals",
    description: "Rent cars from trusted providers at your destination for convenience.",
  },
  {
    icon: <i class="fa fa-route fa-2x text-primary"></i>,
    name: "Travel Packages",
    description: "Bundle flights, hotels, and cars for an all-in-one travel experience.",
  },
  {
    icon: <i class="fa fa-umbrella-beach fa-2x text-primary"></i>,
    name: "Vacation Deals",
    description: "Discover exclusive vacation deals and last-minute offers.",
  },
  {
    icon: <i class="fa fa-concierge-bell fa-2x text-primary"></i>,
    name: "Concierge Services",
    description: "Get 24/7 assistance with your travel plans for a stress-free trip.",
  },
];


export const footerItem = [
  {
    id: 1,
    header: "Company",
    UnitItem: [
      {
        name: "About Us",
        link:'about'
      },
      {
        name: "Contact Us",
                link:'contact'
      },
      {
        name: "Privacy Policy",
                link:''
      },
      {
        name: "Terms & Conditions",
                link:''
      },
      {
        name: "Support",
                link:''
      },
    ],
  },
  {
    id: 2,
    header: "Services",
    UnitItem: [
      {
        name: "Flight Booking",
        link:'carRentals'
      },
      {
        name: "Hotel Reservations",
        link:'hotels'
      },
      {
        name: "Car Rentals",
        link:'carRentals'
      },
      {
        name: "Travel Packages",
        link:''
      },
      {
        name: "Vacation Deals",
        link:''
      },
    ],
  },
];


export const footerContact = [
  {
    icon: <i className="fa fa-map-marker-alt me-3"></i>,
    name: "TravelBookingCA, 456 Dublin Road, Dublin, Ireland",
  },
  {
    icon: <i className="fa fa-phone-alt me-3"></i>,
    name: "+353 123 456789",
  },
  {
    icon: <i className="fa fa-envelope me-3"></i>,
    name: "support@travelbookingca.com",
  },
];


export const contact = [
  {
    icon: <i class="fa fa-envelope-open text-primary me-2"></i>,
    title: "Booking",
    email: "booking@travelbookingca.com",
  },
  {
    icon: <i class="fa fa-envelope-open text-primary me-2"></i>,
    title: "Technical Support",
    email: "techsupport@travelbookingca.com",
  },
  {
    icon: <i class="fa fa-envelope-open text-primary me-2"></i>,
    title: "General Inquiries",
    email: "info@travelbookingca.com",
  },
];


export const roomItems = [
  {
    img: "../assets/img/aldinojpg.jpg",
    price: "$110/night Junior Suit",
    name: "Aldino Hotel",
    star: [
      <small class="fa fa-star text-primary"></small>,
      <small class="fa fa-star text-primary"></small>,
      <small class="fa fa-star text-primary"></small>,
      <small class="fa fa-star text-primary"></small>,
      <small class="fa fa-star text-primary"></small>,
    ],
    description:
      "Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem sed diam stet diam sed stet lorem.",
    yellowbtn: "View Detail",
    darkbtn: "book now",
  },

  {
    img: "../assets/img/depps.jpg",
    price: "$200/night Executive Suite",
    name: "Deeps Hostel",
    star: [
      <small class="fa fa-star text-primary"></small>,
      <small class="fa fa-star text-primary"></small>,
      <small class="fa fa-star text-primary"></small>,
      <small class="fa fa-star text-primary"></small>,
      <small class="fa fa-star text-primary"></small>,
    ],
    description:
      "Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem sed diam stet diam sed stet lorem.",
    yellowbtn: "View Detail",
    darkbtn: "book now",
  },
  {
    img: "../assets/img/room-3.jpg",
    price: "$110/night Super Deluxe",
    name: "Gordion Hotel",
    star: [
      <small class="fa fa-star text-primary"></small>,
      <small class="fa fa-star text-primary"></small>,
      <small class="fa fa-star text-primary"></small>,
      <small class="fa fa-star text-primary"></small>,
      <small class="fa fa-star text-primary"></small>,
    ],
    description:
      "Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem sed diam stet diam sed stet lorem.",
    yellowbtn: "View Detail",
    darkbtn: "book now",
  },
];

export const carDetails = [
  {
    img: "../assets/img/car1.jpg",
    name: "Compact Car",
    price: "$45/day",
    star: [
      <small class="fa fa-star text-primary"></small>,
      <small class="fa fa-star text-primary"></small>,
      <small class="fa fa-star text-primary"></small>,
      <small class="fa fa-star text-primary"></small>,
      <small class="fa fa-star text-primary"></small>,
    ],
    description: "Perfect for city driving with excellent fuel efficiency and easy parking.",
    bookNowBtn: "Rent Now",
    detailsBtn: "Details",
  },
  {
    img: "../assets/img/car2.webp",
    name: "SUV",
    price: "$65/day",
    star: [
      <small class="fa fa-star text-primary"></small>,
      <small class="fa fa-star text-primary"></small>,
      <small class="fa fa-star text-primary"></small>,
      <small class="fa fa-star text-primary"></small>,
      <small class="fa fa-star text-primary"></small>,
    ],
    description: "Spacious and comfortable, perfect for family trips and off-road adventures.",
    bookNowBtn: "Rent Now",
    detailsBtn: "Details",
  },
  {
    img: "../assets/img/car3.png",
    name: "Luxury Sedan",
    price: "$95/day",
    star: [
      <small class="fa fa-star text-primary"></small>,
      <small class="fa fa-star text-primary"></small>,
      <small class="fa fa-star text-primary"></small>,
      <small class="fa fa-star text-primary"></small>,
      <small class="fa fa-star text-primary"></small>,
    ],
    description: "Premium features with a smooth ride, ideal for business or special occasions.",
    bookNowBtn: "Rent Now",
    detailsBtn: "Details",
  },
  {
    img: "../assets/img/car4.webp",
    name: "Convertible",
    price: "$120/day",
    star: [
      <small class="fa fa-star text-primary"></small>,
      <small class="fa fa-star text-primary"></small>,
      <small class="fa fa-star text-primary"></small>,
      <small class="fa fa-star text-primary"></small>,
      <small class="fa fa-star text-primary"></small>,
    ],
    description: "Feel the wind as you drive with this stylish convertible, perfect for scenic routes.",
    bookNowBtn: "Rent Now",
    detailsBtn: "Details",
  },
  {
    img: "../assets/img/car5.png",
    name: "Minivan",
    price: "$75/day",
    star: [
      <small class="fa fa-star text-primary"></small>,
      <small class="fa fa-star text-primary"></small>,
      <small class="fa fa-star text-primary"></small>,
      <small class="fa fa-star text-primary"></small>,
      <small class="fa fa-star text-primary"></small>,
    ],
    description: "A great choice for group travel, offering plenty of space and comfort.",
    bookNowBtn: "Rent Now",
    detailsBtn: "Details",
  },
];


export const rentalFeatures = [
  { icon: "🧳", name: "Luggage Space" },
  { icon: "🧑‍✈️", name: "Driver" },
  { icon: "🚗", name: "Automatic" },
  // Add more features...
];


export const flightDetails = [
  {
    img: "../assets/img/melbourne-MEL.webp",
    price: "$350 / 4h",
    name: "Colombo to Melbourne",
    duration:'11/01/2024-11/07/2024',
    logo:"../assets/img/airline.jpg",
    description:
      "Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem sed diam stet diam sed stet lorem.",
    yellowbtn: "View Detail",
    darkbtn: "book now",
  },
  {
    img: "../assets/img/dubai-DXB.webp",
    price: "$490 / 6h",
    name: "Colombo to Dubai",
    duration:'10/24/2024-11/03/2024',
    logo:"../assets/img/airline.jpg",
    description:
      "Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem sed diam stet diam sed stet lorem.",
    yellowbtn: "View Detail",
    darkbtn: "book now",
  },
  {
    img: "../assets/img/bangkok-BKK.webp",
    price: "$350 / 4h",
    name: "Colombo to Bangkok",
    duration:'11/18/2024-11/23/2024',
    logo:"../assets/img/airline.jpg",
    description:
      "Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem sed diam stet diam sed stet lorem.",
    yellowbtn: "View Detail",
    darkbtn: "book now",
  },

  {
    img: "../assets/img/chennai-MAA.webp",
    price: "$350 / 4h",
    name: "Colombo to Chennai",
    duration:'11/14/2024-11/18/2024',
    logo:"../assets/img/airline.jpg",
    description:
      "Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem sed diam stet diam sed stet lorem.",
    yellowbtn: "View Detail",
    darkbtn: "book now",
  },
  {
    img: "../assets/img/male-MLE.webp",
    price: "$350 / 4h",
    name: "Colombo to Male",
    duration:'11/21/2024-11/26/2024',
    logo:"../assets/img/airline.jpg",
    description:
      "Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem sed diam stet diam sed stet lorem.",
    yellowbtn: "View Detail",
    darkbtn: "book now",
  },
];

export const facility = [
  {
    icon: <i class="fa fa-bed text-primary me-2"></i>,
    quantity: 3,
    facility: "bed",
  },
  {
    icon: <i class="fa fa-bath text-primary me-2"></i>,
    quantity: 2,
    facility: "bath",
  },
  {
    icon: <i class="fa fa-wifi text-primary me-2"></i>,
    facility: "Wifi",
  },
];
