import { Selector, t } from 'testcafe';

fixture `Example Testcafe`
    .page `http://devexpress.github.io/testcafe/example`;

test('Test to tick Checkbox Support for testing on remote devices', async t => {
    // Find Elements 
    let element = Selector('input[type="checkbox"][name="remote"]');

    // Try to tick the checkbox
    await t.click(element);

});

test('Test to Type Username into Field Yourname', async t => {
    // Find Elements 
    let element = Selector('input[type="text"][name="name"]');

    // Try to type into text field
    await t.typeText(element, "Dhony Imam Saputra");

    // Assert Value
    await t.expect(element.value).eql("Dhony Imam Saputra", "Input yang tertulis tidak sesuai")

});


test('Test to Choose Option Value in DropDown List', async t => {
    // Find Elements 
    let elementDropDownList = Selector('select[name="preferred-interface"]');
    let elementDropDownOptions = Selector('select[name="preferred-interface"]').find('option');

    // Try to click DropDown Element
    await t.click(elementDropDownList);

    // Try to select DropDown Value
    await t.click(elementDropDownOptions.withText("Both"));

    // Assert Value DropDown Equal to Previous Selected Option
    await t.expect(elementDropDownList.value).eql("Both", "Value yg di set di DropDown itu tidak sesuai");  
});