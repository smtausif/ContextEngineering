# Individually adjudicated replacements

Seven invalid, five ambiguous, and two unsupported exact-count references were replaced. Every replacement is from the original distractor validation split, has an unchanged supported gold/reference, and is absent from historical benchmark and pilot IDs. All eight groups use the same final ascending dataset-row order.

| Category | Removed ID | Replacement ID | New dataset row | Original replacement gold | Reason for removal |
|---|---|---|---:|---|---|
| unsupported-gold | 5a887bc0554299206df2b2b6 | 5a8f45ca5542997ba9cb320e | 499 | documentary | Source says more than 230 worldwide wins; exact total 230 is not entailed. |
| invalid | 5ae748d1554299572ea547b0 | 5ab92e02554299753720f775 | 502 | 219 | Question incorrectly assigns all nine MLB seasons to Baltimore. |
| invalid | 5ab7f0015542992aa3b8c88b | 5adf860e5542993344016cbc | 504 | 1964 to 1974 | Question asks Sean Yseult's spouse, but gold names Sean Yseult rather than Chris Lee. |
| invalid | 5ae0a59a55429945ae9593e2 | 5a85597c5542997175ce1fba | 511 | Canadian | Question misreads died AD 43 as born AD 43. |
| ambiguous | 5ae67dba55429908198fa5f0 | 5ac19d4c55429963665198bb | 512 | May Revolution | Population scope can mean Memphis rather than Southaven; replace rather than reinterpret. |
| invalid | 5ae2dfd155429928c423951b | 5ae0d7315542990adbacf678 | 517 | Toshi Ichiyanagi | Question places Newcastle south of Shelly Beach while the evidence places it north. |
| invalid | 5a85cead5542991dd0999ea9 | 5ae1ba55554299234fd042d9 | 518 | Kings Point, New York | Question asks game identity but gold and contradiction target machine type. |
| invalid | 5a73a7c755429978a71e9068 | 5a839c8b5542996488c2e479 | 519 | Lord Chancellor of England | Birth-name change does not dispute the performer identity requested by the question. |
| ambiguous | 5a83a532554299334474606f | 5abd12bb55429933744ab703 | 523 | Mount Everest | Two prior schools are supported, Dragon School and Haileybury. |
| ambiguous | 5ae7edee554299540e5a56ad | 5abb1e1b5542992ccd8e7f19 | 524 | Nobel Prize in Literature | Most populous island applies to Canary Islands, Spain and Macaronesia without a unique requested region. |
| unsupported-gold | 5a7cf29255429909bec768b8 | 5a8ba59a554299240d9c2058 | 526 | 1999 | Source says over 150 million copies; the exact total 150 million is not entailed. |
| ambiguous | 5a756fa15542996c70cfaefb | 5ac3b5d3554299741d48a2f3 | 532 | September 30, 2017 | Alternative resembles the metropolitan population already in evidence; city boundary is insufficiently explicit. |
| invalid | 5ade0fb95542997545bbbe39 | 5ac279345542990b17b153b0 | 538 | 28 January 1864 | Question asks river length; reference and conflict target length including tributaries. |
| ambiguous | 5a8f05b1554299458435d517 | 5adfc50355429942ec259b43 | 539 | Alice Springs, Northern Territory | Question asks an office served in, while evidence/reference describe a courtesy title. |

The individual replacement evidence checks, requested facts, exact false claims and original support labels are recorded in replacement-audit.json. Each is checked by the semantic regression gate. The six valid scoring-limit cases remain unchanged; see scoring-limitations.md. Rejected candidate rows 507, 508 and 540 are also documented with their source/annotation problems.
