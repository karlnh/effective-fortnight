const { Schema, model } = require('mongoose');

const userSchema = new Schema(
    {
        username: {
            type: String,
            required: true,
            unique: true,
            trim: true,
        },
        email: {
            type: String,
            required: true,
            unique: true,
            validate: {
                validator: function(v) {
                    return /^([\w\.-]+)@([\w\.-]+)\.([\w\.]{2,63})$/.test(v);
                },
                message: email => `${email} is not a valid email!`
            },
        },
        thoughts: [
            // Array of _id values referencing the Thought model
            {
                type: Schema.Types.ObjectId,
                ref: 'Thought',
            },
        ], 
        friends: [
            // Array of _id values referencing the User model (self-reference)
            {
                type: Schema.Types.ObjectId,
                ref: 'User',
            },
        ], 
    },
    {
        toJSON: {
            virtuals: true,
        },
    }
);

userSchema.virtual('friendCount')
    .get(function() {
        return this.friends.length;
});

const User = model('user', userSchema);

module.exports = User;