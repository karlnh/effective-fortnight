const usernames = [
    "catchable7444",
    "comment6145",
    "wildly3845",
    "thaw8153",
    "molecular0914",
    "plural7060",
];

const emails = [
    "nearness@imagines.org",
    "fencing@turtle.io",
    "reversing@giggling.net",
    "purity@imagines.gov",
    "viability@turtle.cern",
   "squatter@diameter.cafe"
];

const thoughts = [
    "Hello world",
    "Testing my thought here",
    "E Pluribus Unum?",
    "The ship has set sail",
    "KitKat Dark King Size Net Wt 3 Oz",
    "Count one sand grain",
    "The .mil TLD is limited to divisions, services and agencies of the United States Department of Defense.",
    "Hunan style beef stir fry",
    "Adrian Hastings criticised the modernist interpretations of Anderson and another Marxist historian, Eric Hobsbawm for restricting the emergence of nationalism to the modern period and the eighteenth century as ignoring the national feelings of the medieval period and the framework for national coexistence within the Bible and Christian theology.",
    "Check out music when you got the chance",
    "Check out Fuller, Michael A. (2004) An Introduction to Literary Chinese (Revised Edition)",
    "Are you gonna eat that"
];

const reactions = [
    "Horrible post",
    "This was fantastic!",
    "Thank you for posting this.",
    "What's up youtube",
    "Good evening to everyone except whoever posted this.",
    "Good morning to whoever posted this only."
];

const getRandomArrItem = (arr) => arr[Math.floor(Math.random() * arr.length)];

const getRandomUsername = () => {
    `${getRandomArrItem(usernames)}`;
};

const getRandomEmail = () => {
    `${getRandomArrItem(emails)}`;
};

const getRandomThoughts = () => {
    `${getRandomArrItem(thoughts)}`;
};

module.exports = { getRandomUsername, getRandomEmail, getRandomThoughts };