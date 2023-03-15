const connection = require('../config/connection');
const { User, Thought } = require('../models');

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
    },
    {
        username: "comment6145",
        email: "fencing@turtle.io",
    },
    {
        username: "wildly3845",
        email: "reversing@giggling.net",
    },
    {
        username: "thaw8153",
        email: "purity@imagines.gov",
    },
    {
        username: "molecular0914",
        email: "viability@turtle.cern",
    },
    {
        username: "plural7060",
        email: "squatter@diameter.cafe",
    },
);

    await User.collection.insertMany(users);

    console.table(users);
    console.info("Seeding complete");
    process.exit(0);
});