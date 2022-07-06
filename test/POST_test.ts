import {endpoints} from "../endpoints";

export {};
const { I } = inject();
const FormData = require('form-data');
let form:any;

Feature('POST tests');

Before(()  => {
	form = new FormData();
})

Scenario('Verify 200 status code', async () => {
	form.append('number', 1);

	await I.sendPostRequest(endpoints.factorial ,form, form.getHeaders());
	await I.seeResponseCodeIsSuccessful();
});

Scenario('Verify valid returned result - number 1', async () => {
	form.append('number', 1);

	await I.sendPostRequest(endpoints.factorial ,form, form.getHeaders());
	I.seeResponseContainsJson({"answer":1});
});

Scenario('Verify valid returned result - number 0', async () => {
	form.append('number', 0);

	await I.sendPostRequest(endpoints.factorial ,form, form.getHeaders());
	I.seeResponseContainsJson({"answer":1});
});

Scenario('Verify valid returned result - non number', async () => {
	form.append('number', 'abc');

	await I.sendPostRequest(endpoints.factorial ,form, form.getHeaders());
	I.seeResponseCodeIs(500)
});

Scenario('Verify valid returned result - invalid key in form data', async () => {
	form.append('numbers', '123');

	await I.sendPostRequest(endpoints.factorial ,form, form.getHeaders());
	I.seeResponseCodeIs(500)
});
