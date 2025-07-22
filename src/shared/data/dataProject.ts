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
  phoneNumbers: "11 2564-7445 | 11 2534-7106",

  openHours: [
    {
      day: "Poniedziałek",
      time: "09:00–23:00",
    },
    {
      day: "Wtorek",
      time: "09:00–23:00",
    },
    {
      day: "Środa",
      time: "09:00–23:00",
    },
    {
      day: "Czwartek",
      time: "09:00–00:00",
    },
    {
      day: "Piątek",
      time: "09:00–02:00",
    },
    {
      day: "Sobota",
      time: "09:00–02:00",
    },
    {
      day: "Niedziela",
      time: "09:00–23:00",
    },
  ],

  restaurantPhoto: "/imgs/asiart-restaurant.jpg",
};

export default dataProject;
