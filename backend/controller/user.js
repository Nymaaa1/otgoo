const knex = require('knex')(require("../knex"));

const getFood = async (req, res) => {
    try {
        const { food } = req.body;
        let userData = [];
        if (food === 1) {
            userData = [{
                name: "feunge",
                description: "buevedv",
                imageUrl: "shul",
                price: "6300,7800,9000"
            }, {
                name: "feunge",
                description: "buevedv",
                imageUrl: "shul12",
                price: "6300,7800,9000"
            },
            {
                name: "feunge",
                description: "buevedv",
                imageUrl: "shul15",
                price: "6300,7800,9000"
            },
            {
                name: "feunge",
                description: "buevedv",
                imageUrl: "shul12",
                price: "6300,7800,9000"
            },
            {
                name: "feunge",
                description: "buevedv",
                imageUrl: "shul22",
                price: "6300,7800,9000"
            },
            {
                name: "feunge",
                description: "buevedv",
                imageUrl: "shul18",
                price: "6300,7800,9000"
            },
            {
                name: "feunge",
                description: "buevedv",
                imageUrl: "shul12",
                price: "6300,7800,9000"
            },
            {
                name: "feunge",
                description: "buevedv",
                imageUrl: "shul14",
                price: "6300,7800,9000"
            }]
        } else {
            userData = [{
                name: "feunge",
                description: "buevedv",
                imageUrl: "shul",
                price: "6300,7800,9000"
            }, {
                name: "feunge",
                description: "buevedv",
                imageUrl: "shul12",
                price: "6300,7800,9000"
            },];
        }
        // const userData = await knex('food').where('id', food);
        res.status(200).json({ data: userData, message: "Амжилттай", status: "success" });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: error, status: "error" });
    }
};


const register = async (req, res) => {
    try {
        const body = req.body;
        console.log("here");
        const [userId] = await knex('users').insert({
            isAdmin: false,
            password: body.password,
            email: body.email,
            name: body.name,
            phone: "99784578",
        });
        const newUser = await knex('users').where('id', userId).first();
        res.status(200).json({ data: newUser, message: "Амжилттай", status: "success" });
    } catch (e) {
        console.log("here is get error" + e);
        res.status(400).json({ message: e, status: "error" });
    }
};


module.exports = {
    getFood,
    register
};
