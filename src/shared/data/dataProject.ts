type DataProject = {
  companyName: string;
  phoneNumbers: string;

  openHours: Day[];

  restaurantPhoto?: string;
};

type Day = {
  day: string;
  time: string;
};

const dataProject: DataProject = {
  companyName: "Asiart Restaurant",
  phoneNumbers: "690 628 540",

  openHours: [
    {
      day: "Poniedziałek",
      time: "nie pracujemy",
    },
    {
      day: "Wtorek",
      time: "11:00–22:00",
    },
    {
      day: "Środa",
      time: "11:00–22:00",
    },
    {
      day: "Czwartek",
      time: "11:00–22:00",
    },
    {
      day: "Piątek",
      time: "12:00–22:00",
    },
    {
      day: "Sobota",
      time: "12:00–22:00",
    },
    {
      day: "Niedziela",
      time: "12:00–22:00",
    },
  ],

  restaurantPhoto: "/imgs/asiart-restaurant.jpg",
};

export default dataProject;
