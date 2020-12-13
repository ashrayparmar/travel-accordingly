import React, { useState } from "react";
import "./styles.css";

var database = {
  Random: [
    {
      name: "Shimla",
      itinerary:
        "Visit the Shimla Museum, Ridge Maidan, Viceroy Lodge, Mall Road, and Christ Church. Admire the amazing beauty of the region and visit Kufri to enjoy the majestic snowfall. The Ridge. Situated along the Mall Road, The Ridge witnesses the maximum crowd in Shimla due to its prime location, bustling shops and the mesmerising views of the snow-capped mountain ranges",
      image:
        "https://k6u8v6y8.stackpathcdn.com/blog/wp-content/uploads/2015/11/things-to-do-on-a-family-vacation-in-shimla.png"
    },
    {
      name: "Darjelling",
      itinerary:
        "Early Morning drive to Tiger hill to watch the spectacular sunrise over Mt. Khangchendzongha (28,208 ft. Worlds 3rd highest peak), on your way back visit Ghoom Monastery and Batasia Loop. After breakfast visit Himalayan Mountaineering Institute, P.N. Zoological Park , Tenzing Rock, Tibetan Refugee self-help Centre , Tea Garden and Japanese Temple. Evening free for shopping or leisure. Overnight stay at Darjeeling.",
      image:
        "https://img.traveltriangle.com/blog/wp-content/uploads/2018/07/darjeeling-rain-clouds-sunset.jpg"
    }
  ],

  Beaches: [
    {
      name: "Goa",
      itinerary:
        "If you have just 3 days in Goa, plan for half a day sightseeing and indulge in beach hopping. Visit Calangute, Baga, Candolim, Colva, Agonda and Palolem beach and enjoy the natural beauty, happening crowd, beach shacks, and water adventure.",
      image:
        "https://img.traveltriangle.com/blog/wp-content/tr:w-700,h-400/uploads/2018/04/beach-goa-shutterstock_181936859.jpg"
    },

    {
      name: "Pondicherry",
      itinerary:
        "Arikamedu, This is a 19th-century archeological site that has remains of pillars and arches. The Pondicherry Botanical Garden: This is a centuries-old garden that was built during the French colonization in Pondicherry.Auroville Beach: This place is among the most hyped attractions for its privacy and solace. The Old Lighthouse: This is a 19th-century lighthouse built by the French rulers to help guide the incoming ships at the Port.",
      image:
        "https://images.thrillophilia.com/image/upload/s--uXFZNTfN--/c_fill,dpr_1.0,f_auto,fl_strip_profile,g_center,h_450,q_auto,w_753/v1/images/photos/000/126/242/original/1568439089_shutterstock_1430692808.jpg.jpg"
    }
  ],

  Mountain: [
    {
      name: "Leh Ladakh",
      itinerary:
        "Leh Old Town. Leh Old Town. Visit the Monasteries. Thiksey Monastery, Leh. Adventure Sports at Hunder Valley. Hunter in Nubra Valley is fantastic for trekking. Camping at Nubra Valley. Pangong Lake. Trek to the Zanskar Valley.",
      image:
        "https://res.cloudinary.com/dwzmsvp7f/image/fetch/q_75,f_auto,w_1316/https%3A%2F%2Fmedia.insider.in%2Fimage%2Fupload%2Fc_crop%2Cg_custom%2Fv1581685165%2Fs4ttjwmxzht5gemp4c4x.jpg"
    },
    {
      name: "Darjelling",
      itinerary:
        "Early Morning drive to Tiger hill to watch the spectacular sunrise over Mt. Khangchendzongha (28,208 ft. Worlds 3rd highest peak), on your way back visit Ghoom Monastery and Batasia Loop. After breakfast visit Himalayan Mountaineering Institute, P.N. Zoological Park , Tenzing Rock, Tibetan Refugee self-help Centre , Tea Garden and Japanese Temple. Evening free for shopping or leisure. Overnight stay at Darjeeling.",
      image:
        "https://img.traveltriangle.com/blog/wp-content/uploads/2018/07/darjeeling-rain-clouds-sunset.jpg"
    }
  ],

  Religious: [
    {
      name: "Kedarnarth",
      itinerary:
        "Day To Day Travel Guide for your Journey To Kedarnath Dham. Day 0: Reach to Rishikesh. Day 1: Rishikesh To Sonprayag or Gaurikund (211 km / 8 hours by road). Bio-metric registration at Sonprayag. Below are the facilities you can found at Sonprayag : Sonprayag to Gaurikund shuttle service & night stay at Gaurikund, Last and the least you'll reacht the beautiful place Kedarnath.",
      image:
        "https://thumbs.dreamstime.com/b/kedarnath-india-temple-hindu-temple-dedicated-to-god-shiva-garhwal-himalayan-range-uttarakhand-state-68148217.jpg"
    },
    {
      name: "Golden Temple",
      itinerary:
        "Visit the Golden Temple: The Golden Temple is one of the esteemed destinations of Amritsar. Experience the Patriotism at Wagah Border: Wagah Border is the dividing line, known as Radcliffe Line, between India and Pakistan, and is situated at Grand Trunk Road that is close to Attari Village. Pay Tribute at Jallianwala Bagh: Jallianwala Bagh is the evidence of atrocities caused by the British army on Indian people.",
      image:
        "https://www.holidify.com/images/cmsuploads/compressed/shutterstock_479585620_20191024174904_20200407155734.jpg"
    }
  ]
};

var location = Object.keys(database);

export default function App() {
  var [selectedPlace, setPlace] = useState("Random");

  var meaning = database[selectedPlace];

  function clickHandler(place) {
    setPlace(place);
  }

  return (
    <body>
      <div className="App">
        <h1>
          Travel <span style={{ color: "red" }}>Accordingly</span>
        </h1>

        <hr
          style={{
            width: "70%",
            backgroundColor: "black",
            border: "2px solid black"
          }}
        />

        <div className="button">
          {location.map(function (place) {
            return <button onClick={() => clickHandler(place)}>{place}</button>;
          })}

          <div className="output">
            <ul>
              {meaning.map((place) => (
                <li key={place.name} className="list">
                  <div>
                    <div className="name">Name: {place.name}</div>
                    <img className="img" src={place.image} alt="City" />

                    <div className="itinerary">
                      <span style={{ fontWeight: "bold", fontSize: "1.5rem" }}>
                        Itinerary:{" "}
                      </span>{" "}
                      {place.itinerary}
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </body>
  );
}
