type Event = {
    event: string;
    time: string;
    location: string;
    description: string;
};

export type EventList = {
    date: string;
    events: Event[];
};

export const IndiaEvents: EventList[] = [
    {
        date: "July 12, 2024",
        events: [
            {
                event: "Arrival/Welcome",
                time: "11:00 AM",
                location: "Shawn Elize, Jabalpur",
                description: "",
            },
            {
                event: "Mehndi and Sangeet",
                time: "4:00 PM",
                location: "Shawn Elize, Jabalpur",
                description:
                    "Mehendi, the hindi term for 'henna', is a ceremony wishing the bride good health and prosperity throughout her marriage. Sangeet is a concurrent event filled with singing and dancing while henna is being applied.",
            },
        ],
    },
    {
        date: "July 13, 2024",
        events: [
            {
                event: "Haldi",
                time: "11:00 AM",
                location: "Shawn Elize, Jabalpur",
                description:
                    "Family, relatives and friends come together to apply turmeric paste (haldi) on the bride and groom's face and body.",
            },
            {
                event: "Baraat",
                time: "7:00 PM",
                location: "Shawn Elize, Jabalpur",
                description:
                    "The baraat is a celebratory wedding procession for the groom with live music and dancing.",
            },
            {
                event: "Phere",
                time: "11:00 PM",
                location: "Shawn Elize, Jabalpur",
                description:
                    "The phere is the actual wedding ceremony after which the bride and groom are considered to be husband and wife. They will take seven rounds around a pit of fire and commit to seven different promises.",
            },
        ],
    },

    {
        date: "July 14, 2024",
        events: [
            {
                event: "Pooja for Family",
                time: "11:00 AM",
                location: "Shawn Elize, Jabalpur",
                description: "",
            },
            {
                event: "Day trip to Bhedaghat",
                time: "11:00 AM",
                location: "Bhedaghat",
                description: "",
            },
            {
                event: "Farewell for US attendents",
                time: "7:00 PM",
                location: "Shawn Elize, Jabalpur",
                description: "",
            },
        ],
    }
];

export const HoustonEvents: EventList[] = [
    {
        date: "September 1, 2024",
        events: [
            {
                event: "Photos/Meet and Greet",
                time: "6:00 PM",
                location: "Majestic Oaks, Tomball TX",
                description: "",
            },
            {
                event: "Reception Dinner",
                time: "7:00 PM",
                location: "Majestic Oaks, Tomball TX",
                description: "",
            },
        ],
    },
]