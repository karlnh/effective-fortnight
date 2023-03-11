const { Schema, model } = require('mongoose');

const userSchema = new Schema(
    {
        username: {
            type: String,
            unique: true, // username must be unique
            required: true,
            trim: true,
            lowercase: true,
        },
        email: {
            type: String,
            required: true,
            unique: true,
            // Must match a valid email address (look into Mongoose's matching validation)
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

userSchema.virtual('friends')
    .get(function() {
        // Create a virtual called friendCount that retrieves the length of the user's friends array field on query.
        return this.length;
    });

const User = model ('user', userSchema);

module.exports = User;