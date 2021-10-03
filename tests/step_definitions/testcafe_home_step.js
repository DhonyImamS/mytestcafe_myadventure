import { Given, When, Then } from '@cucumber/cucumber';
import HomeTestCafePage from '../../page-object/home_testcafe';

Given(/^User has navigated into Web Testcafe$/, async (t) => {
    // await t.navigateTo(`https://devexpress.github.io/testcafe/example/`);
    await HomeTestCafePage.navigate(t);
});