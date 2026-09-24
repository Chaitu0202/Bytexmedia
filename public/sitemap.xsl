<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="2.0"
  xmlns:html="http://www.w3.org/TR/REC-html40"
  xmlns:sitemap="http://www.sitemaps.org/schemas/sitemap/0.9"
  xmlns:image="http://www.google.com/schemas/sitemap-image/1.1"
  xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
  <xsl:output method="html" version="1.0" encoding="UTF-8" indent="yes"/>
  <xsl:template match="/">
    <html xmlns="http://www.w3.org/1999/xhtml" lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>ByteX Media — XML Sitemap Index</title>
        <style>
          * {
            box-sizing: border-box;
            margin: 0;
            padding: 0;
          }
          body {
            background-color: #050507;
            color: #E2E8F0;
            font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
            font-size: 14px;
            line-height: 1.6;
            padding: 40px 20px;
          }
          .container {
            max-width: 1040px;
            margin: 0 auto;
            background: #0D0E12;
            border: 1px solid rgba(255, 255, 255, 0.1);
            border-radius: 16px;
            padding: 32px;
            box-shadow: 0 20px 40px rgba(0, 0, 0, 0.6);
          }
          .header {
            display: flex;
            align-items: center;
            justify-content: space-between;
            flex-wrap: wrap;
            gap: 16px;
            padding-bottom: 24px;
            border-bottom: 1px solid rgba(255, 255, 255, 0.08);
            margin-bottom: 24px;
          }
          .brand {
            display: flex;
            align-items: center;
            gap: 12px;
          }
          .brand-logo {
            width: 36px;
            height: 36px;
            background: linear-gradient(135deg, #00D2FF 0%, #3B82F6 100%);
            border-radius: 8px;
            display: flex;
            align-items: center;
            justify-content: center;
            color: #000;
            font-weight: 900;
            font-size: 18px;
          }
          .brand-title {
            font-size: 20px;
            font-weight: 800;
            color: #FFFFFF;
            letter-spacing: -0.5px;
          }
          .brand-subtitle {
            font-size: 12px;
            color: #00D2FF;
            font-family: monospace;
          }
          .badge {
            display: inline-flex;
            align-items: center;
            gap: 6px;
            padding: 6px 12px;
            border-radius: 9999px;
            background: rgba(0, 210, 255, 0.1);
            border: 1px solid rgba(0, 210, 255, 0.3);
            color: #00D2FF;
            font-size: 12px;
            font-family: monospace;
          }
          .description {
            color: #94A3B8;
            font-size: 13px;
            margin-bottom: 24px;
            line-height: 1.6;
          }
          .description a {
            color: #00D2FF;
            text-decoration: none;
          }
          .description a:hover {
            text-decoration: underline;
          }
          table {
            width: 100%;
            border-collapse: collapse;
            margin-top: 12px;
            font-size: 13px;
          }
          th {
            text-align: left;
            padding: 12px 16px;
            background: #14161D;
            color: #94A3B8;
            font-weight: 600;
            text-transform: uppercase;
            font-size: 11px;
            letter-spacing: 0.5px;
            border-bottom: 1px solid rgba(255, 255, 255, 0.08);
          }
          th:first-child {
            border-top-left-radius: 8px;
          }
          th:last-child {
            border-top-right-radius: 8px;
          }
          td {
            padding: 14px 16px;
            border-bottom: 1px solid rgba(255, 255, 255, 0.05);
            vertical-align: middle;
          }
          tr:hover td {
            background: rgba(255, 255, 255, 0.02);
          }
          .url-link {
            color: #38BDF8;
            text-decoration: none;
            font-weight: 500;
            word-break: break-all;
          }
          .url-link:hover {
            text-decoration: underline;
            color: #00D2FF;
          }
          .tag {
            display: inline-block;
            padding: 2px 8px;
            border-radius: 4px;
            background: rgba(255, 255, 255, 0.06);
            color: #CBD5E1;
            font-family: monospace;
            font-size: 11px;
          }
          .tag-priority {
            background: rgba(16, 185, 129, 0.15);
            color: #34D399;
            font-weight: bold;
          }
          .images-count {
            display: inline-flex;
            align-items: center;
            gap: 4px;
            padding: 2px 8px;
            border-radius: 4px;
            background: rgba(168, 85, 247, 0.15);
            color: #C084FC;
            font-size: 11px;
            font-family: monospace;
          }
          .footer {
            margin-top: 32px;
            padding-top: 20px;
            border-top: 1px solid rgba(255, 255, 255, 0.08);
            display: flex;
            justify-content: space-between;
            align-items: center;
            flex-wrap: wrap;
            gap: 12px;
            color: #64748B;
            font-size: 12px;
          }
          .footer a {
            color: #94A3B8;
            text-decoration: none;
          }
          .footer a:hover {
            color: #00D2FF;
          }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <div class="brand">
              <div class="brand-logo">B</div>
              <div>
                <div class="brand-title">ByteX Media</div>
                <div class="brand-subtitle">Official XML Sitemap Protocol</div>
              </div>
            </div>
            <div class="badge">
              <span>● Status: Active &amp; Valid XML</span>
            </div>
          </div>

          <p class="description">
            This XML Sitemap is generated according to the official <a href="https://www.sitemaps.org" target="_blank" rel="noopener">sitemaps.org</a> protocol and Google Image XML extensions. It allows search engines like Google, Bing, and AI search crawlers to discover and index all primary landing pages, image assets, and commercial service endpoints for <strong>ByteX Media</strong> (<a href="https://bytexmedia.in/">https://bytexmedia.in/</a>).
          </p>

          <table>
            <thead>
              <tr>
                <th style="width: 55%;">URL Location</th>
                <th style="width: 15%;">Images</th>
                <th style="width: 15%;">Change Frequency</th>
                <th style="width: 15%;">Priority</th>
              </tr>
            </thead>
            <tbody>
              <xsl:for-each select="sitemap:urlset/sitemap:url">
                <tr>
                  <td>
                    <a class="url-link" href="{sitemap:loc}">
                      <xsl:value-of select="sitemap:loc"/>
                    </a>
                  </td>
                  <td>
                    <span class="images-count">
                      <xsl:value-of select="count(image:image)"/> Images
                    </span>
                  </td>
                  <td>
                    <span class="tag">
                      <xsl:value-of select="sitemap:changefreq"/>
                    </span>
                  </td>
                  <td>
                    <span class="tag tag-priority">
                      <xsl:value-of select="sitemap:priority"/>
                    </span>
                  </td>
                </tr>
              </xsl:for-each>
            </tbody>
          </table>

          <div class="footer">
            <div>
              <span>Generated for <strong>ByteX Media</strong> — Website Under 3000 (India &amp; Vizag)</span>
            </div>
            <div>
              <a href="https://bytexmedia.in/">Visit Homepage →</a>
            </div>
          </div>
        </div>
      </body>
    </html>
  </xsl:template>
</xsl:stylesheet>
