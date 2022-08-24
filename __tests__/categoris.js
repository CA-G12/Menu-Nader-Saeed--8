const buildDB = require('../src/database/buildDB/index');

const connection = require('../src/database/config/connection');

const category = require('../src/database/queries/category');

beforeEach(()=>{
    return buildDB();
});
test('edit category test',()=>{
    expect(1).toBe(1);
})