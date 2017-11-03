var router = require('express').Router();
var assign = require('object-assign');

var mocks = require('./mock');

router.get('/user', function (req, res, next) {
    var entities = mocks.users.map(function (entity) {
            return assign({}, entity, {
                text: undefined
            })
        }),
        limit = Number(req.query.limit) || entities.length,
        offset = Number(req.query.offset) || 0;

    res.json(entities.slice(offset, limit + offset))
});
router.get('/user/securityScore', function (req, res, next) {
    var entities = mocks.userSecurityScore.map(function (entity) {
            return assign({}, entity, {
                text: undefined
            })
        }),
        limit = Number(req.query.limit) || entities.length,
        offset = Number(req.query.offset) || 0;

    res.json(entities.slice(offset, limit + offset))
});
router.get('/user/notifications', function (req, res, next) {
    var entities = mocks.userNotifications.map(function (entity) {
            return assign({}, entity, {
                text: undefined
            })
        }),
        limit = Number(req.query.limit) || entities.length,
        offset = Number(req.query.offset) || 0;

    res.json(entities.slice(offset, limit + offset))
});
router.get('/user/devices', function (req, res, next) {
    var entities = mocks.userDevices.map(function (entity) {
            return assign({}, entity, {
                text: undefined
            })
        }),
        limit = Number(req.query.limit) || entities.length,
        offset = Number(req.query.offset) || 0;

    res.json(entities.slice(offset, limit + offset))
});
router.get('/insurance', function (req, res, next) {
    var entities = mocks.insurance.map(function (entity) {
            return assign({}, entity, {
                text: undefined
            })
        }),
        limit = Number(req.query.limit) || entities.length,
        offset = Number(req.query.offset) || 0;

    res.json(entities.slice(offset, limit + offset))
});

router.get('/comment', function (req, res, next) {
    var aid = req.query.article;
    if (aid) {
        var article = mocks.articles.find(function(article) {
            return article.id == aid
        })
        return res.json((article.comments || []).map(function(id) {
            return mocks.comments.find(function(comment) {
                return comment.id == id
            })
        }))
    }

    var limit = Number(req.query.limit) || mocks.comments.length,
        offset = Number(req.query.offset) || 0;
    res.json({
        total: mocks.comments.length,
        records: mocks.comments.slice(offset, limit + offset)
    })
});

router.get('/article/:id', function (req, res, next) {
    var article = mocks.articles.filter(function (article) {
        return article.id == req.params.id
    })[0];
    if (article) return res.json(article);

    res.status(404).json({error: "not found"});
});

router.post('/article', function (req, res, next) {
    var body = req.body;
    var article = {
        text: body.text,
        id: Date.now().toString(),
        user: body.user,
        date: new Date()
    };
    mocks.articles.push(article);
    res.json(article)
});

router.get('/comment', function (req, res, next) {
    var aid = req.query.article;
    if (aid) {
        var article = mocks.articles.find(function(article) {
            return article.id == aid
        })
        return res.json((article.comments || []).map(function(id) {
            return mocks.comments.find(function(comment) {
                return comment.id == id
            })
        }))
    }

    var limit = Number(req.query.limit) || mocks.comments.length,
        offset = Number(req.query.offset) || 0;
    res.json({
        total: mocks.comments.length,
        records: mocks.comments.slice(offset, limit + offset)
    })
});

router.post('/comment', function (req, res, next) {
    var comment = {
        id : Date.now().toString(),
        text : req.body.text,
        date: new Date(),
        user: req.body.user,
        article : req.body.article
    };
    mocks.comments.push(comment);
    res.json(comment)
});

router.post('/report', function (req, res) {
    res.json({})
})

module.exports = router;