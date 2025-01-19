const { Schema, model } = require('mongoose');
const Response = require('./Response');

// Schema to create Post model
const thoughtSchema = new Schema(
  {
    createdAt: {
      type: Date,
      default: Date.now,
    },
    advertiserFriendly: {
      type: Boolean,
      default: true,
    },
    responses: [Response],
  },
  {
    toJSON: {
      virtuals: true,
    },
    id: false,
  }
);

// Create a virtual property `responses` that gets the amount of response per video
thoughtSchema
  .virtual('getResponses')
  // Getter
  .get(function () {
    return this.responses.length;
  });

// Initialize our Thought model
const Thought = model('thought', thoughtSchema);

module.exports = Thought;
