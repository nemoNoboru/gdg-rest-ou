function addGetterFeature (app) {
  app.get('/:id', function (req, res) {
    app.db.get(req.params.id, function (err, doc) {
      if (err) {
        res.status(404)
      }
      res.send(doc)
    })
  })
}

module.exports = addGetterFeature
