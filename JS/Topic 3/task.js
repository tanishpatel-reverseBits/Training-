// Clone objects safely
const obj = {
  name: "Tanish",
  age: 21,
  address: {
    city: "Ahmedabad",
    pincode: "382350",
  },
};

const newObj = structuredClone(obj);
newObj.address.pincode = "382345";

console.log(obj.address.pincode);
console.log(newObj.address.pincode);

// Transform arrays using map/filter/reduce
array = [1, -2, 3, -4, 10, -100];
const result = array
  .map((ele, index) => ele * index)
  .filter((value) => value >= 0)
  .reduce((acc, cur) => acc + cur, 0);

console.log(result);

// Normalize API response data
const apiResponse = {
  posts: [
    {
      id: 1,
      title: "Hello",
      author: {
        id: 10,
        name: "Tanish",
      },
      comments: [
        {
          id: 100,
          text: "Nice post",
          user: {
            id: 11,
            name: "Rahul",
          },
        },
      ],
    },
  ],
};

const data = apiResponse.posts;

const normalizedData = {
  posts: {},
  users: {},
  comments: {},
};

data.forEach((post) => {
  normalizedData.users[post.author.id] = post.author;
  normalizedData.posts[post.id] = {
    id: post.id,
    title: post.title,
    authorId: post.author.id,
    commentIds: post.comments.map((comment) => comment.id),
  };
  post.comments.forEach((comment) => {
    normalizedData.users[comment.user.id] = comment.user;
    normalizedData.comments[comment.id] = {
      id: comment.id,
      text: comment.text,
      userId: comment.user.id,
    };
  });
});

console.log(normalizedData);
