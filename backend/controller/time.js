const knex = require('knex')(require("../knex"));

const getTime = async (req, res) => {
    try {
        const userData = await knex('time as t')
            .select('t.*', 'd.name as doctor_name')
            .innerJoin('doctor as d', 't.ido', 'd.ido');
        res.status(200).json({ data: userData, message: "Амжилттай", status: "success" });
    } catch (error) {
        res.status(500).json({ message: error, status: "error" });
    }
};


const setTime = async (req, res) => {
    try {
        const body = req.body;
        const [userId] = await knex('time').insert({
            id: body.id,
            ido: body.ido,
            time: body.time,
            day: body.day,
            date: body.date,
        });

        res.status(200).json({ message: "Амжилттай", status: "success" });
    } catch (e) {
        res.status(400).json({ message: e, status: "error" });
    }
};


module.exports = {
    getTime,
    setTime
};
