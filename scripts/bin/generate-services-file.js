#!/usr/bin/env node

const PATH = require('path');

const PRICE_FIELDS = [
    'price_start',
    'price_year',
    'price_month'
];

const RELATIVE_PROVIDERS_FILE = 'docs/_data/providers.json';
const RELATIVE_INPUT_FILE = id => `docs/_data/services/${id}.json`;

const PROVIDERS = require(PATH.resolve(__dirname, `../../${RELATIVE_PROVIDERS_FILE}`));

const INPUT = PROVIDERS.map(p => require(PATH.resolve(__dirname, `../../${RELATIVE_INPUT_FILE(p.id)}`)));

const OUTPUT = INPUT.reduce((a, b) => a.concat(b), []).map(service => {

    PRICE_FIELDS.forEach(field => {

        if (service[field] && service[field].sum_vat === undefined) {
            service[field].sum_vat = Math.round(service[field].sum * ( 1 + service[field].vat ) * 100) / 100;
        }

    });

    return service;
});

console.log(JSON.stringify(OUTPUT, null, 2));
