class Email {
  private readonly from: string;
  private readonly to: string;
  private readonly subject: string;
  private readonly body: string;

  constructor(from: string, to: string, subject: string, message: string) {
    this.from = from;
    this.to = to;
    this.subject = subject;
    this.body = message;
  }

  sendEmail(): void {
    console.log(
      `Email sent from ${this.from} to ${this.to} - Subject: ${this.subject}`
    );
    console.log(`Message: ${this.body}`);
  }
}

class EmailPool {
  private static instance: EmailPool;
  private availableEmails: Email[] = [];

  private constructor() {
    for (let i = 0; i < 5; i++) {
      this.availableEmails.push(
        new Email(
          "example@example.com",
          "recipient@example.com",
          "SubjectSample",
          "MessageSample"
        )
      );
    }
  }

  static getInstance(): EmailPool {
    if (!EmailPool.instance) {
      EmailPool.instance = new EmailPool();
    }
    return EmailPool.instance;
  }

  getEmail(): Email | null {
    if (this.availableEmails.length) {
      return this.availableEmails.pop();
    }
    console.log("No more emails available in the pool.");
    return null;
  }

  returnEmail(email: Email): void {
    this.availableEmails.push(email);
  }
}

const emailPool = EmailPool.getInstance();

const email1 = emailPool.getEmail();
email1.sendEmail();
emailPool.returnEmail(email1);

const email2 = emailPool.getEmail();
email2.sendEmail();
emailPool.returnEmail(email2);

const email3 = emailPool.getEmail();
email3.sendEmail();
emailPool.returnEmail(email3);
