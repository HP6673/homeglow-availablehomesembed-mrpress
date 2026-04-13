// ============================================================
//  HOMEGLOW PROPERTIES DATA FILE
//  To add a new property: copy the block below, paste it at
//  the BOTTOM of this file, and fill in your values.
//  The page will automatically pick it up — no other changes needed.
// ============================================================

/* ── HOW TO ADD A NEW PROPERTY ────────────────────────────────
addProperty({
  id:           "unique-slug",           // short unique ID, no spaces
  address:      "123 Main St",
  city:         "Chicago, IL 60601",
  county:       "Cook County",
  type:         "Single-Family Residential",
  style:        "Brick Ranch",           // home style
  warn:         null,                    // or "Warning text here" for notices
  listingUrl:   "https://...",           // link to homes.com / redfin / zillow
  reportUrl:    "https://homeglow.odoo.com/property-report/...",
  reportDate:   "April 12, 2026",
  specs: {
    beds:    3,
    baths:   2,
    sqft:    "1,800 sq ft",             // optional
    lot:     "5,000 sq ft",             // optional
    garage:  "2-Car",                   // optional
    pool:    "Yes",                     // optional — remove line if N/A
    year:    "1978",                    // optional
  },
  acquirePrice: "$120,000",
  totalCost:    "$220,000",
  arv:          "$350,000",
  notes:        "Describe the property condition, highlights, renovation scope...",
  location: {
    municipality:   "Chicago, IL",
    county:         "Cook County",
    distToChicago:  "0 mi",            // optional
    highway:        "I-90 (nearby)",   // optional
    transit:        "CTA Blue Line",   // optional
    district:       "CPS District",   // optional
    schools:        "School names",   // optional
    highlights:     "Area notes",     // optional
    medianValue:    "$300,000",        // optional
  },
  disclaimer: "Paste the standard disclaimer text here."
});
─────────────────────────────────────────────────────────── */


// ── EXISTING PROPERTIES ───────────────────────────────────────

addProperty({
  id:          "irving",
  address:     "14930 Irving Ave",
  city:        "Dolton, IL 60419",
  county:      "Cook County",
  type:        "Single-Family Residential",
  style:       "Brick Ranch",
  warn:        null,
  listingUrl:  "https://www.homes.com/property/14930-irving-ave-dolton-il/e558wfp3rl1vm/",
  reportUrl:   "https://homeglow.odoo.com/property-report/14930-irving-ave-dolton-il-60419",
  reportDate:  "March 25, 2026",
  specs: {
    beds:    2,
    baths:   1,
    lot:     "4,961 sq ft",
    garage:  "1-Car Attached",
  },
  acquirePrice: "$49,000",
  totalCost:    "$150,000",
  arv:          "$400,000",
  notes: "Solid brick construction. Situated on a quiet, well-kept block. Requires cosmetic renovation — kitchen update, fresh paint, and new flooring. Good structural bones with investor potential.",
  location: {
    municipality:  "Dolton, IL",
    county:        "Cook County",
    distToChicago: "~15 mi South",
    highway:       "I-94 (nearby)",
    schools:       "South Suburban College (2.2 mi), Prairie State College, Chicago State University",
    district:      "Dolton School District 148",
  },
  disclaimer: "Tentative ARV of $400,000 is an estimate based on comparable properties and projected renovation scope. Final value is subject to market conditions and completed work. This document is for informational purposes only and does not constitute a binding financial or legal agreement. All figures should be verified independently."
});

addProperty({
  id:          "union",
  address:     "807 Union Dr",
  city:        "University Park, IL 60484",
  county:      "Will County",
  type:        "Single-Family Residential",
  style:       "Single-Family Ranch",
  warn:        null,
  listingUrl:  "https://www.redfin.com/IL/University-Park/807-Union-Dr-60484/home/12740067",
  reportUrl:   "https://homeglow.odoo.com/property-report/807-union-dr-university-park-il-60484",
  reportDate:  "March 25, 2026",
  specs: {
    beds:   3,
    baths:  2,
    sqft:   "1,600 sq ft",
    lot:    "7,300 sq ft",
    year:   "1975",
    garage: "2-Car",
    pool:   "Yes",
  },
  acquirePrice: "$170,000",
  totalCost:    "$290,000",
  arv:          "$450,000",
  notes: "Spacious 1,600 sq ft home on a generous 7,300 sq ft lot with a 2-car garage and pool. Built in 1975 with solid bones. Property is being sold as a fixer-upper — requires cosmetic and structural renovation to restore to full market value.",
  location: {
    municipality:  "University Park, IL",
    county:        "Will County",
    distToChicago: "~40 mi South",
    transit:       "Metra Station (local)",
    university:    "Governors State Univ.",
    district:      "Crete-Monee CU SD 201-U",
    highlights:    "Deer Creek Golf Course, Pine Lake Park, Nathan Manilow Sculpture Park, Craig Park. Major employers: Amazon Fulfillment, Clorox Co., Dot Foods.",
  },
  disclaimer: "Tentative home value of $450,000 is an estimate based on comparable renovated properties in the University Park / Will County market and projected renovation scope. Final value is subject to market conditions and completed work. This document is for informational purposes only and does not constitute a binding financial or legal agreement. All figures should be verified independently."
});

addProperty({
  id:          "rose",
  address:     "4053 Rose Ave",
  city:        "Lyons, IL 60534",
  county:      "Cook County",
  type:        "Single-Family Residential",
  style:       "2-Story",
  warn:        "The Village of Lyons has issued an active demolition order for this property. Estimated total cost may increase significantly depending on the outcome of municipal negotiations and a full structural assessment. Final pricing confirmed following municipality approval and on-site evaluation.",
  listingUrl:  "https://www.redfin.com/IL/Lyons/4053-Rose-Ave-60534/home/14070943",
  reportUrl:   "https://homeglow.odoo.com/property-report/4053-rose-ave-lyons-il-60534",
  reportDate:  "March 25, 2026",
  specs: {
    beds:     3,
    baths:    "1.5",
    sqft:     "1,225 sq ft",
    levels:   "2-Story",
    basement: "Unfinished + Crawl",
    bonus:    "Yes (potential 4th bed)",
  },
  acquirePrice: "~$115,000",
  totalCost:    "$215,000",
  arv:          "$300,000",
  notes: "Main level features living room, separate dining room, large eat-in kitchen, and versatile bonus room. Three bedrooms and full bath on second floor. Unfinished basement offers additional square footage potential. Requires full renovation to meet municipal code.",
  location: {
    municipality: "Lyons, IL",
    county:       "Cook County",
    medianValue:  "$272,450",
    district:     "Lyons SD 103",
    schools:      "Lyons Township High School, Riverside Brookfield HS, Central Elementary",
  },
  disclaimer: "Tentative home value of $300,000 is an estimate based on comparable properties in the Lyons/Cook County market and projected renovation scope. A municipal demolition order is on record — acquisition is subject to village approval and code compliance review. Final value is subject to market conditions and completed work. This document is for informational purposes only and does not constitute a binding financial or legal agreement. All figures should be verified independently."
});


// ── ADD NEW PROPERTIES BELOW THIS LINE ───────────────────────
// Copy the addProperty({...}); block from the top comment and paste here.
