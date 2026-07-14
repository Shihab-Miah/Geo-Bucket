<div align="center">

<img src="icons/128x128.png" alt="Geo Bucket" width="80" />

# Geo Bucket

**Stop scrolling. Start closing.**

Extract verified business leads from Google Maps in seconds — emails, phone numbers, websites, and social profiles — all from one powerful Chrome extension.

[![Version](https://img.shields.io/badge/v7.1.2-stable-1DB954?style=flat-square&labelColor=0A0A0A)](https://github.com/Shihab-Miah/Geo-Bucket)
[![Chrome](https://img.shields.io/badge/Chrome-Extension-4285F4?style=flat-square&logo=googlechrome&logoColor=white&labelColor=0A0A0A)](https://github.com/Shihab-Miah/Geo-Bucket)
[![License](https://img.shields.io/badge/License-Proprietary-E5E2E1?style=flat-square&labelColor=0A0A0A)](#license)

<br />

<img src="assets/banner.png" alt="Geo Bucket — Radar Intelligence for Google Maps" width="720" />

</div>

<br />

## The Problem

Every B2B sales team, agency, and freelancer runs into the same wall: **finding the right people to sell to is slow, manual, and painful.** You open Google Maps, search for a niche, then click into each business one by one — copying names, hunting for emails on their website, checking if they have a Facebook page. It takes hours. You end up with a messy spreadsheet and half the data is missing.

**Geo Bucket eliminates that entire workflow.**

You search on Google Maps like you normally would. Click start. Geo Bucket sweeps through every listing on the page and pulls out structured, clean data — business name, phone, email, website, address, rating, reviews — ready to drop into your CRM or cold outreach tool.

<br />

## What It Extracts

| Data Point | Source |
| :--- | :--- |
| 📧 **Email Addresses** | Deep-crawled from business websites linked on their Maps listing |
| 📞 **Phone Numbers** | Pulled directly from Google Maps metadata |
| 🌐 **Website URLs** | Extracted from the listing's info panel |
| 📍 **Full Address** | Street address, city, state, zip |
| ⭐ **Rating & Reviews** | Star rating and total review count for lead scoring |
| 🏷️ **Business Category** | The Google-assigned business type (Plumber, Restaurant, etc.) |
| 📱 **Social Media** | Facebook, Instagram, and other linked profiles when available |

<br />

## Core Capabilities

### ⚡ Hyper-Fast Extraction
Scrape hundreds of business listings in minutes. Geo Bucket processes Maps results at machine speed while respecting rate limits to keep your account safe.

### 🧠 Contact Intelligence
Goes beyond what Maps shows on the surface. The engine crawls linked business websites to find hidden email addresses, social profiles, and contact forms that manual searching would miss.

### 🛡️ Anti-Ban Architecture
Built-in randomized delays and human-like interaction patterns prevent detection. You get the data without triggering Google's abuse systems.

### 📊 One-Click Clean Exports
Export your leads instantly as `.CSV` or `.XLSX` files. No reformatting needed — columns are clean, headers are labeled, and duplicates are already removed.

### 🔄 Smart De-duplication
The engine tracks what you have already scraped. Run multiple sessions across different searches and Geo Bucket automatically merges and de-duplicates your master list.

<br />

## Who Uses Geo Bucket

<table>
<tr>
<td width="33%" valign="top">

### 🏢 B2B Agencies

Build hyper-targeted prospect lists for your clients. Search "dentists in Dallas" or "law firms in London" and walk away with a clean spreadsheet of decision-makers — complete with emails and phone numbers — in under five minutes.

</td>
<td width="33%" valign="top">

### 💼 SaaS Sales Teams

Fill your outbound pipeline with local businesses that match your ICP. Filter by category, rating, and review count to find businesses that are likely to convert, then export directly into your sales engagement tool.

</td>
<td width="33%" valign="top">

### 🎯 Freelancers & Consultants

Stop cold-pitching random businesses. Use Geo Bucket to find companies in your niche that actually have an online presence (and therefore understand the value of what you sell). Target businesses with websites, active reviews, and reachable contact info.

</td>
</tr>
</table>

<br />

## Getting Started

### Installation

1. Click the green **Code** button above → **Download ZIP**
2. Unzip the folder to a permanent location on your computer
3. Open Chrome and go to `chrome://extensions`
4. Enable **Developer Mode** (toggle in the top-right corner)
5. Click **Load Unpacked** and select the unzipped `Geo-Bucket` folder
6. Pin the extension to your toolbar — you are ready to go

### First Scrape

1. Open [Google Maps](https://maps.google.com)
2. Search for any business category + location (e.g., *"Restaurants in Miami"*)
3. Click the Geo Bucket icon in your toolbar to open the side panel
4. Hit **Start** and watch the radar sweep through every listing
5. When finished, click **Export** to download your leads as CSV or XLSX

<br />

## Tech Stack

| Layer | Technology |
| :--- | :--- |
| Runtime | Chrome Extension Manifest V3 |
| UI | Custom glassmorphic design system with WebGL shader backgrounds |
| Scraping Engine | Native DOM traversal + async interceptor pipeline |
| Data Export | Client-side CSV/XLSX generation (no server upload) |
| Auth | Google OAuth 2.0 Identity API |
| Security | HMAC-SHA256 license verification, XOR-encrypted endpoints |

<br />

## Frequently Asked Questions

**Is this against Google's Terms of Service?**
Geo Bucket operates entirely within your browser as a Chrome extension. It reads publicly visible information from the Google Maps interface — the same data any person could see by visiting the page manually.

**Do my leads get uploaded to your servers?**
No. All data processing happens locally in your browser. Your scraped leads never leave your machine. Exports are generated client-side.

**What is the difference between Free and Pro?**
The free tier lets you try Geo Bucket with limited extractions. Pro unlocks unlimited scraping, email deep-crawling, XLSX exports, and priority support.

**Does it work on maps.google.com only?**
It works on all regional Google Maps domains (maps.google.co.uk, maps.google.com.au, etc.).

<br />

---

<div align="center">

**Built by [Shihab Miah](https://github.com/Shihab-Miah)**

Your next biggest client is already on the map. Let Geo Bucket find them.

<sub>© 2025 Geo Bucket. All rights reserved.</sub>

</div>
