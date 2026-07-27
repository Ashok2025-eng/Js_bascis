//* Promise
// it is an object which represent data coming from future which may be complete or fail
//! To create Promise
// to call promise  = new Promise()
// const promise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     let error = false;
//     if (error) {
//       reject({ message: failed });
//     } else {
//       resolve({ message: "success" });
//     }
//   }, 2000);
// });
// console.log(promise);

const { useReducer } = require("react");

//!Data going from pending to fulfilled or reject state=handling Promise
//then function only used for success state whereas catch use for reject
// console.log("start");
// promise
//   .then((data) => {
//     console.log("fulfilled"); //.then only for success state or fulfilled
//     console.log(data);
//   })
//   .catch((error) => {
//     console.log("rejected"); //.catch only for reject state
//     console.log(error);
//   })
//   .finally(() => {
//     console.log("finally");
//   });
// console.log("end");

//! UserLogin promise handle

const userLogin = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const error = false;
      let user = { _id: 1, email: "john@gmail.com", role: "user" };
      if (error) {
        reject({ message: "failed" });
      } else {
        resolve(user);
      }
    }, 2000);
  });
};

const postUser = (userId) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const error = false;
      let users = [
        {
          _id: 1,
          userid: userId,
          email: "john@gmail.com",
          title: "post1",
        },
        {
          _id: 2,
          userid: userId,
          email: "ashok123@gmail.com",
          title: "title2",
        },
      ];
      if (error) {
        reject({ message: "fetch unsuccess" });
      } else {
        resolve(users);
      }
    }, 3000);
  });
};

const getComment = (postId) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const error = false;
      const comments = [
        {
          _id: 1,
          userid: 1,
          postId,
          email: "john@gmail.com",
          title: "post1",
        },
        {
          _id: 2,
          userid: 2,
          postId,
          email: "ashok123@gmail.com",
          title: "title2",
        },
      ];
      if (error) {
        reject({ message: "failed" });
      } else {
        resolve(comments);
      }
    }, 4000);
  });
};
//!handling Promise

// userLogin()
//   .then((user) => {
//     console.log("login sucess");
//     console.log(user);
//   })
//   .catch((error) => {
//     console.log(error);
//   });

// postUser()
//   .then((users) => {
//     console.log("fetch successful");
//     console.log(users);
//   })
//   .catch((error) => {
//     console.log(error);
//   });
// getComment(10)
//   .then((comments) => {
//     console.log("fetch successful");
//     console.log(comments);
//   })
//   .catch((error) => {
//     console.log(error);
//   });

//!to make above independent functioon code into dependent functions which is called
//* Promise Chain
// userLogin()
//   .then((user) => {
//     console.log("login sucess");
//     console.log(user);
//     return postUser(user._id);
//   })
//   .then((users) => {
//     console.log("success");
//     console.log(users);
//     return getComment(users[0]._id);
//   })
//   .then((comments) => {
//     console.log("success");
//     console.log(comments);
//   })
//   .catch((error) => {
//     console.log(error);
//   });

//! Fetch to send https it isa calling function
// fetch("https://jsonplaceholder.typicode.com/users")
//   .then((response) => {
//     // console.log(response);
//     return response.json();
//   })
//   .then((users) => {
//     console.log(users);
//   })
//   .catch((error) => {
//     console.log(error);
//   });

//! async await

//* async function
// const fetchData = async()=>{
//   const user = await userLogin();
//   console.log(user)
//   const posts = await postUser(user.id);
//   console.log(posts)
//   const comments = await getComment(posts[0]._id);
//    console.log(comments)
// };
// console.log("start")
//   fetchData();
//   console.log("end")

//* TRY AND CATCH

// const fetchData = async () => {
//   try {
//     const user = await userLogin();
//     console.log(user);
//     const posts = await postUser(user.id);
//     console.log(posts);
//     const comments = await getComment(posts[0]._id);
//     console.log(comments);
//   } catch (error) {
//     console.log(error);
//   } finally {
//     console.log("finally");
//   }
// };
// console.log("start");
// fetchData();
// console.log("end");

const fetchUser = async () => {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");

    const user = await response.json();
    console.log(user);
  } catch (error) {
    console.log(error);
  } finally {
    console.log("finally");
  }
};
fetchUser();

//* ES => Ecma Script
// let const
// template literal
// arrow function
// default paramter
// rest operator and parameter
// destructring
// spred op
// Map,filter,Reduce
// class
// promise/async await
// enhanced boject literal
// hello ashok

//hello
