# Learning Notes

## Event

An event is a named action we want to record.

Examples in this project:

- `page_view`
- `service_click`
- `form_start`
- `generate_lead`

## Conversion

A conversion is an event that represents an important result.

In this project:

`generate_lead` = someone completed the practice quote form.

## UTM parameters

UTM parameters are labels added to a URL so a measurement tool can identify where traffic came from.

Example:

`index.html?utm_source=linkedin&utm_medium=social&utm_campaign=portfolio_test`

The normal page is still `index.html`. The information after `?` is extra tracking information.

## LocalStorage

`localStorage` is browser storage.

This project temporarily stores practice events in Chrome so that the dashboard can display them.

This is not a replacement for Google Analytics. It is only a learning aid.
