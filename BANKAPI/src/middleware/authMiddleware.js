/* =======================================================
 *
 * Created by anele on 2020/05/12.
 *
 * @anele_ace
 *
 * from https://github.com/firebase/functions-samples
 *
 * =======================================================
 */


const functions = require('firebase-functions');


module.exports =  validateFirebaseIdToken = async (req, res, next) => {

    functions.logger.log('Check if request is authorized with Firebase ID token');

    if ( (!req.headers.authorization || !req.headers.authorization.startsWith('Bearer ')) ) {
        functions.logger.error(
            'No Firebase ID token was passed as a Bearer token in the Authorization header.',
        );
        res.status(403).send('Unauthorized');

        return;
    }

    let idToken;

    if (req.headers.authorization && req.headers.authorization.startsWith('Bearer ')) {

        functions.logger.log('Found "Authorization" header');
        idToken = req.headers.authorization.split('Bearer ')[1];
    } else {
        res.status(403).send('Unauthorized');
        return;
    }

  try {
      const decodedIdToken = await firestore.auth().verifyIdToken(idToken);
      functions.logger.log('ID Token correctly decoded', decodedIdToken);
      req.user = decodedIdToken;
      next();
      //return;

  } catch (error) {
      functions.logger.error('Error while verifying Firebase ID token:', error);
      res.status(403).send('Unauthorized');
      return;

  }

};