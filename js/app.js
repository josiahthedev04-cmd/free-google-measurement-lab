const EVENT_KEY = "measurementLabEvents";
const CAMPAIGN_KEY = "measurementLabCampaign";

function getEvents() {
  return JSON.parse(localStorage.getItem(EVENT_KEY) || "[]");
}

function saveEvents(events) {
  localStorage.setItem(EVENT_KEY, JSON.stringify(events));
}

function trackEvent(eventName, details = {}) {
  const events = getEvents();
  const page = document.body.dataset.page || window.location.pathname;

  events.push({
    event: eventName,
    page,
    label: details.label || "",
    time: new Date().toISOString()
  });

  saveEvents(events);
  console.log("[Measurement Lab]", eventName, { page, ...details });
}

function captureCampaign() {
  const params = new URLSearchParams(window.location.search);
  const source = params.get("utm_source");
  const medium = params.get("utm_medium");
  const campaign = params.get("utm_campaign");

  if (source || medium || campaign) {
    const campaignData = {
      source: source || "unknown",
      medium: medium || "unknown",
      campaign: campaign || "unknown"
    };
    localStorage.setItem(CAMPAIGN_KEY, JSON.stringify(campaignData));
  }
}

function getCampaign() {
  return JSON.parse(
    localStorage.getItem(CAMPAIGN_KEY) ||
    JSON.stringify({ source: "direct", medium: "none", campaign: "none" })
  );
}

function setupTrackedLinks() {
  document.querySelectorAll("[data-track]").forEach((element) => {
    element.addEventListener("click", () => {
      trackEvent(element.dataset.track, {
        label: element.dataset.label || element.textContent.trim()
      });
    });
  });
}

function setupQuoteForm() {
  const form = document.getElementById("quote-form");
  if (!form) return;

  let formStarted = false;

  form.addEventListener("input", () => {
    if (!formStarted) {
      formStarted = true;
      trackEvent("form_start", { label: "quote_form" });
    }
  });

  const params = new URLSearchParams(window.location.search);
  const requestedService = params.get("service");
  const serviceSelect = document.getElementById("service-select");

  if (requestedService && serviceSelect) {
    serviceSelect.value = requestedService;
  }

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const selectedService = serviceSelect?.value || "unknown";
    trackEvent("generate_lead", { label: selectedService });

    window.location.href = "thank-you.html";
  });
}

function renderDashboard() {
  const body = document.getElementById("event-table-body");
  if (!body) return;

  const events = getEvents();
  const counts = {
    page_view: events.filter(e => e.event === "page_view").length,
    service_click: events.filter(e => e.event === "service_click").length,
    form_start: events.filter(e => e.event === "form_start").length,
    generate_lead: events.filter(e => e.event === "generate_lead").length
  };

  document.getElementById("page-view-count").textContent = counts.page_view;
  document.getElementById("service-click-count").textContent = counts.service_click;
  document.getElementById("form-start-count").textContent = counts.form_start;
  document.getElementById("lead-count").textContent = counts.generate_lead;

  const campaign = getCampaign();
  document.getElementById("campaign-source").textContent = campaign.source;
  document.getElementById("campaign-medium").textContent = campaign.medium;
  document.getElementById("campaign-name").textContent = campaign.campaign;

  body.innerHTML = "";

  [...events].reverse().forEach((item) => {
    const row = document.createElement("tr");
    const formattedTime = new Date(item.time).toLocaleString();
    row.innerHTML = `
      <td>${formattedTime}</td>
      <td><code>${item.event}</code></td>
      <td>${item.page}</td>
      <td>${item.label || "—"}</td>
    `;
    body.appendChild(row);
  });

  const clearButton = document.getElementById("clear-events");
  clearButton?.addEventListener("click", () => {
    localStorage.removeItem(EVENT_KEY);
    localStorage.removeItem(CAMPAIGN_KEY);
    location.reload();
  });
}

captureCampaign();
trackEvent("page_view");
setupTrackedLinks();
setupQuoteForm();
renderDashboard();
