
const ApiUrl = 'https://api.coincap.io/v2/assets/bitcoin';

fetch(ApiUrl)
  .then(response => {
    if (!response.ok) {
      throw new Error('Erro na solicitação da API');
    }
    return response.json();
  })
  .then(data => {
    const id = data.data.id;
    const name = data.data.name;
    const symbol = data.data.symbol;
    const rank = data.data.rank;
    const priceUsd = data.data.priceUsd;

        if (priceUsd < 25565.39) {

            const nodemailer = require('nodemailer');

            const transporter = nodemailer.createTransport({
                host: 'smtp.office365.com',
                port: 587,
                secure: false,
                auth: {
                    user: "alertabitcoincap@outlook.com",
                    pass:"Matrix1324##"
                },
                tls: {
                    rejectUnauthorized: false,
                },
            });
            
            async function run(){
                const mailSent = await transporter.sendMail({
                    text: 'Alerta cotação Bitcoin',
                    subject: 'Alerta cotação Bitcoin',
                    from: 'alertabitcoincap@outlook.com',
                    to: ['raul_corrales@outlook.com']
                });
            
                console.log(mailSent);
            }
            
            run();

        }


  })
  .catch(error => {
    console.error('Ocorreu um erro:', error);
  });
