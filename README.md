#### How to reproduce:

- `yarn install` to install dependencies
- `yarn dev` to start
- open the running app

#### What happens:

- crashes with v6.1.3
  - error message: `Invalid time axis configuration or filter, please check your input data.`
- works fine with v6.1.2

#### What's expected:

It should not crash in both versions.

#### other notes

- When not using the "custom" locale ('de') it works as expected in v6.1.3.
- When setting a `startDate` and `endDate` it works as expected in v6.1.3.
  - this might be the intended usage of the scheduler but seems like an unintended change in the api as it worked as expected in previous versions without specifying `startDate` and `endDate` and it only causes issues with "custom" locales.
