# Zaki Enterprises - Deployment and Search Console Guide

## 1. Set your domain (required before launch)
All canonical URLs, sitemap.xml, robots.txt, llms.txt and structured data currently use the placeholder https://YOUR-DOMAIN.com.
In VS Code: Ctrl+Shift+H, search `https://YOUR-DOMAIN.com`, replace with your real https domain (no trailing slash), Replace All. Do this before uploading.

## 2. Preview locally on Windows
Links start with "/" so open the folder through a local server: install Node.js, open a terminal in the folder, run `npx serve`, then open the address shown.

## 3. Upload
- Netlify: app.netlify.com/drop, drag the whole folder in. `_redirects` and `404.html` are picked up automatically. Add your domain under Domain management.
- Vercel: push the folder to GitHub, import it at vercel.com; `vercel.json` enables clean URLs.
- Apache/cPanel hosting: upload everything (including the hidden `.htaccess`) to public_html. It sends 404 errors to 404.html, forces HTTPS and redirects old .html URLs.
Free-tier limits change, so check each host's current plan.

## 4. Custom domain
Add the domain in your host's dashboard, then set the DNS records the host shows (usually an A record for the root and a CNAME for www). Wait for DNS and the free SSL certificate, then confirm https works and www redirects to one version.

## 5. Google Search Console
1. Go to search.google.com/search-console and click Add property.
2. Choose "Domain" (verify with a DNS TXT record at your registrar) or "URL prefix" (verify with the HTML tag or file method).
3. Open Sitemaps, enter `sitemap.xml`, Submit.
4. Open URL Inspection, paste the home page URL, then each service page, and click Request Indexing.
5. Check Pages > Indexing after a few days for errors. Do the same in Bing Webmaster Tools.

## 6. Testing after deployment
Open every URL directly, visit a wrong URL to see the 404 page, check https://yourdomain/robots.txt and /sitemap.xml, test on a phone, validate structured data at validator.schema.org, and run PageSpeed Insights.

## 7. Still needed from you
Real domain, contact email/phone/address, privacy policy and terms pages, a 1200x630 share image, real case studies or reviews when you have them, and final keywords after the Phase 2 research (titles, H1s and descriptions will be refined).
