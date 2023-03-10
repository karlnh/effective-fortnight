const { Schema, Model } = require('mongoose');

const userSchema = new Schema(
    {
        username: {
            type: String,
            unique: true,
            required: true,
            trim: true,
            lowercase: true,
        },
        email: {
            type: String,
            unique: true,
            required: true,
            trim: true,
            lowercase: true,
            // https://stackoverflow.com/questions/9238640/how-long-can-a-tld-possibly-be
            // https://mongoosejs.com/docs/validation.html#custom-validators
            validate: {
                validator: function(v) {
                    return /^([\w\.-]+)@([\w\.-]+)\.([\w\.]{2,63})$/.test(v);
                },
                message: email => `${email} is not a valid email!`
            },
        },
        thoughts: [thoughtSchema],
        friends: [userSchema],
    },
    {
        toJSON: {
            getters: true,
            virtuals: true,
        },
        // id: false,
        // can't tell if this line will ruin the friends: [userSchema] list.
        // keeping it off since it seems to only turn off the .id getter.
    }
);

userSchema.virtual('friendCount')
    .get(function() {
        return this.friends.length;
    });

const User = Model('user', userSchema);

module.exports = User;