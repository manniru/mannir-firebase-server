var FirebaseServer = require('firebase-server');
new FirebaseServer(5000, 'local.firebaseio.com:5000', {
    states: {
        AL: 'Alabama',
        CA: 'California',
        KY: 'Kentucky'
    },
    users: {
      name: 'Mannir1'
    }
});
