// controller
module.exports.home_get = (req, res) => {
    res.render('index', { title: 'Home'});
};

module.exports.addProdukt_get = (req, res) => {
    res.render('addProdukt', { title: 'Legg til produkt' })
};