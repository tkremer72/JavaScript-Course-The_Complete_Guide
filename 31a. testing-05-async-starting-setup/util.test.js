//jest.mock('./http');
//replace the functions in the http file with the fetch request with the http file in the mock folder 
//This keeps from hitting the API unncessarily.


const { loadTitle } = require('./util');

test('should print an uppercase text', () => {
     loadTitle().then(title => {
          expect(title).toBe('DELECTUS AUT AUTEM');
     });
});