import HomeTestCafePage from '../page-object/home_testcafe';

fixture `Example Testcafe`
    .page `http://devexpress.github.io/testcafe/example`;

test('Test to tick Checkbox Support for testing on remote devices', async t => {
    await HomeTestCafePage.clickCheckbox();
});

test('Test to Type Username into Field Yourname', async t => {
    await HomeTestCafePage.typeTextFieldYourName('Dhony Imam Saputra');
    await HomeTestCafePage.assertionValue(HomeTestCafePage.elementYourName, 'Dhony Imam Saputra');
});