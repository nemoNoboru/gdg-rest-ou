function addPushFeature (app) {
  app.post('/push', function (req, res) {
    app.db.set(req.body.id, {data:req.body.data}, function (err) {
      res.send(err)
    })
  })
}

module.exports = addPushFeature
