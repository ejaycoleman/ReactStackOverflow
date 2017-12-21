const channels = [{
  id: 1,
  name: 'soccer',
}, {
  id: 2,
  name: 'baseball',
  text: 'beans',
}];

let nextId = 3;

const comments = [
  {
  id: 1,
  postID: 1,
  information: 'really good!',
}, {
  id: 2,
  postID: 2,
  information: 'its ok',
}];

let nextId = 3;
let nextCommentId = 3;

export const resolvers = {
  Query: {
    channels: () => {
      return channels;
    },
    channel: (root, { id }) => {
      return channels.find(channel => channel.id == id);
    },
    comments: () => {
      return channels;
    },
    comment: (root, { id }) => {
      return comments.find(comment => comment.id == id);
    },
  },
  Mutation: {
    addChannel: (root, args) => {
      const newChannel = { id: nextId++, name: args.name };
      channels.push(newChannel);
      return newChannel;
    },
    addComment: (root, args) => {
      const newComment = { id: nextCommentId++, postID: args.postID, information: args.commentText };
      comments.push(newComment);
      return newComment;
    },
  },
};
