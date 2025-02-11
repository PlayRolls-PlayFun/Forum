const Stripe = require('stripe');
const stripe = Stripe('sk_test_51QrOV9FTonGe4pKWVF3dFRCjMgtU8axgN6i1R7gaqHxmXdjGcUETi4O7pHAJoVduGyNpkFDiZMshKK58Zuk4iIu3005ZPk0AoI'); // Замените на ваш Secret Key

exports.handler = async (event) => {
    const { amount, currency, fullname } = JSON.parse(event.body);

    const session = await stripe.checkout.sessions.create({
        payment_method_types: ['card'],
        line_items: [{
            price_data: {
                currency: currency,
                product_data: {
                    name: 'Пополнение баланса',
                },
                unit_amount: amount,
            },
            quantity: 1,
        }],
        mode: 'payment',
        success_url: 'https://your-site.netlify.app/success.html', // Укажите ваш URL
        cancel_url: 'https://your-site.netlify.app/cancel.html', // Укажите ваш URL
        metadata: {
            fullname: fullname,
        },
    });

    return {
        statusCode: 200,
        body: JSON.stringify({ id: session.id }),
    };
};