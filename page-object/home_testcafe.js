import { Selector, t } from 'testcafe';
class HomeTestCafePage {
    constructor () {
        this.elementCheckbox = Selector('input[type="checkbox"][name="remote"]');
        this.elementYourName = Selector('input[type="text"][name="name"]');
        this.elementDropDownList = Selector('select[name="preferred-interface"]');
    }

    async navigate() {
        await t.navigateTo(`http://devexpress.github.io/testcafe/example`);
    }

    async clickCheckbox() {
        await t.click(this.elementCheckbox);
    }

    async typeTextFieldYourName(inputText) {
        await t.typeText(this.elementYourName, inputText);
    }

    async chooseOptionDropDown(input) {
        const optionsElement = this.elementDropDownList.find('option');
        await t.click(this.elementDropDownList);
        await t.click(optionsElement.withText(input));
    }

    async assertionValue(sourceElement, expected) {
        await t.expect(sourceElement.value).eql(expected, 'Value yg di set di DropDown itu tidak sesuai');
    }
}

export default new HomeTestCafePage();