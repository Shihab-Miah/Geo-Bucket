<div align="center">

<img src="icons/128x128.png" alt="Geo Bucket" width="80" />

# Geo Bucket

Lead scraper for Google Maps. Pulls emails, phones, websites, and social links from business listings and exports them as CSV or XLSX.

[![Version](https://img.shields.io/badge/v7.1.2-stable-1DB954?style=flat-square&labelColor=0A0A0A)](https://github.com/Shihab-Miah/Geo-Bucket)
[![Chrome](https://img.shields.io/badge/Chrome-Extension-4285F4?style=flat-square&logo=googlechrome&logoColor=white&labelColor=0A0A0A)](https://github.com/Shihab-Miah/Geo-Bucket)
[![License](https://img.shields.io/badge/License-Proprietary-E5E2E1?style=flat-square&labelColor=0A0A0A)](#license)

<br />

<img src="assets/banner.png" alt="Geo Bucket" width="720" />

</div>

<br />

## What is this?

Geo Bucket is a Chrome extension that scrapes Google Maps search results. You search for something like "dentists in Dallas" or "restaurants near me," open the side panel, and hit start. It goes through each listing and extracts:

- Business name, address, and category
- Phone number
- Website URL
- Email addresses (crawled from the business website)
- Star rating and review count
- Social media links (Facebook, Instagram, etc.) when available

When it's done, you export everything as a `.csv` or `.xlsx` file. That's it.

I built this because I was doing cold outreach for B2B clients and got tired of manually clicking through Maps listings one by one. Copying names into spreadsheets, hunting for emails on websites, checking for social pages. It was taking hours for maybe 50 leads. Geo Bucket does the same thing in a few minutes.

<br />

## How it works

The extension runs entirely in your browser. There's no server-side scraping, no proxy network, nothing shady. It reads the same publicly visible data you'd see if you clicked through each listing yourself, just faster.

A few things worth mentioning:

**Rate limiting** — It doesn't blast through results. There are built-in randomized delays between actions so it behaves like a normal user browsing Maps. This keeps your account safe.

**Email crawling** — Most Maps listings don't show email addresses directly. Geo Bucket follows the website link on each listing and scans the page for email addresses, contact forms, and social links. This is where most of the value comes from.

**De-duplication** — If you run multiple scraping sessions (different searches, different areas), it tracks what you've already collected and removes duplicates automatically.

**Local processing** — Your data never leaves your machine. Exports are generated client-side in the browser. Nothing gets uploaded anywhere.

<br />

## Installation

1. Click the green **Code** button above and select **Download ZIP**
2. Unzip the folder somewhere on your computer
3. Open `chrome://extensions` in Chrome
4. Turn on **Developer Mode** (top right toggle)
5. Click **Load Unpacked** and point it to the unzipped folder
6. Pin Geo Bucket to your toolbar

To run your first scrape: open Google Maps, search for a business type + location, click the Geo Bucket icon to open the side panel, and press Start.

<br />

## Who is this for?

Mostly people doing outbound sales, lead gen, or prospecting:

- **Agency owners** who need prospect lists for clients. Search for a niche + city, get back a clean spreadsheet with contact info.
- **Sales teams** filling their pipeline. Filter by rating and review count to focus on established businesses, export directly into whatever CRM you use.
- **Freelancers** looking for clients. Find businesses in your industry that have websites and active reviews (which usually means they understand the value of the services you're selling).

It also works well for market research, competitive analysis, or just finding a list of businesses in a specific area.

<br />

## What it extracts

| Field | Details |
| :--- | :--- |
| Business Name | As listed on Google Maps |
| Phone | From the Maps listing info panel |
| Email | Crawled from the linked business website |
| Website | Direct URL from the listing |
| Address | Full street address |
| Rating | Star rating + total review count |
| Category | Google-assigned type (e.g., Plumber, Restaurant) |
| Social Links | Facebook, Instagram, etc. when available |

<br />

## Tech details

| | |
| :--- | :--- |
| Platform | Chrome Extension (Manifest V3) |
| UI | Custom design system, WebGL backgrounds |
| Scraping | DOM traversal + async interceptor |
| Export | Client-side CSV/XLSX generation |
| Auth | Google OAuth 2.0 |

<br />

## FAQ

**Will this get my Google account banned?**
It uses randomized timing and human-like patterns. I've been using it daily for months without issues. That said, don't scrape thousands of results in one sitting, be reasonable.

**Is my data private?**
Yes. Everything runs locally in your browser. No data is sent to any server.

**Free vs Pro?**
Free gives you a limited number of extractions to try it out. Pro removes the limits and adds email crawling, XLSX exports, and a few other things.

**Which Maps domains does it support?**
All of them. maps.google.com, .co.uk, .com.au, etc.

<br />

---

<div align="center">

Made by [Shihab Miah](https://github.com/Shihab-Miah)

<sub>© 2025 Geo Bucket</sub>

</div>
