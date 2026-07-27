//*async

//*SetTimeout ->
//settimeout(callback,timeout,arguments )
// console.log("start");
// setTimeout(() => {
//   console.log("processing");
// }, 2000);
// console.log("end");

//* Clear timeout
// for clear timeout or to cancel the setimeout time
// in this code it doesnt wait for processing it cancels schedule
//ask for id
// console.log("start");
// const timer_id = setTimeout(() => {
//   console.log("processing");
// }, 2000);

// clearTimeout(timer_id);
// console.log("end");

//* with arguments
// console.log("start");
// const timer_id = setTimeout(
//   (name) => {
//     console.log("processing", name);
//   },
//   2000,
//   "john",
// );

// console.log(timer_id);
// console.log("end");

// settimeout(callback, timeout, arguments);
// console.log("start");
// setTimeout(() => {
//   console.log("processing");
//   setTimeout(() => {
//     console.log("procssing");
//   }, 4000);
// }, 2000);
// console.log("end");

//* SetInterval
// apply loop of 1 sec before processing to printing everytime fir 1 sec 1000 =ms, 2sec =2000ms
// console.log("start");
// setInterval(
//   (a, b) => {
//     console.log("interval", a + b);
//   },
//   1000,
//   2,
//   3,
// );
// console.log("end");
// // example 2
// let i = 1;
// const id = setInterval(() => {
//   i += 1;
//   console.log(i);
// }, 2000);

// console.log("end");
// // example 2 // prints upto 10
// let i = 10;
// const id = setInterval((seconds) => {
//   console.log(i);
//   if (i === 1) {
//     clearInterval(id);
//   }
//   i -= 1;
//   //   console.log(i);
// }, 2000);

// console.log(id);

// const countDow = (seconds) => {
//   setInterval(() => {
//format
//decremnt
//interval
//     const hours = Math.floor(Seconds / 3600);
//     const min = Math.floor(seconds / 3600 / 60);
//     const second = seconds % 60;

//     const hh = String(hours).padStart(2, "0");
//   });
// };

//! Day2
const login = (callback) => {
  console.log("Login start");
  setTimeout(() => {
    const error = false;
    console.log("Login success");
    const user = { _id: 1, email: "john@gail.com", role: "user" };
    if (error) {
      callback({ message: "login failed" });
    } else {
      callback(null, user);
    }
  }, 3000);
};
// console.log("start");
// login();
// console.log("end");

const getPosts = (userId, callback) => {
  console.log("post start");

  setTimeout(() => {
    console.log("post finished");
    const users = [
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
    // callback(null, users);
    callback({ message: "login failed" });
  }, 2000);
};

const getComment = (postId, callback) => {
  console.log("post start");

  setTimeout(() => {
    console.log("post finished");
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
    // callback(null, users);
    callback({ message: "login failed" });
  }, 2000);
};

login((error, user) => {
  if (error) {
    console.log(error);
    return;
  }
  console.log("login sucess");
  console.log(user);

  getPosts(user._id, (error, users) => {
    if (error) {
      console.log(error);
      return;
    }
    console.log("pOst fetched");
    console.log(users);

    getComment(10, (error, comment) => {
      if (error) {
        console.log(error);
        return;
      }
      console.log("comments fetched");
      console.log(comments);
    });
  });
});

// todo: revise callback function and do above question practice
