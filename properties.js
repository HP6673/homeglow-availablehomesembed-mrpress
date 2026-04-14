// ============================================================
//  HOMEGLOW PROPERTIES DATA FILE
//  To add a new property: copy the addProperty() block at the
//  BOTTOM of this file, fill in your values, and save.
//  The page picks it up automatically — no other changes needed.
// ============================================================

/* ── HOW TO ADD A NEW PROPERTY ──────────────────────────────────

addProperty({
  id:           "unique-slug",           // short, no spaces
  address:      "123 Main St",
  city:         "Chicago, IL 60601",
  county:       "Cook County",
  type:         "Vacant Land",           // or "Single-Family Residential"
  style:        "Empty Lot",
  warn:         null,                    // or "Warning text" for notices
  listingUrl:   "https://...",
  reportUrl:    "https://homeglow.odoo.com/property-report/...",
  reportDate:   "April 13, 2026",
  isLand:       true,                    // true = land-only (no totalCost/arv shown)
  specs: {
    lot:     "0.13 acres",
    zoning:  "Residential (R-1)",
    hoa:     "None",
    util:    "Not connected — nearby",
  },
  acquirePrice: "$10,000",
  totalCost:    null,                    // null for land-only listings
  arv:          null,                    // null for land-only listings
  notes:        "Describe the lot...",
  location: {
    municipality: "City, IL",
    county:       "County",
    district:     "School District",
  },
  restrictions: [
    "First restriction note",
    "Second restriction note",
  ],
  disclaimer: "All information should be independently verified."
});

──────────────────────────────────────────────────────────── */


// ══════════════════════════════════════════════════════════════
//  RENOVATED / FOR-SALE HOMES
// ══════════════════════════════════════════════════════════════

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
  isLand:      false,
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
  isLand:      false,
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
  isLand:      false,
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


// ══════════════════════════════════════════════════════════════
//  VACANT LAND / EMPTY PLOTS
// ══════════════════════════════════════════════════════════════

addProperty({
  id:          "winfield-roosevelt",
  address:     "27W0S Roosevelt Rd",
  city:        "Winfield, IL 60190",
  county:      "DuPage County",
  type:        "Vacant Land",
  style:       "3 Parcels — Corner Lot",
  warn:        null,
  listingUrl:  "https://www.redfin.com/IL/Winfield/27W0S-Roosevelt-Rd-60190/home/171426092",
  reportUrl:   "https://homeglow.odoo.com/property-report/27w0s-roosevelt-rd-winfield-il-60190",
  reportDate:  "April 13, 2026",
  isLand:      true,
  specs: {
    lot:    "0.52 acres (3 lots, see plat)",
    zoning: "SINGL — Single Family Residential",
    hoa:    "None",
    util:   "None on site — connection required",
    taxes:  "$505.50 / yr (2024)",
    front:  "166 ft on US Highway",
  },
  acquirePrice: "$30,000",
  totalCost:    null,
  arv:          null,
  notes: "Three lots per plat at the northwest corner of Cleveland Ave and Roosevelt Rd (US Highway). Corner location with 166 ft of highway frontage. Village of Winfield has indicated willingness to consider vacating an adjacent 20-ft easement to allow a 40-ft wide home to be built. Possible use listed as Multi-Family. No utilities on site — connection required.",
  location: {
    municipality:  "Winfield, IL",
    county:        "DuPage County",
    township:      "Winfield Township",
    distToChicago: "~30 mi West",
    transit:       "Winfield Metra (Union Pacific West line)",
    highway:       "IL Route 38 / Roosevelt Rd (US Hwy)",
    district:      "Elementary SD 34 · High School SD 94",
  },
  restrictions: [
    "Zoning: SINGL — Single-Family Residential. Multi-Family use may require variance/village board approval.",
    "Minimum lot area: 15,000 sq ft per dwelling; minimum width 95 ft at building line.",
    "Maximum building height: 35 ft / 2½ stories.",
    "Side yards: min. 10 ft each; rear yard: min. 30 ft. Front yard setback per ordinance.",
    "Max lot coverage by all structures: 25% of lot area.",
    "No HOA fees — confirmed on listing.",
    "Village building permit and contractor registration required before any construction.",
    "Easement vacation (20-ft parcel to south) must be confirmed with Village — not guaranteed.",
    "Subject to DuPage County Floodplain and Stormwater Management Ordinance.",
    "Contact: Village of Winfield Community Development — (630) 933-7100.",
  ],
  disclaimer: "Zoning information based on Village of Winfield municipal code (Title 10) and MLS listing data. Zoning, allowable uses, and restrictions are subject to change and must be independently verified with the Village prior to purchase. This document is for informational purposes only and does not constitute legal or financial advice."
});

addProperty({
  id:          "aurora-douglas",
  address:     "Lot 1 Douglas Ave",
  city:        "Aurora, IL 60505",
  county:      "Kane County",
  type:        "Vacant Land",
  style:       "Residential Lot",
  warn:        null,
  listingUrl:  "https://www.redfin.com/city/29459/IL/Aurora/land",
  reportUrl:   "https://homeglow.odoo.com/property-report/lot-1-douglas-ave-aurora-il-60505",
  reportDate:  "April 13, 2026",
  isLand:      true,
  specs: {
    lot:    "~4,791 sq ft / ~0.11 acres",
    zoning: "R-1 — One Family Dwelling District",
    hoa:    "Verify with Kane County",
    util:   "All utilities available",
  },
  acquirePrice: "$6,500",
  totalCost:    null,
  arv:          null,
  notes: "Vacant residential lot ready to build. Great location near schools, parks, shopping, and highways. Zoned R-1 — One Family Dwelling District. Lot width approximately 66 ft. All utilities available. Priced well below comparable lots in the area.",
  location: {
    municipality:  "Aurora, IL",
    county:        "Kane County",
    distToChicago: "~40 mi West",
    highway:       "I-88 / I-90 access nearby",
    transit:       "Metra BNSF / UP-W (downtown Aurora)",
    district:      "Aurora East USD 131",
    highlights:    "Near Paramount Theatre, RiverEdge Park, Red Oak Nature Center. Median Aurora home ~$322,500.",
  },
  restrictions: [
    "Zoning: R-1 — One Family Dwelling District (single-family detached only).",
    "Lot width ~66 ft — verify minimum frontage requirements with City of Aurora Building Dept.",
    "All construction requires City of Aurora building permit.",
    "HOA status not indicated on listing — verify with Kane County Recorder and City of Aurora.",
    "Utilities available; connection and tap-on fees apply.",
    "Independent survey and title search recommended prior to purchase.",
  ],
  disclaimer: "Zoning information based on MLS listing data and publicly available City of Aurora ordinances. All figures and zoning designations must be independently verified with the City of Aurora Community Development Department prior to purchase. This document is for informational purposes only and does not constitute legal or financial advice."
});

addProperty({
  id:          "lockport-walton",
  address:     "219 Reverend Walton Dr",
  city:        "Lockport, IL 60441",
  county:      "Will County",
  type:        "Vacant Land",
  style:       "Residential Lot",
  warn:        null,
  listingUrl:  "https://www.redfin.com/IL/Lockport/219-Reverend-Walton-Dr-60441/home/21763950",
  reportUrl:   "https://homeglow.odoo.com/property-report/219-reverend-walton-dr-lockport-il-60441",
  reportDate:  "April 13, 2026",
  isLand:      true,
  specs: {
    lot:    "~0.11 acres",
    zoning: "Residential — Unincorporated Will County",
    hoa:    "None",
    util:   "Not connected — installation required",
    taxes:  "~$140 / yr",
  },
  acquirePrice: "$8,500",
  totalCost:    null,
  arv:          null,
  notes: "Vacant lot — never developed. Residential zoning under unincorporated Will County jurisdiction. Utilities need to be installed and connected. 2024 taxes payable in 2025 will be paid by Seller at closing. Part of a cluster of similar lots available in the Fairmont/Lockport area.",
  location: {
    municipality:  "Lockport (Unincorporated), IL",
    county:        "Will County",
    district:      "Fairmont SD 89 · Lockport Twp HSD 205",
    distToChicago: "~35 mi SW",
    highway:       "I-355 (nearby)",
  },
  restrictions: [
    "Zoning: Residential — Will County building code jurisdiction (unincorporated Lockport).",
    "Barns or accessory structures cannot be built until a primary residence exists on the lot first.",
    "Storage of vehicles or equipment not permitted unless residential occupancy exists.",
    "Dumping of materials not originating from the property is prohibited.",
    "All utilities (water, gas, electric) must be installed — buyer bears all installation costs.",
    "No HOA fees.",
    "All construction subject to Will County Building Code.",
    "Buyers should verify lot dimensions, obtain survey, and confirm building requirements independently.",
  ],
  disclaimer: "Zoning and restriction information is based on MLS listing data and Will County building code rules stated in the property listing. All information must be independently verified with the Will County Land Use Department prior to purchase. This document is for informational purposes only."
});

addProperty({
  id:          "lockport-barry",
  address:     "122 Barry Ave",
  city:        "Lockport, IL 60441",
  county:      "Will County",
  type:        "Vacant Land",
  style:       "Residential Lot",
  warn:        null,
  listingUrl:  "https://www.redfin.com/city/11267/IL/Lockport/land",
  reportUrl:   "https://homeglow.odoo.com/property-report/122-barry-ave-lockport-il-60441",
  reportDate:  "April 13, 2026",
  isLand:      true,
  specs: {
    lot:    "~0.13 acres",
    zoning: "Residential — Unincorporated Will County",
    hoa:    "None",
    util:   "Not connected — installation required",
    taxes:  "~$140 / yr",
  },
  acquirePrice: "$10,000",
  totalCost:    null,
  arv:          null,
  notes: "Vacant lot — never developed. Residential zoning under unincorporated Will County jurisdiction. Located in the Fairmont neighborhood of Lockport. Utilities need to be installed and connected. 2024 taxes payable in 2025 will be paid by Seller at closing.",
  location: {
    municipality:  "Lockport (Unincorporated), IL",
    county:        "Will County",
    district:      "Fairmont SD 89 · Lockport Twp HSD 205",
    distToChicago: "~35 mi SW",
    highway:       "I-355 (nearby)",
    community:     "Fairmont neighborhood — multiple similar lots available nearby",
  },
  restrictions: [
    "Zoning: Residential — Will County building code jurisdiction (unincorporated Lockport).",
    "Barns or accessory structures cannot be built until a primary residence exists on the lot first.",
    "Storage of vehicles or equipment not permitted unless residential occupancy exists.",
    "Dumping of materials not originating from the property is prohibited.",
    "All utilities must be installed — buyer bears all installation costs.",
    "No HOA fees.",
    "All construction subject to Will County Building Code.",
    "Buyers should verify lot dimensions, obtain survey, and confirm building requirements independently.",
  ],
  disclaimer: "Zoning and restriction information is based on MLS listing data and Will County building code rules. All information must be independently verified with the Will County Land Use Department prior to purchase. This document is for informational purposes only."
});

addProperty({
  id:          "lockport-california",
  address:     "2141 California Ave",
  city:        "Lockport, IL 60441",
  county:      "Will County",
  type:        "Vacant Land",
  style:       "Residential Lot",
  warn:        null,
  listingUrl:  "https://www.redfin.com/city/11267/IL/Lockport/land",
  reportUrl:   "https://homeglow.odoo.com/property-report/2141-california-ave-lockport-il-60441",
  reportDate:  "April 13, 2026",
  isLand:      true,
  specs: {
    lot:    "~0.13–0.15 acres / ~5,663 sq ft",
    zoning: "Residential — Unincorporated Will County",
    hoa:    "None",
    util:   "Not connected — installation required",
    taxes:  "~$140 / yr",
  },
  acquirePrice: "$9,000",
  totalCost:    null,
  arv:          null,
  notes: "Vacant land — never developed. Part of a larger cluster of lots available in the area (up to 10+ total). Residential zoning under unincorporated Will County jurisdiction. Utilities need to be installed. 2024 taxes payable in 2025 will be paid by Seller at closing. Package deal pricing may be negotiable if purchasing multiple lots.",
  location: {
    municipality:  "Lockport (Unincorporated), IL",
    county:        "Will County",
    district:      "Fairmont SD 89 · Lockport Twp HSD 205",
    distToChicago: "~35 mi SW",
    highway:       "I-355 (nearby)",
    community:     "Fairmont neighborhood — package of 10+ lots available in the area",
  },
  restrictions: [
    "Zoning: Residential — Will County building code jurisdiction (unincorporated Lockport).",
    "Barns or accessory structures cannot be built until a primary residence exists on the lot first.",
    "Storage of vehicles or equipment not permitted unless residential occupancy exists.",
    "Dumping of materials not originating from the property is prohibited.",
    "All utilities must be installed — buyer bears all installation and connection costs.",
    "No HOA fees.",
    "Multiple adjacent lots potentially available — contact us for package pricing.",
    "All construction subject to Will County Building Code.",
    "Buyers should verify lot dimensions, obtain survey, and confirm all building requirements independently.",
  ],
  disclaimer: "Zoning and restriction information is based on MLS listing data and Will County building code rules. All information must be independently verified with the Will County Land Use Department prior to purchase. This document is for informational purposes only."
});

addProperty({
  id:          "lockport-fairview",
  address:     "2215 Fairview St",
  city:        "Lockport, IL 60441",
  county:      "Will County",
  type:        "Vacant Land",
  style:       "Residential Lot",
  warn:        null,
  listingUrl:  "https://www.redfin.com/city/11267/IL/Lockport/land",
  reportUrl:   "https://homeglow.odoo.com/property-report/2215-fairview-st-lockport-il-60441",
  reportDate:  "April 13, 2026",
  isLand:      true,
  specs: {
    lot:    "6,600 sq ft / ~0.15 acres",
    zoning: "Residential — Unincorporated Will County",
    hoa:    "None",
    util:   "Verify with Will County",
    taxes:  "~$140 / yr (2022)",
  },
  acquirePrice: "$12,500",
  totalCost:    null,
  arv:          null,
  notes: "Vacant lot — never developed. Ready to build. Residential zoning under unincorporated Will County. 2024 taxes payable in 2025 will be paid by Seller at closing. Located in the Fairmont neighborhood near other available lots in the area.",
  location: {
    municipality:  "Lockport (Unincorporated), IL",
    county:        "Will County",
    district:      "Fairmont SD 89 · Lockport Twp HSD 205",
    distToChicago: "~35 mi SW",
    highway:       "I-355 (nearby)",
    community:     "Fairmont neighborhood — growing residential area with rising demand",
  },
  restrictions: [
    "Zoning: Residential — Will County building code jurisdiction (unincorporated Lockport).",
    "Barns or accessory structures cannot be built until a primary residence exists on the lot first.",
    "Storage of vehicles or equipment not permitted unless residential occupancy exists.",
    "Dumping of materials not originating from the property is prohibited.",
    "Utility connection status should be independently verified with Will County.",
    "No HOA fees.",
    "All construction subject to Will County Building Code.",
    "Buyers should verify lot dimensions, obtain survey, and confirm all building requirements independently.",
  ],
  disclaimer: "Zoning and restriction information is based on MLS listing data and Will County building code rules. All information must be independently verified with the Will County Land Use Department prior to purchase. This document is for informational purposes only."
});


// ── ADD NEW PROPERTIES BELOW THIS LINE ───────────────────────
// Copy an addProperty({...}); block from above and paste here.
