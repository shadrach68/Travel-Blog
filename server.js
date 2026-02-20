import express from "express";
import bodyParser from "body-parser";
import axios from "axios";

const app = express();
const port = process.env.PORT || 3000;
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.render("index.ejs");
});
app.get("/about", (req, res) => {
  res.render("aboutus.ejs");
});
app.get("/destination", (req, res) => {
  const destinations = [
    {
      id: 1,
      image: "/images/destination-pic1.png",
      date: "September 16, 2018 - Tips & Tricks",
      title: "Finding Love & Home In Tbilisi, Georgia",
      location: "Georgia",
      comments: 25,
      continent: "Europe",
    },
    {
      id: 2,
      image: "/images/destination-pic2.png",
      date: "September 16, 2018 - Tips & Tricks",
      title: "Have you read the Beach by Alex?",
      location: "Thailand",
      comments: 15,
      continent: "Asia",
    },
    {
      id: 3,
      image: "/images/destination-pic3.png",
      date: "September 16, 2018 - Tips & Tricks",
      title: "The writer actually live in philippines",
      location: "Philippines",
      comments: 13,
      continent: "Asia",
    },
    {
      id: 4,
      image: "/images/destination-pic4.png",
      date: "September 19, 2018 - Tips & Tricks",
      title: "Honestly it's almost ridiculous how",
      location: "USA",
      comments: 52,
      continent: "North America",
    },
    {
      id: 5,
      image: "/images/destination-pic5.png",
      date: "September 20, 2018 - Tips & Tricks",
      title: "The only way to see the islands",
      location: "Brazil",
      comments: 25,
      continent: "South America",
    },
    {
      id: 6,
      image: "/images/destination-pic6.png",
      date: "September 16, 2018 - Tips & Tricks",
      title: "Get away from the maddening crowds",
      location: "Kenya",
      comments: 53,
      continent: "Africa",
    },
    {
      id: 7,
      image: "/images/destination-pic7.png",
      date: "September 16, 2018 - Tips & Tricks",
      title: "Road Trip 101 Things you need to know",
      location: "France",
      comments: 53,
      continent: "Europe",
    },
    {
      id: 8,
      image: "/images/destination-pic8.png",
      date: "September 16, 2018 - Tips & Tricks",
      title: "Beaches And how to enjoy them the most",
      location: "Vietnam",
      comments: 53,
      continent: "Asia",
    },
    {
      id: 9,
      image: "/images/destination-pic9.png",
      date: "September 16, 2018 - Tips & Tricks",
      title: "Going to the Extreme -The Northern Pole",
      location: "Canada",
      comments: 53,
      continent: "North America",
    },
  ];

  const continent = req.query.continent;
  let filteredDestinations = destinations;

  if (continent) {
    filteredDestinations = destinations.filter(
      (dest) => dest.continent === continent,
    );
  }

  res.render("destination.ejs", {
    destinations: filteredDestinations,
    activeContinent: continent,
  });
});
app.get("/tips", (req, res) => {
  res.render("tipspage.ejs");
});
app.get("/contact", (req, res) => {
  res.render("contact.ejs");
});

app.listen(port, () => {
  console.log(`server is running on port ${port}`);
});
