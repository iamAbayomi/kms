/* eslint-disable no-console */

exports.createTransport = (nodemailer, emailContent, res) => {
  const transport = nodemailer.createTransport({
    host: 'mail.privateemail.com',
    port: 465,
    secure: true,
    auth: {
      user: 'contact@spiinge.com',
      pass: 'ganibayomi4'
    },
    tls: {
      rejectUnauthorized: false
    }
  })
  verifyTransport(transport, emailContent, res)
}

function verifyTransport (transport, emailContent, res) {
  transport.verify(function (error, success) {
    if (error) {
      console.log('Error here')
      console.log(error)
    } else {
      console.log('Server is ready to take our messages')
    }
  })
  const mailOptions = {
    from: '"Spiinge" contact@spiinge.com',
    to: emailContent.email,
    subject: emailContent.subject,
    text: emailContent.text
  }
  sendMail(transport, mailOptions, res)
}

function sendMail (transport, mailOptions, res) {
  transport.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log('Error at send mail')
      return console.log(error)
    }
    res.send({
      message: 'Email Sent',
      response: info.response
    })
    console.log('Email sent: ' + info)
  })
}
