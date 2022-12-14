const { Schema, model } = require('mongoose');
const birthdaySchema = new Schema({
    discordId: {
        type: String,
        required: true
    },
    month: {
        type: Number,
        required: true
    },
    day: {
        type: Number,
        required: true
    },
    celebrateBefore: {
        type: Boolean,
        required: false,
    },
    resets: {
        type: Number,
        required: true,
    }
});

module.exports = model('birthday', birthdaySchema, 'birthdays');
