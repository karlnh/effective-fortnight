const connection = require('../config/connection');
const { User, Thought } = require('../models');
const { getRandomThoughts, getRandomUsername, getRandomEmail } = require('./data')

connection.on("error", (err) => err);

connection.once("open", async () => {
    console.log("connected");
    await Thought.deleteMany({});
    await User.deleteMany({});

    const users = [];

    users.push(
    {
        username: "catchable7444",
        email: "nearness@imagines.org",
        thoughts: "Hello world",
    },
    {
        username: "comment6145",
        email: "fencing@turtle.io",
        thoughts: "Hunan style beef stir fry",
    },
    {
        username: "wildly3845",
        email: "reversing@giggling.net",
        thoughts: "Are you gonna eat that",
    },
    {
        username: "thaw8153",
        email: "purity@imagines.gov",
        thoughts: "The ship has set sail",
    },
    {
        username: "molecular0914",
        email: "viability@turtle.cern",
        thoughts: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
    },
    {
        username: "plural7060",
        email: "squatter@diameter.cafe",
        thoughts: "KitKat Dark King Size Net Wt 3 Oz",
    },
);

    await User.collection.insertMany(users);

    console.table(users);
    console.info("Seeding complete");
    process.exit(0);
});