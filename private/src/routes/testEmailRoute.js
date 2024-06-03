import { sendEmail } from "../util/syncEmail";

export const textEmailRoute = {
    path: '/api/test-email',
    method: 'post',
    handler: async(req, res) => {
        try {
            await sendEmail({
                to: "mkk@gmail.com",
                from: 'hsu@gmail.com',
                subject: 'Does this work',
                text: 'If you\re reading'
            });
            res.sendStatus(200);
        } catch(e) {
            console.log(e);
            res.sendStatus(500);
        }
    } 
}