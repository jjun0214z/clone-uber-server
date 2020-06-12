import Mailgun from "mailgun-js";

const mailGunClient = new Mailgun({
  apiKey: process.env.MAILGUN_API_KEY || "",
  domain: process.env.MAILGUN_DOMAIN || "",
});

const sendEmail = (subject: string, html: string) => {
  // to 현재 유료계정이 아닌관계로 본인메일로 지정 유료계정 전환후 파라미터로 받아서 넘김
  const emailData: Mailgun.messages.SendData = {
    from: "jjun0214z@gmail.com",
    to: "jjun0214z@gmail.com",
    subject,
    html,
  };

  return mailGunClient.messages().send(emailData);
};

export const sendVerificationEmail = (fullname: string, key: string) => {
  const emailSubject = `Hello! ${fullname}, please verify your email`;
  const emailBody = `Berify your email by clicking <a href="http://test-link/verification/${key}"></a>`;
  return sendEmail(emailSubject, emailBody);
};
