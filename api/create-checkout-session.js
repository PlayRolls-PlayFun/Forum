const Stripe = require('stripe');
const stripe = Stripe('sk_test_51QrOV9FTonGe4pKWVF3dFRCjMgtU8axgN6i1R7gaqHxmXdjGcUETi4O7pHAJoVduGyNpkFDiZMshKK58Zuk4iIu3005ZPk0AoI'); // Ваш Secret Key

module.exports = async (req, res) => {
    const { amount, currency, fullname } = req.body;

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
        success_url: 'https://your-website.com/success', // URL после успешной оплаты
        cancel_url: 'https://your-website.com/cancel', // URL при отмене
        metadata: {
            fullname: fullname,
        },
    });

    res.json({ id: session.id });
};