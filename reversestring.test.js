const reversestring = require('./reversestring');
test('reversestring function exists',() =>
{
    expect(reversestring).toBeDefined();
});
test('String reverse', () =>
{
    expect(reversestring('hello')).toEqual('olleh');
});
test('String reverse', () =>
{
    expect(reversestring('Hello')).toEqual('olleh');
});