
// import nodemailer from "nodemailer";

// // create reusable transporter object using the default SMTP transport
// const transporter = nodemailer.createTransport({
//   service: "gmail",
//   host: "smtp.gmail.com",
//   port: 587,
//   secure: false,
//   auth: {
//     user: "MAILID@gmail.com",
//     pass: "YOUR PASSWORD",
//   },
// });
// const message = "Hi there, you were emailed me through nodemailer"
// const options = {
//     from: "TESTING <sender@gmail.com>", // sender address
//     to: "someone@gmail.com", // receiver email
//     subject: "Send email in Node.JS with Nodemailer using Gmail account", // Subject line
//     text: message,
// }


// const SENDMAIL = async (mailDetails, callback) => {
//     try {
//       const info = await transporter.sendMail(mailDetails)
//       callback(info);
//     } catch (error) {
//       console.log(error);
//     } 
//   };

//   export default SENDMAIL;