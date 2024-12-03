const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    userId: {
        type: Number,
        required: true,
    },
    name: {
        type: String,
        required: true,
    },
    username: {
        type: String,
        required: true,
    },

    email: {
        type: String,
        required: true,
    },

    role: {
        type: String,
        required: true,
    },

    department: {
        type: String,
        required: false,
    },

    password: {
        type: String,
        required: true
},

    userDocuments: {
        citizenship: {
            type: String,
            required: false,
        },
        passport: {
            type: String,
            required: false,
        },
        license: {
            type: String,
            required: false,
        },
        birthCertificate: {
            type: String,
            required: false,
        },
    },
});

const User = mongoose.model("User", userSchema);
module.exports = User;
