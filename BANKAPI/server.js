/* =======================================================
 *
 * Created by anele on 2020/05/11.
 *
 * @anele_ace
 *
 * =======================================================
 */

var express         = require('express'),
    path            = require('path'),
    cors            = require('cors'),
    methodOverride  = require('method-override');

// DB Config
const config        = require('./src/config/config');
var corsOptions = { origin: '*', optionsSuccessStatus: 200 };

const authMiddleware =  require("./src/middleware/authMiddleware");


/*
 |--------------------------------------
 | Route Registration
 |--------------------------------------
 */

var testRoute   = require('./src/routes/test'),
	clients		= require('./src/routes/clients'),
	accounts	= require('./src/routes/accounts');


/*
 |--------------------------------------
 | App
 |--------------------------------------
 */
var app = express();
//app.use(authMiddleware);
app.use(express.json());
app.use(cors(corsOptions));
app.use(express.urlencoded({ extended: false }));
app.use(methodOverride('X-HTTP-Method-Override'));

app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Credentials', true);
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Methods', 'POST, GET, PATCH, DELETE, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');

    next();
});

/*
 |--------------------------------------
 | Use Routes
 |--------------------------------------
 */
app.use('/test',	testRoute);
app.use('/clients',	clients);
app.use('/accounts', accounts);


if (process.env.NODE_ENV !== 'dev') {
    app.use('/', express.static(path.join(__dirname, './dist')));
}

app.get('/', function (req, res) {
    res.setHeader('Content-Type', 'application/json');
    res.json({
        name  : "Anele 'ace' M",
        country : "South Africa",
        email     : 'anele@acedesigns.co.za',
        twitter     : '@anele_ace'
    });
});

app.listen( config.port, function () {
    console.log('Server running on localhost:' + config.port);
});

