// controller
module.exports.home_get = (req, res) => {
    res.render('index', { title: 'Hjem'});
};

module.exports.login_get = (req, res) => {
    res.render('login', { title: 'Logg inn' });
};

module.exports.addProdukt_get = (req, res) => {
    res.render('addProdukt', { title: 'Legg til produkt' })
};