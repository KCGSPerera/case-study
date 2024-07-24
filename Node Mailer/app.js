const nodeMailer =  require('nodemailer');

const html = `
    <h1>Hello World</h1>
    <p>This is the node mailler</p>
`;

async function main(){

    

    const transporter = nodeMailer.createTransport({
        host: 'mail.openjavascript.info',
        port: 465,
        secure: true,
        auth: {
            user: 'test@openjavascript.info',
            pass: 'NodeMailer123!'
        }
    });

    const info = await transporter.sendMail({
        from: 'OpenJavaScript <test@openjavascript.info>',
        to: 'gavithrapay666@gmail.com',
        subject: 'Testing, testing, 123',
        html: html,
    });

    console.log("Message snet: " + info.messageId);
}

main()
.catch(e => console.log(e));