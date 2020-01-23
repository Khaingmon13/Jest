const functions = require ('./functions');
beforeAll(() => initDatabase());
afterAll(() => closeDatabase());
const initDatabase = () => console.log('Database Initialized..');
const closeDatabase= () => console.log('Database Closed...');
const nameCheck =() =>console.group('Checking Mame...');
describe('Checking Names',() =>
{
    beforeEach(() => nameCheck());
    test('User is Jeff',() =>{
        const user ='Jeff';
        expect(user).toBe('Jeff');
    });
    test('User is Karen',() =>{
        const user ='Jeff';
        expect(user).toBe('Jeff');
    });
});
test('Adds 2+2 to equal 4',() =>
{
    expect(functions.add(2,2)).toBe(4);
});
//nottobe4
test('Adds 2+2 to Not equal 5',() =>
{
    expect(functions.add(2,2)).not.toBe(5);
});
//tobeNull
test('Should be null',() =>
{
    expect(functions.isNull()).toBeNull();
});
//tobeFalsy
test('should be Falsy',() =>
{
    expect(functions.checkValue(0)).toBeFalsy();
});
//less than and greater than
test('should be under 1600',()=>
{
    const load1 = 800;
    const load2 = 700;
    expect(load1+load2).toBeLessThan(1600);

});
//Regex
test('There is no I in team',() =>
{
    expect('team').not.toMatch(/I/);
});
//Arrays
test('Admin should be in username',() =>
{
    username =['john','karen','admin'];
    expect(username).toContain('admin');
});
//working with asyn data
//Promise
/*test('User fetch name should be Leanne Graham',() =>
{
    expect.assertions(1);
    return functions.fetchUser().then(data =>
        {
            expect(data.name).toEqual('Leanne Graham');
        });
});*/
//Asyn Await
test('User fetch name should be Leanne Graham',async() =>
{
    expect.assertions(1);
    const data = await functions.fetchUser();
    expect(data.name).toEqual('Leanne Graham');
});