const { Schema, model } = require('mongoose');
const Reaction = require('./Reaction');

const thoughtSchema = new Schema(
    {
        thoughtText: {
            type: String,
            required: true,
            minlength: 1,
            maxlength: 280,
        },
        createdAt: {
            type: Date,
            default: Date.now,
        },
        username: {
            type: String,
            required: true,
        },
        reactions: [Reaction],
    },
    {
        toJSON: {
            getters: true,
            virtuals: true,
        }
    }
);

thoughtSchema.virtual('reactionCount')
    .get(function() {
        return this.reactions.length;
});

// thoughtSchema.pre('save', function() {
//     thoughtSchema.set(v => {
//         const year = v.substring(0, 3);
//         const month = v.substring(5, 6);
//         const day = v.substring(8, 9);
//         const time = v.substring(10, 14);
//         const formattedTime = `${month}/${day}/${year} at ${time}`;
//         this.set({ createdAt: formattedTime });
//     });
// });


const Thought = model('thought', thoughtSchema);

module.exports = Thought;