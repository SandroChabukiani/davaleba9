const emails = ['test@test.com', 'abcDE123'];

emails.forEach(email => {
    console.log(`Is ${email} a valid email? ${validator.isEmail(email)}`);
});