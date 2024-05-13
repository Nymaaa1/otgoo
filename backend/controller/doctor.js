const knex = require('knex')(require("../knex"));

const getDoctors = async (req, res) => {
    try {
        const astrodata = await knex('doctor').select('*');
        res.status(200).json({ data: astrodata, message: "Амжилттай", status: "success" });
    } catch (e) {
        res.status(500).json({ message: e, status: "error" });
    }
};

const setDoctor = async (req, res) => {
    try {
        const body = req.body;
        await knex('doctor').insert({
            name: body.name,
            age: body.age,
            type: body.type,
            ih: body.ih,
            about: body.about,
            imageUrl : "https://as2.ftcdn.net/v2/jpg/02/60/04/09/1000_F_260040900_oO6YW1sHTnKxby4GcjCvtypUCWjnQRg5.jpg"
        });
        res.status(200).json({ message: "Амжилттай", status: "success" });
    } catch (e) {
        console.log(e);
        res.status(500).json({ message: e, status: "error" });
    }
};

module.exports = {
    getDoctors,
    setDoctor,
};
