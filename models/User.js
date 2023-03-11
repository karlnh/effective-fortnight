const { Schema, model } = require('mongoose');

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
        id: false,
    }
);

userSchema.virtual('friendCount')
    .get(function() {
        return this.friends.length;
    });

const User = model ('user', userSchema);

module.exports = User;