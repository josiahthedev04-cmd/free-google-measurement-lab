# Measurement Plan

## Business scenario

Digital Growth Lab is a fictional service website used only for portfolio learning.

## Main question

Can we measure how users move from visiting the website to completing a quote form?

## Events

| User action | Event name | Why it matters |
|---|---|---|
| User opens a page | `page_view` | Shows which pages receive visits |
| User clicks a service | `service_click` | Shows interest in a service |
| User begins typing in the quote form | `form_start` | Shows stronger intent |
| User successfully submits the practice form | `generate_lead` | Represents the main conversion |

## Conversion

For this project, `generate_lead` is the main conversion.

A conversion is simply an action we decide is especially valuable to the business.

## Campaign tracking

We use these UTM parameters:

- `utm_source` — where the visitor came from
- `utm_medium` — the type of traffic
- `utm_campaign` — the campaign name

Example:

`?utm_source=linkedin&utm_medium=social&utm_campaign=portfolio_test`
