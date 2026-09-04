# Free Google Measurement Lab

A hands-on digital measurement portfolio project created after completing the Google Ads Measurement Certification.

## Project Overview

The Free Google Measurement Lab is a fully functional practice website built to demonstrate digital measurement concepts without using paid advertising.

The project was created using HTML, CSS, JavaScript, GitHub Pages, Google Tag Manager and Google Analytics 4.

The goal was to move beyond simply earning a certification and apply the measurement concepts in a practical environment.

## Live Website

https://josiahthedev04-cmd.github.io/free-google-measurement-lab/

## Project Objective

The main objective was to build a simple lead-generation funnel and measure how a visitor moves from visiting the website to completing a practice quote request.

The website does not process real customer enquiries and no advertising money was spent.

All test activity was generated as controlled portfolio test traffic.

## Measurement Funnel

The measurement funnel is:

Page View
→ Service Click
→ Quote Form Start
→ Generate Lead

### Events

`page_view`

Records when a visitor views a page.

`service_click`

Records when a visitor selects one of the available services.

`quote_form_start`

Records when a visitor begins interacting with the quote form.

`generate_lead`

Records when the practice quote form is successfully completed.

`generate_lead` represents the primary conversion/key event for the project.

## Technologies Used

- HTML5
- CSS3
- JavaScript
- Google Analytics 4
- Google Tag Manager
- Google Tag Assistant
- GitHub
- GitHub Pages
- Chrome Developer Tools
- UTM Campaign Parameters

## Measurement Architecture

Website
↓
JavaScript Event
↓
Google Tag Manager Data Layer
↓
Custom Event Trigger
↓
GA4 Event Tag
↓
Google Analytics 4

## Google Tag Manager

Google Tag Manager was installed across the website.

The following custom events were configured and tested:

- `service_click`
- `quote_form_start`
- `generate_lead`

Tag Assistant was used to verify that each event successfully triggered its corresponding GA4 event tag.

## Google Analytics 4

A GA4 web property and data stream were configured for the project.

GA4 receives website activity through Google Tag Manager.

Measurement includes:

- Page views
- Sessions
- User engagement
- Form interaction
- Service interest
- Lead generation

The `generate_lead` event is used as the main business outcome for the project.

## Campaign Tracking

UTM parameters were used to demonstrate campaign source tracking.

Example:

https://josiahthedev04-cmd.github.io/free-google-measurement-lab/?utm_source=linkedin&utm_medium=social&utm_campaign=portfolio_launch

The project tracks:

- `utm_source`
- `utm_medium`
- `utm_campaign`

Example sources tested include LinkedIn and Instagram.

## Example Campaign Journey

LinkedIn
→ Website
→ Services
→ Quote Form
→ Lead

This demonstrates how campaign information can be connected with user actions and conversions.

## Local Measurement Dashboard

A custom JavaScript measurement dashboard was also created before GA4 was implemented.

This was used to understand the fundamentals of event tracking before introducing Google Analytics.

The local dashboard records:

- Page views
- Service clicks
- Form starts
- Practice leads
- Campaign source
- Campaign medium
- Campaign name

Browser localStorage is used only for this practice dashboard.

It is not intended to replace Google Analytics.

## Key Concepts Applied

This project helped me practically understand:

- Digital measurement
- Events
- Conversions
- Key events
- Lead-generation funnels
- Google Tag Manager
- Google Analytics 4
- Data layers
- Custom event triggers
- GA4 event tags
- Debugging with Tag Assistant
- UTM campaign tracking
- Traffic sources
- Campaign measurement
- Conversion measurement

## Privacy and Testing

This is an educational portfolio project.

No real advertising campaign was purchased or operated.

No real customer information should be entered into the form.

Testing was performed using sample information and controlled test traffic.

## Certification

This project was developed after completing the Google Ads Measurement Certification.

Rather than using the certification only as a credential, I created this project to apply and better understand the concepts covered during the course.

## What I Learned

The most important lesson from this project was understanding the relationship between a website action and the measurement systems that record it.

For example:

User submits form
→ Website creates `generate_lead`
→ Data Layer sends the event
→ Google Tag Manager detects the event
→ GA4 event tag fires
→ Google Analytics receives the event

Building the process helped turn measurement concepts from theory into practical experience.

## Future Improvements

Possible future improvements include:

- Additional campaign source analysis
- Funnel exploration reports
- Attribution analysis
- Looker Studio reporting
- Additional conversion events
- More advanced privacy and consent implementation

## Author

Josiah

Google Ads Measurement Certification Portfolio Project
