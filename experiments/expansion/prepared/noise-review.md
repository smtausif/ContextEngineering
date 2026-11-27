# Review of all 200 NEW-cohort noise fixtures

Final semantic review: **PASS (source-grounded)**. Fourteen rejected questions were replaced; six valid strict-scoring limitations remain documented. No gold label, scorer or strategy implementation was edited. All 200 individual final judgments and source citations are in semantic-review-decisions.json. Paid execution approval is pending.

Same ordered cohort as all five strategies; the original 20-question pilot is separate. All relations and alternatives are manually curated in contradictions.tsv. Automatic lexical checks do not establish semantic validity; each contradiction and paired donor requires semantic review before paid execution. This is a purposive sample with explicit synthetic denials, not a random benchmark.

## 1. 5a85eed75542996432c5713b (row 100)

Question: Where did the descendants of the group of black Indians associated with the Seminole people settle?

Gold answer (review only): Coahuila, Mexico

Relation checked: location of the Mascogos community descended from Black Seminoles

Labeled source: Mascogos [0]

The Mascogos (also known as "negros mascagos") are an afrodescendant group in Coahuila, Mexico.

Supporting passages:

**Mascogos**

[0] The Mascogos (also known as "negros mascagos") are an afrodescendant group in Coahuila, Mexico.

[1]  Centered on the town of El Nacimiento in Múzquiz Municipality, the group are descendants of Black Seminoles escaping the threat of slavery in the United States.

**Black Seminoles**

[0] The Black Seminoles are black Indians associated with the Seminole people in Florida and Oklahoma.

[1]  They are the descendants of free blacks and of escaped slaves (called maroons) who allied with Seminole groups in Spanish Florida.

[2]  Historically, the Black Seminoles lived mostly in distinct bands near the Native American Seminole.

[3]  Some were held as slaves of particular Seminole leaders; but they had more freedom than did slaves held by whites in the South and by other Native American tribes, including the right to bear arms.

Synthetic conflicting passage:

The location of the Mascogos community descended from Black Seminoles is Sonora, Mexico. It is not Coahuila, Mexico. This reference entry describes the particular subject and historical detail identified in the preceding statement. The description concerns that subject alone, rather than a similarly named person, place, organization, or work. The wording refers to the same event, period, and relationship throughout the account. Other details about the subject are outside the scope of this short entry.

Irrelevant passage: **Green Day related projects**

Since 1991, some members of punk band Green Day have branched out past their "main band" and have started other projects with other musicians and have released full-length albums and several EPs.  Notable related projects of Green Day include Billie Joe Armstrong's Pinhead Gunpowder (which also featured Green Day's other guitarist Jason White), The Frustrators in which Mike Dirnt plays bass, and The Network which many speculate has all three members of Green Day, although under stagenames.

Donor provenance: {"rowIndex":5012,"questionId":"5a889d18554299206df2b310","passageIndex":1,"title":"Green Day related projects","sentences":["Since 1991, some members of punk band Green Day have branched out past their \"main band\" and have started other projects with other musicians and have released full-length albums and several EPs."," Notable related projects of Green Day include Billie Joe Armstrong's Pinhead Gunpowder (which also featured Green Day's other guitarist Jason White), The Frustrators in which Mike Dirnt plays bass, and The Network which many speculate has all three members of Green Day, although under stagenames."]}

Review: Contradicts the answer-bearing relation: location of the Mascogos community descended from Black Seminoles. The false assertion explicitly excludes the gold value in the same scope. The source sentence and complete supporting passages are retained for review.

Independent source passage about Green Day related projects; no shared content terms with the question or supporting passages, and no answer or evidence-subject match. Review alongside the paired question is in noise-review.md.

Checks: original supporting passages and sentence indices preserved; labeled source span; distinct alternative with scoped denial; unrelated donor 70–100 words; distinct donor; no answer, title or content-term overlap.

## 2. 5ae738f75542991bbc9761c4 (row 102)

Question: What year was the brother of this first round draft pick by the Washington Redskins drafted?

Gold answer (review only): 2003

Relation checked: year Boss Bailey was drafted by the Detroit Lions

Labeled source: Boss Bailey [1]

 He was originally drafted by the Detroit Lions in the second round of the 2003 NFL Draft.

Supporting passages:

**Champ Bailey**

[0] Roland "Champ" Bailey Jr. (born June 22, 1978) is a former American football cornerback in the National Football League (NFL).

[1]  He played college football for Georgia, where he earned consensus All-American honors, and was drafted by the Washington Redskins in the first round of the 1999 NFL Draft.

[2]  He is the brother of former NFL linebacker Boss Bailey.

**Boss Bailey**

[0] Rodney "Boss" Bailey (born October 14, 1979) is a former American football linebacker who played in the National Football League.

[1]  He was originally drafted by the Detroit Lions in the second round of the 2003 NFL Draft.

[2]  He played college football at the University of Georgia.

[3]  He is the brother of former NFL cornerback Champ Bailey.

Synthetic conflicting passage:

The year Boss Bailey was drafted by the Detroit Lions is 2004. It is not 2003. This reference entry describes the particular subject and historical detail identified in the preceding statement. The description concerns that subject alone, rather than a similarly named person, place, organization, or work. The wording refers to the same event, period, and relationship throughout the account. Other details about the subject are outside the scope of this short entry.

Irrelevant passage: **Ship-of-the-line captain**

Ship-of-the-line captain (French: "capitaine de vaisseau"; German: "linienschiffskapitän" (Austro-Hungarian Navy), "Kapitän zur See" (German and the Royal Netherlands navies); Italian Navy: "capitano di vascello"; Spanish Navy: "capitán de navío"; Croatian Navy: "kapetan bojnog broda") is a rank that appears in several navies.  The name of the rank derives from the fact the rank corresponded to command of a warship of the largest class, the ship-of-the-line, as opposed to smaller types (corvettes and frigates).  It is normally above the rank of frigate captain.

Donor provenance: {"rowIndex":5008,"questionId":"5ab82fe155429919ba4e225a","passageIndex":7,"title":"Ship-of-the-line captain","sentences":["Ship-of-the-line captain (French: \"capitaine de vaisseau\"; German: \"linienschiffskapitän\" (Austro-Hungarian Navy), \"Kapitän zur See\" (German and the Royal Netherlands navies); Italian Navy: \"capitano di vascello\"; Spanish Navy: \"capitán de navío\"; Croatian Navy: \"kapetan bojnog broda\") is a rank that appears in several navies."," The name of the rank derives from the fact the rank corresponded to command of a warship of the largest class, the ship-of-the-line, as opposed to smaller types (corvettes and frigates)."," It is normally above the rank of frigate captain."]}

Review: Contradicts the answer-bearing relation: year Boss Bailey was drafted by the Detroit Lions. The false assertion explicitly excludes the gold value in the same scope. The source sentence and complete supporting passages are retained for review.

Independent source passage about Ship-of-the-line captain; no shared content terms with the question or supporting passages, and no answer or evidence-subject match. Review alongside the paired question is in noise-review.md.

Checks: original supporting passages and sentence indices preserved; labeled source span; distinct alternative with scoped denial; unrelated donor 70–100 words; distinct donor; no answer, title or content-term overlap.

## 3. 5ac32b565542995ef918c154 (row 103)

Question: Where is the stadium at which 1964 Georgia Tech Yellow Jackets football team played their home game located? 

Gold answer (review only): North Avenue at Techwood Drive

Relation checked: intersection locating Bobby Dodd Stadium

Labeled source: Bobby Dodd Stadium [0]

Bobby Dodd Stadium at Historic Grant Field is the football stadium located at the corner of North Avenue at Techwood Drive on the campus of the Georgia Institute of Technology in Atlanta.

Supporting passages:

**1964 Georgia Tech Yellow Jackets football team**

[0] The 1964 Georgia Tech Yellow Jackets football team represented the Georgia Institute of Technology during the 1964 college football season.

[1]  The Yellow Jackets were led by 20th-year head coach Bobby Dodd, and played their home games at Grant Field in Atlanta, Georgia.

[2]  They competed as independents for the first time since 1920, after dropping from the Southeastern Conference in 1963.

**Bobby Dodd Stadium**

[0] Bobby Dodd Stadium at Historic Grant Field is the football stadium located at the corner of North Avenue at Techwood Drive on the campus of the Georgia Institute of Technology in Atlanta.

[1]  It has been home to the Georgia Tech Yellow Jackets football team, often referred to as the "Ramblin' Wreck", in rudimentary form since 1905 and as a complete stadium since 1913.

[2]  The team participates in the NCAA Division I Football Bowl Subdivision as a member of the Atlantic Coast Conference.

[3]  It is the oldest stadium in the FBS and has been the site of more home wins than any other FBS stadium.

Synthetic conflicting passage:

The intersection locating Bobby Dodd Stadium is Peachtree Street at Fifth Street. It is not North Avenue at Techwood Drive. This reference entry describes the particular subject and historical detail identified in the preceding statement. The description concerns that subject alone, rather than a similarly named person, place, organization, or work. The wording refers to the same event, period, and relationship throughout the account. Other details about the subject are outside the scope of this short entry.

Irrelevant passage: **Mercedes Sosa**

Haydée Mercedes Sosa (] ; 9 July 1935 – 4 October 2009), sometimes known as La Negra (literally: "The Black One"), was an Argentine singer who was popular throughout Latin America and many countries outside the region.  She was born on Argentina's Independence Day.  With her roots in Argentine folk music, Sosa became one of the preeminent exponents of nueva canción.  She gave voice to songs written by many Latin American songwriters.  Her music made people hail her as the "voice of the voiceless ones", and "the voice of America".

Donor provenance: {"rowIndex":5010,"questionId":"5ac0aa595542992a796ded5a","passageIndex":7,"title":"Mercedes Sosa","sentences":["Haydée Mercedes Sosa (] ; 9 July 1935 – 4 October 2009), sometimes known as La Negra (literally: \"The Black One\"), was an Argentine singer who was popular throughout Latin America and many countries outside the region."," She was born on Argentina's Independence Day."," With her roots in Argentine folk music, Sosa became one of the preeminent exponents of nueva canción."," She gave voice to songs written by many Latin American songwriters."," Her music made people hail her as the \"voice of the voiceless ones\", and \"the voice of America\"."]}

Review: Contradicts the answer-bearing relation: intersection locating Bobby Dodd Stadium. The false assertion explicitly excludes the gold value in the same scope. The source sentence and complete supporting passages are retained for review.

Independent source passage about Mercedes Sosa; no shared content terms with the question or supporting passages, and no answer or evidence-subject match. Review alongside the paired question is in noise-review.md.

Checks: original supporting passages and sentence indices preserved; labeled source span; distinct alternative with scoped denial; unrelated donor 70–100 words; distinct donor; no answer, title or content-term overlap.

## 4. 5abc8d75554299700f9d7900 (row 104)

Question: Since 2 June 2017, The Leader of Fine Gael had been held by which Irish Fine Gael politician who has served as Taoiseach and Minister for Defence?

Gold answer (review only): Leo Varadkar

Relation checked: holder of the office of Leader of Fine Gael from 2 June 2017

Labeled source: Leader of Fine Gael [1]

 Since 2 June 2017, the office had been held by Leo Varadkar following the resignation of Enda Kenny.

Supporting passages:

**Leader of Fine Gael**

[0] The Leader of Fine Gael is the most senior politician within the Fine Gael political party in Ireland.

[1]  Since 2 June 2017, the office had been held by Leo Varadkar following the resignation of Enda Kenny.

**Leo Varadkar**

[0] Leo Eric Varadkar ( ; Irish: "Leo de Varad" ;born 18 January 1979) is an Irish Fine Gael politician who has served as Taoiseach, Minister for Defence and Leader of Fine Gael since June 2017.

[1]  He has been a Teachta Dála (TD) since 2007, currently for the Dublin West constituency.

[2]  He previously served as Minister for Social Protection from 2016 to 2017, Minister for Health from 2014 to 2016 and Minister for Transport, Tourism and Sport from 2011 to 2014.

Synthetic conflicting passage:

The holder of the office of Leader of Fine Gael from 2 June 2017 is Micheál Martin. It is not Leo Varadkar. This reference entry describes the particular subject and historical detail identified in the preceding statement. The description concerns that subject alone, rather than a similarly named person, place, organization, or work. The wording refers to the same event, period, and relationship throughout the account. Other details about the subject are outside the scope of this short entry.

Irrelevant passage: **Sheila Grant**

Sheila Grant (also Corkhill) is a fictional character from British soap opera, "Brookside" played by Sue Johnston.  Sheila appeared in Brookside from the first episode in 1982 until the character's departure in 1990.  Her most famous storyline was in 1986, when the character was attacked, raped and beaten by an unknown assailant.  Everyone was a suspect, including family friend Matty Nolan (Tony Scoggo) and most residents of Brookside Close found themselves accused of attacking Sheila.  It was later revealed that the taxi driver raped Sheila.

Donor provenance: {"rowIndex":5009,"questionId":"5a89dca8554299669944a5dd","passageIndex":5,"title":"Sheila Grant","sentences":["Sheila Grant (also Corkhill) is a fictional character from British soap opera, \"Brookside\" played by Sue Johnston."," Sheila appeared in Brookside from the first episode in 1982 until the character's departure in 1990."," Her most famous storyline was in 1986, when the character was attacked, raped and beaten by an unknown assailant."," Everyone was a suspect, including family friend Matty Nolan (Tony Scoggo) and most residents of Brookside Close found themselves accused of attacking Sheila."," It was later revealed that the taxi driver raped Sheila."]}

Review: Contradicts the answer-bearing relation: holder of the office of Leader of Fine Gael from 2 June 2017. The false assertion explicitly excludes the gold value in the same scope. The source sentence and complete supporting passages are retained for review.

Independent source passage about Sheila Grant; no shared content terms with the question or supporting passages, and no answer or evidence-subject match. Review alongside the paired question is in noise-review.md.

Checks: original supporting passages and sentence indices preserved; labeled source span; distinct alternative with scoped denial; unrelated donor 70–100 words; distinct donor; no answer, title or content-term overlap.

## 5. 5a8bb29b554299240d9c2089 (row 105)

Question: Which American film actor and dancer starred in the 1945 film Johnny Angel?

Gold answer (review only): George Raft

Relation checked: actor and dancer starring in the 1945 film Johnny Angel

Labeled source: Johnny Angel [1]

 The movie stars George Raft, Claire Trevor and Signe Hasso, and features Hoagy Carmichael.

Supporting passages:

**Johnny Angel**

[0] Johnny Angel is a 1945 film noir directed by Edwin L. Marin and written by Frank Gruber and Steve Fisher from the novel "Mr. Angel Comes Aboard" by Charles Gordon Booth.

[1]  The movie stars George Raft, Claire Trevor and Signe Hasso, and features Hoagy Carmichael.

**George Raft**

[0] George Raft (born George Ranft; September 26, 1901 – November 24, 1980) was an American film actor and dancer identified with portrayals of gangsters in crime melodramas of the 1930s and 1940s.

[1]  A stylish leading man in dozens of movies, today Raft is mostly known for his gangster roles in the original "Scarface" (1932), "Each Dawn I Die" (1939), and Billy Wilder's 1959 comedy "Some Like it Hot", as a dancer in "Bolero" (1934), and a truck driver in "They Drive by Night" (1940).

Synthetic conflicting passage:

The actor and dancer starring in the 1945 film Johnny Angel is Cary Grant. It is not George Raft. This reference entry describes the particular subject and historical detail identified in the preceding statement. The description concerns that subject alone, rather than a similarly named person, place, organization, or work. The wording refers to the same event, period, and relationship throughout the account. Other details about the subject are outside the scope of this short entry.

Irrelevant passage: **Carry the Banner**

Carry the Banner is the third EP by the Berkeley, California-based punk rock band Pinhead Gunpowder.  Originally released on 10" vinyl in December 1994 through Too Many Records, the EP was reissued on CD by Lookout Records shortly after as the initial vinyl pressing sold out quickly.  It was the group's first release to feature Jason White on guitar/vocals, replacing Sarah Kirsch, who left the band in 1994 due to differences with Billie Joe Armstrong after his main band Green Day signed to major label Reprise Records.

Donor provenance: {"rowIndex":5012,"questionId":"5a889d18554299206df2b310","passageIndex":3,"title":"Carry the Banner","sentences":["Carry the Banner is the third EP by the Berkeley, California-based punk rock band Pinhead Gunpowder."," Originally released on 10\" vinyl in December 1994 through Too Many Records, the EP was reissued on CD by Lookout Records shortly after as the initial vinyl pressing sold out quickly."," It was the group's first release to feature Jason White on guitar/vocals, replacing Sarah Kirsch, who left the band in 1994 due to differences with Billie Joe Armstrong after his main band Green Day signed to major label Reprise Records."]}

Review: Contradicts the answer-bearing relation: actor and dancer starring in the 1945 film Johnny Angel. The false assertion explicitly excludes the gold value in the same scope. The source sentence and complete supporting passages are retained for review.

Independent source passage about Carry the Banner; no shared content terms with the question or supporting passages, and no answer or evidence-subject match. Review alongside the paired question is in noise-review.md.

Checks: original supporting passages and sentence indices preserved; labeled source span; distinct alternative with scoped denial; unrelated donor 70–100 words; distinct donor; no answer, title or content-term overlap.

## 6. 5ab659e355429954757d324e (row 106)

Question: hree Men on a Horse is a play by a playwright born in which year ?

Gold answer (review only): 1887

Relation checked: birth year of George Abbott

Labeled source: George Abbott [0]

George Francis Abbott (June 25, 1887 – January 31, 1995) was an American theater producer and director, playwright, screenwriter, and film director and producer whose career spanned nine decades.

Supporting passages:

**Three Men on a Horse**

[0] Three Men on a Horse is a play by George Abbott and John Cecil Holm.

[1]  The comedy focuses on a man who discovers he has a talent for choosing the winning horse in a race as long as he never places a bet himself.

**George Abbott**

[0] George Francis Abbott (June 25, 1887 – January 31, 1995) was an American theater producer and director, playwright, screenwriter, and film director and producer whose career spanned nine decades.

Synthetic conflicting passage:

The birth year of George Abbott is 1897. It is not 1887. This reference entry describes the particular subject and historical detail identified in the preceding statement. The description concerns that subject alone, rather than a similarly named person, place, organization, or work. The wording refers to the same event, period, and relationship throughout the account. Other details about the subject are outside the scope of this short entry.

Irrelevant passage: **Whispering Corridors (film series)**

Whispering Corridors (; also known as Ghost School and Ghost School Horror) is a South Korean horror film series.  The series uses an all-girls high school as the backdrop for each of its films and doesn't share a continuing plot.  Every "Whispering Corridors" film features a different plot, characters and settings.  The series is notable for helping generate the explosion of the New Korean Wave cinematic movement, and dealing with taboo topics such as authoritarianism in the harsh South Korean education system, gay relationships and teen suicide, following the liberalization of censorship.

Donor provenance: {"rowIndex":5011,"questionId":"5a7e694a5542997cc2c4753d","passageIndex":7,"title":"Whispering Corridors (film series)","sentences":["Whispering Corridors (; also known as Ghost School and Ghost School Horror) is a South Korean horror film series."," The series uses an all-girls high school as the backdrop for each of its films and doesn't share a continuing plot."," Every \"Whispering Corridors\" film features a different plot, characters and settings."," The series is notable for helping generate the explosion of the New Korean Wave cinematic movement, and dealing with taboo topics such as authoritarianism in the harsh South Korean education system, gay relationships and teen suicide, following the liberalization of censorship."]}

Review: Contradicts the answer-bearing relation: birth year of George Abbott. The false assertion explicitly excludes the gold value in the same scope. The source sentence and complete supporting passages are retained for review.

Independent source passage about Whispering Corridors (film series); no shared content terms with the question or supporting passages, and no answer or evidence-subject match. Review alongside the paired question is in noise-review.md.

Checks: original supporting passages and sentence indices preserved; labeled source span; distinct alternative with scoped denial; unrelated donor 70–100 words; distinct donor; no answer, title or content-term overlap.

## 7. 5ae7eaf65542994a481bbe1d (row 108)

Question: When was the  former Indian cricketer who made his ODI debuts during the 2000 ICC KnockOut Trophy born? 

Gold answer (review only): 7 October 1978

Relation checked: birth date of Zaheer Khan

Labeled source: Zaheer Khan [0]

Zaheer Khan (born 7 October 1978) is a former Indian cricketer who played all forms of the game for Indian national cricket team from 2000 till 2014.

Supporting passages:

**Zaheer Khan**

[0] Zaheer Khan (born 7 October 1978) is a former Indian cricketer who played all forms of the game for Indian national cricket team from 2000 till 2014.

[1]  He was the second-most successful Indian pace bowler in Test cricket, behind Kapil Dev.

**2000 ICC KnockOut Trophy**

[0] The 2000 ICC KnockOut Trophy was a One Day International cricket tournament held in Kenya (which helped to booster cricket in Kenya).

[1]  New Zealand were crowned champions and cashed the winner's cheque of US$250 000.

[2]  It was their first win in a major ICC tournament.

[3]  Zaheer Khan, Yuvraj Singh and Marlon Samuels made their ODI debuts during the competition.

Synthetic conflicting passage:

The birth date of Zaheer Khan is 7 October 1988. It is not 7 October 1978. This reference entry describes the particular subject and historical detail identified in the preceding statement. The description concerns that subject alone, rather than a similarly named person, place, organization, or work. The wording refers to the same event, period, and relationship throughout the account. Other details about the subject are outside the scope of this short entry.

Irrelevant passage: **Dancing Queen (2012 film)**

Dancing Queen (Hangul: 댄싱퀸 ; RR: "Daensing Kwin " ) is 2012 South Korean romantic comedy film starring Uhm Jung-hwa and Hwang Jung-min.  The film tells a story of a married couple, who in the midst of their mundane lives decides to pursue their lost dreams.  The husband finds himself accidentally running for Mayor of Seoul and his wife decides to become a pop singer.  It was produced by JK Film and distributed by CJ Entertainment, and released on January 18, 2012.

Donor provenance: {"rowIndex":5011,"questionId":"5a7e694a5542997cc2c4753d","passageIndex":9,"title":"Dancing Queen (2012 film)","sentences":["Dancing Queen (Hangul: 댄싱퀸 ; RR: \"Daensing Kwin \" ) is 2012 South Korean romantic comedy film starring Uhm Jung-hwa and Hwang Jung-min."," The film tells a story of a married couple, who in the midst of their mundane lives decides to pursue their lost dreams."," The husband finds himself accidentally running for Mayor of Seoul and his wife decides to become a pop singer."," It was produced by JK Film and distributed by CJ Entertainment, and released on January 18, 2012."]}

Review: Contradicts the answer-bearing relation: birth date of Zaheer Khan. The false assertion explicitly excludes the gold value in the same scope. The source sentence and complete supporting passages are retained for review.

Independent source passage about Dancing Queen (2012 film); no shared content terms with the question or supporting passages, and no answer or evidence-subject match. Review alongside the paired question is in noise-review.md.

Checks: original supporting passages and sentence indices preserved; labeled source span; distinct alternative with scoped denial; unrelated donor 70–100 words; distinct donor; no answer, title or content-term overlap.

## 8. 5a8c4c625542995e66a475a1 (row 109)

Question: Which airplane was this Major test-flying after whom the base, that 514th Flight Test Squadron is stated at, is named?

Gold answer (review only): B-17 Flying Fortress bomber

Relation checked: aircraft whose prototype Ployer Peter Hill was test-flying when he died

Labeled source: Hill Air Force Base [2]

 The base was named in honor of Major Ployer Peter Hill of the U.S. Army Air Corps, who died test-flying a prototype of the B-17 Flying Fortress bomber.

Supporting passages:

**514th Flight Test Squadron**

[0] The 514th Flight Test Squadron (514 FLTS) is a United States Air Force squadron.

[1]  It is assigned to the Ogden Air Logistics Center (OO-ALC), Air Force Materiel Command, stationed at Hill Air Force Base, Utah.

**Hill Air Force Base**

[0] Hill Air Force Base (IATA: HIF, ICAO: KHIF, FAA LID: HIF) is a major U.S. Air Force base located in northern Utah, just south of the city of Ogden, and near the towns of Clearfield, Riverdale, Roy, Sunset, and Layton.

[1]  It is about 30 mi north of Salt Lake City.

[2]  The base was named in honor of Major Ployer Peter Hill of the U.S. Army Air Corps, who died test-flying a prototype of the B-17 Flying Fortress bomber.

[3]  In this decade Hill AFB is still the sixth-largest employer in the state of Utah, and the third-largest one excluding the State Government and Higher Education employers.

Synthetic conflicting passage:

The aircraft whose prototype Ployer Peter Hill was test-flying when he died is B-24 Liberator bomber. It is not B-17 Flying Fortress bomber. This reference entry describes the particular subject and historical detail identified in the preceding statement. The description concerns that subject alone, rather than a similarly named person, place, organization, or work. The wording refers to the same event, period, and relationship throughout the account. Other details about the subject are outside the scope of this short entry.

Irrelevant passage: **Jason White (musician)**

Jason White (born November 11, 1973) is an American musician, best known as the current touring guitarist for the American punk rock band Green Day.  He has played as a touring member of Green Day since 1999.  However, in 2012, he was promoted to being an official member of the band before demoting himself back to his touring guitarist role in 2016.  He is also the guitarist/vocalist for the Californian punk band Pinhead Gunpowder, lead guitarist/lead vocalist for California, and co-founder of Adeline Records alongside Billie Joe Armstrong.

Donor provenance: {"rowIndex":5012,"questionId":"5a889d18554299206df2b310","passageIndex":2,"title":"Jason White (musician)","sentences":["Jason White (born November 11, 1973) is an American musician, best known as the current touring guitarist for the American punk rock band Green Day."," He has played as a touring member of Green Day since 1999."," However, in 2012, he was promoted to being an official member of the band before demoting himself back to his touring guitarist role in 2016."," He is also the guitarist/vocalist for the Californian punk band Pinhead Gunpowder, lead guitarist/lead vocalist for California, and co-founder of Adeline Records alongside Billie Joe Armstrong."]}

Review: Contradicts the answer-bearing relation: aircraft whose prototype Ployer Peter Hill was test-flying when he died. The false assertion explicitly excludes the gold value in the same scope. The source sentence and complete supporting passages are retained for review.

Independent source passage about Jason White (musician); no shared content terms with the question or supporting passages, and no answer or evidence-subject match. Review alongside the paired question is in noise-review.md.

Checks: original supporting passages and sentence indices preserved; labeled source span; distinct alternative with scoped denial; unrelated donor 70–100 words; distinct donor; no answer, title or content-term overlap.

## 9. 5a818387554299260e20a291 (row 110)

Question: Based on a True Story... is an album by which country music star, with the single My Eyes?

Gold answer (review only): Blake Shelton

Relation checked: country artist who released Based on a True Story…

Labeled source: Based on a True Story... [0]

Based on a True Story… is the eighth studio album by American country music artist Blake Shelton.

Supporting passages:

**Based on a True Story...**

[0] Based on a True Story… is the eighth studio album by American country music artist Blake Shelton.

[1]  It was released on March 26, 2013 via Warner Bros.

[2]  Records and debuted at #3 with a career best for Shelton at nearly 200,000 sold.

[3]  The album became the ninth best-selling album of 2013 in the US, earning Shelton a Platinum certification by the RIAA on September 30, 2013.

[4]  In 2016, "Based on a True Story…" was certified double-platinum by the RIAA.

**My Eyes (Blake Shelton song)**

[0] "My Eyes" is a song recorded by American country music artist Blake Shelton featuring Gwen Sebastian.

[1]  It was released in April 2014 as the fifth single from his seventh studio album, "Based on a True Story...".

[2]  The song was written by Andrew Dorff, Tommy Lee James and Josh Osborne.

Synthetic conflicting passage:

The country artist who released Based on a True Story… is Luke Bryan. It is not Blake Shelton. This reference entry describes the particular subject and historical detail identified in the preceding statement. The description concerns that subject alone, rather than a similarly named person, place, organization, or work. The wording refers to the same event, period, and relationship throughout the account. Other details about the subject are outside the scope of this short entry.

Irrelevant passage: **Hwang Woo-seul-hye**

Hwang Woo-seul-hye (born Hwang Jin-hee on August 10, 1979) is a South Korean actress.  She made her acting debut as a "dumb blonde"-type character in the critically praised black comedy "Crush and Blush" (2008).  Hwang has since played leading roles in the indie melodrama "Lovers Vanished" (2010), the TV sitcom "I Need a Fairy" (also known as "Sent from Heaven", 2012), and the romantic comedy "Virgin Theory: 7 Steps to Get On the Top" (2014).

Donor provenance: {"rowIndex":5011,"questionId":"5a7e694a5542997cc2c4753d","passageIndex":0,"title":"Hwang Woo-seul-hye","sentences":["Hwang Woo-seul-hye (born Hwang Jin-hee on August 10, 1979) is a South Korean actress."," She made her acting debut as a \"dumb blonde\"-type character in the critically praised black comedy \"Crush and Blush\" (2008)."," Hwang has since played leading roles in the indie melodrama \"Lovers Vanished\" (2010), the TV sitcom \"I Need a Fairy\" (also known as \"Sent from Heaven\", 2012), and the romantic comedy \"Virgin Theory: 7 Steps to Get On the Top\" (2014)."]}

Review: Contradicts the answer-bearing relation: country artist who released Based on a True Story…. The false assertion explicitly excludes the gold value in the same scope. The source sentence and complete supporting passages are retained for review.

Independent source passage about Hwang Woo-seul-hye; no shared content terms with the question or supporting passages, and no answer or evidence-subject match. Review alongside the paired question is in noise-review.md.

Checks: original supporting passages and sentence indices preserved; labeled source span; distinct alternative with scoped denial; unrelated donor 70–100 words; distinct donor; no answer, title or content-term overlap.

## 10. 5ab978855542996be2020512 (row 111)

Question: Over how many centuries were the "dwelling place of the dead" built?

Gold answer (review only): three centuries

Relation checked: duration of construction of the main structure at Montezuma Castle

Labeled source: Montezuma Castle National Monument [1]

 The main structure comprises five stories and twenty rooms, and was built over the course of three centuries.

Supporting passages:

**Flaming Feather**

[0] Flaming Feather is a 1952 Technicolor Western film directed by Ray Enright and starring Sterling Hayden.

[1]  The film was shot on location around Oak Creek Canyon near Sedona, AZ, and at the Montezuma Castle National Monument near Sedona.

[2]  The local Yavapai Indians, who were employed as extras on the production, refused to enter the cliff-dwellings because they represented the "dwelling place of the dead."

[3]  Consequently, production was delayed while a band of Navajos was brought in from a reservation 137 miles away to replace them.

**Montezuma Castle National Monument**

[0] Montezuma Castle National Monument protects a set of well-preserved dwellings located in Camp Verde, Arizona which were built and used by the Sinagua people, a pre-Columbian culture closely related to the Hohokam and other indigenous peoples of the southwestern United States, between approximately 1100 and 1425 AD.

[1]  The main structure comprises five stories and twenty rooms, and was built over the course of three centuries.

Synthetic conflicting passage:

The duration of construction of the main structure at Montezuma Castle is five centuries. It is not three centuries. This reference entry describes the particular subject and historical detail identified in the preceding statement. The description concerns that subject alone, rather than a similarly named person, place, organization, or work. The wording refers to the same event, period, and relationship throughout the account. Other details about the subject are outside the scope of this short entry.

Irrelevant passage: **Pinhead Gunpowder (2008 EP)**

Pinhead Gunpowder (also known by fans as the West Side Highway EP) is the second eponymously titled extended play by the American punk rock band Pinhead Gunpowder.  It was released on August 19, 2008, through Recess Records, the group's first release on Recess.  "Pinhead Gunpowder" marked the band's first new release in over 5 years.  The first pressings of the extended play were on green and blue vinyl.  All of the tracks were rereleased on the 2009 compilation "Kick Over the Traces".

Donor provenance: {"rowIndex":5012,"questionId":"5a889d18554299206df2b310","passageIndex":5,"title":"Pinhead Gunpowder (2008 EP)","sentences":["Pinhead Gunpowder (also known by fans as the West Side Highway EP) is the second eponymously titled extended play by the American punk rock band Pinhead Gunpowder."," It was released on August 19, 2008, through Recess Records, the group's first release on Recess."," \"Pinhead Gunpowder\" marked the band's first new release in over 5 years."," The first pressings of the extended play were on green and blue vinyl."," All of the tracks were rereleased on the 2009 compilation \"Kick Over the Traces\"."]}

Review: Contradicts the answer-bearing relation: duration of construction of the main structure at Montezuma Castle. The false assertion explicitly excludes the gold value in the same scope. The source sentence and complete supporting passages are retained for review.

Independent source passage about Pinhead Gunpowder (2008 EP); no shared content terms with the question or supporting passages, and no answer or evidence-subject match. Review alongside the paired question is in noise-review.md.

Checks: original supporting passages and sentence indices preserved; labeled source span; distinct alternative with scoped denial; unrelated donor 70–100 words; distinct donor; no answer, title or content-term overlap.

## 11. 5ae63dad55429929b0807afe (row 112)

Question: When was the British author who wrote the novel on which "Here We Go Round the Mulberry Bush" was based born? 

Gold answer (review only): 7 January 1936

Relation checked: birth date of Hunter Davies

Labeled source: Hunter Davies [0]

Edward Hunter Davies, OBE (born 7 January 1936) is a British author, journalist and broadcaster.

Supporting passages:

**Hunter Davies**

[0] Edward Hunter Davies, OBE (born 7 January 1936) is a British author, journalist and broadcaster.

[1]  He is the author of a number of books, including the only authorised biography of the Beatles.

**Here We Go Round the Mulberry Bush (film)**

[0] Here We Go Round the Mulberry Bush is a 1967 British film made based on the novel of the same name by Hunter Davies.

[1]  It was listed to compete at the 1968 Cannes Film Festival, but the festival was cancelled due to the events of May 1968 in France.

Synthetic conflicting passage:

The birth date of Hunter Davies is 7 January 1946. It is not 7 January 1936. This reference entry describes the particular subject and historical detail identified in the preceding statement. The description concerns that subject alone, rather than a similarly named person, place, organization, or work. The wording refers to the same event, period, and relationship throughout the account. Other details about the subject are outside the scope of this short entry.

Irrelevant passage: **Compulsive Disclosure**

Compulsive Disclosure is the second compilation album by the American punk rock band Pinhead Gunpowder.  It was released on October 21, 2003, through Lookout!  Records.  The album features songs from the group's eponymously titled 2000 EP, the "Dillinger Four / Pinhead Gunpowder" split EP, the "8 Chords, 328 Words" EP and also features re-recorded versions of the songs "2nd Street" and "At Your Funeral" (originally from "Dillinger Four / Pinhead Gunpowder").  "Compulsive Disclosure" was re-released on CD and vinyl through Recess Records on February 12, 2010, with two unreleased tracks, "Salting Agents" and "El Lasso Grappo".

Donor provenance: {"rowIndex":5012,"questionId":"5a889d18554299206df2b310","passageIndex":8,"title":"Compulsive Disclosure","sentences":["Compulsive Disclosure is the second compilation album by the American punk rock band Pinhead Gunpowder."," It was released on October 21, 2003, through Lookout!"," Records."," The album features songs from the group's eponymously titled 2000 EP, the \"Dillinger Four / Pinhead Gunpowder\" split EP, the \"8 Chords, 328 Words\" EP and also features re-recorded versions of the songs \"2nd Street\" and \"At Your Funeral\" (originally from \"Dillinger Four / Pinhead Gunpowder\")."," \"Compulsive Disclosure\" was re-released on CD and vinyl through Recess Records on February 12, 2010, with two unreleased tracks, \"Salting Agents\" and \"El Lasso Grappo\"."]}

Review: Contradicts the answer-bearing relation: birth date of Hunter Davies. The false assertion explicitly excludes the gold value in the same scope. The source sentence and complete supporting passages are retained for review.

Independent source passage about Compulsive Disclosure; no shared content terms with the question or supporting passages, and no answer or evidence-subject match. Review alongside the paired question is in noise-review.md.

Checks: original supporting passages and sentence indices preserved; labeled source span; distinct alternative with scoped denial; unrelated donor 70–100 words; distinct donor; no answer, title or content-term overlap.

## 12. 5a83880e554299123d8c214e (row 116)

Question: Suicide's 1977 released album features a song based on what brand's comic character?

Gold answer (review only): Marvel

Relation checked: comic-book brand whose character inspired Suicide's Ghost Rider

Labeled source: Ghost Rider (Suicide song) [1]

 The song is based on the Marvel Comics character.

Supporting passages:

**Ghost Rider (Suicide song)**

[0] Ghost Rider is a song by the protopunk band Suicide appearing on their debut album.

[1]  The song is based on the Marvel Comics character.

**Suicide (1977 album)**

[0] Suicide is the debut album from the American rock band Suicide.

[1]  It was released in 1977 on Red Star Records and produced by Craig Leon and Marty Thau.

[2]  The album was recorded in four days at Ultima Sound Studios in New York and featured Martin Rev's minimalist electronics and harsh, repetitive rhythms paired with Alan Vega's rock and roll-inspired vocals and depictions of urban life.

Synthetic conflicting passage:

The comic-book brand whose character inspired Suicide's Ghost Rider is DC Comics. It is not Marvel. This reference entry describes the particular subject and historical detail identified in the preceding statement. The description concerns that subject alone, rather than a similarly named person, place, organization, or work. The wording refers to the same event, period, and relationship throughout the account. Other details about the subject are outside the scope of this short entry.

Irrelevant passage: **Jane Austen**

Jane Austen ( ; 16 December 1775 – 18 July 1817) was an English novelist known primarily for her six major novels, which interpret, critique and comment upon the British landed gentry at the end of the 18th century.  Austen's plots often explore the dependence of women on marriage in the pursuit of favourable social standing and economic security.  Her works critique the novels of sensibility of the second half of the 18th century and are part of the transition to 19th-century literary realism.

Donor provenance: {"rowIndex":5014,"questionId":"5ae031c455429924de1b7055","passageIndex":1,"title":"Jane Austen","sentences":["Jane Austen ( ; 16 December 1775 – 18 July 1817) was an English novelist known primarily for her six major novels, which interpret, critique and comment upon the British landed gentry at the end of the 18th century."," Austen's plots often explore the dependence of women on marriage in the pursuit of favourable social standing and economic security."," Her works critique the novels of sensibility of the second half of the 18th century and are part of the transition to 19th-century literary realism."]}

Review: Contradicts the answer-bearing relation: comic-book brand whose character inspired Suicide's Ghost Rider. The false assertion explicitly excludes the gold value in the same scope. The source sentence and complete supporting passages are retained for review.

Independent source passage about Jane Austen; no shared content terms with the question or supporting passages, and no answer or evidence-subject match. Review alongside the paired question is in noise-review.md.

Checks: original supporting passages and sentence indices preserved; labeled source span; distinct alternative with scoped denial; unrelated donor 70–100 words; distinct donor; no answer, title or content-term overlap.

## 13. 5a879adb5542996e4f30887f (row 117)

Question: What other political position did the person who introduced the DISCLOSE Act hold?

Gold answer (review only): United States Senator

Relation checked: Senate office held by Chris Van Hollen from January 3, 2017

Labeled source: Chris Van Hollen [0]

Christopher Van Hollen Jr. (born January 10, 1959) is the junior United States Senator from Maryland, serving since January 3, 2017.

Supporting passages:

**DISCLOSE Act**

[0] The Democracy Is Strengthened by Casting Light On Spending in Elections Act, commonly known as the DISCLOSE Act and also known as H.R. 5175 (S.3628-Senate), was a bill introduced in the U.S. House of Representatives by Chris Van Hollen (D-Maryland) on April 29, 2010 and in the U.S. Senate by Charles Schumer (D-New York) on July 21, 2010.

**Chris Van Hollen**

[0] Christopher Van Hollen Jr. (born January 10, 1959) is the junior United States Senator from Maryland, serving since January 3, 2017.

[1]  From 2003 to 2017, he served as the U.S. Representative for Maryland 's 8 congressional district .

[2]  He is a member of the Democratic Party.

Synthetic conflicting passage:

The Senate office held by Chris Van Hollen from January 3, 2017 is United States Representative. It is not United States Senator. This reference entry describes the particular subject and historical detail identified in the preceding statement. The description concerns that subject alone, rather than a similarly named person, place, organization, or work. The wording refers to the same event, period, and relationship throughout the account. Other details about the subject are outside the scope of this short entry.

Irrelevant passage: **Soaked in Bleach**

Soaked in Bleach is an American docudrama directed by Benjamin Statler, who co-wrote and produced it with Richard Middelton and Donnie Eichar.  The film details the events leading up to the death of Kurt Cobain, as seen through the perspective of Tom Grant, the private detective who was hired by Courtney Love to find Cobain, her husband, shortly before his death in 1994.  It also explores the premise that Cobain's death was not a suicide.  The film stars Tyler Bryan as Cobain and Daniel Roebuck as Grant, with Sarah Scott portraying Courtney Love and August Emerson as Dylan Carlson.

Donor provenance: {"rowIndex":5013,"questionId":"5ab72d925542993667793f6e","passageIndex":9,"title":"Soaked in Bleach","sentences":["Soaked in Bleach is an American docudrama directed by Benjamin Statler, who co-wrote and produced it with Richard Middelton and Donnie Eichar."," The film details the events leading up to the death of Kurt Cobain, as seen through the perspective of Tom Grant, the private detective who was hired by Courtney Love to find Cobain, her husband, shortly before his death in 1994."," It also explores the premise that Cobain's death was not a suicide."," The film stars Tyler Bryan as Cobain and Daniel Roebuck as Grant, with Sarah Scott portraying Courtney Love and August Emerson as Dylan Carlson."]}

Review: Contradicts the answer-bearing relation: Senate office held by Chris Van Hollen from January 3, 2017. The false assertion explicitly excludes the gold value in the same scope. The source sentence and complete supporting passages are retained for review.

Independent source passage about Soaked in Bleach; no shared content terms with the question or supporting passages, and no answer or evidence-subject match. Review alongside the paired question is in noise-review.md.

Checks: original supporting passages and sentence indices preserved; labeled source span; distinct alternative with scoped denial; unrelated donor 70–100 words; distinct donor; no answer, title or content-term overlap.

## 14. 5a75f0ea5542994ccc91866c (row 120)

Question: What major truck road is located in Backford Cross?

Gold answer (review only): The A41

Relation checked: major trunk road through Backford Cross

Labeled source: A41 road [0]

The A41 is a major trunk road in England that links London and Birkenhead, although it has now in parts been superseded by motorways.

Supporting passages:

**Backford Cross**

[0] Backford Cross is a village on the Wirral Peninsula, Cheshire, England.

[1]  It is a suburb of the town of Ellesmere Port and part of Cheshire West and Chester.

[2]  Backford Cross is located around the A41/A5117 junction, south of Great Sutton and about 1.5 mi north of the village of Backford, near Chester.

[3]  Backford Cross is largely made up of residential homes built from 1990 onwards and serves as a commuter village to Ellesmere Port and Chester, although inhabitants show no allegiance to either locality.

[4]  The area is split between postcode districts, with parts of the village in Great Sutton, Ellesmere Port CH66 and other areas in Backford, Chester CH1.

**A41 road**

[0] The A41 is a major trunk road in England that links London and Birkenhead, although it has now in parts been superseded by motorways.

[1]  It passes through or near various towns and cities including Watford, Kings Langley, Hemel Hempstead, Aylesbury, Solihull, Birmingham, West Bromwich, Wolverhampton, Newport, Whitchurch, Chester and Ellesmere Port.

Synthetic conflicting passage:

The major trunk road through Backford Cross is The A49. It is not The A41. This reference entry describes the particular subject and historical detail identified in the preceding statement. The description concerns that subject alone, rather than a similarly named person, place, organization, or work. The wording refers to the same event, period, and relationship throughout the account. Other details about the subject are outside the scope of this short entry.

Irrelevant passage: **Wallace and Gromit's World of Invention**

Wallace and Gromit's World of Invention is a science-themed miniseries featuring the animated claymation characters Wallace and Gromit, made by Aardman and aired on BBC One.  The BBC said in a press statement that in the series, "Wallace will take a light hearted and humorous look at the real-life inventors, contraptions, gadgets and inventions, with the silent help of Gromit.  The series aims to inspire a whole new generation of innovative minds by showing them real, but mind-boggling, machines and inventions from around the world that have influenced his illustrious inventing career."

Donor provenance: {"rowIndex":5015,"questionId":"5a7180205542994082a3e856","passageIndex":4,"title":"Wallace and Gromit's World of Invention","sentences":["Wallace and Gromit's World of Invention is a science-themed miniseries featuring the animated claymation characters Wallace and Gromit, made by Aardman and aired on BBC One."," The BBC said in a press statement that in the series, \"Wallace will take a light hearted and humorous look at the real-life inventors, contraptions, gadgets and inventions, with the silent help of Gromit."," The series aims to inspire a whole new generation of innovative minds by showing them real, but mind-boggling, machines and inventions from around the world that have influenced his illustrious inventing career.\""]}

Review: Contradicts the answer-bearing relation: major trunk road through Backford Cross. The false assertion explicitly excludes the gold value in the same scope. The source sentence and complete supporting passages are retained for review.

Independent source passage about Wallace and Gromit's World of Invention; no shared content terms with the question or supporting passages, and no answer or evidence-subject match. Review alongside the paired question is in noise-review.md.

Checks: original supporting passages and sentence indices preserved; labeled source span; distinct alternative with scoped denial; unrelated donor 70–100 words; distinct donor; no answer, title or content-term overlap.

## 15. 5a89f5815542993b751ca9c5 (row 121)

Question: In which role did Caroline Carver played in a 1999 Hallmark Entertainment made-for-TV fantasy movie?

Gold answer (review only): Princess Jessica

Relation checked: role played by Caroline Carver in The Magical Legend of the Leprechauns

Labeled source: Caroline Carver (actress) [0]

Caroline Carver (born 1976) is an English actress, screenwriter, and producer best known for roles such as Princess Jessica in the TV film "The Magical Legend of the Leprechauns" (1999), Ingrid in "The Aryan Couple" (2004), and Sandy in "My First Wedding" (2006).

Supporting passages:

**The Magical Legend of the Leprechauns**

[0] The Magical Legend of the Leprechauns is a 1999 Hallmark Entertainment made-for-TV fantasy movie.

[1]  It stars Randy Quaid, Colm Meaney, Kieran Culkin, Roger Daltrey, Caroline Carver and Whoopi Goldberg.

[2]  The film contains two main stories that eventually intertwine: the first being the story of an American businessman who visits Ireland and encounters magical leprechauns and the second, a story of a pair of star-crossed lovers who happen to be a fairy and a leprechaun, belonging to opposing sides of a magical war.

[3]  It contains many references to Romeo and Juliet such as two lovers taking poison and feuding clans.

**Caroline Carver (actress)**

[0] Caroline Carver (born 1976) is an English actress, screenwriter, and producer best known for roles such as Princess Jessica in the TV film "The Magical Legend of the Leprechauns" (1999), Ingrid in "The Aryan Couple" (2004), and Sandy in "My First Wedding" (2006).

Synthetic conflicting passage:

The role played by Caroline Carver in The Magical Legend of the Leprechauns is Princess Amelia. It is not Princess Jessica. This reference entry describes the particular subject and historical detail identified in the preceding statement. The description concerns that subject alone, rather than a similarly named person, place, organization, or work. The wording refers to the same event, period, and relationship throughout the account. Other details about the subject are outside the scope of this short entry.

Irrelevant passage: **Wallace and Gromit**

Wallace and Gromit is a British clay animation comedy series created by Nick Park of Aardman Animations.  The series consists of four short films and a feature-length film.  The series centres on Wallace, a good-natured, eccentric, cheese-loving inventor, along with his companion Gromit, a silent yet loyal and intelligent anthropomorphic dog.  Wallace was originally voiced by veteran actor Peter Sallis, but as of 2011, this role has been passed on to Ben Whitehead.  Gromit remains silent, communicating only through means of facial expressions and body language.

Donor provenance: {"rowIndex":5015,"questionId":"5a7180205542994082a3e856","passageIndex":6,"title":"Wallace and Gromit","sentences":["Wallace and Gromit is a British clay animation comedy series created by Nick Park of Aardman Animations."," The series consists of four short films and a feature-length film."," The series centres on Wallace, a good-natured, eccentric, cheese-loving inventor, along with his companion Gromit, a silent yet loyal and intelligent anthropomorphic dog."," Wallace was originally voiced by veteran actor Peter Sallis, but as of 2011, this role has been passed on to Ben Whitehead."," Gromit remains silent, communicating only through means of facial expressions and body language."]}

Review: Contradicts the answer-bearing relation: role played by Caroline Carver in The Magical Legend of the Leprechauns. The false assertion explicitly excludes the gold value in the same scope. The source sentence and complete supporting passages are retained for review.

Independent source passage about Wallace and Gromit; no shared content terms with the question or supporting passages, and no answer or evidence-subject match. Review alongside the paired question is in noise-review.md.

Checks: original supporting passages and sentence indices preserved; labeled source span; distinct alternative with scoped denial; unrelated donor 70–100 words; distinct donor; no answer, title or content-term overlap.

## 16. 5ab7c1a955429928e1fe38c8 (row 124)

Question: The youngest daughter of Lady Mary-Gaye Curzon stars with Douglas Smith and Lucien Laviscount  in what 2017 film?

Gold answer (review only): The Bye Bye Man

Relation checked: title of the 2017 film starring Cressida Bonas, Douglas Smith and Lucien Laviscount

Labeled source: The Bye Bye Man [0]

The Bye Bye Man is a 2017 American supernatural horror film directed by Stacy Title and written by Jonathan Penner, based on the chapter "The Bridge to Body Island" in Robert Damon Schneck's book "The President's Vampire".

Supporting passages:

**The Bye Bye Man**

[0] The Bye Bye Man is a 2017 American supernatural horror film directed by Stacy Title and written by Jonathan Penner, based on the chapter "The Bridge to Body Island" in Robert Damon Schneck's book "The President's Vampire".

[1]  The film stars Douglas Smith, Lucien Laviscount, Cressida Bonas, Doug Jones, Carrie-Anne Moss, Faye Dunaway and Jenna Kanell.

**Cressida Bonas**

[0] Cressida Curzon Bonas (born 18 February 1989) is an English actress, dancer and model.

[1]  She is the youngest daughter of Lady Mary-Gaye Curzon and entrepreneur Jeffrey Bonas, and a granddaughter of Edward Curzon, 6th Earl Howe.

Synthetic conflicting passage:

The title of the 2017 film starring Cressida Bonas, Douglas Smith and Lucien Laviscount is The Quiet House. It is not The Bye Bye Man. This reference entry describes the particular subject and historical detail identified in the preceding statement. The description concerns that subject alone, rather than a similarly named person, place, organization, or work. The wording refers to the same event, period, and relationship throughout the account. Other details about the subject are outside the scope of this short entry.

Irrelevant passage: **Camp Modin**

Camp Modin is the oldest Jewish summer camp in New England.  It was established in 1922 in what is now Lake George Regional Park in Canaan, Maine.  In 1992 the camp moved to Salmon Lake in Maine's Belgrade Lakes region.  An early example of a summer camp intended to provide Jewish children with Hebrew, religious, and cultural education as well as recreation, Camp Modin has been described as "the prototype for camps sponsored by every branch of the community, from socialist Zionists to Orthodox Jews."

Donor provenance: {"rowIndex":5018,"questionId":"5ac4241e5542997ea680ca10","passageIndex":0,"title":"Camp Modin","sentences":["Camp Modin is the oldest Jewish summer camp in New England."," It was established in 1922 in what is now Lake George Regional Park in Canaan, Maine."," In 1992 the camp moved to Salmon Lake in Maine's Belgrade Lakes region."," An early example of a summer camp intended to provide Jewish children with Hebrew, religious, and cultural education as well as recreation, Camp Modin has been described as \"the prototype for camps sponsored by every branch of the community, from socialist Zionists to Orthodox Jews.\""]}

Review: Contradicts the answer-bearing relation: title of the 2017 film starring Cressida Bonas, Douglas Smith and Lucien Laviscount. The false assertion explicitly excludes the gold value in the same scope. The source sentence and complete supporting passages are retained for review.

Independent source passage about Camp Modin; no shared content terms with the question or supporting passages, and no answer or evidence-subject match. Review alongside the paired question is in noise-review.md.

Checks: original supporting passages and sentence indices preserved; labeled source span; distinct alternative with scoped denial; unrelated donor 70–100 words; distinct donor; no answer, title or content-term overlap.

## 17. 5abd01205542992ac4f3819b (row 125)

Question: Mummulgum is a stop on the Bruxner Highway before reaching the town on the banks of which river?

Gold answer (review only): Richmond

Relation checked: river on whose banks Casino, New South Wales lies

Labeled source: Casino, New South Wales [1]

 It lies on the banks of the Richmond River and is situated at the junction of the Bruxner Highway and the Summerland Way.

Supporting passages:

**Casino, New South Wales**

[0] Casino is a town in the Northern Rivers area of New South Wales, Australia, with a population of 9,629 people at the 2011 census .

[1]  It lies on the banks of the Richmond River and is situated at the junction of the Bruxner Highway and the Summerland Way.

**Mummulgum**

[0] Mummulgum is a small rural village in the Northern Rivers region of New South Wales, Australia, 740 kilometres from the state capital, Sydney.

[1]  Mummulgum is located on Shannon Brook between Tenterfield and Casino on the Bruxner Highway (Highway 44).

[2]  It is 58 km south-west of Kyogle with the village and surrounding area being locally administered by Kyogle Council.

[3]  The nearest large town is Casino which is 27 kilometres east of Mummulgum.

Synthetic conflicting passage:

The river on whose banks Casino, New South Wales lies is Clarence. It is not Richmond. This reference entry describes the particular subject and historical detail identified in the preceding statement. The description concerns that subject alone, rather than a similarly named person, place, organization, or work. The wording refers to the same event, period, and relationship throughout the account. Other details about the subject are outside the scope of this short entry.

Irrelevant passage: **Exotic ungulate encephalopathy**

Exotic ungulate encephalopathy is a transmissible spongiform encephalopathy (TSE), or prion disease, identified in infected organs of zoo animals.  This subgroup of the TSEs in captive animals was identified in zoo animals in Great Britain including species of greater kudu, nyala, gemsbok, the common eland, Arabian and Scimitar Oryx, an Ankole-Watusi cow, and an American bison.  Studies indicate that transmission likely occurred via the consumption of feed supplemented with meat and bone meal, although some animals died after the British ban on ground offal in animal feed.  All animals died during the 1990s, with the last death occurring in 1998.

Donor provenance: {"rowIndex":5015,"questionId":"5a7180205542994082a3e856","passageIndex":5,"title":"Exotic ungulate encephalopathy","sentences":["Exotic ungulate encephalopathy is a transmissible spongiform encephalopathy (TSE), or prion disease, identified in infected organs of zoo animals."," This subgroup of the TSEs in captive animals was identified in zoo animals in Great Britain including species of greater kudu, nyala, gemsbok, the common eland, Arabian and Scimitar Oryx, an Ankole-Watusi cow, and an American bison."," Studies indicate that transmission likely occurred via the consumption of feed supplemented with meat and bone meal, although some animals died after the British ban on ground offal in animal feed."," All animals died during the 1990s, with the last death occurring in 1998."]}

Review: Contradicts the answer-bearing relation: river on whose banks Casino, New South Wales lies. The false assertion explicitly excludes the gold value in the same scope. The source sentence and complete supporting passages are retained for review.

Independent source passage about Exotic ungulate encephalopathy; no shared content terms with the question or supporting passages, and no answer or evidence-subject match. Review alongside the paired question is in noise-review.md.

Checks: original supporting passages and sentence indices preserved; labeled source span; distinct alternative with scoped denial; unrelated donor 70–100 words; distinct donor; no answer, title or content-term overlap.

## 18. 5ab69c25554299110f219a39 (row 126)

Question: Which American audio engineer and clandestine chemist, who was a key figure in the San Francisco Bay Area hippie movement during the 1960s recorded the album "Old and in the Way?"

Gold answer (review only): Owsley Stanley

Relation checked: audio engineer who recorded Old and in the Way with Vickie Babcock

Labeled source: Old and in the Way (album) [1]

 It was recorded 8 October 1973 at the Boarding House in San Francisco by Owsley Stanley and Vickie Babcock utilizing eight microphones (four per channel) mixed live onto a stereo Nagra tape recorder.

Supporting passages:

**Old and in the Way (album)**

[0] Old and in the Way is the self-titled first album by the bluegrass band Old and in the Way.

[1]  It was recorded 8 October 1973 at the Boarding House in San Francisco by Owsley Stanley and Vickie Babcock utilizing eight microphones (four per channel) mixed live onto a stereo Nagra tape recorder.

[2]  The caricature album cover was illustrated by Greg Irons.

[3]  For many years it was the top selling bluegrass album of all time , until that title was taken by the soundtrack album for O Brother, Where Art Thou.

**Owsley Stanley**

[0] Owsley Stanley (born Augustus Owsley Stanley III, January 19, 1935 – March 12, 2011) was an American audio engineer and clandestine chemist.

[1]  He was a key figure in the San Francisco Bay Area hippie movement during the 1960s and played a pivotal role in the counterculture of the 1960s.

[2]  Under the professional name Bear, he was the soundman for the rock band the Grateful Dead, whom he met when Ken Kesey invited them to an Acid Test party.

[3]  As their sound engineer, Stanley frequently recorded live tapes behind his mixing board, designed their trademark skull logo, and developed their Wall of Sound sound system, one of the largest mobile public address systems ever constructed.

Synthetic conflicting passage:

The audio engineer who recorded Old and in the Way with Vickie Babcock is Ken Scott. It is not Owsley Stanley. This reference entry describes the particular subject and historical detail identified in the preceding statement. The description concerns that subject alone, rather than a similarly named person, place, organization, or work. The wording refers to the same event, period, and relationship throughout the account. Other details about the subject are outside the scope of this short entry.

Irrelevant passage: **The Front Line (2011 film)**

The Front Line (; also known as "Battle of Highlands") is a 2011 South Korean war film directed by Jang Hoon, set during the 1953 ceasefire of the Korean War.  This is the third film by director Jang Hoon, after completing "Secret Reunion" and "Rough Cut".  It was selected as South Korea's submission to the 84th Academy Awards for Best Foreign Language Film, but did not make the final shortlist.  It also won four Grand Bell Awards, including Best Film.

Donor provenance: {"rowIndex":5016,"questionId":"5a88f2cc55429938390d3ffb","passageIndex":3,"title":"The Front Line (2011 film)","sentences":["The Front Line (; also known as \"Battle of Highlands\") is a 2011 South Korean war film directed by Jang Hoon, set during the 1953 ceasefire of the Korean War."," This is the third film by director Jang Hoon, after completing \"Secret Reunion\" and \"Rough Cut\"."," It was selected as South Korea's submission to the 84th Academy Awards for Best Foreign Language Film, but did not make the final shortlist."," It also won four Grand Bell Awards, including Best Film."]}

Review: Contradicts the answer-bearing relation: audio engineer who recorded Old and in the Way with Vickie Babcock. The false assertion explicitly excludes the gold value in the same scope. The source sentence and complete supporting passages are retained for review.

Independent source passage about The Front Line (2011 film); no shared content terms with the question or supporting passages, and no answer or evidence-subject match. Review alongside the paired question is in noise-review.md.

Checks: original supporting passages and sentence indices preserved; labeled source span; distinct alternative with scoped denial; unrelated donor 70–100 words; distinct donor; no answer, title or content-term overlap.

## 19. 5a7b12a355429927d897bf2a (row 127)

Question: When was the palace founded at which Columba de Dunbar died in 1435?

Gold answer (review only): the late 12th Century

Relation checked: founding period of Spynie Palace

Labeled source: Spynie Palace [1]

 The founding of the palace dates back to the late 12th Century.

Supporting passages:

**Columba de Dunbar**

[0] Columba de Dunbar ( 1386 – 1435) was Bishop of Moray from 1422 until his death at Spynie Palace near Elgin sometime before 7 November 1435.

**Spynie Palace**

[0] Spynie Palace, also known as Spynie Castle, was the fortified seat of the Bishops of Moray for about 500 years.

[1]  The founding of the palace dates back to the late 12th Century.

[2]  It is situated at Grid Ref NJ 230658, about 500m from the location of the first officially settled Cathedral Church of the Diocese of Moray, in present-day Spynie Churchyard.

[3]  For most of its occupied history, the castle was not described as a "palace" — this term first appeared in the Registry of Moray in a writ of 1524.

Synthetic conflicting passage:

The founding period of Spynie Palace is the late 13th Century. It is not the late 12th Century. This reference entry describes the particular subject and historical detail identified in the preceding statement. The description concerns that subject alone, rather than a similarly named person, place, organization, or work. The wording refers to the same event, period, and relationship throughout the account. Other details about the subject are outside the scope of this short entry.

Irrelevant passage: **Stefan Zweig: Farewell to Europe**

Stefan Zweig: Farewell to Europe (German: Vor der Morgenröte ) is a 2016 internationally co-produced drama film directed by Maria Schrader.  It was listed as one of eight films that could be the German submission for the Best Foreign Language Film at the 89th Academy Awards, but it was not selected.  However, it was later chosen as the Austrian entry for the Best Foreign Language Film at the 89th Academy Awards but it was not nominated.

Donor provenance: {"rowIndex":5016,"questionId":"5a88f2cc55429938390d3ffb","passageIndex":2,"title":"Stefan Zweig: Farewell to Europe","sentences":["Stefan Zweig: Farewell to Europe (German: Vor der Morgenröte ) is a 2016 internationally co-produced drama film directed by Maria Schrader."," It was listed as one of eight films that could be the German submission for the Best Foreign Language Film at the 89th Academy Awards, but it was not selected."," However, it was later chosen as the Austrian entry for the Best Foreign Language Film at the 89th Academy Awards but it was not nominated."]}

Review: Contradicts the answer-bearing relation: founding period of Spynie Palace. The false assertion explicitly excludes the gold value in the same scope. The source sentence and complete supporting passages are retained for review.

Independent source passage about Stefan Zweig: Farewell to Europe; no shared content terms with the question or supporting passages, and no answer or evidence-subject match. Review alongside the paired question is in noise-review.md.

Checks: original supporting passages and sentence indices preserved; labeled source span; distinct alternative with scoped denial; unrelated donor 70–100 words; distinct donor; no answer, title or content-term overlap.

## 20. 5ae0006755429925eb1afbd3 (row 128)

Question: Where is the Bubblegum Alley, that is similar to Gum Wall, located in California?

Gold answer (review only): San Luis Obispo, California

Relation checked: location of Bubblegum Alley

Labeled source: Gum Wall [2]

 Similar to Bubblegum Alley in San Luis Obispo, California, the Market Theater Gum Wall is a local landmark.

Supporting passages:

**San Luis Obispo, California**

[0] San Luis Obispo ( ; Spanish for "St. Louis, the Bishop [of Toulouse]"), or SLO for short, is a city in the U.S. state of California, located roughly midway between Los Angeles and San Francisco on the Central Coast.

[1]  The population was 45,119 at the 2010 census.

[2]  The population of San Luis Obispo County was 269,637 in 2010.

**Gum Wall**

[0] The Market Theater Gum Wall is a brick wall covered in used chewing gum, in an alleyway in downtown Seattle.

[1]  It is located in Post Alley under Pike Place Market.

[2]  Similar to Bubblegum Alley in San Luis Obispo, California, the Market Theater Gum Wall is a local landmark.

[3]  Parts of the wall can be covered several inches thick, 15 feet high for 50 feet.

Synthetic conflicting passage:

The location of Bubblegum Alley is Monterey, California. It is not San Luis Obispo, California. This reference entry describes the particular subject and historical detail identified in the preceding statement. The description concerns that subject alone, rather than a similarly named person, place, organization, or work. The wording refers to the same event, period, and relationship throughout the account. Other details about the subject are outside the scope of this short entry.

Irrelevant passage: **Zoo Parade**

Zoo Parade is an American television program broadcast from 1950 to 1957 that featured animals from the Lincoln Park Zoo in Chicago.  The program's host was Marlin Perkins, the Zoo's director.  Perkins went on to host the program "Wild Kingdom".  Jim Wehmeyer has described the show: "A precursor of sorts to the regularly featured animal segments on "The Tonight Show" and other late-night talk shows, "Zoo Parade" was a location-bound production (filmed in the reptile house basement) during which Perkins would present and describe the life and peculiarities of Lincoln Park Zoo animals."

Donor provenance: {"rowIndex":5015,"questionId":"5a7180205542994082a3e856","passageIndex":9,"title":"Zoo Parade","sentences":["Zoo Parade is an American television program broadcast from 1950 to 1957 that featured animals from the Lincoln Park Zoo in Chicago."," The program's host was Marlin Perkins, the Zoo's director."," Perkins went on to host the program \"Wild Kingdom\"."," Jim Wehmeyer has described the show: \"A precursor of sorts to the regularly featured animal segments on \"The Tonight Show\" and other late-night talk shows, \"Zoo Parade\" was a location-bound production (filmed in the reptile house basement) during which Perkins would present and describe the life and peculiarities of Lincoln Park Zoo animals.\""]}

Review: Contradicts the answer-bearing relation: location of Bubblegum Alley. The false assertion explicitly excludes the gold value in the same scope. The source sentence and complete supporting passages are retained for review.

Independent source passage about Zoo Parade; no shared content terms with the question or supporting passages, and no answer or evidence-subject match. Review alongside the paired question is in noise-review.md.

Checks: original supporting passages and sentence indices preserved; labeled source span; distinct alternative with scoped denial; unrelated donor 70–100 words; distinct donor; no answer, title or content-term overlap.

## 21. 5a80071f5542992bc0c4a684 (row 132)

Question: Alice David is the voice of Lara Croft in a video game developed by which company ?

Gold answer (review only): Crystal Dynamics

Relation checked: developer of the Tomb Raider video game voiced by Alice David

Labeled source: Tomb Raider (2013 video game) [0]

Tomb Raider is an action-adventure video game developed by Crystal Dynamics and published by Square Enix.

Supporting passages:

**Tomb Raider (2013 video game)**

[0] Tomb Raider is an action-adventure video game developed by Crystal Dynamics and published by Square Enix.

[1]  "Tomb Raider" is the tenth title in the "Tomb Raider" franchise, and operates as a reboot that reconstructs the origins of Lara Croft.

[2]  "Tomb Raider" was released on 5 March 2013 for Microsoft Windows, PlayStation 3 and Xbox 360, and on 23 January 2014 for OS X, and on 27 April 2016 for Linux.

**Alice David**

[0] Alice David (born 22 March 1987) is a French actress, known for the television series "Bref" (2011) and the film "Babysitting" (2014).

[1]  She is the voice of the French dub of Lara Croft in the video game "Tomb Raider".

Synthetic conflicting passage:

The developer of the Tomb Raider video game voiced by Alice David is Naughty Dog. It is not Crystal Dynamics. This reference entry describes the particular subject and historical detail identified in the preceding statement. The description concerns that subject alone, rather than a similarly named person, place, organization, or work. The wording refers to the same event, period, and relationship throughout the account. Other details about the subject are outside the scope of this short entry.

Irrelevant passage: **301, 302**

301, 302 or "301/302" is a 1995 South Korean film directed by Park Chul-soo.  It tells the story of two South Korean women, neighbors in the same apartment building, who take very different approaches to the difficulties of modern life; one indulges in food, sex, and spending while the other lives in self-imposed austerity.  The film was selected as the South Korean entry for the Best Foreign Language Film at the 68th Academy Awards, but was not accepted as a nominee.

Donor provenance: {"rowIndex":5016,"questionId":"5a88f2cc55429938390d3ffb","passageIndex":4,"title":"301, 302","sentences":["301, 302 or \"301/302\" is a 1995 South Korean film directed by Park Chul-soo."," It tells the story of two South Korean women, neighbors in the same apartment building, who take very different approaches to the difficulties of modern life; one indulges in food, sex, and spending while the other lives in self-imposed austerity."," The film was selected as the South Korean entry for the Best Foreign Language Film at the 68th Academy Awards, but was not accepted as a nominee."]}

Review: Contradicts the answer-bearing relation: developer of the Tomb Raider video game voiced by Alice David. The false assertion explicitly excludes the gold value in the same scope. The source sentence and complete supporting passages are retained for review.

Independent source passage about 301, 302; no shared content terms with the question or supporting passages, and no answer or evidence-subject match. Review alongside the paired question is in noise-review.md.

Checks: original supporting passages and sentence indices preserved; labeled source span; distinct alternative with scoped denial; unrelated donor 70–100 words; distinct donor; no answer, title or content-term overlap.

## 22. 5ae73c065542991e8301cc18 (row 133)

Question: Which Eminem album included vocals from a singer who had an album titled "Unapologetic"?

Gold answer (review only): "The Marshall Mathers LP 2"

Relation checked: Eminem album containing The Monster featuring Rihanna

Labeled source: The Monster (song) [0]

"The Monster" is a song by American rapper Eminem, featuring guest vocals from Barbadian singer Rihanna, taken from Eminem's album "The Marshall Mathers LP 2" (2013).

Supporting passages:

**The Monster (song)**

[0] "The Monster" is a song by American rapper Eminem, featuring guest vocals from Barbadian singer Rihanna, taken from Eminem's album "The Marshall Mathers LP 2" (2013).

[1]  The song was written by Eminem, Jon Bellion, and Bebe Rexha, with production handled by Frequency.

[2]  "The Monster" marks the fourth collaboration between Eminem and Rihanna, following "Love the Way You Lie", its sequel "Love the Way You Lie (Part II)" (2010), and "Numb" (2012).

[3]  "The Monster" was released on October 29, 2013, as the fourth single from the album.

[4]  The song's lyrics present Rihanna coming to grips with her inner demons, while Eminem ponders the negative effects of his fame.

**Numb (Rihanna song)**

[0] "Numb" is a song by Barbadian singer Rihanna from her seventh studio album "Unapologetic" (2012).

[1]  It features guest vocals by American rapper Eminem, making it the pair's third collaboration since the two official versions of "Love the Way You Lie".

[2]  Following the album's release, "Numb" charted on multiple charts worldwide including in Canada, the United Kingdom and the United States.

Synthetic conflicting passage:

The Eminem album containing The Monster featuring Rihanna is Encore. It is not "The Marshall Mathers LP 2". This reference entry describes the particular subject and historical detail identified in the preceding statement. The description concerns that subject alone, rather than a similarly named person, place, organization, or work. The wording refers to the same event, period, and relationship throughout the account. Other details about the subject are outside the scope of this short entry.

Irrelevant passage: **Deaf Sam-yong (1964 film)**

Deaf Sam-yong (Korean: 벙어리 삼룡 ; "Beongeori Samryong") is a 1964 South Korean drama film directed, produced by Shin Sang-ok, based on the 1925 short story of the sama title by Na Do-hyang.  It was chosen as Best Film at the Grand Bell Awards.  The film was also selected as the South Korean entry for the Best Foreign Language Film at the 37th Academy Awards, but was not accepted as a nominee.

Donor provenance: {"rowIndex":5016,"questionId":"5a88f2cc55429938390d3ffb","passageIndex":6,"title":"Deaf Sam-yong (1964 film)","sentences":["Deaf Sam-yong (Korean: 벙어리 삼룡 ; \"Beongeori Samryong\") is a 1964 South Korean drama film directed, produced by Shin Sang-ok, based on the 1925 short story of the sama title by Na Do-hyang."," It was chosen as Best Film at the Grand Bell Awards."," The film was also selected as the South Korean entry for the Best Foreign Language Film at the 37th Academy Awards, but was not accepted as a nominee."]}

Review: Contradicts the answer-bearing relation: Eminem album containing The Monster featuring Rihanna. The false assertion explicitly excludes the gold value in the same scope. The source sentence and complete supporting passages are retained for review.

Independent source passage about Deaf Sam-yong (1964 film); no shared content terms with the question or supporting passages, and no answer or evidence-subject match. Review alongside the paired question is in noise-review.md.

Checks: original supporting passages and sentence indices preserved; labeled source span; distinct alternative with scoped denial; unrelated donor 70–100 words; distinct donor; no answer, title or content-term overlap.

## 23. 5ac2ffbd554299677310267b (row 135)

Question: SuperMansion starred the actress who had a recurring role as whom on Workaholics?

Gold answer (review only): Jillian Belk

Relation checked: character played by Jillian Bell on Workaholics

Labeled source: Jillian Bell [1]

 She is best known for her recurring roles as Jillian Belk on "Workaholics" and Dixie on the final season of "Eastbound & Down", as well as appearing in "22 Jump Street" and "Fist Fight" (2017).

Supporting passages:

**SuperMansion**

[0] SuperMansion is an American stop-motion animated comedy television series created by Matthew Senreich and Zeb Wells.

[1]  The series stars Bryan Cranston, Heidi Gardner, Tucker Gilmore, Keegan-Michael Key, Tom Root, Yvette Nicole Brown, Zeb Wells, and Jillian Bell.

[2]  The series premiered on Crackle on October 8, 2015.

**Jillian Bell**

[0] Jillian Leigh Bell (born April 25, 1984) is an American comedian, actress, and screenwriter.

[1]  She is best known for her recurring roles as Jillian Belk on "Workaholics" and Dixie on the final season of "Eastbound & Down", as well as appearing in "22 Jump Street" and "Fist Fight" (2017).

Synthetic conflicting passage:

The character played by Jillian Bell on Workaholics is Dixie. It is not Jillian Belk. This reference entry describes the particular subject and historical detail identified in the preceding statement. The description concerns that subject alone, rather than a similarly named person, place, organization, or work. The wording refers to the same event, period, and relationship throughout the account. Other details about the subject are outside the scope of this short entry.

Irrelevant passage: **Mulleya Mulleya**

Mulleya Mulleya ( ; also known as Spinning the Tales of Cruelty Towards Women), is a 1984 South Korean film directed by Lee Doo-yong.  It was chosen as Best Film at the Grand Bell Awards.  It was screened in the Un Certain Regard section of the 1984 Cannes Film Festival.  The film was also selected as the South Korean entry for the Best Foreign Language Film at the 57th Academy Awards, but was not accepted as a nominee.

Donor provenance: {"rowIndex":5016,"questionId":"5a88f2cc55429938390d3ffb","passageIndex":9,"title":"Mulleya Mulleya","sentences":["Mulleya Mulleya ( ; also known as Spinning the Tales of Cruelty Towards Women), is a 1984 South Korean film directed by Lee Doo-yong."," It was chosen as Best Film at the Grand Bell Awards."," It was screened in the Un Certain Regard section of the 1984 Cannes Film Festival."," The film was also selected as the South Korean entry for the Best Foreign Language Film at the 57th Academy Awards, but was not accepted as a nominee."]}

Review: Contradicts the answer-bearing relation: character played by Jillian Bell on Workaholics. The false assertion explicitly excludes the gold value in the same scope. The source sentence and complete supporting passages are retained for review.

Independent source passage about Mulleya Mulleya; no shared content terms with the question or supporting passages, and no answer or evidence-subject match. Review alongside the paired question is in noise-review.md.

Checks: original supporting passages and sentence indices preserved; labeled source span; distinct alternative with scoped denial; unrelated donor 70–100 words; distinct donor; no answer, title or content-term overlap.

## 24. 5a7c960655429935c91b5244 (row 136)

Question: The 1974 Texas Tech Raiders football team represented what public research university in Lubbock, Texas?

Gold answer (review only): Texas Tech University

Relation checked: university represented by the 1974 Texas Tech Red Raiders football team

Labeled source: 1974 Texas Tech Red Raiders football team [0]

The 1974 Texas Tech Red Raiders football team represented Texas Tech University in the Southwest Conference during the 1974 NCAA Division I football season.

Supporting passages:

**Texas Tech University**

[0] Texas Tech University, often referred to as Texas Tech, Tech, or TTU, is a public research university in Lubbock, Texas.

[1]  Established on  10, 1923 (1923--) , and originally known as Texas Technological College, it is the flagship institution of the four-institution Texas Tech University System.

[2]  The university's student enrollment is the sixth-largest in Texas as of the Fall 2014 semester.

[3]  The university shares its campus with Texas Tech University Health Sciences Center, making it the only campus in Texas to house an undergraduate university, law school, and medical school.

**1974 Texas Tech Red Raiders football team**

[0] The 1974 Texas Tech Red Raiders football team represented Texas Tech University in the Southwest Conference during the 1974 NCAA Division I football season.

[1]  In their fifth and final season under head coach Jim Carlen, the Red Raiders compiled a 6–4–2 record (3–4 against conference opponents), finished in sixth place in the conference, and outscored opponents by a combined total of 193 to 158.

[2]  The team's statistical leaders included Tommy Duniven with 552 passing yards, Larry Isaac with 671 rushing yards, and Lawrence Williams with 477 receiving yards.

[3]  The team played its home games at Clifford B. & Audrey Jones Stadium.

Synthetic conflicting passage:

The university represented by the 1974 Texas Tech Red Raiders football team is Baylor University. It is not Texas Tech University. This reference entry describes the particular subject and historical detail identified in the preceding statement. The description concerns that subject alone, rather than a similarly named person, place, organization, or work. The wording refers to the same event, period, and relationship throughout the account. Other details about the subject are outside the scope of this short entry.

Irrelevant passage: **Belgrade Lakes**

The Belgrade Lakes are a chain of lakes around Belgrade, Maine.  The flow sequence is from East Pond to North Pond to Great Pond to Long Pond to Messalonskee Lake and thence via Messalonskee Stream to the Kennebec River at Waterville.  The lakes have long been an important resort area for fishing, boating, and swimming; and shoreline development includes residences for individuals employed in the cities of Waterville and Augusta.

Donor provenance: {"rowIndex":5018,"questionId":"5ac4241e5542997ea680ca10","passageIndex":8,"title":"Belgrade Lakes","sentences":["The Belgrade Lakes are a chain of lakes around Belgrade, Maine."," The flow sequence is from East Pond to North Pond to Great Pond to Long Pond to Messalonskee Lake and thence via Messalonskee Stream to the Kennebec River at Waterville."," The lakes have long been an important resort area for fishing, boating, and swimming; and shoreline development includes residences for individuals employed in the cities of Waterville and Augusta."]}

Review: Contradicts the answer-bearing relation: university represented by the 1974 Texas Tech Red Raiders football team. The false assertion explicitly excludes the gold value in the same scope. The source sentence and complete supporting passages are retained for review.

Independent source passage about Belgrade Lakes; no shared content terms with the question or supporting passages, and no answer or evidence-subject match. Review alongside the paired question is in noise-review.md.

Checks: original supporting passages and sentence indices preserved; labeled source span; distinct alternative with scoped denial; unrelated donor 70–100 words; distinct donor; no answer, title or content-term overlap.

## 25. 5a7d61775542991319bc93b9 (row 137)

Question: During Siege of Bharatpur, which Commander-in-Chief of Ireland and Commander-in-Chief of India contributed to the storming of the castle?

Gold answer (review only): Lord Combermere

Relation checked: commander of the British troops storming Bharatpur in January 1826

Labeled source: Siege of Bharatpur [1]

 British troops under Lord Combermere initially surrounded the state's capital until on 18January 1826 its fortress was stormed and captured.

Supporting passages:

**Stapleton Cotton, 1st Viscount Combermere**

[0] Field Marshal Stapleton Cotton, 1st Viscount Combermere {'1': ", '2': ", '3': ", '4': "} (14 November 1773 – 21 February 1865), was a British Army officer, diplomat and politician.

[1]  As a junior officer he took part in the Flanders Campaign, in the Fourth Anglo-Mysore War and in the suppression of Robert Emmet's insurrection in 1803.

[2]  He commanded a cavalry brigade in Sir Arthur Wellesley's Army before being given overall command of the cavalry in the latter stages of the Peninsular War.

[3]  He went on to be Commander-in-Chief, Ireland and then Commander-in-Chief, India.

[4]  In the latter role he stormed Bharatpur—a fort which previously had been deemed impregnable.

**Siege of Bharatpur**

[0] The Siege of Bharatpore was a siege that took place in the Indian princely state of Bharatpur (now part of Rajasthan) between December 1825 and January 1826.

[1]  British troops under Lord Combermere initially surrounded the state's capital until on 18January 1826 its fortress was stormed and captured.

Synthetic conflicting passage:

The commander of the British troops storming Bharatpur in January 1826 is Lord Wellington. It is not Lord Combermere. This reference entry describes the particular subject and historical detail identified in the preceding statement. The description concerns that subject alone, rather than a similarly named person, place, organization, or work. The wording refers to the same event, period, and relationship throughout the account. Other details about the subject are outside the scope of this short entry.

Irrelevant passage: **Think! (James Brown album)**

Think!  is the third studio album by James Brown and The Famous Flames, featuring the hit singles "Baby You're Right" and their cover of "Bewildered", along with the group's hit cover of the title track, "Think" originally recorded by The "5" Royales.  It also includes the national hits "I'll Go Crazy", "This Old Heart" and "Baby, You're Right", the regional hit "Good Good Lovin'", and Brown's B-side hit duet with Bea Ford, "You've Got the Power".  In all, the album features no less than seven national Pop and R&B chart hits, and a few regional hits as well.

Donor provenance: {"rowIndex":5019,"questionId":"5a8db788554299653c1aa145","passageIndex":1,"title":"Think! (James Brown album)","sentences":["Think!"," is the third studio album by James Brown and The Famous Flames, featuring the hit singles \"Baby You're Right\" and their cover of \"Bewildered\", along with the group's hit cover of the title track, \"Think\" originally recorded by The \"5\" Royales."," It also includes the national hits \"I'll Go Crazy\", \"This Old Heart\" and \"Baby, You're Right\", the regional hit \"Good Good Lovin'\", and Brown's B-side hit duet with Bea Ford, \"You've Got the Power\"."," In all, the album features no less than seven national Pop and R&B chart hits, and a few regional hits as well."]}

Review: Contradicts the answer-bearing relation: commander of the British troops storming Bharatpur in January 1826. The false assertion explicitly excludes the gold value in the same scope. The source sentence and complete supporting passages are retained for review.

Independent source passage about Think! (James Brown album); no shared content terms with the question or supporting passages, and no answer or evidence-subject match. Review alongside the paired question is in noise-review.md.

Checks: original supporting passages and sentence indices preserved; labeled source span; distinct alternative with scoped denial; unrelated donor 70–100 words; distinct donor; no answer, title or content-term overlap.

## 26. 5ac1c6805542994ab5c67e11 (row 138)

Question: For what type of work is the production company for The Year Without a Santa Claus best known?

Gold answer (review only): seasonal television specials, particularly its work in stop motion animation

Relation checked: type of production for which Rankin/Bass is known

Labeled source: Rankin/Bass Productions [0]

Rankin/Bass Productions, Inc. (founded as Videocraft International, Ltd.) was an American production company, known for its seasonal television specials, particularly its work in stop motion animation.

Supporting passages:

**Rankin/Bass Productions**

[0] Rankin/Bass Productions, Inc. (founded as Videocraft International, Ltd.) was an American production company, known for its seasonal television specials, particularly its work in stop motion animation.

[1]  The pre-1974 library is owned by Universal Studios (via DreamWorks Animation/DreamWorks Classics), while the post-1973 library is owned by Warner Bros. Rankin/Bass stop-motion features are recognisable by their visual style of doll-like characters with spheroid body parts, and ubiquitous powdery snow using an animation technique called "Animagic".

[2]  Often, traditional cel animation scenes of falling snow would be projected over the action to create the effect of a snowfall.

**The Year Without a Santa Claus**

[0] The Year Without a Santa Claus is a 1974 Christmas stop motion animated television special produced by Rankin/Bass Productions.

[1]  The story is based on Phyllis McGinley's 1956 book of the same name, illustrated by Kurt Werth.

[2]  It was originally broadcast on December 10, 1974 on ABC.

Synthetic conflicting passage:

The type of production for which Rankin/Bass is known is live-action detective dramas. It is not seasonal television specials, particularly its work in stop motion animation. This reference entry describes the particular subject and historical detail identified in the preceding statement. The description concerns that subject alone, rather than a similarly named person, place, organization, or work. The wording refers to the same event, period, and relationship throughout the account. Other details about the subject are outside the scope of this short entry.

Irrelevant passage: **Marshwood High School**

Marshwood High School is a school in York County, Maine, United States.  It serves the towns of Eliot, South Berwick, andRollinsford, and is located near the border between them.  It has been at its current location at 260 Dow Highway (Route 236) in South Berwick since September 1999, when it was moved from its previous location in Eliot.  The current site is about 10 mi from Portsmouth, New Hampshire, and Kittery, Maine.

Donor provenance: {"rowIndex":5018,"questionId":"5ac4241e5542997ea680ca10","passageIndex":4,"title":"Marshwood High School","sentences":["Marshwood High School is a school in York County, Maine, United States."," It serves the towns of Eliot, South Berwick, andRollinsford, and is located near the border between them."," It has been at its current location at 260 Dow Highway (Route 236) in South Berwick since September 1999, when it was moved from its previous location in Eliot."," The current site is about 10 mi from Portsmouth, New Hampshire, and Kittery, Maine."]}

Review: Contradicts the answer-bearing relation: type of production for which Rankin/Bass is known. The false assertion explicitly excludes the gold value in the same scope. The source sentence and complete supporting passages are retained for review.

Independent source passage about Marshwood High School; no shared content terms with the question or supporting passages, and no answer or evidence-subject match. Review alongside the paired question is in noise-review.md.

Checks: original supporting passages and sentence indices preserved; labeled source span; distinct alternative with scoped denial; unrelated donor 70–100 words; distinct donor; no answer, title or content-term overlap.

## 27. 5a7a230e5542996a35c170ee (row 139)

Question: What year was the film that starred the composer for "The Naked Brothers Band"?

Gold answer (review only): 2014

Relation checked: release year of The Fault in Our Stars

Labeled source: The Fault in Our Stars (film) [0]

The Fault in Our Stars is a 2014 American romantic drama film directed by Josh Boone, based on the novel of the same name by John Green.

Supporting passages:

**The Fault in Our Stars (film)**

[0] The Fault in Our Stars is a 2014 American romantic drama film directed by Josh Boone, based on the novel of the same name by John Green.

[1]  The film stars Shailene Woodley, Ansel Elgort, and Nat Wolff, with Laura Dern, Sam Trammell, and Willem Dafoe playing supporting roles.

[2]  Woodley plays Hazel Grace Lancaster, a sixteen-year-old cancer patient who is forced by her parents to attend a support group, where she meets and subsequently falls in love with Augustus Waters, another cancer patient, played by Elgort.

**Nat Wolff**

[0] Nathaniel Marvin "Nat" Wolff (born December 17, 1994) is an American actor, singer-songwriter, and musician.

[1]  Wolff gained recognition for composing the music for "The Naked Brothers Band" (2007–09), a Nickelodeon television series he starred in with his younger brother Alex that was created by their actress mother Polly Draper.

[2]  Wolff's jazz pianist father Michael Wolff co-produced the series' soundtrack albums, "The Naked Brothers Band" (2007) and "I Don't Want to Go to School" (2008); the former of which ranked the 23rd spot on the "Billboard" 200 charts.

Synthetic conflicting passage:

The release year of The Fault in Our Stars is 2015. It is not 2014. This reference entry describes the particular subject and historical detail identified in the preceding statement. The description concerns that subject alone, rather than a similarly named person, place, organization, or work. The wording refers to the same event, period, and relationship throughout the account. Other details about the subject are outside the scope of this short entry.

Irrelevant passage: **Belgrade, Maine**

Belgrade is a town in Kennebec County, Maine, United States.  The population was 3,189 at the 2010 census.  Belgrade's population, however, approximately doubles during the summer months as part-year residents return to seasonal camps located on the shores of Great Pond, Long Pond and Messalonskee Lake.  Belgrade includes the villages of North Belgrade, Belgrade Depot and Belgrade Lakes (or The Village).  Belgrade is included in the Augusta, Maine micropolitan New England City and Town Area.

Donor provenance: {"rowIndex":5018,"questionId":"5ac4241e5542997ea680ca10","passageIndex":6,"title":"Belgrade, Maine","sentences":["Belgrade is a town in Kennebec County, Maine, United States."," The population was 3,189 at the 2010 census."," Belgrade's population, however, approximately doubles during the summer months as part-year residents return to seasonal camps located on the shores of Great Pond, Long Pond and Messalonskee Lake."," Belgrade includes the villages of North Belgrade, Belgrade Depot and Belgrade Lakes (or The Village)."," Belgrade is included in the Augusta, Maine micropolitan New England City and Town Area."]}

Review: Contradicts the answer-bearing relation: release year of The Fault in Our Stars. The false assertion explicitly excludes the gold value in the same scope. The source sentence and complete supporting passages are retained for review.

Independent source passage about Belgrade, Maine; no shared content terms with the question or supporting passages, and no answer or evidence-subject match. Review alongside the paired question is in noise-review.md.

Checks: original supporting passages and sentence indices preserved; labeled source span; distinct alternative with scoped denial; unrelated donor 70–100 words; distinct donor; no answer, title or content-term overlap.

## 28. 5ae4627d5542991a06ce9a4d (row 140)

Question: The author of Sexual Politics attended which British University?

Gold answer (review only): Oxford

Relation checked: British university attended by Kate Millett

Labeled source: Kate Millett [1]

 She attended Oxford University and was the first American woman to be awarded a degree with first-class honors after studying at St Hilda's College, Oxford.

Supporting passages:

**Kate Millett**

[0] Katherine Murray Millett (September 14, 1934 – September 6, 2017) was an American feminist writer, educator, artist, and activist.

[1]  She attended Oxford University and was the first American woman to be awarded a degree with first-class honors after studying at St Hilda's College, Oxford.

[2]  She has been described as "a seminal influence on second-wave feminism", and is best known for her book "Sexual Politics" (1970), which was based on her doctoral dissertation at Columbia University.

[3]  Journalist Liza Featherstone attributes previously unimaginable "legal abortion, greater professional equality between the sexes, and a sexual freedom" being made possible partially due to Millett's efforts.

**Sexual Politics**

[0] Sexual Politics is a 1970 book by Kate Millett, based on her PhD dissertation.

Synthetic conflicting passage:

The British university attended by Kate Millett is Cambridge. It is not Oxford. This reference entry describes the particular subject and historical detail identified in the preceding statement. The description concerns that subject alone, rather than a similarly named person, place, organization, or work. The wording refers to the same event, period, and relationship throughout the account. Other details about the subject are outside the scope of this short entry.

Irrelevant passage: **Grandmother Fish**

Grandmother Fish: A Child's First Book of Evolution was written by Jonathan Tweet.  The book explains Charles Darwin's theory of common descent and its target audience is 3–5-year-olds.  It uses a call-and-response interaction between speaker and listener, where the child is asked to mimic the behavior of various animals from our evolutionary past.  The book is illustrated by Karen Lewis with colored artwork.  "Grandmother Fish" takes children and adults through the history of life on our planet and explains how we are connected.

Donor provenance: {"rowIndex":5020,"questionId":"5ae49f2c5542995ad6573dc1","passageIndex":1,"title":"Grandmother Fish","sentences":["Grandmother Fish: A Child's First Book of Evolution was written by Jonathan Tweet."," The book explains Charles Darwin's theory of common descent and its target audience is 3–5-year-olds."," It uses a call-and-response interaction between speaker and listener, where the child is asked to mimic the behavior of various animals from our evolutionary past."," The book is illustrated by Karen Lewis with colored artwork."," \"Grandmother Fish\" takes children and adults through the history of life on our planet and explains how we are connected."]}

Review: Contradicts the answer-bearing relation: British university attended by Kate Millett. The false assertion explicitly excludes the gold value in the same scope. The source sentence and complete supporting passages are retained for review.

Independent source passage about Grandmother Fish; no shared content terms with the question or supporting passages, and no answer or evidence-subject match. Review alongside the paired question is in noise-review.md.

Checks: original supporting passages and sentence indices preserved; labeled source span; distinct alternative with scoped denial; unrelated donor 70–100 words; distinct donor; no answer, title or content-term overlap.

## 29. 5ab4e3065542990594ba9cb4 (row 142)

Question: Both Truth in Science and Discovery embrace what campaign?

Gold answer (review only): "Teach the Controversy" campaign

Relation checked: campaign promoted by Truth in Science and the Discovery Institute

Labeled source: Truth in Science [0]

Truth in Science is a United Kingdom-based creationist organization which promotes the Discovery Institute's "Teach the Controversy" campaign, which it uses to try to get pseudoscientific intelligent design creationism taught alongside evolution in school science lessons.

Supporting passages:

**Truth in Science**

[0] Truth in Science is a United Kingdom-based creationist organization which promotes the Discovery Institute's "Teach the Controversy" campaign, which it uses to try to get pseudoscientific intelligent design creationism taught alongside evolution in school science lessons.

[1]  The organization claims that there is scientific controversy about the validity of Darwinian evolution, a view rejected by the United Kingdom's Royal Society and over 50 Academies of Science around the world.

[2]  The group is affiliated with the Discovery Institute, the hub of the intelligent design movement, following its strategy and circulating the Institute's promotional materials.

**Discovery Institute**

[0] The Discovery Institute (DI) is a politically conservative non-profit think tank based in Seattle, Washington, best known for its advocacy of the pseudoscientific principle of intelligent design (ID).

[1]  Its "Teach the Controversy" campaign aims to permit teaching of anti-evolution, intelligent-design beliefs in United States public high school science courses alongside accepted scientific theories, positing that a scientific controversy exists over these subjects.

Synthetic conflicting passage:

The campaign promoted by Truth in Science and the Discovery Institute is Design in Schools campaign. It is not "Teach the Controversy" campaign. This reference entry describes the particular subject and historical detail identified in the preceding statement. The description concerns that subject alone, rather than a similarly named person, place, organization, or work. The wording refers to the same event, period, and relationship throughout the account. Other details about the subject are outside the scope of this short entry.

Irrelevant passage: **Skip Harlicka**

Jules Peter "Skip" Harlicka (born October 14, 1946) is an American former NBA basketball player for the Atlanta Hawks.  Skip went to the University of South Carolina on a basketball scholarship, but also played baseball his freshmen year.  During his college basketball career, Skip averaged 17.5 points per game on 47.5% shooting from the field.  Skip was drafted with the 13th pick in the 1968 NBA Draft by the Atlanta Hawks.  He played one season for the Hawks, appearing in 26 games while averaging 4.1 points per game and 1.4 assists per game.

Donor provenance: {"rowIndex":5017,"questionId":"5a8a793555429930ff3c0de7","passageIndex":7,"title":"Skip Harlicka","sentences":["Jules Peter \"Skip\" Harlicka (born October 14, 1946) is an American former NBA basketball player for the Atlanta Hawks."," Skip went to the University of South Carolina on a basketball scholarship, but also played baseball his freshmen year."," During his college basketball career, Skip averaged 17.5 points per game on 47.5% shooting from the field."," Skip was drafted with the 13th pick in the 1968 NBA Draft by the Atlanta Hawks."," He played one season for the Hawks, appearing in 26 games while averaging 4.1 points per game and 1.4 assists per game."]}

Review: Contradicts the answer-bearing relation: campaign promoted by Truth in Science and the Discovery Institute. The false assertion explicitly excludes the gold value in the same scope. The source sentence and complete supporting passages are retained for review.

Independent source passage about Skip Harlicka; no shared content terms with the question or supporting passages, and no answer or evidence-subject match. Review alongside the paired question is in noise-review.md.

Checks: original supporting passages and sentence indices preserved; labeled source span; distinct alternative with scoped denial; unrelated donor 70–100 words; distinct donor; no answer, title or content-term overlap.

## 30. 5ab6a2be554299710c8d1f08 (row 144)

Question: The movies Queen of Blood and Battle Beyond the Sun both contained scenes from what 1959 Soviet feature?

Gold answer (review only): Nebo Zovyot

Relation checked: 1959 Soviet feature whose footage appears in Queen of Blood and Battle Beyond the Sun

Labeled source: Queen of Blood [3]

 Director Harrington reused special effects footage from the Soviet features "Mechte Navstrechu" and "Nebo Zovyot".

Supporting passages:

**Battle Beyond the Sun**

[0] Battle Beyond the Sun is the English-dubbed and re-edited U.S. version of "Nebo Zovyot", a 1959 Soviet science fiction film directed by Mikhail Karyukov and Aleksandr Kozyr.

[1]  It tells of the "space race" of two future nations competing to become the first to land a spacecraft on the planet Mars.

**Queen of Blood**

[0] Queen of Blood is a 1966 color science fiction-horror film based on the screenplay for the earlier, Soviet film called "Mechte Navstrechu".

[1]  The film was produced by George Edwards and Samuel Z. Arkoff, directed by Curtis Harrington, and stars John Saxon, Basil Rathbone, Dennis Hopper, and Judi Meredith.

[2]  "Queen of Blood" was released by American International Pictures on a double bill with "Blood Bath".

[3]  Director Harrington reused special effects footage from the Soviet features "Mechte Navstrechu" and "Nebo Zovyot".

Synthetic conflicting passage:

The 1959 Soviet feature whose footage appears in Queen of Blood and Battle Beyond the Sun is Planeta Bur. It is not Nebo Zovyot. This reference entry describes the particular subject and historical detail identified in the preceding statement. The description concerns that subject alone, rather than a similarly named person, place, organization, or work. The wording refers to the same event, period, and relationship throughout the account. Other details about the subject are outside the scope of this short entry.

Irrelevant passage: **Jez Alborough**

Albrough was born in Kingston upon Thames, southwest London.  After attending obligatory school, Albrough earned his degree at the Norwich School of Art, where he published his first book "A Bun Dance".  He then worked for the Welsh publication "The Listener", where he published "Dotty Definitions".  When his talents as an illustrator were discovered by an outside publisher, he received an offer to write his first children's book "Bare Bear", which was published in 1985.  Alborough has been working as an independent author and illustrator since.  He now lives in Richmond, London, with his Danish wife.

Donor provenance: {"rowIndex":5020,"questionId":"5ae49f2c5542995ad6573dc1","passageIndex":4,"title":"Jez Alborough","sentences":["Albrough was born in Kingston upon Thames, southwest London."," After attending obligatory school, Albrough earned his degree at the Norwich School of Art, where he published his first book \"A Bun Dance\"."," He then worked for the Welsh publication \"The Listener\", where he published \"Dotty Definitions\"."," When his talents as an illustrator were discovered by an outside publisher, he received an offer to write his first children's book \"Bare Bear\", which was published in 1985."," Alborough has been working as an independent author and illustrator since."," He now lives in Richmond, London, with his Danish wife."]}

Review: Contradicts the answer-bearing relation: 1959 Soviet feature whose footage appears in Queen of Blood and Battle Beyond the Sun. The false assertion explicitly excludes the gold value in the same scope. The source sentence and complete supporting passages are retained for review.

Independent source passage about Jez Alborough; no shared content terms with the question or supporting passages, and no answer or evidence-subject match. Review alongside the paired question is in noise-review.md.

Checks: original supporting passages and sentence indices preserved; labeled source span; distinct alternative with scoped denial; unrelated donor 70–100 words; distinct donor; no answer, title or content-term overlap.

## 31. 5ab2a186554299295394677b (row 146)

Question: When did the English local newspaper, featuring the sculpture and war memorial in the Forbury gardens, change names?

Gold answer (review only): 2009

Relation checked: year the Reading Evening Post changed its name to the Reading Post

Labeled source: Reading Post [0]

The Reading Post (until 2009, the Reading Evening Post), was an English local newspaper covering Reading, Berkshire and surrounding areas.

Supporting passages:

**Maiwand Lion**

[0] The Maiwand Lion is a sculpture and war memorial in the Forbury Gardens, a public park in the town of Reading, in the English county of Berkshire.

[1]  The statue was named after the Battle of Maiwand and was erected in 1884 to commemorate the deaths of 329 men from the 66th (Berkshire) Regiment of Foot during the campaign in the Second Anglo-Afghan War in Afghanistan between 1878 and 1880.

[2]  It is sometimes known locally as the Forbury Lion.

**Reading Post**

[0] The Reading Post (until 2009, the Reading Evening Post), was an English local newspaper covering Reading, Berkshire and surrounding areas.

[1]  The title page of the paper featured the Maiwand Lion, a famous local landmark at Forbury Gardens.

[2]  The paper was most recently published by Surrey & Berkshire Media Ltd., a division of Trinity Mirror plc.

Synthetic conflicting passage:

The year the Reading Evening Post changed its name to the Reading Post is 2010. It is not 2009. This reference entry describes the particular subject and historical detail identified in the preceding statement. The description concerns that subject alone, rather than a similarly named person, place, organization, or work. The wording refers to the same event, period, and relationship throughout the account. Other details about the subject are outside the scope of this short entry.

Irrelevant passage: **Maruti Eeco**

The Maruti Eeco was introduced in India by Maruti Suzuki during early 2010.  This car is essentially a stripped down version of defunct Versa.  This is an urgent refresh in lines with Maruti Suzuki not being able to come up with a new minivan.  EECO comes with 5-seater and 7-seater options.  Eeco is equipped with advanced Engine Management System for optimizing fuel efficiency and performance.  It is branded by the manufacturer as "a perfect car for every occasion"-a business trip or a picnic with the loved ones.

Donor provenance: {"rowIndex":5021,"questionId":"5a89217455429938390d4039","passageIndex":1,"title":"Maruti Eeco","sentences":["The Maruti Eeco was introduced in India by Maruti Suzuki during early 2010."," This car is essentially a stripped down version of defunct Versa."," This is an urgent refresh in lines with Maruti Suzuki not being able to come up with a new minivan."," EECO comes with 5-seater and 7-seater options."," Eeco is equipped with advanced Engine Management System for optimizing fuel efficiency and performance."," It is branded by the manufacturer as \"a perfect car for every occasion\"-a business trip or a picnic with the loved ones."]}

Review: Contradicts the answer-bearing relation: year the Reading Evening Post changed its name to the Reading Post. The false assertion explicitly excludes the gold value in the same scope. The source sentence and complete supporting passages are retained for review.

Independent source passage about Maruti Eeco; no shared content terms with the question or supporting passages, and no answer or evidence-subject match. Review alongside the paired question is in noise-review.md.

Checks: original supporting passages and sentence indices preserved; labeled source span; distinct alternative with scoped denial; unrelated donor 70–100 words; distinct donor; no answer, title or content-term overlap.

## 32. 5ab5ed505542997d4ad1f255 (row 148)

Question: Who is Bruce Spizer an expert on, known as the most influential act of the rock era?

Gold answer (review only): The Beatles

Relation checked: musical act on which Bruce Spizer is recognized as an expert

Labeled source: Bruce Spizer [0]

David "Bruce" Spizer (born July 2, 1955) is a tax attorney in New Orleans, Louisiana, who is also recognized as an expert on The Beatles.

Supporting passages:

**The Beatles**

[0] The Beatles were an English rock band formed in Liverpool in 1960.

[1]  With members John Lennon, Paul McCartney, George Harrison and Ringo Starr, they became widely regarded as the foremost and most influential act of the rock era.

[2]  Rooted in skiffle, beat and 1950s rock and roll, the Beatles later experimented with several musical styles, ranging from pop ballads and Indian music to psychedelia and hard rock, often incorporating classical elements and unconventional recording techniques in innovative ways.

[3]  In 1963 their enormous popularity first emerged as "Beatlemania", and as the group's music grew in sophistication in subsequent years, led by primary songwriters Lennon and McCartney, they came to be perceived as an embodiment of the ideals shared by the counterculture of the 1960s.

**Bruce Spizer**

[0] David "Bruce" Spizer (born July 2, 1955) is a tax attorney in New Orleans, Louisiana, who is also recognized as an expert on The Beatles.

[1]  He has published eight books, and is frequently quoted as an authority on the history of the band and its recordings.

Synthetic conflicting passage:

The musical act on which Bruce Spizer is recognized as an expert is The Rolling Stones. It is not The Beatles. This reference entry describes the particular subject and historical detail identified in the preceding statement. The description concerns that subject alone, rather than a similarly named person, place, organization, or work. The wording refers to the same event, period, and relationship throughout the account. Other details about the subject are outside the scope of this short entry.

Irrelevant passage: **Suzuki MR Wagon**

The Suzuki MR Wagon is a 4-seater mini MPV manufactured by Suzuki for the Japanese market only, and also marketed in Japan by Nissan as the Nissan Moco under an OEM agreement.  The model debuted in 2001, and since 2011 it has been in its third generation.  It was launched in India by Maruti Suzuki as Maruti Zen Estilo in 2006, Maruti Zen Estilo was discontinued in 2009 and renamed as Maruti Estilo.

Donor provenance: {"rowIndex":5021,"questionId":"5a89217455429938390d4039","passageIndex":6,"title":"Suzuki MR Wagon","sentences":["The Suzuki MR Wagon is a 4-seater mini MPV manufactured by Suzuki for the Japanese market only, and also marketed in Japan by Nissan as the Nissan Moco under an OEM agreement."," The model debuted in 2001, and since 2011 it has been in its third generation."," It was launched in India by Maruti Suzuki as Maruti Zen Estilo in 2006, Maruti Zen Estilo was discontinued in 2009 and renamed as Maruti Estilo."]}

Review: Contradicts the answer-bearing relation: musical act on which Bruce Spizer is recognized as an expert. The false assertion explicitly excludes the gold value in the same scope. The source sentence and complete supporting passages are retained for review.

Independent source passage about Suzuki MR Wagon; no shared content terms with the question or supporting passages, and no answer or evidence-subject match. Review alongside the paired question is in noise-review.md.

Checks: original supporting passages and sentence indices preserved; labeled source span; distinct alternative with scoped denial; unrelated donor 70–100 words; distinct donor; no answer, title or content-term overlap.

## 33. 5adffe7155429906c02daa9e (row 153)

Question: The songs from the sountrack to "When Harry Met Sally" are performed by a singer that has had how many top 20 US albums?

Gold answer (review only): seven

Relation checked: number of Harry Connick Jr.'s top 20 US albums

Labeled source: Harry Connick Jr. [3]

 He has had seven top20 US albums, and ten number-one US jazz albums, earning more number-one albums than any other artist in US jazz chart history.

Supporting passages:

**Harry Connick Jr.**

[0] Joseph Harry Fowler Connick Jr. (born September 11, 1967) is an American singer, big band leader, talk show host and actor.

[1]  He has sold over 28million albums worldwide.

[2]  Connick is ranked among the top60 best-selling male artists in the United States by the Recording Industry Association of America, with 16million in certified sales.

[3]  He has had seven top20 US albums, and ten number-one US jazz albums, earning more number-one albums than any other artist in US jazz chart history.

**When Harry Met Sally... (soundtrack)**

[0] When Harry Met Sally... is the soundtrack to the movie "When Harry Met Sally..." starring Billy Crystal and Meg Ryan.

[1]  The songs are performed by pianist Harry Connick Jr., who won the Grammy Award for Best Jazz Male Vocal Performance.

Synthetic conflicting passage:

The number of Harry Connick Jr.'s top 20 US albums is nine. It is not seven. This reference entry describes the particular subject and historical detail identified in the preceding statement. The description concerns that subject alone, rather than a similarly named person, place, organization, or work. The wording refers to the same event, period, and relationship throughout the account. Other details about the subject are outside the scope of this short entry.

Irrelevant passage: **Maruti Suzuki**

Maruti Suzuki India Limited, formerly known as Maruti Udyog Limited, is an automobile manufacturer in India.  It is a 56.21%-owned subsidiary of Japanese automobile and motorcycle manufacturer Suzuki Motor Corporation.  s of 2017 , it had a market share of 51% of the Indian passenger car market.  Maruti Suzuki manufactures and sells popular cars such as the Ciaz, Ertiga, Wagon R, Alto, Swift, Celerio, Swift Dzire, Omni, Baleno and Baleno RS.  The company is headquartered at New Delhi.  In February 2012, the company sold its ten millionth vehicle in India.

Donor provenance: {"rowIndex":5021,"questionId":"5a89217455429938390d4039","passageIndex":4,"title":"Maruti Suzuki","sentences":["Maruti Suzuki India Limited, formerly known as Maruti Udyog Limited, is an automobile manufacturer in India."," It is a 56.21%-owned subsidiary of Japanese automobile and motorcycle manufacturer Suzuki Motor Corporation."," s of 2017 , it had a market share of 51% of the Indian passenger car market."," Maruti Suzuki manufactures and sells popular cars such as the Ciaz, Ertiga, Wagon R, Alto, Swift, Celerio, Swift Dzire, Omni, Baleno and Baleno RS."," The company is headquartered at New Delhi."," In February 2012, the company sold its ten millionth vehicle in India."]}

Review: Contradicts the answer-bearing relation: number of Harry Connick Jr.'s top 20 US albums. The false assertion explicitly excludes the gold value in the same scope. The source sentence and complete supporting passages are retained for review.

Independent source passage about Maruti Suzuki; no shared content terms with the question or supporting passages, and no answer or evidence-subject match. Review alongside the paired question is in noise-review.md.

Checks: original supporting passages and sentence indices preserved; labeled source span; distinct alternative with scoped denial; unrelated donor 70–100 words; distinct donor; no answer, title or content-term overlap.

## 34. 5a906a685542990a9849362e (row 155)

Question: Where was the world cup hosted that Algeria qualified for the first time into the round of 16?

Gold answer (review only): Brazil

Relation checked: host country of the 2014 FIFA World Cup

Labeled source: 2014 FIFA World Cup [1]

 It took place in Brazil from 12 June to 13 July 2014, after the country was awarded the hosting rights in 2007.

Supporting passages:

**Algeria at the FIFA World Cup**

[0] Algeria have appeared in the finals of the FIFA World Cup on four occasions in 1982, 1986, 2010 and 2014.

[1]  They have once qualified for the knockout rounds, reaching the round of 16 in 2014 before losing to Germany.

[2]  32 years before, Algeria nearly qualified to the second round of the 1982 World Cup after beating both West Germany and Chile; however, an arrangement match between West Germany and Austria wound up eliminating the Algerians.

[3]  In 2014, Algeria qualifyed for the first time into the round of 16.

**2014 FIFA World Cup**

[0] The 2014 FIFA World Cup was the 20th FIFA World Cup, the quadrennial world championship for men's national football teams organized by FIFA.

[1]  It took place in Brazil from 12 June to 13 July 2014, after the country was awarded the hosting rights in 2007.

[2]  It was the second time that Brazil staged the competition, the first being in 1950, and the fifth time that it was held in South America.

Synthetic conflicting passage:

The host country of the 2014 FIFA World Cup is Argentina. It is not Brazil. This reference entry describes the particular subject and historical detail identified in the preceding statement. The description concerns that subject alone, rather than a similarly named person, place, organization, or work. The wording refers to the same event, period, and relationship throughout the account. Other details about the subject are outside the scope of this short entry.

Irrelevant passage: **Magyk**

Magyk (an archaic spelling of "Magic") is a fantasy novel written by English author Angie Sage.  It is the first book in the seven-book "Septimus Heap" series.  The sequel, "Flyte" was released in March 2006, "Physik" in March 2007, "Queste" in 2008, "Syren" in September 2009, "Darke" in July 2011, and "Fyre" in 2013.  The book cover of "Magyk" alludes to the diary that the ExtraOrdinary Wizard Marcia makes for her apprentice, Septimus Heap.  The cover also depicts Septimus's Dragon Ring, rendered as if it were sitting atop the diary.

Donor provenance: {"rowIndex":5020,"questionId":"5ae49f2c5542995ad6573dc1","passageIndex":9,"title":"Magyk","sentences":["Magyk (an archaic spelling of \"Magic\") is a fantasy novel written by English author Angie Sage."," It is the first book in the seven-book \"Septimus Heap\" series."," The sequel, \"Flyte\" was released in March 2006, \"Physik\" in March 2007, \"Queste\" in 2008, \"Syren\" in September 2009, \"Darke\" in July 2011, and \"Fyre\" in 2013."," The book cover of \"Magyk\" alludes to the diary that the ExtraOrdinary Wizard Marcia makes for her apprentice, Septimus Heap."," The cover also depicts Septimus's Dragon Ring, rendered as if it were sitting atop the diary."]}

Review: Contradicts the answer-bearing relation: host country of the 2014 FIFA World Cup. The false assertion explicitly excludes the gold value in the same scope. The source sentence and complete supporting passages are retained for review.

Independent source passage about Magyk; no shared content terms with the question or supporting passages, and no answer or evidence-subject match. Review alongside the paired question is in noise-review.md.

Checks: original supporting passages and sentence indices preserved; labeled source span; distinct alternative with scoped denial; unrelated donor 70–100 words; distinct donor; no answer, title or content-term overlap.

## 35. 5a74ce9655429974ef308c6c (row 157)

Question: What retailer in ABQ Uptown is headquarted in Poole, Dorset, United Kingdom?

Gold answer (review only): Lush Ltd.

Relation checked: cosmetics retailer headquartered in Poole, Dorset and present in ABQ Uptown

Labeled source: Lush (company) [0]

Lush Ltd. is a cosmetics retailer headquartered in Poole, Dorset, United Kingdom.

Supporting passages:

**Lush (company)**

[0] Lush Ltd. is a cosmetics retailer headquartered in Poole, Dorset, United Kingdom.

[1]  The company was founded by Mark Constantine, a trichologist and Liz Weir, a beauty therapist.

[2]  They met in a hair and beauty salon in Poole, England.

[3]  A few years later, they decided to branch out and start their own business selling natural hair and beauty products.

**ABQ Uptown**

[0] ABQ Uptown is an outdoor luxury shopping mall owned by Simon Property Group in Albuquerque, New Mexico.

[1]  It is one of four malls located in the Albuquerque area, and houses 46 different stores.

[2]  Its anchor tenants include J.Crew, The North Face, and Lush.

[3]  The outdoor environment of this mall includes music, lights and seasonal decorations.

Synthetic conflicting passage:

The cosmetics retailer headquartered in Poole, Dorset and present in ABQ Uptown is Boots Ltd.. It is not Lush Ltd. This reference entry describes the particular subject and historical detail identified in the preceding statement. The description concerns that subject alone, rather than a similarly named person, place, organization, or work. The wording refers to the same event, period, and relationship throughout the account. Other details about the subject are outside the scope of this short entry.

Irrelevant passage: **Sarah Vowell**

Sarah Jane Vowell (born December 27, 1969) is an American author, journalist, essayist, social commentator and actress.  Often referred to as a "social observer," Vowell has written seven nonfiction books on American history and culture.  She was a contributing editor for the radio program "This American Life" on Public Radio International from 1996 to 2008, where she produced numerous commentaries and documentaries and toured the country in many of the program's live shows.  She was also the voice of Violet in the animated film "The Incredibles".

Donor provenance: {"rowIndex":5020,"questionId":"5ae49f2c5542995ad6573dc1","passageIndex":6,"title":"Sarah Vowell","sentences":["Sarah Jane Vowell (born December 27, 1969) is an American author, journalist, essayist, social commentator and actress."," Often referred to as a \"social observer,\" Vowell has written seven nonfiction books on American history and culture."," She was a contributing editor for the radio program \"This American Life\" on Public Radio International from 1996 to 2008, where she produced numerous commentaries and documentaries and toured the country in many of the program's live shows."," She was also the voice of Violet in the animated film \"The Incredibles\"."]}

Review: Contradicts the answer-bearing relation: cosmetics retailer headquartered in Poole, Dorset and present in ABQ Uptown. The false assertion explicitly excludes the gold value in the same scope. The source sentence and complete supporting passages are retained for review.

Independent source passage about Sarah Vowell; no shared content terms with the question or supporting passages, and no answer or evidence-subject match. Review alongside the paired question is in noise-review.md.

Checks: original supporting passages and sentence indices preserved; labeled source span; distinct alternative with scoped denial; unrelated donor 70–100 words; distinct donor; no answer, title or content-term overlap.

## 36. 5a713a5a5542994082a3e6a9 (row 158)

Question: What football club plays in the area between the old tool gates: Brook Bar and Trafford bar?

Gold answer (review only): Manchester United

Relation checked: football club based in Old Trafford

Labeled source: Manchester United F.C. in European football [0]

Manchester United Football Club is an English football club based in Old Trafford, Greater Manchester.

Supporting passages:

**Manchester United F.C. in European football**

[0] Manchester United Football Club is an English football club based in Old Trafford, Greater Manchester.

[1]  They were the first English club to enter European competition, entering the European Cup in 1956.

[2]  Since then, the club has competed in every UEFA-organised competition, with the exception of the now-defunct Intertoto Cup.

**Old Trafford, Greater Manchester**

[0] Old Trafford is an area of Stretford, in the Metropolitan Borough of Trafford, Greater Manchester, England, 2 mi southwest of Manchester city centre.

[1]  The crossroads sites of two old toll gates roughly delineate the borders of the area: Brooks's Bar to the east and Trafford Bar to the west.

Synthetic conflicting passage:

The football club based in Old Trafford is Manchester City. It is not Manchester United. This reference entry describes the particular subject and historical detail identified in the preceding statement. The description concerns that subject alone, rather than a similarly named person, place, organization, or work. The wording refers to the same event, period, and relationship throughout the account. Other details about the subject are outside the scope of this short entry.

Irrelevant passage: **11th Georgia Infantry**

The 11th Georgia Infantry Regiment was a Confederate States Army unit during the American Civil War.  The regiment was part of the Army of Northern Virginia.  Apart from a period when it was detached as part of Longstreet's forces in Georgia and Tennessee, the regiment remained with the army and took part in several major battles including the Seven Days Battles, Sharpsburg, Gettysburg, Cold Harbor and the siege of Petersburg until it surrendered at Appomattox on 9 April 1865.

Donor provenance: {"rowIndex":5023,"questionId":"5ae760415542997b22f6a708","passageIndex":1,"title":"11th Georgia Infantry","sentences":["The 11th Georgia Infantry Regiment was a Confederate States Army unit during the American Civil War."," The regiment was part of the Army of Northern Virginia."," Apart from a period when it was detached as part of Longstreet's forces in Georgia and Tennessee, the regiment remained with the army and took part in several major battles including the Seven Days Battles, Sharpsburg, Gettysburg, Cold Harbor and the siege of Petersburg until it surrendered at Appomattox on 9 April 1865."]}

Review: Contradicts the answer-bearing relation: football club based in Old Trafford. The false assertion explicitly excludes the gold value in the same scope. The source sentence and complete supporting passages are retained for review.

Independent source passage about 11th Georgia Infantry; no shared content terms with the question or supporting passages, and no answer or evidence-subject match. Review alongside the paired question is in noise-review.md.

Checks: original supporting passages and sentence indices preserved; labeled source span; distinct alternative with scoped denial; unrelated donor 70–100 words; distinct donor; no answer, title or content-term overlap.

## 37. 5ab341f755429969a97a8114 (row 159)

Question: The song "Chim Chim Cher-ee" can be heard  in the "Mary Poppins" scene of a Disney ride that debuted in what year?

Gold answer (review only): 1989

Relation checked: debut year of The Great Movie Ride

Labeled source: The Great Movie Ride [2]

 The attraction—which debuted with the park on May 1, 1989—was located inside a replica of Grauman's Chinese Theatre, one of Hollywood's most famous movie palaces.

Supporting passages:

**Chim Chim Cher-ee**

[0] "Chim Chim Cher-ee" is a song from "Mary Poppins", the 1964 musical motion picture.

[1]  It was originally sung by Dick Van Dyke and Julie Andrews, and also is featured in the Cameron Mackintosh/Disney "Mary Poppins" musical.

[2]  The song can be heard in the "Mary Poppins" scene of The Great Movie Ride at Disney's Hollywood Studios and during the "Mary Poppins" segment of "" at Disneyland.

**The Great Movie Ride**

[0] The Great Movie Ride was a dark ride attraction located at Disney's Hollywood Studios in the Walt Disney World Resort.

[1]  The attraction employed the use of Audio-Animatronic figures, practical sets, live actors, special effects, and projections to recreate iconic scenes from twelve classic films throughout motion picture history.

[2]  The attraction—which debuted with the park on May 1, 1989—was located inside a replica of Grauman's Chinese Theatre, one of Hollywood's most famous movie palaces.

Synthetic conflicting passage:

The debut year of The Great Movie Ride is 1990. It is not 1989. This reference entry describes the particular subject and historical detail identified in the preceding statement. The description concerns that subject alone, rather than a similarly named person, place, organization, or work. The wording refers to the same event, period, and relationship throughout the account. Other details about the subject are outside the scope of this short entry.

Irrelevant passage: **Bill Bryson Sr.**

William Eugene "Bill" Bryson Sr. (March 3, 1915 – January 1986) was a sports journalist for the "Des Moines Register" for 50 years.  He married Agnes Mary McGuire (born 1913 in Nebraska, died 2015) and had three children: Michael, William, and Mary Elizabeth.  A book of some of his best sports stories was published by his son Michael called "".  His son Bill Bryson is a popular journalist and writer of travel books, who now lives in England.

Donor provenance: {"rowIndex":5024,"questionId":"5a8f5273554299458435d5b1","passageIndex":0,"title":"Bill Bryson Sr.","sentences":["William Eugene \"Bill\" Bryson Sr. (March 3, 1915 – January 1986) was a sports journalist for the \"Des Moines Register\" for 50 years."," He married Agnes Mary McGuire (born 1913 in Nebraska, died 2015) and had three children: Michael, William, and Mary Elizabeth."," A book of some of his best sports stories was published by his son Michael called \"\"."," His son Bill Bryson is a popular journalist and writer of travel books, who now lives in England."]}

Review: Contradicts the answer-bearing relation: debut year of The Great Movie Ride. The false assertion explicitly excludes the gold value in the same scope. The source sentence and complete supporting passages are retained for review.

Independent source passage about Bill Bryson Sr.; no shared content terms with the question or supporting passages, and no answer or evidence-subject match. Review alongside the paired question is in noise-review.md.

Checks: original supporting passages and sentence indices preserved; labeled source span; distinct alternative with scoped denial; unrelated donor 70–100 words; distinct donor; no answer, title or content-term overlap.

## 38. 5ab9374b554299131ca422c6 (row 161)

Question: Which man who presented the Australia 2022 FIFA World Cup bid was born on October 22, 1930?

Gold answer (review only): Frank Lowy

Relation checked: bid presenter born on October 22, 1930 who presented Australia's 2022 FIFA World Cup bid

Labeled source: Australia 2022 FIFA World Cup bid [5]

 The bid was presented by Frank Lowy, Ben Buckley, Quentin Bryce and Elle Macpherson.

Supporting passages:

**Frank Lowy**

[0] Sir Frank P. Lowy, {'1': ", '2': ", '3': ", '4': "} (born 22 October 1930) is an Australian-Israeli businessman and Chairman of Westfield Corporation, a global shopping centre company with US$29.3 billion of assets under management in the United States, United Kingdom and Europe.

[1]  He is a former Chairman of Scentre Group, the owner and manager of Westfield-branded shopping centres in Australia and New Zealand.

**Australia 2022 FIFA World Cup bid**

[0] Australia submitted an unsuccessful bid for the 2022 FIFA World Cup.

[1]  On 2 December 2010 FIFA announced that the event would be held in Qatar.

[2]  Australia also lodged a bid for the 2018 World Cup, but withdrew the bid on 10 June 2010.

[3]  The 2018 and 2022 World Cups will be the 21st and 22nd editions of the FIFA World Cup.

[4]  The bidding procedure to host both the 2018 and 2022 FIFA World Cup began in January 2009, and national associations had until 2 February 2009 to register their interest.

[5]  The bid was presented by Frank Lowy, Ben Buckley, Quentin Bryce and Elle Macpherson.

[6]  However, due to controversies of Qatar hosting, Australia's bid is possible if FIFA decides to strip Qatar's 2022 hosting rights.

Synthetic conflicting passage:

The bid presenter born on October 22, 1930 who presented Australia's 2022 FIFA World Cup bid is Rupert Murdoch. It is not Frank Lowy. This reference entry describes the particular subject and historical detail identified in the preceding statement. The description concerns that subject alone, rather than a similarly named person, place, organization, or work. The wording refers to the same event, period, and relationship throughout the account. Other details about the subject are outside the scope of this short entry.

Irrelevant passage: **The Life and Times of the Thunderbolt Kid**

The Life and Times of the Thunderbolt Kid is a 2006 memoir by best-selling travel writer Bill Bryson.  The book delves into Bryson's past, telling of his youth growing up in Des Moines, Iowa, during the 1950s and early 1960s.  It also reveals the backstory between himself and Stephen Katz, who appeared in "A Walk in the Woods" and "."  Bryson also describes and comments on American life in the 1950s.  The title of the book comes from an imaginary alter-ego Bryson invented for himself in his childhood, who has the ability to "vaporise people."

Donor provenance: {"rowIndex":5024,"questionId":"5a8f5273554299458435d5b1","passageIndex":9,"title":"The Life and Times of the Thunderbolt Kid","sentences":["The Life and Times of the Thunderbolt Kid is a 2006 memoir by best-selling travel writer Bill Bryson."," The book delves into Bryson's past, telling of his youth growing up in Des Moines, Iowa, during the 1950s and early 1960s."," It also reveals the backstory between himself and Stephen Katz, who appeared in \"A Walk in the Woods\" and \".\""," Bryson also describes and comments on American life in the 1950s."," The title of the book comes from an imaginary alter-ego Bryson invented for himself in his childhood, who has the ability to \"vaporise people.\""]}

Review: Contradicts the answer-bearing relation: bid presenter born on October 22, 1930 who presented Australia's 2022 FIFA World Cup bid. The false assertion explicitly excludes the gold value in the same scope. The source sentence and complete supporting passages are retained for review.

Independent source passage about The Life and Times of the Thunderbolt Kid; no shared content terms with the question or supporting passages, and no answer or evidence-subject match. Review alongside the paired question is in noise-review.md.

Checks: original supporting passages and sentence indices preserved; labeled source span; distinct alternative with scoped denial; unrelated donor 70–100 words; distinct donor; no answer, title or content-term overlap.

## 39. 5ae52c0f5542992663a4f12e (row 162)

Question: What major city is the Faith Lutheran Middle School and High School located by?

Gold answer (review only): Las Vegas

Relation checked: major Nevada city near Faith Lutheran Middle School and High School

Labeled source: Faith Lutheran Middle School &amp; High School [0]

Faith Lutheran Middle School & High School is a private Christian school located in Summerlin, Clark County, Nevada serving the Las Vegas Valley.

Supporting passages:

**Faith Lutheran Middle School &amp; High School**

[0] Faith Lutheran Middle School & High School is a private Christian school located in Summerlin, Clark County, Nevada serving the Las Vegas Valley.

[1]  Faith has students who come from 60 different zip codes.

[2]  The school, which began in 1979, serves grades 6–12 and is affiliated with the Lutheran Church–Missouri Synod.

[3]  Faith Lutheran is the largest Lutheran school in the United States and the largest non-public school in the state of Nevada.

[4]  Faith Lutheran is governed by a Board of Directors representing the thirteen Lutheran churches in its association.

**Summerlin, Nevada**

[0] Summerlin is an affluent planned community in the Las Vegas Valley of Nevada.

[1]  It lies at the edge of the Spring Mountains and Red Rock Canyon, on the western periphery of Las Vegas, Nevada in unincorporated Clark County.

[2]  The community occupies 22,500 acres and includes a variety of land uses, including: residential, commercial, recreational, educational, medical, open space, and cultural.

[3]  At the 2010 census, Summerlin's population was nearly 100,000, having risen from 59,000 in 2000.

Synthetic conflicting passage:

The major Nevada city near Faith Lutheran Middle School and High School is Reno. It is not Las Vegas. This reference entry describes the particular subject and historical detail identified in the preceding statement. The description concerns that subject alone, rather than a similarly named person, place, organization, or work. The wording refers to the same event, period, and relationship throughout the account. Other details about the subject are outside the scope of this short entry.

Irrelevant passage: **Max Hoffmann**

Carl Adolf Maximilian Hoffmann (25 January 1869 – 8 July 1927) was a German military strategist.  As a staff officer at the beginning of World War I, he was Chief of Staff of the 8th Army.  Hoffmann, along with Hindenburg and Ludendorff, masterminded the devastating defeat of the Russian armies at Tannenberg and the Masurian Lakes.  He then held the position of Chief of Staff of the Eastern Front.  At the end of 1917, he negotiated with Russia to sign the Treaty of Brest-Litovsk.  In 1922, he tried to set up an anti-Soviet coalition without success.

Donor provenance: {"rowIndex":5023,"questionId":"5ae760415542997b22f6a708","passageIndex":8,"title":"Max Hoffmann","sentences":["Carl Adolf Maximilian Hoffmann (25 January 1869 – 8 July 1927) was a German military strategist."," As a staff officer at the beginning of World War I, he was Chief of Staff of the 8th Army."," Hoffmann, along with Hindenburg and Ludendorff, masterminded the devastating defeat of the Russian armies at Tannenberg and the Masurian Lakes."," He then held the position of Chief of Staff of the Eastern Front."," At the end of 1917, he negotiated with Russia to sign the Treaty of Brest-Litovsk."," In 1922, he tried to set up an anti-Soviet coalition without success."]}

Review: Contradicts the answer-bearing relation: major Nevada city near Faith Lutheran Middle School and High School. The false assertion explicitly excludes the gold value in the same scope. The source sentence and complete supporting passages are retained for review.

Independent source passage about Max Hoffmann; no shared content terms with the question or supporting passages, and no answer or evidence-subject match. Review alongside the paired question is in noise-review.md.

Checks: original supporting passages and sentence indices preserved; labeled source span; distinct alternative with scoped denial; unrelated donor 70–100 words; distinct donor; no answer, title or content-term overlap.

## 40. 5adbfbd555429947ff173893 (row 163)

Question: What British singer-songwriter hosted the 16th Annual Young Hollywood Awards?

Gold answer (review only): Kelly Lee Osbourne

Relation checked: British singer-songwriter who hosted the 16th Annual Young Hollywood Awards

Labeled source: Kelly Osbourne [0]

Kelly Lee Osbourne (born 27 October 1984) is a British singer-songwriter, actress, television presenter and fashion designer.

Supporting passages:

**2014 Young Hollywood Awards**

[0] The 16th Annual Young Hollywood Awards were held on Monday, July 28, 2014 in Los Angeles, California, previously recorded the day before.

[1]  Kelly Osbourne hosted the show, with Justin Bieber being honored for his charity work and contributions to the Make-A-Wish Foundation, and Vanessa Hudgens was honored with the Trendsetter Award.

**Kelly Osbourne**

[0] Kelly Lee Osbourne (born 27 October 1984) is a British singer-songwriter, actress, television presenter and fashion designer.

[1]  The daughter of Ozzy and Sharon Osbourne, she is known for her appearances on "The Osbournes" with her family, for which they won a 2002 Emmy Award for Outstanding Reality Program, as well as on E!'s "Fashion Police", where she was a presenter from 2010 to 2015.

[2]  She has also appeared on "Dancing with the Stars", in which she and her professional dance partner Louis van Amstel took third place.

[3]  She is the voice of Hildy Gloom in the Disney XD animated series "The 7D".

[4]  She is also a judge on both "Australia's Got Talent" and "Project Runway Junior".

Synthetic conflicting passage:

The British singer-songwriter who hosted the 16th Annual Young Hollywood Awards is Sharon Osbourne. It is not Kelly Lee Osbourne. This reference entry describes the particular subject and historical detail identified in the preceding statement. The description concerns that subject alone, rather than a similarly named person, place, organization, or work. The wording refers to the same event, period, and relationship throughout the account. Other details about the subject are outside the scope of this short entry.

Irrelevant passage: **Neither Here nor There: Travels in Europe**

Neither Here nor There: Travels in Europe is a 1991 humorous travelogue by American writer Bill Bryson.  It documents the author's tour of Europe in 1990, with many flashbacks to two summer tours he made in 1972 and 1973 in his college days.  Parts featuring his 1973 tour focus to a large extent on the pseudonymous "Stephen Katz", who accompanied Bryson, and who would play a more prominent role in Bryson's later book "A Walk in the Woods", as well as appearing in "The Life and Times of the Thunderbolt Kid".

Donor provenance: {"rowIndex":5024,"questionId":"5a8f5273554299458435d5b1","passageIndex":3,"title":"Neither Here nor There: Travels in Europe","sentences":["Neither Here nor There: Travels in Europe is a 1991 humorous travelogue by American writer Bill Bryson."," It documents the author's tour of Europe in 1990, with many flashbacks to two summer tours he made in 1972 and 1973 in his college days."," Parts featuring his 1973 tour focus to a large extent on the pseudonymous \"Stephen Katz\", who accompanied Bryson, and who would play a more prominent role in Bryson's later book \"A Walk in the Woods\", as well as appearing in \"The Life and Times of the Thunderbolt Kid\"."]}

Review: Contradicts the answer-bearing relation: British singer-songwriter who hosted the 16th Annual Young Hollywood Awards. The false assertion explicitly excludes the gold value in the same scope. The source sentence and complete supporting passages are retained for review.

Independent source passage about Neither Here nor There: Travels in Europe; no shared content terms with the question or supporting passages, and no answer or evidence-subject match. Review alongside the paired question is in noise-review.md.

Checks: original supporting passages and sentence indices preserved; labeled source span; distinct alternative with scoped denial; unrelated donor 70–100 words; distinct donor; no answer, title or content-term overlap.

## 41. 5a7ddc5a5542995f4f4022da (row 167)

Question: Both Bishop Carroll Catholic High School and Kapaun Mt. Carmel Catholic High School are located in which city in Kansas?

Gold answer (review only): Wichita

Relation checked: Kansas city containing Bishop Carroll Catholic High School and Kapaun Mt. Carmel Catholic High School

Labeled source: Bishop Carroll Catholic High School [0]

Bishop Carroll Catholic High School is a private high school located in Wichita, Kansas, United States.

Supporting passages:

**Bishop Carroll Catholic High School**

[0] Bishop Carroll Catholic High School is a private high school located in Wichita, Kansas, United States.

[1]  Along with Kapaun Mt. Carmel Catholic High School, it is one of two Catholic high schools in the city, part of the Roman Catholic Diocese of Wichita.

**Kapaun Mt. Carmel Catholic High School**

[0] Kapaun Mt. Carmel Catholic High School, sometimes called Kapaun, is a private, four year, co-educational, secondary school operated by the Roman Catholic Diocese of Wichita.

[1]  It is located in the east side of Wichita, Kansas.

[2]  The school colors are blue and white.

[3]  The average annual enrollment is approximately 850 students.

Synthetic conflicting passage:

The Kansas city containing Bishop Carroll Catholic High School and Kapaun Mt. Carmel Catholic High School is Topeka. It is not Wichita. This reference entry describes the particular subject and historical detail identified in the preceding statement. The description concerns that subject alone, rather than a similarly named person, place, organization, or work. The wording refers to the same event, period, and relationship throughout the account. Other details about the subject are outside the scope of this short entry.

Irrelevant passage: **Soapy Awards**

The Soapy Awards were an award presented by "Soap Opera Digest" magazine to the best work on American soap operas from 1977 until 1983.  Unlike their successors, the "Soap Opera Digest" Awards, this accolade lacked a great deal of glamour.  The statue itself was a tall geometric crystal and were presented during a television show after winners were announced in the magazine.  The original award was designed by the magazine's art director Janis Rogak.

Donor provenance: {"rowIndex":5025,"questionId":"5ab4234f5542991751b4d685","passageIndex":1,"title":"Soapy Awards","sentences":["The Soapy Awards were an award presented by \"Soap Opera Digest\" magazine to the best work on American soap operas from 1977 until 1983."," Unlike their successors, the \"Soap Opera Digest\" Awards, this accolade lacked a great deal of glamour."," The statue itself was a tall geometric crystal and were presented during a television show after winners were announced in the magazine."," The original award was designed by the magazine's art director Janis Rogak."]}

Review: Contradicts the answer-bearing relation: Kansas city containing Bishop Carroll Catholic High School and Kapaun Mt. Carmel Catholic High School. The false assertion explicitly excludes the gold value in the same scope. The source sentence and complete supporting passages are retained for review.

Independent source passage about Soapy Awards; no shared content terms with the question or supporting passages, and no answer or evidence-subject match. Review alongside the paired question is in noise-review.md.

Checks: original supporting passages and sentence indices preserved; labeled source span; distinct alternative with scoped denial; unrelated donor 70–100 words; distinct donor; no answer, title or content-term overlap.

## 42. 5a8b987f5542997f31a41d7a (row 170)

Question: What is the name of the detective novelist parent of the author of '"Q" Is for Quarry'?

Gold answer (review only): C. W. Grafton

Relation checked: detective novelist who was Sue Grafton's father

Labeled source: Sue Grafton [2]

 The daughter of detective novelist C. W. Grafton, she has said the strongest influence on her crime novels is author Ross Macdonald.

Supporting passages:

**&quot;Q&quot; Is for Quarry**

[0] "Q" Is for Quarry is the 17th novel in Sue Grafton's "Alphabet" series of mystery novels and features Kinsey Millhone, a private eye based in Santa Teresa, California.

**Sue Grafton**

[0] Sue Taylor Grafton (born April 24, 1940) is a contemporary American author of detective novels.

[1]  She is best known as the author of the 'alphabet series' (""A" Is for Alibi", etc.) featuring private investigator Kinsey Millhone in the fictional city of Santa Teresa, California.

[2]  The daughter of detective novelist C. W. Grafton, she has said the strongest influence on her crime novels is author Ross Macdonald.

[3]  Prior to success with this series, she wrote screenplays for television movies.

Synthetic conflicting passage:

The detective novelist who was Sue Grafton's father is Dashiell Hammett. It is not C. W. Grafton. This reference entry describes the particular subject and historical detail identified in the preceding statement. The description concerns that subject alone, rather than a similarly named person, place, organization, or work. The wording refers to the same event, period, and relationship throughout the account. Other details about the subject are outside the scope of this short entry.

Irrelevant passage: **Louis Victor, Prince of Carignano**

Louis Victor of Savoy (25 September 1721 – 16 December 1778) headed a French cadet branch of the Italian dynasty which reigned over the Kingdom of Sardinia, being known as the Prince of Carignano from 1741 till his death.  Upon extinction of the senior line of the family, his great-grandson succeeded to the royal throne as King Charles Albert of Sardinia, while his great-great-grandson, Victor Emmanuel II, became King of Italy.

Donor provenance: {"rowIndex":5027,"questionId":"5a8933fe55429951533612df","passageIndex":3,"title":"Louis Victor, Prince of Carignano","sentences":["Louis Victor of Savoy (25 September 1721 – 16 December 1778) headed a French cadet branch of the Italian dynasty which reigned over the Kingdom of Sardinia, being known as the Prince of Carignano from 1741 till his death."," Upon extinction of the senior line of the family, his great-grandson succeeded to the royal throne as King Charles Albert of Sardinia, while his great-great-grandson, Victor Emmanuel II, became King of Italy."]}

Review: Contradicts the answer-bearing relation: detective novelist who was Sue Grafton's father. The false assertion explicitly excludes the gold value in the same scope. The source sentence and complete supporting passages are retained for review.

Independent source passage about Louis Victor, Prince of Carignano; no shared content terms with the question or supporting passages, and no answer or evidence-subject match. Review alongside the paired question is in noise-review.md.

Checks: original supporting passages and sentence indices preserved; labeled source span; distinct alternative with scoped denial; unrelated donor 70–100 words; distinct donor; no answer, title or content-term overlap.

## 43. 5a8739a05542994775f607ab (row 171)

Question: What is the birthplace of the Senator who represents the first of 62 districts in the State Senate?

Gold answer (review only): Brooklyn, New York

Relation checked: birthplace of Kenneth P. LaValle

Labeled source: Kenneth LaValle [0]

Kenneth P. LaValle (born May 22, 1939 in Brooklyn, New York) represents District 1 in the New York State Senate, which comprises the five East End towns of Long Island, New York, and the eastern half of the Town of Brookhaven, New York.

Supporting passages:

**Kenneth LaValle**

[0] Kenneth P. LaValle (born May 22, 1939 in Brooklyn, New York) represents District 1 in the New York State Senate, which comprises the five East End towns of Long Island, New York, and the eastern half of the Town of Brookhaven, New York.

[1]  First elected in 1976, he is the chair of the Higher Education Committee in the State Senate.

**New York's 1st State Senate district**

[0] New York's 1st State Senate district is one of 62 districts of the New York State Senate.

[1]  It is currently represented by Senator Kenneth LaValle (R).

Synthetic conflicting passage:

The birthplace of Kenneth P. LaValle is Queens, New York. It is not Brooklyn, New York. This reference entry describes the particular subject and historical detail identified in the preceding statement. The description concerns that subject alone, rather than a similarly named person, place, organization, or work. The wording refers to the same event, period, and relationship throughout the account. Other details about the subject are outside the scope of this short entry.

Irrelevant passage: **Soaps In Depth**

Soaps In Depth is a series of magazines created in 1997 by Bauer Publications to give American soap opera viewers more variety in their soap-related magazine purchases.  Instead of buying a magazine like "Soap Opera Digest", in which all soap operas are covered, "Soaps In Depth" gave the soap viewer and potential shopper individual choices from the "Big Three" networks: ABC Soaps In Depth, CBS Soaps In Depth, and NBC Soaps In Depth.  Each magazine is devoted to only the shows on the network the edition covers and is published biweekly.

Donor provenance: {"rowIndex":5025,"questionId":"5ab4234f5542991751b4d685","passageIndex":8,"title":"Soaps In Depth","sentences":["Soaps In Depth is a series of magazines created in 1997 by Bauer Publications to give American soap opera viewers more variety in their soap-related magazine purchases."," Instead of buying a magazine like \"Soap Opera Digest\", in which all soap operas are covered, \"Soaps In Depth\" gave the soap viewer and potential shopper individual choices from the \"Big Three\" networks: ABC Soaps In Depth, CBS Soaps In Depth, and NBC Soaps In Depth."," Each magazine is devoted to only the shows on the network the edition covers and is published biweekly."]}

Review: Contradicts the answer-bearing relation: birthplace of Kenneth P. LaValle. The false assertion explicitly excludes the gold value in the same scope. The source sentence and complete supporting passages are retained for review.

Independent source passage about Soaps In Depth; no shared content terms with the question or supporting passages, and no answer or evidence-subject match. Review alongside the paired question is in noise-review.md.

Checks: original supporting passages and sentence indices preserved; labeled source span; distinct alternative with scoped denial; unrelated donor 70–100 words; distinct donor; no answer, title or content-term overlap.

## 44. 5a7b3f4d5542992d025e67bb (row 173)

Question: Which songwriting duo composed music for "La La Land", and created lyrics for "A Christmas Story: The Musical"? 

Gold answer (review only): Pasek & Paul

Relation checked: songwriting duo responsible for the music and lyrics of A Christmas Story: The Musical

Labeled source: A Christmas Story: The Musical [1]

 The musical has music and lyrics written by Pasek & Paul and the book by Joseph Robinette.

Supporting passages:

**Pasek and Paul**

[0] Benj Pasek and Justin Paul, known together as Pasek and Paul, are an American songwriting duo and composing team for musical theater, films, and television.

[1]  Their works include "", "Dogfight", "Edges", "Dear Evan Hansen", and "James and the Giant Peach".

[2]  Their original songs have been featured on NBC's "Smash", and in the film "La La Land", for which they won both the Golden Globe and Academy Award for Best Original Song for the song "City of Stars".

**A Christmas Story: The Musical**

[0] A Christmas Story: The Musical is a musical version of the film "A Christmas Story".

[1]  The musical has music and lyrics written by Pasek & Paul and the book by Joseph Robinette.

[2]  The musical takes place in the 1940s in Indiana and focuses on a child named Ralphie, who wants a Red Ryder BB Gun for Christmas.

Synthetic conflicting passage:

The songwriting duo responsible for the music and lyrics of A Christmas Story: The Musical is Rodgers & Hammerstein. It is not Pasek & Paul. This reference entry describes the particular subject and historical detail identified in the preceding statement. The description concerns that subject alone, rather than a similarly named person, place, organization, or work. The wording refers to the same event, period, and relationship throughout the account. Other details about the subject are outside the scope of this short entry.

Irrelevant passage: **Marie Joséphine of Savoy**

Marie Joséphine Louise of Savoy (Italian: "Maria Giuseppina Luigia" ; 2 September 1753 – 13 November 1810) was a Princess of France and Countess of Provence by marriage to the future King Louis XVIII of France.  She was by Bourbon Royalists regarded as titular Queen of France from the death of her husband's nephew, the titular King Louis XVII of France in 1795, when her husband assumed the title of King, until her death, but in reality never had this title, as she died before he truly became King in 1814.

Donor provenance: {"rowIndex":5027,"questionId":"5a8933fe55429951533612df","passageIndex":4,"title":"Marie Joséphine of Savoy","sentences":["Marie Joséphine Louise of Savoy (Italian: \"Maria Giuseppina Luigia\" ; 2 September 1753 – 13 November 1810) was a Princess of France and Countess of Provence by marriage to the future King Louis XVIII of France."," She was by Bourbon Royalists regarded as titular Queen of France from the death of her husband's nephew, the titular King Louis XVII of France in 1795, when her husband assumed the title of King, until her death, but in reality never had this title, as she died before he truly became King in 1814."]}

Review: Contradicts the answer-bearing relation: songwriting duo responsible for the music and lyrics of A Christmas Story: The Musical. The false assertion explicitly excludes the gold value in the same scope. The source sentence and complete supporting passages are retained for review.

Independent source passage about Marie Joséphine of Savoy; no shared content terms with the question or supporting passages, and no answer or evidence-subject match. Review alongside the paired question is in noise-review.md.

Checks: original supporting passages and sentence indices preserved; labeled source span; distinct alternative with scoped denial; unrelated donor 70–100 words; distinct donor; no answer, title or content-term overlap.

## 45. 5ab8854555429934fafe6e0c (row 176)

Question: Works by Hanna Leena Kristiina Varis are part of a collection in a museum that houses approximately 65,000 what?

Gold answer (review only): drawings

Relation checked: type of works numbering approximately 65,000 in the Albertina collection

Labeled source: Albertina [1]

 It houses one of the largest and most important print rooms in the world with approximately 65,000 drawings and approximately 1 million old master prints, as well as more modern graphic works, photographs and architectural drawings.

Supporting passages:

**Hanna Varis**

[0] Hanna Leena Kristiina Varis (b. 1959 in Kuusankoski) is a Finnish graphic artist and painter.

[1]  She earned a Master of Arts degree from the Aalto University School of Arts, Design and Architecture in 1990.

[2]  She participated in the NUROPE, Nomadic University for Art, Philosophy and Enterprise in Europe, in 2006-2010.

[3]  She has held over 70 solo exhibitions and participated at over 140 group exhibitions.

[4]  Her works are part of major art collections in Finland and abroad, such as the Kiasma, Amos Anderson Art Museum, and Helsinki Art Museum in Helsinki, Wäinö Aaltonen Museum of Art in Turku, and Albertina Museum in Vienna.

**Albertina**

[0] The Albertina is a museum in the Innere Stadt (First District) of Vienna, Austria.

[1]  It houses one of the largest and most important print rooms in the world with approximately 65,000 drawings and approximately 1 million old master prints, as well as more modern graphic works, photographs and architectural drawings.

[2]  Apart from the graphics collection the museum has recently acquired on permanent loan two significant collections of Impressionist and early 20th-century art, some of which will be on permanent display.

[3]  The museum also houses temporary exhibitions.

Synthetic conflicting passage:

The type of works numbering approximately 65,000 in the Albertina collection is paintings. It is not drawings. This reference entry describes the particular subject and historical detail identified in the preceding statement. The description concerns that subject alone, rather than a similarly named person, place, organization, or work. The wording refers to the same event, period, and relationship throughout the account. Other details about the subject are outside the scope of this short entry.

Irrelevant passage: **Tupou VI**

Tupou VI (ʻAhoʻeitu ʻUnuakiʻotonga Tukuʻaho; born 12 July 1959) is the King of Tonga.  He is the younger brother and successor of the late King George Tupou V.  He was officially confirmed by his brother on 27 September 2006 as the heir presumptive to the Throne of Tonga, as his brother (a bachelor) had no legitimate children.  He served as Tonga's High Commissioner to Australia, and resided in Canberra until the death of King George Tupou V on 18 March 2012, when ʻAhoʻeitu ʻUnuakiʻotonga Tukuʻaho became King of Tonga, with the regnal name ʻAhoʻeitu Tupou VI.

Donor provenance: {"rowIndex":5027,"questionId":"5a8933fe55429951533612df","passageIndex":8,"title":"Tupou VI","sentences":["Tupou VI (ʻAhoʻeitu ʻUnuakiʻotonga Tukuʻaho; born 12 July 1959) is the King of Tonga."," He is the younger brother and successor of the late King George Tupou V."," He was officially confirmed by his brother on 27 September 2006 as the heir presumptive to the Throne of Tonga, as his brother (a bachelor) had no legitimate children."," He served as Tonga's High Commissioner to Australia, and resided in Canberra until the death of King George Tupou V on 18 March 2012, when ʻAhoʻeitu ʻUnuakiʻotonga Tukuʻaho became King of Tonga, with the regnal name ʻAhoʻeitu Tupou VI."]}

Review: Contradicts the answer-bearing relation: type of works numbering approximately 65,000 in the Albertina collection. The false assertion explicitly excludes the gold value in the same scope. The source sentence and complete supporting passages are retained for review.

Independent source passage about Tupou VI; no shared content terms with the question or supporting passages, and no answer or evidence-subject match. Review alongside the paired question is in noise-review.md.

Checks: original supporting passages and sentence indices preserved; labeled source span; distinct alternative with scoped denial; unrelated donor 70–100 words; distinct donor; no answer, title or content-term overlap.

## 46. 5a8eea4a5542990e94052bb7 (row 177)

Question: When was the Western Germanic language spoken from which the small settlement situated on the river Leda opposite Leer derives its name?

Gold answer (review only): between the 8th and 16th centuries

Relation checked: period when Old Frisian was spoken

Labeled source: Old Frisian [0]

Old Frisian is a West Germanic language spoken between the 8th and 16th centuries in the area between the Rhine and Weser on the European North Sea coast.

Supporting passages:

**Old Frisian**

[0] Old Frisian is a West Germanic language spoken between the 8th and 16th centuries in the area between the Rhine and Weser on the European North Sea coast.

[1]  The Frisian settlers on the coast of South Jutland (today's Northern Friesland) also spoke Old Frisian but no medieval texts of this area are known.

[2]  The language of the earlier inhabitants of the region between the Zuiderzee and Ems River (the Frisians mentioned by Tacitus) is attested in only a few personal names and place-names.

[3]  Old Frisian evolved into Middle Frisian, spoken from the 16th to the 19th century.

**Leda (river)**

[0] The Leda is a river in north-western Germany in the state of Lower Saxony.

[1]  It is a right tributary of the Ems and originates at the confluence of the Sagter Ems and the Soeste (Dreyschloot) near the town of Barßel.

[2]  The Leda flows into the Ems near the town of Leer.

[3]  On the southern bank of the Leda, in the "Overledingen Land" (Overledingen="country over the Leda"), opposite Leer, lies the small settlement of Kloster Muhde ("Muhde" from the Old Frisian "mutha" meaning "(river) mouth").

[4]  The total length of the river is 29 km , of which the lower 1.9 km are navigable for sea-going vessels.

Synthetic conflicting passage:

The period when Old Frisian was spoken is between the 10th and 18th centuries. It is not between the 8th and 16th centuries. This reference entry describes the particular subject and historical detail identified in the preceding statement. The description concerns that subject alone, rather than a similarly named person, place, organization, or work. The wording refers to the same event, period, and relationship throughout the account. Other details about the subject are outside the scope of this short entry.

Irrelevant passage: **Geoffrey Foster**

Geoffrey Norman Foster (16 October 1884 – 11 August 1971) was an English cricketer who played county cricket for Worcestershire and Kent, as well as appearing a number of times for Oxford University and MCC.  He was one of the seven Foster brothers, all of whom played first-class cricket for Worcestershire, and he led the county on a few occasions in the absence of the regular captain.  He was a fast scorer, once making 101 in an hour for Oxford against Gentlemen of England.

Donor provenance: {"rowIndex":5028,"questionId":"5ac3d2ac554299741d48a330","passageIndex":9,"title":"Geoffrey Foster","sentences":["Geoffrey Norman Foster (16 October 1884 – 11 August 1971) was an English cricketer who played county cricket for Worcestershire and Kent, as well as appearing a number of times for Oxford University and MCC."," He was one of the seven Foster brothers, all of whom played first-class cricket for Worcestershire, and he led the county on a few occasions in the absence of the regular captain."," He was a fast scorer, once making 101 in an hour for Oxford against Gentlemen of England."]}

Review: Contradicts the answer-bearing relation: period when Old Frisian was spoken. The false assertion explicitly excludes the gold value in the same scope. The source sentence and complete supporting passages are retained for review.

Independent source passage about Geoffrey Foster; no shared content terms with the question or supporting passages, and no answer or evidence-subject match. Review alongside the paired question is in noise-review.md.

Checks: original supporting passages and sentence indices preserved; labeled source span; distinct alternative with scoped denial; unrelated donor 70–100 words; distinct donor; no answer, title or content-term overlap.

## 47. 5a88dcf9554299206df2b383 (row 179)

Question: What country does Hatton Hill and Hatton Castle, Angus have in common?

Gold answer (review only): Scotland

Relation checked: country containing Hatton Hill and Hatton Castle, Angus

Labeled source: Hatton Hill [0]

Hatton Hill is a mountain landform in Angus, Scotland and is the most easterly peak of the Sidlaw Hills.

Supporting passages:

**Hatton Hill**

[0] Hatton Hill is a mountain landform in Angus, Scotland and is the most easterly peak of the Sidlaw Hills.

[1]  Hatton Castle stands on the flanks of Hatton Hill above the village of Newtyle.

**Hatton Castle, Angus**

[0] Hatton Castle stands on the lower part of Hatton Hill, the most easterly of the Sidlaw Hills, to the south of Newtyle in Angus, Scotland.

[1]  The castle overlooks the wooded Den of Newtyle, and its views extend across Strathmore and include Ben Lawers and Schiehallion as well as the Angus and Glenshee hills.

[2]  The 16th-century castle was originally built in a typical Scottish "Z plan" tower house design, as a fortified country house or "château".

[3]  There was an earlier castle called Balcraig Castle which stood less than half a mile from the present building, also on Hatton Hill.

Synthetic conflicting passage:

The country containing Hatton Hill and Hatton Castle, Angus is Wales. It is not Scotland. This reference entry describes the particular subject and historical detail identified in the preceding statement. The description concerns that subject alone, rather than a similarly named person, place, organization, or work. The wording refers to the same event, period, and relationship throughout the account. Other details about the subject are outside the scope of this short entry.

Irrelevant passage: **Will Arnett**

William Emerson Arnett ( ; born May 4, 1970) is a Canadian-American actor, voice actor and comedian.  He is best known for his role as George Oscar "Gob" Bluth II in the Fox/Netflix series "Arrested Development" (2003–2006, 2013, 2018); as well as his titular role as BoJack Horseman in the Netflix Original Series of the same name (2014-present).  He has appeared in films such as "Blades of Glory" (2007), "Hot Rod" (2007) and "Teenage Mutant Ninja Turtles" (2014).

Donor provenance: {"rowIndex":5030,"questionId":"5a8c758d5542995e66a475ff","passageIndex":0,"title":"Will Arnett","sentences":["William Emerson Arnett ( ; born May 4, 1970) is a Canadian-American actor, voice actor and comedian."," He is best known for his role as George Oscar \"Gob\" Bluth II in the Fox/Netflix series \"Arrested Development\" (2003–2006, 2013, 2018); as well as his titular role as BoJack Horseman in the Netflix Original Series of the same name (2014-present)."," He has appeared in films such as \"Blades of Glory\" (2007), \"Hot Rod\" (2007) and \"Teenage Mutant Ninja Turtles\" (2014)."]}

Review: Contradicts the answer-bearing relation: country containing Hatton Hill and Hatton Castle, Angus. The false assertion explicitly excludes the gold value in the same scope. The source sentence and complete supporting passages are retained for review.

Independent source passage about Will Arnett; no shared content terms with the question or supporting passages, and no answer or evidence-subject match. Review alongside the paired question is in noise-review.md.

Checks: original supporting passages and sentence indices preserved; labeled source span; distinct alternative with scoped denial; unrelated donor 70–100 words; distinct donor; no answer, title or content-term overlap.

## 48. 5ac0d83a554299294b219038 (row 181)

Question: Randall Cunningham II was a multi-sport athlete at the high school located in what Nevada city?

Gold answer (review only): Summerlin

Relation checked: Nevada city containing Bishop Gorman High School

Labeled source: Bishop Gorman High School [0]

Bishop Gorman High School (also commonly referred to as Gorman High School or BGHS) is a Roman Catholic, private, preparatory school located in Summerlin, Nevada.

Supporting passages:

**Bishop Gorman High School**

[0] Bishop Gorman High School (also commonly referred to as Gorman High School or BGHS) is a Roman Catholic, private, preparatory school located in Summerlin, Nevada.

[1]  The school is administered by the Diocese of Las Vegas, and has been serving Clark County and the Las Vegas Valley for over 50 years.

[2]  The school opened in 1954 and its mascot is a Gael, or mounted Irish Knight.

**Randall Cunningham II**

[0] Randall Cunningham II, sometimes Randall Cunningham, Jr., (born January 4, 1996) is an American collegiate high jumper for the USC Trojans Men's track & field team who will be a senior during the 2017–18 school year.

[1]  He was a high jumper and quarterback at Bishop Gorman High School.

[2]  He is a five-time Nevada Interscholastic Activities Association (NIAA) state champion (three times in track and twice in football).

[3]  He is a NCAA Outdoor Track Champion and 2-time All-American, U.S. Junior National Champion and Pan American Junior Athletics Championships Champion.

Synthetic conflicting passage:

The Nevada city containing Bishop Gorman High School is Henderson. It is not Summerlin. This reference entry describes the particular subject and historical detail identified in the preceding statement. The description concerns that subject alone, rather than a similarly named person, place, organization, or work. The wording refers to the same event, period, and relationship throughout the account. Other details about the subject are outside the scope of this short entry.

Irrelevant passage: **Triangle Brewing Company**

Triangle Brewing Co. (TBC) is a microbrewery owned and operated entirely by business partners (and high-school friends) Rick "the Brewer" Tufts and Andy "the Bloke" Miller, who have recently resettled in Durham, North Carolina from Connecticut.  Andy Miller had extensive local restaurant management experience, and Rick Tufts apprenticed at Flying Fish Brewing Company and was an avid homebrewer long before founding a new brewery.  TBC began selling beer on July 4, 2007 and was the only microbrewery in Durham.  The arrival of a microbrewery in Durham is arguably part of the current downtown art, building, and cultural Renaissance.

Donor provenance: {"rowIndex":5029,"questionId":"5a83d0ed5542996488c2e4e7","passageIndex":0,"title":"Triangle Brewing Company","sentences":["Triangle Brewing Co. (TBC) is a microbrewery owned and operated entirely by business partners (and high-school friends) Rick \"the Brewer\" Tufts and Andy \"the Bloke\" Miller, who have recently resettled in Durham, North Carolina from Connecticut."," Andy Miller had extensive local restaurant management experience, and Rick Tufts apprenticed at Flying Fish Brewing Company and was an avid homebrewer long before founding a new brewery."," TBC began selling beer on July 4, 2007 and was the only microbrewery in Durham."," The arrival of a microbrewery in Durham is arguably part of the current downtown art, building, and cultural Renaissance."]}

Review: Contradicts the answer-bearing relation: Nevada city containing Bishop Gorman High School. The false assertion explicitly excludes the gold value in the same scope. The source sentence and complete supporting passages are retained for review.

Independent source passage about Triangle Brewing Company; no shared content terms with the question or supporting passages, and no answer or evidence-subject match. Review alongside the paired question is in noise-review.md.

Checks: original supporting passages and sentence indices preserved; labeled source span; distinct alternative with scoped denial; unrelated donor 70–100 words; distinct donor; no answer, title or content-term overlap.

## 49. 5a790d8f554299029c4b5eec (row 182)

Question: Which English musician is known for both the songs "See Yourself" and "Withing You Without You"?

Gold answer (review only): George Harrison

Relation checked: musician responsible for See Yourself and Within You Without You

Labeled source: See Yourself [0]

"See Yourself" is a song by English musician George Harrison, released on his 1976 album "Thirty Three & 1/3".

Supporting passages:

**See Yourself**

[0] "See Yourself" is a song by English musician George Harrison, released on his 1976 album "Thirty Three & 1/3".

[1]  Harrison began writing the song in 1967, while he was a member of the Beatles, in response to the public outcry surrounding bandmate Paul McCartney's admission that he had taken the hallucinogenic drug LSD.

[2]  McCartney's announcement created a reaction in the press similar to that caused in 1966 by John Lennon's statement that the Beatles were more popular than Christianity.

[3]  In its finished form, the song's lyrics advocate self-awareness and consideration for the consequences of one's actions.

[4]  Musically, the composition contains unusual shifts in time signature from standard 4/4 to 9/8, while the songwords reflect the era of its genesis by recalling themes first espoused in the Beatles tracks "Within You Without You" and "All You Need Is Love".

**Within You Without You**

[0] "Within You Without You" is a song written by George Harrison and released on the Beatles' 1967 album "Sgt. Pepper's Lonely Hearts Club Band".

[1]  It was Harrison's second composition in the Indian classical style, after "Love You To", and was inspired by his six-week stay in India with his mentor and sitar teacher, Ravi Shankar, over September–October 1966.

[2]  Recorded in London without the other Beatles, the song features Indian instrumentation such as sitar, dilruba and tabla, and was performed by Harrison and members of the Asian Music Circle.

[3]  The recording marked a significant departure from the Beatles' previous work; musically, it evokes the Indian devotional tradition, while the overtly spiritual quality of the lyrics reflects Harrison's absorption in Hindu philosophy and the teachings of the Vedas.

[4]  Although the song was his only composition on "Sgt. Pepper", Harrison's endorsement of Indian culture was further reflected in the inclusion of yogis such as Paramahansa Yogananda among the crowd depicted on the album cover.

Synthetic conflicting passage:

The musician responsible for See Yourself and Within You Without You is Paul McCartney. It is not George Harrison. This reference entry describes the particular subject and historical detail identified in the preceding statement. The description concerns that subject alone, rather than a similarly named person, place, organization, or work. The wording refers to the same event, period, and relationship throughout the account. Other details about the subject are outside the scope of this short entry.

Irrelevant passage: **Langley Academy, Slough**

The Langley Academy is an academy in Langley, east of Slough in Berkshire, south east England.  It opened in September 2008, replacing the former Langleywood Secondary School.  The building was designed by Foster and Partners, led by the architect Norman Foster and by Buro Happold.  The school is supported by the Arbib Foundation.  It has a specialism of science and a museum education theme, including exhibits in the school building.  It also promotes sport, notably cricket and rowing.

Donor provenance: {"rowIndex":5028,"questionId":"5ac3d2ac554299741d48a330","passageIndex":8,"title":"Langley Academy, Slough","sentences":["The Langley Academy is an academy in Langley, east of Slough in Berkshire, south east England."," It opened in September 2008, replacing the former Langleywood Secondary School."," The building was designed by Foster and Partners, led by the architect Norman Foster and by Buro Happold."," The school is supported by the Arbib Foundation."," It has a specialism of science and a museum education theme, including exhibits in the school building."," It also promotes sport, notably cricket and rowing."]}

Review: Contradicts the answer-bearing relation: musician responsible for See Yourself and Within You Without You. The false assertion explicitly excludes the gold value in the same scope. The source sentence and complete supporting passages are retained for review.

Independent source passage about Langley Academy, Slough; no shared content terms with the question or supporting passages, and no answer or evidence-subject match. Review alongside the paired question is in noise-review.md.

Checks: original supporting passages and sentence indices preserved; labeled source span; distinct alternative with scoped denial; unrelated donor 70–100 words; distinct donor; no answer, title or content-term overlap.

## 50. 5ab2c5e255429916697740ba (row 183)

Question: Which professional ice hockey position does the Captain of the National Hockey League All-Star Game "Away Team" play?

Gold answer (review only): Canadian professional ice hockey centre

Relation checked: playing position and nationality of Jonathan Toews

Labeled source: Jonathan Toews [0]

Jonathan Bryan Toews, {'1': ", '2': ", '3': ", '4': "} ( ; born April 29, 1988) is a Canadian professional ice hockey centre who currently serves as captain of the Chicago Blackhawks of the National Hockey League (NHL).

Supporting passages:

**60th National Hockey League All-Star Game**

[0] The 60th National Hockey League All-Star Game was an exhibition ice hockey game played on January 25, 2015.

[1]  The game was held in Columbus, Ohio, for the first time, at Nationwide Arena, home of the Columbus Blue Jackets.

[2]  The team captains were chosen by NHL Hockey Operations: Nick Foligno of the All-Star Game-hosting Blue Jackets served as captain for the home team, and Jonathan Toews of the Chicago Blackhawks served for the away team.

[3]  Team Toews won the game 17–12, as the teams and players broke a variety of All-Star Game scoring records.

**Jonathan Toews**

[0] Jonathan Bryan Toews, {'1': ", '2': ", '3': ", '4': "} ( ; born April 29, 1988) is a Canadian professional ice hockey centre who currently serves as captain of the Chicago Blackhawks of the National Hockey League (NHL).

Synthetic conflicting passage:

The playing position and nationality of Jonathan Toews is Canadian professional ice hockey goaltender. It is not Canadian professional ice hockey centre. This reference entry describes the particular subject and historical detail identified in the preceding statement. The description concerns that subject alone, rather than a similarly named person, place, organization, or work. The wording refers to the same event, period, and relationship throughout the account. Other details about the subject are outside the scope of this short entry.

Irrelevant passage: **SS Principessa Mafalda**

The SS Principessa Mafalda was an Italian transatlantic ocean liner built for the Navigazione Generale Italiana (NGI) company.  Named after Princess Mafalda of Savoy, second daughter of King Victor Emmanuel III, the ship entered NGI's South American service between Genoa and Buenos Aires in 1909.  At the time of her completion she was the largest Italian passenger ship afloat.  The "Mafalda" was known for her luxury and was the preferred mode of travel for such celebrities of the day as Carlos Gardel.

Donor provenance: {"rowIndex":5027,"questionId":"5a8933fe55429951533612df","passageIndex":7,"title":"SS Principessa Mafalda","sentences":["The SS Principessa Mafalda was an Italian transatlantic ocean liner built for the Navigazione Generale Italiana (NGI) company."," Named after Princess Mafalda of Savoy, second daughter of King Victor Emmanuel III, the ship entered NGI's South American service between Genoa and Buenos Aires in 1909."," At the time of her completion she was the largest Italian passenger ship afloat."," The \"Mafalda\" was known for her luxury and was the preferred mode of travel for such celebrities of the day as Carlos Gardel."]}

Review: Contradicts the answer-bearing relation: playing position and nationality of Jonathan Toews. The false assertion explicitly excludes the gold value in the same scope. The source sentence and complete supporting passages are retained for review.

Independent source passage about SS Principessa Mafalda; no shared content terms with the question or supporting passages, and no answer or evidence-subject match. Review alongside the paired question is in noise-review.md.

Checks: original supporting passages and sentence indices preserved; labeled source span; distinct alternative with scoped denial; unrelated donor 70–100 words; distinct donor; no answer, title or content-term overlap.

## 51. 5abcfc365542993a06baf9d6 (row 184)

Question: What year did the series on CBS, starring the actor who known for his role in "Rebel Without a Cause," air?

Gold answer (review only): 1952

Relation checked: year CBS Television Workshop aired on CBS

Labeled source: CBS Television Workshop [0]

CBS Television Workshop is an American anthology series which aired on CBS from January to April 1952.

Supporting passages:

**CBS Television Workshop**

[0] CBS Television Workshop is an American anthology series which aired on CBS from January to April 1952.

[1]  The series is noted for featuring early television appearances of several well known actors including Audrey Hepburn, James Dean and Grace Kelly.

**James Dean**

[0] James Byron Dean (February 8, 1931 – September 30, 1955) was an American actor.

[1]  He is remembered as a cultural icon of teenage disillusionment and social estrangement, as expressed in the title of his most celebrated film, "Rebel Without a Cause" (1955), in which he starred as troubled teenager Jim Stark.

[2]  The other two roles that defined his stardom were loner Cal Trask in "East of Eden" (1955) and surly ranch hand Jett Rink in "Giant" (1956).

Synthetic conflicting passage:

The year CBS Television Workshop aired on CBS is 1953. It is not 1952. This reference entry describes the particular subject and historical detail identified in the preceding statement. The description concerns that subject alone, rather than a similarly named person, place, organization, or work. The wording refers to the same event, period, and relationship throughout the account. Other details about the subject are outside the scope of this short entry.

Irrelevant passage: **MillerCoors**

MillerCoors is a beer brewing company in the United States.  In 2002 South African Breweries purchased Miller Brewing Company to create SABMiller.  In 2005, Molson Brewery of Canada and Coors Brewing Company merged to form the Molson Coors Brewing Company.  Then, in 2008, SABMiller and Molson Coors created MillerCoors as a joint venture for their operations in the U.S.  The company is the second-largest brewer in the U.S., after Anheuser-Busch.

Donor provenance: {"rowIndex":5029,"questionId":"5a83d0ed5542996488c2e4e7","passageIndex":8,"title":"MillerCoors","sentences":["MillerCoors is a beer brewing company in the United States."," In 2002 South African Breweries purchased Miller Brewing Company to create SABMiller."," In 2005, Molson Brewery of Canada and Coors Brewing Company merged to form the Molson Coors Brewing Company."," Then, in 2008, SABMiller and Molson Coors created MillerCoors as a joint venture for their operations in the U.S."," The company is the second-largest brewer in the U.S., after Anheuser-Busch."]}

Review: Contradicts the answer-bearing relation: year CBS Television Workshop aired on CBS. The false assertion explicitly excludes the gold value in the same scope. The source sentence and complete supporting passages are retained for review.

Independent source passage about MillerCoors; no shared content terms with the question or supporting passages, and no answer or evidence-subject match. Review alongside the paired question is in noise-review.md.

Checks: original supporting passages and sentence indices preserved; labeled source span; distinct alternative with scoped denial; unrelated donor 70–100 words; distinct donor; no answer, title or content-term overlap.

## 52. 5a8ee6915542990e94052bad (row 185)

Question: What season was the character introduced that becomes the main antagonist in the  following season, from the animated television series created by Bryan Konietzko and Michael Dante DiMartino as a sequel to "", which aired from 2005 to 2008? 

Gold answer (review only): third

Relation checked: season in which Kuvira was introduced in The Legend of Korra

Labeled source: Kuvira [1]

 Introduced in the third season of the series, she becomes the main antagonist of the fourth season.

Supporting passages:

**The Legend of Korra**

[0] The Legend of Korra is an American animated television series that aired on the Nickelodeon television network from 2012 to 2014.

[1]  It was created by Bryan Konietzko and Michael Dante DiMartino as a sequel to "", which aired from 2005 to 2008.

[2]  Animated in a style strongly influenced by anime, the series is set in a fictional universe in which some people can manipulate, or "bend", the elements of water, earth, fire, or air.

[3]  Only one person, the "Avatar", can bend all four elements, and is responsible for maintaining balance in the world.

[4]  The series follows Avatar Korra, the reincarnation of Aang from the previous series, as she faces political and spiritual unrest in a modernizing world.

**Kuvira**

[0] General Kuvira (古維拉 , Gǔ Wéi Lā ) is a fictional character and a character in "The Legend of Korra", created by Michael Dante DiMartino and Bryan Konietzko.

[1]  Introduced in the third season of the series, she becomes the main antagonist of the fourth season.

[2]  Kuvira was created with similar characteristics to the portrayal of protagonist Korra in prior seasons to highlight the changes she had made over the series.

[3]  Kuvira's character has been mostly met with positive reception.

[4]  Critics note her motives as being understandable, while her actions are given political analogues.

Synthetic conflicting passage:

The season in which Kuvira was introduced in The Legend of Korra is second. It is not third. This reference entry describes the particular subject and historical detail identified in the preceding statement. The description concerns that subject alone, rather than a similarly named person, place, organization, or work. The wording refers to the same event, period, and relationship throughout the account. Other details about the subject are outside the scope of this short entry.

Irrelevant passage: **Kirk Kerkorian**

Kerkor "Kirk" Kerkorian (June 6, 1917 – June 15, 2015) was an Armenian-American businessman, investor, and philanthropist.  He was the president and CEO of Tracinda Corporation, his private holding company based in Beverly Hills, California.  Kerkorian is known for having been one of the important figures in the shaping of Las Vegas and, with architect Martin Stern, Jr. described as the "father of the mega-resort".  He built the world's largest hotel in Las Vegas three times: the International Hotel (opened in 1969), the MGM Grand Hotel (1973) and the MGM Grand (1993).  He purchased the Metro-Goldwyn-Mayer movie studio in 1969.

Donor provenance: {"rowIndex":5031,"questionId":"5adcb30b5542994d58a2f69f","passageIndex":5,"title":"Kirk Kerkorian","sentences":["Kerkor \"Kirk\" Kerkorian (June 6, 1917 – June 15, 2015) was an Armenian-American businessman, investor, and philanthropist."," He was the president and CEO of Tracinda Corporation, his private holding company based in Beverly Hills, California."," Kerkorian is known for having been one of the important figures in the shaping of Las Vegas and, with architect Martin Stern, Jr. described as the \"father of the mega-resort\"."," He built the world's largest hotel in Las Vegas three times: the International Hotel (opened in 1969), the MGM Grand Hotel (1973) and the MGM Grand (1993)."," He purchased the Metro-Goldwyn-Mayer movie studio in 1969."]}

Review: Contradicts the answer-bearing relation: season in which Kuvira was introduced in The Legend of Korra. The false assertion explicitly excludes the gold value in the same scope. The source sentence and complete supporting passages are retained for review.

Independent source passage about Kirk Kerkorian; no shared content terms with the question or supporting passages, and no answer or evidence-subject match. Review alongside the paired question is in noise-review.md.

Checks: original supporting passages and sentence indices preserved; labeled source span; distinct alternative with scoped denial; unrelated donor 70–100 words; distinct donor; no answer, title or content-term overlap.

## 53. 5abba4855542993f40c73b68 (row 186)

Question: Who were the directors of the 2009 American science fiction film starring the actor who played Dexter Morgan in the Showtime TV Network series "Dexter"?

Gold answer (review only): Mark Neveldine and Brian Taylor

Relation checked: directing team of the 2009 film Gamer

Labeled source: Gamer (film) [0]

Gamer is a 2009 American science fiction action film written and directed by Mark Neveldine and Brian Taylor.

Supporting passages:

**Michael C. Hall**

[0] Michael Carlyle Hall (born February 1, 1971) is an American actor, known for his roles as Dexter Morgan, a serial killer and blood spatter analyst, in the Showtime TV Network series "Dexter", and as David Fisher in the HBO drama series "Six Feet Under".

[1]  In 2010, Hall won a Golden Globe Award and a Screen Actors Guild Award for his role in "Dexter".

**Gamer (film)**

[0] Gamer is a 2009 American science fiction action film written and directed by Mark Neveldine and Brian Taylor.

[1]  The film stars Gerard Butler as a participant in an online game in which participants can control human beings as players, and Logan Lerman as the player who controls him.

[2]  Alongside Butler and Lerman, it also stars Michael C. Hall, Ludacris, Amber Valletta, Terry Crews, Alison Lohman, John Leguizamo, and Zoë Bell.

Synthetic conflicting passage:

The directing team of the 2009 film Gamer is Lana Wachowski and Lilly Wachowski. It is not Mark Neveldine and Brian Taylor. This reference entry describes the particular subject and historical detail identified in the preceding statement. The description concerns that subject alone, rather than a similarly named person, place, organization, or work. The wording refers to the same event, period, and relationship throughout the account. Other details about the subject are outside the scope of this short entry.

Irrelevant passage: **J. R. Campbell (communist)**

John Ross Campbell MM (15 October 1894 – 18 September 1969), best known as J. R. Campbell and also as Johnny Campbell, was a British communist activist and newspaper editor.  Campbell is best remembered as the principal in the so-called Campbell Case.  In 1924, Campbell was charged under the Incitement to Mutiny Act for an article published in the paper "Workers' Weekly."  Campbell called on British soldiers to "let it be known that, neither in the class war nor in a military war, will you turn your guns on your fellow workers."

Donor provenance: {"rowIndex":5032,"questionId":"5a8f2cc855429918e830d1be","passageIndex":1,"title":"J. R. Campbell (communist)","sentences":["John Ross Campbell MM (15 October 1894 – 18 September 1969), best known as J. R. Campbell and also as Johnny Campbell, was a British communist activist and newspaper editor."," Campbell is best remembered as the principal in the so-called Campbell Case."," In 1924, Campbell was charged under the Incitement to Mutiny Act for an article published in the paper \"Workers' Weekly.\""," Campbell called on British soldiers to \"let it be known that, neither in the class war nor in a military war, will you turn your guns on your fellow workers.\""]}

Review: Contradicts the answer-bearing relation: directing team of the 2009 film Gamer. The false assertion explicitly excludes the gold value in the same scope. The source sentence and complete supporting passages are retained for review.

Independent source passage about J. R. Campbell (communist); no shared content terms with the question or supporting passages, and no answer or evidence-subject match. Review alongside the paired question is in noise-review.md.

Checks: original supporting passages and sentence indices preserved; labeled source span; distinct alternative with scoped denial; unrelated donor 70–100 words; distinct donor; no answer, title or content-term overlap.

## 54. 5a7997a2554299029c4b5f59 (row 189)

Question: Tefik Selim Mborja was a part of a party that held power in Albania until what year? 

Gold answer (review only): 1943

Relation checked: last year the Albanian Fascist Party held nominal power

Labeled source: Albanian Fascist Party [0]

The Albanian Fascist Party (Albanian: "Partia Fashiste e Shqipërisë" , or PFSh) was a Fascist organization active during World War II which held nominal power in Albania from 1939, when the country was conquered by Italy, until 1943, when Italy capitulated to the Allies.

Supporting passages:

**Albanian Fascist Party**

[0] The Albanian Fascist Party (Albanian: "Partia Fashiste e Shqipërisë" , or PFSh) was a Fascist organization active during World War II which held nominal power in Albania from 1939, when the country was conquered by Italy, until 1943, when Italy capitulated to the Allies.

[1]  Afterwards, Albania fell under German occupation, and the PFSh was replaced by the Guard of Greater Albania.

**Tefik Mborja**

[0] Tefik Selim Mborja (1888-1954) was an Albanian politician and lawyer.

[1]  He served as the general secretary of the Albanian Fascist Party during the Second World War.

Synthetic conflicting passage:

The last year the Albanian Fascist Party held nominal power is 1944. It is not 1943. This reference entry describes the particular subject and historical detail identified in the preceding statement. The description concerns that subject alone, rather than a similarly named person, place, organization, or work. The wording refers to the same event, period, and relationship throughout the account. Other details about the subject are outside the scope of this short entry.

Irrelevant passage: **Natasha Lyonne**

Natasha Bianca Lyonne Braunstein (born April 4, 1979), better known as Natasha Lyonne, is an American actress.  She is best known for her role as Jessica in the "American Pie" film series.  Her other films include "Everyone Says I Love You," "Slums of Beverly Hills," and "But I'm a Cheerleader".  She portrays Nicky Nichols in the Netflix series "Orange Is the New Black," for which she received a nomination for the 2014 Primetime Emmy Award for Outstanding Guest Actress in a Comedy Series.

Donor provenance: {"rowIndex":5030,"questionId":"5a8c758d5542995e66a475ff","passageIndex":1,"title":"Natasha Lyonne","sentences":["Natasha Bianca Lyonne Braunstein (born April 4, 1979), better known as Natasha Lyonne, is an American actress."," She is best known for her role as Jessica in the \"American Pie\" film series."," Her other films include \"Everyone Says I Love You,\" \"Slums of Beverly Hills,\" and \"But I'm a Cheerleader\"."," She portrays Nicky Nichols in the Netflix series \"Orange Is the New Black,\" for which she received a nomination for the 2014 Primetime Emmy Award for Outstanding Guest Actress in a Comedy Series."]}

Review: Contradicts the answer-bearing relation: last year the Albanian Fascist Party held nominal power. The false assertion explicitly excludes the gold value in the same scope. The source sentence and complete supporting passages are retained for review.

Independent source passage about Natasha Lyonne; no shared content terms with the question or supporting passages, and no answer or evidence-subject match. Review alongside the paired question is in noise-review.md.

Checks: original supporting passages and sentence indices preserved; labeled source span; distinct alternative with scoped denial; unrelated donor 70–100 words; distinct donor; no answer, title or content-term overlap.

## 55. 5ae819ac55429952e35eaa16 (row 191)

Question: What station broadcast the episode "Marry Me a Little, Marry Me a Little More" , of the series created by Max Mutchnick and David Kohan?

Gold answer (review only): National Broadcasting Company

Relation checked: original broadcaster of Marry Me a Little, Marry Me a Little More

Labeled source: Marry Me a Little, Marry Me a Little More [2]

 The episode originally aired on the National Broadcasting Company (NBC) in the United States on November 21, 2002.

Supporting passages:

**Will &amp; Grace**

[0] Will & Grace is an American sitcom created by Max Mutchnick and David Kohan.

[1]  Set in New York City, the show focuses on the relationship between best friends Will Truman (Eric McCormack), a gay lawyer, and Grace Adler (Debra Messing), a straight interior designer.

[2]  The show was broadcast on NBC from September 21, 1998 to May 18, 2006, for a total of eight seasons, and re-started its run on NBC on September 28, 2017.

[3]  During its original run, "Will & Grace" was one of the most successful television series with gay principal characters.

**Marry Me a Little, Marry Me a Little More**

[0] "Marry Me a Little, Marry Me a Little More" is a double-length episode of the American television series "Will & Grace"' s fifth season.

[1]  It was written by Jeff Greenstein and Bill Wrubel and directed by series producer James Burrows.

[2]  The episode originally aired on the National Broadcasting Company (NBC) in the United States on November 21, 2002.

[3]  Guest stars in "Marry Me a Little, Marry Me a Little More" include Harry Connick Jr., Katie Couric, Judith Ivey, and Debbie Reynolds.

Synthetic conflicting passage:

The original broadcaster of Marry Me a Little, Marry Me a Little More is Columbia Broadcasting System. It is not National Broadcasting Company. This reference entry describes the particular subject and historical detail identified in the preceding statement. The description concerns that subject alone, rather than a similarly named person, place, organization, or work. The wording refers to the same event, period, and relationship throughout the account. Other details about the subject are outside the scope of this short entry.

Irrelevant passage: **No. 456 Squadron RAAF**

No. 456 Squadron RAAF was a Royal Australian Air Force (RAAF) night fighter squadron, operational over Europe during World War II.  Formed in mid-1941, the squadron was the RAAF's only night fighter squadron.  It was also the first RAAF unit to use a roundel featuring a red kangaroo in a blue circle, on some parts of its aircraft.  While this insignia was unofficial and the squadron's main markings conformed to the RAF roundels used by British and other Commonwealth units, it inspired the post-war roundel used by the RAAF.

Donor provenance: {"rowIndex":5034,"questionId":"5a862c38554299211dda2a9a","passageIndex":3,"title":"No. 456 Squadron RAAF","sentences":["No. 456 Squadron RAAF was a Royal Australian Air Force (RAAF) night fighter squadron, operational over Europe during World War II."," Formed in mid-1941, the squadron was the RAAF's only night fighter squadron."," It was also the first RAAF unit to use a roundel featuring a red kangaroo in a blue circle, on some parts of its aircraft."," While this insignia was unofficial and the squadron's main markings conformed to the RAF roundels used by British and other Commonwealth units, it inspired the post-war roundel used by the RAAF."]}

Review: Contradicts the answer-bearing relation: original broadcaster of Marry Me a Little, Marry Me a Little More. The false assertion explicitly excludes the gold value in the same scope. The source sentence and complete supporting passages are retained for review.

Independent source passage about No. 456 Squadron RAAF; no shared content terms with the question or supporting passages, and no answer or evidence-subject match. Review alongside the paired question is in noise-review.md.

Checks: original supporting passages and sentence indices preserved; labeled source span; distinct alternative with scoped denial; unrelated donor 70–100 words; distinct donor; no answer, title or content-term overlap.

## 56. 5aba65a055429939ce03dcd2 (row 192)

Question: Georges-Henri Bousquet translated the work of a historian who is of what heritage?

Gold answer (review only): North African Arab

Relation checked: heritage of Ibn Khaldun

Labeled source: Ibn Khaldun [0]

Ibn Khaldun ( ; Arabic: أبو زيد عبد الرحمن بن محمد بن خلدون الحضرمي‎ ‎ , "Abū Zayd ‘Abd ar-Raḥmān ibn Muḥammad ibn Khaldūn al-Ḥaḍramī" ; 27 May 1332 – 17 March 1406) was a North African Arab historiographer and historian.

Supporting passages:

**Georges-Henri Bousquet**

[0] Georges-Henri Bousquet (21 June 1900, Meudon – 23 January 1978, Latresne) was a 20th-century French jurist, economist and Islamologist.

[1]  He was Professor of law at the Faculty of Law of the University of Algiers where he was a specialist in the sociology of North Africa (Berbers, Islam).

[2]  He is also known for his translation work of the great Muslim authors, Al-Ghazali, a theologian who died in 1111 and Tunisian historian Ibn Khaldun (1332-1406).

[3]  He was known as a polyglot, spoke several European languages (Dutch, his second mother tongue, English, German, Italian, but also Spanish, Danish, Norwegian ...) and Eastern ones (Arab, Malay ...).

**Ibn Khaldun**

[0] Ibn Khaldun ( ; Arabic: أبو زيد عبد الرحمن بن محمد بن خلدون الحضرمي‎ ‎ , "Abū Zayd ‘Abd ar-Raḥmān ibn Muḥammad ibn Khaldūn al-Ḥaḍramī" ; 27 May 1332 – 17 March 1406) was a North African Arab historiographer and historian.

Synthetic conflicting passage:

The heritage of Ibn Khaldun is South Asian Persian. It is not North African Arab. This reference entry describes the particular subject and historical detail identified in the preceding statement. The description concerns that subject alone, rather than a similarly named person, place, organization, or work. The wording refers to the same event, period, and relationship throughout the account. Other details about the subject are outside the scope of this short entry.

Irrelevant passage: **Jon Bernthal**

Jonathan Edward "Jon" Bernthal (born September 20, 1976) is an American actor best known for his television role as Shane Walsh on the AMC series "The Walking Dead" and film roles in "The Wolf of Wall Street" (2013), "Fury" (2014), "Sicario" (2015), "The Accountant" (2016), "Baby Driver" (2017), & "Wind River" (2017).  He portrayed LAPD Detective Joe Teague in "Mob City" and Frank Castle (a.k.a.  The Punisher) in the Netflix series "Daredevil", and is set to reprise the latter role in the Netflix series "The Punisher".

Donor provenance: {"rowIndex":5030,"questionId":"5a8c758d5542995e66a475ff","passageIndex":3,"title":"Jon Bernthal","sentences":["Jonathan Edward \"Jon\" Bernthal (born September 20, 1976) is an American actor best known for his television role as Shane Walsh on the AMC series \"The Walking Dead\" and film roles in \"The Wolf of Wall Street\" (2013), \"Fury\" (2014), \"Sicario\" (2015), \"The Accountant\" (2016), \"Baby Driver\" (2017), & \"Wind River\" (2017)."," He portrayed LAPD Detective Joe Teague in \"Mob City\" and Frank Castle (a.k.a."," The Punisher) in the Netflix series \"Daredevil\", and is set to reprise the latter role in the Netflix series \"The Punisher\"."]}

Review: Contradicts the answer-bearing relation: heritage of Ibn Khaldun. The false assertion explicitly excludes the gold value in the same scope. The source sentence and complete supporting passages are retained for review.

Independent source passage about Jon Bernthal; no shared content terms with the question or supporting passages, and no answer or evidence-subject match. Review alongside the paired question is in noise-review.md.

Checks: original supporting passages and sentence indices preserved; labeled source span; distinct alternative with scoped denial; unrelated donor 70–100 words; distinct donor; no answer, title or content-term overlap.

## 57. 5a87bada5542994846c1cddc (row 193)

Question: In which city are the headquarters of the American research and scientific development company where Ravi Sethi worked as computer scientist located?

Gold answer (review only): Murray Hill

Relation checked: location of Bell Labs headquarters

Labeled source: Bell Labs [1]

 Its headquarters are located in Murray Hill, New Jersey, in addition to other laboratories around the rest of the United States and in other countries.

Supporting passages:

**Ravi Sethi**

[0] Ravi Sethi (born 1947) is an Indian computer scientist retired from Bell Labs and president of Avaya Labs Research.

[1]  He also serves as a member of the National Science Foundation's Computer and Information Science and Engineering (CISE) Advisory Committee.

[2]  He is best known as one of three authors of the classic computer science textbook "", also known as the "Dragon Book".

**Bell Labs**

[0] Nokia Bell Labs (formerly named AT&T Bell Laboratories, Bell Telephone Laboratories and Bell Labs) is an American research and scientific development company, owned by Finnish company Nokia.

[1]  Its headquarters are located in Murray Hill, New Jersey, in addition to other laboratories around the rest of the United States and in other countries.

Synthetic conflicting passage:

The location of Bell Labs headquarters is Princeton. It is not Murray Hill. This reference entry describes the particular subject and historical detail identified in the preceding statement. The description concerns that subject alone, rather than a similarly named person, place, organization, or work. The wording refers to the same event, period, and relationship throughout the account. Other details about the subject are outside the scope of this short entry.

Irrelevant passage: **Vanessa Kirby**

Vanessa Kirby (born 18 April 1988) is an English stage, TV and film actress.  She starred as Estella in the BBC adaptation of "Great Expectations" in 2011, as Joanna in Richard Curtis' romantic comedy "About Time" in 2013, and currently portrays Princess Margaret in Peter Morgan's Netflix series "The Crown", for which she has been nominated for the British Academy Television Award for Best Supporting Actress.  She is known mostly for her stage work; " Variety" in 2016 called her "the outstanding stage actress of her generation, capable of the most unexpected choices".

Donor provenance: {"rowIndex":5030,"questionId":"5a8c758d5542995e66a475ff","passageIndex":6,"title":"Vanessa Kirby","sentences":["Vanessa Kirby (born 18 April 1988) is an English stage, TV and film actress."," She starred as Estella in the BBC adaptation of \"Great Expectations\" in 2011, as Joanna in Richard Curtis' romantic comedy \"About Time\" in 2013, and currently portrays Princess Margaret in Peter Morgan's Netflix series \"The Crown\", for which she has been nominated for the British Academy Television Award for Best Supporting Actress."," She is known mostly for her stage work; \" Variety\" in 2016 called her \"the outstanding stage actress of her generation, capable of the most unexpected choices\"."]}

Review: Contradicts the answer-bearing relation: location of Bell Labs headquarters. The false assertion explicitly excludes the gold value in the same scope. The source sentence and complete supporting passages are retained for review.

Independent source passage about Vanessa Kirby; no shared content terms with the question or supporting passages, and no answer or evidence-subject match. Review alongside the paired question is in noise-review.md.

Checks: original supporting passages and sentence indices preserved; labeled source span; distinct alternative with scoped denial; unrelated donor 70–100 words; distinct donor; no answer, title or content-term overlap.

## 58. 5ae057fd55429945ae959328 (row 197)

Question:  Robert Smith founded the multinational company headquartered in what city?

Gold answer (review only): Golden Valley, Minnesota,

Relation checked: city containing General Mills headquarters

Labeled source: General Mills [1]

 It is headquartered in Golden Valley, Minnesota, a suburb of Minneapolis.

Supporting passages:

**Robert Smith (Illinois politician)**

[0] Robert Smith (June 12, 1802 – December 21, 1867) was a U.S. Representative from Illinois, nephew of Jeremiah Smith and Samuel Smith of New Hampshire.

[1]  Smith founded General Mills in 1856.

**General Mills**

[0] General Mills, Inc., is an American multinational manufacturer and marketer of branded consumer foods sold through retail stores.

[1]  It is headquartered in Golden Valley, Minnesota, a suburb of Minneapolis.

[2]  The company markets many well-known North American brands, including Annie's Homegrown, Betty Crocker, Yoplait, Colombo, Totino's, Pillsbury, Old El Paso, Häagen-Dazs, Cheerios, Trix, Cocoa Puffs, and Lucky Charms.

[3]  Its brand portfolio includes more than 89 other leading U.S. brands and numerous category leaders around the world.

Synthetic conflicting passage:

The city containing General Mills headquarters is Minneapolis, Minnesota. It is not Golden Valley, Minnesota. This reference entry describes the particular subject and historical detail identified in the preceding statement. The description concerns that subject alone, rather than a similarly named person, place, organization, or work. The wording refers to the same event, period, and relationship throughout the account. Other details about the subject are outside the scope of this short entry.

Irrelevant passage: **Derry**

Derry ( ), officially Londonderry ( ), is the second-largest city in Northern Ireland and the fourth-largest city on the island of Ireland.  The name Derry is an anglicisation of the Old Irish name "Daire" (modern Irish: "Doire") meaning "oak grove".  In 1613, the city was granted a Royal Charter by King James I and gained the "London" prefix to reflect the funding of its construction by the London guilds.  While the city is more usually known colloquially as Derry, Londonderry is also commonly used and remains the legal name.

Donor provenance: {"rowIndex":5032,"questionId":"5a8f2cc855429918e830d1be","passageIndex":8,"title":"Derry","sentences":["Derry ( ), officially Londonderry ( ), is the second-largest city in Northern Ireland and the fourth-largest city on the island of Ireland."," The name Derry is an anglicisation of the Old Irish name \"Daire\" (modern Irish: \"Doire\") meaning \"oak grove\"."," In 1613, the city was granted a Royal Charter by King James I and gained the \"London\" prefix to reflect the funding of its construction by the London guilds."," While the city is more usually known colloquially as Derry, Londonderry is also commonly used and remains the legal name."]}

Review: Contradicts the answer-bearing relation: city containing General Mills headquarters. The false assertion explicitly excludes the gold value in the same scope. The source sentence and complete supporting passages are retained for review.

Independent source passage about Derry; no shared content terms with the question or supporting passages, and no answer or evidence-subject match. Review alongside the paired question is in noise-review.md.

Checks: original supporting passages and sentence indices preserved; labeled source span; distinct alternative with scoped denial; unrelated donor 70–100 words; distinct donor; no answer, title or content-term overlap.

## 59. 5ab28019554299722f9b4d51 (row 198)

Question: What amount was the settlement that the character from the Son of al Quada got in 2017?

Gold answer (review only): $10.5 million

Relation checked: amount of Omar Khadr's 2017 settlement in Canadian dollars

Labeled source: Omar Khadr [2]

 Khadr sued the Canadian government for infringing his rights under the Charter of Rights and Freedoms; this lawsuit was settled in 2017 with a $10.5 million (USD 8 million) payment and an apology by the federal government.

Supporting passages:

**Omar Khadr**

[0] Omar Ahmed Sayid Khadr (born September 19, 1986) is a Canadian citizen who was detained by the United States at Guantanamo Bay for ten years, from the age of 16, during which he pleaded guilty to the murder of U.S. Army Sergeant 1st Class Christopher Speer and other charges.

[1]  He later appealed his conviction, claiming that he falsely pleaded guilty so that he could return to Canada.

[2]  Khadr sued the Canadian government for infringing his rights under the Charter of Rights and Freedoms; this lawsuit was settled in 2017 with a $10.5 million (USD 8 million) payment and an apology by the federal government.

**Son of al Qaeda**

[0] Son of al Qaeda is a documentary about Abdurahman Khadr, a young Canadian whose father was an associate of Osama bin Laden, produced by Terence McKenna and Nazim Baksh.

[1]  Abdurahman's younger brother is Omar Khadr, who was also detained at Guantanamo.

Synthetic conflicting passage:

The amount of Omar Khadr's 2017 settlement in Canadian dollars is $5.5 million. It is not $10.5 million. This reference entry describes the particular subject and historical detail identified in the preceding statement. The description concerns that subject alone, rather than a similarly named person, place, organization, or work. The wording refers to the same event, period, and relationship throughout the account. Other details about the subject are outside the scope of this short entry.

Irrelevant passage: **Ti West**

Ti West (born October 5, 1980) is an American film director, producer, screenwriter, editor, cinematographer, and occasional actor, best known for his work in horror films.  He directed the horror films "The Roost" (2005), "The House of the Devil" (2009), "The Innkeepers" (2011), "The Sacrament" (2013), and the Western "In a Valley of Violence" (2016).  He has also acted in a number of films, mostly in those directed by either himself or Joe Swanberg.

Donor provenance: {"rowIndex":5030,"questionId":"5a8c758d5542995e66a475ff","passageIndex":4,"title":"Ti West","sentences":["Ti West (born October 5, 1980) is an American film director, producer, screenwriter, editor, cinematographer, and occasional actor, best known for his work in horror films."," He directed the horror films \"The Roost\" (2005), \"The House of the Devil\" (2009), \"The Innkeepers\" (2011), \"The Sacrament\" (2013), and the Western \"In a Valley of Violence\" (2016)."," He has also acted in a number of films, mostly in those directed by either himself or Joe Swanberg."]}

Review: Contradicts the answer-bearing relation: amount of Omar Khadr's 2017 settlement in Canadian dollars. The false assertion explicitly excludes the gold value in the same scope. The source sentence and complete supporting passages are retained for review.

Independent source passage about Ti West; no shared content terms with the question or supporting passages, and no answer or evidence-subject match. Review alongside the paired question is in noise-review.md.

Checks: original supporting passages and sentence indices preserved; labeled source span; distinct alternative with scoped denial; unrelated donor 70–100 words; distinct donor; no answer, title or content-term overlap.

## 60. 5adef80b5542993a75d263c4 (row 200)

Question: The 2000 British film Snatch was later adapted into a television series for what streaming service?

Gold answer (review only): Crackle

Relation checked: streaming service where the Snatch television series debuted

Labeled source: Snatch (TV series) [0]

Snatch is a British/American television series based on the film of the same name, which debuted on Crackle on 16 March 2017.

Supporting passages:

**Snatch (film)**

[0] Snatch (stylised as snatch.)

[1]  is a 2000 British crime comedy film written and directed by Guy Ritchie, featuring an ensemble cast.

[2]  Set in the London criminal underworld, the film contains two intertwined plots: one dealing with the search for a stolen diamond, the other with a small-time boxing promoter (Jason Statham) who finds himself under the thumb of a ruthless gangster (Alan Ford) who is ready and willing to have his subordinates carry out severe and sadistic acts of violence.

**Snatch (TV series)**

[0] Snatch is a British/American television series based on the film of the same name, which debuted on Crackle on 16 March 2017.

[1]  The show has been renewed for a second season.

Synthetic conflicting passage:

The streaming service where the Snatch television series debuted is Netflix. It is not Crackle. This reference entry describes the particular subject and historical detail identified in the preceding statement. The description concerns that subject alone, rather than a similarly named person, place, organization, or work. The wording refers to the same event, period, and relationship throughout the account. Other details about the subject are outside the scope of this short entry.

Irrelevant passage: **Pete Mangurian**

Peter K. Mangurian born June 17, 1955 is an American football coach and former player.  He was most recently the Head Football Coach at Columbia University, a position he had held from December 2011 to December 2014.  Mangurian has been a long time assistant coach in the National Football League as tight end, offensive line and offensive coordinator.  He has coached in two Super Bowls and two Pro Bowls and numerous playoff appearances during his tenure as an NFL coach.  He also was the Head Football Coach at Cornell University from 1998 to 2000, compiling a record of 16–14.

Donor provenance: {"rowIndex":5031,"questionId":"5adcb30b5542994d58a2f69f","passageIndex":4,"title":"Pete Mangurian","sentences":["Peter K. Mangurian born June 17, 1955 is an American football coach and former player."," He was most recently the Head Football Coach at Columbia University, a position he had held from December 2011 to December 2014."," Mangurian has been a long time assistant coach in the National Football League as tight end, offensive line and offensive coordinator."," He has coached in two Super Bowls and two Pro Bowls and numerous playoff appearances during his tenure as an NFL coach."," He also was the Head Football Coach at Cornell University from 1998 to 2000, compiling a record of 16–14."]}

Review: Contradicts the answer-bearing relation: streaming service where the Snatch television series debuted. The false assertion explicitly excludes the gold value in the same scope. The source sentence and complete supporting passages are retained for review.

Independent source passage about Pete Mangurian; no shared content terms with the question or supporting passages, and no answer or evidence-subject match. Review alongside the paired question is in noise-review.md.

Checks: original supporting passages and sentence indices preserved; labeled source span; distinct alternative with scoped denial; unrelated donor 70–100 words; distinct donor; no answer, title or content-term overlap.

## 61. 5ab47d765542991751b4d78f (row 202)

Question: Who designed the hotel that held the IFBB professional bodybuilding competition in September 1991?

Gold answer (review only): architect Michael Graves

Relation checked: designer of the Walt Disney World Dolphin hotel

Labeled source: Walt Disney World Dolphin [0]

The Walt Disney World Dolphin is a resort hotel designed by architect Michael Graves located between Epcot and Disney's Hollywood Studios in the Walt Disney World Resort in Bay Lake, Florida, next to Disney's BoardWalk Resort area.

Supporting passages:

**Walt Disney World Dolphin**

[0] The Walt Disney World Dolphin is a resort hotel designed by architect Michael Graves located between Epcot and Disney's Hollywood Studios in the Walt Disney World Resort in Bay Lake, Florida, next to Disney's BoardWalk Resort area.

[1]  It opened on June 1, 1990 and is joined to its sister hotel, the Walt Disney World Swan (also designed by Graves) by a palm-tree lined covered walkway crossing a lagoon.

[2]  The Walt Disney World Swan and Dolphin is a joint venture between the Walt Disney Company, Tishman Hotel Corporation, MetLife and Starwood Hotels and Resorts.

[3]  The land the resort occupies is owned by the Walt Disney Company, while the buildings themselves are leased by Disney to the Tishman Hotel Corporation and MetLife but operated by Starwood Hotels & Resorts Worldwide under the Sheraton Hotels brand.

[4]  The Walt Disney World Swan and Dolphin are a part of the Walt Disney Collection of resorts; because of this they are Disney branded and guests of the resort have access to special Disney benefits available to Disney Resort Hotel guests only.

**1991 Mr. Olympia**

[0] The 1991 Mr. Olympia contest was an IFBB professional bodybuilding competition held in September 1991 at the Walt Disney World Dolphin Hotel in Orlando, Florida.

Synthetic conflicting passage:

The designer of the Walt Disney World Dolphin hotel is architect Frank Gehry. It is not architect Michael Graves. This reference entry describes the particular subject and historical detail identified in the preceding statement. The description concerns that subject alone, rather than a similarly named person, place, organization, or work. The wording refers to the same event, period, and relationship throughout the account. Other details about the subject are outside the scope of this short entry.

Irrelevant passage: **2014 Columbia Lions football team**

The 2014 Columbia Lions football team represented Columbia University in the 2014 NCAA Division I FCS football season.  They were led by third year head coach Pete Mangurian and played their home games at Robert K. Kraft Field at Lawrence A. Wien Stadium.  They were a member of the Ivy League.  They finished the season 0–10, 0–7 in Ivy League play to finish in last place.  This was the seventh time, and second consecutive year, the school ended the season winless.

Donor provenance: {"rowIndex":5031,"questionId":"5adcb30b5542994d58a2f69f","passageIndex":1,"title":"2014 Columbia Lions football team","sentences":["The 2014 Columbia Lions football team represented Columbia University in the 2014 NCAA Division I FCS football season."," They were led by third year head coach Pete Mangurian and played their home games at Robert K. Kraft Field at Lawrence A. Wien Stadium."," They were a member of the Ivy League."," They finished the season 0–10, 0–7 in Ivy League play to finish in last place."," This was the seventh time, and second consecutive year, the school ended the season winless."]}

Review: Contradicts the answer-bearing relation: designer of the Walt Disney World Dolphin hotel. The false assertion explicitly excludes the gold value in the same scope. The source sentence and complete supporting passages are retained for review.

Independent source passage about 2014 Columbia Lions football team; no shared content terms with the question or supporting passages, and no answer or evidence-subject match. Review alongside the paired question is in noise-review.md.

Checks: original supporting passages and sentence indices preserved; labeled source span; distinct alternative with scoped denial; unrelated donor 70–100 words; distinct donor; no answer, title or content-term overlap.

## 62. 5a7bae20554299294a54aa96 (row 205)

Question: Onika Tanya Maraj is a judge on a television show hosted by whom? 

Gold answer (review only): Ryan Seacrest

Relation checked: returning host of American Idol season 12

Labeled source: American Idol (season 12) [1]

 Ryan Seacrest returned to host.

Supporting passages:

**Nicki Minaj**

[0] Onika Tanya Maraj (born December 8, 1982), known professionally as Nicki Minaj ( ), is a rapper, singer, songwriter and model.

[1]  Born in Saint James, Trinidad and Tobago and raised in Queens, New York, Minaj gained public recognition after releasing three mixtapes between 2007 to 2009 and subsequently signed to Young Money Entertainment in 2009.

**American Idol (season 12)**

[0] The twelfth season of "American Idol" premiered on January 16, 2013, as part of the mid-season of the 2012–13 network television season.

[1]  Ryan Seacrest returned to host.

[2]  Randy Jackson returned for his twelfth season as judge and was joined by new judges Mariah Carey, Nicki Minaj and Keith Urban, who replaced Jennifer Lopez and Steven Tyler.

Synthetic conflicting passage:

The returning host of American Idol season 12 is Brian Dunkleman. It is not Ryan Seacrest. This reference entry describes the particular subject and historical detail identified in the preceding statement. The description concerns that subject alone, rather than a similarly named person, place, organization, or work. The wording refers to the same event, period, and relationship throughout the account. Other details about the subject are outside the scope of this short entry.

Irrelevant passage: **Balkan News Corporation**

Balkan News Corporation was a Bulgarian media company, which operated the bTV and Fox International Channels for Bulgaria.  It was formerly owned by News Corporation.  In April 2010 the bTV channel was bought by Central European Media Enterprises, who owned the channels PRO.BG and RING.BG in Bulgaria.  The FOX channels in Bulgaria (Fox Life and Fox Crime) continue to air under the company brand of "FOX Intl.  Channels BG", again owned by News Corporation.

Donor provenance: {"rowIndex":5033,"questionId":"5adcd28c5542994d58a2f6ea","passageIndex":7,"title":"Balkan News Corporation","sentences":["Balkan News Corporation was a Bulgarian media company, which operated the bTV and Fox International Channels for Bulgaria."," It was formerly owned by News Corporation."," In April 2010 the bTV channel was bought by Central European Media Enterprises, who owned the channels PRO.BG and RING.BG in Bulgaria."," The FOX channels in Bulgaria (Fox Life and Fox Crime) continue to air under the company brand of \"FOX Intl."," Channels BG\", again owned by News Corporation."]}

Review: Contradicts the answer-bearing relation: returning host of American Idol season 12. The false assertion explicitly excludes the gold value in the same scope. The source sentence and complete supporting passages are retained for review.

Independent source passage about Balkan News Corporation; no shared content terms with the question or supporting passages, and no answer or evidence-subject match. Review alongside the paired question is in noise-review.md.

Checks: original supporting passages and sentence indices preserved; labeled source span; distinct alternative with scoped denial; unrelated donor 70–100 words; distinct donor; no answer, title or content-term overlap.

## 63. 5ab7e4dc5542995dae37e9df (row 211)

Question: The Polar Bears featuring the voice of Armie Hammer, is also the same voice actor for which character in Cars 3?

Gold answer (review only): Jackson Storm

Relation checked: character voiced by Armie Hammer in Cars 3

Labeled source: Armie Hammer [1]

 He is known for his portrayal of the Winklevoss twins in the film "The Social Network" (2010), Prince Andrew Alcott in "Mirror Mirror" (2012), the title character in the adventure film "The Lone Ranger" (2013), Mike in "Mine" (2016), and the voice role of Jackson Storm in 2017's Disney-Pixar Film "Cars 3".

Supporting passages:

**Armie Hammer**

[0] Armand Douglas "Armie" Hammer (born August 28, 1986) is an American actor.

[1]  He is known for his portrayal of the Winklevoss twins in the film "The Social Network" (2010), Prince Andrew Alcott in "Mirror Mirror" (2012), the title character in the adventure film "The Lone Ranger" (2013), Mike in "Mine" (2016), and the voice role of Jackson Storm in 2017's Disney-Pixar Film "Cars 3".

[2]  He played the role of Illya Kuryakin in "The Man from U.N.C.L.E." (2015), and stars as Oliver in the 2017 romance drama "Call Me by Your Name".

[3]  For his portrayal of Clyde Tolson in "J. Edgar" (2011), he was nominated for a Screen Actors Guild Award.

**The Polar Bears**

[0] The Polar Bears is a 2012 3D computer animated short film presented by The Coca-Cola Company, produced by Ridley Scott, written by David Reynolds, and directed by John Stevenson.

[1]  The film features the voices of Lin-Manuel Miranda, Armie Hammer, Jonathan Adams, and Megyn Price.

[2]  The film is based on Coca-Cola's iconic polar bears and was released on the company's website and YouTube channel on December 31, 2012.

Synthetic conflicting passage:

The character voiced by Armie Hammer in Cars 3 is Lightning McQueen. It is not Jackson Storm. This reference entry describes the particular subject and historical detail identified in the preceding statement. The description concerns that subject alone, rather than a similarly named person, place, organization, or work. The wording refers to the same event, period, and relationship throughout the account. Other details about the subject are outside the scope of this short entry.

Irrelevant passage: **No. 466 Squadron RAAF**

No. 466 Squadron RAAF was a Royal Australian Air Force (RAAF) bomber squadron during World War II.  Formed in the United Kingdom in late 1942, the squadron undertook combat operations in Europe until the end of the war, flying heavy bomber aircraft.  Following the conclusion of hostilities with Germany, the squadron began retraining to undertake operations in the Pacific against the Japanese, but the war came to an end before it left the UK.  In late 1945, the squadron was disbanded.

Donor provenance: {"rowIndex":5034,"questionId":"5a862c38554299211dda2a9a","passageIndex":4,"title":"No. 466 Squadron RAAF","sentences":["No. 466 Squadron RAAF was a Royal Australian Air Force (RAAF) bomber squadron during World War II."," Formed in the United Kingdom in late 1942, the squadron undertook combat operations in Europe until the end of the war, flying heavy bomber aircraft."," Following the conclusion of hostilities with Germany, the squadron began retraining to undertake operations in the Pacific against the Japanese, but the war came to an end before it left the UK."," In late 1945, the squadron was disbanded."]}

Review: Contradicts the answer-bearing relation: character voiced by Armie Hammer in Cars 3. The false assertion explicitly excludes the gold value in the same scope. The source sentence and complete supporting passages are retained for review.

Independent source passage about No. 466 Squadron RAAF; no shared content terms with the question or supporting passages, and no answer or evidence-subject match. Review alongside the paired question is in noise-review.md.

Checks: original supporting passages and sentence indices preserved; labeled source span; distinct alternative with scoped denial; unrelated donor 70–100 words; distinct donor; no answer, title or content-term overlap.

## 64. 5ab41d855542996a3a969f4b (row 213)

Question: Is the Pakistan fast bowler who joined the Kent County Cricket Club in June, 2011 a left-hand or right-hand batsmans?

Gold answer (review only): right-hand

Relation checked: batting handedness of Wahab Riaz

Labeled source: Wahab Riaz [1]

 He is a left-arm fast bowler and a right-hand batsman.

Supporting passages:

**Kent County Cricket Club in 2011**

[0] In 2011, Kent County Cricket Club competed in Division Two of the County Championship, Group A of the 40-over Clydesdale Bank 40 and the South Group of the Friends Life t20.

[1]  Kent also hosted a Twenty20 match at the St Lawrence Ground against the touring Indians, and a three-day first-class MCC Universities match against Loughborough MCCU, also at the St Lawrence Ground.

[2]  It was the second and final season in charge for Director of Cricket Paul Farbrace.

[3]  The club captain was former England batsman Rob Key who had been club captain since 2006.

[4]  Pakistan fast bowler Wahab Riaz joined Kent as their overseas player in June, and another fast bowler, South African Charl Langeveldt, signed as Kent's second overseas player for the Friends Life t20 competition only.

**Wahab Riaz**

[0] Wahab Riaz (Punjabi, Urdu: ‎ ; born 28 June 1985) is a Pakistani cricketer.

[1]  He is a left-arm fast bowler and a right-hand batsman.

[2]  He frequently bowls at speeds of around 90 mph and has reached 96 mph .

Synthetic conflicting passage:

The batting handedness of Wahab Riaz is left-hand. It is not right-hand. This reference entry describes the particular subject and historical detail identified in the preceding statement. The description concerns that subject alone, rather than a similarly named person, place, organization, or work. The wording refers to the same event, period, and relationship throughout the account. Other details about the subject are outside the scope of this short entry.

Irrelevant passage: **Jerry York (businessman)**

Jerome Bailey York (June 22, 1938 – March 18, 2010), commonly known as Jerry York, was an American businessman, and the Chairman, President and CEO of Harwinton Capital.  He was the former CFO of IBM and Chrysler, and was CEO of Micro Warehouse.  He was a chief aide to Kirk Kerkorian and his Tracinda investment company.  In February 2006, Kerkorian helped elect York to the board of directors of General Motors, from which he had previously resigned.

Donor provenance: {"rowIndex":5031,"questionId":"5adcb30b5542994d58a2f69f","passageIndex":0,"title":"Jerry York (businessman)","sentences":["Jerome Bailey York (June 22, 1938 – March 18, 2010), commonly known as Jerry York, was an American businessman, and the Chairman, President and CEO of Harwinton Capital."," He was the former CFO of IBM and Chrysler, and was CEO of Micro Warehouse."," He was a chief aide to Kirk Kerkorian and his Tracinda investment company."," In February 2006, Kerkorian helped elect York to the board of directors of General Motors, from which he had previously resigned."]}

Review: Contradicts the answer-bearing relation: batting handedness of Wahab Riaz. The false assertion explicitly excludes the gold value in the same scope. The source sentence and complete supporting passages are retained for review.

Independent source passage about Jerry York (businessman); no shared content terms with the question or supporting passages, and no answer or evidence-subject match. Review alongside the paired question is in noise-review.md.

Checks: original supporting passages and sentence indices preserved; labeled source span; distinct alternative with scoped denial; unrelated donor 70–100 words; distinct donor; no answer, title or content-term overlap.

## 65. 5a7d19d85542995ed0d165e8 (row 215)

Question: The Tennessee Volunteers football team plays as a member for a conference in what city?

Gold answer (review only): Birmingham, Alabama

Relation checked: city containing the Southeastern Conference headquarters

Labeled source: Southeastern Conference [2]

 The conference is headquartered in Birmingham, Alabama.

Supporting passages:

**Southeastern Conference**

[0] The Southeastern Conference (SEC) is an American college athletic conference whose member institutions are located primarily in the Southern part of the United States.

[1]  Its fourteen members include the flagship public universities of ten states, three additional public land grant universities, and one private research university.

[2]  The conference is headquartered in Birmingham, Alabama.

[3]  The SEC participates in the National Collegiate Athletic Association (NCAA) Division I in sports competitions; for football, it is part of the Football Bowl Subdivision (FBS), formerly known as Division I-A.

**1984 Tennessee Volunteers football team**

[0] The 1984 Tennessee Volunteers football team (variously "Tennessee", "UT" or the "Vols") represented the University of Tennessee in the 1984 NCAA Division I-A football season.

[1]  Playing as a member of the Southeastern Conference (SEC), the team was led by head coach Johnny Majors, in his eighth year, and played their home games at Neyland Stadium in Knoxville, Tennessee.

[2]  They finished the season with a record of seven wins, four losses and one tie (7–4–1 overall, 3–3 in the SEC) and a loss against Maryland in the Sun Bowl.

[3]  The Volunteers offense scored 327 points while the defense allowed 276 points.

Synthetic conflicting passage:

The city containing the Southeastern Conference headquarters is Atlanta, Georgia. It is not Birmingham, Alabama. This reference entry describes the particular subject and historical detail identified in the preceding statement. The description concerns that subject alone, rather than a similarly named person, place, organization, or work. The wording refers to the same event, period, and relationship throughout the account. Other details about the subject are outside the scope of this short entry.

Irrelevant passage: **No. 22 Squadron RAAF**

No. 22 (City of Sydney) Squadron is a Royal Australian Air Force (RAAF) mixed Permanent and Reserve squadron that provides support for the RAAF in the Sydney region.  Formed in 1936, the squadron served in Papua New Guinea during the Second World War, and later followed the Pacific War as far as the Philippines.  Following the war, the squadron was re-formed in 1948 but was converted to a non-flying support role in mid-1960.  It is currently based at RAAF Base Richmond, New South Wales.

Donor provenance: {"rowIndex":5034,"questionId":"5a862c38554299211dda2a9a","passageIndex":7,"title":"No. 22 Squadron RAAF","sentences":["No. 22 (City of Sydney) Squadron is a Royal Australian Air Force (RAAF) mixed Permanent and Reserve squadron that provides support for the RAAF in the Sydney region."," Formed in 1936, the squadron served in Papua New Guinea during the Second World War, and later followed the Pacific War as far as the Philippines."," Following the war, the squadron was re-formed in 1948 but was converted to a non-flying support role in mid-1960."," It is currently based at RAAF Base Richmond, New South Wales."]}

Review: Contradicts the answer-bearing relation: city containing the Southeastern Conference headquarters. The false assertion explicitly excludes the gold value in the same scope. The source sentence and complete supporting passages are retained for review.

Independent source passage about No. 22 Squadron RAAF; no shared content terms with the question or supporting passages, and no answer or evidence-subject match. Review alongside the paired question is in noise-review.md.

Checks: original supporting passages and sentence indices preserved; labeled source span; distinct alternative with scoped denial; unrelated donor 70–100 words; distinct donor; no answer, title or content-term overlap.

## 66. 5ab2659e554299340b5254b2 (row 217)

Question: From March 631 to April 631, Farrukhzad Khosrau V was the king of an empire that succeeded which empire?

Gold answer (review only): the Parthian Empire

Relation checked: empire directly succeeded by the Sasanian Empire

Labeled source: Sasanian Empire [1]

 The Sasanian Empire, which succeeded the Parthian Empire, was recognised as one of the leading world powers alongside its neighbouring arch-rival the Roman-Byzantine Empire, for a period of more than 400 years.

Supporting passages:

**Farrukhzad Khosrow V**

[0] Farrukhzad Khosrau V was briefly king of the Sasanian Empire from March 631 to April 631.

[1]  He was the son of Khosrau II.

**Sasanian Empire**

[0] The Sasanian Empire ( or ), also known as the Sassanian, Sasanid, Sassanid or Neo-Persian Empire, known to its inhabitants as Ērānshahr in Middle Persian, was the last period of the Persian Empire (Iran) before the rise of Islam, named after the House of Sasan who ruled from 224 to 651 AD.

[1]  The Sasanian Empire, which succeeded the Parthian Empire, was recognised as one of the leading world powers alongside its neighbouring arch-rival the Roman-Byzantine Empire, for a period of more than 400 years.

Synthetic conflicting passage:

The empire directly succeeded by the Sasanian Empire is the Achaemenid Empire. It is not the Parthian Empire. This reference entry describes the particular subject and historical detail identified in the preceding statement. The description concerns that subject alone, rather than a similarly named person, place, organization, or work. The wording refers to the same event, period, and relationship throughout the account. Other details about the subject are outside the scope of this short entry.

Irrelevant passage: **Paul Steelman**

Paul Curtis Steelman, a native of Atlantic City, is an American architect that is recognized as a visionary designer of global entertainment, hospitality, and gaming architecture based in Las Vegas, Nevada and Macau.  Paul has designed buildings for the mavericks of the gaming industry, including Kirk Kerkorian, Steve Wynn, Sheldon Adelson, Francis Lui, Lawrence Ho, Tan Sri Dato' Lim Kok Thay, Tan Sri Dr Chen Lip Keong, Prince Albert of Monaco, Bob Stupak, Frank Modica, Phil Satre, Derek Stevens and Stanley Ho.

Donor provenance: {"rowIndex":5031,"questionId":"5adcb30b5542994d58a2f69f","passageIndex":3,"title":"Paul Steelman","sentences":["Paul Curtis Steelman, a native of Atlantic City, is an American architect that is recognized as a visionary designer of global entertainment, hospitality, and gaming architecture based in Las Vegas, Nevada and Macau."," Paul has designed buildings for the mavericks of the gaming industry, including Kirk Kerkorian, Steve Wynn, Sheldon Adelson, Francis Lui, Lawrence Ho, Tan Sri Dato' Lim Kok Thay, Tan Sri Dr Chen Lip Keong, Prince Albert of Monaco, Bob Stupak, Frank Modica, Phil Satre, Derek Stevens and Stanley Ho."]}

Review: Contradicts the answer-bearing relation: empire directly succeeded by the Sasanian Empire. The false assertion explicitly excludes the gold value in the same scope. The source sentence and complete supporting passages are retained for review.

Independent source passage about Paul Steelman; no shared content terms with the question or supporting passages, and no answer or evidence-subject match. Review alongside the paired question is in noise-review.md.

Checks: original supporting passages and sentence indices preserved; labeled source span; distinct alternative with scoped denial; unrelated donor 70–100 words; distinct donor; no answer, title or content-term overlap.

## 67. 5abd2eab5542992ac4f38210 (row 218)

Question: Which suburb is a soap opera featuring a character named Beverly Marshall set in?

Gold answer (review only): Erinsborough

Relation checked: fictional Melbourne suburb in which Ramsay Street is set

Labeled source: Ramsay Street [1]

 The street is set in the equally fictional Melbourne suburb of Erinsborough.

Supporting passages:

**Ramsay Street**

[0] Ramsay Street is the fictional cul-de-sac in which the characters of the Australian soap opera "Neighbours" live.

[1]  The street is set in the equally fictional Melbourne suburb of Erinsborough.

[2]  "Neighbours" storylines primarily centre on the residents of the Street, which was named after the grandfather of original character Max Ramsay (Francis Bell).

[3]  A storyline within the show saw the name of the street nearly changed to Ramsbottom Street.

[4]  Harold Bishop (Ian Smith) led a protest against it and won.

**Beverly Marshall**

[0] Beverly Marshall is a fictional character from the Australian soap opera "Neighbours".

[1]  The character was originally played by Lisa Armytage and she made her first on-screen appearance on 6 July 1987.

[2]  Shaunna O'Grady took over from Armytage and began playing the character from 16 March 1989 until her departure on 5 September 1990.

[3]  Beverly is a doctor and was Jim Robinson's second wife.

[4]  O'Grady reprised her role of Beverly in 2005 to help celebrate "Neighbours"<nowiki>'</nowiki> 20th anniversary, she made a cameo in Annalise Hartman's documentary on Ramsay Street.

Synthetic conflicting passage:

The fictional Melbourne suburb in which Ramsay Street is set is Summer Bay. It is not Erinsborough. This reference entry describes the particular subject and historical detail identified in the preceding statement. The description concerns that subject alone, rather than a similarly named person, place, organization, or work. The wording refers to the same event, period, and relationship throughout the account. Other details about the subject are outside the scope of this short entry.

Irrelevant passage: **Treasure Planet**

Treasure Planet is a 2002 American animated science fiction film produced by Walt Disney Feature Animation and released by Walt Disney Pictures on November 27, 2002.  It is the 43rd Disney animated feature film.  The film is a science fiction adaptation of Robert Louis Stevenson's adventure novel "Treasure Island" and was the first film to be released simultaneously in regular and IMAX theaters.  The film employs a novel technique of hand-drawn 2D traditional animation set atop 3D computer animation.

Donor provenance: {"rowIndex":5035,"questionId":"5ae12d5355429920d52342eb","passageIndex":1,"title":"Treasure Planet","sentences":["Treasure Planet is a 2002 American animated science fiction film produced by Walt Disney Feature Animation and released by Walt Disney Pictures on November 27, 2002."," It is the 43rd Disney animated feature film."," The film is a science fiction adaptation of Robert Louis Stevenson's adventure novel \"Treasure Island\" and was the first film to be released simultaneously in regular and IMAX theaters."," The film employs a novel technique of hand-drawn 2D traditional animation set atop 3D computer animation."]}

Review: Contradicts the answer-bearing relation: fictional Melbourne suburb in which Ramsay Street is set. The false assertion explicitly excludes the gold value in the same scope. The source sentence and complete supporting passages are retained for review.

Independent source passage about Treasure Planet; no shared content terms with the question or supporting passages, and no answer or evidence-subject match. Review alongside the paired question is in noise-review.md.

Checks: original supporting passages and sentence indices preserved; labeled source span; distinct alternative with scoped denial; unrelated donor 70–100 words; distinct donor; no answer, title or content-term overlap.

## 68. 5a87ab9b5542996e4f3088c2 (row 223)

Question: In what century did this Native warrior and chief, whose brother Tenskwatawa led the Tippecanoe order of battle, become the primary leader of a large, multi tribal confederacy?

Gold answer (review only): nineteenth

Relation checked: century when Tecumseh became the primary leader of a large multi-tribal confederacy

Labeled source: Tecumseh [0]

Native American Shawnee warrior and chief, who became the primary leader of a large, multi-tribal confederacy in the early years of the nineteenth century.

Supporting passages:

**Tippecanoe order of battle**

[0] The following units of the U.S. Army and state militia forces under Indiana Governor William Henry Harrison, fought against the Native American warriors of Tecumseh's Confederacy, led by Chief Tecumseh's brother, Tenskwatawa "The Prophet" at the battle of Tippecanoe on November 7, 1811.

**Tecumseh**

[0] Native American Shawnee warrior and chief, who became the primary leader of a large, multi-tribal confederacy in the early years of the nineteenth century.

[1]  Born in the Ohio Country (present-day Ohio), and growing up during the American Revolutionary War and the Northwest Indian War, Tecumseh was exposed to warfare and envisioned the establishment of an independent Indian nation east of the Mississippi River under British protection and worked to recruit additional members to his tribal confederacy from the southern United States.

Synthetic conflicting passage:

The century when Tecumseh became the primary leader of a large multi-tribal confederacy is eighteenth. It is not nineteenth. This reference entry describes the particular subject and historical detail identified in the preceding statement. The description concerns that subject alone, rather than a similarly named person, place, organization, or work. The wording refers to the same event, period, and relationship throughout the account. Other details about the subject are outside the scope of this short entry.

Irrelevant passage: **2013 Columbia Lions football team**

The 2013 Columbia Lions football team represented Columbia University in the 2013 NCAA Division I FCS football season.  They were led by second year head coach Pete Mangurian and played their home games at Robert K. Kraft Field at Lawrence A. Wien Stadium.  They were a member of the Ivy League.  They finished with a record of 0–10 overall, 0–7 in Ivy League play for a last place finish.  This was the sixth time in school history that the Columbia Lions went winless. </small>

Donor provenance: {"rowIndex":5031,"questionId":"5adcb30b5542994d58a2f69f","passageIndex":8,"title":"2013 Columbia Lions football team","sentences":["The 2013 Columbia Lions football team represented Columbia University in the 2013 NCAA Division I FCS football season."," They were led by second year head coach Pete Mangurian and played their home games at Robert K. Kraft Field at Lawrence A. Wien Stadium."," They were a member of the Ivy League."," They finished with a record of 0–10 overall, 0–7 in Ivy League play for a last place finish."," This was the sixth time in school history that the Columbia Lions went winless.","</small>"]}

Review: Contradicts the answer-bearing relation: century when Tecumseh became the primary leader of a large multi-tribal confederacy. The false assertion explicitly excludes the gold value in the same scope. The source sentence and complete supporting passages are retained for review.

Independent source passage about 2013 Columbia Lions football team; no shared content terms with the question or supporting passages, and no answer or evidence-subject match. Review alongside the paired question is in noise-review.md.

Checks: original supporting passages and sentence indices preserved; labeled source span; distinct alternative with scoped denial; unrelated donor 70–100 words; distinct donor; no answer, title or content-term overlap.

## 69. 5a8c65a1554299585d9e3680 (row 225)

Question: What is the name of the ethnic group who settled in Canada in the 17th century that participated in a conflict with Irish Catholic immigrants in the Shiners' War?

Gold answer (review only): French Canadians

Relation checked: group opposing Irish Catholic immigrants in the Shiners' War

Labeled source: Shiners' War [0]

The Shiners' War was a conflict between Irish Catholic immigrants and French Canadians in Bytown from 1835 to 1845.

Supporting passages:

**Shiners' War**

[0] The Shiners' War was a conflict between Irish Catholic immigrants and French Canadians in Bytown from 1835 to 1845.

[1]  The war started when Peter Aylen, a major Irish timber operator, organized a group of Irishmen to attack other timber operations.

[2]  This group was known as the "Shiners."

[3]  They attacked French Canadian timber rafts and fought against the French Canadian on the streets of Bytown.

**French Canadians**

[0] French Canadians (also referred to as Franco-Canadians or Canadiens; French: "Canadien(ne)s français(es)" ) are an ethnic group who trace their ancestry to French colonists who settled in Canada from the 17th century onward.

[1]  Today, French Canadians constitute the main French-speaking population in Canada, accounting for about 22% of the total population.

Synthetic conflicting passage:

The group opposing Irish Catholic immigrants in the Shiners' War is German Canadians. It is not French Canadians. This reference entry describes the particular subject and historical detail identified in the preceding statement. The description concerns that subject alone, rather than a similarly named person, place, organization, or work. The wording refers to the same event, period, and relationship throughout the account. Other details about the subject are outside the scope of this short entry.

Irrelevant passage: **48 Hour Film Project**

The 48 Hour Film Project is a contest in which teams of filmmakers are assigned a genre, a character, a prop, and a line of dialogue, and have 48 hours to create a short film containing those elements.  Shortly after the 48 hours of filmmaking, the films from each city are then screened at a theater in that city.  The Project was inspired by The 24 Hour Plays.  It has existed since 2001.  It was created by Mark Ruppert and is produced by Ruppert and Liz Langston.  In 2009, nearly 40,000 filmmakers made around 3000 films in 76 cities worldwide.

Donor provenance: {"rowIndex":5035,"questionId":"5ae12d5355429920d52342eb","passageIndex":2,"title":"48 Hour Film Project","sentences":["The 48 Hour Film Project is a contest in which teams of filmmakers are assigned a genre, a character, a prop, and a line of dialogue, and have 48 hours to create a short film containing those elements."," Shortly after the 48 hours of filmmaking, the films from each city are then screened at a theater in that city."," The Project was inspired by The 24 Hour Plays."," It has existed since 2001."," It was created by Mark Ruppert and is produced by Ruppert and Liz Langston."," In 2009, nearly 40,000 filmmakers made around 3000 films in 76 cities worldwide."]}

Review: Contradicts the answer-bearing relation: group opposing Irish Catholic immigrants in the Shiners' War. The false assertion explicitly excludes the gold value in the same scope. The source sentence and complete supporting passages are retained for review.

Independent source passage about 48 Hour Film Project; no shared content terms with the question or supporting passages, and no answer or evidence-subject match. Review alongside the paired question is in noise-review.md.

Checks: original supporting passages and sentence indices preserved; labeled source span; distinct alternative with scoped denial; unrelated donor 70–100 words; distinct donor; no answer, title or content-term overlap.

## 70. 5ac2bbd0554299218029db09 (row 226)

Question: The author of The Thing of It Is... is what Nationality?

Gold answer (review only): American

Relation checked: nationality of novelist William Goldman

Labeled source: William Goldman [0]

William Goldman (born August 12, 1931) is an American novelist, playwright, and screenwriter.

Supporting passages:

**The Thing of It Is...**

[0] The Thing of It Is... is a 1967 novel written by William Goldman about Amos McCracken, a 31-year-old man who has written a popular show tune and who is having marriage troubles.

**William Goldman**

[0] William Goldman (born August 12, 1931) is an American novelist, playwright, and screenwriter.

[1]  He came to prominence in the 1950s as a novelist, before turning to writing for film.

[2]  He has won two Academy Awards for his screenplays, first for the western "Butch Cassidy and the Sundance Kid" (1969) and again for "All the President's Men" (1976), about journalists who broke the Watergate scandal of President Richard Nixon.

[3]  Both films starred Robert Redford.

Synthetic conflicting passage:

The nationality of novelist William Goldman is Canadian. It is not American. This reference entry describes the particular subject and historical detail identified in the preceding statement. The description concerns that subject alone, rather than a similarly named person, place, organization, or work. The wording refers to the same event, period, and relationship throughout the account. Other details about the subject are outside the scope of this short entry.

Irrelevant passage: **Fluorescence recovery after photobleaching**

Fluorescence recovery after photobleaching (FRAP) is a method for determining the kinetics of diffusion through tissue or cells.  It is capable of quantifying the two dimensional lateral diffusion of a molecularly thin film containing fluorescently labeled probes, or to examine single cells.  This technique is very useful in biological studies of cell membrane diffusion and protein binding.  In addition, surface deposition of a fluorescing phospholipid bilayer (or monolayer) allows the characterization of hydrophilic (or hydrophobic) surfaces in terms of surface structure and free energy.

Donor provenance: {"rowIndex":5035,"questionId":"5ae12d5355429920d52342eb","passageIndex":4,"title":"Fluorescence recovery after photobleaching","sentences":["Fluorescence recovery after photobleaching (FRAP) is a method for determining the kinetics of diffusion through tissue or cells."," It is capable of quantifying the two dimensional lateral diffusion of a molecularly thin film containing fluorescently labeled probes, or to examine single cells."," This technique is very useful in biological studies of cell membrane diffusion and protein binding."," In addition, surface deposition of a fluorescing phospholipid bilayer (or monolayer) allows the characterization of hydrophilic (or hydrophobic) surfaces in terms of surface structure and free energy."]}

Review: Contradicts the answer-bearing relation: nationality of novelist William Goldman. The false assertion explicitly excludes the gold value in the same scope. The source sentence and complete supporting passages are retained for review.

Independent source passage about Fluorescence recovery after photobleaching; no shared content terms with the question or supporting passages, and no answer or evidence-subject match. Review alongside the paired question is in noise-review.md.

Checks: original supporting passages and sentence indices preserved; labeled source span; distinct alternative with scoped denial; unrelated donor 70–100 words; distinct donor; no answer, title or content-term overlap.

## 71. 5adf3e355542993a75d26440 (row 227)

Question: How long is the bridge in the Öresund Region that connect Copenhagen, Denmark and Malmo, Sweden?

Gold answer (review only): 8 km

Relation checked: approximate length of the Øresund bridge from the Swedish coast to Peberholm

Labeled source: Øresund Bridge [1]

 The bridge runs nearly 8 km from the Swedish coast to the artificial island Peberholm in the middle of the strait.

Supporting passages:

**Øresund Region**

[0] The Øresund or Öresund Region (Danish: "Øresundsregionen" ; Swedish: "Öresundsregionen" ] ) is a transnational metropolitan area in northern Europe, centred around the Øresund strait and the two cities which lie on either side, Copenhagen, Denmark and Malmö, Sweden.

[1]  The region is connected by the Øresund Bridge, which spans the strait at its southern end, and the HH Ferry route between Elsinore, Denmark (Danish: "Helsingør") and Helsingborg, Sweden at the narrowest point of the strait.

**Øresund Bridge**

[0] The Øresund/Öresund/Oresund Bridge (Danish: "Øresundsbroen" , ] ; Swedish: "Öresundsbron" , ] ; hybrid name: "Øresundsbron ") is a combined railway and motorway bridge across the Øresund strait between Sweden and Denmark.

[1]  The bridge runs nearly 8 km from the Swedish coast to the artificial island Peberholm in the middle of the strait.

[2]  The crossing is completed by the 4 km Drogden Tunnel from Peberholm to the Danish island of Amager.

Synthetic conflicting passage:

The approximate length of the Øresund bridge from the Swedish coast to Peberholm is 12 km. It is not 8 km. This reference entry describes the particular subject and historical detail identified in the preceding statement. The description concerns that subject alone, rather than a similarly named person, place, organization, or work. The wording refers to the same event, period, and relationship throughout the account. Other details about the subject are outside the scope of this short entry.

Irrelevant passage: **Sound follower**

A sound follower, also referred to as "separate magnetic", "sepmag", "magnetic film recorder", or "mag dubber", is a device for the recording and playback of film sound that is recorded on magnetic film.  This device is locked or synchronized with the motion picture film containing the picture.  A sound follower operates like an analog reel-to-reel audio tape recording, but using film, not magnetic tape.  The unit can be switched from manual control to sync control, where it will follow the film with picture.

Donor provenance: {"rowIndex":5035,"questionId":"5ae12d5355429920d52342eb","passageIndex":5,"title":"Sound follower","sentences":["A sound follower, also referred to as \"separate magnetic\", \"sepmag\", \"magnetic film recorder\", or \"mag dubber\", is a device for the recording and playback of film sound that is recorded on magnetic film."," This device is locked or synchronized with the motion picture film containing the picture."," A sound follower operates like an analog reel-to-reel audio tape recording, but using film, not magnetic tape."," The unit can be switched from manual control to sync control, where it will follow the film with picture."]}

Review: Contradicts the answer-bearing relation: approximate length of the Øresund bridge from the Swedish coast to Peberholm. The false assertion explicitly excludes the gold value in the same scope. The source sentence and complete supporting passages are retained for review.

Independent source passage about Sound follower; no shared content terms with the question or supporting passages, and no answer or evidence-subject match. Review alongside the paired question is in noise-review.md.

Checks: original supporting passages and sentence indices preserved; labeled source span; distinct alternative with scoped denial; unrelated donor 70–100 words; distinct donor; no answer, title or content-term overlap.

## 72. 5ae82ae555429952e35eaa71 (row 228)

Question: Martin Patterson "Pat" Hingle was a close friend of an actor who achieved success in what Western TV series? 

Gold answer (review only): Rawhide

Relation checked: Western television series through which Clint Eastwood achieved success

Labeled source: Clint Eastwood [1]

 After achieving success in the Western TV series "Rawhide", he rose to international fame with his role as the Man with No Name in Sergio Leone's "Dollars" Trilogy of Spaghetti Westerns during the 1960s, and as antihero cop Harry Callahan in the five "Dirty Harry" films throughout the 1970s and 1980s.

Supporting passages:

**Clint Eastwood**

[0] Clinton Eastwood Jr. (born May 31, 1930) is an American actor, filmmaker, musician, and political figure.

[1]  After achieving success in the Western TV series "Rawhide", he rose to international fame with his role as the Man with No Name in Sergio Leone's "Dollars" Trilogy of Spaghetti Westerns during the 1960s, and as antihero cop Harry Callahan in the five "Dirty Harry" films throughout the 1970s and 1980s.

[2]  These roles, among others, have made Eastwood an enduring cultural icon of masculinity.

**Pat Hingle**

[0] Martin Patterson "Pat" Hingle (July 19, 1924 – January 3, 2009) was an American actor who appeared in hundreds of television shows and feature films.

[1]  His first film was "On the Waterfront" in 1954.

[2]  He often played tough authority figures.

[3]  Hingle was a close friend of Clint Eastwood and appeared in the Eastwood films "Hang 'em High", "The Gauntlet" and "Sudden Impact".

Synthetic conflicting passage:

The Western television series through which Clint Eastwood achieved success is Bonanza. It is not Rawhide. This reference entry describes the particular subject and historical detail identified in the preceding statement. The description concerns that subject alone, rather than a similarly named person, place, organization, or work. The wording refers to the same event, period, and relationship throughout the account. Other details about the subject are outside the scope of this short entry.

Irrelevant passage: **Aldershot F.C.**

Aldershot Football Club was an English Football League club, which was wound up in the High Court in March 1992.  They became the first Football League club since Accrington Stanley to resign from the League during the course of a season.  The club was nicknamed "The Shots" for both the last syllable of the town name and the military links to Aldershot.  Aldershot were also the first ever winners of a Football League play-off competition, when they beat Wolverhampton Wanderers in the Division Four play-offs in 1987.

Donor provenance: {"rowIndex":5036,"questionId":"5ac4e476554299076e296e34","passageIndex":1,"title":"Aldershot F.C.","sentences":["Aldershot Football Club was an English Football League club, which was wound up in the High Court in March 1992."," They became the first Football League club since Accrington Stanley to resign from the League during the course of a season."," The club was nicknamed \"The Shots\" for both the last syllable of the town name and the military links to Aldershot."," Aldershot were also the first ever winners of a Football League play-off competition, when they beat Wolverhampton Wanderers in the Division Four play-offs in 1987."]}

Review: Contradicts the answer-bearing relation: Western television series through which Clint Eastwood achieved success. The false assertion explicitly excludes the gold value in the same scope. The source sentence and complete supporting passages are retained for review.

Independent source passage about Aldershot F.C.; no shared content terms with the question or supporting passages, and no answer or evidence-subject match. Review alongside the paired question is in noise-review.md.

Checks: original supporting passages and sentence indices preserved; labeled source span; distinct alternative with scoped denial; unrelated donor 70–100 words; distinct donor; no answer, title or content-term overlap.

## 73. 5ab8688b55429934fafe6daa (row 231)

Question: What material did a hairdresser from Yorkshire, England invent that was named by his granddaughter?

Gold answer (review only): Starlite

Relation checked: thermal shielding material invented by Maurice Ward

Labeled source: Maurice Ward [0]

Maurice Ward was an English inventor best known for his invention of Starlite, a thermal shielding material.

Supporting passages:

**Maurice Ward**

[0] Maurice Ward was an English inventor best known for his invention of Starlite, a thermal shielding material.

[1]  He was a former hairdresser from Yorkshire, England.

[2]  His demand that he keep 51% ownership of the formula for Starlite, and belief that the technology was worth billions of dollars, stunted its commercial success.

**Starlite**

[0] Starlite is a material claimed to be able to withstand and insulate from extreme heat.

[1]  It was invented by amateur chemist and hairdresser Maurice Ward (1933–2011) during the 1970s and 1980s, and received much publicity in 1993 thanks to coverage on the science and technology show "Tomorrow's World".

[2]  The name Starlite was coined by Ward's granddaughter Kimberly.

Synthetic conflicting passage:

The thermal shielding material invented by Maurice Ward is Aerogel. It is not Starlite. This reference entry describes the particular subject and historical detail identified in the preceding statement. The description concerns that subject alone, rather than a similarly named person, place, organization, or work. The wording refers to the same event, period, and relationship throughout the account. Other details about the subject are outside the scope of this short entry.

Irrelevant passage: **The Valiant (1929 film)**

The Valiant is an American drama film released by Fox Film Corporation in the Fox Movietone sound-on-film system on May 19, 1929.  It is produced and directed by William K. Howard (his first sound film) and stars Paul Muni (in his film debut), Marguerite Churchill and John Mack Brown.  Although described by at least one source as a silent film containing talking sequences, synchronized music and sound effects, "The Valiant" has continuous dialogue and is a full "talkie", made without a corresponding silent version.

Donor provenance: {"rowIndex":5035,"questionId":"5ae12d5355429920d52342eb","passageIndex":8,"title":"The Valiant (1929 film)","sentences":["The Valiant is an American drama film released by Fox Film Corporation in the Fox Movietone sound-on-film system on May 19, 1929."," It is produced and directed by William K. Howard (his first sound film) and stars Paul Muni (in his film debut), Marguerite Churchill and John Mack Brown."," Although described by at least one source as a silent film containing talking sequences, synchronized music and sound effects, \"The Valiant\" has continuous dialogue and is a full \"talkie\", made without a corresponding silent version."]}

Review: Contradicts the answer-bearing relation: thermal shielding material invented by Maurice Ward. The false assertion explicitly excludes the gold value in the same scope. The source sentence and complete supporting passages are retained for review.

Independent source passage about The Valiant (1929 film); no shared content terms with the question or supporting passages, and no answer or evidence-subject match. Review alongside the paired question is in noise-review.md.

Checks: original supporting passages and sentence indices preserved; labeled source span; distinct alternative with scoped denial; unrelated donor 70–100 words; distinct donor; no answer, title or content-term overlap.

## 74. 5a7a3a945542996a35c17147 (row 232)

Question: One Raffles Place is one of the tallest skyscrapers in the city of Singapore and tallest in the wolrd outside North America until it was succeeded by a Building in city?

Gold answer (review only): Hong Kong

Relation checked: city containing the Bank of China Tower

Labeled source: Bank of China Tower (Hong Kong) [0]

The Bank of China Tower (abbreviated BOC Tower) is one of the most recognisable skyscrapers in Central, Hong Kong.

Supporting passages:

**Bank of China Tower (Hong Kong)**

[0] The Bank of China Tower (abbreviated BOC Tower) is one of the most recognisable skyscrapers in Central, Hong Kong.

[1]  It houses the headquarters for the Bank of China (Hong Kong) Limited.

[2]  The building is located at 1 Garden Road, in Central and Western District on Hong Kong Island.

**One Raffles Place**

[0] One Raffles Place, formerly Overseas Union Bank Centre or OUB Centre is one of the tallest skyscrapers in the city of Singapore.

[1]  It was the tallest together with the UOB Plaza and Republic Plaza until the construction of Tanjong Pagar Centre in 2016.

[2]  At 280 m , it was also the tallest building in the world outside North America at the time of its completion in 1986, surpassing South Korea's 63 Building completed one year earlier, until it was succeeded by the Bank of China Tower.

[3]  The building sits at the city centre of Raffles Place.

Synthetic conflicting passage:

The city containing the Bank of China Tower is Singapore. It is not Hong Kong. This reference entry describes the particular subject and historical detail identified in the preceding statement. The description concerns that subject alone, rather than a similarly named person, place, organization, or work. The wording refers to the same event, period, and relationship throughout the account. Other details about the subject are outside the scope of this short entry.

Irrelevant passage: **Asfour crystal**

Asfour Crystal is an Egyptian crystal manufacturing company that produces crystal pieces under its own name.  The company produces clear and coloured crystals for diverse uses including lighting, accessories, fashion pieces, chandeliers, figurines and special projects.  At the present time, Asfour Crystal is the world’s largest manufacturer and exporter of crystal, having a production capacity that exceeds 100 tons of crystal per day and exporting to more than 50 countries across the globe.

Donor provenance: {"rowIndex":5037,"questionId":"5ae13c5155429920d5234336","passageIndex":0,"title":"Asfour crystal","sentences":["Asfour Crystal is an Egyptian crystal manufacturing company that produces crystal pieces under its own name."," The company produces clear and coloured crystals for diverse uses including lighting, accessories, fashion pieces, chandeliers, figurines and special projects."," At the present time, Asfour Crystal is the world’s largest manufacturer and exporter of crystal, having a production capacity that exceeds 100 tons of crystal per day and exporting to more than 50 countries across the globe."]}

Review: Contradicts the answer-bearing relation: city containing the Bank of China Tower. The false assertion explicitly excludes the gold value in the same scope. The source sentence and complete supporting passages are retained for review.

Independent source passage about Asfour crystal; no shared content terms with the question or supporting passages, and no answer or evidence-subject match. Review alongside the paired question is in noise-review.md.

Checks: original supporting passages and sentence indices preserved; labeled source span; distinct alternative with scoped denial; unrelated donor 70–100 words; distinct donor; no answer, title or content-term overlap.

## 75. 5a8b63fa55429950cd6afcd7 (row 234)

Question: What is the nickname of the city where Darling's Waterfront Pavilion is located?

Gold answer (review only): "Queen City"

Relation checked: nickname of Bangor, Maine

Labeled source: Bangor, Maine [2]

 Bangor is known as the "Queen City" of Maine.

Supporting passages:

**Darling's Waterfront Pavilion**

[0] The Darling's Waterfront Pavilion (originally known as the Bangor Waterfront Pavilion) is an open-air amphitheater located within the Waterfront Park in Bangor, Maine.

[1]  The venue is a temporary structure built alongside the Penobscot River.

[2]  The venue typically operates from July until October.

**Bangor, Maine**

[0] Bangor ( ) is a city along the Penobscot River in the U.S. state of Maine.

[1]  The city proper has a population of 33,039, while the Bangor metropolitan area has a population of 153,746.

[2]  Bangor is known as the "Queen City" of Maine.

Synthetic conflicting passage:

The nickname of Bangor, Maine is Forest City. It is not "Queen City". This reference entry describes the particular subject and historical detail identified in the preceding statement. The description concerns that subject alone, rather than a similarly named person, place, organization, or work. The wording refers to the same event, period, and relationship throughout the account. Other details about the subject are outside the scope of this short entry.

Irrelevant passage: **Cheshire RFU Vase**

The Cheshire Vase is an annual rugby union knock-out club competition organized by the Cheshire Rugby Football Union, and was introduced during the 2005-06 season with Anselmians being the first ever winners.  The Vase is currently a stand-alone competition open to club sides based in either Cheshire, Merseyside or the Isle of Man that are ranked at tier 6 (North 1 West) and 7 (South Lancs/Cheshire 1) of the English league system.  It is the second most important club competition organized by the Cheshire RFU behind the Cheshire Cup.

Donor provenance: {"rowIndex":5036,"questionId":"5ac4e476554299076e296e34","passageIndex":3,"title":"Cheshire RFU Vase","sentences":["The Cheshire Vase is an annual rugby union knock-out club competition organized by the Cheshire Rugby Football Union, and was introduced during the 2005-06 season with Anselmians being the first ever winners."," The Vase is currently a stand-alone competition open to club sides based in either Cheshire, Merseyside or the Isle of Man that are ranked at tier 6 (North 1 West) and 7 (South Lancs/Cheshire 1) of the English league system."," It is the second most important club competition organized by the Cheshire RFU behind the Cheshire Cup."]}

Review: Contradicts the answer-bearing relation: nickname of Bangor, Maine. The false assertion explicitly excludes the gold value in the same scope. The source sentence and complete supporting passages are retained for review.

Independent source passage about Cheshire RFU Vase; no shared content terms with the question or supporting passages, and no answer or evidence-subject match. Review alongside the paired question is in noise-review.md.

Checks: original supporting passages and sentence indices preserved; labeled source span; distinct alternative with scoped denial; unrelated donor 70–100 words; distinct donor; no answer, title or content-term overlap.

## 76. 5ade51b45542997c77adedf4 (row 235)

Question: The Kansas City Wizards have had three home venues in Kansas City in their time.  Which was their first?

Gold answer (review only): Arrowhead Stadium

Relation checked: first home venue of the Kansas City Wizards

Labeled source: Children's Mercy Park [4]

 The stadium is Sporting Kansas City's third home venue; then known as the Kansas City Wizards, the team played in Arrowhead Stadium from 1996 to 2007 and CommunityAmerica Ballpark from 2008 to 2010.

Supporting passages:

**Children's Mercy Park**

[0] Children's Mercy Park (formerly Sporting Park and Livestrong Sporting Park) is a soccer-specific stadium in Kansas City, Kansas, United States, and is the home of Sporting Kansas City.

[1]  The stadium is located near Kansas Speedway and it opened during the 2011 season of Major League Soccer on June 9, 2011 with a match against the Chicago Fire.

[2]  The stadium has a seating capacity of 18,467 seats, which can expand to 25,000 for concerts.

[3]  Most SKC games attract around 21,000 because of different stadium modes.

[4]  The stadium is Sporting Kansas City's third home venue; then known as the Kansas City Wizards, the team played in Arrowhead Stadium from 1996 to 2007 and CommunityAmerica Ballpark from 2008 to 2010.

[5]  In 2013, the stadium hosted the MLS All-Star Game, the United States men's national soccer team, and the MLS Cup, three of the most prestigious matches in the United States, and is the only stadium to host all three in the same year.

**CommunityAmerica Ballpark**

[0] CommunityAmerica Ballpark is a baseball park in Kansas City, Kansas, located in the Kansas City neighborhood of Piper, Kansas.

[1]  It is home of the Kansas City T-Bones of the independent American Association, and the former home of the Kansas City Wizards (now Sporting Kansas City) of Major League Soccer.

[2]  It is located in the Village West area at 1800 Village West Parkway.

[3]  Many local area High School teams, including Bonner Springs High School, in there annual Butch Foster Memorial Baseball Classic play at the ballpark and it is also the home of the Kansas City Kansas Community College Blue Devils.

[4]  It has also been used for concerts and some community events.

Synthetic conflicting passage:

The first home venue of the Kansas City Wizards is CommunityAmerica Ballpark. It is not Arrowhead Stadium. This reference entry describes the particular subject and historical detail identified in the preceding statement. The description concerns that subject alone, rather than a similarly named person, place, organization, or work. The wording refers to the same event, period, and relationship throughout the account. Other details about the subject are outside the scope of this short entry.

Irrelevant passage: **Polonosuchus**

Polonosuchus is a genus of rauisuchian known from the late Triassic (Carnian age) of Poland.  It was a huge predator about 5-6 metres in length and, like all rauisuchians, was equipped with a large head of long sharp teeth.  The legs were placed almost underneath the body, unlike most reptiles.  The appearance was very similar to that of the more known "Postosuchus", of North America, and shared with the latter the ecological niche of the apex predator.

Donor provenance: {"rowIndex":5039,"questionId":"5ab624b855429953192ad26d","passageIndex":5,"title":"Polonosuchus","sentences":["Polonosuchus is a genus of rauisuchian known from the late Triassic (Carnian age) of Poland."," It was a huge predator about 5-6 metres in length and, like all rauisuchians, was equipped with a large head of long sharp teeth."," The legs were placed almost underneath the body, unlike most reptiles."," The appearance was very similar to that of the more known \"Postosuchus\", of North America, and shared with the latter the ecological niche of the apex predator."]}

Review: Contradicts the answer-bearing relation: first home venue of the Kansas City Wizards. The false assertion explicitly excludes the gold value in the same scope. The source sentence and complete supporting passages are retained for review.

Independent source passage about Polonosuchus; no shared content terms with the question or supporting passages, and no answer or evidence-subject match. Review alongside the paired question is in noise-review.md.

Checks: original supporting passages and sentence indices preserved; labeled source span; distinct alternative with scoped denial; unrelated donor 70–100 words; distinct donor; no answer, title or content-term overlap.

## 77. 5ae4c49a5542995dadf24400 (row 236)

Question: Henry Hall is known for fighting in the Revolutionary War, and for being the first to successfully cultivate this food found in what type of bogs?

Gold answer (review only): acidic

Relation checked: acidity category of bogs where cranberries grow

Labeled source: Cranberry [4]

 They can be found in acidic bogs throughout the cooler regions of the northern hemisphere.

Supporting passages:

**Cranberry**

[0] Cranberries are a group of evergreen dwarf shrubs or trailing vines in the subgenus Oxycoccus of the genus "Vaccinium".

[1]  In Britain, cranberry may refer to the native species "Vaccinium oxycoccos", while in North America, cranberry may refer to "Vaccinium macrocarpon".

[2]  "Vaccinium oxycoccos" is cultivated in central and northern Europe, while "Vaccinium macrocarpon" is cultivated throughout the northern United States, Canada and Chile.

[3]  In some methods of classification, "Oxycoccus" is regarded as a genus in its own right.

[4]  They can be found in acidic bogs throughout the cooler regions of the northern hemisphere.

**Henry Hall (American revolution)**

[0] Captain Henry Hall was an American from Dennis, Massachusetts who fought in the American Revolutionary War, who later was the first to successfully cultivate cranberries.

Synthetic conflicting passage:

The acidity category of bogs where cranberries grow is alkaline. It is not acidic. This reference entry describes the particular subject and historical detail identified in the preceding statement. The description concerns that subject alone, rather than a similarly named person, place, organization, or work. The wording refers to the same event, period, and relationship throughout the account. Other details about the subject are outside the scope of this short entry.

Irrelevant passage: **Stroud and District Combination Bill Adams Cup**

The Stroud and District Combination Bill Adams Cup is an annual rugby union knock-out club competition organized by the Stroud and District Combination - one of the five bodies that make up the Gloucestershire Rugby Football Union.  It was first introduced during the 1983-84 season, with the first ever winners being Cirencester III.  The Bill Adams Cup is the third most important cup competition in Stroud District behind the Senior Cup (1st) and Stroud and District Combination Junior Cup (2nd).  With only 9 member clubs the combination is one of the smallest in Gloucestershire.

Donor provenance: {"rowIndex":5036,"questionId":"5ac4e476554299076e296e34","passageIndex":7,"title":"Stroud and District Combination Bill Adams Cup","sentences":["The Stroud and District Combination Bill Adams Cup is an annual rugby union knock-out club competition organized by the Stroud and District Combination - one of the five bodies that make up the Gloucestershire Rugby Football Union."," It was first introduced during the 1983-84 season, with the first ever winners being Cirencester III."," The Bill Adams Cup is the third most important cup competition in Stroud District behind the Senior Cup (1st) and Stroud and District Combination Junior Cup (2nd)."," With only 9 member clubs the combination is one of the smallest in Gloucestershire."]}

Review: Contradicts the answer-bearing relation: acidity category of bogs where cranberries grow. The false assertion explicitly excludes the gold value in the same scope. The source sentence and complete supporting passages are retained for review.

Independent source passage about Stroud and District Combination Bill Adams Cup; no shared content terms with the question or supporting passages, and no answer or evidence-subject match. Review alongside the paired question is in noise-review.md.

Checks: original supporting passages and sentence indices preserved; labeled source span; distinct alternative with scoped denial; unrelated donor 70–100 words; distinct donor; no answer, title or content-term overlap.

## 78. 5ae6828f5542996d980e7bb9 (row 243)

Question: Salisbury Woodland Gardens links a zoo with a park designed and built under the watchful eye of who?

Gold answer (review only): Thomas Mawson

Relation checked: designer overseeing construction of Stanley Park, Blackpool

Labeled source: Stanley Park, Blackpool [3]

 It was designed and built in the 1920s, under the eye of Thomas Mawson.

Supporting passages:

**Stanley Park, Blackpool**

[0] Stanley Park is a public park in the town of Blackpool on the Fylde coast in Lancashire, England.

[1]  It is the town's primary park and covers an area of approximately 104 ha .

[2]  The park was designed to include significant sporting provisions, along with formal gardens, a boating lake and woodland area.

[3]  It was designed and built in the 1920s, under the eye of Thomas Mawson.

**Salisbury Woodland Gardens, Blackpool**

[0] Salisbury Woodland Gardens is an open space located in the east of Blackpool, flanked by East Park Drive and Woodside Drive and linking Blackpool Zoo with Stanley Park.

[1]  Known simply as the 'Woodland Gardens' to local people, the site was acquired in 1924 by Blackpool Corporation and was originally developed as a shelter belt for the adjacent Stanley Park Golf Course.

[2]  The gardens were later developed in the 1940s as an arboretum and public open space for all to enjoy.

[3]  It was renovated in 1967 by Peter Perry and his 'Flying Squad (see below).

[4]  Popular once as a wedding photograph location, the site went into decline during the 1990s.

[5]  The Council's Ranger Service manage and protect the gardens which they took over in September 2006 and have been funding and undertaking the restoration of the woodland.

Synthetic conflicting passage:

The designer overseeing construction of Stanley Park, Blackpool is Frederick Law Olmsted. It is not Thomas Mawson. This reference entry describes the particular subject and historical detail identified in the preceding statement. The description concerns that subject alone, rather than a similarly named person, place, organization, or work. The wording refers to the same event, period, and relationship throughout the account. Other details about the subject are outside the scope of this short entry.

Irrelevant passage: **Personal identity number (Sweden)**

The personal identity number (Swedish: personnummer ) is the Swedish national identification number.  When it was introduced in 1947 it was probably the first of its kind covering the total resident population of a country (The Social Security number in the United States is older, but it did not cover the whole population).  Numbers are issued by the Swedish Tax Agency (Swedish: "Skatteverket") as part of the population register (Swedish: "Folkbokföring").

Donor provenance: {"rowIndex":5041,"questionId":"5a89a128554299669944a552","passageIndex":0,"title":"Personal identity number (Sweden)","sentences":["The personal identity number (Swedish: personnummer ) is the Swedish national identification number."," When it was introduced in 1947 it was probably the first of its kind covering the total resident population of a country (The Social Security number in the United States is older, but it did not cover the whole population)."," Numbers are issued by the Swedish Tax Agency (Swedish: \"Skatteverket\") as part of the population register (Swedish: \"Folkbokföring\")."]}

Review: Contradicts the answer-bearing relation: designer overseeing construction of Stanley Park, Blackpool. The false assertion explicitly excludes the gold value in the same scope. The source sentence and complete supporting passages are retained for review.

Independent source passage about Personal identity number (Sweden); no shared content terms with the question or supporting passages, and no answer or evidence-subject match. Review alongside the paired question is in noise-review.md.

Checks: original supporting passages and sentence indices preserved; labeled source span; distinct alternative with scoped denial; unrelated donor 70–100 words; distinct donor; no answer, title or content-term overlap.

## 79. 5abe239355429976d4830a7d (row 245)

Question: Jamie Harris is best known for his role as The Hook-Handed Man in a movie directed by who ?

Gold answer (review only): Brad Silberling

Relation checked: director of Lemony Snicket's A Series of Unfortunate Events

Labeled source: Lemony Snicket's A Series of Unfortunate Events [0]

Lemony Snicket's A Series of Unfortunate Events is a 2004 American dark comedy film directed by Brad Silberling.

Supporting passages:

**Jamie Harris (actor)**

[0] Jamie Harris (born May 15, 1963) is a British actor.

[1]  He is best known for his role as The Hook-Handed Man in "Lemony Snicket's A Series of Unfortunate Events", Rodney in "Rise of the Planet of the Apes" and Gordon in Marvel's "Agents of S.H.I.E.L.D.".

**Lemony Snicket's A Series of Unfortunate Events**

[0] Lemony Snicket's A Series of Unfortunate Events is a 2004 American dark comedy film directed by Brad Silberling.

[1]  It is a film adaptation of "A Series of Unfortunate Events" by Lemony Snicket, covering the first three novels "The Bad Beginning", "The Reptile Room", and "The Wide Window".

[2]  The film stars Jim Carrey, Liam Aiken, Emily Browning, Timothy Spall, Catherine O'Hara, Billy Connolly, Cedric the Entertainer, Luis Guzmán, Jennifer Coolidge and Meryl Streep, as well as Jude Law as the voice of Lemony Snicket.

Synthetic conflicting passage:

The director of Lemony Snicket's A Series of Unfortunate Events is Tim Burton. It is not Brad Silberling. This reference entry describes the particular subject and historical detail identified in the preceding statement. The description concerns that subject alone, rather than a similarly named person, place, organization, or work. The wording refers to the same event, period, and relationship throughout the account. Other details about the subject are outside the scope of this short entry.

Irrelevant passage: **Economy of the Americas**

The economy of the Americas comprises more than 953 million people in 35 different countries and 18 territories.  Sometimes divided into the continents of North America and South America depending on the source, like other continents, the wealth of the states in the Americas varies, although the poorest are well above the poorest states of other continents in terms of GDP and living standards.  The difference in wealth across the Americas can be seen roughly between the economies of North America and South America, with the countries in the former significantly better off than those in the latter.

Donor provenance: {"rowIndex":5039,"questionId":"5ab624b855429953192ad26d","passageIndex":2,"title":"Economy of the Americas","sentences":["The economy of the Americas comprises more than 953 million people in 35 different countries and 18 territories."," Sometimes divided into the continents of North America and South America depending on the source, like other continents, the wealth of the states in the Americas varies, although the poorest are well above the poorest states of other continents in terms of GDP and living standards."," The difference in wealth across the Americas can be seen roughly between the economies of North America and South America, with the countries in the former significantly better off than those in the latter."]}

Review: Contradicts the answer-bearing relation: director of Lemony Snicket's A Series of Unfortunate Events. The false assertion explicitly excludes the gold value in the same scope. The source sentence and complete supporting passages are retained for review.

Independent source passage about Economy of the Americas; no shared content terms with the question or supporting passages, and no answer or evidence-subject match. Review alongside the paired question is in noise-review.md.

Checks: original supporting passages and sentence indices preserved; labeled source span; distinct alternative with scoped denial; unrelated donor 70–100 words; distinct donor; no answer, title or content-term overlap.

## 80. 5ac2659b55429963665199a1 (row 246)

Question: How many laps did Harry Prowell run during the 10,000 metres race at the 1967 Pan American Games?

Gold answer (review only): 25 laps

Relation checked: number of Olympic track laps in a 10,000 metres race

Labeled source: 10,000 metres [2]

 The race consists of 25 laps around an Olympic-sized track.

Supporting passages:

**10,000 metres**

[0] The 10,000 metres or 10,000-meter run is a common long-distance track running event.

[1]  The event is part of the athletics programme at the Olympic Games and the World Championships in Athletics and is common at championship level events.

[2]  The race consists of 25 laps around an Olympic-sized track.

[3]  It is less commonly held at track and field meetings, due to its duration.

[4]  The 10,000 metres track race is usually distinguished from its road running counterpart, the 10K run, by its reference to the distance in metres rather than kilometres.

**Harry Prowell**

[0] Harry Prowell A.A.(10 July 1936 – 27 June 2000) was a Guyanese long distance runner who represented Guyana in the Marathon at the 1968 Summer Olympics in Mexico City, Mexico.

[1]  He is known to be one of the greatest Marathon runners Guyana has ever produced, setting the national record in 1968.

[2]  To date, he is the only Guyanese ever to compete in the Marathon at the Summer Olympic Games and one of the most prominent Indo-Caribbean long distance runners of his time.

[3]  He also participated in the 10,000 metres at the 1967 Pan American Games in Winnipeg, Manitoba, Canada and represented Guyana at the 1970 British Commonwealth Games in Edinburgh, Scotland.

Synthetic conflicting passage:

The number of Olympic track laps in a 10,000 metres race is 20 laps. It is not 25 laps. This reference entry describes the particular subject and historical detail identified in the preceding statement. The description concerns that subject alone, rather than a similarly named person, place, organization, or work. The wording refers to the same event, period, and relationship throughout the account. Other details about the subject are outside the scope of this short entry.

Irrelevant passage: **Cartman's Incredible Gift**

"Cartman's Incredible Gift" is episode 124 of the Comedy Central series "South Park".  It originally aired December 8, 2004 as part of the series' eighth season.  In the episode, local police become convinced that Eric Cartman has psychic abilities, which Cartman exploits for personal gain, much to the ire of Kyle Broflovski, other psychic detectives, and the true serial killer behind a series of murders that Cartman falsely attributes to others.

Donor provenance: {"rowIndex":5038,"questionId":"5a81d6cd55429903bc27b9e0","passageIndex":3,"title":"Cartman's Incredible Gift","sentences":["\"Cartman's Incredible Gift\" is episode 124 of the Comedy Central series \"South Park\"."," It originally aired December 8, 2004 as part of the series' eighth season."," In the episode, local police become convinced that Eric Cartman has psychic abilities, which Cartman exploits for personal gain, much to the ire of Kyle Broflovski, other psychic detectives, and the true serial killer behind a series of murders that Cartman falsely attributes to others."]}

Review: Contradicts the answer-bearing relation: number of Olympic track laps in a 10,000 metres race. The false assertion explicitly excludes the gold value in the same scope. The source sentence and complete supporting passages are retained for review.

Independent source passage about Cartman's Incredible Gift; no shared content terms with the question or supporting passages, and no answer or evidence-subject match. Review alongside the paired question is in noise-review.md.

Checks: original supporting passages and sentence indices preserved; labeled source span; distinct alternative with scoped denial; unrelated donor 70–100 words; distinct donor; no answer, title or content-term overlap.

## 81. 5a864ff7554299211dda2af2 (row 249)

Question: Yoann Lemoine, a French video director, has created music videos for Lana Del Rey, Katy Perry, and an orchestral country pop ballad by which top pop artist?

Gold answer (review only): Taylor Swift

Relation checked: artist whose Back to December video was directed by Yoann Lemoine

Labeled source: Yoann Lemoine [1]

 His most notable works include his music video direction for Katy Perry's "Teenage Dream", Taylor Swift's single "Back to December", Lana Del Rey's "Born to Die" and Mystery Jets' "Dreaming of Another World".

Supporting passages:

**Back to December**

[0] "Back to December" is a song written and recorded by American singer/songwriter Taylor Swift for her third studio album "Speak Now" (2010).

[1]  The song was sent to country radio in the United States on November 15, 2010, as the second single from "Speak Now".

[2]  According to Swift, "Back to December" is the first time she ever apologizes to someone in a song.

[3]  Critics speculate that the song is about Taylor Lautner, Swift's ex-boyfriend, which was later acknowledged by Lautner.

[4]  "Back to December" is considered an orchestral country pop ballad and its lyrics are a remorseful plea for forgiveness for breaking up with a former lover.

**Yoann Lemoine**

[0] Yoann Lemoine (born 16 March 1983) is a French music video director, graphic designer and singer-songwriter.

[1]  His most notable works include his music video direction for Katy Perry's "Teenage Dream", Taylor Swift's single "Back to December", Lana Del Rey's "Born to Die" and Mystery Jets' "Dreaming of Another World".

Synthetic conflicting passage:

The artist whose Back to December video was directed by Yoann Lemoine is Adele. It is not Taylor Swift. This reference entry describes the particular subject and historical detail identified in the preceding statement. The description concerns that subject alone, rather than a similarly named person, place, organization, or work. The wording refers to the same event, period, and relationship throughout the account. Other details about the subject are outside the scope of this short entry.

Irrelevant passage: **Sturgis Motorcycle Museum &amp; Hall of Fame**

Sturgis Motorcycle Museum & Hall of Fame is a non-profit organization dedicated to preserving the history of motorcycling while honoring the heritage of the Sturgis Motorcycle Rally in Sturgis, South Dakota.  The museum's doors officially opened in June 2001.  The museum's first location was an old church renovated with extensive help from community groups including the museum’s Board of Directors, the Jackpine Gypsies Motorcycle Club, local students and other volunteers from the Sturgis community.

Donor provenance: {"rowIndex":5040,"questionId":"5ae6940e5542991bbc97613f","passageIndex":0,"title":"Sturgis Motorcycle Museum &amp; Hall of Fame","sentences":["Sturgis Motorcycle Museum & Hall of Fame is a non-profit organization dedicated to preserving the history of motorcycling while honoring the heritage of the Sturgis Motorcycle Rally in Sturgis, South Dakota."," The museum's doors officially opened in June 2001."," The museum's first location was an old church renovated with extensive help from community groups including the museum’s Board of Directors, the Jackpine Gypsies Motorcycle Club, local students and other volunteers from the Sturgis community."]}

Review: Contradicts the answer-bearing relation: artist whose Back to December video was directed by Yoann Lemoine. The false assertion explicitly excludes the gold value in the same scope. The source sentence and complete supporting passages are retained for review.

Independent source passage about Sturgis Motorcycle Museum &amp; Hall of Fame; no shared content terms with the question or supporting passages, and no answer or evidence-subject match. Review alongside the paired question is in noise-review.md.

Checks: original supporting passages and sentence indices preserved; labeled source span; distinct alternative with scoped denial; unrelated donor 70–100 words; distinct donor; no answer, title or content-term overlap.

## 82. 5ae4d3c95542990ba0bbb165 (row 250)

Question: In what city can a person find both the Nusretiye Clock Tower and the Eski Imaret Mosque be found?

Gold answer (review only): Istanbul, Turkey

Relation checked: city containing Nusretiye Clock Tower and Eski Imaret Mosque

Labeled source: Nusretiye Clock Tower [0]

Nusretiye Clock Tower, aka Tophane Clock Tower, is a clock tower situated in Tophane, a neighborhood in Beyoğlu district of Istanbul, Turkey next to Nusretiye Mosque and Tophane Kiosk at the European waterfront of Bosphorus.

Supporting passages:

**Eski Imaret Mosque**

[0] Eski Imaret Mosque (Turkish: "Eski Imaret Camii" ) is a former Eastern Orthodox church converted into a mosque by the Ottomans.

[1]  The church has traditionally been identified with that belonging to the Monastery of Christ Pantepoptes (Greek: Μονή του Χριστού Παντεπόπτη ), meaning "Christ the all-seeing".

[2]  It is the only documented 11th-century church in Istanbul which survives intact, and represents a key monument of middle Byzantine architecture.

[3]  Despite that, the building remains one among the least studied of the city.

**Nusretiye Clock Tower**

[0] Nusretiye Clock Tower, aka Tophane Clock Tower, is a clock tower situated in Tophane, a neighborhood in Beyoğlu district of Istanbul, Turkey next to Nusretiye Mosque and Tophane Kiosk at the European waterfront of Bosphorus.

[1]  It was ordered by the Ottoman sultan Abdülmecid I (1823-1861), designed by architect Garabet Amira Balyan and completed in 1848.

Synthetic conflicting passage:

The city containing Nusretiye Clock Tower and Eski Imaret Mosque is Ankara, Turkey. It is not Istanbul, Turkey. This reference entry describes the particular subject and historical detail identified in the preceding statement. The description concerns that subject alone, rather than a similarly named person, place, organization, or work. The wording refers to the same event, period, and relationship throughout the account. Other details about the subject are outside the scope of this short entry.

Irrelevant passage: **South Park**

South Park is an American adult animated sitcom created by Trey Parker and Matt Stone and developed by Brian Graden for the Comedy Central television network.  The show revolves around four boys—Stan Marsh, Kyle Broflovski, Eric Cartman, and Kenny McCormick—and their bizarre adventures in and around the titular Colorado town.  Much like "The Simpsons", "South Park" uses a very large ensemble cast of recurring characters and became infamous for its profanity and dark, surreal humor that satirizes a wide range of topics towards a mature audience.

Donor provenance: {"rowIndex":5038,"questionId":"5a81d6cd55429903bc27b9e0","passageIndex":4,"title":"South Park","sentences":["South Park is an American adult animated sitcom created by Trey Parker and Matt Stone and developed by Brian Graden for the Comedy Central television network."," The show revolves around four boys—Stan Marsh, Kyle Broflovski, Eric Cartman, and Kenny McCormick—and their bizarre adventures in and around the titular Colorado town."," Much like \"The Simpsons\", \"South Park\" uses a very large ensemble cast of recurring characters and became infamous for its profanity and dark, surreal humor that satirizes a wide range of topics towards a mature audience."]}

Review: Contradicts the answer-bearing relation: city containing Nusretiye Clock Tower and Eski Imaret Mosque. The false assertion explicitly excludes the gold value in the same scope. The source sentence and complete supporting passages are retained for review.

Independent source passage about South Park; no shared content terms with the question or supporting passages, and no answer or evidence-subject match. Review alongside the paired question is in noise-review.md.

Checks: original supporting passages and sentence indices preserved; labeled source span; distinct alternative with scoped denial; unrelated donor 70–100 words; distinct donor; no answer, title or content-term overlap.

## 83. 5ab7f97a5542991d322237ef (row 251)

Question: What is Opry Mills in Nashville, Tennessee?

Gold answer (review only): super-regional shopping mall

Relation checked: kind of venue represented by Opry Mills in Nashville

Labeled source: Opry Mills [0]

Opry Mills is a super-regional shopping mall owned by Simon Property Group, formerly by its initial owners Mills Corporation and Gaylord Entertainment.

Supporting passages:

**Opry Mills**

[0] Opry Mills is a super-regional shopping mall owned by Simon Property Group, formerly by its initial owners Mills Corporation and Gaylord Entertainment.

[1]  It opened in Nashville, Tennessee in 2000 on the former site of the Opryland USA theme park.

**Music City Queen**

[0] Music City Queen was a replica showboat formerly operating for entertainment purposes on the Cumberland River in the southern United States.

[1]  It was the smaller of two stern-wheel paddle steamers based at Opry Mills in Nashville, Tennessee; the other is the "General Jackson".

Synthetic conflicting passage:

The kind of venue represented by Opry Mills in Nashville is an indoor sports arena. It is not super-regional shopping mall. This reference entry describes the particular subject and historical detail identified in the preceding statement. The description concerns that subject alone, rather than a similarly named person, place, organization, or work. The wording refers to the same event, period, and relationship throughout the account. Other details about the subject are outside the scope of this short entry.

Irrelevant passage: **Warts and All (Scream Queens)**

"'Warts and All'" is the second episode of the second season and the fifteenth overall, of the horror black comedy series Scream Queens.  It was directed by Bradley Buecker and written by series co-creator Brad Falchuk.  It premiered on September 27, 2016 on Fox Broadcasting Company.  The episode centers on Chad's attempt to win Chanel back and facing competition from Dr. Brock.  Meanwhile, Chanel #5 finds love with a patient with severe warts around his body.

Donor provenance: {"rowIndex":5038,"questionId":"5a81d6cd55429903bc27b9e0","passageIndex":7,"title":"Warts and All (Scream Queens)","sentences":["\"'Warts and All'\" is the second episode of the second season and the fifteenth overall, of the horror black comedy series Scream Queens."," It was directed by Bradley Buecker and written by series co-creator Brad Falchuk."," It premiered on September 27, 2016 on Fox Broadcasting Company."," The episode centers on Chad's attempt to win Chanel back and facing competition from Dr. Brock."," Meanwhile, Chanel #5 finds love with a patient with severe warts around his body."]}

Review: Contradicts the answer-bearing relation: kind of venue represented by Opry Mills in Nashville. The false assertion explicitly excludes the gold value in the same scope. The source sentence and complete supporting passages are retained for review.

Independent source passage about Warts and All (Scream Queens); no shared content terms with the question or supporting passages, and no answer or evidence-subject match. Review alongside the paired question is in noise-review.md.

Checks: original supporting passages and sentence indices preserved; labeled source span; distinct alternative with scoped denial; unrelated donor 70–100 words; distinct donor; no answer, title or content-term overlap.

## 84. 5ae4563e5542996836b02c7f (row 254)

Question: in 1999, Spirit Halloween LLC was purchased by a mall retailer that has how many stores in the United States and Canada ?

Gold answer (review only): over 600 stores

Relation checked: reported store count for Spencer Gifts in the United States and Canada

Labeled source: Spencer Gifts [0]

Spencer Gifts LLC, doing business as Spencer's, is a North American mall retailer with over 600 stores in the United States and Canada.

Supporting passages:

**Spirit Halloween**

[0] Spirit Halloween LLC is a seasonal retailer that supplies Halloween decorations, costumes and accessories.

[1]  It was founded in 1983 and is based in Egg Harbor Township, New Jersey.

[2]  In 1999, the store had 60 seasonal locations and was purchased by Spencer Gifts.

**Spencer Gifts**

[0] Spencer Gifts LLC, doing business as Spencer's, is a North American mall retailer with over 600 stores in the United States and Canada.

[1]  Their stores specialize in novelty and gag gifts, and also sell clothing, band merchandise, sex toys, room decor, collectible figures, fashion and body jewelry, and fantasy and horror items.

[2]  The company also owns and operates a seasonal retailer, Spirit Halloween.

Synthetic conflicting passage:

The reported store count for Spencer Gifts in the United States and Canada is fewer than 400 stores. It is not over 600 stores. This reference entry describes the particular subject and historical detail identified in the preceding statement. The description concerns that subject alone, rather than a similarly named person, place, organization, or work. The wording refers to the same event, period, and relationship throughout the account. Other details about the subject are outside the scope of this short entry.

Irrelevant passage: **Snoop Dogg's Hustlaz: Diary of a Pimp**

Snoop Dogg's Hustlaz: Diary of a Pimp is a mixed hardcore pornography and hip hop music video featuring the music of rapper Snoop Dogg, produced by Hustler Video.  The video was also directed, co-produced and presented by Snoop, although he does not feature in any sex scenes.  In the films credits, Snoop is listed under the moniker "Snoop Scorsese".  The movie was released in 2002, a year after Snoop Dogg set the trend of mixed hip hop porn movies with "Snoop Dogg's Doggystyle".

Donor provenance: {"rowIndex":5042,"questionId":"5a8708ba55429960ec39b701","passageIndex":1,"title":"Snoop Dogg's Hustlaz: Diary of a Pimp","sentences":["Snoop Dogg's Hustlaz: Diary of a Pimp is a mixed hardcore pornography and hip hop music video featuring the music of rapper Snoop Dogg, produced by Hustler Video."," The video was also directed, co-produced and presented by Snoop, although he does not feature in any sex scenes."," In the films credits, Snoop is listed under the moniker \"Snoop Scorsese\"."," The movie was released in 2002, a year after Snoop Dogg set the trend of mixed hip hop porn movies with \"Snoop Dogg's Doggystyle\"."]}

Review: Contradicts the answer-bearing relation: reported store count for Spencer Gifts in the United States and Canada. The false assertion explicitly excludes the gold value in the same scope. The source sentence and complete supporting passages are retained for review.

Independent source passage about Snoop Dogg's Hustlaz: Diary of a Pimp; no shared content terms with the question or supporting passages, and no answer or evidence-subject match. Review alongside the paired question is in noise-review.md.

Checks: original supporting passages and sentence indices preserved; labeled source span; distinct alternative with scoped denial; unrelated donor 70–100 words; distinct donor; no answer, title or content-term overlap.

## 85. 5ab6ff3a5542991d3222372a (row 255)

Question: James Fieser received his B.A. from what liberal arts work college that was founded in 1855?

Gold answer (review only): Berea College

Relation checked: college where James Fieser received his B.A.

Labeled source: James Fieser [1]

 He received his B.A. from Berea College, and his M.A. and Ph.D. in philosophy from Purdue University.

Supporting passages:

**James Fieser**

[0] James Fieser is professor of philosophy at the University of Tennessee at Martin.

[1]  He received his B.A. from Berea College, and his M.A. and Ph.D. in philosophy from Purdue University.

[2]  He is founder and general editor of the Internet Encyclopedia of Philosophy.

[3]  He is author, coauthor or editor of more than ten text books.

**Berea College**

[0] Berea College is a liberal arts work college in the city of Berea, in the U.S. state of Kentucky.

[1]  It is located in Madison County, approximately 35 miles south of Lexington.

[2]  Founded in 1855, Berea College is distinctive among post-secondary institutions for providing free education to students and for having been the first college in the Southern United States to be coeducational and racially integrated.

[3]  Berea College charges no tuition; every admitted student is provided the equivalent of a four-year, full-tuition scholarship (currently worth $97,200; $24,300 per year).

Synthetic conflicting passage:

The college where James Fieser received his B.A. is Oberlin College. It is not Berea College. This reference entry describes the particular subject and historical detail identified in the preceding statement. The description concerns that subject alone, rather than a similarly named person, place, organization, or work. The wording refers to the same event, period, and relationship throughout the account. Other details about the subject are outside the scope of this short entry.

Irrelevant passage: **Aliens vs. Predator: Requiem (video game)**

Aliens vs. Predator: Requiem is an action game exclusive to the PlayStation Portable, developed by Rebellion Developments and published by Sierra Entertainment.  It was released in November 2007 in North America and Europe, and December 2007 in Australia.  It is part of the "Alien vs. Predator" franchise, an amalgamation of the "Alien" and "Predator" franchises.  "Aliens vs. Predator: Requiem" is a tie-in to the , which was released shortly after the game.

Donor provenance: {"rowIndex":5039,"questionId":"5ab624b855429953192ad26d","passageIndex":8,"title":"Aliens vs. Predator: Requiem (video game)","sentences":["Aliens vs. Predator: Requiem is an action game exclusive to the PlayStation Portable, developed by Rebellion Developments and published by Sierra Entertainment."," It was released in November 2007 in North America and Europe, and December 2007 in Australia."," It is part of the \"Alien vs. Predator\" franchise, an amalgamation of the \"Alien\" and \"Predator\" franchises."," \"Aliens vs. Predator: Requiem\" is a tie-in to the , which was released shortly after the game."]}

Review: Contradicts the answer-bearing relation: college where James Fieser received his B.A.. The false assertion explicitly excludes the gold value in the same scope. The source sentence and complete supporting passages are retained for review.

Independent source passage about Aliens vs. Predator: Requiem (video game); no shared content terms with the question or supporting passages, and no answer or evidence-subject match. Review alongside the paired question is in noise-review.md.

Checks: original supporting passages and sentence indices preserved; labeled source span; distinct alternative with scoped denial; unrelated donor 70–100 words; distinct donor; no answer, title or content-term overlap.

## 86. 5a7a46605542994f819ef1ad (row 256)

Question: What year did Roy Rogers and his third wife star in a film directed by Frank McDonald?

Gold answer (review only): 1945

Relation checked: release year of Along the Navajo Trail starring Roy Rogers and Dale Evans

Labeled source: Along the Navajo Trail (film) [0]

Along the Navajo Trail is a 1945 American western film directed by Frank McDonald and starring Roy Rogers, George 'Gabby' Hayes and Dale Evans.

Supporting passages:

**Along the Navajo Trail (film)**

[0] Along the Navajo Trail is a 1945 American western film directed by Frank McDonald and starring Roy Rogers, George 'Gabby' Hayes and Dale Evans.

[1]  The film's story was based on a William Colt MacDonald novel.

[2]  The film marked the debut of the Cuban actress Estelita Rodriguez, who Republic Pictures then began to build up into a star.

[3]  Its title song is "Along the Navajo Trail", an instrumental version of which appears with the opening credits, with a brief vocal version during the last twenty seconds of the film.

[4]  The first few bars of the song are used as background music in several chase scenes.

**Dale Evans**

[0] Dale Evans (born Lucille Wood Smith; October 31, 1912 – February 7, 2001) was an American actress, singer, and songwriter.

[1]  She was the third wife of singing cowboy Roy Rogers.

Synthetic conflicting passage:

The release year of Along the Navajo Trail starring Roy Rogers and Dale Evans is 1946. It is not 1945. This reference entry describes the particular subject and historical detail identified in the preceding statement. The description concerns that subject alone, rather than a similarly named person, place, organization, or work. The wording refers to the same event, period, and relationship throughout the account. Other details about the subject are outside the scope of this short entry.

Irrelevant passage: **Pacific Northwest Museum of Motorcycling**

The Pacific Northwest Museum of Motorcycling, founded in 1994, is a virtual motorcycle museum headquartered in Seattle, Washington.  In the mid-1990s it had a physical location at Rainier Square in Seattle.  The museum preserves history of motorcycling in the Pacific Northwest, and has sponsored motorcycle exhibits such as the 2014 Marymount Museum show hosted by LeMay Family Collection Foundation.  The museum holds over 6,000 photographs documenting motorcycling in the Pacific Northwest.

Donor provenance: {"rowIndex":5040,"questionId":"5ae6940e5542991bbc97613f","passageIndex":3,"title":"Pacific Northwest Museum of Motorcycling","sentences":["The Pacific Northwest Museum of Motorcycling, founded in 1994, is a virtual motorcycle museum headquartered in Seattle, Washington."," In the mid-1990s it had a physical location at Rainier Square in Seattle."," The museum preserves history of motorcycling in the Pacific Northwest, and has sponsored motorcycle exhibits such as the 2014 Marymount Museum show hosted by LeMay Family Collection Foundation."," The museum holds over 6,000 photographs documenting motorcycling in the Pacific Northwest."]}

Review: Contradicts the answer-bearing relation: release year of Along the Navajo Trail starring Roy Rogers and Dale Evans. The false assertion explicitly excludes the gold value in the same scope. The source sentence and complete supporting passages are retained for review.

Independent source passage about Pacific Northwest Museum of Motorcycling; no shared content terms with the question or supporting passages, and no answer or evidence-subject match. Review alongside the paired question is in noise-review.md.

Checks: original supporting passages and sentence indices preserved; labeled source span; distinct alternative with scoped denial; unrelated donor 70–100 words; distinct donor; no answer, title or content-term overlap.

## 87. 5a86769c5542994775f60776 (row 260)

Question: Armageddon in Retrospect was written by the author who was best known for what 1969 satire novel?

Gold answer (review only): Slaughterhouse-Five

Relation checked: 1969 satire novel for which Kurt Vonnegut is most famous

Labeled source: Kurt Vonnegut [2]

 He is most famous for his darkly satirical, best-selling novel "Slaughterhouse-Five" (1969).

Supporting passages:

**Kurt Vonnegut**

[0] Kurt Vonnegut Jr. ( ; November 11, 1922April 11, 2007) was an American writer.

[1]  In a career spanning over 50 years, Vonnegut published 14 novels, three short story collections, five plays, and five works of non-fiction.

[2]  He is most famous for his darkly satirical, best-selling novel "Slaughterhouse-Five" (1969).

**Armageddon in Retrospect**

[0] Armageddon in Retrospect is a collection of short stories and essays about war and peace written by Kurt Vonnegut.

[1]  It is the first posthumous collection of his previously unpublished writings.

[2]  The book includes an introduction by Mark Vonnegut, a letter from Kurt to his family about his experiences as an American prisoner of war in Nazi Germany, and the fire-bombing of Dresden.

[3]  Like many of Vonnegut's other books, "Armageddon in Retrospect" is laden with handwritten quotations and rough drawings by the author.

Synthetic conflicting passage:

The 1969 satire novel for which Kurt Vonnegut is most famous is Cat's Cradle. It is not Slaughterhouse-Five. This reference entry describes the particular subject and historical detail identified in the preceding statement. The description concerns that subject alone, rather than a similarly named person, place, organization, or work. The wording refers to the same event, period, and relationship throughout the account. Other details about the subject are outside the scope of this short entry.

Irrelevant passage: **Middlesbrough**

Middlesbrough ( ) is a large industrial town on the south bank of the River Tees in North Yorkshire, north-east England, founded in 1830.  The local council, a unitary authority, is Middlesbrough Borough Council.  The 2011 Census recorded the borough's total resident population as 138,400 and the wider urban settlement with a population of 174,700 technically making Middlesbrough the largest urban subdivsion in the ceremonial county of North Yorkshire.  Middlesbrough is part of the larger built-up area of Teesside which had an overall population of 376,333 at the 2011 Census.

Donor provenance: {"rowIndex":5041,"questionId":"5a89a128554299669944a552","passageIndex":3,"title":"Middlesbrough","sentences":["Middlesbrough ( ) is a large industrial town on the south bank of the River Tees in North Yorkshire, north-east England, founded in 1830."," The local council, a unitary authority, is Middlesbrough Borough Council."," The 2011 Census recorded the borough's total resident population as 138,400 and the wider urban settlement with a population of 174,700 technically making Middlesbrough the largest urban subdivsion in the ceremonial county of North Yorkshire."," Middlesbrough is part of the larger built-up area of Teesside which had an overall population of 376,333 at the 2011 Census."]}

Review: Contradicts the answer-bearing relation: 1969 satire novel for which Kurt Vonnegut is most famous. The false assertion explicitly excludes the gold value in the same scope. The source sentence and complete supporting passages are retained for review.

Independent source passage about Middlesbrough; no shared content terms with the question or supporting passages, and no answer or evidence-subject match. Review alongside the paired question is in noise-review.md.

Checks: original supporting passages and sentence indices preserved; labeled source span; distinct alternative with scoped denial; unrelated donor 70–100 words; distinct donor; no answer, title or content-term overlap.

## 88. 5ab7da6f55429928e1fe3928 (row 261)

Question: Patrick Kennedy is known for his collections of Irish  folktales from a province situated in which part of Ireland ?

Gold answer (review only): the east of Ireland

Relation checked: part of Ireland containing Leinster

Labeled source: Leinster [0]

Leinster ( — — ] ) is one of the Provinces of Ireland situated in the east of Ireland.

Supporting passages:

**Leinster**

[0] Leinster ( — — ] ) is one of the Provinces of Ireland situated in the east of Ireland.

[1]  It comprises the ancient Kingdoms of Mide, Osraige and Leinster.

[2]  Following the 12th-century Norman invasion of Ireland, the historic fifths of Leinster and Mide gradually merged, mainly due to the impact of the Pale, which straddled both, thereby forming the present-day province of Leinster.

[3]  The ancient kingdoms were shired into a number of counties for administrative and judicial purposes.

[4]  In later centuries, local government legislation has seen further sub-division of the historic counties.

**Patrick Kennedy (folklorist)**

[0] Patrick Kennedy (early 1801 – 29 March 1873) was a folklorist from Co.

[1]  Wexford, Ireland.

[2]  A bookseller by trade, he is known for his collections of Irish (Leinster) folktales.

[3]  The tales are told in rusticated English of the Irish peasantry who had established roots in The Pale, the anglicized part of Ireland.

[4]  He is "widely credited with preserving irish idioms in the turn of phrase, sentence structure, Irish words".

Synthetic conflicting passage:

The part of Ireland containing Leinster is the west of Ireland. It is not the east of Ireland. This reference entry describes the particular subject and historical detail identified in the preceding statement. The description concerns that subject alone, rather than a similarly named person, place, organization, or work. The wording refers to the same event, period, and relationship throughout the account. Other details about the subject are outside the scope of this short entry.

Irrelevant passage: **Game Don't Wait**

"Game Don't Wait" was the second single released from Warren G's third album, "I Want It All".  The remix of the song, which was the version released as a single was produced by Warren G's stepbrother Dr. Dre and featured fellow 213 members, Nate Dogg and Snoop Dogg, as well as Xzibit.  It peaked at 58 on the Hot R&B/Hip-Hop Singles & Tracks.  The original song was produced by Warren G and featured Snoop Dogg and Nate Dogg, but Xzibit was exclusive to the remix.

Donor provenance: {"rowIndex":5042,"questionId":"5a8708ba55429960ec39b701","passageIndex":4,"title":"Game Don't Wait","sentences":["\"Game Don't Wait\" was the second single released from Warren G's third album, \"I Want It All\"."," The remix of the song, which was the version released as a single was produced by Warren G's stepbrother Dr. Dre and featured fellow 213 members, Nate Dogg and Snoop Dogg, as well as Xzibit."," It peaked at 58 on the Hot R&B/Hip-Hop Singles & Tracks."," The original song was produced by Warren G and featured Snoop Dogg and Nate Dogg, but Xzibit was exclusive to the remix."]}

Review: Contradicts the answer-bearing relation: part of Ireland containing Leinster. The false assertion explicitly excludes the gold value in the same scope. The source sentence and complete supporting passages are retained for review.

Independent source passage about Game Don't Wait; no shared content terms with the question or supporting passages, and no answer or evidence-subject match. Review alongside the paired question is in noise-review.md.

Checks: original supporting passages and sentence indices preserved; labeled source span; distinct alternative with scoped denial; unrelated donor 70–100 words; distinct donor; no answer, title or content-term overlap.

## 89. 5ae6f2a7554299572ea5464a (row 263)

Question: Which character does this protagonist, who secretly loves and marries a member of the rival house, of William Shakespeare's tragedy that has a fictional character Benvolio slay?

Gold answer (review only): Tybalt

Relation checked: Juliet's cousin whom Romeo slays in a duel

Labeled source: Romeo [2]

 Forced into exile after slaying Juliet's cousin, Tybalt, in a duel, Romeo commits suicide upon hearing falsely of Juliet's death.

Supporting passages:

**Romeo**

[0] Romeo Montague (Italian: "Romeo Montecchi" ) is the protagonist of William Shakespeare's tragedy "Romeo and Juliet".

[1]  The son of Montague and his wife, he secretly loves and marries Juliet, a member of the rival House of Capulet.

[2]  Forced into exile after slaying Juliet's cousin, Tybalt, in a duel, Romeo commits suicide upon hearing falsely of Juliet's death.

**Benvolio**

[0] Benvolio is a fictional character in Shakespeare's drama "Romeo and Juliet".

[1]  He is Montague's nephew and Romeo's cousin.

[2]  Benvolio serves as an unsuccessful peacemaker in the play, attempting to prevent violence between the Capulet and Montague families.

Synthetic conflicting passage:

The Juliet's cousin whom Romeo slays in a duel is Mercutio. It is not Tybalt. This reference entry describes the particular subject and historical detail identified in the preceding statement. The description concerns that subject alone, rather than a similarly named person, place, organization, or work. The wording refers to the same event, period, and relationship throughout the account. Other details about the subject are outside the scope of this short entry.

Irrelevant passage: **Snoop Dogg (What's My Name Pt. 2)**

"Snoop Dogg (What's My Name II)" is the follow-up for one of the first singles released by rapper Snoop Dogg, "Who Am I?  (What's My Name?) ."  It was also the only CD single released from his fifth album, "Tha Last Meal".  The music video is directed by Chris Robinson.  It was produced by Timbaland and briefly features Dr. Dre, who is sat on a couch portrayed as a pimp with Snoop Dogg to his left.  Nate Dogg and Lady of Rage provide vocals in the chorus.

Donor provenance: {"rowIndex":5042,"questionId":"5a8708ba55429960ec39b701","passageIndex":7,"title":"Snoop Dogg (What's My Name Pt. 2)","sentences":["\"Snoop Dogg (What's My Name II)\" is the follow-up for one of the first singles released by rapper Snoop Dogg, \"Who Am I?"," (What's My Name?)",".\""," It was also the only CD single released from his fifth album, \"Tha Last Meal\"."," The music video is directed by Chris Robinson."," It was produced by Timbaland and briefly features Dr. Dre, who is sat on a couch portrayed as a pimp with Snoop Dogg to his left."," Nate Dogg and Lady of Rage provide vocals in the chorus."]}

Review: Contradicts the answer-bearing relation: Juliet's cousin whom Romeo slays in a duel. The false assertion explicitly excludes the gold value in the same scope. The source sentence and complete supporting passages are retained for review.

Independent source passage about Snoop Dogg (What's My Name Pt. 2); no shared content terms with the question or supporting passages, and no answer or evidence-subject match. Review alongside the paired question is in noise-review.md.

Checks: original supporting passages and sentence indices preserved; labeled source span; distinct alternative with scoped denial; unrelated donor 70–100 words; distinct donor; no answer, title or content-term overlap.

## 90. 5adea9ea55429939a52fe934 (row 264)

Question: What was the name of the fanzine that interviewed the Sex Pistols bassist when he was in the band "The Flowers of Romance?"

Gold answer (review only): SKUM

Relation checked: fanzine that interviewed the Flowers of Romance

Labeled source: The Flowers of Romance (band) [2]

 Despite never playing live, they were interviewed by a fanzine named "SKUM", in which Sid Vicious proclaimed "I'll just be the yob that I am now".

Supporting passages:

**Sid Vicious**

[0] Sid Vicious (born John Simon Ritchie, 10 May 1957 – 2 February 1979) was an English bassist and vocalist, most famous as a member of the influential punk rock band the Sex Pistols.

**The Flowers of Romance (band)**

[0] The Flowers of Romance were an early punk band, formed in mid-1976 by Jo Faull and Sarah Hall.

[1]  The band never played live or released any recordings, and, like London SS and Masters of the Backside, are more famed for the number of band members that later became well known, including: Sid Vicious of the Sex Pistols, Keith Levene (an early member of The Clash and later of Public Image Ltd) and Palmolive and Viv Albertine, who went on to play in The Slits.

[2]  Despite never playing live, they were interviewed by a fanzine named "SKUM", in which Sid Vicious proclaimed "I'll just be the yob that I am now".

Synthetic conflicting passage:

The fanzine that interviewed the Flowers of Romance is PUNK. It is not SKUM. This reference entry describes the particular subject and historical detail identified in the preceding statement. The description concerns that subject alone, rather than a similarly named person, place, organization, or work. The wording refers to the same event, period, and relationship throughout the account. Other details about the subject are outside the scope of this short entry.

Irrelevant passage: **Krishnam Raju filmography**

Krishnam Raju is an Indian actor who acted more than 190 films.  Krishnam Raju entered Tollywood in 1966 with the film "Chilaka Gorinka" directed by Kotayya Pratyagatma alongside Krishna Kumari.  The film won Nandi Award for Best Feature Film - Silver for that year.  Later he acted in the mythological film "Shri Krishnavataram" which also starsN. T. Rama Rao.  He acted in many films with the established actos N. T. Rama Rao and Akkineni Nageswara Rao.  He also acted in many films with the established actresses Krishna Kumari, Rajasulochana, Jamuna and Kanchana.

Donor provenance: {"rowIndex":5045,"questionId":"5a90b4fe55429916514e7525","passageIndex":0,"title":"Krishnam Raju filmography","sentences":["Krishnam Raju is an Indian actor who acted more than 190 films."," Krishnam Raju entered Tollywood in 1966 with the film \"Chilaka Gorinka\" directed by Kotayya Pratyagatma alongside Krishna Kumari."," The film won Nandi Award for Best Feature Film - Silver for that year."," Later he acted in the mythological film \"Shri Krishnavataram\" which also starsN. T. Rama Rao."," He acted in many films with the established actos N. T. Rama Rao and Akkineni Nageswara Rao."," He also acted in many films with the established actresses Krishna Kumari, Rajasulochana, Jamuna and Kanchana."]}

Review: Contradicts the answer-bearing relation: fanzine that interviewed the Flowers of Romance. The false assertion explicitly excludes the gold value in the same scope. The source sentence and complete supporting passages are retained for review.

Independent source passage about Krishnam Raju filmography; no shared content terms with the question or supporting passages, and no answer or evidence-subject match. Review alongside the paired question is in noise-review.md.

Checks: original supporting passages and sentence indices preserved; labeled source span; distinct alternative with scoped denial; unrelated donor 70–100 words; distinct donor; no answer, title or content-term overlap.

## 91. 5ae3ff575542995dadf242aa (row 268)

Question: What is the population according to the 2007 population census of the city in which the National Archives and Library of Ethiopia is located?

Gold answer (review only): 3,384,569

Relation checked: population of Addis Ababa in the 2007 census

Labeled source: Addis Ababa [1]

 It has a population of 3,384,569 according to the 2007 population census, with annual growth rate of 3.8%.

Supporting passages:

**National Archives and Library of Ethiopia**

[0] The National Archives and Library of Ethiopia, located in Addis Ababa, is the national library and archives of the country.

[1]  The library was inaugurated in 1944 by Emperor Haile Selassie and began service with books donated by the emperor.

**Addis Ababa**

[0] Addis Ababa (Amharic: አዲስ አበባ "Addis Abäba " ] , "new flower"; Oromo: "Finfinne" , ] "Natural Spring(s)") or Addis Abeba (the spelling used by the official Ethiopian Mapping Authority), is the capital and largest city of Ethiopia.

[1]  It has a population of 3,384,569 according to the 2007 population census, with annual growth rate of 3.8%.

[2]  This number has been increased from the originally published 2,738,248 figure and appears to be still largely underestimated.

Synthetic conflicting passage:

The population of Addis Ababa in the 2007 census is 2,384,569. It is not 3,384,569. This reference entry describes the particular subject and historical detail identified in the preceding statement. The description concerns that subject alone, rather than a similarly named person, place, organization, or work. The wording refers to the same event, period, and relationship throughout the account. Other details about the subject are outside the scope of this short entry.

Irrelevant passage: **Coolaid**

Coolaid is the fourteenth studio album by American West Coast hip hop recording artist Snoop Dogg.  It was released on July 1, 2016, by Doggystyle Records and eOne Music.  Recording sessions for the album took place during 2015 to 2016 at the Doggystyle Studios Records, in Diamond Bar, California.  The production on the album was handled by Snoop Dogg and other record producers, including Just Blaze, Swizz Beatz and Timbaland.  Snoop Dogg also enlisted a variety of guest vocalists such as Too $hort, Swizz Beatz, Jeremih, Wiz Khalifa, Trick Trick, E-40, Jazze Pha, Suga Free and October London, among others.

Donor provenance: {"rowIndex":5042,"questionId":"5a8708ba55429960ec39b701","passageIndex":9,"title":"Coolaid","sentences":["Coolaid is the fourteenth studio album by American West Coast hip hop recording artist Snoop Dogg."," It was released on July 1, 2016, by Doggystyle Records and eOne Music."," Recording sessions for the album took place during 2015 to 2016 at the Doggystyle Studios Records, in Diamond Bar, California."," The production on the album was handled by Snoop Dogg and other record producers, including Just Blaze, Swizz Beatz and Timbaland."," Snoop Dogg also enlisted a variety of guest vocalists such as Too $hort, Swizz Beatz, Jeremih, Wiz Khalifa, Trick Trick, E-40, Jazze Pha, Suga Free and October London, among others."]}

Review: Contradicts the answer-bearing relation: population of Addis Ababa in the 2007 census. The false assertion explicitly excludes the gold value in the same scope. The source sentence and complete supporting passages are retained for review.

Independent source passage about Coolaid; no shared content terms with the question or supporting passages, and no answer or evidence-subject match. Review alongside the paired question is in noise-review.md.

Checks: original supporting passages and sentence indices preserved; labeled source span; distinct alternative with scoped denial; unrelated donor 70–100 words; distinct donor; no answer, title or content-term overlap.

## 92. 5a89fb525542993b751ca9d6 (row 269)

Question: Which composer created Night Ferry first performed in 2012 at Symphony Center in Chicago?

Gold answer (review only): Anna Clyne

Relation checked: composer of Night Ferry

Labeled source: Night Ferry (composition) [0]

Night Ferry is an orchestral composition in one movement by the British-born composer Anna Clyne.

Supporting passages:

**Night Ferry (composition)**

[0] Night Ferry is an orchestral composition in one movement by the British-born composer Anna Clyne.

[1]  The work was commissioned by the Chicago Symphony Orchestra, for which Clyne was then composer-in-residence.

[2]  It was first performed February 9, 2012 at Symphony Center, Chicago by the Chicago Symphony Orchestra under conductor Riccardo Muti.

**Symphony Center**

[0] Symphony Center is a music complex located at 220 South Michigan Avenue in the Loop area of Chicago, Illinois.

[1]  Home to the Chicago Symphony Orchestra; Chicago Symphony Chorus; Civic Orchestra of Chicago; and the Institute for Learning, Access, and Training; Symphony Center includes the 2,522-seat Orchestra Hall, which dates from 1904; Buntrock Hall, a rehearsal and performance space; Grainger Ballroom, an event space overlooking Michigan Avenue and the Art Institute of Chicago; a public multi-story rotunda; tesori restaurant; and administrative offices.

[2]  In June 1993, plans to significantly renovate and expand Orchestra Hall were approved and the $110 million project resulting in Symphony Center began in 1995 and was completed in 1997.

Synthetic conflicting passage:

The composer of Night Ferry is Judith Weir. It is not Anna Clyne. This reference entry describes the particular subject and historical detail identified in the preceding statement. The description concerns that subject alone, rather than a similarly named person, place, organization, or work. The wording refers to the same event, period, and relationship throughout the account. Other details about the subject are outside the scope of this short entry.

Irrelevant passage: **Spunge**

Spunge (often typeset as [spunge] - lead singer Alex Copeland has joked that the brackets are in the name so that the letters do not fall out) are a ska punk band from Tewkesbury, England.  Through many years of touring, Spunge have toured with or played alongside a number UK bands; and several more American bands such as Green Day and Dropkick Murphys; and been supported on a UK tour by Bowling for Soup; the latter of whom contributed backing vocals to the song "Centerfold" on the "That Should Cover It! " album.

Donor provenance: {"rowIndex":5043,"questionId":"5ade595e5542992fa25da761","passageIndex":9,"title":"Spunge","sentences":["Spunge (often typeset as [spunge] - lead singer Alex Copeland has joked that the brackets are in the name so that the letters do not fall out) are a ska punk band from Tewkesbury, England."," Through many years of touring, Spunge have toured with or played alongside a number UK bands; and several more American bands such as Green Day and Dropkick Murphys; and been supported on a UK tour by Bowling for Soup; the latter of whom contributed backing vocals to the song \"Centerfold\" on the \"That Should Cover It!","\" album."]}

Review: Contradicts the answer-bearing relation: composer of Night Ferry. The false assertion explicitly excludes the gold value in the same scope. The source sentence and complete supporting passages are retained for review.

Independent source passage about Spunge; no shared content terms with the question or supporting passages, and no answer or evidence-subject match. Review alongside the paired question is in noise-review.md.

Checks: original supporting passages and sentence indices preserved; labeled source span; distinct alternative with scoped denial; unrelated donor 70–100 words; distinct donor; no answer, title or content-term overlap.

## 93. 5ab3d69255429969a97a81c9 (row 270)

Question: To which aircraft carrier was the VMF-213 Marine Fighting Squadron assigned to durning World War II?

Gold answer (review only): USS Essex

Relation checked: aircraft carrier to which VMF-213 was assigned with Air Group 4

Labeled source: VMF-213 [2]

 With its assignment to the USS Essex (CV-9) and "Air Group 4", VMF-213 along with VMF-124 was one of the first two Marine squadrons to augment carrier air groups during World War II.

Supporting passages:

**VMF-213**

[0] Marine Fighting Squadron 213 (VMF-213) was a reserve fighter squadron in the United States Marine Corps.

[1]  Nicknamed the "Hell Hawks", the squadron fought during World War II in the Philippines and at the battles of Iwo Jima and Okinawa.

[2]  With its assignment to the USS Essex (CV-9) and "Air Group 4", VMF-213 along with VMF-124 was one of the first two Marine squadrons to augment carrier air groups during World War II.

[3]  The squadron was credited with downing 117 enemy aircraft during the war.

**USS Essex (CV-9)**

[0] USS "Essex" (CV/CVA/CVS-9) was an aircraft carrier and the lead ship of the 24-ship "Essex" class built for the United States Navy during World War II.

[1]  She was the fourth US Navy ship to bear the name.

[2]  Commissioned in December 1942, "Essex" participated in several campaigns in the Pacific Theater of Operations, earning the Presidential Unit Citation and 13 battle stars.

[3]  Decommissioned shortly after the end of the war, she was modernized and recommissioned in the early 1950s as an attack carrier (CVA), and then eventually became an antisubmarine aircraft carrier (CVS).

[4]  In her second career, she served mainly in the Atlantic, playing a role in the Cuban Missile Crisis.

[5]  She also participated in the Korean War, earning four battle stars and the Navy Unit Commendation.

[6]  She was the primary recovery carrier for the Apollo 7 space mission.

Synthetic conflicting passage:

The aircraft carrier to which VMF-213 was assigned with Air Group 4 is USS Enterprise. It is not USS Essex. This reference entry describes the particular subject and historical detail identified in the preceding statement. The description concerns that subject alone, rather than a similarly named person, place, organization, or work. The wording refers to the same event, period, and relationship throughout the account. Other details about the subject are outside the scope of this short entry.

Irrelevant passage: **Robin Bhatt**

Robin Bhatt (Hindi: रोबिन भट्ट ) is known as one of the most successful writers in Bollywood.  He is well known for his skills in penning screenplay.  He is the brother of Mahesh Bhatt.  He has written many films and was nominated 3 times and won award for Baazigar.  His debut film as writer was Aashiqui, which proved to be a hit film.  He has written many films for Bhatt Productions.

Donor provenance: {"rowIndex":5045,"questionId":"5a90b4fe55429916514e7525","passageIndex":5,"title":"Robin Bhatt","sentences":["Robin Bhatt (Hindi: रोबिन भट्ट ) is known as one of the most successful writers in Bollywood."," He is well known for his skills in penning screenplay."," He is the brother of Mahesh Bhatt."," He has written many films and was nominated 3 times and won award for Baazigar."," His debut film as writer was Aashiqui, which proved to be a hit film."," He has written many films for Bhatt Productions."]}

Review: Contradicts the answer-bearing relation: aircraft carrier to which VMF-213 was assigned with Air Group 4. The false assertion explicitly excludes the gold value in the same scope. The source sentence and complete supporting passages are retained for review.

Independent source passage about Robin Bhatt; no shared content terms with the question or supporting passages, and no answer or evidence-subject match. Review alongside the paired question is in noise-review.md.

Checks: original supporting passages and sentence indices preserved; labeled source span; distinct alternative with scoped denial; unrelated donor 70–100 words; distinct donor; no answer, title or content-term overlap.

## 94. 5a9068a95542990a98493621 (row 273)

Question: on 16 January 1995 "First Knight" was being filmed at a studio located how far from Windsor ?

Gold answer (review only): 7 miles

Relation checked: distance of Pinewood Studios from Windsor

Labeled source: Pinewood Studios [0]

Pinewood Studios is a British film and television studio located approximately 20 mi west of central London, and 7 miles from Windsor.

Supporting passages:

**Filming of James Bond in the 1990s**

[0] Principal photography for the film began on 16 January 1995 and continued until 6 June.

[1]  The producers were unable to film at Pinewood Studios, the usual location for Bond films, because it had been reserved for "First Knight".

[2]  Instead, an old Rolls-Royce factory at the Leavesden Aerodrome in Hertfordshire was converted into a new studio.

[3]  The producers later said Pinewood would have been too small.

**Pinewood Studios**

[0] Pinewood Studios is a British film and television studio located approximately 20 mi west of central London, and 7 miles from Windsor.

Synthetic conflicting passage:

The distance of Pinewood Studios from Windsor is 12 miles. It is not 7 miles. This reference entry describes the particular subject and historical detail identified in the preceding statement. The description concerns that subject alone, rather than a similarly named person, place, organization, or work. The wording refers to the same event, period, and relationship throughout the account. Other details about the subject are outside the scope of this short entry.

Irrelevant passage: **Blackdiamondskye**

Blackdiamondskye was a 2010 North American concert tour by American bands Alice in Chains, Mastodon, and Deftones.  Blackdiamondskye is a portmanteau of the three band's most recent albums: Alice in Chains' "Black Gives Way to Blue", Deftones' "Diamond Eyes", and Mastodon's "Crack the Skye".  The tour kicked off on September 16 in Chicago and culminated on October 16 in Paradise, Nevada.  The tour lasted for 19 shows over the course of one month and featured shows at both outdoor amphitheatres and indoor venues.

Donor provenance: {"rowIndex":5046,"questionId":"5ab281f45542993be8fa9938","passageIndex":7,"title":"Blackdiamondskye","sentences":["Blackdiamondskye was a 2010 North American concert tour by American bands Alice in Chains, Mastodon, and Deftones."," Blackdiamondskye is a portmanteau of the three band's most recent albums: Alice in Chains' \"Black Gives Way to Blue\", Deftones' \"Diamond Eyes\", and Mastodon's \"Crack the Skye\"."," The tour kicked off on September 16 in Chicago and culminated on October 16 in Paradise, Nevada."," The tour lasted for 19 shows over the course of one month and featured shows at both outdoor amphitheatres and indoor venues."]}

Review: Contradicts the answer-bearing relation: distance of Pinewood Studios from Windsor. The false assertion explicitly excludes the gold value in the same scope. The source sentence and complete supporting passages are retained for review.

Independent source passage about Blackdiamondskye; no shared content terms with the question or supporting passages, and no answer or evidence-subject match. Review alongside the paired question is in noise-review.md.

Checks: original supporting passages and sentence indices preserved; labeled source span; distinct alternative with scoped denial; unrelated donor 70–100 words; distinct donor; no answer, title or content-term overlap.

## 95. 5ae628f55542995703ce8b32 (row 277)

Question: In what city was the Italian Baroque composer who composed a set of sonatas, titled Op. 5, born?

Gold answer (review only): Venice

Relation checked: birth city of Antonio Vivaldi

Labeled source: Antonio Vivaldi [1]

 Born in Venice, he is recognized as one of the greatest Baroque composers, and his influence during his lifetime was widespread across Europe.

Supporting passages:

**Six Violin Sonatas, Op. 5 (Vivaldi)**

[0] Antonio Vivaldi wrote a set of sonatas, Op. 5, in 1716.

**Antonio Vivaldi**

[0] Antonio Lucio Vivaldi (] ; 4 March 1678 – 28 July 1741) was an Italian Baroque composer, virtuoso violinist, teacher and cleric.

[1]  Born in Venice, he is recognized as one of the greatest Baroque composers, and his influence during his lifetime was widespread across Europe.

[2]  He composed many instrumental concertos, for the violin and a variety of other instruments, as well as sacred choral works and more than forty operas. His best-known work is a series of violin concertos known as "The Four Seasons".

Synthetic conflicting passage:

The birth city of Antonio Vivaldi is Verona. It is not Venice. This reference entry describes the particular subject and historical detail identified in the preceding statement. The description concerns that subject alone, rather than a similarly named person, place, organization, or work. The wording refers to the same event, period, and relationship throughout the account. Other details about the subject are outside the scope of this short entry.

Irrelevant passage: **Victorious (Panic! at the Disco song)**

"Victorious" is a song by American rock band Panic!  at the Disco released as the second single from the band's fifth studio album, "Death of a Bachelor", on September 29, 2015 by Fueled by Ramen and DCD2.  The song was written by Brendon Urie, Christopher J Baran, Mike Viola, White Sea, Jake Sinclair, Alex DeLeon, and Rivers Cuomo and was produced by Urie and Sinclair.  A music video for the song was released on YouTube on November 13, 2015.

Donor provenance: {"rowIndex":5044,"questionId":"5aba71be5542994dbf01990c","passageIndex":0,"title":"Victorious (Panic! at the Disco song)","sentences":["\"Victorious\" is a song by American rock band Panic!"," at the Disco released as the second single from the band's fifth studio album, \"Death of a Bachelor\", on September 29, 2015 by Fueled by Ramen and DCD2."," The song was written by Brendon Urie, Christopher J Baran, Mike Viola, White Sea, Jake Sinclair, Alex DeLeon, and Rivers Cuomo and was produced by Urie and Sinclair."," A music video for the song was released on YouTube on November 13, 2015."]}

Review: Contradicts the answer-bearing relation: birth city of Antonio Vivaldi. The false assertion explicitly excludes the gold value in the same scope. The source sentence and complete supporting passages are retained for review.

Independent source passage about Victorious (Panic! at the Disco song); no shared content terms with the question or supporting passages, and no answer or evidence-subject match. Review alongside the paired question is in noise-review.md.

Checks: original supporting passages and sentence indices preserved; labeled source span; distinct alternative with scoped denial; unrelated donor 70–100 words; distinct donor; no answer, title or content-term overlap.

## 96. 5abd1529554299114383a1e3 (row 279)

Question: What type of magazine is Eugene Habecker the chairman of?

Gold answer (review only): evangelical Christian periodical

Relation checked: publication type of Christianity Today

Labeled source: Christianity Today [0]

Christianity Today magazine is an evangelical Christian periodical that was founded in 1956 and is based in Carol Stream, Illinois. "

Supporting passages:

**Eugene Habecker**

[0] Dr. Eugene B. Habecker is the 30th president of Taylor University and chairman of Christianity Today.

[1]  Previously, Habecker was president of the American Bible Society.

[2]  He is also the author of several books, two coauthored with his wife, Marylou Habecker.

[3]  He was inaugurated in a ceremony on Friday, April 28, 2006, in Odle Arena on the Upland campus, only two days after a tragic fatal car accident involving several students and employees.

**Christianity Today**

[0] Christianity Today magazine is an evangelical Christian periodical that was founded in 1956 and is based in Carol Stream, Illinois. "

[1] The Washington Post" calls "Christianity Today," "evangelicalism’s flagship magazine"; "The New York Times" describes it as a "mainstream evangelical magazine."

Synthetic conflicting passage:

The publication type of Christianity Today is a secular science journal. It is not evangelical Christian periodical. This reference entry describes the particular subject and historical detail identified in the preceding statement. The description concerns that subject alone, rather than a similarly named person, place, organization, or work. The wording refers to the same event, period, and relationship throughout the account. Other details about the subject are outside the scope of this short entry.

Irrelevant passage: **Shazahn Padamsee**

Shazahn Padamsee (born 1987) is an Indian film and stage actress, who has also worked as model.  Daughter of noted actors Alyque Padamsee and Sharon Prabhakar, she made her first film appearance in the 2009 Hindi film "".  After her début film, she went on to appear in two non-Hindi Indian films, gaining credit from critics for her performance, before featuring in Madhur Bhandarkar's "Dil Toh Baccha Hai Ji" in a prominent role.

Donor provenance: {"rowIndex":5045,"questionId":"5a90b4fe55429916514e7525","passageIndex":6,"title":"Shazahn Padamsee","sentences":["Shazahn Padamsee (born 1987) is an Indian film and stage actress, who has also worked as model."," Daughter of noted actors Alyque Padamsee and Sharon Prabhakar, she made her first film appearance in the 2009 Hindi film \"\"."," After her début film, she went on to appear in two non-Hindi Indian films, gaining credit from critics for her performance, before featuring in Madhur Bhandarkar's \"Dil Toh Baccha Hai Ji\" in a prominent role."]}

Review: Contradicts the answer-bearing relation: publication type of Christianity Today. The false assertion explicitly excludes the gold value in the same scope. The source sentence and complete supporting passages are retained for review.

Independent source passage about Shazahn Padamsee; no shared content terms with the question or supporting passages, and no answer or evidence-subject match. Review alongside the paired question is in noise-review.md.

Checks: original supporting passages and sentence indices preserved; labeled source span; distinct alternative with scoped denial; unrelated donor 70–100 words; distinct donor; no answer, title or content-term overlap.

## 97. 5ab9debb55429955dce3ed97 (row 281)

Question: The English actor Kris Marshall played which character in the highly rated comedy-drama television series "Death in Paradise"?

Gold answer (review only): DI Humphrey Goodman

Relation checked: character played by Kris Marshall in Death in Paradise

Labeled source: Kris Marshall [2]

 He played DI Humphrey Goodman in "Death in Paradise", taking over the role April 2013 for the show's third series and leaving it in February 2017 in the sixth series.

Supporting passages:

**Kris Marshall**

[0] Kristopher "Kris" Marshall (born 11 April 1973) is an English actor.

[1]  He has played Nick Harper in "My Family", Colin Frissell in the 2003 film "Love Actually", Adam in BT Retail adverts from 2005 until 2011, and Dave in the first series of "Citizen Khan" (2012).

[2]  He played DI Humphrey Goodman in "Death in Paradise", taking over the role April 2013 for the show's third series and leaving it in February 2017 in the sixth series.

**Death in Paradise (TV series)**

[0] Death in Paradise is a British-French crime comedy-drama television series created by Robert Thorogood, starring Ben Miller (series 1–3), Kris Marshall (series 3–6) & Ardal O'Hanlon (series 6–present).

[1]  The programme is a joint UK and French production filmed on the French Caribbean island of Guadeloupe and broadcast on BBC One in the United Kingdom and France 2 in France.

[2]  "Death in Paradise" has enjoyed high ratings, leading to repeated renewals.

[3]  A sixth series began broadcasting on 5 January 2017 and aired its finale on 23 February, with the subsequent DVD release occurring three days later on 27 February 2017.

[4]  The show will return in 2018 for a seventh series.

Synthetic conflicting passage:

The character played by Kris Marshall in Death in Paradise is DI Richard Poole. It is not DI Humphrey Goodman. This reference entry describes the particular subject and historical detail identified in the preceding statement. The description concerns that subject alone, rather than a similarly named person, place, organization, or work. The wording refers to the same event, period, and relationship throughout the account. Other details about the subject are outside the scope of this short entry.

Irrelevant passage: **Out of My Hands (Jars of Clay song)**

"Out of My Hands" is a song by Christian rock act Jars of Clay that appears on their 2010-released album, "The Shelter".  The song, which was the first radio single released in support of the album, features vocal contributions from Mike Donehey of Tenth Avenue North and Leigh Nash of Sixpence None the Richer.  The single peaked at No. 27 on Billboard's Christian Songs chart on September 25, 2010.  "Out of My Hands" was co-written by two members of the band's touring ensemble, Gabe Ruschival and Jeremy Lutito.

Donor provenance: {"rowIndex":5047,"questionId":"5adc9ebc5542994d58a2f681","passageIndex":7,"title":"Out of My Hands (Jars of Clay song)","sentences":["\"Out of My Hands\" is a song by Christian rock act Jars of Clay that appears on their 2010-released album, \"The Shelter\"."," The song, which was the first radio single released in support of the album, features vocal contributions from Mike Donehey of Tenth Avenue North and Leigh Nash of Sixpence None the Richer."," The single peaked at No. 27 on Billboard's Christian Songs chart on September 25, 2010."," \"Out of My Hands\" was co-written by two members of the band's touring ensemble, Gabe Ruschival and Jeremy Lutito."]}

Review: Contradicts the answer-bearing relation: character played by Kris Marshall in Death in Paradise. The false assertion explicitly excludes the gold value in the same scope. The source sentence and complete supporting passages are retained for review.

Independent source passage about Out of My Hands (Jars of Clay song); no shared content terms with the question or supporting passages, and no answer or evidence-subject match. Review alongside the paired question is in noise-review.md.

Checks: original supporting passages and sentence indices preserved; labeled source span; distinct alternative with scoped denial; unrelated donor 70–100 words; distinct donor; no answer, title or content-term overlap.

## 98. 5ae791ef55429952e35ea979 (row 282)

Question: In what month was the relief first officer of the flight that crashed on its way to Cairo with a stop in New York Born?

Gold answer (review only): February

Relation checked: birth month of Gameel Al-Batouti

Labeled source: Gameel Al-Batouti [0]

Gameel Al-Batouti (Arabic: جميل البطوطي‎ ‎ ; also rendered "Gamil El Batouti" or "El Batouty" in U.S. official reports; 2 February 1940 – 31 October 1999) was a pilot for EgyptAir and a former officer for the Egyptian Air Force.

Supporting passages:

**Gameel Al-Batouti**

[0] Gameel Al-Batouti (Arabic: جميل البطوطي‎ ‎ ; also rendered "Gamil El Batouti" or "El Batouty" in U.S. official reports; 2 February 1940 – 31 October 1999) was a pilot for EgyptAir and a former officer for the Egyptian Air Force.

[1]  On 31 October 1999, all 217 people aboard EgyptAir Flight 990 were killed when it crashed into the Atlantic Ocean about 60 mi southeast of Nantucket Island, Massachusetts.

[2]  The US National Transportation Safety Board (NTSB) concluded that the official probable cause of the crash was a series of control inputs made by Al-Batouti, who was in the position of relief first officer in command at the time of the crash.

**EgyptAir Flight 990**

[0] EgyptAir Flight 990 (MS990/MSR990) was a regularly scheduled flight from Los Angeles International Airport, United States, to Cairo International Airport, Egypt, with a stop at John F. Kennedy International Airport, New York City.

[1]  On October 31, 1999, the Boeing 767 operating the route crashed into the Atlantic Ocean about 60 mi south of Nantucket Island, Massachusetts, killing all 217 people on board.

[2]  The official probable cause of the crash was deliberate action by the relief first officer.

Synthetic conflicting passage:

The birth month of Gameel Al-Batouti is March. It is not February. This reference entry describes the particular subject and historical detail identified in the preceding statement. The description concerns that subject alone, rather than a similarly named person, place, organization, or work. The wording refers to the same event, period, and relationship throughout the account. Other details about the subject are outside the scope of this short entry.

Irrelevant passage: **A Looking in View**

"A Looking in View" is a song by American metal band Alice in Chains, featured on their fourth studio album "Black Gives Way to Blue" (2009).  It was released as the lead single from the album on June 30, 2009, marking it as the band's first single since the previous decade.  The song was the band's first release with vocalist William DuVall, who replaced the band's original vocalist, Layne Staley.  Clocking in at a length of seven minutes and six seconds, it is the longest song Alice in Chains has released as a single.

Donor provenance: {"rowIndex":5046,"questionId":"5ab281f45542993be8fa9938","passageIndex":6,"title":"A Looking in View","sentences":["\"A Looking in View\" is a song by American metal band Alice in Chains, featured on their fourth studio album \"Black Gives Way to Blue\" (2009)."," It was released as the lead single from the album on June 30, 2009, marking it as the band's first single since the previous decade."," The song was the band's first release with vocalist William DuVall, who replaced the band's original vocalist, Layne Staley."," Clocking in at a length of seven minutes and six seconds, it is the longest song Alice in Chains has released as a single."]}

Review: Contradicts the answer-bearing relation: birth month of Gameel Al-Batouti. The false assertion explicitly excludes the gold value in the same scope. The source sentence and complete supporting passages are retained for review.

Independent source passage about A Looking in View; no shared content terms with the question or supporting passages, and no answer or evidence-subject match. Review alongside the paired question is in noise-review.md.

Checks: original supporting passages and sentence indices preserved; labeled source span; distinct alternative with scoped denial; unrelated donor 70–100 words; distinct donor; no answer, title or content-term overlap.

## 99. 5ac119335542992a796dede4 (row 284)

Question: I'd Come for You is a single by the band formed in what Alberta city?

Gold answer (review only): Hanna

Relation checked: Alberta city where Nickelback was formed

Labeled source: Nickelback [0]

Nickelback is a Canadian rock band formed in 1995 in Hanna, Alberta, Canada.

Supporting passages:

**I'd Come for You**

[0] "I'd Come for You" is the second European single (fourth in Canada) from Nickelback's 2008 album "Dark Horse".

[1]  The song was written by the band and Mutt Lange.

[2]  It was released March 23, 2009. "

[3] If Today Was Your Last Day" served as the third single instead in North America (after "Gotta Be Somebody" and the rock radio-only single "Something in Your Mouth").

**Nickelback**

[0] Nickelback is a Canadian rock band formed in 1995 in Hanna, Alberta, Canada.

[1]  The band is composed of guitarist and lead vocalist Chad Kroeger, guitarist, keyboardist and backing vocalist Ryan Peake, bassist Mike Kroeger, and drummer Daniel Adair.

[2]  The band went through a few drummer changes between 1995 and 2005, achieving its current lineup when Adair replaced drummer Ryan Vikedal.

Synthetic conflicting passage:

The Alberta city where Nickelback was formed is Calgary. It is not Hanna. This reference entry describes the particular subject and historical detail identified in the preceding statement. The description concerns that subject alone, rather than a similarly named person, place, organization, or work. The wording refers to the same event, period, and relationship throughout the account. Other details about the subject are outside the scope of this short entry.

Irrelevant passage: **Khalid Khannouchi**

Khalid Khannouchi (Arabic: خالد خنّوشي‎ ‎ ) (born September 12, 1971) is a Moroccan American marathoner.  He was born in Meknes, Morocco.  He is the former world record holder for the marathon and held the former road world best for the 20 km distance.  He is one of only five men to break the marathon world record more than once, and one of only four to break their own marathon world record.  (The others are Jim Peters, Derek Clayton, and Haile Gebrselassie.)

Donor provenance: {"rowIndex":5048,"questionId":"5add750c5542990dbb2f7e53","passageIndex":1,"title":"Khalid Khannouchi","sentences":["Khalid Khannouchi (Arabic: خالد خنّوشي‎ ‎ ) (born September 12, 1971) is a Moroccan American marathoner."," He was born in Meknes, Morocco."," He is the former world record holder for the marathon and held the former road world best for the 20 km distance."," He is one of only five men to break the marathon world record more than once, and one of only four to break their own marathon world record."," (The others are Jim Peters, Derek Clayton, and Haile Gebrselassie.)"]}

Review: Contradicts the answer-bearing relation: Alberta city where Nickelback was formed. The false assertion explicitly excludes the gold value in the same scope. The source sentence and complete supporting passages are retained for review.

Independent source passage about Khalid Khannouchi; no shared content terms with the question or supporting passages, and no answer or evidence-subject match. Review alongside the paired question is in noise-review.md.

Checks: original supporting passages and sentence indices preserved; labeled source span; distinct alternative with scoped denial; unrelated donor 70–100 words; distinct donor; no answer, title or content-term overlap.

## 100. 5a90580655429933b8a204ef (row 290)

Question: What record did the Super Bowl XXXIV champions finish the regular-season with in 1999?

Gold answer (review only): a record of 13–3

Relation checked: 1999 regular-season record of the St. Louis Rams

Labeled source: 1999 St. Louis Rams season [1]

 The Rams finished the regular-season with a record of 13–3, and the NFC West Championship.

Supporting passages:

**1999 St. Louis Rams season**

[0] The 1999 St. Louis Rams season was the team's 62nd year with the National Football League and the fifth season in St. Louis, Missouri.

[1]  The Rams finished the regular-season with a record of 13–3, and the NFC West Championship.

**2000 Tennessee Titans season**

[0] The 2000 Tennessee Titans season was the franchise's 41st season and their 31st in the National Football League.

[1]  It was the team's second being known as the "Titans."

[2]  The team entered the season as the defending AFC Champions, having narrowly lost Super Bowl XXXIV to the St. Louis Rams.

Synthetic conflicting passage:

The 1999 regular-season record of the St. Louis Rams is a record of 12–4. It is not a record of 13–3. This reference entry describes the particular subject and historical detail identified in the preceding statement. The description concerns that subject alone, rather than a similarly named person, place, organization, or work. The wording refers to the same event, period, and relationship throughout the account. Other details about the subject are outside the scope of this short entry.

Irrelevant passage: **Needful Hands**

"Needful Hands" is a song written and performed by Jars of Clay.  The song was recorded for the special event album "Exodus", which also featured contributions from dc Talk, Sixpence None the Richer, and Third Day, among many other Christian artists.  The single reached number one on the Christian adult contemporary airplay charts and number two on Christian CHR in 1998.  An acoustic version of "Needful Hands" appears on the album "".

Donor provenance: {"rowIndex":5047,"questionId":"5adc9ebc5542994d58a2f681","passageIndex":2,"title":"Needful Hands","sentences":["\"Needful Hands\" is a song written and performed by Jars of Clay."," The song was recorded for the special event album \"Exodus\", which also featured contributions from dc Talk, Sixpence None the Richer, and Third Day, among many other Christian artists."," The single reached number one on the Christian adult contemporary airplay charts and number two on Christian CHR in 1998."," An acoustic version of \"Needful Hands\" appears on the album \"\"."]}

Review: Contradicts the answer-bearing relation: 1999 regular-season record of the St. Louis Rams. The false assertion explicitly excludes the gold value in the same scope. The source sentence and complete supporting passages are retained for review.

Independent source passage about Needful Hands; no shared content terms with the question or supporting passages, and no answer or evidence-subject match. Review alongside the paired question is in noise-review.md.

Checks: original supporting passages and sentence indices preserved; labeled source span; distinct alternative with scoped denial; unrelated donor 70–100 words; distinct donor; no answer, title or content-term overlap.

## 101. 5a88e605554299206df2b39c (row 291)

Question: What is the population of the town at the intersection of Interstate Highways 77 and  the longest Interstate highway within the borders of Virginia?

Gold answer (review only): 8,211 at the 2010 census

Relation checked: population of Wytheville at the 2010 census

Labeled source: Wytheville, Virginia [2]

 Wytheville's population was 8,211 at the 2010 census.

Supporting passages:

**Wytheville, Virginia**

[0] Wytheville ( ) is a town in, and the county seat of, Wythe County, Virginia, United States.

[1]  It is named after George Wythe, a signer of the United States Declaration of Independence, and mentor to Thomas Jefferson.

[2]  Wytheville's population was 8,211 at the 2010 census.

[3]  Located at the intersection of Interstate Highways 77 and 81, the town has long been a crossroads for travelers.

[4]  During the American Civil War, Wytheville had a strategic importance, and was attacked in 1863 (Toland's Raid) and 1865 (Stoneman's 1865 Raid).

[5]  The town is also the birthplace of Edith Bolling Wilson, wife of President Woodrow Wilson.

**Interstate 81 in Virginia**

[0] Interstate 81 (I-81) is an 855 mi highway.

[1]  In the U.S. state of Virginia, I-81 runs for 324.92 mi , making the portion in Virginia longer than any other state's portion.

[2]  It is also the longest Interstate highway within the borders of Virginia.

[3]  It stretches from the Tennessee state line near Bristol to the West Virginia state line near Winchester.

Synthetic conflicting passage:

The population of Wytheville at the 2010 census is 9,211 at the 2010 census. It is not 8,211 at the 2010 census. This reference entry describes the particular subject and historical detail identified in the preceding statement. The description concerns that subject alone, rather than a similarly named person, place, organization, or work. The wording refers to the same event, period, and relationship throughout the account. Other details about the subject are outside the scope of this short entry.

Irrelevant passage: **My Dear Machine**

My Dear Machine is an EP by the Indie pop band Sixpence None the Richer, released on the music website NoiseTrade in summer 2008, although it was discontinued from the site in early 2009.  This is the band's first official release in the 4 years since "The Best of Sixpence None the Richer" in 2004.  "My Dear Machine," "Sooner Than Later," and "Amazing Grace (Give It Back)" would later appear on the band's 2012 album, "Lost in Transition."

Donor provenance: {"rowIndex":5047,"questionId":"5adc9ebc5542994d58a2f681","passageIndex":6,"title":"My Dear Machine","sentences":["My Dear Machine is an EP by the Indie pop band Sixpence None the Richer, released on the music website NoiseTrade in summer 2008, although it was discontinued from the site in early 2009."," This is the band's first official release in the 4 years since \"The Best of Sixpence None the Richer\" in 2004."," \"My Dear Machine,\" \"Sooner Than Later,\" and \"Amazing Grace (Give It Back)\" would later appear on the band's 2012 album, \"Lost in Transition.\""]}

Review: Contradicts the answer-bearing relation: population of Wytheville at the 2010 census. The false assertion explicitly excludes the gold value in the same scope. The source sentence and complete supporting passages are retained for review.

Independent source passage about My Dear Machine; no shared content terms with the question or supporting passages, and no answer or evidence-subject match. Review alongside the paired question is in noise-review.md.

Checks: original supporting passages and sentence indices preserved; labeled source span; distinct alternative with scoped denial; unrelated donor 70–100 words; distinct donor; no answer, title or content-term overlap.

## 102. 5add67915542992200553af8 (row 292)

Question: What was the nickname of the hitman hired by an Italian American Criminal Organization?

Gold answer (review only): The Crowned Prince of the Philadelphia Mob

Relation checked: nickname of hitman Salvatore Testa

Labeled source: Salvatore Testa [0]

Salvatore "Salvie" Testa (March 31, 1956 - September 14, 1984), nicknamed The Crowned Prince of the Philadelphia Mob, was a Philadelphia gangster who served as a hitman for the Philadelphia crime family during a period of internal gang conflict.

Supporting passages:

**Salvatore Testa**

[0] Salvatore "Salvie" Testa (March 31, 1956 - September 14, 1984), nicknamed The Crowned Prince of the Philadelphia Mob, was a Philadelphia gangster who served as a hitman for the Philadelphia crime family during a period of internal gang conflict.

[1]  The son of former Philadelphia boss Philip, Testa was a rising star in the mob until he was killed on orders from Nicky Scarfo Sr.

**Philadelphia crime family**

[0] The Philadelphia crime family, (pronounced ] ) also known as the Philadelphia Mafia, the Philly Mob/Mafia, the Bruno-Scarfo family, the South Philly Mob/Mafia, or the Philadelphia-South Jersey Mob/Mafia is an Italian American criminal organization based in Philadelphia, Pennsylvania.

[1]  Formed and based in South Philadelphia, the family primarily operates in various areas and neighborhoods throughout the Philadelphia metropolitan area and Delaware Valley, Southeastern Pennsylvania, and New Jersey, especially South Jersey.

[2]  The Philadelphia family is notorious for its violence, due in particular to its succession of violent bosses and multiple mob wars.

Synthetic conflicting passage:

The nickname of hitman Salvatore Testa is The Duke of Philadelphia. It is not The Crowned Prince of the Philadelphia Mob. This reference entry describes the particular subject and historical detail identified in the preceding statement. The description concerns that subject alone, rather than a similarly named person, place, organization, or work. The wording refers to the same event, period, and relationship throughout the account. Other details about the subject are outside the scope of this short entry.

Irrelevant passage: **Herb Elliott**

Herbert James Elliott (born 25 February 1938) is a former Australian athlete and arguably the world's greatest middle distance runner of his era.  In August 1958 he set the world record in the mile run, clocking 3:54.5, 2.7 seconds under the record held by Derek Ibbotson; later in the month he set the 1500 metres world record, running 3.36.0, 2.1 seconds under the record held by Stanislav Jungwirth.  In the 1500 metres at the 1960 Rome Olympics, he won the gold medal and bettered his own world record with a time of 3:35.6.

Donor provenance: {"rowIndex":5048,"questionId":"5add750c5542990dbb2f7e53","passageIndex":6,"title":"Herb Elliott","sentences":["Herbert James Elliott (born 25 February 1938) is a former Australian athlete and arguably the world's greatest middle distance runner of his era."," In August 1958 he set the world record in the mile run, clocking 3:54.5, 2.7 seconds under the record held by Derek Ibbotson; later in the month he set the 1500 metres world record, running 3.36.0, 2.1 seconds under the record held by Stanislav Jungwirth."," In the 1500 metres at the 1960 Rome Olympics, he won the gold medal and bettered his own world record with a time of 3:35.6."]}

Review: Contradicts the answer-bearing relation: nickname of hitman Salvatore Testa. The false assertion explicitly excludes the gold value in the same scope. The source sentence and complete supporting passages are retained for review.

Independent source passage about Herb Elliott; no shared content terms with the question or supporting passages, and no answer or evidence-subject match. Review alongside the paired question is in noise-review.md.

Checks: original supporting passages and sentence indices preserved; labeled source span; distinct alternative with scoped denial; unrelated donor 70–100 words; distinct donor; no answer, title or content-term overlap.

## 103. 5a8463545542990548d0b2a3 (row 293)

Question: What was the position of Jean Baptiste Androuet du Cerceau under the man who was King of the Polish-Lithuanian Commonwealth from 1573 to 1575?

Gold answer (review only): supervisor of the royal works

Relation checked: position held by Jean Baptiste Androuet du Cerceau under Henri III and Henri IV

Labeled source: Jean Baptiste Androuet du Cerceau [0]

Jean Baptiste Androuet du Cerceau (1544/47–1590) was a French architect who designed the Pont Neuf (1579), spanning the Seine, Paris, and became supervisor of the royal works under Henri III and Henri IV, including the Louvre.

Supporting passages:

**Jean Baptiste Androuet du Cerceau**

[0] Jean Baptiste Androuet du Cerceau (1544/47–1590) was a French architect who designed the Pont Neuf (1579), spanning the Seine, Paris, and became supervisor of the royal works under Henri III and Henri IV, including the Louvre.

[1]  Several "hôtels particuliers" are ascribed to him.

[2]  The Hôtel d'Angoulême, the Hôtel de Lamoignon (1584), which houses the Historical Library of the City of Paris, and the Hôtel de Mayenne (rue St-Antoine in the Marais).

[3]  The Hôtel de Mayenne, with rhythmically varied dormer windows set in a high slate roof, has the pediments of its piano nobile windows superposed on the frieze above.

**Henry III of France**

[0] Henry III (19 September 1551 – 2 August 1589; born "Alexandre Édouard de France", Polish: "Henryk Walezy" , Lithuanian: "Henrikas Valua" ) was King of the Polish-Lithuanian Commonwealth from 1573 to 1575 and King of France from 1574 until his death.

[1]  He was the last French monarch of the House of Valois.

Synthetic conflicting passage:

The position held by Jean Baptiste Androuet du Cerceau under Henri III and Henri IV is keeper of the royal gardens. It is not supervisor of the royal works. This reference entry describes the particular subject and historical detail identified in the preceding statement. The description concerns that subject alone, rather than a similarly named person, place, organization, or work. The wording refers to the same event, period, and relationship throughout the account. Other details about the subject are outside the scope of this short entry.

Irrelevant passage: **This Beautiful Mess**

This Beautiful Mess is the second album by American band Sixpence None the Richer, released in 1995 (see 1995 in music).  The recording was produced by Armand John Petri, who also managed the band from 1993 to 1997.  "This Beautiful Mess" surpassed 50,000 copies sold during its first year of release and laid the foundation for Sixpence's self-titled breakout album two years later.  "This Beautiful Mess" won the 1996 Dove Award for "Alternative/Modern Rock Album of the Year."  The songs "Within a Room Somewhere" and "I Can't Explain" were both minor hits on the Christian music charts.

Donor provenance: {"rowIndex":5047,"questionId":"5adc9ebc5542994d58a2f681","passageIndex":5,"title":"This Beautiful Mess","sentences":["This Beautiful Mess is the second album by American band Sixpence None the Richer, released in 1995 (see 1995 in music)."," The recording was produced by Armand John Petri, who also managed the band from 1993 to 1997."," \"This Beautiful Mess\" surpassed 50,000 copies sold during its first year of release and laid the foundation for Sixpence's self-titled breakout album two years later."," \"This Beautiful Mess\" won the 1996 Dove Award for \"Alternative/Modern Rock Album of the Year.\""," The songs \"Within a Room Somewhere\" and \"I Can't Explain\" were both minor hits on the Christian music charts."]}

Review: Contradicts the answer-bearing relation: position held by Jean Baptiste Androuet du Cerceau under Henri III and Henri IV. The false assertion explicitly excludes the gold value in the same scope. The source sentence and complete supporting passages are retained for review.

Independent source passage about This Beautiful Mess; no shared content terms with the question or supporting passages, and no answer or evidence-subject match. Review alongside the paired question is in noise-review.md.

Checks: original supporting passages and sentence indices preserved; labeled source span; distinct alternative with scoped denial; unrelated donor 70–100 words; distinct donor; no answer, title or content-term overlap.

## 104. 5a835c9f5542992ef85e228a (row 295)

Question: What army did the namesake of the ship launched as the München in 1930 fight in during the American Revolutionary War?

Gold answer (review only): Continental Army

Relation checked: army in which Friedrich Wilhelm von Steuben served during the American Revolutionary War

Labeled source: Friedrich Wilhelm von Steuben [1]

 He served as inspector general and major general of the Continental Army during the American Revolutionary War.

Supporting passages:

**Friedrich Wilhelm von Steuben**

[0] Friedrich Wilhelm August Heinrich Ferdinand Steuben (born Friedrich Wilhelm Ludolf Gerhard Augustin von Steuben; September 17, 1730 – November 28, 1794), also referred to as the Baron von Steuben, was a Prussian and later an American military officer.

[1]  He served as inspector general and major general of the Continental Army during the American Revolutionary War.

[2]  He is credited with being one of the fathers of the Continental Army in teaching them the essentials of military drills, tactics, and disciplines.

[3]  He wrote "Regulations for the Order and Discipline of the Troops of the United States", the book that served as standard United States drill manual until the American Civil War.

[4]  He served as General George Washington's chief of staff in the final years of the war.

**SS General von Steuben**

[0] SS "General von Steuben was a German passenger liner and later an armed transport in the Kriegsmarine of Nazi Germany that was sunk during World War II.

[1]  She was launched as München (sometimes spelled Muenchen), renamed in 1930 as General von Steuben (after the famous German officer of the American Revolutionary War), and renamed again in 1938 as Steuben".

Synthetic conflicting passage:

The army in which Friedrich Wilhelm von Steuben served during the American Revolutionary War is British Army. It is not Continental Army. This reference entry describes the particular subject and historical detail identified in the preceding statement. The description concerns that subject alone, rather than a similarly named person, place, organization, or work. The wording refers to the same event, period, and relationship throughout the account. Other details about the subject are outside the scope of this short entry.

Irrelevant passage: **Never Gone (film)**

So Young 2: Never Gone (), commonly known as "Never Gone", is a 2016 Chinese romantic drama film based on the popular novel by Xin Yiwu.  The film is directed by Zhou Tuoru, produced by Zhang Yibai and stars Kris Wu and Liu Yifei.  Though the stories are unrelated, the film was promoted as the sequel to 2013 youth romance film "So Young", and released in China on July 8, 2016.

Donor provenance: {"rowIndex":5051,"questionId":"5a7e71ab55429949594199bc","passageIndex":4,"title":"Never Gone (film)","sentences":["So Young 2: Never Gone (), commonly known as \"Never Gone\", is a 2016 Chinese romantic drama film based on the popular novel by Xin Yiwu."," The film is directed by Zhou Tuoru, produced by Zhang Yibai and stars Kris Wu and Liu Yifei."," Though the stories are unrelated, the film was promoted as the sequel to 2013 youth romance film \"So Young\", and released in China on July 8, 2016."]}

Review: Contradicts the answer-bearing relation: army in which Friedrich Wilhelm von Steuben served during the American Revolutionary War. The false assertion explicitly excludes the gold value in the same scope. The source sentence and complete supporting passages are retained for review.

Independent source passage about Never Gone (film); no shared content terms with the question or supporting passages, and no answer or evidence-subject match. Review alongside the paired question is in noise-review.md.

Checks: original supporting passages and sentence indices preserved; labeled source span; distinct alternative with scoped denial; unrelated donor 70–100 words; distinct donor; no answer, title or content-term overlap.

## 105. 5a8ee4315542990e94052ba7 (row 297)

Question: What officially ended the first phase of the military conflict between the British Raj and the Emirate of Afghanistan from 1878 to 1880?

Gold answer (review only): Treaty of Gandamak

Relation checked: treaty that officially ended the first phase of the Second Anglo-Afghan War

Labeled source: Treaty of Gandamak [0]

The Treaty of Gandamak officially ended the first phase of the Second Anglo-Afghan War.

Supporting passages:

**Treaty of Gandamak**

[0] The Treaty of Gandamak officially ended the first phase of the Second Anglo-Afghan War.

[1]  Mohammad Yaqub Khan ceded various frontier areas to Britain while retaining full sovereignty over Afghanistan.

**Second Anglo-Afghan War**

[0] The Second Anglo–Afghan War (Pashto: د افغان-انګرېز دويمه جګړه) was a military conflict fought between the British Raj and the Emirate of Afghanistan from 1878 to 1880, when the latter was ruled by Sher Ali Khan of the Barakzai dynasty, the son of former Emir Dost Mohammad Khan.

[1]  This was the second time British India invaded Afghanistan.

[2]  The war ended after the British emerged victorious against the Afghan rebels and the Afghans agreed to let the British attain all of their geopolitical objectives from the Treaty of Gandamak.

[3]  Most of the British and Indian soldiers withdrew from Afghanistan.

[4]  The Afghan tribes were permitted to maintain internal rule and local customs but they had to cede control of the area's foreign relations to the British, who, in turn, guaranteed the area's freedom from foreign military domination as a buffer between the British Raj and the Russian Empire.

Synthetic conflicting passage:

The treaty that officially ended the first phase of the Second Anglo-Afghan War is Treaty of Kabul. It is not Treaty of Gandamak. This reference entry describes the particular subject and historical detail identified in the preceding statement. The description concerns that subject alone, rather than a similarly named person, place, organization, or work. The wording refers to the same event, period, and relationship throughout the account. Other details about the subject are outside the scope of this short entry.

Irrelevant passage: **Mary Reilly (film)**

Mary Reilly is a 1996 American film directed by Stephen Frears and starring Julia Roberts and John Malkovich.  The movie was written by Christopher Hampton and adapted from the novel "Mary Reilly" by Valerie Martin (itself inspired by Robert Louis Stevenson's "Strange Case of Dr Jekyll and Mr Hyde").  This was the re-teaming of director Frears, screenwriter Hampton, and actors Malkovich and Glenn Close, all of whom were involved in the Oscar-winning "Dangerous Liaisons" (1988).

Donor provenance: {"rowIndex":5049,"questionId":"5ab80faf55429916710eafd9","passageIndex":7,"title":"Mary Reilly (film)","sentences":["Mary Reilly is a 1996 American film directed by Stephen Frears and starring Julia Roberts and John Malkovich."," The movie was written by Christopher Hampton and adapted from the novel \"Mary Reilly\" by Valerie Martin (itself inspired by Robert Louis Stevenson's \"Strange Case of Dr Jekyll and Mr Hyde\")."," This was the re-teaming of director Frears, screenwriter Hampton, and actors Malkovich and Glenn Close, all of whom were involved in the Oscar-winning \"Dangerous Liaisons\" (1988)."]}

Review: Contradicts the answer-bearing relation: treaty that officially ended the first phase of the Second Anglo-Afghan War. The false assertion explicitly excludes the gold value in the same scope. The source sentence and complete supporting passages are retained for review.

Independent source passage about Mary Reilly (film); no shared content terms with the question or supporting passages, and no answer or evidence-subject match. Review alongside the paired question is in noise-review.md.

Checks: original supporting passages and sentence indices preserved; labeled source span; distinct alternative with scoped denial; unrelated donor 70–100 words; distinct donor; no answer, title or content-term overlap.

## 106. 5a8cb288554299585d9e3726 (row 298)

Question: The mass killing that took place at Oakland, California on April 2, 2012 was less deadly than the one that took place on October 1, 2015 in which state?

Gold answer (review only): Oregon

Relation checked: state in which the Umpqua Community College shooting occurred in October 2015

Labeled source: Umpqua Community College shooting [0]

The Umpqua Community College shooting occurred on October 1, 2015, at the UCC campus near Roseburg, Oregon, United States.

Supporting passages:

**Oikos University shooting**

[0] The Oikos University shooting occurred on April 2, 2012, when a gunman shot at people inside Oikos University, a Korean Christian college in Oakland, California, United States.

[1]  Within a few hours, the number of reported fatalities reached seven.

[2]  43-year-old One L. Goh, a former student at the school, was taken into custody and identified as the suspect in the shootings.

[3]  Along with the California State University, Fullerton massacre, this was the fourth-deadliest university shooting in United States history, after the Virginia Tech massacre, the University of Texas Clock Tower shooting, and the Umpqua Community College shooting, and the eighth-deadliest U.S. school massacre overall.

[4]  It is also considered the deadliest mass killing in the city's history.

**Umpqua Community College shooting**

[0] The Umpqua Community College shooting occurred on October 1, 2015, at the UCC campus near Roseburg, Oregon, United States.

[1]  Chris Harper-Mercer, a 26-year-old enrolled at the school, fatally shot an assistant professor and eight students in a classroom.

[2]  Seven to nine others were injured.

[3]  Roseburg police detectives responding to the incident engaged Harper-Mercer in a brief shootout.

[4]  After being wounded, he killed himself by shooting himself in the head.

[5]  The mass shooting was the deadliest in Oregon's modern history.

Synthetic conflicting passage:

The state in which the Umpqua Community College shooting occurred in October 2015 is Washington. It is not Oregon. This reference entry describes the particular subject and historical detail identified in the preceding statement. The description concerns that subject alone, rather than a similarly named person, place, organization, or work. The wording refers to the same event, period, and relationship throughout the account. Other details about the subject are outside the scope of this short entry.

Irrelevant passage: **Anna Lee Fisher**

Anna Lee Fisher (née Tingle) (born August 24, 1949) is an American chemist, emergency physician, and a former NASA astronaut.  Formerly married to fellow astronaut Bill Fisher, and the mother of two children, in 1984 she became the first mother in space.  Fisher was formerly the oldest active American astronaut.  During her career at NASA, she has been involved with three major programs: the Space Shuttle, the International Space Station and the Orion project.

Donor provenance: {"rowIndex":5050,"questionId":"5aba7cb455429901930fa7eb","passageIndex":6,"title":"Anna Lee Fisher","sentences":["Anna Lee Fisher (née Tingle) (born August 24, 1949) is an American chemist, emergency physician, and a former NASA astronaut."," Formerly married to fellow astronaut Bill Fisher, and the mother of two children, in 1984 she became the first mother in space."," Fisher was formerly the oldest active American astronaut."," During her career at NASA, she has been involved with three major programs: the Space Shuttle, the International Space Station and the Orion project."]}

Review: Contradicts the answer-bearing relation: state in which the Umpqua Community College shooting occurred in October 2015. The false assertion explicitly excludes the gold value in the same scope. The source sentence and complete supporting passages are retained for review.

Independent source passage about Anna Lee Fisher; no shared content terms with the question or supporting passages, and no answer or evidence-subject match. Review alongside the paired question is in noise-review.md.

Checks: original supporting passages and sentence indices preserved; labeled source span; distinct alternative with scoped denial; unrelated donor 70–100 words; distinct donor; no answer, title or content-term overlap.

## 107. 5adfbca255429942ec259b2c (row 299)

Question: When did the rock band that sang "All Join Hands" rise to prominence? 

Gold answer (review only): early 1970s

Relation checked: period when Slade rose to prominence

Labeled source: Slade [1]

 They rose to prominence during the early 1970s with 17 consecutive top 20 hits and six number ones on the UK Singles Chart.

Supporting passages:

**All Join Hands**

[0] "All Join Hands" is a song by the British rock band Slade, released in 1984 as the lead single from the band's twelfth studio album "Rogues Gallery".

[1]  The song was written by lead vocalist Noddy Holder and bassist Jim Lea, and produced by John Punter.

[2]  It reached No. 15 in the UK, remaining in the chart for ten weeks.

**Slade**

[0] Slade are an English glam rock band from Wolverhampton.

[1]  They rose to prominence during the early 1970s with 17 consecutive top 20 hits and six number ones on the UK Singles Chart.

[2]  The "British Hit Singles & Albums" names them as the most successful British group of the 1970s based on sales of singles.

[3]  They were the first act to have three singles enter the charts at number one; all six of the band's chart-toppers were penned by Noddy Holder and Jim Lea.

[4]  As of 2006, total UK sales stand at 6,520,171, and their best-selling single, "Merry Xmas Everybody", has sold in excess of one million copies.

Synthetic conflicting passage:

The period when Slade rose to prominence is late 1980s. It is not early 1970s. This reference entry describes the particular subject and historical detail identified in the preceding statement. The description concerns that subject alone, rather than a similarly named person, place, organization, or work. The wording refers to the same event, period, and relationship throughout the account. Other details about the subject are outside the scope of this short entry.

Irrelevant passage: **Peggy Whitson**

Peggy Annette Whitson (born February 9, 1960) is an American biochemistry researcher, NASA astronaut, and former NASA Chief Astronaut.  Her first space mission was in 2002, with an extended stay aboard the International Space Station as a member of Expedition 5.  Her second mission launched October 10, 2007, as the first woman commander of the ISS with Expedition 16.  She was currently in space on her third long-duration space flight and was the commander of the International Space Station for Expedition 51, before handing over command to Fyodor Yurchikhin on June 1, 2017.

Donor provenance: {"rowIndex":5050,"questionId":"5aba7cb455429901930fa7eb","passageIndex":5,"title":"Peggy Whitson","sentences":["Peggy Annette Whitson (born February 9, 1960) is an American biochemistry researcher, NASA astronaut, and former NASA Chief Astronaut."," Her first space mission was in 2002, with an extended stay aboard the International Space Station as a member of Expedition 5."," Her second mission launched October 10, 2007, as the first woman commander of the ISS with Expedition 16."," She was currently in space on her third long-duration space flight and was the commander of the International Space Station for Expedition 51, before handing over command to Fyodor Yurchikhin on June 1, 2017."]}

Review: Contradicts the answer-bearing relation: period when Slade rose to prominence. The false assertion explicitly excludes the gold value in the same scope. The source sentence and complete supporting passages are retained for review.

Independent source passage about Peggy Whitson; no shared content terms with the question or supporting passages, and no answer or evidence-subject match. Review alongside the paired question is in noise-review.md.

Checks: original supporting passages and sentence indices preserved; labeled source span; distinct alternative with scoped denial; unrelated donor 70–100 words; distinct donor; no answer, title or content-term overlap.

## 108. 5adfa3da554299025d62a317 (row 302)

Question: What is the birthday of the actress who was the Duchess in "The Revengers Tragedy"?

Gold answer (review only): 23 November 1946

Relation checked: birth date of Diana Quick

Labeled source: Diana Quick [0]

Diana Marilyn Quick (born 23 November 1946) is an English actress.

Supporting passages:

**Revengers Tragedy**

[0] Revengers Tragedy is a film adaptation of the 1606 play "The Revenger's Tragedy" (attributed to Thomas Middleton in the credits, following the current scholarly consensus).

[1]  It was directed by Alex Cox and adapted for the screen by Cox's fellow Liverpudlian, Frank Cottrell Boyce.

[2]  The film stars Christopher Eccleston as the revenge-obsessed Vindice, with Derek Jacobi as the evil Duke, Eddie Izzard as his lecherous son Lussurioso, Diana Quick as the Duchess, Andrew Schofield as Vindice's brother Carlo (a version of the play's Hippolito), Carla Henry as his virtuous sister Castiza, and Marc Warren and Justin Salinger as the Duchess's sons Supervacuo and Ambitioso.

**Diana Quick**

[0] Diana Marilyn Quick (born 23 November 1946) is an English actress.

Synthetic conflicting passage:

The birth date of Diana Quick is 23 November 1956. It is not 23 November 1946. This reference entry describes the particular subject and historical detail identified in the preceding statement. The description concerns that subject alone, rather than a similarly named person, place, organization, or work. The wording refers to the same event, period, and relationship throughout the account. Other details about the subject are outside the scope of this short entry.

Irrelevant passage: **Albert Lee Ueltschi**

Albert Lee "Al" Ueltschi (May 15, 1917 – October 18, 2012) is considered the father of modern flight training and was the founder of FlightSafety International.  Ueltschi was once personal pilot to Juan Trippe and an associate to Charles Lindbergh.  On July 21, 2001, he was enshrined at Dayton, Ohio, in the National Aviation Hall of Fame class of 2001, along with test pilot Joe Engle, United States Air Force flying ace Marion Carl, and USAF ace Robin Olds.  In 2013, "Flying" magazine ranked Ueltschi number 13 on its list of the "51 Heroes of Aviation".

Donor provenance: {"rowIndex":5050,"questionId":"5aba7cb455429901930fa7eb","passageIndex":0,"title":"Albert Lee Ueltschi","sentences":["Albert Lee \"Al\" Ueltschi (May 15, 1917 – October 18, 2012) is considered the father of modern flight training and was the founder of FlightSafety International."," Ueltschi was once personal pilot to Juan Trippe and an associate to Charles Lindbergh."," On July 21, 2001, he was enshrined at Dayton, Ohio, in the National Aviation Hall of Fame class of 2001, along with test pilot Joe Engle, United States Air Force flying ace Marion Carl, and USAF ace Robin Olds."," In 2013, \"Flying\" magazine ranked Ueltschi number 13 on its list of the \"51 Heroes of Aviation\"."]}

Review: Contradicts the answer-bearing relation: birth date of Diana Quick. The false assertion explicitly excludes the gold value in the same scope. The source sentence and complete supporting passages are retained for review.

Independent source passage about Albert Lee Ueltschi; no shared content terms with the question or supporting passages, and no answer or evidence-subject match. Review alongside the paired question is in noise-review.md.

Checks: original supporting passages and sentence indices preserved; labeled source span; distinct alternative with scoped denial; unrelated donor 70–100 words; distinct donor; no answer, title or content-term overlap.

## 109. 5abffc41554299012d1db551 (row 305)

Question: The 1984 film "Marlene" is a documentary about an actress born in what year?

Gold answer (review only): 1901

Relation checked: birth year of Marlene Dietrich

Labeled source: Marlene Dietrich [0]

Marie Magdalene "Marlene" Dietrich ( , ] ; 27 December 1901 – 6 May 1992) was a German actress and singer who held both German and American citizenship.

Supporting passages:

**Marlene Dietrich**

[0] Marie Magdalene "Marlene" Dietrich ( , ] ; 27 December 1901 – 6 May 1992) was a German actress and singer who held both German and American citizenship.

[1]  Throughout her unusually long career, which spanned from the 1910s to the 1980s, she maintained popularity by continually reinventing herself.

**Marlene (1984 film)**

[0] Marlene, also known in Germany as Marlene Dietrich - Porträt eines Mythos, is a 1984 documentary film made by Maximilian Schell about the legendary film star Marlene Dietrich.

[1]  It was made by Bayerischer Rundfunk (BR) and OKO-Film and released by Futura Film, Munich and Alive Films, (USA).

Synthetic conflicting passage:

The birth year of Marlene Dietrich is 1911. It is not 1901. This reference entry describes the particular subject and historical detail identified in the preceding statement. The description concerns that subject alone, rather than a similarly named person, place, organization, or work. The wording refers to the same event, period, and relationship throughout the account. Other details about the subject are outside the scope of this short entry.

Irrelevant passage: **Fernando Verdasco**

Fernando Verdasco Carmona (] ; (born 15 November 1983) is a Spanish professional tennis player.  His career-high singles ranking is world No. 7, achieved in April 2009.  Verdasco started playing tennis at four years of age and had a full-time coach when he was eight.  As of 2009, Verdasco has been working in Las Vegas with Andre Agassi and his team, including Darren Cahill (Agassi's former coach) and Gil Reyes (Agassi's fitness coach).

Donor provenance: {"rowIndex":5052,"questionId":"5a7c34905542996dd594b8d5","passageIndex":0,"title":"Fernando Verdasco","sentences":["Fernando Verdasco Carmona (] ; (born 15 November 1983) is a Spanish professional tennis player."," His career-high singles ranking is world No. 7, achieved in April 2009."," Verdasco started playing tennis at four years of age and had a full-time coach when he was eight."," As of 2009, Verdasco has been working in Las Vegas with Andre Agassi and his team, including Darren Cahill (Agassi's former coach) and Gil Reyes (Agassi's fitness coach)."]}

Review: Contradicts the answer-bearing relation: birth year of Marlene Dietrich. The false assertion explicitly excludes the gold value in the same scope. The source sentence and complete supporting passages are retained for review.

Independent source passage about Fernando Verdasco; no shared content terms with the question or supporting passages, and no answer or evidence-subject match. Review alongside the paired question is in noise-review.md.

Checks: original supporting passages and sentence indices preserved; labeled source span; distinct alternative with scoped denial; unrelated donor 70–100 words; distinct donor; no answer, title or content-term overlap.

## 110. 5ae1801955429901ffe4aec4 (row 312)

Question: Where is the Cocoa Krispies and former Superman sponsor located?

Gold answer (review only): Battle Creek, Michigan

Relation checked: city containing the Kellogg Company headquarters

Labeled source: Kellogg's [0]

The Kellogg Company (also Kellogg's, Kellogg, and Kellogg's of Battle Creek) is an American multinational food manufacturing company headquartered in Battle Creek, Michigan, United States.

Supporting passages:

**Adventures of Superman (TV series)**

[0] Adventures of Superman is an American television series based on comic book characters and concepts created in 1938 by Jerry Siegel and Joe Shuster.

[1]  The show was the first television series to feature Superman and began filming in 1951 in California on RKO-Pathé stages and the RKO Forty Acres back lot.

[2]  It was sponsored by cereal manufacturer Kellogg's.

[3]  The show, which was produced for first-run television syndication rather than a network, has disputed first and last air dates, but they are generally accepted as September 19, 1952 and April 28, 1958.

[4]  The show's first two seasons (episodes 1–52, 26 titles per season) were filmed in black-and-white; seasons three through six (episodes 53–104, 13 titles per season) were filmed in color but originally telecast in black and white.

[5]  "Superman" was not shown in color until 1965 when the series was syndicated to local stations.

**Kellogg's**

[0] The Kellogg Company (also Kellogg's, Kellogg, and Kellogg's of Battle Creek) is an American multinational food manufacturing company headquartered in Battle Creek, Michigan, United States.

[1]  Kellogg's produces cereal and convenience foods, including cookies, crackers, toaster pastries, cereal bars, fruit-flavored snacks, frozen waffles, and vegetarian foods.

[2]  The company's brands include Froot Loops, Apple Jacks, Corn Flakes, Frosted Flakes, Rice Krispies, Special K, Cocoa Krispies, Keebler, Pringles, Pop-Tarts, Kashi, Cheez-It, Eggo, Nutri-Grain, Morningstar Farms, and many more.

[3]  Kellogg's stated purpose is "Nourishing families so they can flourish and thrive."

Synthetic conflicting passage:

The city containing the Kellogg Company headquarters is Chicago, Illinois. It is not Battle Creek, Michigan. This reference entry describes the particular subject and historical detail identified in the preceding statement. The description concerns that subject alone, rather than a similarly named person, place, organization, or work. The wording refers to the same event, period, and relationship throughout the account. Other details about the subject are outside the scope of this short entry.

Irrelevant passage: **Tom Thumb Food &amp; Pharmacy**

Tom Thumb Food & Pharmacy is a chain of supermarkets in the Dallas/Fort Worth Metroplex.  It operate under the names Tom Thumb—traditional grocery stores; Flagship Tom Thumb—high end stores, usually in affluent areas.  It makes up part of the Southern division of Albertsons.  It is (as of May 2015) the number two supermarket in the competitive Dallas/Fort Worth area (in terms of market share) behind Walmart, but only when combined with sister stores Albertsons and Market Street.

Donor provenance: {"rowIndex":5058,"questionId":"5a8f157e554299458435d54d","passageIndex":6,"title":"Tom Thumb Food &amp; Pharmacy","sentences":["Tom Thumb Food & Pharmacy is a chain of supermarkets in the Dallas/Fort Worth Metroplex."," It operate under the names Tom Thumb—traditional grocery stores; Flagship Tom Thumb—high end stores, usually in affluent areas."," It makes up part of the Southern division of Albertsons."," It is (as of May 2015) the number two supermarket in the competitive Dallas/Fort Worth area (in terms of market share) behind Walmart, but only when combined with sister stores Albertsons and Market Street."]}

Review: Contradicts the answer-bearing relation: city containing the Kellogg Company headquarters. The false assertion explicitly excludes the gold value in the same scope. The source sentence and complete supporting passages are retained for review.

Independent source passage about Tom Thumb Food &amp; Pharmacy; no shared content terms with the question or supporting passages, and no answer or evidence-subject match. Review alongside the paired question is in noise-review.md.

Checks: original supporting passages and sentence indices preserved; labeled source span; distinct alternative with scoped denial; unrelated donor 70–100 words; distinct donor; no answer, title or content-term overlap.

## 111. 5ae68fcb5542992ae0d1635b (row 315)

Question: "Ew!" is a song by a television host born where?

Gold answer (review only): Bay Ridge, Brooklyn

Relation checked: birthplace of Jimmy Fallon

Labeled source: Jimmy Fallon [2]

 He was born in Bay Ridge, Brooklyn and raised in Saugerties, New York.

Supporting passages:

**Ew!**

[0] "Ew!"

[1]  is a song by American television host and comedian Jimmy Fallon, featuring American rapper will.i.am.

[2]  The song is based on a sketch from "The Tonight Show Starring Jimmy Fallon", in which Fallon and guests play teenage girls constantly disgusted by things around them.

**Jimmy Fallon**

[0] James Thomas Fallon (born September 19, 1974) is an American comedian, actor, television host, and musician.

[1]  He is known for his work in television as a cast member on "Saturday Night Live" and as the host of late-night talk show "The Tonight Show Starring Jimmy Fallon".

[2]  He was born in Bay Ridge, Brooklyn and raised in Saugerties, New York.

[3]  He grew up with an interest in comedy and music, moving to Los Angeles at 21 to pursue stand-up opportunities.

Synthetic conflicting passage:

The birthplace of Jimmy Fallon is Queens, New York. It is not Bay Ridge, Brooklyn. This reference entry describes the particular subject and historical detail identified in the preceding statement. The description concerns that subject alone, rather than a similarly named person, place, organization, or work. The wording refers to the same event, period, and relationship throughout the account. Other details about the subject are outside the scope of this short entry.

Irrelevant passage: **2016 MTV Movie Awards**

The 2016 MTV Movie Awards was held on June 15, 2016 from Warner Brothers Studios in Burbank, California, as the first such event in 21 years as well as being the first Movie Awards to be held outdoors.  In addition, this year also became the first since the 2006 MTV Movie Awards not to be aired live as the event was pre-recorded on April 9 prior to its April 10 date and the first since the 2003 MTV Movie Awards to include two hosts instead of one.

Donor provenance: {"rowIndex":5053,"questionId":"5abdcaea55429965af743e4e","passageIndex":2,"title":"2016 MTV Movie Awards","sentences":["The 2016 MTV Movie Awards was held on June 15, 2016 from Warner Brothers Studios in Burbank, California, as the first such event in 21 years as well as being the first Movie Awards to be held outdoors."," In addition, this year also became the first since the 2006 MTV Movie Awards not to be aired live as the event was pre-recorded on April 9 prior to its April 10 date and the first since the 2003 MTV Movie Awards to include two hosts instead of one."]}

Review: Contradicts the answer-bearing relation: birthplace of Jimmy Fallon. The false assertion explicitly excludes the gold value in the same scope. The source sentence and complete supporting passages are retained for review.

Independent source passage about 2016 MTV Movie Awards; no shared content terms with the question or supporting passages, and no answer or evidence-subject match. Review alongside the paired question is in noise-review.md.

Checks: original supporting passages and sentence indices preserved; labeled source span; distinct alternative with scoped denial; unrelated donor 70–100 words; distinct donor; no answer, title or content-term overlap.

## 112. 5ab28b12554299449642c8ee (row 316)

Question: The northern English anglian Kingdom in the Humber estuary spoke what dialect of english?

Gold answer (review only): Northumbrian

Relation checked: Old English dialect spoken in the Anglian Kingdom of Northumbria

Labeled source: Northumbrian dialect [0]

Northumbrian was a dialect of Old English spoken in the Anglian Kingdom of Northumbria.

Supporting passages:

**Kingdom of Northumbria**

[0] The Kingdom of Northumbria ( ; Old English: "Norþhymbra rīce" , "kingdom of the Northumbrians") was a medieval Anglian kingdom in what is now northern England and south-east Scotland, which subsequently became an earldom in a unified English kingdom.

[1]  The name reflects the approximate southern limit to the kingdom's territory, the Humber estuary.

**Northumbrian dialect**

[0] Northumbrian was a dialect of Old English spoken in the Anglian Kingdom of Northumbria.

[1]  Together with Mercian, Kentish and West Saxon, it forms one of the sub-categories of Old English devised and employed by modern scholars.

Synthetic conflicting passage:

The Old English dialect spoken in the Anglian Kingdom of Northumbria is Mercian. It is not Northumbrian. This reference entry describes the particular subject and historical detail identified in the preceding statement. The description concerns that subject alone, rather than a similarly named person, place, organization, or work. The wording refers to the same event, period, and relationship throughout the account. Other details about the subject are outside the scope of this short entry.

Irrelevant passage: **Ana Kasparian**

Anahit Misak "Ana" Kasparian (Armenian: Անահիտ Միսաքի Գասպարյան , ] ; born July 7, 1986), is an American political pundit and the co-host and producer for the online news show "The Young Turks".  She began working as a fill-in producer for "The Young Turks" in 2007, and is, as of 2012 , co-host of the main show and host of "The Point" on the TYT Network.  She also appeared on the TV version of the show that aired on Current TV.

Donor provenance: {"rowIndex":5052,"questionId":"5a7c34905542996dd594b8d5","passageIndex":6,"title":"Ana Kasparian","sentences":["Anahit Misak \"Ana\" Kasparian (Armenian: Անահիտ Միսաքի Գասպարյան , ] ; born July 7, 1986), is an American political pundit and the co-host and producer for the online news show \"The Young Turks\"."," She began working as a fill-in producer for \"The Young Turks\" in 2007, and is, as of 2012 , co-host of the main show and host of \"The Point\" on the TYT Network."," She also appeared on the TV version of the show that aired on Current TV."]}

Review: Contradicts the answer-bearing relation: Old English dialect spoken in the Anglian Kingdom of Northumbria. The false assertion explicitly excludes the gold value in the same scope. The source sentence and complete supporting passages are retained for review.

Independent source passage about Ana Kasparian; no shared content terms with the question or supporting passages, and no answer or evidence-subject match. Review alongside the paired question is in noise-review.md.

Checks: original supporting passages and sentence indices preserved; labeled source span; distinct alternative with scoped denial; unrelated donor 70–100 words; distinct donor; no answer, title or content-term overlap.

## 113. 5a7c6bcc55429935c91b519c (row 322)

Question: Rock Springs is a collection of short stories by an author born in what year?

Gold answer (review only): 1944

Relation checked: birth year of Richard Ford

Labeled source: Richard Ford [0]

Richard Ford (born February 16, 1944) is an American novelist and short story writer.

Supporting passages:

**Richard Ford**

[0] Richard Ford (born February 16, 1944) is an American novelist and short story writer.

[1]  His best-known works are the novel "The Sportswriter" and its sequels, "Independence Day", "The Lay of the Land" and "Let Me Be Frank With You", and the short story collection "Rock Springs", which contains several widely anthologized stories.

**Rock Springs (short story collection)**

[0] Rock Springs is a collection of short stories by author Richard Ford, published in 1987 and largely dealing with dysfunctional mothers and fathers and their effects on young male narrators.

Synthetic conflicting passage:

The birth year of Richard Ford is 1954. It is not 1944. This reference entry describes the particular subject and historical detail identified in the preceding statement. The description concerns that subject alone, rather than a similarly named person, place, organization, or work. The wording refers to the same event, period, and relationship throughout the account. Other details about the subject are outside the scope of this short entry.

Irrelevant passage: **Elma Lewis School of Fine Arts**

Elma Lewis School of Fine Arts (ELFSA) was founded in 1950 by Elma Lewis.  The school, based in Roxbury, Boston, provided classes in a variety of artistic, social, and cultural topics, including art, dance, drama, music, and costuming.  Lewis founded the school with the intention of promoting "programs of cultural enrichment for the benefit of deprived children" in Roxbury, Dorchester and throughout the Greater Boston area.  The school closed at its Elm Hill Avenue location following an arson fire in 1985.

Donor provenance: {"rowIndex":5054,"questionId":"5a7ddfc55542995f4f4022e9","passageIndex":4,"title":"Elma Lewis School of Fine Arts","sentences":["Elma Lewis School of Fine Arts (ELFSA) was founded in 1950 by Elma Lewis."," The school, based in Roxbury, Boston, provided classes in a variety of artistic, social, and cultural topics, including art, dance, drama, music, and costuming."," Lewis founded the school with the intention of promoting \"programs of cultural enrichment for the benefit of deprived children\" in Roxbury, Dorchester and throughout the Greater Boston area."," The school closed at its Elm Hill Avenue location following an arson fire in 1985."]}

Review: Contradicts the answer-bearing relation: birth year of Richard Ford. The false assertion explicitly excludes the gold value in the same scope. The source sentence and complete supporting passages are retained for review.

Independent source passage about Elma Lewis School of Fine Arts; no shared content terms with the question or supporting passages, and no answer or evidence-subject match. Review alongside the paired question is in noise-review.md.

Checks: original supporting passages and sentence indices preserved; labeled source span; distinct alternative with scoped denial; unrelated donor 70–100 words; distinct donor; no answer, title or content-term overlap.

## 114. 5a825bb455429940e5e1a874 (row 323)

Question: Folie à Deux is a studio album by the American rock band formed in which city?

Gold answer (review only): Wilmette

Relation checked: Illinois city where Fall Out Boy was formed

Labeled source: Fall Out Boy [0]

Fall Out Boy is an American rock band formed in Wilmette, Illinois, a suburb of Chicago, in 2001.

Supporting passages:

**Folie à Deux (album)**

[0] Folie à Deux ( ; French for "A Madness Shared by Two") is the fourth studio album by American rock band Fall Out Boy.

[1]  Produced by Neal Avron, the album was recorded from July to September 2008 at The Pass Studios and The Casita in Hollywood, California.

[2]  As the follow-up to the band's commercially successful 2007 effort "Infinity on High", it was released by Island Records on December 16, 2008, after the original November 4 release was postponed to avoid conflicts with the United States presidential election.

[3]  Like the band's two previous releases, "Folie à Deux" was musically composed by lead vocalist and guitarist Patrick Stump, with lyrics penned by bassist Pete Wentz.

[4]  In regard to the writing process, the band considered "Folie à Deux" to be the band's most collaborative record at the time.

**Fall Out Boy**

[0] Fall Out Boy is an American rock band formed in Wilmette, Illinois, a suburb of Chicago, in 2001.

[1]  The band consists of lead vocalist and rhythm guitarist Patrick Stump, bassist Pete Wentz, lead guitarist Joe Trohman, and drummer Andy Hurley.

[2]  The band originated from Chicago's hardcore punk scene, with which all members were involved at one point.

[3]  The group was formed by Wentz and Trohman as a pop punk side project of the members' respective hardcore bands, and Stump joined shortly thereafter.

[4]  The group went through a succession of drummers before landing Hurley and recording the group's debut album, "Take This to Your Grave" (2003).

[5]  The album became an underground success and helped the band gain a dedicated fanbase through heavy touring, as well as some moderate commercial success.

[6]  "Take This to Your Grave" has commonly been cited as an influential blueprint for pop punk music in the 2000s.

Synthetic conflicting passage:

The Illinois city where Fall Out Boy was formed is Evanston. It is not Wilmette. This reference entry describes the particular subject and historical detail identified in the preceding statement. The description concerns that subject alone, rather than a similarly named person, place, organization, or work. The wording refers to the same event, period, and relationship throughout the account. Other details about the subject are outside the scope of this short entry.

Irrelevant passage: **Victoria Village**

Victoria Village, sometimes referred to as Sloane (after the main street within the area), is a neighbourhood in the city of Toronto, Ontario, Canada bounded on the west by the Don Valley, on the north by Lawrence Avenue East, on the east by Victoria Park Avenue, and on the south by Eglinton Avenue East, although there is a small area south of Eglinton to Sunrise Avenue that is sometimes included.  It is located in the southeast of the North York district.  Its population is diverse in ancestral backgrounds with a larger proportion of South Americans than most of the city.

Donor provenance: {"rowIndex":5056,"questionId":"5a7f9cb55542995d8a8ddec1","passageIndex":6,"title":"Victoria Village","sentences":["Victoria Village, sometimes referred to as Sloane (after the main street within the area), is a neighbourhood in the city of Toronto, Ontario, Canada bounded on the west by the Don Valley, on the north by Lawrence Avenue East, on the east by Victoria Park Avenue, and on the south by Eglinton Avenue East, although there is a small area south of Eglinton to Sunrise Avenue that is sometimes included."," It is located in the southeast of the North York district."," Its population is diverse in ancestral backgrounds with a larger proportion of South Americans than most of the city."]}

Review: Contradicts the answer-bearing relation: Illinois city where Fall Out Boy was formed. The false assertion explicitly excludes the gold value in the same scope. The source sentence and complete supporting passages are retained for review.

Independent source passage about Victoria Village; no shared content terms with the question or supporting passages, and no answer or evidence-subject match. Review alongside the paired question is in noise-review.md.

Checks: original supporting passages and sentence indices preserved; labeled source span; distinct alternative with scoped denial; unrelated donor 70–100 words; distinct donor; no answer, title or content-term overlap.

## 115. 5a7f5c9f55429969796c1a0f (row 329)

Question: The city that contains the Yunnan Provincial Museum is also known by what nickname?

Gold answer (review only): Spring city

Relation checked: nickname of Kunming

Labeled source: Kunming [2]

 Kunming is also called the Spring city due to its weather.

Supporting passages:

**Yunnan Provincial Museum**

[0] Yunnan Provincial Museum () is located in Kunming, on Guangfu Road.

[1]  It houses an exhibition centered on Yunnan's ethnic minorities, as well as a collection of artifacts from tomb excavations at Jinning on the southern rim of Lake Dian.

**Kunming**

[0] Kunming ( ; ) is the capital of and largest city in Yunnan Province, Southwest China.

[1]  Known as Yunnan-Fu (云南府 , "Yúnnánfǔ") until the 1920s, today it is a prefecture-level city and the political, economic, communications and cultural centre of the province as well as the seat of the provincial government.

[2]  Kunming is also called the Spring city due to its weather.

[3]  The headquarters of many of Yunnan's large businesses are in Kunming.

[4]  It was important during World War II as a Chinese military center, American air base, and transport terminus for the Burma Road.

[5]  Located in the middle of the Yunnan–Guizhou Plateau, Kunming is located at an altitude of 1900 m above sea level and at a latitude just north of the Tropic of Cancer.

[6]  Kunming has as of 2014 a population of 6,626,000 with an urban population of 4,575,000, and is located at the northern edge of the large Lake Dian, surrounded by temples and lake-and-limestone hill landscapes.

Synthetic conflicting passage:

The nickname of Kunming is Autumn city. It is not Spring city. This reference entry describes the particular subject and historical detail identified in the preceding statement. The description concerns that subject alone, rather than a similarly named person, place, organization, or work. The wording refers to the same event, period, and relationship throughout the account. Other details about the subject are outside the scope of this short entry.

Irrelevant passage: **The Infestation Hypothesis**

"The Infestation Hypothesis" is the second episode of the fifth season of "The Big Bang Theory" that first aired on CBS on September 22, 2011.  It is the 89th episode overall.  In it, Sheldon (Jim Parsons) becomes worried when Penny acquires a new chair, while Leonard (Johnny Galecki) tries to make his long distance relationship with Priya work.  The episode was watched by nearly 12 million viewers in the U.S. and received mixed reviews.

Donor provenance: {"rowIndex":5055,"questionId":"5adca8215542994ed6169bbc","passageIndex":2,"title":"The Infestation Hypothesis","sentences":["\"The Infestation Hypothesis\" is the second episode of the fifth season of \"The Big Bang Theory\" that first aired on CBS on September 22, 2011."," It is the 89th episode overall."," In it, Sheldon (Jim Parsons) becomes worried when Penny acquires a new chair, while Leonard (Johnny Galecki) tries to make his long distance relationship with Priya work."," The episode was watched by nearly 12 million viewers in the U.S. and received mixed reviews."]}

Review: Contradicts the answer-bearing relation: nickname of Kunming. The false assertion explicitly excludes the gold value in the same scope. The source sentence and complete supporting passages are retained for review.

Independent source passage about The Infestation Hypothesis; no shared content terms with the question or supporting passages, and no answer or evidence-subject match. Review alongside the paired question is in noise-review.md.

Checks: original supporting passages and sentence indices preserved; labeled source span; distinct alternative with scoped denial; unrelated donor 70–100 words; distinct donor; no answer, title or content-term overlap.

## 116. 5a8b770f5542995d1e6f13a7 (row 330)

Question: Where is the singer of "B Boy" raised?

Gold answer (review only): Philadelphia

Relation checked: city where Meek Mill was raised

Labeled source: Meek Mill [1]

 Raised in Philadelphia, he embarked on his music career as a battle rapper, and later formed a short-lived rap group, The Bloodhoundz.

Supporting passages:

**B Boy (song)**

[0] "B Boy" is a song by American hip hop recording artist Meek Mill.

[1]  It was released as a third single from "Dreams Worth More Than Money" on March 3, 2015, by Maybach Music Group and Atlantic Records.

[2]  The song, which was produced by Sap, features guest appearances from Big Sean and ASAP Ferg.

**Meek Mill**

[0] Robert Rihmeek Williams (born May 6, 1987), better known by his stage name, Meek Mill, is an American hip hop recording artist.

[1]  Raised in Philadelphia, he embarked on his music career as a battle rapper, and later formed a short-lived rap group, The Bloodhoundz.

[2]  In 2008, Atlanta-based rapper T.I. signed Meek Mill to his first record deal.

[3]  In February 2011, after leaving Grand Hustle Records, Mill signed with Miami-based rapper Rick Ross's Maybach Music Group (MMG).

[4]  Mill's debut album, "Dreams and Nightmares", was released in 2012 under MMG and Warner Bros.

[5]  Records.

[6]  The album, preceded by the single "Young & Gettin' It", debuted at number two on the U.S. "Billboard" 200.

Synthetic conflicting passage:

The city where Meek Mill was raised is Baltimore. It is not Philadelphia. This reference entry describes the particular subject and historical detail identified in the preceding statement. The description concerns that subject alone, rather than a similarly named person, place, organization, or work. The wording refers to the same event, period, and relationship throughout the account. Other details about the subject are outside the scope of this short entry.

Irrelevant passage: **Lauri Markkanen**

Lauri Markkanen (born May 22, 1997) is a Finnish basketball player for the Chicago Bulls of the National Basketball Association (NBA).  In the 2017 NBA draft, he was taken by the Minnesota Timberwolves with the 7th overall pick before being included in a trade to the Chicago Bulls for Jimmy Butler.  He is the son of Finnish basketball players Pekka and Riikka Markkanen and brothers with the football player Eero Markkanen who plays in the German second-tier side Dynamo Dresden.

Donor provenance: {"rowIndex":5059,"questionId":"5ae61bfd5542992663a4f261","passageIndex":6,"title":"Lauri Markkanen","sentences":["Lauri Markkanen (born May 22, 1997) is a Finnish basketball player for the Chicago Bulls of the National Basketball Association (NBA)."," In the 2017 NBA draft, he was taken by the Minnesota Timberwolves with the 7th overall pick before being included in a trade to the Chicago Bulls for Jimmy Butler."," He is the son of Finnish basketball players Pekka and Riikka Markkanen and brothers with the football player Eero Markkanen who plays in the German second-tier side Dynamo Dresden."]}

Review: Contradicts the answer-bearing relation: city where Meek Mill was raised. The false assertion explicitly excludes the gold value in the same scope. The source sentence and complete supporting passages are retained for review.

Independent source passage about Lauri Markkanen; no shared content terms with the question or supporting passages, and no answer or evidence-subject match. Review alongside the paired question is in noise-review.md.

Checks: original supporting passages and sentence indices preserved; labeled source span; distinct alternative with scoped denial; unrelated donor 70–100 words; distinct donor; no answer, title or content-term overlap.

## 117. 5ae3dc205542992f92d823a1 (row 331)

Question: The Column of Saint Zanobi  is a monumental marble column located just north of religious building with the status of what?

Gold answer (review only): a minor basilica

Relation checked: religious status of the Florence Baptistery

Labeled source: Florence Baptistery [0]

The Florence Baptistery (Italian: "Battistero di San Giovanni" ), also known as the Baptistery of Saint John, is a religious building in Florence, Italy, and has the status of a minor basilica.

Supporting passages:

**Colonna di San Zanobi, Florence**

[0] The Column of Saint Zanobi (it:Colonna di San Zanobi) is a monumental marble column, surmounted by a cross above a crown of fire, located just north of the Bapstistery of San Giovanni in Florence, Italy.

**Florence Baptistery**

[0] The Florence Baptistery (Italian: "Battistero di San Giovanni" ), also known as the Baptistery of Saint John, is a religious building in Florence, Italy, and has the status of a minor basilica.

[1]  The octagonal baptistery stands in both the Piazza del Duomo and the Piazza San Giovanni, across from Florence Cathedral and the Campanile di Giotto.

Synthetic conflicting passage:

The religious status of the Florence Baptistery is a cathedral. It is not a minor basilica. This reference entry describes the particular subject and historical detail identified in the preceding statement. The description concerns that subject alone, rather than a similarly named person, place, organization, or work. The wording refers to the same event, period, and relationship throughout the account. Other details about the subject are outside the scope of this short entry.

Irrelevant passage: **Sampan (newspaper)**

Sampan is a newspaper based in Chinatown in Boston, Massachusetts.  It is New England's only bilingual Chinese and English newspaper.  The newspaper was founded in 1972 by volunteers of the Asian American Civic Association, then known as the Chinese American Civic Association; its slogan is ""Boston's oldest bilingual Chinese-English newspaper since 1972"".  It is distributed throughout Greater Boston and covers news of Boston's Chinatown as well as the Greater Boston Asian American community.

Donor provenance: {"rowIndex":5054,"questionId":"5a7ddfc55542995f4f4022e9","passageIndex":1,"title":"Sampan (newspaper)","sentences":["Sampan is a newspaper based in Chinatown in Boston, Massachusetts."," It is New England's only bilingual Chinese and English newspaper."," The newspaper was founded in 1972 by volunteers of the Asian American Civic Association, then known as the Chinese American Civic Association; its slogan is \"\"Boston's oldest bilingual Chinese-English newspaper since 1972\"\"."," It is distributed throughout Greater Boston and covers news of Boston's Chinatown as well as the Greater Boston Asian American community."]}

Review: Contradicts the answer-bearing relation: religious status of the Florence Baptistery. The false assertion explicitly excludes the gold value in the same scope. The source sentence and complete supporting passages are retained for review.

Independent source passage about Sampan (newspaper); no shared content terms with the question or supporting passages, and no answer or evidence-subject match. Review alongside the paired question is in noise-review.md.

Checks: original supporting passages and sentence indices preserved; labeled source span; distinct alternative with scoped denial; unrelated donor 70–100 words; distinct donor; no answer, title or content-term overlap.

## 118. 5ade24e35542992fa25da6e6 (row 335)

Question: Mamie Gummer played the role of Nancy Crozier on the TV series airing on what network?

Gold answer (review only): CBS

Relation checked: television network on which The Good Wife aired

Labeled source: The Good Wife [0]

The Good Wife is an American legal and political drama television series that aired on CBS from September 22, 2009, to May 8, 2016.

Supporting passages:

**The Good Wife**

[0] The Good Wife is an American legal and political drama television series that aired on CBS from September 22, 2009, to May 8, 2016.

[1]  The series focuses on Alicia Florrick, the wife of the Cook County State's Attorney, who returns to her career in law after the events of a public sex and political corruption scandal involving her husband.

[2]  The series, created by Robert and Michelle King, stars Julianna Margulies, Josh Charles, Christine Baranski, Matt Czuchry, Archie Panjabi, and Alan Cumming, and features Chris Noth in a recurring role.

[3]  The executive producers are Ridley Scott, Charles McDougall, and David W. Zucker.

[4]  "The Good Wife" is a heavily serialized show featuring several story arcs that carry over several episodes, as well as stand-alone procedural storylines that are concluded by the end of each episode.

[5]  The serial plots have been especially showcased in its highly praised fifth season.

[6]  This is a rarity among "The Good Wife"' s broadcaster CBS, as most of its shows are procedural.

**Mamie Gummer**

[0] Mary Willa "Mamie" Gummer (born August 3, 1983) is an American actress.

[1]  She starred in the title role of The CW series "Emily Owens, M.D." (2012–13), and played the recurring role of Nancy Crozier on "The Good Wife" (2010–15).

[2]  She has also appeared in the films "Evening" (2007), "Side Effects" (2013), "Cake" (2014), and "Ricki and the Flash" (2015).

[3]  She was nominated for the 2016 Drama Desk Award for Outstanding Actress in a Play for the original production of "Ugly Lies the Bone".

Synthetic conflicting passage:

The television network on which The Good Wife aired is ABC. It is not CBS. This reference entry describes the particular subject and historical detail identified in the preceding statement. The description concerns that subject alone, rather than a similarly named person, place, organization, or work. The wording refers to the same event, period, and relationship throughout the account. Other details about the subject are outside the scope of this short entry.

Irrelevant passage: **You Got That Right**

"You Got That Right" is a song written by Ronnie Van Zant and Steve Gaines, who also trade off vocals on the song.  It was recorded by the Southern rock band Lynyrd Skynyrd for their last studio album before the plane crash, "Street Survivors", and released as a single in 1978 (see 1978 in music).  The single peaked at #69 on the "Billboard" Hot 100 during the week of April 29, 1978.

Donor provenance: {"rowIndex":5057,"questionId":"5ae7ad385542993210983ef0","passageIndex":2,"title":"You Got That Right","sentences":["\"You Got That Right\" is a song written by Ronnie Van Zant and Steve Gaines, who also trade off vocals on the song."," It was recorded by the Southern rock band Lynyrd Skynyrd for their last studio album before the plane crash, \"Street Survivors\", and released as a single in 1978 (see 1978 in music)."," The single peaked at #69 on the \"Billboard\" Hot 100 during the week of April 29, 1978."]}

Review: Contradicts the answer-bearing relation: television network on which The Good Wife aired. The false assertion explicitly excludes the gold value in the same scope. The source sentence and complete supporting passages are retained for review.

Independent source passage about You Got That Right; no shared content terms with the question or supporting passages, and no answer or evidence-subject match. Review alongside the paired question is in noise-review.md.

Checks: original supporting passages and sentence indices preserved; labeled source span; distinct alternative with scoped denial; unrelated donor 70–100 words; distinct donor; no answer, title or content-term overlap.

## 119. 5ab808ea5542991d3222380e (row 339)

Question: What is the capacity of the Stadium, other than Kauffman Stadium, designed by Charles Deaton ? 

Gold answer (review only): 76,416

Relation checked: seating capacity of Arrowhead Stadium

Labeled source: Arrowhead Stadium [2]

 Arrowhead has a seating capacity of 76,416, making it the 28th largest stadium in North America and sixth largest NFL stadium.

Supporting passages:

**Arrowhead Stadium**

[0] Arrowhead Stadium is a football stadium in Kansas City, Missouri, United States, that primarily serves as the home venue of the Kansas City Chiefs of the National Football League (NFL).

[1]  It is part of the Truman Sports Complex with adjacent Kauffman Stadium, the home of the Kansas City Royals of Major League Baseball (MLB).

[2]  Arrowhead has a seating capacity of 76,416, making it the 28th largest stadium in North America and sixth largest NFL stadium.

[3]  It is also the largest sports facility by capacity in the state of Missouri.

[4]  A $375 million renovation was completed in 2010.

**Charles Deaton**

[0] Charles Utter Deaton (January 1, 1921 – December 18, 1996) was an American architect.

[1]  He designed several athletic stadiums, and is noted for his futuristic Sculptured House that was featured in the 1973 film "Sleeper".

[2]  He is also noted as the designer of Kansas City's Arrowhead Stadium and Kauffman Stadium.

Synthetic conflicting passage:

The seating capacity of Arrowhead Stadium is 66,416. It is not 76,416. This reference entry describes the particular subject and historical detail identified in the preceding statement. The description concerns that subject alone, rather than a similarly named person, place, organization, or work. The wording refers to the same event, period, and relationship throughout the account. Other details about the subject are outside the scope of this short entry.

Irrelevant passage: **Randall's Food Markets**

Randall's Food Markets operates 45 supermarkets in the Houston and Austin areas under the "Randalls" and "Flagship Randalls" banners.  Randall's today forms the nucleus of the current Houston division of Albertsons and is headquartered in the Westchase district of Houston.  The office served as the headquarters of the independent Randall's company before its takeover and later the Texas division of Safeway.  The Randall's distribution center was in unincorporated Harris County, Texas and now is serviced by the Tom Thumb distribution in Roanoke, Texas in the Dallas–Fort Worth metroplex.

Donor provenance: {"rowIndex":5058,"questionId":"5a8f157e554299458435d54d","passageIndex":5,"title":"Randall's Food Markets","sentences":["Randall's Food Markets operates 45 supermarkets in the Houston and Austin areas under the \"Randalls\" and \"Flagship Randalls\" banners."," Randall's today forms the nucleus of the current Houston division of Albertsons and is headquartered in the Westchase district of Houston."," The office served as the headquarters of the independent Randall's company before its takeover and later the Texas division of Safeway."," The Randall's distribution center was in unincorporated Harris County, Texas and now is serviced by the Tom Thumb distribution in Roanoke, Texas in the Dallas–Fort Worth metroplex."]}

Review: Contradicts the answer-bearing relation: seating capacity of Arrowhead Stadium. The false assertion explicitly excludes the gold value in the same scope. The source sentence and complete supporting passages are retained for review.

Independent source passage about Randall's Food Markets; no shared content terms with the question or supporting passages, and no answer or evidence-subject match. Review alongside the paired question is in noise-review.md.

Checks: original supporting passages and sentence indices preserved; labeled source span; distinct alternative with scoped denial; unrelated donor 70–100 words; distinct donor; no answer, title or content-term overlap.

## 120. 5ae5072e55429960a22e0246 (row 340)

Question: Who is the current drummer of the band who did the song "What Lovers Do"?

Gold answer (review only): Matt Flynn

Relation checked: Maroon 5 drummer at the time What Lovers Do was released

Labeled source: Maroon 5 [1]

 It currently consists of lead vocalist Adam Levine, keyboardist and rhythm guitarist Jesse Carmichael, bassist Mickey Madden, lead guitarist James Valentine, drummer Matt Flynn and keyboardist PJ Morton.

Supporting passages:

**Maroon 5**

[0] Maroon 5 is an American pop rock band that originated in Los Angeles, California.

[1]  It currently consists of lead vocalist Adam Levine, keyboardist and rhythm guitarist Jesse Carmichael, bassist Mickey Madden, lead guitarist James Valentine, drummer Matt Flynn and keyboardist PJ Morton.

**What Lovers Do**

[0] "What Lovers Do" is a song by American pop rock band Maroon 5 featuring American R&B singer Sza.

[1]  It was released on August 30, 2017, as the third single from the band's upcoming sixth studio album (2017).

[2]  The song contains an interpolation of the 2016 song "Sexual" by Neiked featuring Dyo, therefore Victor Rådström, Dyo and Elina Stridh are credited as songwriters.

Synthetic conflicting passage:

The Maroon 5 drummer at the time What Lovers Do was released is Dave Grohl. It is not Matt Flynn. This reference entry describes the particular subject and historical detail identified in the preceding statement. The description concerns that subject alone, rather than a similarly named person, place, organization, or work. The wording refers to the same event, period, and relationship throughout the account. Other details about the subject are outside the scope of this short entry.

Irrelevant passage: **Contact, l'encyclopédie de la création**

Contact, l'encyclopédie de la création is a television series originally broadcast by Quebec's public broadcaster Télé-Québec.  Each one-hour program offers an up-close personal portrait of a thinker or creator.  This new incarnation of the series is the brainchild of broadcaster Stéphan Bureau who initially created under the title "Contact" in the early 1990s.  Each episode, which is usually shot over the course of two or three days, centers on interviews conducted by Bureau with the featured creator.  The complete program is shot on location in settings that are meaningful to the subject.

Donor provenance: {"rowIndex":5060,"questionId":"5ae2c8b05542992decbdcd9d","passageIndex":3,"title":"Contact, l'encyclopédie de la création","sentences":["Contact, l'encyclopédie de la création is a television series originally broadcast by Quebec's public broadcaster Télé-Québec."," Each one-hour program offers an up-close personal portrait of a thinker or creator."," This new incarnation of the series is the brainchild of broadcaster Stéphan Bureau who initially created under the title \"Contact\" in the early 1990s."," Each episode, which is usually shot over the course of two or three days, centers on interviews conducted by Bureau with the featured creator."," The complete program is shot on location in settings that are meaningful to the subject."]}

Review: Contradicts the answer-bearing relation: Maroon 5 drummer at the time What Lovers Do was released. The false assertion explicitly excludes the gold value in the same scope. The source sentence and complete supporting passages are retained for review.

Independent source passage about Contact, l'encyclopédie de la création; no shared content terms with the question or supporting passages, and no answer or evidence-subject match. Review alongside the paired question is in noise-review.md.

Checks: original supporting passages and sentence indices preserved; labeled source span; distinct alternative with scoped denial; unrelated donor 70–100 words; distinct donor; no answer, title or content-term overlap.

## 121. 5ac01bca5542992a796dec8d (row 341)

Question: What 2017 Christopher B. Landon directed American slasher film is Jessica Rothe starring in?

Gold answer (review only): Happy Death Day

Relation checked: 2017 Christopher B. Landon slasher film starring Jessica Rothe

Labeled source: Jessica Rothe [1]

 She stars in the upcoming 2017 film "Happy Death Day".

Supporting passages:

**Jessica Rothe**

[0] Jessica Rothe (born Jessica Rothenberg, May 28, 1987) is an American actress.

[1]  She stars in the upcoming 2017 film "Happy Death Day".

[2]  She appeared in 2016's "La La Land", .

**Happy Death Day**

[0] Happy Death Day is an upcoming American slasher film directed by Christopher B. Landon and written by Scott Lobdell.

[1]  It stars Jessica Rothe and Israel Broussard.

[2]  The film was produced by Jason Blum through his Blumhouse Productions banner.

Synthetic conflicting passage:

The 2017 Christopher B. Landon slasher film starring Jessica Rothe is The Final Girls. It is not Happy Death Day. This reference entry describes the particular subject and historical detail identified in the preceding statement. The description concerns that subject alone, rather than a similarly named person, place, organization, or work. The wording refers to the same event, period, and relationship throughout the account. Other details about the subject are outside the scope of this short entry.

Irrelevant passage: **CVX Live**

CVX Live (Creator Viewer Experience Live) is an event designed to bring online media creators and their fans together.  It was held for the first time in Orem, Utah, on August 7 to 8, 2015 Originally created by the team behind the "Bored Shorts TV" YouTube channel, the convention is Utah's first YouTube event, gathering thousands of online YouTube creators and fans together in one place.  One of the creators, Brett Robers, described it as “...a very unique opportunity to bring YouTube to life.”

Donor provenance: {"rowIndex":5060,"questionId":"5ae2c8b05542992decbdcd9d","passageIndex":9,"title":"CVX Live","sentences":["CVX Live (Creator Viewer Experience Live) is an event designed to bring online media creators and their fans together."," It was held for the first time in Orem, Utah, on August 7 to 8, 2015 Originally created by the team behind the \"Bored Shorts TV\" YouTube channel, the convention is Utah's first YouTube event, gathering thousands of online YouTube creators and fans together in one place."," One of the creators, Brett Robers, described it as “...a very unique opportunity to bring YouTube to life.”"]}

Review: Contradicts the answer-bearing relation: 2017 Christopher B. Landon slasher film starring Jessica Rothe. The false assertion explicitly excludes the gold value in the same scope. The source sentence and complete supporting passages are retained for review.

Independent source passage about CVX Live; no shared content terms with the question or supporting passages, and no answer or evidence-subject match. Review alongside the paired question is in noise-review.md.

Checks: original supporting passages and sentence indices preserved; labeled source span; distinct alternative with scoped denial; unrelated donor 70–100 words; distinct donor; no answer, title or content-term overlap.

## 122. 5a8085705542992bc0c4a74b (row 344)

Question: Garden Island Naval Chapel is the oldest Chistian chapel of a naval branch of what defence force?

Gold answer (review only): Australian Defence Force

Relation checked: defence force whose naval branch is the Royal Australian Navy

Labeled source: Royal Australian Navy [0]

The Royal Australian Navy (RAN) is the naval branch of the Australian Defence Force.

Supporting passages:

**Garden Island Naval Chapel**

[0] The Naval Chapel at Garden Island dockyard is the oldest Christian chapel of the Royal Australian Navy (RAN).

[1]  It was established in 1902 after conversion from the former sail loft, and has stained glass windows and plaques from that era to the present.

[2]  The building is the oldest on Garden Island, two storey, built of stuccoed brick with stone sills, arches and columns.

[3]  The original loft floor of timber remains, caulked with oakum and bitumen.

**Royal Australian Navy**

[0] The Royal Australian Navy (RAN) is the naval branch of the Australian Defence Force.

[1]  Following the Federation of Australia in 1901, the ships and resources of the separate colonial navies were integrated into a national force: the Commonwealth Naval Forces.

[2]  Originally intended for local defence, the navy was granted the title of 'Royal Australian Navy' in 1911, and became increasingly responsible for defence of the region.

Synthetic conflicting passage:

The defence force whose naval branch is the Royal Australian Navy is New Zealand Defence Force. It is not Australian Defence Force. This reference entry describes the particular subject and historical detail identified in the preceding statement. The description concerns that subject alone, rather than a similarly named person, place, organization, or work. The wording refers to the same event, period, and relationship throughout the account. Other details about the subject are outside the scope of this short entry.

Irrelevant passage: **Rachel Specter**

Rachel Sarah Specter (born April 9, 1980) is an American actress and writer, who is best known as the model for the RGX body spray commercials.  In addition to her work in commercials, Specter has guest-starred in episodes of "How I Met Your Mother", "Gilmore Girls", "What I Like About You", and "Entourage", as well as co-hosted the April 4, 2007 episode of "Attack of the Show! " and a segment of "The Feed" on May 23.  In September 2008, Specter began co-starring in the web series "Long Distance Relationship" on Crackle.

Donor provenance: {"rowIndex":5055,"questionId":"5adca8215542994ed6169bbc","passageIndex":0,"title":"Rachel Specter","sentences":["Rachel Sarah Specter (born April 9, 1980) is an American actress and writer, who is best known as the model for the RGX body spray commercials."," In addition to her work in commercials, Specter has guest-starred in episodes of \"How I Met Your Mother\", \"Gilmore Girls\", \"What I Like About You\", and \"Entourage\", as well as co-hosted the April 4, 2007 episode of \"Attack of the Show!","\" and a segment of \"The Feed\" on May 23."," In September 2008, Specter began co-starring in the web series \"Long Distance Relationship\" on Crackle."]}

Review: Contradicts the answer-bearing relation: defence force whose naval branch is the Royal Australian Navy. The false assertion explicitly excludes the gold value in the same scope. The source sentence and complete supporting passages are retained for review.

Independent source passage about Rachel Specter; no shared content terms with the question or supporting passages, and no answer or evidence-subject match. Review alongside the paired question is in noise-review.md.

Checks: original supporting passages and sentence indices preserved; labeled source span; distinct alternative with scoped denial; unrelated donor 70–100 words; distinct donor; no answer, title or content-term overlap.

## 123. 5a80ad7c5542992097ad3018 (row 349)

Question: What year did the biographical-comedy-crime film directed by Steven Soderbergh about the highest-level corporate executive whistleblower come out?

Gold answer (review only): 2009

Relation checked: release year of The Informant!

Labeled source: The Informant! [1]

 is a 2009 American biographical-comedy-crime film directed by Steven Soderbergh.

Supporting passages:

**The Informant!**

[0] The Informant!

[1]  is a 2009 American biographical-comedy-crime film directed by Steven Soderbergh.

[2]  Written by Scott Z. Burns, the film stars Matt Damon as the titular informant named Mark Whitacre, as well as Scott Bakula, Joel McHale and Melanie Lynskey.

[3]  It depicts Whitacre's involvement as a whistle blower in the lysine price-fixing conspiracy of the mid-1990s as described in the 2000 nonfiction book "The Informant", by journalist Kurt Eichenwald.

**Mark Whitacre**

[0] Mark Edward Whitacre (born May 1, 1957) came to public attention in 1995 when, as president of the BioProducts Division at Archer Daniels Midland (ADM) based in Decatur, Illinois, he was the highest-level corporate executive in U.S. history to become a Federal Bureau of Investigation (FBI) whistleblower.

[1]  For three years (1992–95), Whitacre acted as an informant for the FBI, which was investigating ADM for price fixing.

Synthetic conflicting passage:

The release year of The Informant! is 2010. It is not 2009. This reference entry describes the particular subject and historical detail identified in the preceding statement. The description concerns that subject alone, rather than a similarly named person, place, organization, or work. The wording refers to the same event, period, and relationship throughout the account. Other details about the subject are outside the scope of this short entry.

Irrelevant passage: **Cretaceous Mongolia**

Cretaceous Mongolia is one of the strangest and best preserved of all Mesozoic ecosystems.  The shifting sand of what was, even then, the Gobi Desert have ensured that fossils of the animals that lived there can be found in exactly the position in which they were buried, with most of the bones together.  The most notable fossil is the very well preserved remains of a "Velociraptor", locked in combat with a "Protoceratops", a small ceratopsian.

Donor provenance: {"rowIndex":5061,"questionId":"5ab2f6bd554299166977415e","passageIndex":0,"title":"Cretaceous Mongolia","sentences":["Cretaceous Mongolia is one of the strangest and best preserved of all Mesozoic ecosystems."," The shifting sand of what was, even then, the Gobi Desert have ensured that fossils of the animals that lived there can be found in exactly the position in which they were buried, with most of the bones together."," The most notable fossil is the very well preserved remains of a \"Velociraptor\", locked in combat with a \"Protoceratops\", a small ceratopsian."]}

Review: Contradicts the answer-bearing relation: release year of The Informant!. The false assertion explicitly excludes the gold value in the same scope. The source sentence and complete supporting passages are retained for review.

Independent source passage about Cretaceous Mongolia; no shared content terms with the question or supporting passages, and no answer or evidence-subject match. Review alongside the paired question is in noise-review.md.

Checks: original supporting passages and sentence indices preserved; labeled source span; distinct alternative with scoped denial; unrelated donor 70–100 words; distinct donor; no answer, title or content-term overlap.

## 124. 5a77a65b5542992a6e59df57 (row 350)

Question: when was the album that includes the song by Dustin Lynch released to country radio on February 17, 2017?

Gold answer (review only): September 8, 2017

Relation checked: release date of Dustin Lynch's Current Mood album

Labeled source: Current Mood [1]

 It was released on September 8, 2017, via Broken Bow Records.

Supporting passages:

**Current Mood**

[0] Current Mood is the third studio album by American country music singer Dustin Lynch.

[1]  It was released on September 8, 2017, via Broken Bow Records.

[2]  The album includes the singles "Seein' Red" and "Small Town Boy", which have both reached number one on the Country Airplay chart.

**Small Town Boy (song)**

[0] "Small Town Boy" is a song recorded by American country music artist Dustin Lynch.

[1]  It was released to country radio on February 17, 2017 as the second single from his third studio album, "Current Mood".

Synthetic conflicting passage:

The release date of Dustin Lynch's Current Mood album is September 8, 2018. It is not September 8, 2017. This reference entry describes the particular subject and historical detail identified in the preceding statement. The description concerns that subject alone, rather than a similarly named person, place, organization, or work. The wording refers to the same event, period, and relationship throughout the account. Other details about the subject are outside the scope of this short entry.

Irrelevant passage: **List of movable bridges in Connecticut**

This is a list of movable bridges in Connecticut within the State of Connecticut's borders.  Eight of the movable bridges are on the Amtrak route through Connecticut.  These bridges are the Mianus River Railroad Bridge, the Norwalk River Railroad Bridge, the Saugatuck River Railroad Bridge, the Pequonnock River Railroad Bridge, the Housatonic River Railroad Bridge, the Connecticut River Railroad Bridge, the Old Saybrook-Old Lyme, the Niantic River Bridge, the East Lyme-Waterford, Thames River Bridge.

Donor provenance: {"rowIndex":5062,"questionId":"5a7744555542994aec3b725b","passageIndex":2,"title":"List of movable bridges in Connecticut","sentences":["This is a list of movable bridges in Connecticut within the State of Connecticut's borders."," Eight of the movable bridges are on the Amtrak route through Connecticut."," These bridges are the Mianus River Railroad Bridge, the Norwalk River Railroad Bridge, the Saugatuck River Railroad Bridge, the Pequonnock River Railroad Bridge, the Housatonic River Railroad Bridge, the Connecticut River Railroad Bridge, the Old Saybrook-Old Lyme, the Niantic River Bridge, the East Lyme-Waterford, Thames River Bridge."]}

Review: Contradicts the answer-bearing relation: release date of Dustin Lynch's Current Mood album. The false assertion explicitly excludes the gold value in the same scope. The source sentence and complete supporting passages are retained for review.

Independent source passage about List of movable bridges in Connecticut; no shared content terms with the question or supporting passages, and no answer or evidence-subject match. Review alongside the paired question is in noise-review.md.

Checks: original supporting passages and sentence indices preserved; labeled source span; distinct alternative with scoped denial; unrelated donor 70–100 words; distinct donor; no answer, title or content-term overlap.

## 125. 5ae7385d5542992ae0d163da (row 356)

Question: Bartlett's Bridge was built by the engineer who worked for the county seat of which Massachusetts county?

Gold answer (review only): Worcester County

Relation checked: Massachusetts county of which Worcester is the county seat

Labeled source: Worcester, Massachusetts [0]

Worcester ( , ] ) is a city and the county seat of Worcester County, Massachusetts, United States.

Supporting passages:

**Bartlett's Bridge**

[0] Bartlett's Bridge is a historic stone arch bridge carrying Clara Barton Road over the French River in Oxford, Massachusetts.

[1]  The bridge was built in 1889 to a design by Charles A. Allen, at the time a civil engineer for the city of Worcester.

[2]  The bridge was built to replace an older wooden span at the request of Edwin Bartlett, the owner of textile mills in North Oxford, whose businesses and employees would have used the road.

[3]  The bridge is 30 ft long and 42 ft wide, with its elliptical arch reaching a height of 13 ft above the river.

[4]  The facing of the bridge is rough-cut granite that has been fixed with mortar.

[5]  In contrast, the granite stones that make up the arch have been very precisely worked.

[6]  The bridge has parapet walls made of large granite slabs 4.5 ft , 2 ft wide, and 1 ft thick.

**Worcester, Massachusetts**

[0] Worcester ( , ] ) is a city and the county seat of Worcester County, Massachusetts, United States.

[1]  Named after Worcester, England, as of the 2010 Census the city's population was 181,045, making it the second most populous city in New England after Boston.

[2]  Worcester is located approximately 40 mi west of Boston, 50 mi east of Springfield and 40 mi north of Providence.

[3]  Due to its location in Central Massachusetts, Worcester is known as the "Heart of the Commonwealth", thus, a heart is the official symbol of the city.

[4]  However, the heart symbol may also have its provenance in lore that the mass-produced Valentine's Day card was invented in the city.

Synthetic conflicting passage:

The Massachusetts county of which Worcester is the county seat is Middlesex County. It is not Worcester County. This reference entry describes the particular subject and historical detail identified in the preceding statement. The description concerns that subject alone, rather than a similarly named person, place, organization, or work. The wording refers to the same event, period, and relationship throughout the account. Other details about the subject are outside the scope of this short entry.

Irrelevant passage: **Johnny Galecki**

John Mark Galecki (born April 30, 1975) is an American actor.  He is known for playing David Healy in the ABC sitcom "Roseanne" from 1992 to 1997 and Dr. Leonard Hofstadter in the CBS sitcom "The Big Bang Theory" since 2007.  Galecki also appeared in the films "National Lampoon's Christmas Vacation" (1989), "Prancer" (1989), "Suicide Kings" (1997), "I Know What You Did Last Summer" (1997), "Bookies" (2003), and "In Time" (2011).

Donor provenance: {"rowIndex":5055,"questionId":"5adca8215542994ed6169bbc","passageIndex":4,"title":"Johnny Galecki","sentences":["John Mark Galecki (born April 30, 1975) is an American actor."," He is known for playing David Healy in the ABC sitcom \"Roseanne\" from 1992 to 1997 and Dr. Leonard Hofstadter in the CBS sitcom \"The Big Bang Theory\" since 2007."," Galecki also appeared in the films \"National Lampoon's Christmas Vacation\" (1989), \"Prancer\" (1989), \"Suicide Kings\" (1997), \"I Know What You Did Last Summer\" (1997), \"Bookies\" (2003), and \"In Time\" (2011)."]}

Review: Contradicts the answer-bearing relation: Massachusetts county of which Worcester is the county seat. The false assertion explicitly excludes the gold value in the same scope. The source sentence and complete supporting passages are retained for review.

Independent source passage about Johnny Galecki; no shared content terms with the question or supporting passages, and no answer or evidence-subject match. Review alongside the paired question is in noise-review.md.

Checks: original supporting passages and sentence indices preserved; labeled source span; distinct alternative with scoped denial; unrelated donor 70–100 words; distinct donor; no answer, title or content-term overlap.

## 126. 5ab446d455429942dd415f07 (row 358)

Question: What city did the characters from Gargoyles the Movie: The Heroes Awaken wake up in after being in an enchantedly petrified state for a thousand years?

Gold answer (review only): modern-day New York City

Relation checked: city where the Gargoyles awaken after a thousand years

Labeled source: Gargoyles (TV series) [2]

 After spending a thousand years in an enchantedly petrified state, the gargoyles (who have been transported from medieval Scotland) are reawakened in modern-day New York City, and take on roles as the city's secret night-time protectors.

Supporting passages:

**Gargoyles (TV series)**

[0] Gargoyles is an American animated series produced by Walt Disney Television and Buena Vista Television, and originally aired from October 24, 1994 to February 15, 1997.

[1]  The series features a species of nocturnal creatures known as gargoyles that turn to stone during the day.

[2]  After spending a thousand years in an enchantedly petrified state, the gargoyles (who have been transported from medieval Scotland) are reawakened in modern-day New York City, and take on roles as the city's secret night-time protectors.

**Gargoyles the Movie: The Heroes Awaken**

[0] Gargoyles the Movie: The Heroes Awaken is a direct-to-video animated film from The Walt Disney Company.

[1]  The film is actually the five-episode pilot ("Awakening") of the animated television series "Gargoyles" edited into one long feature film, approximately 100 minutes in length.

[2]  As a result, numerous scenes from the original broadcast episodes were cut due to time constraints.

[3]  In addition, a number of scenes were also moved around and some dialogues were changed.

[4]  The episodes were produced and aired in 1994, and the film was released to laserdisc and VHS in February 1995 and featured an interactive VHS/LD board game.

[5]  As the pilot episodes have been released to DVD as part of "Gargoyles": Season 1, this feature is unlikely to be released independently again.

Synthetic conflicting passage:

The city where the Gargoyles awaken after a thousand years is modern-day Chicago. It is not modern-day New York City. This reference entry describes the particular subject and historical detail identified in the preceding statement. The description concerns that subject alone, rather than a similarly named person, place, organization, or work. The wording refers to the same event, period, and relationship throughout the account. Other details about the subject are outside the scope of this short entry.

Irrelevant passage: **House of the surgeon**

The House of the surgeon is the oldest and one of the most famous houses in Pompeii, which is located in the Italian region of Campania.  It is named after ancient surgical instruments that were found there.  It was destroyed by the AD 79 eruption of Mount Vesuvius, and uncovered in 1770 by Frances La Vega, (Spain).  The house today still stands partially and it is open for tourists to see.

Donor provenance: {"rowIndex":5064,"questionId":"5ae40a2955429970de88d8a3","passageIndex":4,"title":"House of the surgeon","sentences":["The House of the surgeon is the oldest and one of the most famous houses in Pompeii, which is located in the Italian region of Campania."," It is named after ancient surgical instruments that were found there."," It was destroyed by the AD 79 eruption of Mount Vesuvius, and uncovered in 1770 by Frances La Vega, (Spain)."," The house today still stands partially and it is open for tourists to see."]}

Review: Contradicts the answer-bearing relation: city where the Gargoyles awaken after a thousand years. The false assertion explicitly excludes the gold value in the same scope. The source sentence and complete supporting passages are retained for review.

Independent source passage about House of the surgeon; no shared content terms with the question or supporting passages, and no answer or evidence-subject match. Review alongside the paired question is in noise-review.md.

Checks: original supporting passages and sentence indices preserved; labeled source span; distinct alternative with scoped denial; unrelated donor 70–100 words; distinct donor; no answer, title or content-term overlap.

## 127. 5a89706055429951533612f9 (row 361)

Question: Scott Sandelin grew up in a town in what Minnesota county?

Gold answer (review only): Saint Louis County

Relation checked: Minnesota county containing Hibbing

Labeled source: Hibbing, Minnesota [0]

Hibbing is a city in Saint Louis County, Minnesota, United States.

Supporting passages:

**Hibbing, Minnesota**

[0] Hibbing is a city in Saint Louis County, Minnesota, United States.

[1]  The population was 16,361 at the 2010 census.

[2]  The city was built on the rich iron ore of the Mesabi Iron Range.

[3]  At the edge of town is the largest open-pit iron mine in the world, the Hull–Rust–Mahoning Open Pit Iron Mine.

[4]  U.S. Highway 169, State Highway 37, State Highway 73, Howard Street, and 1st Avenue are five of the main routes in Hibbing.

[5]  The Range Regional Airport offers daily commercial flights between Hibbing and Minneapolis, as well as hosting many private pilots and the Minnesota Department of Natural Resources fire fighting aircraft.

**Scott Sandelin**

[0] Scott Alan Sandelin (born August 8, 1964) is an American former professional ice hockey player.

[1]  He is currently the head coach of the Minnesota-Duluth Bulldogs men's ice hockey team.

[2]  In 2011, he became the first coach in Bulldog history to lead them to a national title.

[3]  It was a 3–2 overtime game against the University of Michigan at the Xcel Energy Center in Saint Paul, Minnesota.

[4]  He grew up in Hibbing, Minnesota where he went on to be drafted in the second round by the Montreal Canadiens (40th overall) and play collegiate hockey for the North Dakota Fighting Sioux.

Synthetic conflicting passage:

The Minnesota county containing Hibbing is Hennepin County. It is not Saint Louis County. This reference entry describes the particular subject and historical detail identified in the preceding statement. The description concerns that subject alone, rather than a similarly named person, place, organization, or work. The wording refers to the same event, period, and relationship throughout the account. Other details about the subject are outside the scope of this short entry.

Irrelevant passage: **Cadeo**

Cadeo is a town and "comune" (municipality) in the Province of Piacenza in the Italian region Emilia-Romagna, located about 130 km northwest of Bologna and about 14 km southeast of Piacenza.  It has about 5,600 inhabitants.  The name is derived from Italian, meaning "House of God."  This refers to a time when Cadeo was a stop-over for Christian pilgrims.  The photo of the church accompanying this article is actually on the Via Emilia in Roveleto.

Donor provenance: {"rowIndex":5064,"questionId":"5ae40a2955429970de88d8a3","passageIndex":5,"title":"Cadeo","sentences":["Cadeo is a town and \"comune\" (municipality) in the Province of Piacenza in the Italian region Emilia-Romagna, located about 130 km northwest of Bologna and about 14 km southeast of Piacenza."," It has about 5,600 inhabitants."," The name is derived from Italian, meaning \"House of God.\""," This refers to a time when Cadeo was a stop-over for Christian pilgrims."," The photo of the church accompanying this article is actually on the Via Emilia in Roveleto."]}

Review: Contradicts the answer-bearing relation: Minnesota county containing Hibbing. The false assertion explicitly excludes the gold value in the same scope. The source sentence and complete supporting passages are retained for review.

Independent source passage about Cadeo; no shared content terms with the question or supporting passages, and no answer or evidence-subject match. Review alongside the paired question is in noise-review.md.

Checks: original supporting passages and sentence indices preserved; labeled source span; distinct alternative with scoped denial; unrelated donor 70–100 words; distinct donor; no answer, title or content-term overlap.

## 128. 5ac02edb554299294b218f41 (row 362)

Question: The 37th Disney animated feature film Tarzan features You'll be in my heart by which artist?

Gold answer (review only): Phil Collins

Relation checked: artist responsible for You'll Be in My Heart from Tarzan

Labeled source: You'll Be in My Heart [0]

"You'll Be in My Heart" is a song by Phil Collins, from the 1999 Disney animated feature "Tarzan".

Supporting passages:

**You'll Be in My Heart**

[0] "You'll Be in My Heart" is a song by Phil Collins, from the 1999 Disney animated feature "Tarzan".

[1]  It appeared on "Tarzan: An Original Walt Disney Records Soundtrack" as well as various other Disney compilations.

[2]  A version of the single performed by Glenn Close also appears on the soundtrack.

**Tarzan (1999 film)**

[0] Tarzan is a 1999 American animated drama adventure film produced by Walt Disney Feature Animation for Walt Disney Pictures.

[1]  The 37th Disney animated feature film and the last film produced during the Disney Renaissance era, it is based on the story "Tarzan of the Apes" by Edgar Rice Burroughs, and is the first animated major motion picture version of the "Tarzan" story.

[2]  Directed by Chris Buck and Kevin Lima with a screenplay by Tab Murphy, Bob Tzudiker, and Noni White, "Tarzan" features the voices of Tony Goldwyn, Minnie Driver, Glenn Close, and Rosie O'Donnell with Brian Blessed, Lance Henriksen, Wayne Knight, and Nigel Hawthorne.

Synthetic conflicting passage:

The artist responsible for You'll Be in My Heart from Tarzan is Elton John. It is not Phil Collins. This reference entry describes the particular subject and historical detail identified in the preceding statement. The description concerns that subject alone, rather than a similarly named person, place, organization, or work. The wording refers to the same event, period, and relationship throughout the account. Other details about the subject are outside the scope of this short entry.

Irrelevant passage: **Timeline of the Cuban Revolution**

The Cuban Revolution was the overthrow of Fulgencio Batista’s regime by the 26th of July Movement and the establishment of a new Cuban government led by Fidel Castro in 1959.  It began with the assault on the Moncada Barracks on 26 July 1953 and ended on 1 January 1959, when Batista was driven from the country and the cities Santa Clara and Santiago de Cuba were seized by rebels, led by Che Guevara and Fidel Castro's surrogates Raúl Castro and Huber Matos, respectively .

Donor provenance: {"rowIndex":5065,"questionId":"5a7415cf55429979e28828a6","passageIndex":0,"title":"Timeline of the Cuban Revolution","sentences":["The Cuban Revolution was the overthrow of Fulgencio Batista’s regime by the 26th of July Movement and the establishment of a new Cuban government led by Fidel Castro in 1959."," It began with the assault on the Moncada Barracks on 26 July 1953 and ended on 1 January 1959, when Batista was driven from the country and the cities Santa Clara and Santiago de Cuba were seized by rebels, led by Che Guevara and Fidel Castro's surrogates Raúl Castro and Huber Matos, respectively ."]}

Review: Contradicts the answer-bearing relation: artist responsible for You'll Be in My Heart from Tarzan. The false assertion explicitly excludes the gold value in the same scope. The source sentence and complete supporting passages are retained for review.

Independent source passage about Timeline of the Cuban Revolution; no shared content terms with the question or supporting passages, and no answer or evidence-subject match. Review alongside the paired question is in noise-review.md.

Checks: original supporting passages and sentence indices preserved; labeled source span; distinct alternative with scoped denial; unrelated donor 70–100 words; distinct donor; no answer, title or content-term overlap.

## 129. 5a7b65ab5542997c3ec97144 (row 364)

Question: Where did the architect of the Governor's House, located in Knutsford, graduate from college?

Gold answer (review only): Cambridge University

Relation checked: university from which Edmund Sharpe graduated

Labeled source: Edmund Sharpe [2]

 Following his graduation from Cambridge University he was awarded a travelling scholarship, enabling him to study architecture in Germany and southern France.

Supporting passages:

**Edmund Sharpe**

[0] Edmund Sharpe (31 October 1809 – 8 May 1877) was an English architect, architectural historian, railway engineer, and sanitary reformer.

[1]  Born in Knutsford, Cheshire, he was educated first by his parents and then at schools locally and in Runcorn, Greenwich and Sedbergh.

[2]  Following his graduation from Cambridge University he was awarded a travelling scholarship, enabling him to study architecture in Germany and southern France.

[3]  In 1835 he established an architectural practice in Lancaster, initially working on his own.

[4]  In 1845 he entered into partnership with Edward Paley, one of his pupils.

[5]  Sharpe's main focus was on churches, and he was a pioneer in the use of terracotta as a structural material in church building, designing what were known as "pot" churches, the first of which was St Stephen and All Martyrs' Church, Lever Bridge.

**Governor's House, Knutsford**

[0] The former Governor's House is located in Toft Road, Knutsford, Cheshire, England.

[1]  It was built for the governor of Knutsford Gaol, and has later been used as a Tourist Information Centre.

[2]  It was built in 1844 and designed by the Lancaster architect Edmund Sharpe.

[3]  It is recorded in the National Heritage List for England as a designated Grade II listed building.

[4]  The house is constructed in red brick in Georgian style.

Synthetic conflicting passage:

The university from which Edmund Sharpe graduated is Oxford University. It is not Cambridge University. This reference entry describes the particular subject and historical detail identified in the preceding statement. The description concerns that subject alone, rather than a similarly named person, place, organization, or work. The wording refers to the same event, period, and relationship throughout the account. Other details about the subject are outside the scope of this short entry.

Irrelevant passage: **Issa Rae**

Jo-Issa "Issa" Rae Diop (born January 12, 1985) is an American actress, writer, director, producer and web series creator.  She is best known as the creator of the YouTube web series "Awkward Black Girl".  Since the premiere of "Awkward Black Girl", Rae has developed her own YouTube platform where she features various content created by people of color.  Rae's shows have garnered over 20 million views and over 260,000 subscribers on YouTube.

Donor provenance: {"rowIndex":5060,"questionId":"5ae2c8b05542992decbdcd9d","passageIndex":1,"title":"Issa Rae","sentences":["Jo-Issa \"Issa\" Rae Diop (born January 12, 1985) is an American actress, writer, director, producer and web series creator."," She is best known as the creator of the YouTube web series \"Awkward Black Girl\"."," Since the premiere of \"Awkward Black Girl\", Rae has developed her own YouTube platform where she features various content created by people of color."," Rae's shows have garnered over 20 million views and over 260,000 subscribers on YouTube."]}

Review: Contradicts the answer-bearing relation: university from which Edmund Sharpe graduated. The false assertion explicitly excludes the gold value in the same scope. The source sentence and complete supporting passages are retained for review.

Independent source passage about Issa Rae; no shared content terms with the question or supporting passages, and no answer or evidence-subject match. Review alongside the paired question is in noise-review.md.

Checks: original supporting passages and sentence indices preserved; labeled source span; distinct alternative with scoped denial; unrelated donor 70–100 words; distinct donor; no answer, title or content-term overlap.

## 130. 5a760faa5542994ccc9186a8 (row 365)

Question:  What is the latest album of Tim Hecker, the Canadian electronic music maker?

Gold answer (review only): Love Streams

Relation checked: latest Tim Hecker album in the source's April 2016 account

Labeled source: Tim Hecker [3]

 His latest album "Love Streams" was released on his new label 4AD on 8 April 2016.

Supporting passages:

**Tim Hecker**

[0] Tim Hecker is an electronic musician and sound artist based in Los Angeles, United States and Montreal, Canada.

[1]  Hecker previously recorded under the moniker Jetone, but has become known internationally for ambient recordings released under his own name, such as "Harmony in Ultraviolet" (2006) and "Ravedeath, 1972" (2011).

[2]  He has released eight albums and a number of EPs in addition to collaborations with artists such as Ben Frost, Daniel Lopatin, and Aidan Baker.

[3]  His latest album "Love Streams" was released on his new label 4AD on 8 April 2016.

**Ravedeath, 1972**

[0] Ravedeath, 1972 is the sixth studio album by Canadian electronic music musician Tim Hecker, released on February 14, 2011 by Kranky.

[1]  Musically sparse, the album was recorded primarily in Frikirkjan Church, Reykjavík, with contributions from Ben Frost.

[2]  The album's central theme is of the degradation of music itself.

[3]  Critical response was largely warm, with many reviewers acknowledging the album as Hecker's finest.

Synthetic conflicting passage:

The latest Tim Hecker album in the source's April 2016 account is Harmony in Ultraviolet. It is not Love Streams. This reference entry describes the particular subject and historical detail identified in the preceding statement. The description concerns that subject alone, rather than a similarly named person, place, organization, or work. The wording refers to the same event, period, and relationship throughout the account. Other details about the subject are outside the scope of this short entry.

Irrelevant passage: **Jimmy Butler (basketball)**

Jimmy Butler III (born September 14, 1989) is an American professional basketball player for the Minnesota Timberwolves of the National Basketball Association (NBA).  Born in Houston, Butler grew up in Tomball, Texas, and played college basketball for Tyler Junior College and Marquette University.  He was drafted with the 30th overall pick in the 2011 NBA draft by the Chicago Bulls.  He is a three-time NBA All-Star and a three-time NBA All-Defensive Team honoree, and was named to his first All-NBA Team in 2017.  In 2015, he was named the NBA Most Improved Player.

Donor provenance: {"rowIndex":5059,"questionId":"5ae61bfd5542992663a4f261","passageIndex":7,"title":"Jimmy Butler (basketball)","sentences":["Jimmy Butler III (born September 14, 1989) is an American professional basketball player for the Minnesota Timberwolves of the National Basketball Association (NBA)."," Born in Houston, Butler grew up in Tomball, Texas, and played college basketball for Tyler Junior College and Marquette University."," He was drafted with the 30th overall pick in the 2011 NBA draft by the Chicago Bulls."," He is a three-time NBA All-Star and a three-time NBA All-Defensive Team honoree, and was named to his first All-NBA Team in 2017."," In 2015, he was named the NBA Most Improved Player."]}

Review: Contradicts the answer-bearing relation: latest Tim Hecker album in the source's April 2016 account. The false assertion explicitly excludes the gold value in the same scope. The source sentence and complete supporting passages are retained for review.

Independent source passage about Jimmy Butler (basketball); no shared content terms with the question or supporting passages, and no answer or evidence-subject match. Review alongside the paired question is in noise-review.md.

Checks: original supporting passages and sentence indices preserved; labeled source span; distinct alternative with scoped denial; unrelated donor 70–100 words; distinct donor; no answer, title or content-term overlap.

## 131. 5adbe1a7554299438c868cc3 (row 366)

Question: What is the name of this Fortune 500 American company that operates a chain of retail home improvement stores that sponsored House Rules?

Gold answer (review only): Lowe's

Relation checked: company sponsoring House Rules

Labeled source: House Rules (2003 TV series) [3]

 The show was sponsored by Lowe's.

Supporting passages:

**House Rules (2003 TV series)**

[0] House Rules is an American television show hosted by Mark L. Walberg that aired on TBS in 2003.

[1]  It featured three couples that competed in a 13-week remodeling contest.

[2]  After doing most of the technical work, the winning team received the home they had just remodeled.

[3]  The show was sponsored by Lowe's.

**Lowe's**

[0] Lowe's Companies, Inc. is a Fortune 500 American company that operates a chain of retail home improvement and appliance stores in the United States, Canada, and Mexico.

[1]  Founded in 1946 in North Wilkesboro, North Carolina, the chain has 1,840 stores in the United States, Canada, and Mexico.

Synthetic conflicting passage:

The company sponsoring House Rules is Home Depot. It is not Lowe's. This reference entry describes the particular subject and historical detail identified in the preceding statement. The description concerns that subject alone, rather than a similarly named person, place, organization, or work. The wording refers to the same event, period, and relationship throughout the account. Other details about the subject are outside the scope of this short entry.

Irrelevant passage: **Trilogy: The Weeping Meadow**

Trilogy: The Weeping Meadow (Greek: Τριλογία: Το λιβάδι που δακρύζει) is an award-winning 2004 Greek romantic historical drama film, written and directed by Theo Angelopoulos.  It stars Alexandra Aidini, Thalia Argyriou, Giorgos Armenis, Vasilis Kolovos and Nikos Poursanidis, and was released during the 2004 Berlin International Film Festival, on 11 February 2004.  It is the first film of a projected trilogy about recent events in Greek history. " The Dust of Time" (2008) is the second film of the trilogy.  In January 2012, Angelopoulos died unexpectedly, leaving the trilogy uncompleted.

Donor provenance: {"rowIndex":5063,"questionId":"5a8639545542991e771815c7","passageIndex":4,"title":"Trilogy: The Weeping Meadow","sentences":["Trilogy: The Weeping Meadow (Greek: Τριλογία: Το λιβάδι που δακρύζει) is an award-winning 2004 Greek romantic historical drama film, written and directed by Theo Angelopoulos."," It stars Alexandra Aidini, Thalia Argyriou, Giorgos Armenis, Vasilis Kolovos and Nikos Poursanidis, and was released during the 2004 Berlin International Film Festival, on 11 February 2004."," It is the first film of a projected trilogy about recent events in Greek history. \"","The Dust of Time\" (2008) is the second film of the trilogy."," In January 2012, Angelopoulos died unexpectedly, leaving the trilogy uncompleted."]}

Review: Contradicts the answer-bearing relation: company sponsoring House Rules. The false assertion explicitly excludes the gold value in the same scope. The source sentence and complete supporting passages are retained for review.

Independent source passage about Trilogy: The Weeping Meadow; no shared content terms with the question or supporting passages, and no answer or evidence-subject match. Review alongside the paired question is in noise-review.md.

Checks: original supporting passages and sentence indices preserved; labeled source span; distinct alternative with scoped denial; unrelated donor 70–100 words; distinct donor; no answer, title or content-term overlap.

## 132. 5ae74890554299572ea547af (row 368)

Question: Haruki Murakami said that writing "Dance Dance Dance" had been a healing act after his unexpected fame following the publication of a novel published in which year ?

Gold answer (review only): 1987

Relation checked: publication year of Norwegian Wood

Labeled source: Norwegian Wood (novel) [0]

Norwegian Wood (ノルウェイの森 , Noruwei no Mori ) is a 1987 novel by Japanese author Haruki Murakami.

Supporting passages:

**Norwegian Wood (novel)**

[0] Norwegian Wood (ノルウェイの森 , Noruwei no Mori ) is a 1987 novel by Japanese author Haruki Murakami.

**Dance Dance Dance (novel)**

[0] Dance Dance Dance (ダンス・ダンス・ダンス , Dansu Dansu Dansu ) is the sixth novel by Japanese writer Haruki Murakami.

[1]  First published in 1988, it was translated into English by Alfred Birnbaum in 1994.

[2]  The book is a sequel to Murakami's novel "A Wild Sheep Chase".

[3]  In 2001, Murakami said that writing "Dance Dance Dance" had been a healing act after his unexpected fame following the publication of "Norwegian Wood" and that, because of this, he had enjoyed writing "Dance" more than any other.

Synthetic conflicting passage:

The publication year of Norwegian Wood is 1988. It is not 1987. This reference entry describes the particular subject and historical detail identified in the preceding statement. The description concerns that subject alone, rather than a similarly named person, place, organization, or work. The wording refers to the same event, period, and relationship throughout the account. Other details about the subject are outside the scope of this short entry.

Irrelevant passage: **Playin' to Win**

Playin' to Win is the fourth album by American southern rock band Outlaws, released in 1978.  (See 1978 in music).  The album is their first without guitarist and singer/songwriter Henry Paul, who had acted as the second frontman behind Hughie Thomasson.  The album was not as well received as the band's previous three albums, even though it still featured most of the original lineup, which would remain until the departure of guitarist Billy Jones.  The album was more straight southern rock than the country rock sound of their previous three, especially the last two.

Donor provenance: {"rowIndex":5057,"questionId":"5ae7ad385542993210983ef0","passageIndex":3,"title":"Playin' to Win","sentences":["Playin' to Win is the fourth album by American southern rock band Outlaws, released in 1978."," (See 1978 in music)."," The album is their first without guitarist and singer/songwriter Henry Paul, who had acted as the second frontman behind Hughie Thomasson."," The album was not as well received as the band's previous three albums, even though it still featured most of the original lineup, which would remain until the departure of guitarist Billy Jones."," The album was more straight southern rock than the country rock sound of their previous three, especially the last two."]}

Review: Contradicts the answer-bearing relation: publication year of Norwegian Wood. The false assertion explicitly excludes the gold value in the same scope. The source sentence and complete supporting passages are retained for review.

Independent source passage about Playin' to Win; no shared content terms with the question or supporting passages, and no answer or evidence-subject match. Review alongside the paired question is in noise-review.md.

Checks: original supporting passages and sentence indices preserved; labeled source span; distinct alternative with scoped denial; unrelated donor 70–100 words; distinct donor; no answer, title or content-term overlap.

## 133. 5ac3d9c9554299204fd21ea3 (row 369)

Question: Erica Packer was the second wife of what Australian businessman?

Gold answer (review only): James Packer

Relation checked: Australian businessman whose second wife was Erica Packer

Labeled source: Erica Packer [1]

 She was the second wife of Australia's eighth richest man, James Packer.

Supporting passages:

**James Packer**

[0] James Douglas Packer (born 8 September 1967) is an Australian businessman and investor.

**Erica Packer**

[0] Erica Georgia Packer (née Baxter; born 10 November 1977) is an Australian singer and model.

[1]  She was the second wife of Australia's eighth richest man, James Packer.

Synthetic conflicting passage:

The Australian businessman whose second wife was Erica Packer is Rupert Murdoch. It is not James Packer. This reference entry describes the particular subject and historical detail identified in the preceding statement. The description concerns that subject alone, rather than a similarly named person, place, organization, or work. The wording refers to the same event, period, and relationship throughout the account. Other details about the subject are outside the scope of this short entry.

Irrelevant passage: **Central Market (Texas)**

Central Market is an American gourmet grocery store chain owned by H-E-B Grocery Company based in San Antonio, Texas.  It specializes in high-quality, hard-to-find gourmet foods.  Most locations also have a full-service kitchen, offer cooking and wine classes in their culinary school, and offer catering services.  The chain has nine locations, all in Texas.  Central Market was named "Outstanding Specialty Food Retailer" by "Specialty Food Magazine" and the National Association for Specialty Food Trade.

Donor provenance: {"rowIndex":5058,"questionId":"5a8f157e554299458435d54d","passageIndex":0,"title":"Central Market (Texas)","sentences":["Central Market is an American gourmet grocery store chain owned by H-E-B Grocery Company based in San Antonio, Texas."," It specializes in high-quality, hard-to-find gourmet foods."," Most locations also have a full-service kitchen, offer cooking and wine classes in their culinary school, and offer catering services."," The chain has nine locations, all in Texas."," Central Market was named \"Outstanding Specialty Food Retailer\" by \"Specialty Food Magazine\" and the National Association for Specialty Food Trade."]}

Review: Contradicts the answer-bearing relation: Australian businessman whose second wife was Erica Packer. The false assertion explicitly excludes the gold value in the same scope. The source sentence and complete supporting passages are retained for review.

Independent source passage about Central Market (Texas); no shared content terms with the question or supporting passages, and no answer or evidence-subject match. Review alongside the paired question is in noise-review.md.

Checks: original supporting passages and sentence indices preserved; labeled source span; distinct alternative with scoped denial; unrelated donor 70–100 words; distinct donor; no answer, title or content-term overlap.

## 134. 5a7b4bc35542992d025e67e0 (row 371)

Question: What country does Eric A. Sykes and Eccles, Greater Manchester have ion common?

Gold answer (review only): England

Relation checked: country shared by Eric A. Sykes's birthplace and Eccles, Greater Manchester

Labeled source: Eric A. Sykes [0]

Eric Anthony Sykes (5 February 1883–12 May 1945), born Eric Anthony Schwabe in Barton-upon-Irwell, Eccles, Greater Manchester, England, was a soldier and firearms expert.

Supporting passages:

**Eccles, Greater Manchester**

[0] Eccles (/ˈɛkəlz/; pop.

[1]  38,756 (2011)) is a town in Greater Manchester, England, 2.7 mi west of Salford and 3.7 mi west of Manchester city centre, between the M602 motorway to the north and the Manchester Ship Canal to the south.

**Eric A. Sykes**

[0] Eric Anthony Sykes (5 February 1883–12 May 1945), born Eric Anthony Schwabe in Barton-upon-Irwell, Eccles, Greater Manchester, England, was a soldier and firearms expert.

[1]  He is most famous for his work with William E. Fairbairn in the development of the eponymous Fairbairn-Sykes Fighting Knife and modern British Close Quarters Battle (CQB) martial arts during World War II.

[2]  Originally working for an import/export company selling weapons in East Asia, he claimed he volunteered for and served in the British Army as a sharpshooter on the Western Front during World War I.

[3]  Returning to China in 1917, he joined the volunteer branch of the Shanghai Municipal Police (SMP) Specials with the rank of Inspector in 1926.

Synthetic conflicting passage:

The country shared by Eric A. Sykes's birthplace and Eccles, Greater Manchester is Scotland. It is not England. This reference entry describes the particular subject and historical detail identified in the preceding statement. The description concerns that subject alone, rather than a similarly named person, place, organization, or work. The wording refers to the same event, period, and relationship throughout the account. Other details about the subject are outside the scope of this short entry.

Irrelevant passage: **Garnet Carter**

John Garnet Carter (Feb. 9, 1883, in Sweetwater, Tennessee – July 21, 1954) was an American inventor and entrepreneur who is considered as one of the fathers of miniature golf.  In 1927, Carter was the first to patent a version of the game which he called "Tom Thumb Golf".  His course was built on Lookout Mountain in Georgia where Carter owned a hotel.  Within a few years, thousands of Tom Thumb courses opened all over the United States.  Carter eventually sold the rights to his patent and used his fortune to found the Rock City Gardens.

Donor provenance: {"rowIndex":5058,"questionId":"5a8f157e554299458435d54d","passageIndex":4,"title":"Garnet Carter","sentences":["John Garnet Carter (Feb. 9, 1883, in Sweetwater, Tennessee – July 21, 1954) was an American inventor and entrepreneur who is considered as one of the fathers of miniature golf."," In 1927, Carter was the first to patent a version of the game which he called \"Tom Thumb Golf\"."," His course was built on Lookout Mountain in Georgia where Carter owned a hotel."," Within a few years, thousands of Tom Thumb courses opened all over the United States."," Carter eventually sold the rights to his patent and used his fortune to found the Rock City Gardens."]}

Review: Contradicts the answer-bearing relation: country shared by Eric A. Sykes's birthplace and Eccles, Greater Manchester. The false assertion explicitly excludes the gold value in the same scope. The source sentence and complete supporting passages are retained for review.

Independent source passage about Garnet Carter; no shared content terms with the question or supporting passages, and no answer or evidence-subject match. Review alongside the paired question is in noise-review.md.

Checks: original supporting passages and sentence indices preserved; labeled source span; distinct alternative with scoped denial; unrelated donor 70–100 words; distinct donor; no answer, title or content-term overlap.

## 135. 5a8c66db554299585d9e3683 (row 374)

Question: What year was the film "Mom" released, starring the voice of Shashaa Tirupati?

Gold answer (review only): 2017

Relation checked: release year of Mom starring the voice of Shashaa Tirupati

Labeled source: Mom (film) [0]

Mom is a 2017 Indian thriller film directed by Ravi Udyawar.

Supporting passages:

**Shashaa Tirupati**

[0] Shashaa Tirupati is a playback singer, songwriter and voice over artist of Indo-Canadian origin, with family roots in Kashmir, predominantly active in the Bollywood and South Indian music industries.

[1]  She is the voice behind Bollywood hits such as: "The Humma Song" (OK Jaanu), "Phir Bhi Tumko Chahunga" (with Arijit Singh) (Half Girlfriend), "Baarish" (Half Girlfriend), "Kanha" (Shubh Mangal Saavdhan), "O Sona Tere Liye" (with A.R. Rahman) and "Chal Kahin Door", both from the Sridevi starrer MOM.

**Mom (film)**

[0] Mom is a 2017 Indian thriller film directed by Ravi Udyawar.

[1]  Produced by Boney Kapoor, Sunil Manchanda, Mukesh Talreja, Naresh Agarwal and Gautam Jain, the film stars Sridevi, as a vigilante, who sets out to avenge her daughter, played by Sajal Ali.

[2]  Adnan Siddiqui.

[3]  Akshaye Khanna and Nawazuddin Siddiqui play supporting roles in the film.

[4]  Music for the film has been produced by A. R. Rahman.

[5]  The film was released on 7 July 2017, in four languages, and received positive reviews from film critics.

[6]  It was successful commercially as well.

[7]  "Mom" marked Sridevi's 300th film appearance.

Synthetic conflicting passage:

The release year of Mom starring the voice of Shashaa Tirupati is 2016. It is not 2017. This reference entry describes the particular subject and historical detail identified in the preceding statement. The description concerns that subject alone, rather than a similarly named person, place, organization, or work. The wording refers to the same event, period, and relationship throughout the account. Other details about the subject are outside the scope of this short entry.

Irrelevant passage: **2006–2008 Cuban transfer of presidential duties**

With the 2006–2008 Cuban transfer of presidential duties, the Cuban presidential powers and duties were passed on from President Fidel Castro to the first vice president, his brother Raúl Castro, following Fidel's operation and recovery from an undisclosed digestive illness believed to be diverticulitis.  Although Raúl Castro exercised the duties of president, Fidel Castro retained the title of President of Cuba, formally the President of the Council of State of Cuba, during this period.

Donor provenance: {"rowIndex":5065,"questionId":"5a7415cf55429979e28828a6","passageIndex":2,"title":"2006–2008 Cuban transfer of presidential duties","sentences":["With the 2006–2008 Cuban transfer of presidential duties, the Cuban presidential powers and duties were passed on from President Fidel Castro to the first vice president, his brother Raúl Castro, following Fidel's operation and recovery from an undisclosed digestive illness believed to be diverticulitis."," Although Raúl Castro exercised the duties of president, Fidel Castro retained the title of President of Cuba, formally the President of the Council of State of Cuba, during this period."]}

Review: Contradicts the answer-bearing relation: release year of Mom starring the voice of Shashaa Tirupati. The false assertion explicitly excludes the gold value in the same scope. The source sentence and complete supporting passages are retained for review.

Independent source passage about 2006–2008 Cuban transfer of presidential duties; no shared content terms with the question or supporting passages, and no answer or evidence-subject match. Review alongside the paired question is in noise-review.md.

Checks: original supporting passages and sentence indices preserved; labeled source span; distinct alternative with scoped denial; unrelated donor 70–100 words; distinct donor; no answer, title or content-term overlap.

## 136. 5a7e05ba5542995f4f402392 (row 375)

Question: For One Night Only was hosted by the man most well-known for hosting what show from 1962 until 1999?

Gold answer (review only): The Late Late Show

Relation checked: show Gay Byrne hosted from 1962 until 1999

Labeled source: Gay Byrne [1]

 His most notable role was first host of "The Late Late Show" over a 37-year period spanning 1962 until 1999.

Supporting passages:

**Gay Byrne**

[0] Gabriel Mary "Gay" Byrne (born 5 August 1934; affectionately known as Uncle Gay, Gaybo or Uncle Gaybo) is an Irish presenter of radio and television.

[1]  His most notable role was first host of "The Late Late Show" over a 37-year period spanning 1962 until 1999.

[2]  "The Late Late Show" is the world's second longest-running chat show.

[3]  His time working in Britain with Granada Television saw him become the first person to introduce the Beatles on screen.

**For One Night Only (Irish TV series)**

[0] For One Night Only is an Irish light entertainment show hosted by Gay Byrne.

[1]  It features music and chat with a special guest musician.

[2]  The studio-based show originally aired on Friday nights as a summer "filler" in 2011.

[3]  The show returned for a second series in 2012.

Synthetic conflicting passage:

The show Gay Byrne hosted from 1962 until 1999 is The Tonight Show. It is not The Late Late Show. This reference entry describes the particular subject and historical detail identified in the preceding statement. The description concerns that subject alone, rather than a similarly named person, place, organization, or work. The wording refers to the same event, period, and relationship throughout the account. Other details about the subject are outside the scope of this short entry.

Irrelevant passage: **Comanche Station**

Comanche Station is a 1960 American CinemaScope western Eastman Color film directed by Budd Boetticher and starring Randolph Scott, Nancy Gates and Claude Akins.  The film was the last of Boetticher's late 1950s "Ranown Cycle".  It was filmed in the Eastern Sierra area of Central California near Lone Pine, California, not far from the foot of Mount Whitney.  The mountainous accumulations of boulders known as the Alabama Hills served as the backdrop for the film's opening and closing scenes.

Donor provenance: {"rowIndex":5063,"questionId":"5a8639545542991e771815c7","passageIndex":2,"title":"Comanche Station","sentences":["Comanche Station is a 1960 American CinemaScope western Eastman Color film directed by Budd Boetticher and starring Randolph Scott, Nancy Gates and Claude Akins."," The film was the last of Boetticher's late 1950s \"Ranown Cycle\"."," It was filmed in the Eastern Sierra area of Central California near Lone Pine, California, not far from the foot of Mount Whitney."," The mountainous accumulations of boulders known as the Alabama Hills served as the backdrop for the film's opening and closing scenes."]}

Review: Contradicts the answer-bearing relation: show Gay Byrne hosted from 1962 until 1999. The false assertion explicitly excludes the gold value in the same scope. The source sentence and complete supporting passages are retained for review.

Independent source passage about Comanche Station; no shared content terms with the question or supporting passages, and no answer or evidence-subject match. Review alongside the paired question is in noise-review.md.

Checks: original supporting passages and sentence indices preserved; labeled source span; distinct alternative with scoped denial; unrelated donor 70–100 words; distinct donor; no answer, title or content-term overlap.

## 137. 5ab7bae95542993667793ff4 (row 381)

Question: Who did the Doncaster Belles play in the 1994 FA Women's Cup Final held at Glanford Park? 

Gold answer (review only): Knowsley United Women

Relation checked: team opposing Doncaster Belles in the 1994 FA Women's Cup Final

Labeled source: 1994 FA Women's Cup Final [1]

 The showpiece event was played between Doncaster Belles and Knowsley United Women at Glanford Park in Scunthorpe on 24 April 1994.

Supporting passages:

**Glanford Park**

[0] Glanford Park is a football stadium in Scunthorpe, North Lincolnshire, England, and is the current home of Scunthorpe United.

**1994 FA Women's Cup Final**

[0] The 1994 FA Women's Cup Final was the 24th final of the FA Women's Cup, England's primary cup competition for women's football teams.

[1]  The showpiece event was played between Doncaster Belles and Knowsley United Women at Glanford Park in Scunthorpe on 24 April 1994.

[2]  Knowsley United made its first final appearance, after losing the previous season's FA Women's Premier League Cup final at Wembley.

[3]  Doncaster Belles entered their 11th final in 12 seasons, having won the trophy on five of those occasions.

Synthetic conflicting passage:

The team opposing Doncaster Belles in the 1994 FA Women's Cup Final is Arsenal Women. It is not Knowsley United Women. This reference entry describes the particular subject and historical detail identified in the preceding statement. The description concerns that subject alone, rather than a similarly named person, place, organization, or work. The wording refers to the same event, period, and relationship throughout the account. Other details about the subject are outside the scope of this short entry.

Irrelevant passage: **Frank País**

Frank País Pesqueira (December 7, 1934 – July 30, 1957) was a Cuban revolutionary who campaigned for the overthrow of General Fulgencio Batista's government in Cuba.  País was the urban coordinator of the 26th of July Movement, and was a key organizer within the urban underground movement, collaborating with Fidel Castro's guerrilla forces which were conducting activities in the Sierra Maestra mountains.  País was killed in the streets of Santiago de Cuba by the Santiago police on July 30, 1957.

Donor provenance: {"rowIndex":5065,"questionId":"5a7415cf55429979e28828a6","passageIndex":8,"title":"Frank País","sentences":["Frank País Pesqueira (December 7, 1934 – July 30, 1957) was a Cuban revolutionary who campaigned for the overthrow of General Fulgencio Batista's government in Cuba."," País was the urban coordinator of the 26th of July Movement, and was a key organizer within the urban underground movement, collaborating with Fidel Castro's guerrilla forces which were conducting activities in the Sierra Maestra mountains."," País was killed in the streets of Santiago de Cuba by the Santiago police on July 30, 1957."]}

Review: Contradicts the answer-bearing relation: team opposing Doncaster Belles in the 1994 FA Women's Cup Final. The false assertion explicitly excludes the gold value in the same scope. The source sentence and complete supporting passages are retained for review.

Independent source passage about Frank País; no shared content terms with the question or supporting passages, and no answer or evidence-subject match. Review alongside the paired question is in noise-review.md.

Checks: original supporting passages and sentence indices preserved; labeled source span; distinct alternative with scoped denial; unrelated donor 70–100 words; distinct donor; no answer, title or content-term overlap.

## 138. 5ab67bd355429954757d32f2 (row 385)

Question: Curt Menefee is the host of the Fox network's NFL show with co-host Michael Anthony Strahan who spent his entire 15-year career with what team?

Gold answer (review only): New York Giants

Relation checked: team for which Michael Strahan spent his entire 15-year NFL career

Labeled source: Michael Strahan [0]

Michael Anthony Strahan ( ; born November 21, 1971) is a media personality and former American football defensive end who spent his entire 15-year career with the New York Giants of the National Football League (NFL).

Supporting passages:

**Michael Strahan**

[0] Michael Anthony Strahan ( ; born November 21, 1971) is a media personality and former American football defensive end who spent his entire 15-year career with the New York Giants of the National Football League (NFL).

[1]  Strahan set a record for the most sacks in a season in 2001, and helped the Giants win Super Bowl XLII over the New England Patriots in his final season in 2007.

[2]  After retiring from the NFL, Strahan became a media personality.

[3]  He is currently a football analyst on "Fox NFL Sunday", and has also served as co-host on the syndicated morning talk show "Live!

[4]  with Kelly and Michael" with co-host Kelly Ripa from 2012 to 2016, where he was a two-time Daytime Emmy Award winner.

[5]  In 2014, he became a regular contributor on the ABC morning television show "Good Morning America", and in 2016 the network announced that Strahan would be leaving "Live!"

[6]  to join "GMA" on a full-time basis.

[7]  He starred in and produced the short-lived Fox sitcom "Brothers" and appeared as host for "Pros vs. Joes" alongside fellow Fox football analyst Jay Glazer.

[8]  On February 1, 2014, he was elected to the Pro Football Hall of Fame.

[9]  As of 2016, he is the host of the ABC game show "The $100,000 Pyramid".

**Curt Menefee**

[0] Curt Menefee (born July 22, 1965) is an American sportscaster who is the host of the Fox network's NFL show "Fox NFL Sunday".

[1]  His co-hosts are Jimmy Johnson, Terry Bradshaw, Howie Long, and Michael Strahan.

Synthetic conflicting passage:

The team for which Michael Strahan spent his entire 15-year NFL career is New York Jets. It is not New York Giants. This reference entry describes the particular subject and historical detail identified in the preceding statement. The description concerns that subject alone, rather than a similarly named person, place, organization, or work. The wording refers to the same event, period, and relationship throughout the account. Other details about the subject are outside the scope of this short entry.

Irrelevant passage: **SWX Right Now**

SWX Right Now (Sports and Weather Right Now) is a digital subchannel broadcasting high school and college sports, and automated weather information of interest to viewers throughout Eastern Washington state.  The channel is operated by Cowles Company and airs over Cowles' three NBC affiliated channels in Eastern Washington, including Spokane's KHQ, KNDO in Yakima and Richland's KNDU, as well as Billings' KULR in Montana, and on most cable systems throughout the markets they serve.

Donor provenance: {"rowIndex":5066,"questionId":"5abe3dc65542993f32c2a0c4","passageIndex":9,"title":"SWX Right Now","sentences":["SWX Right Now (Sports and Weather Right Now) is a digital subchannel broadcasting high school and college sports, and automated weather information of interest to viewers throughout Eastern Washington state."," The channel is operated by Cowles Company and airs over Cowles' three NBC affiliated channels in Eastern Washington, including Spokane's KHQ, KNDO in Yakima and Richland's KNDU, as well as Billings' KULR in Montana, and on most cable systems throughout the markets they serve."]}

Review: Contradicts the answer-bearing relation: team for which Michael Strahan spent his entire 15-year NFL career. The false assertion explicitly excludes the gold value in the same scope. The source sentence and complete supporting passages are retained for review.

Independent source passage about SWX Right Now; no shared content terms with the question or supporting passages, and no answer or evidence-subject match. Review alongside the paired question is in noise-review.md.

Checks: original supporting passages and sentence indices preserved; labeled source span; distinct alternative with scoped denial; unrelated donor 70–100 words; distinct donor; no answer, title or content-term overlap.

## 139. 5a90843c5542995651fb517e (row 386)

Question: Francisco Jose Hernandez was a participant in an invasion that took place in what year?

Gold answer (review only): 1961

Relation checked: year of the Bay of Pigs invasion

Labeled source: Bay of Pigs Invasion [0]

The Bay of Pigs Invasion (Spanish: Invasión de Playa Girón or Invasión de Bahía de Cochinos or Batalla de Girón) was a failed military invasion of Cuba undertaken by the Central Intelligence Agency (CIA)-sponsored paramilitary group Brigade 2506 on 17 April 1961.

Supporting passages:

**Bay of Pigs Invasion**

[0] The Bay of Pigs Invasion (Spanish: Invasión de Playa Girón or Invasión de Bahía de Cochinos or Batalla de Girón) was a failed military invasion of Cuba undertaken by the Central Intelligence Agency (CIA)-sponsored paramilitary group Brigade 2506 on 17 April 1961.

[1]  A counter-revolutionary military (made up of Cuban exiles who traveled to the United States after Castro's takeover), trained and funded by the CIA, Brigade 2506 fronted the armed wing of the Democratic Revolutionary Front (DRF) and intended to overthrow the increasingly communist government of Fidel Castro.

[2]  Launched from Guatemala and Nicaragua, the invading force was defeated within three days by the Cuban Revolutionary Armed Forces, under the direct command of Castro.

**Francisco Jose Hernandez**

[0] Francisco José Hernández, known as "Pepe", (Havana, 1 September 1936) is a Cuban exile of the 1960s, anti-Castro, and Bay of Pigs Invasion participant who is co-founder and president of the Cuban American National Foundation that claims to be taking a less overt position against the Cuban form of government.

Synthetic conflicting passage:

The year of the Bay of Pigs invasion is 1962. It is not 1961. This reference entry describes the particular subject and historical detail identified in the preceding statement. The description concerns that subject alone, rather than a similarly named person, place, organization, or work. The wording refers to the same event, period, and relationship throughout the account. Other details about the subject are outside the scope of this short entry.

Irrelevant passage: **Minerva Gymnasium**

Minerva Gymnasium (or Minervagymnasium) is an independent upper secondary school in Umeå, Sweden.  It was established in 2002 and is located in the vicinity of the University area, IKSU Sport as well as the Uminova Science Park.  The facilities used by the school was formerly office spaces for Ericsson, and is currently shared by IT consulting firm Tieto.  Admission requirements for Minerva Gymnasium involves adequate final grades (E) in Swedish, Mathematics, English as well as 9 other subjects.  The school is also approved for nationwide admission of students.

Donor provenance: {"rowIndex":5067,"questionId":"5add566b5542995b365fab14","passageIndex":7,"title":"Minerva Gymnasium","sentences":["Minerva Gymnasium (or Minervagymnasium) is an independent upper secondary school in Umeå, Sweden."," It was established in 2002 and is located in the vicinity of the University area, IKSU Sport as well as the Uminova Science Park."," The facilities used by the school was formerly office spaces for Ericsson, and is currently shared by IT consulting firm Tieto."," Admission requirements for Minerva Gymnasium involves adequate final grades (E) in Swedish, Mathematics, English as well as 9 other subjects."," The school is also approved for nationwide admission of students."]}

Review: Contradicts the answer-bearing relation: year of the Bay of Pigs invasion. The false assertion explicitly excludes the gold value in the same scope. The source sentence and complete supporting passages are retained for review.

Independent source passage about Minerva Gymnasium; no shared content terms with the question or supporting passages, and no answer or evidence-subject match. Review alongside the paired question is in noise-review.md.

Checks: original supporting passages and sentence indices preserved; labeled source span; distinct alternative with scoped denial; unrelated donor 70–100 words; distinct donor; no answer, title or content-term overlap.

## 140. 5a8324815542990548d0b184 (row 387)

Question: Dead but Rising was a song by the Danish band fomed in what city in 2001?

Gold answer (review only): Copenhagen

Relation checked: city where Volbeat was formed in 2001

Labeled source: Volbeat [0]

Volbeat are a Danish heavy metal band formed in Copenhagen in 2001.

Supporting passages:

**Dead but Rising**

[0] "Dead but Rising" is a song by Danish heavy metal band Volbeat.

[1]  The song was released as the seventh single from the band's fifth studio album "Outlaw Gentlemen & Shady Ladies".

**Volbeat**

[0] Volbeat are a Danish heavy metal band formed in Copenhagen in 2001.

[1]  They play a fusion of rock and roll, heavy metal and rockabilly.

[2]  They are inspired by classic rock and roll artists such as Elvis Presley and Johnny Cash, as well as modern hard rock, thrash metal, heavy metal, alternative rock and hardcore punk groups.

[3]  Their current line-up consists of vocalist and guitarist Michael Poulsen, guitarist Rob Caggiano, drummer Jon Larsen and bassist Kaspar Boye Larsen.

[4]  The band is signed to Dutch label Mascot Records and has released six studio albums and one DVD.

[5]  All of their studio albums have been certified gold in Denmark.

[6]  Their second album "Rock the Rebel/Metal the Devil" received platinum status, and their 2010 release "Beyond Hell/Above Heaven" was subject to widespread international critical acclaim, receiving double platinum in Denmark, platinum in Finland and Germany, and gold in the United States, Sweden and Austria.

[7]  Volbeat's sixth album entitled "Seal the Deal & Let's Boogie" was released worldwide on 3 June 2016.

Synthetic conflicting passage:

The city where Volbeat was formed in 2001 is Aarhus. It is not Copenhagen. This reference entry describes the particular subject and historical detail identified in the preceding statement. The description concerns that subject alone, rather than a similarly named person, place, organization, or work. The wording refers to the same event, period, and relationship throughout the account. Other details about the subject are outside the scope of this short entry.

Irrelevant passage: **Third Window Films**

Third Window Films is a UK-based distributor of movies from East Asia founded in 2005.  They have provided distribution for numerous award winning films, such as "Oasis" (Winner of Marcello Mastroianni Award, FIPRESCI Prize Signis Award and Special Director's Award at the Venice Film Festival), "Himizu" (Winner of the Marcello Mastroianni Award at the Venice Film Festival), "Villain" (Best Actress winner at the Montreal Film Festival), "Kotoko" (Winner of the Best Film Award in the Orrizonti of the Venice Film Festival), "Memories of Matsuko" (Best Actress, Best Editing and Best Music at Japan Academy Award and more.

Donor provenance: {"rowIndex":5068,"questionId":"5ab925fd554299131ca42281","passageIndex":9,"title":"Third Window Films","sentences":["Third Window Films is a UK-based distributor of movies from East Asia founded in 2005."," They have provided distribution for numerous award winning films, such as \"Oasis\" (Winner of Marcello Mastroianni Award, FIPRESCI Prize Signis Award and Special Director's Award at the Venice Film Festival), \"Himizu\" (Winner of the Marcello Mastroianni Award at the Venice Film Festival), \"Villain\" (Best Actress winner at the Montreal Film Festival), \"Kotoko\" (Winner of the Best Film Award in the Orrizonti of the Venice Film Festival), \"Memories of Matsuko\" (Best Actress, Best Editing and Best Music at Japan Academy Award and more."]}

Review: Contradicts the answer-bearing relation: city where Volbeat was formed in 2001. The false assertion explicitly excludes the gold value in the same scope. The source sentence and complete supporting passages are retained for review.

Independent source passage about Third Window Films; no shared content terms with the question or supporting passages, and no answer or evidence-subject match. Review alongside the paired question is in noise-review.md.

Checks: original supporting passages and sentence indices preserved; labeled source span; distinct alternative with scoped denial; unrelated donor 70–100 words; distinct donor; no answer, title or content-term overlap.

## 141. 5ab48c325542996a3a969f93 (row 393)

Question: In which county is the English king Harold Godwinson buried?

Gold answer (review only): Essex

Relation checked: English county containing Waltham Abbey where Harold Godwinson is buried

Labeled source: Waltham Abbey Church [0]

The Abbey Church of Waltham Holy Cross and St Lawrence is the parish church of the town of Waltham Abbey, Essex, England.

Supporting passages:

**Edith Walks**

[0] Edith Walks is a 2017 documentary film directed by Andrew Kötting which imagines a journey by Edith the Fair, wife of English king Harold Godwinson, from Waltham Abbey where he is buried to near the site of the Battle of Hastings and the invasion of England by William the Conqueror in 1066.

[1]  It includes contributions from the writers Alan Moore and Iain Sinclair, the torch singer Claudia Barton, and the musician Jem Finer.

**Waltham Abbey Church**

[0] The Abbey Church of Waltham Holy Cross and St Lawrence is the parish church of the town of Waltham Abbey, Essex, England.

[1]  It has been a place of worship since the 7th century.

[2]  The present building dates mainly from the early 12th century and is an example of Norman architecture.

[3]  To the east of the existing church are traces of an enormous eastward enlargement of the building, begun following the re-foundation of the abbey in 1177.

[4]  In the Late Middle Ages, Waltham was one of the largest church buildings in England and a major site of pilgrimage; in 1540 was the last religious community to be closed during the Dissolution of the Monasteries.

[5]  It is still an active parish church for the town.

Synthetic conflicting passage:

The English county containing Waltham Abbey where Harold Godwinson is buried is Kent. It is not Essex. This reference entry describes the particular subject and historical detail identified in the preceding statement. The description concerns that subject alone, rather than a similarly named person, place, organization, or work. The wording refers to the same event, period, and relationship throughout the account. Other details about the subject are outside the scope of this short entry.

Irrelevant passage: **KEWF**

KEWF is a commercial radio station in Billings, Montana, broadcasting on 98.5 FM.  KEWF airs a country music format branded as “98.5 The Wolf”.  The station formerly went by the call letters KGHL- FM before former sister station KGHL- AM 790 was sold to new owner Northern Broadcasting System.  Licensed to Billings, Montana, United States, the station serves the Billings area.  The station is currently owned by Radio Billings, LLC.

Donor provenance: {"rowIndex":5066,"questionId":"5abe3dc65542993f32c2a0c4","passageIndex":1,"title":"KEWF","sentences":["KEWF is a commercial radio station in Billings, Montana, broadcasting on 98.5 FM."," KEWF airs a country music format branded as “98.5 The Wolf”."," The station formerly went by the call letters KGHL- FM before former sister station KGHL- AM 790 was sold to new owner Northern Broadcasting System."," Licensed to Billings, Montana, United States, the station serves the Billings area."," The station is currently owned by Radio Billings, LLC."]}

Review: Contradicts the answer-bearing relation: English county containing Waltham Abbey where Harold Godwinson is buried. The false assertion explicitly excludes the gold value in the same scope. The source sentence and complete supporting passages are retained for review.

Independent source passage about KEWF; no shared content terms with the question or supporting passages, and no answer or evidence-subject match. Review alongside the paired question is in noise-review.md.

Checks: original supporting passages and sentence indices preserved; labeled source span; distinct alternative with scoped denial; unrelated donor 70–100 words; distinct donor; no answer, title or content-term overlap.

## 142. 5a85c3a15542992a431d1b97 (row 398)

Question: Snowdrop is a proprietary game engine first revealed with an online-only action role-playing video game developed by who?

Gold answer (review only): Massive Entertainment

Relation checked: developer of Tom Clancy's The Division

Labeled source: Tom Clancy's The Division [0]

Tom Clancy's The Division is an online-only action role-playing video game developed by Massive Entertainment and published by Ubisoft, with assistance from Red Storm Entertainment, for Microsoft Windows, PlayStation 4 and Xbox One.

Supporting passages:

**Tom Clancy's The Division**

[0] Tom Clancy's The Division is an online-only action role-playing video game developed by Massive Entertainment and published by Ubisoft, with assistance from Red Storm Entertainment, for Microsoft Windows, PlayStation 4 and Xbox One.

[1]  It was announced during Ubisoft's E3 2013 press conference, and was released worldwide on 8 March 2016.

[2]  It is set in a near future New York City in the aftermath of a smallpox pandemic; the player, who is an agent of the eponymous Strategic Homeland Division, commonly referred to as simply "The Division", is tasked with helping the group rebuild its operations in Manhattan, investigate the nature of the outbreak, and combating criminal activity in its wake.

[3]  "The Division" is structured with elements of role-playing games, as well as collaborative and player versus player online multiplayer.

**Snowdrop (game engine)**

[0] Snowdrop is a proprietary game engine created by Ubisoft for use on Microsoft Windows, Nintendo Switch, PlayStation 4, and Xbox One.

[1]  It was first revealed at E3 2013 with "Tom Clancy's The Division", the first game using the engine.

Synthetic conflicting passage:

The developer of Tom Clancy's The Division is Ubisoft Montreal. It is not Massive Entertainment. This reference entry describes the particular subject and historical detail identified in the preceding statement. The description concerns that subject alone, rather than a similarly named person, place, organization, or work. The wording refers to the same event, period, and relationship throughout the account. Other details about the subject are outside the scope of this short entry.

Irrelevant passage: **Heartstone (film)**

Heartstone is a 2016 Icelandic drama film directed by Guðmundur Arnar Guðmundsson.  It was screened in the Discovery section at the 2016 Toronto International Film Festival.  On 9 September 2016, the film won the Queer Lion at the 73rd Venice Film Festival.  It was the first Icelandic film to be shown in a competitive section of the Venice Film Festival.  It was also nominated for the 2017 Nordic Council Film Prize.

Donor provenance: {"rowIndex":5068,"questionId":"5ab925fd554299131ca42281","passageIndex":4,"title":"Heartstone (film)","sentences":["Heartstone is a 2016 Icelandic drama film directed by Guðmundur Arnar Guðmundsson."," It was screened in the Discovery section at the 2016 Toronto International Film Festival."," On 9 September 2016, the film won the Queer Lion at the 73rd Venice Film Festival."," It was the first Icelandic film to be shown in a competitive section of the Venice Film Festival."," It was also nominated for the 2017 Nordic Council Film Prize."]}

Review: Contradicts the answer-bearing relation: developer of Tom Clancy's The Division. The false assertion explicitly excludes the gold value in the same scope. The source sentence and complete supporting passages are retained for review.

Independent source passage about Heartstone (film); no shared content terms with the question or supporting passages, and no answer or evidence-subject match. Review alongside the paired question is in noise-review.md.

Checks: original supporting passages and sentence indices preserved; labeled source span; distinct alternative with scoped denial; unrelated donor 70–100 words; distinct donor; no answer, title or content-term overlap.

## 143. 5ae32b6755429928c4239644 (row 399)

Question: Wendy Ayche was featured in 2016 in an annual production created by Youtube and what other organization?

Gold answer (review only): Portal A Interactive

Relation checked: organization co-producing YouTube Rewind with YouTube

Labeled source: YouTube Rewind [0]

YouTube Rewind is a video series produced and created by YouTube and Portal A Interactive.

Supporting passages:

**Wengie**

[0] Wendy Ayche (born January 9 1986) known professionally as Wengie, is an Australian YouTube personality and vlogger.

[1]  She was born in Guangzhou, China.

[2]  She got the nickname "Wengie" at a dance class when two people gave her a nickname inspired by her Chinese name, Wén Jié.

[3]  Since starting her channel on February 11 2013, her videos have received over 281 million views, and her channel has accumulated over 11 followers In the January 2016 edition of "ElleGirl Japan", she was nominated as a channel to watch.

[4]  In August 2016, she was ranked the 5th Fastest growing channel in the world.

[5]  Ayche was featured in the annual YouTube Rewind in 2016 and was also singled out by Google as one of the top beauty creators in the Asia region.

[6]  Ayche reached 5 million YouTube subscribers in January 2017, and her channel is currently in the 12th most subscribed How-To & Style Channel on YouTube.

[7]  She is also currently a board member of the Internet Creators Guild, a non-profit focused on providing the protection, representation and guidance to online creators.

[8]  Her YouTube channel also recently got awarded with "Best Channel" as well as "Overall Winner" for the Australian Online Video Awards.

**YouTube Rewind**

[0] YouTube Rewind is a video series produced and created by YouTube and Portal A Interactive.

[1]  These videos are an overview and recap of each year's viral videos, events, memes, and music.

[2]  Each year, the number of YouTube celebrities featured in the video, as well as the presentation of the series, have increased.

[3]  The latest episode of "YouTube Rewind" was released on December 8, 2016.

Synthetic conflicting passage:

The organization co-producing YouTube Rewind with YouTube is Maker Studios. It is not Portal A Interactive. This reference entry describes the particular subject and historical detail identified in the preceding statement. The description concerns that subject alone, rather than a similarly named person, place, organization, or work. The wording refers to the same event, period, and relationship throughout the account. Other details about the subject are outside the scope of this short entry.

Irrelevant passage: **Qualcomm**

Qualcomm is an American multinational semiconductor and telecommunications equipment company that designs and markets wireless telecommunications products and services.  It derives most of its revenue from chipmaking and the bulk of its profit from patent licensing businesses.  The company headquarters is located in San Diego, California, United States, and has 224 worldwide locations.  The parent company is Qualcomm Incorporated (Qualcomm), which includes the Qualcomm Technology Licensing Division (QTL).  Qualcomm's wholly owned subsidiary, Qualcomm Technologies, Inc. (QTI), operates substantially all of Qualcomm's R&D activities, as well as its product and services businesses, including its semiconductor business, Qualcomm CDMA Technologies.

Donor provenance: {"rowIndex":5067,"questionId":"5add566b5542995b365fab14","passageIndex":4,"title":"Qualcomm","sentences":["Qualcomm is an American multinational semiconductor and telecommunications equipment company that designs and markets wireless telecommunications products and services."," It derives most of its revenue from chipmaking and the bulk of its profit from patent licensing businesses."," The company headquarters is located in San Diego, California, United States, and has 224 worldwide locations."," The parent company is Qualcomm Incorporated (Qualcomm), which includes the Qualcomm Technology Licensing Division (QTL)."," Qualcomm's wholly owned subsidiary, Qualcomm Technologies, Inc. (QTI), operates substantially all of Qualcomm's R&D activities, as well as its product and services businesses, including its semiconductor business, Qualcomm CDMA Technologies."]}

Review: Contradicts the answer-bearing relation: organization co-producing YouTube Rewind with YouTube. The false assertion explicitly excludes the gold value in the same scope. The source sentence and complete supporting passages are retained for review.

Independent source passage about Qualcomm; no shared content terms with the question or supporting passages, and no answer or evidence-subject match. Review alongside the paired question is in noise-review.md.

Checks: original supporting passages and sentence indices preserved; labeled source span; distinct alternative with scoped denial; unrelated donor 70–100 words; distinct donor; no answer, title or content-term overlap.

## 144. 5a88f9555542995153361214 (row 404)

Question: The Jeep Cherokee was originally sold as a variant of a Jeep model produced during what years?

Gold answer (review only): 1963 to 1991

Relation checked: production years of the Jeep Wagoneer

Labeled source: Jeep Wagoneer (SJ) [0]

The Jeep Wagoneer is the first luxury 4x4, sold and produced for Jeep through numerous marques from 1963 to 1991.

Supporting passages:

**Jeep Cherokee**

[0] The Jeep Cherokee is a line of vehicles sold by Jeep under various vehicle classes.

[1]  Originally sold as a variant of the popular Jeep Wagoneer, the Cherokee has evolved from a full-size SUV to one of the first compact SUVs and eventually into its current incarnation as a crossover SUV.

[2]  The nameplate has been in continuous use in some form since 1974 and also spawned Jeep's most successful vehicle, the Jeep Grand Cherokee, which was originally slated to be part of the Cherokee's lineup.

[3]  The vehicle is named after the Cherokee tribe of Native Americans.

**Jeep Wagoneer (SJ)**

[0] The Jeep Wagoneer is the first luxury 4x4, sold and produced for Jeep through numerous marques from 1963 to 1991.

[1]  A "sport utility vehicle" (SUV) for decades before the term was coined, the 4WD Wagoneer saw only minor mechanical changes during its 28-year plus production run, the third longest in U.S. automotive history.

Synthetic conflicting passage:

The production years of the Jeep Wagoneer is 1965 to 1993. It is not 1963 to 1991. This reference entry describes the particular subject and historical detail identified in the preceding statement. The description concerns that subject alone, rather than a similarly named person, place, organization, or work. The wording refers to the same event, period, and relationship throughout the account. Other details about the subject are outside the scope of this short entry.

Irrelevant passage: **Ericsson**

Ericsson ("Telefonaktiebolaget L. M. Ericsson") is a multinational networking and telecommunications equipment and services company headquartered in Stockholm, Sweden.  The company offers services, software and infrastructure in information and communications technology (ICT) for telecommunications operators, traditional telecommunications and Internet Protocol (IP) networking equipment, mobile and fixed broadband, operations and business support services, cable television, IPTV, video systems, and an extensive services operation.  Ericsson had 35% market share in the 2G/3G/4G mobile network infrastructure market in 2012.

Donor provenance: {"rowIndex":5067,"questionId":"5add566b5542995b365fab14","passageIndex":8,"title":"Ericsson","sentences":["Ericsson (\"Telefonaktiebolaget L. M. Ericsson\") is a multinational networking and telecommunications equipment and services company headquartered in Stockholm, Sweden."," The company offers services, software and infrastructure in information and communications technology (ICT) for telecommunications operators, traditional telecommunications and Internet Protocol (IP) networking equipment, mobile and fixed broadband, operations and business support services, cable television, IPTV, video systems, and an extensive services operation."," Ericsson had 35% market share in the 2G/3G/4G mobile network infrastructure market in 2012."]}

Review: Contradicts the answer-bearing relation: production years of the Jeep Wagoneer. The false assertion explicitly excludes the gold value in the same scope. The source sentence and complete supporting passages are retained for review.

Independent source passage about Ericsson; no shared content terms with the question or supporting passages, and no answer or evidence-subject match. Review alongside the paired question is in noise-review.md.

Checks: original supporting passages and sentence indices preserved; labeled source span; distinct alternative with scoped denial; unrelated donor 70–100 words; distinct donor; no answer, title or content-term overlap.

## 145. 5a874ce15542996432c57256 (row 405)

Question: Where was the person born who was recognized by MIAL and is an American soprano?

Gold answer (review only): Laurel, Mississippi

Relation checked: birthplace of soprano Leontyne Price

Labeled source: Leontyne Price [1]

 Born and raised in Laurel, Mississippi, she rose to international acclaim in the 1950s and 1960s, and was one of the first African Americans to become a leading artist at the Metropolitan Opera.

Supporting passages:

**Leontyne Price**

[0] Mary Violet Leontyne Price (born February 10, 1927) is an American soprano.

[1]  Born and raised in Laurel, Mississippi, she rose to international acclaim in the 1950s and 1960s, and was one of the first African Americans to become a leading artist at the Metropolitan Opera.

**Mississippi Institute of Arts and Letters**

[0] The Mississippi Institute of Arts and Letters (MIAL) is a privately funded foundation created to recognize annually the greatest accomplishments in art, music, literature, and photography among Mississippians.

[1]  The idea was conceived by, among others, former Mississippi Governor William Winter, Dr. Cora Norman, Dr. Aubrey Lucas, and Dr. Noel Polk in 1978, and the first awards were given out in 1980.

[2]  Nominations for these awards may be made only by registered members of the Institute.

[3]  The winners are chosen by a jury of prominent academics in each of the seven fields: Fiction, Non-fiction, Visual Art, Concert Musical Composition, Popular Musical Composition, Photography, and Poetry.

[4]  The ceremony is held in a different Mississippi city each year.

[5]  Past winners have included Walker Percy, Ellen Douglas, Ellen Gilchrist, Richard Ford, Larry Brown, Rick Bass, Lewis Nordan, Beverly Lowry, Donna Tartt, Clifton Taulbert, Barry Hannah, Willie Morris, Leontyne Price, Cynthia Shearer, Stephen Ambrose, Steve Yarbrough, Tom Franklin, Brad Watson, Shelby Foote, Natasha Trethewey, Birney Imes, Maude Schyler Clay, William Grant Still, Morgan Freeman, Christopher Maurer, Wyatt Waters, Logan Skelton, and many others.

[6]  Lifetime achievement awards have been presented to artists such as Gulf Coast painter and potter Walter Anderson, Jackson writer Eudora Welty, and the distinguished film actor from the Delta, Morgan Freeman.

Synthetic conflicting passage:

The birthplace of soprano Leontyne Price is Jackson, Mississippi. It is not Laurel, Mississippi. This reference entry describes the particular subject and historical detail identified in the preceding statement. The description concerns that subject alone, rather than a similarly named person, place, organization, or work. The wording refers to the same event, period, and relationship throughout the account. Other details about the subject are outside the scope of this short entry.

Irrelevant passage: **1895 Oklahoma Sooners football team**

The 1895 Oklahoma Sooners football team represented the Oklahoma Sooners of the University of Oklahoma during the 1895 college football season and was its first football team ever fielded.  The team completed its inaugural season with a 0–1 record.  The Sooners played their first football game in history against a town team from Oklahoma City and lost by a final score of 34–0.  This was the program's one and only season under the guidance of head coach John A. Harts, the next season he was gold prospecting in the Arctic.

Donor provenance: {"rowIndex":5069,"questionId":"5a72fc865542991f9a20c5e9","passageIndex":1,"title":"1895 Oklahoma Sooners football team","sentences":["The 1895 Oklahoma Sooners football team represented the Oklahoma Sooners of the University of Oklahoma during the 1895 college football season and was its first football team ever fielded."," The team completed its inaugural season with a 0–1 record."," The Sooners played their first football game in history against a town team from Oklahoma City and lost by a final score of 34–0."," This was the program's one and only season under the guidance of head coach John A. Harts, the next season he was gold prospecting in the Arctic."]}

Review: Contradicts the answer-bearing relation: birthplace of soprano Leontyne Price. The false assertion explicitly excludes the gold value in the same scope. The source sentence and complete supporting passages are retained for review.

Independent source passage about 1895 Oklahoma Sooners football team; no shared content terms with the question or supporting passages, and no answer or evidence-subject match. Review alongside the paired question is in noise-review.md.

Checks: original supporting passages and sentence indices preserved; labeled source span; distinct alternative with scoped denial; unrelated donor 70–100 words; distinct donor; no answer, title or content-term overlap.

## 146. 5ab531cc5542990594ba9d23 (row 408)

Question: How large is the shopping mall where KGOT radio station has its studios ?

Gold answer (review only): 728,000 ft²

Relation checked: floor area of Dimond Center shopping mall

Labeled source: Dimond Center [0]

The Dimond Center is a 728,000 ft² (67,000 m²) shopping mall in Anchorage, Alaska, United States, located on the southwest corner of East Dimond Boulevard and the Old Seward Highway in south Anchorage.

Supporting passages:

**Dimond Center**

[0] The Dimond Center is a 728,000 ft² (67,000 m²) shopping mall in Anchorage, Alaska, United States, located on the southwest corner of East Dimond Boulevard and the Old Seward Highway in south Anchorage.

[1]  It is the largest enclosed mall in the state of Alaska, though the open-air Tikahtnu Commons on the opposite side of town has a greater GLA.

**KGOT**

[0] KGOT (101.3 FM) is a commercial Top 40 (CHR) radio station in Anchorage, Alaska.

[1]  The station is owned by iHeartMedia, Inc. and broadcasts (along with its sister stations) from studios in the Dimond Center.

Synthetic conflicting passage:

The floor area of Dimond Center shopping mall is 628,000 ft². It is not 728,000 ft². This reference entry describes the particular subject and historical detail identified in the preceding statement. The description concerns that subject alone, rather than a similarly named person, place, organization, or work. The wording refers to the same event, period, and relationship throughout the account. Other details about the subject are outside the scope of this short entry.

Irrelevant passage: **Jesus' Son (film)**

Jesus' Son is a 1999 drama film that was adapted from the eponymous short story collection by Denis Johnson.  It stars Billy Crudup, Samantha Morton, Holly Hunter, and Dennis Hopper, with Denis Leary, Will Patton, John Ventimiglia, Michael Shannon, and Jack Black in supporting roles.  It was awarded the Little Golden Lion award and the Ecumenical Award at the 1999 Venice Film Festival, and was named one of the top ten films of the year by "The New York Times", the "Los Angeles Times", and Roger Ebert, among others.

Donor provenance: {"rowIndex":5068,"questionId":"5ab925fd554299131ca42281","passageIndex":0,"title":"Jesus' Son (film)","sentences":["Jesus' Son is a 1999 drama film that was adapted from the eponymous short story collection by Denis Johnson."," It stars Billy Crudup, Samantha Morton, Holly Hunter, and Dennis Hopper, with Denis Leary, Will Patton, John Ventimiglia, Michael Shannon, and Jack Black in supporting roles."," It was awarded the Little Golden Lion award and the Ecumenical Award at the 1999 Venice Film Festival, and was named one of the top ten films of the year by \"The New York Times\", the \"Los Angeles Times\", and Roger Ebert, among others."]}

Review: Contradicts the answer-bearing relation: floor area of Dimond Center shopping mall. The false assertion explicitly excludes the gold value in the same scope. The source sentence and complete supporting passages are retained for review.

Independent source passage about Jesus' Son (film); no shared content terms with the question or supporting passages, and no answer or evidence-subject match. Review alongside the paired question is in noise-review.md.

Checks: original supporting passages and sentence indices preserved; labeled source span; distinct alternative with scoped denial; unrelated donor 70–100 words; distinct donor; no answer, title or content-term overlap.

## 147. 5a8038b55542996402f6a485 (row 412)

Question: Jacques Sernas, actor in Fugitive in Trieste, was of what nationality?

Gold answer (review only): Lithuanian-born French

Relation checked: nationality and birthplace description of actor Jacques Sernas

Labeled source: Jacques Sernas [0]

Jokūbas Bernardas Šernas (30 July 1925 – 3 July 2015), commonly known as Jacques Sernas and sometimes credited as Jack Sernas, was a Lithuanian-born French actor with an international film career.

Supporting passages:

**Jacques Sernas**

[0] Jokūbas Bernardas Šernas (30 July 1925 – 3 July 2015), commonly known as Jacques Sernas and sometimes credited as Jack Sernas, was a Lithuanian-born French actor with an international film career.

**Fugitive in Trieste**

[0] Fugitive in Trieste (Italian: "Clandestino a Trieste" ) is a 1951 Italian war-drama film directed by Guido Salvini and starring Doris Duranti, Jacques Sernas and Massimo Girotti.

Synthetic conflicting passage:

The nationality and birthplace description of actor Jacques Sernas is German-born Italian. It is not Lithuanian-born French. This reference entry describes the particular subject and historical detail identified in the preceding statement. The description concerns that subject alone, rather than a similarly named person, place, organization, or work. The wording refers to the same event, period, and relationship throughout the account. Other details about the subject are outside the scope of this short entry.

Irrelevant passage: **Donald C. Winter**

Donald Charles Winter (born June 15, 1948) is an American businessman who served as United States Secretary of the Navy.  A former top executive of TRW, Aerospace & Defense, he was nominated in 2005 by President George W. Bush, confirmed by the United States Senate, and took the oath of office on January 3, 2006.  In January 2009 Defense Secretary Gates requested that Winter remain in office until President Obama picked his successor on March 13, 2009.  He resigned on March 13.

Donor provenance: {"rowIndex":5000,"questionId":"5a90b1635542990a984936a9","passageIndex":0,"title":"Donald C. Winter","sentences":["Donald Charles Winter (born June 15, 1948) is an American businessman who served as United States Secretary of the Navy."," A former top executive of TRW, Aerospace & Defense, he was nominated in 2005 by President George W. Bush, confirmed by the United States Senate, and took the oath of office on January 3, 2006."," In January 2009 Defense Secretary Gates requested that Winter remain in office until President Obama picked his successor on March 13, 2009."," He resigned on March 13."]}

Review: Contradicts the answer-bearing relation: nationality and birthplace description of actor Jacques Sernas. The false assertion explicitly excludes the gold value in the same scope. The source sentence and complete supporting passages are retained for review.

Independent source passage about Donald C. Winter; no shared content terms with the question or supporting passages, and no answer or evidence-subject match. Review alongside the paired question is in noise-review.md.

Checks: original supporting passages and sentence indices preserved; labeled source span; distinct alternative with scoped denial; unrelated donor 70–100 words; distinct donor; no answer, title or content-term overlap.

## 148. 5ab83d595542990e739ec886 (row 413)

Question: The VMAQT-1 logo is a female spirit in Irish mythology who heralds the death of what?

Gold answer (review only): a family member

Relation checked: person whose death a banshee heralds in Irish mythology

Labeled source: Banshee [0]

A banshee ( ; Modern Irish "bean sí", from Old Irish: "ban síde" , ] , "woman of the fairy mound" or "fairy woman") is a female spirit in Irish mythology who heralds the death of a family member, usually by shrieking or keening.

Supporting passages:

**VMAQT-1**

[0] Marine Tactical Electronic Warfare Training Squadron 1 (VMAQT-1) is a United States Marine Corps electronic warfare training squadron consisting of EA-6B Prowler jets.

[1]  The squadron is based at Marine Corps Air Station Cherry Point, North Carolina and falls under the command of Marine Aircraft Group 14 (MAG-14) and the 2nd Marine Aircraft Wing (2nd MAW).

[2]  The VMAQT-1 logo is the Banshee, an Irish mythological figure foretelling death.

[3]  Its motto is “Tairngreacht Bas,” Gaelic for “Death Foretold.”

**Banshee**

[0] A banshee ( ; Modern Irish "bean sí", from Old Irish: "ban síde" , ] , "woman of the fairy mound" or "fairy woman") is a female spirit in Irish mythology who heralds the death of a family member, usually by shrieking or keening.

[1]  Her name is connected to the mythologically-important tumuli or "mounds" that dot the Irish countryside, which are known as síde (singular "síd") in Old Irish.

Synthetic conflicting passage:

The person whose death a banshee heralds in Irish mythology is a stranger. It is not a family member. This reference entry describes the particular subject and historical detail identified in the preceding statement. The description concerns that subject alone, rather than a similarly named person, place, organization, or work. The wording refers to the same event, period, and relationship throughout the account. Other details about the subject are outside the scope of this short entry.

Irrelevant passage: **Jane Stevenson**

Jane Stevenson (born 1959) is a British author who was born in London and brought up in London, Beijing and Bonn.  She has lectured in history at Sheffield University, and teaches literature and history at the University of Aberdeen, where she is the Regius Professor of Humanity.  Her fiction books include "Several Deceptions" and "Good Women", collections of novellas; a novel, "London Bridges"; and the historical trilogy made up of the novels "The Winter Queen", "The Shadow King", and "The Empress of the Last Days".  Stevenson lives in Aberdeenshire, Scotland.

Donor provenance: {"rowIndex":5000,"questionId":"5a90b1635542990a984936a9","passageIndex":5,"title":"Jane Stevenson","sentences":["Jane Stevenson (born 1959) is a British author who was born in London and brought up in London, Beijing and Bonn."," She has lectured in history at Sheffield University, and teaches literature and history at the University of Aberdeen, where she is the Regius Professor of Humanity."," Her fiction books include \"Several Deceptions\" and \"Good Women\", collections of novellas; a novel, \"London Bridges\"; and the historical trilogy made up of the novels \"The Winter Queen\", \"The Shadow King\", and \"The Empress of the Last Days\"."," Stevenson lives in Aberdeenshire, Scotland."]}

Review: Contradicts the answer-bearing relation: person whose death a banshee heralds in Irish mythology. The false assertion explicitly excludes the gold value in the same scope. The source sentence and complete supporting passages are retained for review.

Independent source passage about Jane Stevenson; no shared content terms with the question or supporting passages, and no answer or evidence-subject match. Review alongside the paired question is in noise-review.md.

Checks: original supporting passages and sentence indices preserved; labeled source span; distinct alternative with scoped denial; unrelated donor 70–100 words; distinct donor; no answer, title or content-term overlap.

## 149. 5ae0d52e554299603e418469 (row 414)

Question: The actress that played the leading role in the independent film "A Perfect Ending" also stars with John Bregar in a 2008 film directed by who?

Gold answer (review only): Douglas Jackson

Relation checked: director of the 2008 film Dead at 17

Labeled source: Dead at 17 [0]

Dead at 17 is a 2008 Canadian drama film directed by Douglas Jackson.

Supporting passages:

**Barbara Niven**

[0] Barbara Niven (born February 26, 1953) is an American actress and producer, best known for her performances in Lifetime movies and television roles in "", "One Life to Live", and "Cedar Cove".

[1]  Niven also had the leading role in the independent film "A Perfect Ending" (2012).

**Dead at 17**

[0] Dead at 17 is a 2008 Canadian drama film directed by Douglas Jackson.

[1] This film has been music composed by Richard Bowers.

[2] The film stars Barbara Niven, John Bregar, Justin Bradley, Matthew Raudsepp and Kyle Switzer in the lead roles.

Synthetic conflicting passage:

The director of the 2008 film Dead at 17 is David Cronenberg. It is not Douglas Jackson. This reference entry describes the particular subject and historical detail identified in the preceding statement. The description concerns that subject alone, rather than a similarly named person, place, organization, or work. The wording refers to the same event, period, and relationship throughout the account. Other details about the subject are outside the scope of this short entry.

Irrelevant passage: **Nevada State Route 318**

State Route 318 (SR 318) is a state highway in eastern Nevada.  It is often used as a shortcut between northeastern Nevada and Las Vegas, bypassing the longer and less direct route of U.S. Route 93 between Ely and Crystal Springs.  The highway was established in the 1930s as State Route 38 and State Route 38A, and was renumbered to SR 318 in 1976.  At a total of 110.762 mi , it is the longest state route in Nevada.  The road is used for open speed highway races twice a year.

Donor provenance: {"rowIndex":5001,"questionId":"5ae1f528554299234fd04370","passageIndex":1,"title":"Nevada State Route 318","sentences":["State Route 318 (SR 318) is a state highway in eastern Nevada."," It is often used as a shortcut between northeastern Nevada and Las Vegas, bypassing the longer and less direct route of U.S. Route 93 between Ely and Crystal Springs."," The highway was established in the 1930s as State Route 38 and State Route 38A, and was renumbered to SR 318 in 1976."," At a total of 110.762 mi , it is the longest state route in Nevada."," The road is used for open speed highway races twice a year."]}

Review: Contradicts the answer-bearing relation: director of the 2008 film Dead at 17. The false assertion explicitly excludes the gold value in the same scope. The source sentence and complete supporting passages are retained for review.

Independent source passage about Nevada State Route 318; no shared content terms with the question or supporting passages, and no answer or evidence-subject match. Review alongside the paired question is in noise-review.md.

Checks: original supporting passages and sentence indices preserved; labeled source span; distinct alternative with scoped denial; unrelated donor 70–100 words; distinct donor; no answer, title or content-term overlap.

## 150. 5a8d7b1755429941ae14dfc6 (row 419)

Question: What is the 2010 population of the city 2.1 miles southwest of Marietta Air Force Station?

Gold answer (review only): 51,271

Relation checked: population of Smyrna, Georgia at the 2010 census

Labeled source: Smyrna, Georgia [2]

 As of the 2010 census, the city had a population of 51,271.

Supporting passages:

**Smyrna, Georgia**

[0] Smyrna is a city northwest of the neighborhoods of Atlanta.

[1]  It is in the inner ring of the Atlanta Metropolitan Area.

[2]  As of the 2010 census, the city had a population of 51,271.

[3]  The U.S. Census Bureau estimated the population in 2013 to be 53,438.

[4]  It is included in the Atlanta-Sandy Springs-Roswell MSA, which is included in the Atlanta—Athens-Clarke—Sandy Springs CSA.

[5]  Smyrna grew by 28% between the years 2000 and 2012.

[6]  It is historically one of the fastest growing cities in the State of Georgia, and one of the most densely populated cities in the metro area.

**Marietta Air Force Station**

[0] Marietta Air Force Station (ADC ID: M-111, NORAD ID: Z-111) is a closed United States Air Force General Surveillance Radar station.

[1]  It is located 2.1 mi northeast of Smyrna, Georgia.

[2]  It was closed in 1968.

Synthetic conflicting passage:

The population of Smyrna, Georgia at the 2010 census is 61,271. It is not 51,271. This reference entry describes the particular subject and historical detail identified in the preceding statement. The description concerns that subject alone, rather than a similarly named person, place, organization, or work. The wording refers to the same event, period, and relationship throughout the account. Other details about the subject are outside the scope of this short entry.

Irrelevant passage: **Alternanthera ficoidea**

Alternanthera ficoidea is a type of herb belonging to the Amarathaceae family.  It is also known as "Alternanthera tenella," and is common and widespread throughout the tropics.  It is in fact an endemic herb in the Western Ghats of India.  However it is invasive to the island of Palau, and Philippines.  The herb has been introduced to Japan, and many other Pacific islands, where they are not invasive.  Propagation occurs via seeds.

Donor provenance: {"rowIndex":5004,"questionId":"5ae3f1bb5542995ad6573cbe","passageIndex":7,"title":"Alternanthera ficoidea","sentences":["Alternanthera ficoidea is a type of herb belonging to the Amarathaceae family."," It is also known as \"Alternanthera tenella,\" and is common and widespread throughout the tropics."," It is in fact an endemic herb in the Western Ghats of India."," However it is invasive to the island of Palau, and Philippines."," The herb has been introduced to Japan, and many other Pacific islands, where they are not invasive."," Propagation occurs via seeds."]}

Review: Contradicts the answer-bearing relation: population of Smyrna, Georgia at the 2010 census. The false assertion explicitly excludes the gold value in the same scope. The source sentence and complete supporting passages are retained for review.

Independent source passage about Alternanthera ficoidea; no shared content terms with the question or supporting passages, and no answer or evidence-subject match. Review alongside the paired question is in noise-review.md.

Checks: original supporting passages and sentence indices preserved; labeled source span; distinct alternative with scoped denial; unrelated donor 70–100 words; distinct donor; no answer, title or content-term overlap.

## 151. 5ab72a025542992aa3b8c7b8 (row 421)

Question: "A Summer in the Cage" and "American Hardcore" are both what kind of film?

Gold answer (review only): documentary

Relation checked: film type shared by A Summer in the Cage and American Hardcore

Labeled source: A Summer in the Cage [0]

A Summer in the Cage is a 2007 documentary film about a man's experiences with bipolar disorder.

Supporting passages:

**American Hardcore (film)**

[0] American Hardcore: The History of American Punk Rock 1980-1986 is a documentary directed by Paul Rachman and written by Steven Blush.

[1]  It is based on the book "" also written by Blush.

[2]  It was released on September 22, 2006 on a limited basis.

[3]  The film features some early pioneers of the hardcore punk music scene including Bad Brains, Black Flag, D.O.A., Minor Threat, Minutemen, SSD, and others.

[4]  It was released on DVD by Sony Pictures Home Entertainment on February 20, 2007.

**A Summer in the Cage**

[0] A Summer in the Cage is a 2007 documentary film about a man's experiences with bipolar disorder.

[1]  The film follows the filmmaker's friend Sam and features an interview with mental health scholar Kay Redfield Jamison.

[2]  It was directed by Benjamin Selkow.

[3]  The documentary debuted on the Sundance Channel in 2007.

Synthetic conflicting passage:

The film type shared by A Summer in the Cage and American Hardcore is fictional comedy. It is not documentary. This reference entry describes the particular subject and historical detail identified in the preceding statement. The description concerns that subject alone, rather than a similarly named person, place, organization, or work. The wording refers to the same event, period, and relationship throughout the account. Other details about the subject are outside the scope of this short entry.

Irrelevant passage: **Nevada State Route 582**

State Route 582 (SR 582) is a major 16.688 mi highway in the Las Vegas Valley.  The highway is the former route of U.S. Route 93 (US 93) and US 95 before they were moved to the current freeway alignment shared with Interstate 515 (I-515).  It connects Downtown Las Vegas with Henderson and (indirectly) Boulder City to the southeast.  The highway is primarily known as Boulder Highway, but is named Fremont Street within the Las Vegas city limits.

Donor provenance: {"rowIndex":5001,"questionId":"5ae1f528554299234fd04370","passageIndex":5,"title":"Nevada State Route 582","sentences":["State Route 582 (SR 582) is a major 16.688 mi highway in the Las Vegas Valley."," The highway is the former route of U.S. Route 93 (US 93) and US 95 before they were moved to the current freeway alignment shared with Interstate 515 (I-515)."," It connects Downtown Las Vegas with Henderson and (indirectly) Boulder City to the southeast."," The highway is primarily known as Boulder Highway, but is named Fremont Street within the Las Vegas city limits."]}

Review: Contradicts the answer-bearing relation: film type shared by A Summer in the Cage and American Hardcore. The false assertion explicitly excludes the gold value in the same scope. The source sentence and complete supporting passages are retained for review.

Independent source passage about Nevada State Route 582; no shared content terms with the question or supporting passages, and no answer or evidence-subject match. Review alongside the paired question is in noise-review.md.

Checks: original supporting passages and sentence indices preserved; labeled source span; distinct alternative with scoped denial; unrelated donor 70–100 words; distinct donor; no answer, title or content-term overlap.

## 152. 5ade42b55542992fa25da717 (row 422)

Question: How many novels are there in the series of novels of which Shadows in Flight is the tenth novel ?

Gold answer (review only): fifteen

Relation checked: number of novels in the Ender's Game series in the source account

Labeled source: Ender's Game (series) [2]

 It currently consists of fifteen novels, thirteen short stories, 47 comic issues, an audioplay, and a film.

Supporting passages:

**Shadows in Flight**

[0] Shadows in Flight is a science fiction novel by Orson Scott Card.

[1]  When released in 2012, it became the tenth novel published in the "Ender's Game" series.

[2]  The story follows on from where the original four "Shadow series" books left off.

[3]  It is about Bean and his children discovering an ancient Formic "ark" during their journey in space.

[4]  A sample chapter was released on November 28, 2011.

[5]  The hardcover version was released on January 17, 2012, and the paperback was released on January 29, 2013.

[6]  It was nominated for the Goodreads Choice Award for science fiction.

**Ender's Game (series)**

[0] The Ender's Game" series (often referred to as the Ender" saga and also the Enderverse) is a series of science fiction books by Orson Scott Card.

[1]  The series started with the novelette "Ender's Game", which was later expanded into the novel of the same title.

[2]  It currently consists of fifteen novels, thirteen short stories, 47 comic issues, an audioplay, and a film.

[3]  The first two novels in the series, "Ender's Game" and "Speaker for the Dead", each won both the Hugo and Nebula Awards, and were among the most influential science fiction novels of the 1980s.

Synthetic conflicting passage:

The number of novels in the Ender's Game series in the source account is twelve. It is not fifteen. This reference entry describes the particular subject and historical detail identified in the preceding statement. The description concerns that subject alone, rather than a similarly named person, place, organization, or work. The wording refers to the same event, period, and relationship throughout the account. Other details about the subject are outside the scope of this short entry.

Irrelevant passage: **Nevada State Route 147**

State Route 147 (SR 147) is a state highway serving the Las Vegas Valley in southern Nevada.  It is signed as Lake Mead Boulevard and runs from Interstate 15 in North Las Vegas east to the border of the Lake Mead National Recreation Area.  It is not to be confused with Lake Mead Parkway (formerly Lake Mead Drive), which also goes to Lake Mead but mainly runs in southern Las Vegas Valley and carries the designation of State Route 564.

Donor provenance: {"rowIndex":5001,"questionId":"5ae1f528554299234fd04370","passageIndex":7,"title":"Nevada State Route 147","sentences":["State Route 147 (SR 147) is a state highway serving the Las Vegas Valley in southern Nevada."," It is signed as Lake Mead Boulevard and runs from Interstate 15 in North Las Vegas east to the border of the Lake Mead National Recreation Area."," It is not to be confused with Lake Mead Parkway (formerly Lake Mead Drive), which also goes to Lake Mead but mainly runs in southern Las Vegas Valley and carries the designation of State Route 564."]}

Review: Contradicts the answer-bearing relation: number of novels in the Ender's Game series in the source account. The false assertion explicitly excludes the gold value in the same scope. The source sentence and complete supporting passages are retained for review.

Independent source passage about Nevada State Route 147; no shared content terms with the question or supporting passages, and no answer or evidence-subject match. Review alongside the paired question is in noise-review.md.

Checks: original supporting passages and sentence indices preserved; labeled source span; distinct alternative with scoped denial; unrelated donor 70–100 words; distinct donor; no answer, title or content-term overlap.

## 153. 5ae4c2b95542995dadf243ef (row 423)

Question: One of the coaches of Southern Methodist University also played what role at the Arizona State Sun Devils?

Gold answer (review only): defensive coordinator

Relation checked: role held by Phil Bennett at the Arizona State Sun Devils

Labeled source: Phil Bennett (American football) [1]

 He is the defensive coordinator at Arizona State Sun Devils.

Supporting passages:

**Phil Bennett (American football)**

[0] Phil Bennett (born December 3, 1955) is an American football coach and former player.

[1]  He is the defensive coordinator at Arizona State Sun Devils.

[2]  Prior to this position, he served as the defensive coordinator for the Baylor Bears from 2011-2016, and was interim head coach of the Pittsburgh Panthers during their 2011 BBVA Compass Bowl win over Kentucky after serving as defensive coordinator of the Panthers for three seasons.

[3]  Prior to coaching the Panthers, he served as the head football coach at Southern Methodist University (SMU) from 2002 to 2007.

[4]  Before his stint at SMU, he served as an assistant coach at seven different colleges.

**SMU Mustangs football under Mike Cavan**

[0] Mike Cavan was the coach of the Southern Methodist University's football team from 1997 to 2001.

[1]  He compiled a 22–34–0 record, and was succeeded by Phil Bennett.

Synthetic conflicting passage:

The role held by Phil Bennett at the Arizona State Sun Devils is offensive coordinator. It is not defensive coordinator. This reference entry describes the particular subject and historical detail identified in the preceding statement. The description concerns that subject alone, rather than a similarly named person, place, organization, or work. The wording refers to the same event, period, and relationship throughout the account. Other details about the subject are outside the scope of this short entry.

Irrelevant passage: **UFC 151**

UFC 151: Jones vs. Henderson was a planned mixed martial arts event that was to be held by the Ultimate Fighting Championship on September 1, 2012, at the Mandalay Bay Events Center in Las Vegas, Nevada.  It was to be headlined by a UFC Light Heavyweight Championship bout, between champion Jon Jones and former dual-division PRIDE FC and Strikeforce champion Dan Henderson.  However, the event was cancelled on August 23, when the UFC announced Henderson was unable to fight due to injury, and Jones refused to take a replacement fight against longtime middleweight contender, Chael Sonnen.

Donor provenance: {"rowIndex":5005,"questionId":"5ac3908e554299741d48a297","passageIndex":0,"title":"UFC 151","sentences":["UFC 151: Jones vs. Henderson was a planned mixed martial arts event that was to be held by the Ultimate Fighting Championship on September 1, 2012, at the Mandalay Bay Events Center in Las Vegas, Nevada."," It was to be headlined by a UFC Light Heavyweight Championship bout, between champion Jon Jones and former dual-division PRIDE FC and Strikeforce champion Dan Henderson."," However, the event was cancelled on August 23, when the UFC announced Henderson was unable to fight due to injury, and Jones refused to take a replacement fight against longtime middleweight contender, Chael Sonnen."]}

Review: Contradicts the answer-bearing relation: role held by Phil Bennett at the Arizona State Sun Devils. The false assertion explicitly excludes the gold value in the same scope. The source sentence and complete supporting passages are retained for review.

Independent source passage about UFC 151; no shared content terms with the question or supporting passages, and no answer or evidence-subject match. Review alongside the paired question is in noise-review.md.

Checks: original supporting passages and sentence indices preserved; labeled source span; distinct alternative with scoped denial; unrelated donor 70–100 words; distinct donor; no answer, title or content-term overlap.

## 154. 5abf10b75542997719eab659 (row 424)

Question: What is the height of the player who won the 2015 AFL Rising Star award?

Gold answer (review only): 1.95 m

Relation checked: height of 2015 AFL Rising Star winner Jesse Hogan

Labeled source: Jesse Hogan [1]

 A key forward, Hogan is 1.95 m tall and weighs 100 kg .

Supporting passages:

**Jesse Hogan**

[0] Jesse Hogan (born 12 February 1995) is a professional Australian rules footballer playing for the Melbourne Football Club in the Australian Football League (AFL).

[1]  A key forward, Hogan is 1.95 m tall and weighs 100 kg .

[2]  He was a stand-out basketballer and footballer at a young age, representing Western Australia in both sports and played in the West Australian Football League colts competition with the Claremont Football Club.

[3]  He was rewarded with All-Australian selection as a junior in the 2012 AFL Under 18 Championships and in turn, he was drafted by Melbourne with the second selection in the 2012 mini-draft, meaning he was ineligible to play in the 2013 AFL season.

[4]  After a back injury ruined his 2014 season, he made his AFL debut in the 2015 season and won the Ron Evans Medal as the AFL Rising Star.

[5]  In his first two playing years for Melbourne, he was the leading goalkicker in both seasons.

**2015 AFL Rising Star**

[0] The NAB AFL Rising Star award is given annually to a stand out young player in the Australian Football League.

[1]  The award was won by Jesse Hogan of Melbourne who polled 49 votes, beating Carlton 's Patrick Cripps who finished on 41 votes.

Synthetic conflicting passage:

The height of 2015 AFL Rising Star winner Jesse Hogan is 1.85 m. It is not 1.95 m. This reference entry describes the particular subject and historical detail identified in the preceding statement. The description concerns that subject alone, rather than a similarly named person, place, organization, or work. The wording refers to the same event, period, and relationship throughout the account. Other details about the subject are outside the scope of this short entry.

Irrelevant passage: **Nevada State Route 604**

State Route 604 (SR 604) is the route number designation for parts of Las Vegas Boulevard, a major north–south road in the Las Vegas metropolitan area of Nevada in the United States best known for the Las Vegas Strip and its casinos. Formerly carrying U.S. Route 91, which had been the main highway between Los Angeles and Salt Lake City, it has been bypassed by Interstate 15, and serves mainly local traffic.

Donor provenance: {"rowIndex":5001,"questionId":"5ae1f528554299234fd04370","passageIndex":8,"title":"Nevada State Route 604","sentences":["State Route 604 (SR 604) is the route number designation for parts of Las Vegas Boulevard, a major north–south road in the Las Vegas metropolitan area of Nevada in the United States best known for the Las Vegas Strip and its casinos. Formerly carrying U.S. Route 91, which had been the main highway between Los Angeles and Salt Lake City, it has been bypassed by Interstate 15, and serves mainly local traffic."]}

Review: Contradicts the answer-bearing relation: height of 2015 AFL Rising Star winner Jesse Hogan. The false assertion explicitly excludes the gold value in the same scope. The source sentence and complete supporting passages are retained for review.

Independent source passage about Nevada State Route 604; no shared content terms with the question or supporting passages, and no answer or evidence-subject match. Review alongside the paired question is in noise-review.md.

Checks: original supporting passages and sentence indices preserved; labeled source span; distinct alternative with scoped denial; unrelated donor 70–100 words; distinct donor; no answer, title or content-term overlap.

## 155. 5add564a5542990dbb2f7e38 (row 425)

Question: Las Vegas Festival Grounds is north of the hotel that is owned by which company?

Gold answer (review only): MGM Resorts International

Relation checked: company owning and operating Circus Circus Las Vegas

Labeled source: Circus Circus Las Vegas [1]

 It is owned and operated by MGM Resorts International.

Supporting passages:

**Las Vegas Festival Grounds**

[0] Las Vegas Festival Grounds (formerly MGM Resorts Festival Grounds) is a 33 acre open-air venue located on the Las Vegas Strip, north of the MGM-owned Circus Circus Hotel and Casino in Winchester, Nevada.

**Circus Circus Las Vegas**

[0] Circus Circus Las Vegas is a hotel, 123928 sqft casino, and RV park located on the Las Vegas Strip in Winchester, Nevada.

[1]  It is owned and operated by MGM Resorts International.

[2]  Circus Circus features circus acts and carnival type games daily on the Midway.

Synthetic conflicting passage:

The company owning and operating Circus Circus Las Vegas is Caesars Entertainment. It is not MGM Resorts International. This reference entry describes the particular subject and historical detail identified in the preceding statement. The description concerns that subject alone, rather than a similarly named person, place, organization, or work. The wording refers to the same event, period, and relationship throughout the account. Other details about the subject are outside the scope of this short entry.

Irrelevant passage: **Hiromi Hayakawa**

Marla Hiromi Hayakawa Salas (October 19, 1982 – September 27, 2017), known professionally as Hiromi Hayakawa, was a Mexican actress and singer who began her music career as a contestant in the reality show "La Academia".  She worked mostly in musical theatre, however she has had occasional television roles.  Hayakawa was also a voice actress, who worked primarily on the Spanish American dub of films and series from the United States.

Donor provenance: {"rowIndex":5002,"questionId":"5a8ee02955429917b4a5bdfa","passageIndex":4,"title":"Hiromi Hayakawa","sentences":["Marla Hiromi Hayakawa Salas (October 19, 1982 – September 27, 2017), known professionally as Hiromi Hayakawa, was a Mexican actress and singer who began her music career as a contestant in the reality show \"La Academia\"."," She worked mostly in musical theatre, however she has had occasional television roles."," Hayakawa was also a voice actress, who worked primarily on the Spanish American dub of films and series from the United States."]}

Review: Contradicts the answer-bearing relation: company owning and operating Circus Circus Las Vegas. The false assertion explicitly excludes the gold value in the same scope. The source sentence and complete supporting passages are retained for review.

Independent source passage about Hiromi Hayakawa; no shared content terms with the question or supporting passages, and no answer or evidence-subject match. Review alongside the paired question is in noise-review.md.

Checks: original supporting passages and sentence indices preserved; labeled source span; distinct alternative with scoped denial; unrelated donor 70–100 words; distinct donor; no answer, title or content-term overlap.

## 156. 5a729e7b5542992359bc313d (row 427)

Question: Which river system in Chilhowie, Virginia was the starting place for most Longhunters?

Gold answer (review only): Holston River

Relation checked: river valley near Chilhowie where most long hunts started

Labeled source: Longhunter [2]

 Most long hunts started in the Holston River Valley near Chilhowie, Virginia.

Supporting passages:

**Holston River**

[0] The Holston River is a 136 mi river that flows from Kingsport, Tennessee, to Knoxville, Tennessee.

[1]  Along with its three major forks (North Fork, Middle Fork and South Fork), it comprises a major river system that drains much of northeastern Tennessee, southwestern Virginia, and northwestern North Carolina.

[2]  The Holston's confluence with the French Broad River at Knoxville marks the beginning of the Tennessee River.

**Longhunter**

[0] A longhunter (or long hunter) was an 18th-century explorer and hunter who made expeditions into the American frontier wilderness for as much as six months at a time.

[1]  Historian Emory Hamilton asserts that "The Long Hunter was peculiar to Southwest Virginia only, and nowhere else on any frontier did such hunts ever originate" although the term has been used loosely to describe any unofficial American explorer of the period.

[2]  Most long hunts started in the Holston River Valley near Chilhowie, Virginia.

[3]  The hunters came from there and the adjacent valley of the Clinch River, where they were land owners or residents.

[4]  The parties of two or three men (and rarely more) usually started their hunts in October and ended toward the end of March or early in April.

Synthetic conflicting passage:

The river valley near Chilhowie where most long hunts started is Shenandoah River. It is not Holston River. This reference entry describes the particular subject and historical detail identified in the preceding statement. The description concerns that subject alone, rather than a similarly named person, place, organization, or work. The wording refers to the same event, period, and relationship throughout the account. Other details about the subject are outside the scope of this short entry.

Irrelevant passage: **University of Melbourne Faculty of VCA and MCM**

The Faculty of the Victorian College of the Arts and Melbourne Conservatorium of Music (Faculty of VCA and MCM) is a faculty of the University of Melbourne, in Victoria, Australia.  VCAMCM is located near the Melbourne City Centre, on two campuses: one – the Melbourne Conservatorium of Music (MCM) – on the Parkville campus of the University of Melbourne, and the other – the Victorian College of the Arts (VCA) – on St Kilda Road, at Southbank.

Donor provenance: {"rowIndex":5003,"questionId":"5a7d9d2b5542997cc2c47464","passageIndex":0,"title":"University of Melbourne Faculty of VCA and MCM","sentences":["The Faculty of the Victorian College of the Arts and Melbourne Conservatorium of Music (Faculty of VCA and MCM) is a faculty of the University of Melbourne, in Victoria, Australia."," VCAMCM is located near the Melbourne City Centre, on two campuses: one – the Melbourne Conservatorium of Music (MCM) – on the Parkville campus of the University of Melbourne, and the other – the Victorian College of the Arts (VCA) – on St Kilda Road, at Southbank."]}

Review: Contradicts the answer-bearing relation: river valley near Chilhowie where most long hunts started. The false assertion explicitly excludes the gold value in the same scope. The source sentence and complete supporting passages are retained for review.

Independent source passage about University of Melbourne Faculty of VCA and MCM; no shared content terms with the question or supporting passages, and no answer or evidence-subject match. Review alongside the paired question is in noise-review.md.

Checks: original supporting passages and sentence indices preserved; labeled source span; distinct alternative with scoped denial; unrelated donor 70–100 words; distinct donor; no answer, title or content-term overlap.

## 157. 5a811152554299260e20a22e (row 428)

Question: What party does the House of Commons representative for Congleton belong to?

Gold answer (review only): British Conservative Party

Relation checked: political party of Congleton MP Fiona Bruce

Labeled source: Fiona Bruce (politician) [0]

Fiona Claire Bruce (born 26 March 1957) is a British Conservative Party politician who is the Member of Parliament for Congleton, elected at the 2010 general election, and then again in 2015.

Supporting passages:

**Congleton (UK Parliament constituency)**

[0] Congleton is a constituency in Cheshire, represented in the House of Commons of the UK Parliament since 2010 by Fiona Bruce of the Conservative Party.

**Fiona Bruce (politician)**

[0] Fiona Claire Bruce (born 26 March 1957) is a British Conservative Party politician who is the Member of Parliament for Congleton, elected at the 2010 general election, and then again in 2015.

Synthetic conflicting passage:

The political party of Congleton MP Fiona Bruce is British Labour Party. It is not British Conservative Party. This reference entry describes the particular subject and historical detail identified in the preceding statement. The description concerns that subject alone, rather than a similarly named person, place, organization, or work. The wording refers to the same event, period, and relationship throughout the account. Other details about the subject are outside the scope of this short entry.

Irrelevant passage: **Greg Jackson (MMA trainer)**

Greg Jackson (born 1974) is an American mixed martial arts (MMA) trainer who co-owns Jackson Wink MMA Academy in Albuquerque, New Mexico, widely considered one of the top MMA training centers in the world.  Jackson has trained many successful fighters, including former UFC Light Heavyweight Champion Jon Jones, former UFC Welterweight Champion Georges St-Pierre, former UFC Women's Bantamweight Champion Holly Holm, former Light Heavyweight Champion Rashad Evans, and a roster of other UFC contenders and World Extreme Cagefighting champions.

Donor provenance: {"rowIndex":5005,"questionId":"5ac3908e554299741d48a297","passageIndex":2,"title":"Greg Jackson (MMA trainer)","sentences":["Greg Jackson (born 1974) is an American mixed martial arts (MMA) trainer who co-owns Jackson Wink MMA Academy in Albuquerque, New Mexico, widely considered one of the top MMA training centers in the world."," Jackson has trained many successful fighters, including former UFC Light Heavyweight Champion Jon Jones, former UFC Welterweight Champion Georges St-Pierre, former UFC Women's Bantamweight Champion Holly Holm, former Light Heavyweight Champion Rashad Evans, and a roster of other UFC contenders and World Extreme Cagefighting champions."]}

Review: Contradicts the answer-bearing relation: political party of Congleton MP Fiona Bruce. The false assertion explicitly excludes the gold value in the same scope. The source sentence and complete supporting passages are retained for review.

Independent source passage about Greg Jackson (MMA trainer); no shared content terms with the question or supporting passages, and no answer or evidence-subject match. Review alongside the paired question is in noise-review.md.

Checks: original supporting passages and sentence indices preserved; labeled source span; distinct alternative with scoped denial; unrelated donor 70–100 words; distinct donor; no answer, title or content-term overlap.

## 158. 5adddd075542992200553b71 (row 429)

Question: Season 2 of Rick and Morty began with the episode directed by whom?

Gold answer (review only): Wes Archer

Relation checked: director of A Rickle in Time, the opening episode of Rick and Morty season 2

Labeled source: A Rickle in Time [1]

 Written by Matt Roller and directed by Wes Archer, the episode first aired on Adult Swim in the United States on July 26, 2015.

Supporting passages:

**A Rickle in Time**

[0] "A Rickle in Time" is the first episode in the second season of the American animated television sitcom "Rick and Morty", and the twelfth overall episode of the series.

[1]  Written by Matt Roller and directed by Wes Archer, the episode first aired on Adult Swim in the United States on July 26, 2015.

**Rick and Morty (season 2)**

[0] The second season of the animated television series "Rick and Morty" originally aired in the United States on Cartoon Network's late night programming block, Adult Swim, which premiered on July 26, 2015 with "A Rickle in Time", and concluded on October 4 with "The Wedding Squanchers".

[1]  This season aired a total of ten episodes.

Synthetic conflicting passage:

The director of A Rickle in Time, the opening episode of Rick and Morty season 2 is Dan Harmon. It is not Wes Archer. This reference entry describes the particular subject and historical detail identified in the preceding statement. The description concerns that subject alone, rather than a similarly named person, place, organization, or work. The wording refers to the same event, period, and relationship throughout the account. Other details about the subject are outside the scope of this short entry.

Irrelevant passage: **EA Sports UFC**

EA Sports UFC is a mixed martial arts sports video game developed by EA Canada and SkyBox Labs for the PlayStation 4 and Xbox One.  It is based on the Ultimate Fighting Championship (UFC) brand and was released on June 17, 2014.  A playable demo was released on the PlayStation Network and Xbox Marketplace on June 3, 2014, with cover athletes Jon Jones and Alexander Gustafsson as playable fighters.  It is the first UFC game since THQ sold the license to Electronic Arts.

Donor provenance: {"rowIndex":5005,"questionId":"5ac3908e554299741d48a297","passageIndex":4,"title":"EA Sports UFC","sentences":["EA Sports UFC is a mixed martial arts sports video game developed by EA Canada and SkyBox Labs for the PlayStation 4 and Xbox One."," It is based on the Ultimate Fighting Championship (UFC) brand and was released on June 17, 2014."," A playable demo was released on the PlayStation Network and Xbox Marketplace on June 3, 2014, with cover athletes Jon Jones and Alexander Gustafsson as playable fighters."," It is the first UFC game since THQ sold the license to Electronic Arts."]}

Review: Contradicts the answer-bearing relation: director of A Rickle in Time, the opening episode of Rick and Morty season 2. The false assertion explicitly excludes the gold value in the same scope. The source sentence and complete supporting passages are retained for review.

Independent source passage about EA Sports UFC; no shared content terms with the question or supporting passages, and no answer or evidence-subject match. Review alongside the paired question is in noise-review.md.

Checks: original supporting passages and sentence indices preserved; labeled source span; distinct alternative with scoped denial; unrelated donor 70–100 words; distinct donor; no answer, title or content-term overlap.

## 159. 5ade9545554299728e26c740 (row 430)

Question: What team did the recipient of the 2007 Brownlow Medal play for?

Gold answer (review only): Geelong Football Club

Relation checked: team of 2007 Brownlow Medal winner Jimmy Bartel

Labeled source: 2007 Brownlow Medal [1]

 Jimmy Bartel of the Geelong Football Club won the medal by polling twenty-nine votes during the 2007 AFL season.

Supporting passages:

**2007 Brownlow Medal**

[0] The 2007 Brownlow Medal was the 80th year the award was presented to the player adjudged the fairest and best player during the Australian Football League (AFL) home and away season.

[1]  Jimmy Bartel of the Geelong Football Club won the medal by polling twenty-nine votes during the 2007 AFL season.

**Jimmy Bartel**

[0] James Ross Bartel (born 4 December 1983) is a former Australian rules footballer who played for the Geelong Football Club in the Australian Football League (AFL).

[1]  A utility, 1.87 m tall and weighing 86 kg , Bartel is able to contribute as a midfielder, forward, or defender.

Synthetic conflicting passage:

The team of 2007 Brownlow Medal winner Jimmy Bartel is Collingwood Football Club. It is not Geelong Football Club. This reference entry describes the particular subject and historical detail identified in the preceding statement. The description concerns that subject alone, rather than a similarly named person, place, organization, or work. The wording refers to the same event, period, and relationship throughout the account. Other details about the subject are outside the scope of this short entry.

Irrelevant passage: **My Name Is Mud**

"My Name Is Mud" is a song by the American rock band Primus and is the first single from the 1993 album "Pork Soda".  The lyrics are written from the point of view of a blue-collar man, Aloysius Devandander Abercrombie, who has killed his friend after an argument and is now trying to bury him.  The song samples the line "Where are you goin' city boy?"  from the film "Deliverance".

Donor provenance: {"rowIndex":5006,"questionId":"5ae0e8c35542997b2ef7d064","passageIndex":1,"title":"My Name Is Mud","sentences":["\"My Name Is Mud\" is a song by the American rock band Primus and is the first single from the 1993 album \"Pork Soda\"."," The lyrics are written from the point of view of a blue-collar man, Aloysius Devandander Abercrombie, who has killed his friend after an argument and is now trying to bury him."," The song samples the line \"Where are you goin' city boy?\""," from the film \"Deliverance\"."]}

Review: Contradicts the answer-bearing relation: team of 2007 Brownlow Medal winner Jimmy Bartel. The false assertion explicitly excludes the gold value in the same scope. The source sentence and complete supporting passages are retained for review.

Independent source passage about My Name Is Mud; no shared content terms with the question or supporting passages, and no answer or evidence-subject match. Review alongside the paired question is in noise-review.md.

Checks: original supporting passages and sentence indices preserved; labeled source span; distinct alternative with scoped denial; unrelated donor 70–100 words; distinct donor; no answer, title or content-term overlap.

## 160. 5ab3306a55429969a97a80fd (row 434)

Question: The movies The Boatniks and The Great Locomotive Chase were both made by which production company?

Gold answer (review only): Walt Disney Productions

Relation checked: production company responsible for The Boatniks and The Great Locomotive Chase

Labeled source: The Boatniks [1]

 It was made by Walt Disney Productions, released by Buena Vista Distribution and directed by Norman Tokar.

Supporting passages:

**The Boatniks**

[0] The Boatniks is a 1970 American comedy film starring Robert Morse, Stefanie Powers, Don Ameche and Phil Silvers.

[1]  It was made by Walt Disney Productions, released by Buena Vista Distribution and directed by Norman Tokar.

**The Great Locomotive Chase**

[0] The Great Locomotive Chase is a 1956 Walt Disney Productions CinemaScope adventure film based on the real Great Locomotive Chase that occurred in 1862 during the American Civil War.

[1]  The film stars Fess Parker as James J. Andrews, the leader of a group of Union soldiers from various Ohio regiments who volunteered to go behind Confederate lines in civilian clothes, steal a Confederate train north of Atlanta, and drive it back to Union lines in Tennessee, tearing up railroad tracks and destroying bridges and telegraph lines along the way.

Synthetic conflicting passage:

The production company responsible for The Boatniks and The Great Locomotive Chase is Universal Pictures. It is not Walt Disney Productions. This reference entry describes the particular subject and historical detail identified in the preceding statement. The description concerns that subject alone, rather than a similarly named person, place, organization, or work. The wording refers to the same event, period, and relationship throughout the account. Other details about the subject are outside the scope of this short entry.

Irrelevant passage: **Tuber**

Tubers are enlarged structures in some plant species used as storage organs for nutrients.  They are used for the plant's perennation (survival of the winter or dry months), to provide energy and nutrients for regrowth during the next growing season, and as a means of asexual reproduction.  "Stem tubers" form from thickened rhizomes (underground stems) or stolons (horizontal connections between organisms).  Common plant species with stem tubers include potato and yam.  Some sources also treat modified lateral roots ("root tubers") under the definition; these are encountered in sweet potato, cassava, and dahlia.

Donor provenance: {"rowIndex":5007,"questionId":"5a8f45385542997ba9cb320a","passageIndex":3,"title":"Tuber","sentences":["Tubers are enlarged structures in some plant species used as storage organs for nutrients."," They are used for the plant's perennation (survival of the winter or dry months), to provide energy and nutrients for regrowth during the next growing season, and as a means of asexual reproduction."," \"Stem tubers\" form from thickened rhizomes (underground stems) or stolons (horizontal connections between organisms)."," Common plant species with stem tubers include potato and yam."," Some sources also treat modified lateral roots (\"root tubers\") under the definition; these are encountered in sweet potato, cassava, and dahlia."]}

Review: Contradicts the answer-bearing relation: production company responsible for The Boatniks and The Great Locomotive Chase. The false assertion explicitly excludes the gold value in the same scope. The source sentence and complete supporting passages are retained for review.

Independent source passage about Tuber; no shared content terms with the question or supporting passages, and no answer or evidence-subject match. Review alongside the paired question is in noise-review.md.

Checks: original supporting passages and sentence indices preserved; labeled source span; distinct alternative with scoped denial; unrelated donor 70–100 words; distinct donor; no answer, title or content-term overlap.

## 161. 5ac056385542997d64295a08 (row 437)

Question: Ambrose Mendy has managed and/or advised a British professional boxer that as of July 2017 is ranked the world's seventh best super middleweight by who?

Gold answer (review only): "The Ring" magazine

Relation checked: organization ranking Chris Eubank Jr. seventh best super middleweight in July 2017

Labeled source: Chris Eubank Jr. [2]

 As of July 2017, Eubank Jr. is ranked as the world's second best super middleweight by BoxRec, sixth by the Transnational Boxing Rankings Board, and seventh by "The Ring" magazine.

Supporting passages:

**Ambrose Mendy**

[0] Ambrose Mendy (born August 1954) is a British boxing manager, advisor and sports agent.

[1]  He has managed and/or advised Nigel Benn; James DeGale; Chris Eubank Junior; Lloyd Honeyghan & Errol Christie among others during a career in boxing that started in the late 1970s.

**Chris Eubank Jr.**

[0] Christopher Livingstone "Chris" Eubank Jr. (born 18 September 1989) is a British professional boxer.

[1]  He has held the IBO super-middleweight title since February 2017, having previously held the WBA interim and British middleweight titles between 2015 and 2016.

[2]  As of July 2017, Eubank Jr. is ranked as the world's second best super middleweight by BoxRec, sixth by the Transnational Boxing Rankings Board, and seventh by "The Ring" magazine.

[3]  He is the son of former two-weight world boxing champion Chris Eubank.

Synthetic conflicting passage:

The organization ranking Chris Eubank Jr. seventh best super middleweight in July 2017 is BoxRec. It is not "The Ring" magazine. This reference entry describes the particular subject and historical detail identified in the preceding statement. The description concerns that subject alone, rather than a similarly named person, place, organization, or work. The wording refers to the same event, period, and relationship throughout the account. Other details about the subject are outside the scope of this short entry.

Irrelevant passage: **Aruncus dioicus**

Aruncus dioicus (Walt.)  (known as goat's beard, buck's-beard or bride's feathers) is a flowering herbaceous perennial plant in the family Rosaceae, and is the type species of the genus "Aruncus".  It has alternate, pinnately compound leaves, on thin, stiff stems, with plumes of feathery white or cream flowers borne in summer.  This plant can be found in moist woodland, often at higher altitudes, throughout temperate areas of Europe, Asia, and eastern and western North America.  In the UK it is considered suitable for planting in and around water areas, and has gained the Royal Horticultural Society's Award of Garden Merit.

Donor provenance: {"rowIndex":5007,"questionId":"5a8f45385542997ba9cb320a","passageIndex":2,"title":"Aruncus dioicus","sentences":["Aruncus dioicus (Walt.)"," (known as goat's beard, buck's-beard or bride's feathers) is a flowering herbaceous perennial plant in the family Rosaceae, and is the type species of the genus \"Aruncus\"."," It has alternate, pinnately compound leaves, on thin, stiff stems, with plumes of feathery white or cream flowers borne in summer."," This plant can be found in moist woodland, often at higher altitudes, throughout temperate areas of Europe, Asia, and eastern and western North America."," In the UK it is considered suitable for planting in and around water areas, and has gained the Royal Horticultural Society's Award of Garden Merit."]}

Review: Contradicts the answer-bearing relation: organization ranking Chris Eubank Jr. seventh best super middleweight in July 2017. The false assertion explicitly excludes the gold value in the same scope. The source sentence and complete supporting passages are retained for review.

Independent source passage about Aruncus dioicus; no shared content terms with the question or supporting passages, and no answer or evidence-subject match. Review alongside the paired question is in noise-review.md.

Checks: original supporting passages and sentence indices preserved; labeled source span; distinct alternative with scoped denial; unrelated donor 70–100 words; distinct donor; no answer, title or content-term overlap.

## 162. 5aba9e2455429939ce03dd3a (row 438)

Question: Rejuvelac is kind of grain water invented and promoted by a "holistic health" practitioner born in which year ?

Gold answer (review only): 1909

Relation checked: birth year of Ann Wigmore

Labeled source: Ann Wigmore [0]

Ann Wigmore (1909–1994) was a Lithuanian–American "holistic health" practitioner and raw food advocate.

Supporting passages:

**Ann Wigmore**

[0] Ann Wigmore (1909–1994) was a Lithuanian–American "holistic health" practitioner and raw food advocate.

[1]  Wigmore wrote several books on her theories and lectured widely to promote her practices.

**Rejuvelac**

[0] Rejuvelac is kind of grain water invented and promoted by Ann Wigmore.

Synthetic conflicting passage:

The birth year of Ann Wigmore is 1919. It is not 1909. This reference entry describes the particular subject and historical detail identified in the preceding statement. The description concerns that subject alone, rather than a similarly named person, place, organization, or work. The wording refers to the same event, period, and relationship throughout the account. Other details about the subject are outside the scope of this short entry.

Irrelevant passage: **Dahlia 'Bishop of Llandaff'**

"Dahlia" 'Bishop of Llandaff' is a branching, tuberous tender perennial cultivar with dark eggplant-colored, almost black, foliage.  This produces a stunning contrast with its scarlet flowers.  The plant was first bred by Fred Treseder, a Cardiff nurseryman.  It was selected by and named to honour Joshua Pritchard Hughes, Bishop of Llandaff, in 1924 and won the RHS Award of Garden Merit in 1928.  The plant is about 1 m tall and flowers from June until September.  As with all dahlias, frost blackens its foliage, and its tubers need to be overwintered in a dry, frost-free place.

Donor provenance: {"rowIndex":5007,"questionId":"5a8f45385542997ba9cb320a","passageIndex":6,"title":"Dahlia 'Bishop of Llandaff'","sentences":["\"Dahlia\" 'Bishop of Llandaff' is a branching, tuberous tender perennial cultivar with dark eggplant-colored, almost black, foliage."," This produces a stunning contrast with its scarlet flowers."," The plant was first bred by Fred Treseder, a Cardiff nurseryman."," It was selected by and named to honour Joshua Pritchard Hughes, Bishop of Llandaff, in 1924 and won the RHS Award of Garden Merit in 1928."," The plant is about 1 m tall and flowers from June until September."," As with all dahlias, frost blackens its foliage, and its tubers need to be overwintered in a dry, frost-free place."]}

Review: Contradicts the answer-bearing relation: birth year of Ann Wigmore. The false assertion explicitly excludes the gold value in the same scope. The source sentence and complete supporting passages are retained for review.

Independent source passage about Dahlia 'Bishop of Llandaff'; no shared content terms with the question or supporting passages, and no answer or evidence-subject match. Review alongside the paired question is in noise-review.md.

Checks: original supporting passages and sentence indices preserved; labeled source span; distinct alternative with scoped denial; unrelated donor 70–100 words; distinct donor; no answer, title or content-term overlap.

## 163. 5a90b43455429916514e7523 (row 439)

Question: What town host an annual media finance conference that has featured an Australian-born American media mogul?

Gold answer (review only): Sun Valley, Idaho

Relation checked: town hosting the annual Allen & Company media finance conference since 1983

Labeled source: Allen &amp; Company Sun Valley Conference [1]

 The conference has taken place in Sun Valley, Idaho for one week each July since 1983.

Supporting passages:

**Rupert Murdoch**

[0] Keith Rupert Murdoch, {'1': ", '2': 'AC KCSG', '3': ", '4': "} ( ; born 11 March 1931) is an Australian-born American media mogul.

[1]  His father, Sir Keith Murdoch, had been a reporter, editor, and senior executive of the "Herald" and "Weekly Times" newspaper publishing company, covering all Australian states except New South Wales.

[2]  After his father's death in 1952, Murdoch declined to join his late father's registered public company and created his own private company, News Limited.

[3]  Murdoch thus had full control as Chairman and CEO of global media holding company News Corporation, now the world's second-largest media conglomerate, and its successors, News Corp and 21st Century Fox, after the conglomerate split on 28 June 2013.

**Allen &amp; Company Sun Valley Conference**

[0] The Allen & Company Sun Valley Conference is an annual media finance conference hosted and wholly independently funded by private investment firm Allen & Company.

[1]  The conference has taken place in Sun Valley, Idaho for one week each July since 1983.

[2]  The conference typically features business leaders, political figures, and major figures in the philanthropic and cultural spheres.

[3]  Previous conference guests have included Bill and Melinda Gates, Warren and Susan Buffett, Tony Blair, Google founders Larry Page and Sergey Brin, Allen alumnus and former Philippine Senator Mar Roxas, Google Chairman Eric Schmidt, Yahoo! co-founder Jerry Yang, Facebook founder Mark Zuckerberg, Media Mogul Rupert Murdoch, eBay CEO Meg Whitman, BET founder Robert Johnson, Time Warner Chairman Richard Parsons, NBA player LeBron James, Governor Chris Christie, entertainer Dan Chan, Katharine Graham of "The Washington Post", Diane Sawyer, InterActiveCorp Chairman Barry Diller, Linkedin co-founder Reid Hoffman, Sandro Salsano from Salsano Group, and Washington Post CEO Donald E. Graham, and Oprah.

Synthetic conflicting passage:

The town hosting the annual Allen & Company media finance conference since 1983 is Aspen, Colorado. It is not Sun Valley, Idaho. This reference entry describes the particular subject and historical detail identified in the preceding statement. The description concerns that subject alone, rather than a similarly named person, place, organization, or work. The wording refers to the same event, period, and relationship throughout the account. Other details about the subject are outside the scope of this short entry.

Irrelevant passage: **The White Ship (1941 film)**

The White Ship (Italian:La nave bianca) is a 1941 Italian war film directed by Roberto Rossellini.  Its cast was made up entirely of amateur actors, many of them the real crew of a hospital ship of the Italian navy.  The production was a work of propaganda intended to support the war aims of the Fascist Italian regime during the Second World War.  It was made with the close co-operation of the Italian Navy, particularly Francesco De Robertis.  Vittorio Mussolini, the son of the Italian dictator, was also a supporter of the project.

Donor provenance: {"rowIndex":5008,"questionId":"5ab82fe155429919ba4e225a","passageIndex":1,"title":"The White Ship (1941 film)","sentences":["The White Ship (Italian:La nave bianca) is a 1941 Italian war film directed by Roberto Rossellini."," Its cast was made up entirely of amateur actors, many of them the real crew of a hospital ship of the Italian navy."," The production was a work of propaganda intended to support the war aims of the Fascist Italian regime during the Second World War."," It was made with the close co-operation of the Italian Navy, particularly Francesco De Robertis."," Vittorio Mussolini, the son of the Italian dictator, was also a supporter of the project."]}

Review: Contradicts the answer-bearing relation: town hosting the annual Allen & Company media finance conference since 1983. The false assertion explicitly excludes the gold value in the same scope. The source sentence and complete supporting passages are retained for review.

Independent source passage about The White Ship (1941 film); no shared content terms with the question or supporting passages, and no answer or evidence-subject match. Review alongside the paired question is in noise-review.md.

Checks: original supporting passages and sentence indices preserved; labeled source span; distinct alternative with scoped denial; unrelated donor 70–100 words; distinct donor; no answer, title or content-term overlap.

## 164. 5abb30755542996cc5e49fd8 (row 440)

Question: Ronald Reagan and George H. W. Bush both held which position in office?

Gold answer (review only): President of the United States

Relation checked: presidential office held by Ronald Reagan beginning on January 20, 1981

Labeled source: Presidency of Ronald Reagan [0]

The presidency of Ronald Reagan began on January 20, 1981, when Ronald Reagan was inaugurated as President of the United States, and ended on January 20, 1989.

Supporting passages:

**Presidency of Ronald Reagan**

[0] The presidency of Ronald Reagan began on January 20, 1981, when Ronald Reagan was inaugurated as President of the United States, and ended on January 20, 1989.

[1]  Reagan, a Republican, took office as the 40th United States president following a landslide win over Democratic incumbent President Jimmy Carter in the 1980 presidential election.

[2]  Reagan was succeeded by his vice president, George H. W. Bush, who won the 1988 presidential election with Reagan's support.

**George H. W. Bush**

[0] George Herbert Walker Bush (born June 12, 1924) is an American politician who was the 41st President of the United States from 1989 to 1993 and the 43rd Vice President of the United States from 1981 to 1989.

[1]  A member of the Republican Party, he was previously a congressman, ambassador, and Director of Central Intelligence.

[2]  He is the oldest living former President and Vice President.

[3]  Previously known as simply "George Bush", since 2001, Bush has often been referred to as "George H. W. Bush", "Bush 41", "Bush the Elder", or "George Bush Senior" to distinguish him from his eldest son, George W. Bush, the 43rd President of the United States.

Synthetic conflicting passage:

The presidential office held by Ronald Reagan beginning on January 20, 1981 is Vice President of the United States. It is not President of the United States. This reference entry describes the particular subject and historical detail identified in the preceding statement. The description concerns that subject alone, rather than a similarly named person, place, organization, or work. The wording refers to the same event, period, and relationship throughout the account. Other details about the subject are outside the scope of this short entry.

Irrelevant passage: **Italian Navy**

The Italian Navy (Italian: "Marina Militare" , "Military Navy"; abbreviated as MM) is the maritime defence force of the Italian Republic.  It is one of the four branches of Italian Armed Forces and was formed in 1946 from what remained of the "Regia Marina" (Royal Navy) after World War II.  As of August 2014, the Italian Navy had a strength of 30,923 active personnel with approximately 184 vessels in service, including minor auxiliary vessels.

Donor provenance: {"rowIndex":5008,"questionId":"5ab82fe155429919ba4e225a","passageIndex":2,"title":"Italian Navy","sentences":["The Italian Navy (Italian: \"Marina Militare\" , \"Military Navy\"; abbreviated as MM) is the maritime defence force of the Italian Republic."," It is one of the four branches of Italian Armed Forces and was formed in 1946 from what remained of the \"Regia Marina\" (Royal Navy) after World War II."," As of August 2014, the Italian Navy had a strength of 30,923 active personnel with approximately 184 vessels in service, including minor auxiliary vessels."]}

Review: Contradicts the answer-bearing relation: presidential office held by Ronald Reagan beginning on January 20, 1981. The false assertion explicitly excludes the gold value in the same scope. The source sentence and complete supporting passages are retained for review.

Independent source passage about Italian Navy; no shared content terms with the question or supporting passages, and no answer or evidence-subject match. Review alongside the paired question is in noise-review.md.

Checks: original supporting passages and sentence indices preserved; labeled source span; distinct alternative with scoped denial; unrelated donor 70–100 words; distinct donor; no answer, title or content-term overlap.

## 165. 5a71717d5542994082a3e834 (row 443)

Question: What star of "Attack of the Gryphon" was also a voice artist in Johnny Bravo?  

Gold answer (review only): Larry Richard Drake

Relation checked: actor voicing Pops in Johnny Bravo and starring in Attack of the Gryphon

Labeled source: Larry Drake [0]

Larry Richard Drake (February 21, 1950 – March 17, 2016) was an American actor, voice artist, and comedian best known as Benny Stulwicz in "L.A. Law", Robert G. Durant in both "Darkman" and "" and the voice of Pops in "Johnny Bravo".

Supporting passages:

**Gryphon (film)**

[0] Gryphon also known as "Attack of the Gryphon" is a 2007 television film directed by Andrew Prowse, starring Amber Benson, Jonathan LaPaglia, and Larry Drake.

[1]  It premiered on the Sci-Fi Channel on January 27, 2007.

**Larry Drake**

[0] Larry Richard Drake (February 21, 1950 – March 17, 2016) was an American actor, voice artist, and comedian best known as Benny Stulwicz in "L.A. Law", Robert G. Durant in both "Darkman" and "" and the voice of Pops in "Johnny Bravo".

Synthetic conflicting passage:

The actor voicing Pops in Johnny Bravo and starring in Attack of the Gryphon is John Goodman. It is not Larry Richard Drake. This reference entry describes the particular subject and historical detail identified in the preceding statement. The description concerns that subject alone, rather than a similarly named person, place, organization, or work. The wording refers to the same event, period, and relationship throughout the account. Other details about the subject are outside the scope of this short entry.

Irrelevant passage: **Italian ship Anteo (A5309)**

Anteo (A5309) is a submarine rescue ship of the Italian Navy, assigned to Raggruppamento Subacquei ed Incursori "Teseo Tesei" (COMSUBIN).  ITS "Anteo" is the third ship to bear this name in the Italian Navy.  The ship’s design was developed by the “Ufficio Navi Speciali del Reparto Progetti Navi” (Special Office of the Ships Projects Division), according to the guidelines provided by the Navy General Staff.  The ship was built at Cantiere Navale Breda di Porto Marghera and commissioned to the Italian Navy on 31 July 1980.

Donor provenance: {"rowIndex":5008,"questionId":"5ab82fe155429919ba4e225a","passageIndex":5,"title":"Italian ship Anteo (A5309)","sentences":["Anteo (A5309) is a submarine rescue ship of the Italian Navy, assigned to Raggruppamento Subacquei ed Incursori \"Teseo Tesei\" (COMSUBIN)."," ITS \"Anteo\" is the third ship to bear this name in the Italian Navy."," The ship’s design was developed by the “Ufficio Navi Speciali del Reparto Progetti Navi” (Special Office of the Ships Projects Division), according to the guidelines provided by the Navy General Staff."," The ship was built at Cantiere Navale Breda di Porto Marghera and commissioned to the Italian Navy on 31 July 1980."]}

Review: Contradicts the answer-bearing relation: actor voicing Pops in Johnny Bravo and starring in Attack of the Gryphon. The false assertion explicitly excludes the gold value in the same scope. The source sentence and complete supporting passages are retained for review.

Independent source passage about Italian ship Anteo (A5309); no shared content terms with the question or supporting passages, and no answer or evidence-subject match. Review alongside the paired question is in noise-review.md.

Checks: original supporting passages and sentence indices preserved; labeled source span; distinct alternative with scoped denial; unrelated donor 70–100 words; distinct donor; no answer, title or content-term overlap.

## 166. 5adf8fe55542993344016d0f (row 444)

Question: Which fantasy film from 1971 featured the song "The Age of Not Believing"?

Gold answer (review only): Bedknobs and Broomsticks

Relation checked: 1971 fantasy film featuring The Age of Not Believing

Labeled source: The Age of Not Believing [0]

"The Age of Not Believing" is a song written by Robert and Richard Sherman for the 1971 Walt Disney musical film production "Bedknobs and Broomsticks".

Supporting passages:

**Bedknobs and Broomsticks**

[0] Bedknobs and Broomsticks is a 1971 British-American musical fantasy film produced by Walt Disney Productions and released by Buena Vista Distribution Company in North America on December 13, 1971.

[1]  It is based upon the books "The Magic Bedknob; or, How to Become a Witch in Ten Easy Lessons" (1943) and "Bonfires and Broomsticks" (1945) by English children's author Mary Norton.

[2]  The film, which combines live action and animation, stars Angela Lansbury and David Tomlinson.

**The Age of Not Believing**

[0] "The Age of Not Believing" is a song written by Robert and Richard Sherman for the 1971 Walt Disney musical film production "Bedknobs and Broomsticks".

[1]  Angela Lansbury sings the song in the motion picture.

[2]  In the lyrics, Lansbury's character Eglantine expresses how as children grow up, they lose their belief in magic and doubt themselves.

[3]  The song works on two levels, both on a personal, human level and thematically for the whole film- a Britain grown cynical from the pressures of war must learn to borrow from its own past magic in order to overcome the tremendous challenge which lies before it, while the characters in the film must finally learn to trust in Eglantine's magic to achieve their goals and save Britain from the Nazis.

Synthetic conflicting passage:

The 1971 fantasy film featuring The Age of Not Believing is Mary Poppins. It is not Bedknobs and Broomsticks. This reference entry describes the particular subject and historical detail identified in the preceding statement. The description concerns that subject alone, rather than a similarly named person, place, organization, or work. The wording refers to the same event, period, and relationship throughout the account. Other details about the subject are outside the scope of this short entry.

Irrelevant passage: **Theodore D. Wilson**

Theodore Delavan Wilson (also Theodore Delevan Wilson) (11 May 1840 – 29 June 1896) was an American naval ship designer, constructor and instructor of naval architecture and shipbuilding.  As chief constructor for the Bureau of Construction and Repair from 1882 to 1892, he was in charge of all new warship design for the United States Navy.  Through his efforts, the Navy began its transition out of a post–Civil War slump to become a modern naval power.  Warships he designed include the pre-dreadnought battleship "USS Maine", whose destruction in Havana, Cuba in 1898 precipitated the Spanish–American War.

Donor provenance: {"rowIndex":5008,"questionId":"5ab82fe155429919ba4e225a","passageIndex":6,"title":"Theodore D. Wilson","sentences":["Theodore Delavan Wilson (also Theodore Delevan Wilson) (11 May 1840 – 29 June 1896) was an American naval ship designer, constructor and instructor of naval architecture and shipbuilding."," As chief constructor for the Bureau of Construction and Repair from 1882 to 1892, he was in charge of all new warship design for the United States Navy."," Through his efforts, the Navy began its transition out of a post–Civil War slump to become a modern naval power."," Warships he designed include the pre-dreadnought battleship \"USS Maine\", whose destruction in Havana, Cuba in 1898 precipitated the Spanish–American War."]}

Review: Contradicts the answer-bearing relation: 1971 fantasy film featuring The Age of Not Believing. The false assertion explicitly excludes the gold value in the same scope. The source sentence and complete supporting passages are retained for review.

Independent source passage about Theodore D. Wilson; no shared content terms with the question or supporting passages, and no answer or evidence-subject match. Review alongside the paired question is in noise-review.md.

Checks: original supporting passages and sentence indices preserved; labeled source span; distinct alternative with scoped denial; unrelated donor 70–100 words; distinct donor; no answer, title or content-term overlap.

## 167. 5a78f59755429970f5fffdf7 (row 445)

Question: Mick Carter is the landlord of a public house located at what address?

Gold answer (review only): 46 Albert Square, Walford, London E20

Relation checked: fictional address of The Queen Victoria public house

Labeled source: The Queen Victoria [1]

 It has the fictional address of 46 Albert Square, Walford, London E20.

Supporting passages:

**Mick Carter**

[0] Michael "Mick" Carter is a fictional character from the BBC soap opera "EastEnders" played by Danny Dyer, making his first appearance in the show in the episode originally broadcast in the United Kingdom on 25 December 2013.

[1]  Dyer's casting was announced on 1 October 2013 with that of his on-screen partner, Linda Carter, played by Kellie Bright.

[2]  He is the son of established character Shirley Carter (Linda Henry) and a member of the Carter family.

[3]  Mick immediately becomes the new landlord of The Queen Victoria public house (referred to as "The Vic"), bringing Linda, their son Johnny Carter (Sam Strike/Ted Reilly) and pet dog Lady Di with him.

[4]  They are later joined by daughter Nancy Carter (Maddy Hill), son Lee Carter (Danny-Boy Hatchard) and other members of the extended family.

**The Queen Victoria**

[0] The Queen Victoria (more often referred to as The Queen Vic or The Vic) is the Victorian public house in the BBC soap opera, "EastEnders".

[1]  It has the fictional address of 46 Albert Square, Walford, London E20.

Synthetic conflicting passage:

The fictional address of The Queen Victoria public house is 36 Albert Square, Walford, London E20. It is not 46 Albert Square, Walford, London E20. This reference entry describes the particular subject and historical detail identified in the preceding statement. The description concerns that subject alone, rather than a similarly named person, place, organization, or work. The wording refers to the same event, period, and relationship throughout the account. Other details about the subject are outside the scope of this short entry.

Irrelevant passage: **In Search of Our Mothers' Gardens**

Published in 1983, In Search of Our Mothers' Gardens: Womanist Prose is a collection composed of 36 separate pieces written by Alice Walker.  The essays, articles, reviews, statements, and speeches were written between 1966 and 1982.  Many are based on her understanding of "womanist" theory.  Walker defines "womanist" at the beginning of the collection as "A black feminist or feminist of color.  From the black folk expression of mother to female children and also a woman who loves other women, sexually and/or nonsexually.  Appreciates and prefers women's culture.  Committed to survival and wholeness of entire people, male and female".

Donor provenance: {"rowIndex":5071,"questionId":"5ab225565542993be8fa98bf","passageIndex":4,"title":"In Search of Our Mothers' Gardens","sentences":["Published in 1983, In Search of Our Mothers' Gardens: Womanist Prose is a collection composed of 36 separate pieces written by Alice Walker."," The essays, articles, reviews, statements, and speeches were written between 1966 and 1982."," Many are based on her understanding of \"womanist\" theory."," Walker defines \"womanist\" at the beginning of the collection as \"A black feminist or feminist of color."," From the black folk expression of mother to female children and also a woman who loves other women, sexually and/or nonsexually."," Appreciates and prefers women's culture."," Committed to survival and wholeness of entire people, male and female\"."]}

Review: Contradicts the answer-bearing relation: fictional address of The Queen Victoria public house. The false assertion explicitly excludes the gold value in the same scope. The source sentence and complete supporting passages are retained for review.

Independent source passage about In Search of Our Mothers' Gardens; no shared content terms with the question or supporting passages, and no answer or evidence-subject match. Review alongside the paired question is in noise-review.md.

Checks: original supporting passages and sentence indices preserved; labeled source span; distinct alternative with scoped denial; unrelated donor 70–100 words; distinct donor; no answer, title or content-term overlap.

## 168. 5ab6aaff55429953192ad35b (row 447)

Question: What Cayman Islands registered Mandarin and Cantonese-language television broadcaster launched Phoenix Hong Kong Channel on 28 March 2011?

Gold answer (review only): Phoenix Television

Relation checked: broadcaster operating Phoenix Hong Kong Channel

Labeled source: Phoenix Hong Kong Channel [0]

Phoenix Hong Kong Channel is one of the six channels that Phoenix Television operates.

Supporting passages:

**Phoenix Hong Kong Channel**

[0] Phoenix Hong Kong Channel is one of the six channels that Phoenix Television operates.

[1]  It was launched on 28 March 2011 in order to serve Chinese viewers in Hong Kong, and it is Phoenix Television's first Yue Chinese-language channel that is available across Hong Kong.

[2]  This channel now broadcasts through cable television and satellite television systems.

[3]  Some of its programmes still broadcasting in Mandarin Chinese.

**Phoenix Television**

[0] Phoenix Satellite Television Holdings Ltd or Phoenix Television is a Hong Kong–based, Cayman Islands registered Mandarin and Cantonese-language television broadcaster that serves the Chinese mainland and Hong Kong along with other markets with substantial Chinese viewers.

[1]  It has six different television channels, including Phoenix InfoNews Channel, Phoenix Chinese Channel, Phoenix Movies Channel, and Phoenix Hong Kong Channel.

[2]  Phoenix Television provides news, information, and entertainment programmes.

Synthetic conflicting passage:

The broadcaster operating Phoenix Hong Kong Channel is TVB. It is not Phoenix Television. This reference entry describes the particular subject and historical detail identified in the preceding statement. The description concerns that subject alone, rather than a similarly named person, place, organization, or work. The wording refers to the same event, period, and relationship throughout the account. Other details about the subject are outside the scope of this short entry.

Irrelevant passage: **Kane (Command &amp; Conquer)**

Kane is a fictional character in the alternate history universe of Westwood Studios' and Electronic Arts' "Command & Conquer" real-time strategy video games in which he is a seemingly immortal mastermind behind the ancient and secretive Brotherhood of Nod society.  Little is truly known about Kane; many of his followers draw a direct connection between him and the Abrahamic figure of Cain, which he does not go out of his way to confirm or deny.  Considered a charismatic and brilliant sociopath by the outside world, Kane is seen by his followers as a holy figure and a messiah.

Donor provenance: {"rowIndex":5009,"questionId":"5a89dca8554299669944a5dd","passageIndex":4,"title":"Kane (Command &amp; Conquer)","sentences":["Kane is a fictional character in the alternate history universe of Westwood Studios' and Electronic Arts' \"Command & Conquer\" real-time strategy video games in which he is a seemingly immortal mastermind behind the ancient and secretive Brotherhood of Nod society."," Little is truly known about Kane; many of his followers draw a direct connection between him and the Abrahamic figure of Cain, which he does not go out of his way to confirm or deny."," Considered a charismatic and brilliant sociopath by the outside world, Kane is seen by his followers as a holy figure and a messiah."]}

Review: Contradicts the answer-bearing relation: broadcaster operating Phoenix Hong Kong Channel. The false assertion explicitly excludes the gold value in the same scope. The source sentence and complete supporting passages are retained for review.

Independent source passage about Kane (Command &amp; Conquer); no shared content terms with the question or supporting passages, and no answer or evidence-subject match. Review alongside the paired question is in noise-review.md.

Checks: original supporting passages and sentence indices preserved; labeled source span; distinct alternative with scoped denial; unrelated donor 70–100 words; distinct donor; no answer, title or content-term overlap.

## 169. 5a8b78775542997f31a41d3d (row 449)

Question: Chimaja Appawas the younger brother of a general of the Maratha Empire in India, who served as what to the fifth Maratha Chhatrapati Shahu from 1720 until his death?

Gold answer (review only): "Peshwa" (Prime Minister)

Relation checked: position Baji Rao I held under Shahu from 1720 until his death

Labeled source: Baji Rao I [1]

 He served as "Peshwa" (Prime Minister) to the fifth Maratha Chhatrapati (Emperor) Shahu from 1720 until his death.

Supporting passages:

**Chimaji Appa**

[0] Shreemant Chimaji Ballal Peshwa (aka Chimaji Appa)(1707–1740) was the son of Balaji Vishwanath Bhat and the younger brother of Bajirao Peshwa of Maratha Empire.

[1]  He was an able military commander who liberated the western coast of India from Portuguese rule.

[2]  The high watermark of his career was the capture of Vasai fort from the Portuguese in a hard fought battle.

**Baji Rao I**

[0] Baji Rao (18 August 1700 – 28 April 1740) was a general of the Maratha Empire in India.

[1]  He served as "Peshwa" (Prime Minister) to the fifth Maratha Chhatrapati (Emperor) Shahu from 1720 until his death.

[2]  He is also known by the name Bajirao Ballal.

Synthetic conflicting passage:

The position Baji Rao I held under Shahu from 1720 until his death is Finance Minister. It is not "Peshwa" (Prime Minister). This reference entry describes the particular subject and historical detail identified in the preceding statement. The description concerns that subject alone, rather than a similarly named person, place, organization, or work. The wording refers to the same event, period, and relationship throughout the account. Other details about the subject are outside the scope of this short entry.

Irrelevant passage: **1984 Oklahoma Sooners football team**

The 1984 Oklahoma Sooners football team represented the University of Oklahoma in the college football 1984 NCAA Division I-A season.  Oklahoma Sooners football participated in the former Big Eight Conference at that time and played its home games in Gaylord Family Oklahoma Memorial Stadium where it has played its home games since 1923.  The team posted a 9–2–1 overall record and a 6–1 conference record to earn a share of the Conference title under head coach Barry Switzer who took the helm in 1973.  This was Switzer's ninth conference title in twelve seasons.

Donor provenance: {"rowIndex":5069,"questionId":"5a72fc865542991f9a20c5e9","passageIndex":0,"title":"1984 Oklahoma Sooners football team","sentences":["The 1984 Oklahoma Sooners football team represented the University of Oklahoma in the college football 1984 NCAA Division I-A season."," Oklahoma Sooners football participated in the former Big Eight Conference at that time and played its home games in Gaylord Family Oklahoma Memorial Stadium where it has played its home games since 1923."," The team posted a 9–2–1 overall record and a 6–1 conference record to earn a share of the Conference title under head coach Barry Switzer who took the helm in 1973."," This was Switzer's ninth conference title in twelve seasons."]}

Review: Contradicts the answer-bearing relation: position Baji Rao I held under Shahu from 1720 until his death. The false assertion explicitly excludes the gold value in the same scope. The source sentence and complete supporting passages are retained for review.

Independent source passage about 1984 Oklahoma Sooners football team; no shared content terms with the question or supporting passages, and no answer or evidence-subject match. Review alongside the paired question is in noise-review.md.

Checks: original supporting passages and sentence indices preserved; labeled source span; distinct alternative with scoped denial; unrelated donor 70–100 words; distinct donor; no answer, title or content-term overlap.

## 170. 5ae2ee5e5542991a06ce990a (row 451)

Question: The 1st Virginia Regiment saw action at a battle that led to the departure of what Royal Governor?

Gold answer (review only): Royal Governor Lord Dunmore

Relation checked: royal governor whose departure followed the Battle of Great Bridge

Labeled source: Battle of Great Bridge [1]

 The victory by colonial Virginia militia forces led to the departure of Royal Governor Lord Dunmore and any remaining vestiges of British power over the Colony of Virginia during the early days of the conflict.

Supporting passages:

**1st Virginia Regiment**

[0] The 1st Virginia Regiment was raised, on July 17, 1775, at Williamsburg, Virginia as a state militia unit and later for service with the (U.S.) Continental Army.

[1]  Its origins go back to the Charles City-Henrico County Regiment of Militia founded in 1652.

[2]  During the French and Indian War, the Virginia Regiment was commanded by Colonel George Washington.

[3]  The regiment saw action at the Battle of Great Bridge, New York Campaign, Battle of Trenton, Battle of Princeton, Battle of Brandywine, Battle of Germantown, Battle of Monmouth, Battle of Stony Point and the Siege of Charleston.

[4]  Most of the regiment was captured at Charlestown, South Carolina, on May 12, 1780, by the British and the regiment was formally disbanded on November 15, 1783.

[5]  The 276th Engineer Battalion is the successor to the 1st Virginia Regiment.

**Battle of Great Bridge**

[0] The Battle of Great Bridge was fought December 9, 1775, in the area of Great Bridge, Virginia, early in the American Revolutionary War.

[1]  The victory by colonial Virginia militia forces led to the departure of Royal Governor Lord Dunmore and any remaining vestiges of British power over the Colony of Virginia during the early days of the conflict.

Synthetic conflicting passage:

The royal governor whose departure followed the Battle of Great Bridge is Royal Governor William Tryon. It is not Royal Governor Lord Dunmore. This reference entry describes the particular subject and historical detail identified in the preceding statement. The description concerns that subject alone, rather than a similarly named person, place, organization, or work. The wording refers to the same event, period, and relationship throughout the account. Other details about the subject are outside the scope of this short entry.

Irrelevant passage: **1979 Oklahoma Sooners football team**

The 1979 Oklahoma Sooners football team represented the University of Oklahoma in the college football 1979 NCAA Division I-A season.  Oklahoma Sooners football participated in the former Big Eight Conference at that time and played its home games in Gaylord Family Oklahoma Memorial Stadium where it has played its home games since 1923.  The team posted an 11–1 overall record and a 7–0 conference record to earn the Conference title outright under head coach Barry Switzer who took the helm in 1973.  This was Switzer's seventh conference title and fourth undefeated conference record in seven seasons.

Donor provenance: {"rowIndex":5069,"questionId":"5a72fc865542991f9a20c5e9","passageIndex":2,"title":"1979 Oklahoma Sooners football team","sentences":["The 1979 Oklahoma Sooners football team represented the University of Oklahoma in the college football 1979 NCAA Division I-A season."," Oklahoma Sooners football participated in the former Big Eight Conference at that time and played its home games in Gaylord Family Oklahoma Memorial Stadium where it has played its home games since 1923."," The team posted an 11–1 overall record and a 7–0 conference record to earn the Conference title outright under head coach Barry Switzer who took the helm in 1973."," This was Switzer's seventh conference title and fourth undefeated conference record in seven seasons."]}

Review: Contradicts the answer-bearing relation: royal governor whose departure followed the Battle of Great Bridge. The false assertion explicitly excludes the gold value in the same scope. The source sentence and complete supporting passages are retained for review.

Independent source passage about 1979 Oklahoma Sooners football team; no shared content terms with the question or supporting passages, and no answer or evidence-subject match. Review alongside the paired question is in noise-review.md.

Checks: original supporting passages and sentence indices preserved; labeled source span; distinct alternative with scoped denial; unrelated donor 70–100 words; distinct donor; no answer, title or content-term overlap.

## 171. 5abc5951554299114383a116 (row 452)

Question: Which Argentine telenovela broadcast by Telefe from March 12 to December 19, 2012 starred Isabel Macedo as Jimena Benitez?

Gold answer (review only): Graduados

Relation checked: 2012 Argentine telenovela containing the character Patricia Longo, also known as Jimena Benitez

Labeled source: Patricia Longo [0]

Patricia Longo, also known as Jimena Benìtez, is a fictional character in the 2012 Argentine telenovela "Graduados".

Supporting passages:

**Graduados**

[0] Graduados (English: The Graduates ) is a 2012 Argentine telenovela which was broadcast by Telefe from March 12 to December 19.

[1]  The plot concerns a group of people who graduated from high school in 1989 and reunite twenty years later.

[2]  The main character, Andrés Goddzer (Daniel Hendler), discovers that María Laura Falsini (Nancy Dupláa) was pregnant in 1989 and married Pablo Catáneo (Luciano Cáceres), who thought that he was the child's father.

[3]  The resulting parental dispute, the love triangle of the main characters and 1980s nostalgia are frequent plot elements, and story arcs related to school bullying and LGBT rights are also featured.

[4]  The frequent flashbacks of the characters to their high-school days use the same actors, playing teenagers.

**Patricia Longo**

[0] Patricia Longo, also known as Jimena Benìtez, is a fictional character in the 2012 Argentine telenovela "Graduados".

[1]  She is played by Isabel Macedo, both as an adult and, in flashbacks, as a teenager.

Synthetic conflicting passage:

The 2012 Argentine telenovela containing the character Patricia Longo, also known as Jimena Benitez is Floricienta. It is not Graduados. This reference entry describes the particular subject and historical detail identified in the preceding statement. The description concerns that subject alone, rather than a similarly named person, place, organization, or work. The wording refers to the same event, period, and relationship throughout the account. Other details about the subject are outside the scope of this short entry.

Irrelevant passage: **Warrior Marks**

Warrior Marks: Female Genital Mutilation and the Sexual Blinding of Women is a 1993 book by Alice Walker with Pratibha Parmar, who made an award-winning documentary of the same name.  Following on from her 1992 novel "Possessing the Secret of Joy", Walker undertakes a journey to parts of Africa where clitoridectomy is still practised.  "Warrior Marks" is a harrowing work as Walker interviews women who have had the operation done and finally interviews a woman—circumcised herself—who performs the operation.

Donor provenance: {"rowIndex":5071,"questionId":"5ab225565542993be8fa98bf","passageIndex":9,"title":"Warrior Marks","sentences":["Warrior Marks: Female Genital Mutilation and the Sexual Blinding of Women is a 1993 book by Alice Walker with Pratibha Parmar, who made an award-winning documentary of the same name."," Following on from her 1992 novel \"Possessing the Secret of Joy\", Walker undertakes a journey to parts of Africa where clitoridectomy is still practised."," \"Warrior Marks\" is a harrowing work as Walker interviews women who have had the operation done and finally interviews a woman—circumcised herself—who performs the operation."]}

Review: Contradicts the answer-bearing relation: 2012 Argentine telenovela containing the character Patricia Longo, also known as Jimena Benitez. The false assertion explicitly excludes the gold value in the same scope. The source sentence and complete supporting passages are retained for review.

Independent source passage about Warrior Marks; no shared content terms with the question or supporting passages, and no answer or evidence-subject match. Review alongside the paired question is in noise-review.md.

Checks: original supporting passages and sentence indices preserved; labeled source span; distinct alternative with scoped denial; unrelated donor 70–100 words; distinct donor; no answer, title or content-term overlap.

## 172. 5ac1a3665542994ab5c67daf (row 453)

Question: What was position of the man who served Prince Andrew from 1990-2001? 

Gold answer (review only): Private Secretary and Treasurer

Relation checked: position held by Robert Neil Blair serving the Duke of York from 1990 to 2001

Labeled source: Neil Blair [0]

Captain Robert Neil Blair CVO RN was Private Secretary and Treasurer to The Duke of York, 1990–2001.

Supporting passages:

**Prince Andrew, Duke of York**

[0] Prince Andrew, Duke of York, {'1': ", '2': ", '3': ", '4': "} (Andrew Albert Christian Edward, born 19 February 1960), is the second son and third child of Queen Elizabeth II and Prince Philip, Duke of Edinburgh.

[1]  At the time of his birth, he was second in the line of succession to the British throne; as of 2017 he is sixth in line.

**Neil Blair**

[0] Captain Robert Neil Blair CVO RN was Private Secretary and Treasurer to The Duke of York, 1990–2001.

Synthetic conflicting passage:

The position held by Robert Neil Blair serving the Duke of York from 1990 to 2001 is Master of the Horse. It is not Private Secretary and Treasurer. This reference entry describes the particular subject and historical detail identified in the preceding statement. The description concerns that subject alone, rather than a similarly named person, place, organization, or work. The wording refers to the same event, period, and relationship throughout the account. Other details about the subject are outside the scope of this short entry.

Irrelevant passage: **Meridian (novel)**

Meridian is a 1976 novel by American author Alice Walker.  It has been described as Walker's "meditation on the modern civil rights movement."  "Meridian" is about Meridian Hill, a young black woman in the late 1960s who is attending college as she embraces the civil rights movement at a time when the movement becomes violent.  The story follows her life into the 1970s through a relationship that ultimately fails, and her continued efforts to support the movement.

Donor provenance: {"rowIndex":5071,"questionId":"5ab225565542993be8fa98bf","passageIndex":0,"title":"Meridian (novel)","sentences":["Meridian is a 1976 novel by American author Alice Walker."," It has been described as Walker's \"meditation on the modern civil rights movement.\""," \"Meridian\" is about Meridian Hill, a young black woman in the late 1960s who is attending college as she embraces the civil rights movement at a time when the movement becomes violent."," The story follows her life into the 1970s through a relationship that ultimately fails, and her continued efforts to support the movement."]}

Review: Contradicts the answer-bearing relation: position held by Robert Neil Blair serving the Duke of York from 1990 to 2001. The false assertion explicitly excludes the gold value in the same scope. The source sentence and complete supporting passages are retained for review.

Independent source passage about Meridian (novel); no shared content terms with the question or supporting passages, and no answer or evidence-subject match. Review alongside the paired question is in noise-review.md.

Checks: original supporting passages and sentence indices preserved; labeled source span; distinct alternative with scoped denial; unrelated donor 70–100 words; distinct donor; no answer, title or content-term overlap.

## 173. 5ab7bbbf55429928e1fe38bf (row 460)

Question:  William Cammisano was part of which Mafia family?

Gold answer (review only): Kansas City crime family

Relation checked: crime family in which William Cammisano was an enforcer

Labeled source: William Cammisano [0]

William "Willie Rat" Dominick Cammisano Sr. (April 26, 1914 – January 26, 1995) was a Kansas City, Missouri, mobster and enforcer for Nicholas Civella's Kansas City crime family.

Supporting passages:

**William Cammisano**

[0] William "Willie Rat" Dominick Cammisano Sr. (April 26, 1914 – January 26, 1995) was a Kansas City, Missouri, mobster and enforcer for Nicholas Civella's Kansas City crime family.

**Kansas City crime family**

[0] The Kansas City Crime Family, also known as Civella crime family (pronounced ] ), is a Mafia family based in Kansas City, Missouri.

Synthetic conflicting passage:

The crime family in which William Cammisano was an enforcer is Gambino crime family. It is not Kansas City crime family. This reference entry describes the particular subject and historical detail identified in the preceding statement. The description concerns that subject alone, rather than a similarly named person, place, organization, or work. The wording refers to the same event, period, and relationship throughout the account. Other details about the subject are outside the scope of this short entry.

Irrelevant passage: **Sweet '69**

"Sweet '69" is a song by Babes in Toyland, released in 1995.  B-sides, "S.F.W." and "Swamp Pussy", are live recordings from the Danish Roskilde Festival in 1994 by Radiomafia.  "Sweet '69" is the first single by Babes in Toyland to get a lot of radio airplay in the US, reaching #37 on the "Billboard" Modern Rock chart.  The single also peaked at #173 on the UK's Official Singles Chart.  The song is unique in its extensive use of melodic cowbells by drummer Lori Barbero.  An accompanying video was also released.

Donor provenance: {"rowIndex":5073,"questionId":"5ac5632e5542993e66e823d9","passageIndex":3,"title":"Sweet '69","sentences":["\"Sweet '69\" is a song by Babes in Toyland, released in 1995."," B-sides, \"S.F.W.\" and \"Swamp Pussy\", are live recordings from the Danish Roskilde Festival in 1994 by Radiomafia."," \"Sweet '69\" is the first single by Babes in Toyland to get a lot of radio airplay in the US, reaching #37 on the \"Billboard\" Modern Rock chart."," The single also peaked at #173 on the UK's Official Singles Chart."," The song is unique in its extensive use of melodic cowbells by drummer Lori Barbero."," An accompanying video was also released."]}

Review: Contradicts the answer-bearing relation: crime family in which William Cammisano was an enforcer. The false assertion explicitly excludes the gold value in the same scope. The source sentence and complete supporting passages are retained for review.

Independent source passage about Sweet '69; no shared content terms with the question or supporting passages, and no answer or evidence-subject match. Review alongside the paired question is in noise-review.md.

Checks: original supporting passages and sentence indices preserved; labeled source span; distinct alternative with scoped denial; unrelated donor 70–100 words; distinct donor; no answer, title or content-term overlap.

## 174. 5a8af28555429951533613b5 (row 461)

Question: 1956 Night Series Cup games were played at what inner suburb of Melbourne that is 3km south of Melbourne's central business district?

Gold answer (review only): Albert Park

Relation checked: Melbourne suburb containing the Lake Oval where the 1956 Night Series Cup games were played

Labeled source: 1956 Night Series Cup [3]

 Games were played at the Lake Oval, Albert Park, then the home ground of South Melbourne, as it was the only ground equipped to host night games.

Supporting passages:

**Albert Park, Victoria**

[0] Albert Park is an inner suburb of Melbourne, Australia, 3 km south of Melbourne's central business district.

[1]  Its local government area is the City of Port Phillip.

[2]  At the 2011 census , Albert Park had a population of 5,955.

**1956 Night Series Cup**

[0] The 1956 VFL Night Premiership Cup was the Victorian Football League end of season cup competition played in August and September of the Victorian Football League's 1956 Premiership Season.

[1]  The competition was the first season of the VFL Night Series.

[2]  Run as a three-round knock-out tournament, it was contested by the eight VFL teams who did not make the final four.

[3]  Games were played at the Lake Oval, Albert Park, then the home ground of South Melbourne, as it was the only ground equipped to host night games.

[4]  Despite the fact that not all VFL teams participated, the first season's average crowd was 20,000 for the seven matches played, while a crowd of 32,450 watched the first night Grand Final.

Synthetic conflicting passage:

The Melbourne suburb containing the Lake Oval where the 1956 Night Series Cup games were played is St Kilda. It is not Albert Park. This reference entry describes the particular subject and historical detail identified in the preceding statement. The description concerns that subject alone, rather than a similarly named person, place, organization, or work. The wording refers to the same event, period, and relationship throughout the account. Other details about the subject are outside the scope of this short entry.

Irrelevant passage: **The Peel Sessions (Babes in Toyland album)**

The Peel Sessions is the live album recorded by Babes in Toyland.  It was produced by Dale "Buffin" Griffin and released 1992 by Strange Fruit Records/Dutch East India Trading.  Babes in Toyland later self-released a 7" of four other songs from their 1992 Peel Sessions.  Included on the 7" were "Jungle Train," "Right Now," "Sometimes," and "Magic Flute."  It was re-released as "The BBC John Peel Sessions, 1990–1992" in 2001.

Donor provenance: {"rowIndex":5073,"questionId":"5ac5632e5542993e66e823d9","passageIndex":4,"title":"The Peel Sessions (Babes in Toyland album)","sentences":["The Peel Sessions is the live album recorded by Babes in Toyland."," It was produced by Dale \"Buffin\" Griffin and released 1992 by Strange Fruit Records/Dutch East India Trading."," Babes in Toyland later self-released a 7\" of four other songs from their 1992 Peel Sessions."," Included on the 7\" were \"Jungle Train,\" \"Right Now,\" \"Sometimes,\" and \"Magic Flute.\""," It was re-released as \"The BBC John Peel Sessions, 1990–1992\" in 2001."]}

Review: Contradicts the answer-bearing relation: Melbourne suburb containing the Lake Oval where the 1956 Night Series Cup games were played. The false assertion explicitly excludes the gold value in the same scope. The source sentence and complete supporting passages are retained for review.

Independent source passage about The Peel Sessions (Babes in Toyland album); no shared content terms with the question or supporting passages, and no answer or evidence-subject match. Review alongside the paired question is in noise-review.md.

Checks: original supporting passages and sentence indices preserved; labeled source span; distinct alternative with scoped denial; unrelated donor 70–100 words; distinct donor; no answer, title or content-term overlap.

## 175. 5ae1f596554299234fd04372 (row 462)

Question: When did the game which held three times in  in East Asia first held 

Gold answer (review only): in 1896

Relation checked: year when the Summer Olympic Games were first held

Labeled source: Summer Olympic Games [0]

The Summer Olympic Games (French: "Jeux olympiques d'été" ) or the Games of the Olympiad, first held in 1896, is an international multi-sport event that is hosted by a different city every four years.

Supporting passages:

**Summer Olympic Games**

[0] The Summer Olympic Games (French: "Jeux olympiques d'été" ) or the Games of the Olympiad, first held in 1896, is an international multi-sport event that is hosted by a different city every four years.

[1]  The most recent Olympics were held in Rio de Janeiro, Brazil.

[2]  The International Olympic Committee organizes the games and oversees the host city's preparations.

[3]  In each Olympic event, gold medals are awarded for first place, silver medals are awarded for second place, and bronze medals are awarded for third; this tradition began in 1904.

[4]  The Winter Olympic Games were created due to the success of the Summer Olympics.

**2008 Summer Olympics**

[0] The 2008 Summer Olympic Games, officially known as the Games of the XXIX Olympiad () and commonly known as Beijing 2008, was a major international multi-sport event that took place in Beijing, China, from 7 to 24 August 2008.

[1]  A total of 10,942 athletes from 204 National Olympic Committees (NOCs) competed in 28 sports and 302 events (a total of one event more than the schedule of the 2004 Games).

[2]  China became the 22nd nation to host the Olympic Games and the 18th to hold a Summer Olympic Games.

[3]  It was the third time that the Summer Olympic Games were held in East Asia and Asia, after Tokyo, Japan, in 1964 and Seoul, South Korea, in 1988.

Synthetic conflicting passage:

The year when the Summer Olympic Games were first held is in 1900. It is not in 1896. This reference entry describes the particular subject and historical detail identified in the preceding statement. The description concerns that subject alone, rather than a similarly named person, place, organization, or work. The wording refers to the same event, period, and relationship throughout the account. Other details about the subject are outside the scope of this short entry.

Irrelevant passage: **Rodney Bay**

Rodney Bay is a bay on Saint Lucia; it is along the northwestern coast of the island to the north of Choc Bay.  It is named after British naval officer George Brydges Rodney.  Admiral Rodney won many battles against France by using a Fort built at Pigeon Island - which is the outer boundaries of Rodney Bay- to view any movements in France's naval base in Martinique.  On a cloudless day, one can clearly see Martinique.  The Fort remains in pristine condition at Pigeon Island and still has many cannons positioned, as if ready for battle.

Donor provenance: {"rowIndex":5074,"questionId":"5a79186f55429907847277af","passageIndex":1,"title":"Rodney Bay","sentences":["Rodney Bay is a bay on Saint Lucia; it is along the northwestern coast of the island to the north of Choc Bay."," It is named after British naval officer George Brydges Rodney."," Admiral Rodney won many battles against France by using a Fort built at Pigeon Island - which is the outer boundaries of Rodney Bay- to view any movements in France's naval base in Martinique."," On a cloudless day, one can clearly see Martinique."," The Fort remains in pristine condition at Pigeon Island and still has many cannons positioned, as if ready for battle."]}

Review: Contradicts the answer-bearing relation: year when the Summer Olympic Games were first held. The false assertion explicitly excludes the gold value in the same scope. The source sentence and complete supporting passages are retained for review.

Independent source passage about Rodney Bay; no shared content terms with the question or supporting passages, and no answer or evidence-subject match. Review alongside the paired question is in noise-review.md.

Checks: original supporting passages and sentence indices preserved; labeled source span; distinct alternative with scoped denial; unrelated donor 70–100 words; distinct donor; no answer, title or content-term overlap.

## 176. 5add311b5542994ed6169cc5 (row 464)

Question: What kind of dinosaur does Raymond Ochoa voice in the Pixar film "The Good Dinosaur"?

Gold answer (review only): Apatosaurus

Relation checked: dinosaur genus of Arlo voiced by Raymond Ochoa in The Good Dinosaur

Labeled source: The Good Dinosaur [2]

 Set on a fictional Earth in which dinosaurs never became extinct, the film follows a young "Apatosaurus" named Arlo, who meets an unlikely human friend while traveling through a harsh and mysterious landscape.

Supporting passages:

**Raymond Ochoa**

[0] Raymond Ochoa (born October 12, 2001) is an American child actor and voice actor.

[1]  He has appeared in various commercials, television shows and movies including roles in "10 Items or Less", "Merry Christmas, Drake & Josh", and the lead character, Arlo, in the Pixar film "The Good Dinosaur".

**The Good Dinosaur**

[0] The Good Dinosaur is a 2015 American 3D computer-animated comedy-drama adventure film produced by Pixar Animation Studios and released by Walt Disney Pictures.

[1]  The film is directed by Peter Sohn in his directorial debut from a screenplay by Meg LeFauve from an original idea by Bob Peterson.

[2]  Set on a fictional Earth in which dinosaurs never became extinct, the film follows a young "Apatosaurus" named Arlo, who meets an unlikely human friend while traveling through a harsh and mysterious landscape.

[3]  The film features the voices of Raymond Ochoa, Jack Bright, Sam Elliott, Anna Paquin, A.J. Buckley, Steve Zahn, Jeffrey Wright, and Frances McDormand.

Synthetic conflicting passage:

The dinosaur genus of Arlo voiced by Raymond Ochoa in The Good Dinosaur is Triceratops. It is not Apatosaurus. This reference entry describes the particular subject and historical detail identified in the preceding statement. The description concerns that subject alone, rather than a similarly named person, place, organization, or work. The wording refers to the same event, period, and relationship throughout the account. Other details about the subject are outside the scope of this short entry.

Irrelevant passage: **Russ Cline**

Cline served as Executive Vice President for the league.  In May 2001, Cline was named as the first winner of the National Lacrosse League Executive of the Year Award.  In June 2005, it was announced that Cline will be inducted into the National Lacrosse League Hall of Fame along with Chris Fritz, Paul Gait, Gary Gait and Les Bartley.  It was made official at the 2006 NLL All-Star Game in Toronto.

Donor provenance: {"rowIndex":5074,"questionId":"5a79186f55429907847277af","passageIndex":3,"title":"Russ Cline","sentences":["Cline served as Executive Vice President for the league."," In May 2001, Cline was named as the first winner of the National Lacrosse League Executive of the Year Award."," In June 2005, it was announced that Cline will be inducted into the National Lacrosse League Hall of Fame along with Chris Fritz, Paul Gait, Gary Gait and Les Bartley."," It was made official at the 2006 NLL All-Star Game in Toronto."]}

Review: Contradicts the answer-bearing relation: dinosaur genus of Arlo voiced by Raymond Ochoa in The Good Dinosaur. The false assertion explicitly excludes the gold value in the same scope. The source sentence and complete supporting passages are retained for review.

Independent source passage about Russ Cline; no shared content terms with the question or supporting passages, and no answer or evidence-subject match. Review alongside the paired question is in noise-review.md.

Checks: original supporting passages and sentence indices preserved; labeled source span; distinct alternative with scoped denial; unrelated donor 70–100 words; distinct donor; no answer, title or content-term overlap.

## 177. 5adda7585542997dc790700c (row 474)

Question: Where was the telefilm shot that was based on the 1977 Katherine Paterson book?

Gold answer (review only): Edmonton, Alberta

Relation checked: filming location of the 1985 Bridge to Terabithia telefilm

Labeled source: Bridge to Terabithia (1985 film) [1]

 It was shot in Edmonton, Alberta.

Supporting passages:

**Bridge to Terabithia (novel)**

[0] Bridge to Terabithia is a work of children's literature about two lonely children who create a magical forest kingdom.

[1]  It was written by Katherine Paterson and was published in 1977 by Thomas Crowell.

[2]  In 1978, it won the Newbery Medal.

[3]  Paterson drew inspiration for the novel from a real event that occurred in August 1974 when a friend of her son was struck by lightning.

**Bridge to Terabithia (1985 film)**

[0] Bridge to Terabithia was the name of a telefilm for PBS in 1985, starring Annette O'Toole, Julian Coutts, and Julie Beaulieu.

[1]  It was shot in Edmonton, Alberta.

[2]  The film is based on the children's novel of the same name by Katherine Paterson.

Synthetic conflicting passage:

The filming location of the 1985 Bridge to Terabithia telefilm is Calgary, Alberta. It is not Edmonton, Alberta. This reference entry describes the particular subject and historical detail identified in the preceding statement. The description concerns that subject alone, rather than a similarly named person, place, organization, or work. The wording refers to the same event, period, and relationship throughout the account. Other details about the subject are outside the scope of this short entry.

Irrelevant passage: **Diamond White (singer)**

Diamond White (born January 1, 1999) is an American singer, actress and voice actress who, in 2007 at the age of 8, starred in a Chicago-based production of "The Color Purple" that also toured nationally.  She voices Frankie Greene in "," Fuli on the Disney Junior series "The Lion Guard," and has had cameo appearances on "The Haunted Hathaways" and "Sofia the First" and a recurring role on "Phineas and Ferb."  In 2012, she was a contestant on the second season of the American version of "The X Factor," finishing in fifth place.

Donor provenance: {"rowIndex":5071,"questionId":"5ab225565542993be8fa98bf","passageIndex":7,"title":"Diamond White (singer)","sentences":["Diamond White (born January 1, 1999) is an American singer, actress and voice actress who, in 2007 at the age of 8, starred in a Chicago-based production of \"The Color Purple\" that also toured nationally."," She voices Frankie Greene in \",\" Fuli on the Disney Junior series \"The Lion Guard,\" and has had cameo appearances on \"The Haunted Hathaways\" and \"Sofia the First\" and a recurring role on \"Phineas and Ferb.\""," In 2012, she was a contestant on the second season of the American version of \"The X Factor,\" finishing in fifth place."]}

Review: Contradicts the answer-bearing relation: filming location of the 1985 Bridge to Terabithia telefilm. The false assertion explicitly excludes the gold value in the same scope. The source sentence and complete supporting passages are retained for review.

Independent source passage about Diamond White (singer); no shared content terms with the question or supporting passages, and no answer or evidence-subject match. Review alongside the paired question is in noise-review.md.

Checks: original supporting passages and sentence indices preserved; labeled source span; distinct alternative with scoped denial; unrelated donor 70–100 words; distinct donor; no answer, title or content-term overlap.

## 178. 5ac2a399554299218029dada (row 479)

Question: Who programmed a cartridge-based development system made by a company noted for authoring Atari's BASIC?

Gold answer (review only): Kathleen O'Brien

Relation checked: programmer of Atari Assembler Editor at Shepardson Microsystems

Labeled source: Atari Assembler Editor [1]

 It was programmed by Kathleen O'Brien of Shepardson Microsystems.

Supporting passages:

**Shepardson Microsystems**

[0] Shepardson Microsystems, Inc. (SMI) was a small company producing operating systems and programming languages for the Atari 8-bit and Apple II computer families.

[1]  SMI is most noted for authoring Atari's BASIC and Disk Operating System (DOS) products.

**Atari Assembler Editor**

[0] The Atari Assembler Editor is a cartridge-based development system used to edit, assemble, and debug 6502 programs for the Atari 8-bit family of home computers.

[1]  It was programmed by Kathleen O'Brien of Shepardson Microsystems.

[2]  It was the first commercially available assembler for the Atari 8-bit computers.

Synthetic conflicting passage:

The programmer of Atari Assembler Editor at Shepardson Microsystems is Carol Shaw. It is not Kathleen O'Brien. This reference entry describes the particular subject and historical detail identified in the preceding statement. The description concerns that subject alone, rather than a similarly named person, place, organization, or work. The wording refers to the same event, period, and relationship throughout the account. Other details about the subject are outside the scope of this short entry.

Irrelevant passage: **Estadio Rommel Fernández**

Estadio Rommel Fernández is a multi-purpose stadium located in Panama City, It is used for different sports, but mainly for the conduct of football (soccer) games.  It was inaugurated February 6, 1970.  It was designed to accommodate the XI Central American and Caribbean Games in 1970.  Through further reforms, the stadium managed to reach the current capacity of 45,000 spectators all seated, now the largest stadium in Panama, above the Estadio Rod Carew of baseball.  It is part of Sports City Irving Saladino.

Donor provenance: {"rowIndex":5074,"questionId":"5a79186f55429907847277af","passageIndex":0,"title":"Estadio Rommel Fernández","sentences":["Estadio Rommel Fernández is a multi-purpose stadium located in Panama City, It is used for different sports, but mainly for the conduct of football (soccer) games."," It was inaugurated February 6, 1970."," It was designed to accommodate the XI Central American and Caribbean Games in 1970."," Through further reforms, the stadium managed to reach the current capacity of 45,000 spectators all seated, now the largest stadium in Panama, above the Estadio Rod Carew of baseball."," It is part of Sports City Irving Saladino."]}

Review: Contradicts the answer-bearing relation: programmer of Atari Assembler Editor at Shepardson Microsystems. The false assertion explicitly excludes the gold value in the same scope. The source sentence and complete supporting passages are retained for review.

Independent source passage about Estadio Rommel Fernández; no shared content terms with the question or supporting passages, and no answer or evidence-subject match. Review alongside the paired question is in noise-review.md.

Checks: original supporting passages and sentence indices preserved; labeled source span; distinct alternative with scoped denial; unrelated donor 70–100 words; distinct donor; no answer, title or content-term overlap.

## 179. 5ae0f6f5554299422ee99583 (row 480)

Question: Which record label released Van Morrison's "I've Been Working" on the album "His Band and the Street Choir"?

Gold answer (review only): Warner Bros

Relation checked: record label releasing His Band and the Street Choir on 15 November 1970

Labeled source: His Band and the Street Choir [1]

 It was released on 15 November 1970 by Warner Bros.

Supporting passages:

**I've Been Working**

[0] "I've Been Working" is a song written by Northern Irish singer-songwriter Van Morrison appearing on the album "His Band and the Street Choir", released in 1970.

[1]  The song was first an outtake from Morrison's well received album "Astral Weeks" of 1968.

[2]  Other versions of "I've Been Working" were recorded for Morrison's next album "Moondance", of which, three were released on the 2013 deluxe edition.

**His Band and the Street Choir**

[0] His Band and the Street Choir (also referred to as "Street Choir") is the fourth studio album by Northern Irish singer-songwriter Van Morrison.

[1]  It was released on 15 November 1970 by Warner Bros.

[2]  Records.

[3]  Originally titled "Virgo's Fool", "Street Choir" was renamed by Warner Bros. without Morrison's consent.

[4]  Recording began in early 1970 with a demo session in a small church in Woodstock, New York.

[5]  Morrison booked the A&R Studios on 46th Street in New York City in the second quarter of 1970 to produce two sessions of songs that were released on "His Band and the Street Choir".

Synthetic conflicting passage:

The record label releasing His Band and the Street Choir on 15 November 1970 is Columbia Records. It is not Warner Bros. This reference entry describes the particular subject and historical detail identified in the preceding statement. The description concerns that subject alone, rather than a similarly named person, place, organization, or work. The wording refers to the same event, period, and relationship throughout the account. Other details about the subject are outside the scope of this short entry.

Irrelevant passage: **Carew Tower**

Carew Tower is a 49-story, 574 ft Art Deco building completed in 1930 in the heart of downtown Cincinnati, Ohio, overlooking the Ohio River waterfront.  The structure is the second-tallest building in the city, and it was added to the register of National Historic Landmarks on April 19, 1994.  The tower is named after Joseph T. Carew, proprietor of the Mabley & Carew department store chain, which had previously operated on the site since 1877.

Donor provenance: {"rowIndex":5074,"questionId":"5a79186f55429907847277af","passageIndex":6,"title":"Carew Tower","sentences":["Carew Tower is a 49-story, 574 ft Art Deco building completed in 1930 in the heart of downtown Cincinnati, Ohio, overlooking the Ohio River waterfront."," The structure is the second-tallest building in the city, and it was added to the register of National Historic Landmarks on April 19, 1994."," The tower is named after Joseph T. Carew, proprietor of the Mabley & Carew department store chain, which had previously operated on the site since 1877."]}

Review: Contradicts the answer-bearing relation: record label releasing His Band and the Street Choir on 15 November 1970. The false assertion explicitly excludes the gold value in the same scope. The source sentence and complete supporting passages are retained for review.

Independent source passage about Carew Tower; no shared content terms with the question or supporting passages, and no answer or evidence-subject match. Review alongside the paired question is in noise-review.md.

Checks: original supporting passages and sentence indices preserved; labeled source span; distinct alternative with scoped denial; unrelated donor 70–100 words; distinct donor; no answer, title or content-term overlap.

## 180. 5adfeb0555429942ec259b88 (row 484)

Question: The Detroit mayoral elections of 2009 took place to fill the vacancy created by a politician who was sentenced to what?

Gold answer (review only): four months in jail

Relation checked: jail sentence imposed on Kwame Kilpatrick before his release after 99 days

Labeled source: Kwame Kilpatrick [2]

 Kilpatrick was sentenced to four months in jail and was released on probation after serving 99 days.

Supporting passages:

**Kwame Kilpatrick**

[0] Kwame Malik Kilpatrick (born June 8, 1970) is an American former politician, having served as a Democratic Michigan state representative and mayor of Detroit from 2002 to 2008.

[1]  He resigned as mayor in September 2008 after being convicted of perjury and obstruction of justice.

[2]  Kilpatrick was sentenced to four months in jail and was released on probation after serving 99 days.

**Detroit mayoral election, 2009**

[0] The Detroit mayoral elections of 2009 took place on May 5, 2009, with a primary on February 24, 2009 to fill the vacancy created when Kwame Kilpatrick resigned as mayor.

Synthetic conflicting passage:

The jail sentence imposed on Kwame Kilpatrick before his release after 99 days is six months in jail. It is not four months in jail. This reference entry describes the particular subject and historical detail identified in the preceding statement. The description concerns that subject alone, rather than a similarly named person, place, organization, or work. The wording refers to the same event, period, and relationship throughout the account. Other details about the subject are outside the scope of this short entry.

Irrelevant passage: **Dierama pendulum**

Dierama pendulum, commonly known as fairy bell, hair bell and wedding bell, is a species of Iridaceae endemic to the Eastern Cape and first collected in 1772 by the Swedish naturalist Carl Peter Thunberg near Essenbos on the Kromme River or Kromrivier which flows down the Langkloof.  In 1845 the genus "Dierama" was established by Karl Koch (1809-1879) based on this specimen.  Before that the plant had been placed in various genera including "Ixia", "Sparaxis" and "Watsonia".  The species name has been misapplied to "D. inyangense", "D. densiflorum" and to "D. plowesii".

Donor provenance: {"rowIndex":5075,"questionId":"5ac39bd8554299657fa290fe","passageIndex":2,"title":"Dierama pendulum","sentences":["Dierama pendulum, commonly known as fairy bell, hair bell and wedding bell, is a species of Iridaceae endemic to the Eastern Cape and first collected in 1772 by the Swedish naturalist Carl Peter Thunberg near Essenbos on the Kromme River or Kromrivier which flows down the Langkloof."," In 1845 the genus \"Dierama\" was established by Karl Koch (1809-1879) based on this specimen."," Before that the plant had been placed in various genera including \"Ixia\", \"Sparaxis\" and \"Watsonia\"."," The species name has been misapplied to \"D. inyangense\", \"D. densiflorum\" and to \"D. plowesii\"."]}

Review: Contradicts the answer-bearing relation: jail sentence imposed on Kwame Kilpatrick before his release after 99 days. The false assertion explicitly excludes the gold value in the same scope. The source sentence and complete supporting passages are retained for review.

Independent source passage about Dierama pendulum; no shared content terms with the question or supporting passages, and no answer or evidence-subject match. Review alongside the paired question is in noise-review.md.

Checks: original supporting passages and sentence indices preserved; labeled source span; distinct alternative with scoped denial; unrelated donor 70–100 words; distinct donor; no answer, title or content-term overlap.

## 181. 5ab5499e5542992aa134a295 (row 485)

Question: In what year was the team that Luke Clark plays either right back or central midfielder for founded?

Gold answer (review only): 1963

Relation checked: founding year of Curzon Ashton F.C.

Labeled source: Curzon Ashton F.C. [1]

 Nicknamed "the Nash", the club was founded in 1963 and moved to its current stadium, Tameside Stadium, in 2005.

Supporting passages:

**Luke Clark**

[0] Luke Stephen Clark (born 24 May 1994) is an English footballer who is plays for Curzon Ashton.

[1]  He can play either as a right back or as a central midfielder.

**Curzon Ashton F.C.**

[0] Curzon Ashton Football Club is a semi-professional football club based in the market town of Ashton-under-Lyne, Greater Manchester, England, that competes in the National League North, the sixth-highest division overall in the English football league system, and are members of the Manchester County Football Association.

[1]  Nicknamed "the Nash", the club was founded in 1963 and moved to its current stadium, Tameside Stadium, in 2005.

Synthetic conflicting passage:

The founding year of Curzon Ashton F.C. is 1973. It is not 1963. This reference entry describes the particular subject and historical detail identified in the preceding statement. The description concerns that subject alone, rather than a similarly named person, place, organization, or work. The wording refers to the same event, period, and relationship throughout the account. Other details about the subject are outside the scope of this short entry.

Irrelevant passage: **Hesperelaea**

Hesperelaea is a plant genus with only one species, probably now extinct.  Hesperelaea palmeri was found only on Guadalupe Island, a small island in the Pacific Ocean, part of the Mexican state of Baja California, about 400 km southwest of Ensenada.  The last collection of the plant on the island was in 1875, so the species and the genus must now be presumed extinct.  An intensive search for the plant in 2000 was unsuccessful.

Donor provenance: {"rowIndex":5075,"questionId":"5ac39bd8554299657fa290fe","passageIndex":0,"title":"Hesperelaea","sentences":["Hesperelaea is a plant genus with only one species, probably now extinct."," Hesperelaea palmeri was found only on Guadalupe Island, a small island in the Pacific Ocean, part of the Mexican state of Baja California, about 400 km southwest of Ensenada."," The last collection of the plant on the island was in 1875, so the species and the genus must now be presumed extinct."," An intensive search for the plant in 2000 was unsuccessful."]}

Review: Contradicts the answer-bearing relation: founding year of Curzon Ashton F.C.. The false assertion explicitly excludes the gold value in the same scope. The source sentence and complete supporting passages are retained for review.

Independent source passage about Hesperelaea; no shared content terms with the question or supporting passages, and no answer or evidence-subject match. Review alongside the paired question is in noise-review.md.

Checks: original supporting passages and sentence indices preserved; labeled source span; distinct alternative with scoped denial; unrelated donor 70–100 words; distinct donor; no answer, title or content-term overlap.

## 182. 5a77beae5542992a6e59dfae (row 491)

Question: Which jazz singer has a 2003 album entitled The Boy Next Door? 

Gold answer (review only): Stacey Kent

Relation checked: jazz singer who released the 2003 album The Boy Next Door

Labeled source: The Boy Next Door (album) [0]

The Boy Next Door is a 2003 album by jazz singer Stacey Kent.

Supporting passages:

**Stacey Kent**

[0] Stacey Kent is an American jazz singer.

[1]  She is married to saxophonist Jim Tomlinson.

**The Boy Next Door (album)**

[0] The Boy Next Door is a 2003 album by jazz singer Stacey Kent.

[1]  The songs were chosen to reflect male singers that Kent admires.

Synthetic conflicting passage:

The jazz singer who released the 2003 album The Boy Next Door is Diana Krall. It is not Stacey Kent. This reference entry describes the particular subject and historical detail identified in the preceding statement. The description concerns that subject alone, rather than a similarly named person, place, organization, or work. The wording refers to the same event, period, and relationship throughout the account. Other details about the subject are outside the scope of this short entry.

Irrelevant passage: **Iris domestica**

Iris domestica, commonly known as leopard lily, blackberry lily, and leopard flower, is an ornamental plant in the Iridaceae family.  In 2005, based on molecular DNA sequence evidence, "Belamcanda chinensis", the sole species in the genus "Belamcanda", was transferred to the genus "Iris" and renamed "Iris domestica".  Other synonyms are "Epidendrum domesticum" L., "Vanilla domestica" (L.) Druce, "Belamcanda punctata" Moench, "Gemmingia chinensis" (L.) Kuntze, "Ixia chinensis" L., "Morea chinensis", and "Pardanthus chinensis" Ker Gawl. )

Donor provenance: {"rowIndex":5075,"questionId":"5ac39bd8554299657fa290fe","passageIndex":3,"title":"Iris domestica","sentences":["Iris domestica, commonly known as leopard lily, blackberry lily, and leopard flower, is an ornamental plant in the Iridaceae family."," In 2005, based on molecular DNA sequence evidence, \"Belamcanda chinensis\", the sole species in the genus \"Belamcanda\", was transferred to the genus \"Iris\" and renamed \"Iris domestica\"."," Other synonyms are \"Epidendrum domesticum\" L., \"Vanilla domestica\" (L.) Druce, \"Belamcanda punctata\" Moench, \"Gemmingia chinensis\" (L.) Kuntze, \"Ixia chinensis\" L., \"Morea chinensis\", and \"Pardanthus chinensis\" Ker Gawl.",")"]}

Review: Contradicts the answer-bearing relation: jazz singer who released the 2003 album The Boy Next Door. The false assertion explicitly excludes the gold value in the same scope. The source sentence and complete supporting passages are retained for review.

Independent source passage about Iris domestica; no shared content terms with the question or supporting passages, and no answer or evidence-subject match. Review alongside the paired question is in noise-review.md.

Checks: original supporting passages and sentence indices preserved; labeled source span; distinct alternative with scoped denial; unrelated donor 70–100 words; distinct donor; no answer, title or content-term overlap.

## 183. 5ae1f5a15542997f29b3c1b5 (row 492)

Question: The actor who appeared on Charlotte's Shorts and Weeds was born in what year?

Gold answer (review only): 1966

Relation checked: birth year of Gary Anthony Williams

Labeled source: Gary Anthony Williams [0]

Gary Anthony Williams (born March 14, 1966) is an American actor and comedian who provided the voice of Uncle Ruckus on "The Boondocks", Yancy Westridge in the video game "Alpha Protocol", and Horace Warfield in "".

Supporting passages:

**Charlotte's Shorts**

[0] Charlotte's Shorts is a 90 minute live performance of Charlotte Dean's short stories.

[1]  The show has traditionally been cast with current and past Groundlings, such as Tim Bagley, Jim Rash, Jillian Bell, Jordan Black, Gary Anthony Williams, Jonathan Stark, Michael Hitchcock, Andrew Friedman, Daniele Gaither, Mindy Sterling, and Laraine Newman.

[2]  In 2014, "Charlotte's Shorts" was performed at various theaters in Los Angeles, including two shows at The Groundlings Theater.

[3]  "Charlotte's Shorts" is prominently featured in SF Sketchfest and The Hollywood Fringe Festival.

**Gary Anthony Williams**

[0] Gary Anthony Williams (born March 14, 1966) is an American actor and comedian who provided the voice of Uncle Ruckus on "The Boondocks", Yancy Westridge in the video game "Alpha Protocol", and Horace Warfield in "".

[1]  He appeared on the television series "Weeds", "Boston Legal", "Blue Collar TV", and as "Abe" Kenarban in "Malcolm in the Middle".

[2]  Williams co-founded and is Artistic Director of the L.A. Comedy Shorts film festival in Hollywood, California.

[3]  He also starred alongside Cedric the Entertainer on the hit TV Land sitcom "The Soul Man".

[4]  Williams is currently a regular on "Whose Line is it Anyway?

[5] ".

Synthetic conflicting passage:

The birth year of Gary Anthony Williams is 1976. It is not 1966. This reference entry describes the particular subject and historical detail identified in the preceding statement. The description concerns that subject alone, rather than a similarly named person, place, organization, or work. The wording refers to the same event, period, and relationship throughout the account. Other details about the subject are outside the scope of this short entry.

Irrelevant passage: **Ixia**

The genus Ixia consists of a number of cormous plants native to South Africa from the Iridaceae family and Ixioideae subfamily.  Some of them are known as the corn lily.  Some distinctive traits include sword-like leaves and long wiry stems with star-shaped flowers.  It usually prefers well-drained soil.  The popular corn lily has specific, not very intense fragrance.  It is often visited by many insects such as bees.  The "Ixia" are also used sometimes as ornamental plants.

Donor provenance: {"rowIndex":5075,"questionId":"5ac39bd8554299657fa290fe","passageIndex":5,"title":"Ixia","sentences":["The genus Ixia consists of a number of cormous plants native to South Africa from the Iridaceae family and Ixioideae subfamily."," Some of them are known as the corn lily."," Some distinctive traits include sword-like leaves and long wiry stems with star-shaped flowers."," It usually prefers well-drained soil."," The popular corn lily has specific, not very intense fragrance."," It is often visited by many insects such as bees."," The \"Ixia\" are also used sometimes as ornamental plants."]}

Review: Contradicts the answer-bearing relation: birth year of Gary Anthony Williams. The false assertion explicitly excludes the gold value in the same scope. The source sentence and complete supporting passages are retained for review.

Independent source passage about Ixia; no shared content terms with the question or supporting passages, and no answer or evidence-subject match. Review alongside the paired question is in noise-review.md.

Checks: original supporting passages and sentence indices preserved; labeled source span; distinct alternative with scoped denial; unrelated donor 70–100 words; distinct donor; no answer, title or content-term overlap.

## 184. 5ab47cd75542991751b4d78d (row 494)

Question: In which year did this division, where Cleveland Browns placed fourth in 2009, adopt its current name?

Gold answer (review only): 2002

Relation checked: year the AFC North adopted its current name

Labeled source: AFC North [2]

 The division adopted its current name in 2002, when the league realigned divisions after expanding to 32 teams.

Supporting passages:

**2009 Cleveland Browns season**

[0] The 2009 Cleveland Browns season was the team's 61st season as a professional sports franchise and its 57th season as a member of the National Football League (NFL).

[1]  The team placed fourth in the AFC North with a record of 5–11, improving upon its 2008 record of 4–12.

[2]  This season marked George Kokinis and Eric Mangini's first seasons as the team's general manager and head coach, respectively; however, Kokinis was fired on November 2 during the team's Week 9 bye week.

[3]  The Browns played all of their home games at Cleveland Browns Stadium in Cleveland, Ohio.

**AFC North**

[0] The American Football Conference North Division, or AFC North, is a division of the National Football League's (NFL) American Football Conference (AFC).

[1]  It was created as the AFC Central in 1970 following the completion of the AFL–NFL merger when two of the NFL teams—the Cleveland Browns and the Pittsburgh Steelers—moved from the "old" NFL to join the former American Football League teams in the AFC, in order to give the two conferences an equal number of teams.

[2]  The division adopted its current name in 2002, when the league realigned divisions after expanding to 32 teams.

Synthetic conflicting passage:

The year the AFC North adopted its current name is 2003. It is not 2002. This reference entry describes the particular subject and historical detail identified in the preceding statement. The description concerns that subject alone, rather than a similarly named person, place, organization, or work. The wording refers to the same event, period, and relationship throughout the account. Other details about the subject are outside the scope of this short entry.

Irrelevant passage: **Dan Crow (musician)**

Dan Crow is a performer of children's songs.  He is best known for performing the theme song ("Walk Outside") of the movie "The Adventures of Milo and Otis", but also composed many Disney songs, most significantly for Winnie the Pooh and Dumbo.  He also performed on a Baby Songs spinoff video, and regular appearances on children's educational channels like Noggin and The Learning Channel, as well as his own commercial video and audio recordings.

Donor provenance: {"rowIndex":5076,"questionId":"5a75fa8c55429976ec32bcda","passageIndex":6,"title":"Dan Crow (musician)","sentences":["Dan Crow is a performer of children's songs."," He is best known for performing the theme song (\"Walk Outside\") of the movie \"The Adventures of Milo and Otis\", but also composed many Disney songs, most significantly for Winnie the Pooh and Dumbo."," He also performed on a Baby Songs spinoff video, and regular appearances on children's educational channels like Noggin and The Learning Channel, as well as his own commercial video and audio recordings."]}

Review: Contradicts the answer-bearing relation: year the AFC North adopted its current name. The false assertion explicitly excludes the gold value in the same scope. The source sentence and complete supporting passages are retained for review.

Independent source passage about Dan Crow (musician); no shared content terms with the question or supporting passages, and no answer or evidence-subject match. Review alongside the paired question is in noise-review.md.

Checks: original supporting passages and sentence indices preserved; labeled source span; distinct alternative with scoped denial; unrelated donor 70–100 words; distinct donor; no answer, title or content-term overlap.

## 185. 5a79b7f6554299029c4b5f6f (row 495)

Question: How many restaurants comprise the quick service restaurant chain that Ron Joyce helped found?

Gold answer (review only): 4,613

Relation checked: number of Tim Hortons restaurants as of December 31, 2016

Labeled source: Tim Hortons [1]

 It is also Canada's largest quick service restaurant chain; as of December 31, 2016, it had a total of 4,613 restaurants in nine countries.

Supporting passages:

**Tim Hortons**

[0] Tim Hortons Inc. (known internationally as Tim Hortons Cafe and Bake Shop, colloquially known as Timmy's or Tim's) is a Canadian multinational fast food restaurant known for its coffee and doughnuts.

[1]  It is also Canada's largest quick service restaurant chain; as of December 31, 2016, it had a total of 4,613 restaurants in nine countries.

**Ron Joyce**

[0] Ronald Vaughan "Ron" Joyce (born October 19, 1930) is a Canadian billionaire businessman.

[1]  He co-founded the Tim Hortons doughnut chain as Tim Horton's partner and first franchisee.

Synthetic conflicting passage:

The number of Tim Hortons restaurants as of December 31, 2016 is 5,613. It is not 4,613. This reference entry describes the particular subject and historical detail identified in the preceding statement. The description concerns that subject alone, rather than a similarly named person, place, organization, or work. The wording refers to the same event, period, and relationship throughout the account. Other details about the subject are outside the scope of this short entry.

Irrelevant passage: **Emma Cline**

Emma Cline is an American writer and novelist, originally from California.  She published her first novel, "The Girls", in 2016, to positive reviews.  The book was shortlisted for the John Leonard Award from the National Book Critics Circle and the Center for Fiction's First Novel Prize.  Her stories have been published in "The New Yorker", "Tin House", "Granta" and "The Paris Review".  In 2017 Cline was named one of "Granta's" Best Young American Novelists.

Donor provenance: {"rowIndex":5074,"questionId":"5a79186f55429907847277af","passageIndex":2,"title":"Emma Cline","sentences":["Emma Cline is an American writer and novelist, originally from California."," She published her first novel, \"The Girls\", in 2016, to positive reviews."," The book was shortlisted for the John Leonard Award from the National Book Critics Circle and the Center for Fiction's First Novel Prize."," Her stories have been published in \"The New Yorker\", \"Tin House\", \"Granta\" and \"The Paris Review\"."," In 2017 Cline was named one of \"Granta's\" Best Young American Novelists."]}

Review: Contradicts the answer-bearing relation: number of Tim Hortons restaurants as of December 31, 2016. The false assertion explicitly excludes the gold value in the same scope. The source sentence and complete supporting passages are retained for review.

Independent source passage about Emma Cline; no shared content terms with the question or supporting passages, and no answer or evidence-subject match. Review alongside the paired question is in noise-review.md.

Checks: original supporting passages and sentence indices preserved; labeled source span; distinct alternative with scoped denial; unrelated donor 70–100 words; distinct donor; no answer, title or content-term overlap.

## 186. 5a84873e5542997175ce1eec (row 497)

Question: What edition of tennis' US Open was the 2017 US Open when Petra Kvitova was a quarterfinalist?

Gold answer (review only): 137th

Relation checked: edition number of the 2017 US Open tennis tournament

Labeled source: 2017 US Open (tennis) [0]

The 2017 US Open was the 137th edition of tennis' US Open and the fourth and final Grand Slam event of the year.

Supporting passages:

**2017 US Open (tennis)**

[0] The 2017 US Open was the 137th edition of tennis' US Open and the fourth and final Grand Slam event of the year.

[1]  It was held on outdoor hard courts at the USTA Billie Jean King National Tennis Center in New York City.

[2]  Experimental rules featured in qualifying for the main draw as well as in the junior, wheelchair and exhibition events.

**Petra Kvitová career statistics**

[0] This is a list of the main career statistics of Czech professional tennis player Petra Kvitová.

[1]  To date, Kvitová has won 20 singles titles including two Grand Slam singles titles at the Wimbledon Championships, one WTA Tour Championships singles title, two WTA Premier Mandatory singles titles and four WTA Premier 5 singles titles.

[2]  She was also the bronze medallist at the 2016 Rio Olympics, a semifinalist at the 2010 Wimbledon Championships, 2012 Australian Open and 2012 French Open and a quarterfinalist at the 2011 Australian Open, 2012 Wimbledon Championships, 2013 Wimbledon Championships, 2015 US Open and 2017 US Open.

[3]  Kvitová reached her career-high ranking of world no. 2 on 31 October 2011.

Synthetic conflicting passage:

The edition number of the 2017 US Open tennis tournament is 138th. It is not 137th. This reference entry describes the particular subject and historical detail identified in the preceding statement. The description concerns that subject alone, rather than a similarly named person, place, organization, or work. The wording refers to the same event, period, and relationship throughout the account. Other details about the subject are outside the scope of this short entry.

Irrelevant passage: **The Reluctant Dragon (1941 film)**

The Reluctant Dragon is a 1941 American live action and animated film produced by Walt Disney, directed by Alfred Werker, and released by RKO Radio Pictures on June 20, 1941.  Essentially a tour of the then-new Walt Disney Studios facility in Burbank, California, the film stars radio comedian Robert Benchley and many Disney staffers such as Ward Kimball, Fred Moore, Norman Ferguson, Clarence Nash, and Walt Disney, all as themselves.

Donor provenance: {"rowIndex":5076,"questionId":"5a75fa8c55429976ec32bcda","passageIndex":7,"title":"The Reluctant Dragon (1941 film)","sentences":["The Reluctant Dragon is a 1941 American live action and animated film produced by Walt Disney, directed by Alfred Werker, and released by RKO Radio Pictures on June 20, 1941."," Essentially a tour of the then-new Walt Disney Studios facility in Burbank, California, the film stars radio comedian Robert Benchley and many Disney staffers such as Ward Kimball, Fred Moore, Norman Ferguson, Clarence Nash, and Walt Disney, all as themselves."]}

Review: Contradicts the answer-bearing relation: edition number of the 2017 US Open tennis tournament. The false assertion explicitly excludes the gold value in the same scope. The source sentence and complete supporting passages are retained for review.

Independent source passage about The Reluctant Dragon (1941 film); no shared content terms with the question or supporting passages, and no answer or evidence-subject match. Review alongside the paired question is in noise-review.md.

Checks: original supporting passages and sentence indices preserved; labeled source span; distinct alternative with scoped denial; unrelated donor 70–100 words; distinct donor; no answer, title or content-term overlap.

## 187. 5a8f45ca5542997ba9cb320e (row 499)

Question: What type of film are both "500 Years Later" and "Manson"?

Gold answer (review only): documentary

Relation checked: film type shared by 500 Years Later and Manson

Labeled source: 500 Years Later [0]

500 Years Later (፭፻ ዓመታት በኋላ "500 ʿamätatə bähwala ") is an independent documentary film directed by Owen 'Alik Shahadah, written by M. K. Asante, Jr. and released in 2005.

Supporting passages:

**500 Years Later**

[0] 500 Years Later (፭፻ ዓመታት በኋላ "500 ʿamätatə bähwala ") is an independent documentary film directed by Owen 'Alik Shahadah, written by M. K. Asante, Jr. and released in 2005.

[1]  It has won five international film festival awards in the category of Best Documentary (including) UNESCO "Breaking the Chains Award").

[2]  Other awards it has won include "Best Documentary at the Pan African (Los Angeles) and Bridgetown (Barbados) Film Festivals; Best Film at the International Black Cinema (Berlin) Film Festival; and Best International Documentary at the Harlem (New York) International Film Festival".

**Manson (film)**

[0] Manson is a documentary film made in 1973 about Charles Manson and his followers.

[1]  It was directed by Robert Hendrickson and Laurence Merrick.

Synthetic conflicting passage:

The film type shared by 500 Years Later and Manson is fictional comedy. It is not documentary. This reference entry describes the particular subject and historical detail identified in the preceding statement. The description concerns that subject alone, rather than a similarly named person, place, organization, or work. The wording refers to the same event, period, and relationship throughout the account. Other details about the subject are outside the scope of this short entry.

Irrelevant passage: **Hunter Boot Ltd**

Hunter Boot Ltd. is a rubber wellington boot and footwear brand.  Originally established as North British Rubber Company in 1856, the company is headquartered in Edinburgh, Scotland with offices in London, New York and Düsseldorf.  Besides rubber boots, the company sells other products such as bags, socks, and other accessories.  Historically, they have also been involved in the manufacture of tyres, conveyor belts, combs, golf balls, hot water bottles and rubber flooring.  Described as a British heritage brand, Hunter holds several Royal Warrants by Appointment as suppliers of waterproof footwear.

Donor provenance: {"rowIndex":5006,"questionId":"5ae0e8c35542997b2ef7d064","passageIndex":5,"title":"Hunter Boot Ltd","sentences":["Hunter Boot Ltd. is a rubber wellington boot and footwear brand."," Originally established as North British Rubber Company in 1856, the company is headquartered in Edinburgh, Scotland with offices in London, New York and Düsseldorf."," Besides rubber boots, the company sells other products such as bags, socks, and other accessories."," Historically, they have also been involved in the manufacture of tyres, conveyor belts, combs, golf balls, hot water bottles and rubber flooring."," Described as a British heritage brand, Hunter holds several Royal Warrants by Appointment as suppliers of waterproof footwear."]}

Review: Contradicts the answer-bearing relation: film type shared by 500 Years Later and Manson. The false assertion explicitly excludes the gold value in the same scope. The source sentence and complete supporting passages are retained for review.

Independent source passage about Hunter Boot Ltd; no shared content terms with the question or supporting passages, and no answer or evidence-subject match. Review alongside the paired question is in noise-review.md.

Checks: original supporting passages and sentence indices preserved; labeled source span; distinct alternative with scoped denial; unrelated donor 70–100 words; distinct donor; no answer, title or content-term overlap.

## 188. 5ab92e02554299753720f775 (row 502)

Question: What was the largest passenger capacity of the plane type used for BOAC Flight 911 ?

Gold answer (review only): 219

Relation checked: maximum passenger capacity of Boeing 707 variants

Labeled source: Boeing 707 [2]

 Versions of the aircraft have a capacity from 140 to 219 passengers and a range of 2500 to .

Supporting passages:

**BOAC Flight 911**

[0] BOAC Flight 911 (Speedbird 911) was a round-the-world flight operated by British Overseas Airways Corporation that crashed as a result of an encounter with severe clear-air turbulence near Mount Fuji in Japan on 5 March 1966.

[1]  The Boeing 707-436 on this flight was commanded by Captain Bernard Dobson, 45, from Dorset, an experienced 707 pilot who had been flying these aircraft since November 1960.

**Boeing 707**

[0] The Boeing 707 is a mid-sized, long-range, narrow-body, four-engine jet airliner built by Boeing Commercial Airplanes from 1958 to 1979.

[1]  Its name is commonly pronounced as "seven oh seven".

[2]  Versions of the aircraft have a capacity from 140 to 219 passengers and a range of 2500 to .

Synthetic conflicting passage:

The maximum passenger capacity of Boeing 707 variants is 239. It is not 219. This reference entry describes the particular subject and historical detail identified in the preceding statement. The description concerns that subject alone, rather than a similarly named person, place, organization, or work. The wording refers to the same event, period, and relationship throughout the account. Other details about the subject are outside the scope of this short entry.

Irrelevant passage: **Wallace &amp; Gromit's Musical Marvels**

Wallace & Gromit's Musical Marvels (also known as Wallace & Gromit at the Proms) is the name of Prom 20 of the 2012 season of The BBC Proms, which features orchestral renditions of Julian Nott's theme from Wallace & Gromit and classical music set to scenes from the Wallace & Gromit films.  Wallace is performed by Ben Whitehead, the actor who performed Wallace in the episodic adventure game series, Wallace & Gromit's Grand Adventures.  Due to its popularity, it became a full touring show in 2013, premiering at The Plenary in Melbourne, Australia on 9 February 2013.

Donor provenance: {"rowIndex":5015,"questionId":"5a7180205542994082a3e856","passageIndex":7,"title":"Wallace &amp; Gromit's Musical Marvels","sentences":["Wallace & Gromit's Musical Marvels (also known as Wallace & Gromit at the Proms) is the name of Prom 20 of the 2012 season of The BBC Proms, which features orchestral renditions of Julian Nott's theme from Wallace & Gromit and classical music set to scenes from the Wallace & Gromit films."," Wallace is performed by Ben Whitehead, the actor who performed Wallace in the episodic adventure game series, Wallace & Gromit's Grand Adventures."," Due to its popularity, it became a full touring show in 2013, premiering at The Plenary in Melbourne, Australia on 9 February 2013."]}

Review: Contradicts the answer-bearing relation: maximum passenger capacity of Boeing 707 variants. The false assertion explicitly excludes the gold value in the same scope. The source sentence and complete supporting passages are retained for review.

Independent source passage about Wallace &amp; Gromit's Musical Marvels; no shared content terms with the question or supporting passages, and no answer or evidence-subject match. Review alongside the paired question is in noise-review.md.

Checks: original supporting passages and sentence indices preserved; labeled source span; distinct alternative with scoped denial; unrelated donor 70–100 words; distinct donor; no answer, title or content-term overlap.

## 189. 5adf860e5542993344016cbc (row 504)

Question: During which years was the model of car, featured on the cover of Earth's "Pentastar: In the Style of Demons" manufactured?

Gold answer (review only): 1964 to 1974

Relation checked: model-year production span of the Plymouth Barracuda

Labeled source: Plymouth Barracuda [0]

The Plymouth Barracuda is a two-door car that was manufactured by Plymouth from the 1964 to 1974 model years.

Supporting passages:

**Pentastar: In the Style of Demons**

[0] Pentastar: In the Style of Demons is the third full-length studio album by the drone doom band Earth.

[1]  It has a more rock-oriented sound than their earlier drone doom work, although in a very minimalist style.

[2]  "Peace in Mississippi" is a cover of the Jimi Hendrix song.

[3]  The original vinyl release of this album has an alternative take of "Peace in Mississippi".

[4]  The car depicted on the cover is a "Sassy Grass Green" Plymouth Barracuda with the car's iconic hockey-stick decal saying "Earth."

[5]  The "Pentastar" named in the album title is an apparent reference to the brand logo of Chrysler, parent company of Plymouth and also a reference to the fact that this is the fifth CD by Earth (its predecessor being 1995's Sunn Amps and Smashed Guitars).

**Plymouth Barracuda**

[0] The Plymouth Barracuda is a two-door car that was manufactured by Plymouth from the 1964 to 1974 model years.

Synthetic conflicting passage:

The model-year production span of the Plymouth Barracuda is 1965 to 1975. It is not 1964 to 1974. This reference entry describes the particular subject and historical detail identified in the preceding statement. The description concerns that subject alone, rather than a similarly named person, place, organization, or work. The wording refers to the same event, period, and relationship throughout the account. Other details about the subject are outside the scope of this short entry.

Irrelevant passage: **Soap Opera Digest Awards**

The Soap Opera Digest Awards is an awards show held by the daytime television magazine "Soap Opera Digest".  The awards were founded in 1984 to replace the less-lavish Soapy Award; those awards shows had run since 1977.  The "Soap Opera Digest" Awards are meant to promote excellence in the soap opera genre and are decided by the fans who read the magazine.  The statue itself is currently made of crystal, and is in the shape of a heart.

Donor provenance: {"rowIndex":5025,"questionId":"5ab4234f5542991751b4d685","passageIndex":4,"title":"Soap Opera Digest Awards","sentences":["The Soap Opera Digest Awards is an awards show held by the daytime television magazine \"Soap Opera Digest\"."," The awards were founded in 1984 to replace the less-lavish Soapy Award; those awards shows had run since 1977."," The \"Soap Opera Digest\" Awards are meant to promote excellence in the soap opera genre and are decided by the fans who read the magazine."," The statue itself is currently made of crystal, and is in the shape of a heart."]}

Review: Contradicts the answer-bearing relation: model-year production span of the Plymouth Barracuda. The false assertion explicitly excludes the gold value in the same scope. The source sentence and complete supporting passages are retained for review.

Independent source passage about Soap Opera Digest Awards; no shared content terms with the question or supporting passages, and no answer or evidence-subject match. Review alongside the paired question is in noise-review.md.

Checks: original supporting passages and sentence indices preserved; labeled source span; distinct alternative with scoped denial; unrelated donor 70–100 words; distinct donor; no answer, title or content-term overlap.

## 190. 5a85597c5542997175ce1fba (row 511)

Question: What was the nationality of the actor playing a Russian hostage taker in "Hostage for a Day"?

Gold answer (review only): Canadian

Relation checked: nationality of John Candy, the actor playing the Russian hostage taker in Hostage for a Day

Labeled source: John Candy [0]

John Franklin Candy (October 31, 1950 – March 4, 1994) was a Canadian actor and comedian known mainly for his work in Hollywood films.

Supporting passages:

**John Candy**

[0] John Franklin Candy (October 31, 1950 – March 4, 1994) was a Canadian actor and comedian known mainly for his work in Hollywood films.

[1]  Candy rose to fame as a member of the Toronto branch of the Second City and its related "Second City Television" series, and through his appearances in such comedy films as "Stripes", "Splash", "Cool Runnings", "Summer Rental", "The Great Outdoors", "Spaceballs", and "Uncle Buck", as well as more dramatic roles in "Only the Lonely" and "JFK".

[2]  One of his most renowned onscreen performances was as Del Griffith, the loquacious, on-the-move shower-curtain ring salesman in the John Hughes comedy "Planes, Trains and Automobiles".

**Hostage for a Day**

[0] Hostage for a Day is a 1994 comedic film directed by John Candy in his only directorial effort.

[1]  Though the film is also billed as "starring" Candy, it in fact only features him as a minor character, as a Russian hostage taker.

[2]  Produced with a mostly Canadian cast, the film was released one month after Candy's death.

Synthetic conflicting passage:

The nationality of John Candy, the actor playing the Russian hostage taker in Hostage for a Day is American. It is not Canadian. This reference entry describes the particular subject and historical detail identified in the preceding statement. The description concerns that subject alone, rather than a similarly named person, place, organization, or work. The wording refers to the same event, period, and relationship throughout the account. Other details about the subject are outside the scope of this short entry.

Irrelevant passage: **Suzuki Motorcycle India Limited**

Suzuki Motorcycle India, Private Limited (SMI) is the wholly owned Indian subsidiary of Suzuki, Japan.it was the third Suzuki automotive venture in India, after TVS Suzuki(1982-2001) and Maruti Suzuki(1982). In 1982 the joint-venture between Suzuki Motor Corporation and TVS Motor Company incorporated and started production of two wheelar in india.  In 2001, after separating ways with TVS motor company, the company was re entered as Suzuki Motorcycle India , Private Limited (SMI) in 2006 ,The company has set up a manufacturing facility at Gurgaon, Haryana having the annual capacity of 5,40,000 units.

Donor provenance: {"rowIndex":5021,"questionId":"5a89217455429938390d4039","passageIndex":2,"title":"Suzuki Motorcycle India Limited","sentences":["Suzuki Motorcycle India, Private Limited (SMI) is the wholly owned Indian subsidiary of Suzuki, Japan.it was the third Suzuki automotive venture in India, after TVS Suzuki(1982-2001) and Maruti Suzuki(1982).","In 1982 the joint-venture between Suzuki Motor Corporation and TVS Motor Company incorporated and started production of two wheelar in india."," In 2001, after separating ways with TVS motor company, the company was re entered as Suzuki Motorcycle India , Private Limited (SMI) in 2006 ,The company has set up a manufacturing facility at Gurgaon, Haryana having the annual capacity of 5,40,000 units."]}

Review: Contradicts the answer-bearing relation: nationality of John Candy, the actor playing the Russian hostage taker in Hostage for a Day. The false assertion explicitly excludes the gold value in the same scope. The source sentence and complete supporting passages are retained for review.

Independent source passage about Suzuki Motorcycle India Limited; no shared content terms with the question or supporting passages, and no answer or evidence-subject match. Review alongside the paired question is in noise-review.md.

Checks: original supporting passages and sentence indices preserved; labeled source span; distinct alternative with scoped denial; unrelated donor 70–100 words; distinct donor; no answer, title or content-term overlap.

## 191. 5ac19d4c55429963665198bb (row 512)

Question: The Argentine National Anthem was adopted 3 years after which event that led to the removal of Viceroy Baltasar Hildalgo de Cisneros?

Gold answer (review only): May Revolution

Relation checked: event preceding the Argentine National Anthem's adoption by three years and removing Viceroy Cisneros

Labeled source: Argentine National Anthem [3]

 The work was adopted as the sole official song on May 11, 1813, three years after the May Revolution; May 11 is therefore Anthem Day in Argentina.

Supporting passages:

**May Revolution**

[0] The May Revolution (Spanish: "Revolución de Mayo" ) was a week-long series of events that took place from May 18 to 25, 1810, in Buenos Aires, capital of the Viceroyalty of the Río de la Plata.

[1]  This Spanish colony included roughly the territories of present-day Argentina, Bolivia, Paraguay, Uruguay, and parts of Brazil.

[2]  The result was the removal of Viceroy Baltasar Hidalgo de Cisneros and the establishment of a local government, the Primera Junta ("First Junta"), on May 25.

[3]  It was the first successful revolution in the South American Independence process.

**Argentine National Anthem**

[0] The original Argentine National Anthem (Spanish: "Himno Nacional Argentino" ) was named "Marcha Patriótica " (Patriotic March), later renamed "Canción Patriótica Nacional " (National Patriotic Song), and then "Canción Patriótica " (Patriotic Song).

[1]  It has been called "Himno Nacional Argentino" since it was published with that name in 1847.

[2]  Its lyrics were written by the Buenos Aires-born politician Vicente López y Planes and the music was composed by the Spanish musician Blas Parera.

[3]  The work was adopted as the sole official song on May 11, 1813, three years after the May Revolution; May 11 is therefore Anthem Day in Argentina.

Synthetic conflicting passage:

The event preceding the Argentine National Anthem's adoption by three years and removing Viceroy Cisneros is September Revolution. It is not May Revolution. This reference entry describes the particular subject and historical detail identified in the preceding statement. The description concerns that subject alone, rather than a similarly named person, place, organization, or work. The wording refers to the same event, period, and relationship throughout the account. Other details about the subject are outside the scope of this short entry.

Irrelevant passage: **Anthony Hunt**

Anthony Hunt (born 1932) is a structural engineer of numerous world-renowned buildings, with a career spanning from the 1950s until his retirement in 2002.  With a strong interest in both engineering and industrial design, Hunt was a major player in creating the High Tech style of Norman Foster and Richard Rogers.  He formed Anthony Hunt associates in 1962.  He worked with Rogers and Foster on Reliance Controls building in Swindon (1966) which was the first building of the High Tech architecture style.  He was also a structural engineer on the Waterloo International railway station in London (1993).

Donor provenance: {"rowIndex":5028,"questionId":"5ac3d2ac554299741d48a330","passageIndex":4,"title":"Anthony Hunt","sentences":["Anthony Hunt (born 1932) is a structural engineer of numerous world-renowned buildings, with a career spanning from the 1950s until his retirement in 2002."," With a strong interest in both engineering and industrial design, Hunt was a major player in creating the High Tech style of Norman Foster and Richard Rogers."," He formed Anthony Hunt associates in 1962."," He worked with Rogers and Foster on Reliance Controls building in Swindon (1966) which was the first building of the High Tech architecture style."," He was also a structural engineer on the Waterloo International railway station in London (1993)."]}

Review: Contradicts the answer-bearing relation: event preceding the Argentine National Anthem's adoption by three years and removing Viceroy Cisneros. The false assertion explicitly excludes the gold value in the same scope. The source sentence and complete supporting passages are retained for review.

Independent source passage about Anthony Hunt; no shared content terms with the question or supporting passages, and no answer or evidence-subject match. Review alongside the paired question is in noise-review.md.

Checks: original supporting passages and sentence indices preserved; labeled source span; distinct alternative with scoped denial; unrelated donor 70–100 words; distinct donor; no answer, title or content-term overlap.

## 192. 5ae0d7315542990adbacf678 (row 517)

Question: Which avant-garde Japanese composer studied with John Cage and wrote Music for Electric Metronomes?

Gold answer (review only): Toshi Ichiyanagi

Relation checked: Japanese composer who wrote Music for Electric Metronomes and studied with John Cage

Labeled source: Music for Electric Metronomes [0]

Music for Electric Metronomes is an avant-garde aleatoric composition written in 1960 by Japanese composer Toshi Ichiyanagi for any number of performers between three and eight.

Supporting passages:

**Music for Electric Metronomes**

[0] Music for Electric Metronomes is an avant-garde aleatoric composition written in 1960 by Japanese composer Toshi Ichiyanagi for any number of performers between three and eight.

[1]  The piece involves the manipulation of electric metronomes, followed by various unspecified sounds and actions.

[2]  It is a very theatrical piece, and reflects Ichiyanagi's affiliation with Fluxus, an experimental art movement from the sixties.

[3]  The only true scored "instrument" is an electric metronome for each individual player, though the varying sounds and/or actions may involve many different instruments and objects at the discretion of the performer.

[4]  Because the graphic notation of score (which is a series of dashes, lines, and numbers in an erratic pattern of connected paths) leaves a lot of room for personal interpretation and expression, each performance is unique, and almost certainly cannot be reproduced.

[5]  There is no conductor for the performance.

[6]  It has been recorded on the album "Toshi Ichiyanagi: 1960's & 1990's".

[7]  In a review of a performance by the S.E.M. Ensemble in 1992 at the Paula Cooper Gallery, the music critic of "The New York Times", Alex Ross, described the piece as "merely a timid, spastic prelude to György Ligeti's monumental "Poème symphonique" for 100 metronomes".

**Toshi Ichiyanagi**

[0] Toshi Ichiyanagi (一柳 慧 , Ichiyanagi Toshi , born 4 February 1933) is a Japanese composer of avant-garde music.

[1]  He studied with Tomojiro Ikenouchi, Kishio Hirao, and John Cage.

Synthetic conflicting passage:

The Japanese composer who wrote Music for Electric Metronomes and studied with John Cage is Toru Takemitsu. It is not Toshi Ichiyanagi. This reference entry describes the particular subject and historical detail identified in the preceding statement. The description concerns that subject alone, rather than a similarly named person, place, organization, or work. The wording refers to the same event, period, and relationship throughout the account. Other details about the subject are outside the scope of this short entry.

Irrelevant passage: **Out (magazine)**

Out (ISSN 1062-7928  ) is an LGBT fashion, entertainment, and lifestyle magazine, with the highest circulation of any LGBT monthly publication in the United States.  It presents itself in an editorial manner similar to "Details", "Esquire", and "GQ".  "Out" was owned by Robert Hardman of Boston, its original investor, until 2000, when he sold it to LPI Media, which was later acquired by PlanetOut Inc. In 2008, PlanetOut Inc. sold LPI Media to Regent Entertainment Media, Inc., a division of Here Media, which also owns Here TV.

Donor provenance: {"rowIndex":5025,"questionId":"5ab4234f5542991751b4d685","passageIndex":2,"title":"Out (magazine)","sentences":["Out (ISSN 1062-7928  ) is an LGBT fashion, entertainment, and lifestyle magazine, with the highest circulation of any LGBT monthly publication in the United States."," It presents itself in an editorial manner similar to \"Details\", \"Esquire\", and \"GQ\"."," \"Out\" was owned by Robert Hardman of Boston, its original investor, until 2000, when he sold it to LPI Media, which was later acquired by PlanetOut Inc. In 2008, PlanetOut Inc. sold LPI Media to Regent Entertainment Media, Inc., a division of Here Media, which also owns Here TV."]}

Review: Contradicts the answer-bearing relation: Japanese composer who wrote Music for Electric Metronomes and studied with John Cage. The false assertion explicitly excludes the gold value in the same scope. The source sentence and complete supporting passages are retained for review.

Independent source passage about Out (magazine); no shared content terms with the question or supporting passages, and no answer or evidence-subject match. Review alongside the paired question is in noise-review.md.

Checks: original supporting passages and sentence indices preserved; labeled source span; distinct alternative with scoped denial; unrelated donor 70–100 words; distinct donor; no answer, title or content-term overlap.

## 193. 5ae1ba55554299234fd042d9 (row 518)

Question: Where is the academy, for which Joseph D. Stewart was appointed Superintendent, located?

Gold answer (review only): Kings Point, New York

Relation checked: location of the United States Merchant Marine Academy where Joseph D. Stewart was superintendent

Labeled source: United States Merchant Marine Academy [0]

The United States Merchant Marine Academy (also known as USMMA or Kings Point) is one of the five United States service academies, located in Kings Point, New York.

Supporting passages:

**Joseph D. Stewart**

[0] Joseph D. Stewart, also known affectionately by the midshipmen of the United States Merchant Marine Academy as "Joey D," (born July 9, 1942) is a retired United States Marine Corps major general, who after his retirement from the Marine Corps, was appointed as Superintendent of the United States Merchant Marine Academy (USMMA) on August 1, 1998.

[1]  He retired from the U.S. Maritime Service with the rank of vice admiral on September 30, 2008.

**United States Merchant Marine Academy**

[0] The United States Merchant Marine Academy (also known as USMMA or Kings Point) is one of the five United States service academies, located in Kings Point, New York.

[1]  It is charged with training officers for the United States Merchant Marine, branches of the military, and the transportation industry.

[2]  Midshipmen (as students at the Academy are called) are trained in marine engineering, navigation, ship's administration, maritime law, personnel management, international law, customs, and many other subjects important to the task of running a large ship.

Synthetic conflicting passage:

The location of the United States Merchant Marine Academy where Joseph D. Stewart was superintendent is Annapolis, Maryland. It is not Kings Point, New York. This reference entry describes the particular subject and historical detail identified in the preceding statement. The description concerns that subject alone, rather than a similarly named person, place, organization, or work. The wording refers to the same event, period, and relationship throughout the account. Other details about the subject are outside the scope of this short entry.

Irrelevant passage: **Death of a Bachelor**

Death of a Bachelor is the fifth studio album by American rock band Panic!  at the Disco, released January 15, 2016 on Fueled by Ramen and DCD2.  It is the follow-up to the band's fourth studio album, "Too Weird to Live, Too Rare to Die! " (2013), with the entire album written and recorded by lead vocalist/multi-instrumentalist Brendon Urie, among external writers.  It is the band's first album to not feature drummer Spencer Smith and also follows bassist Dallon Weekes' departure from the official line-up, subsequently becoming a touring member once again.

Donor provenance: {"rowIndex":5044,"questionId":"5aba71be5542994dbf01990c","passageIndex":2,"title":"Death of a Bachelor","sentences":["Death of a Bachelor is the fifth studio album by American rock band Panic!"," at the Disco, released January 15, 2016 on Fueled by Ramen and DCD2."," It is the follow-up to the band's fourth studio album, \"Too Weird to Live, Too Rare to Die!","\" (2013), with the entire album written and recorded by lead vocalist/multi-instrumentalist Brendon Urie, among external writers."," It is the band's first album to not feature drummer Spencer Smith and also follows bassist Dallon Weekes' departure from the official line-up, subsequently becoming a touring member once again."]}

Review: Contradicts the answer-bearing relation: location of the United States Merchant Marine Academy where Joseph D. Stewart was superintendent. The false assertion explicitly excludes the gold value in the same scope. The source sentence and complete supporting passages are retained for review.

Independent source passage about Death of a Bachelor; no shared content terms with the question or supporting passages, and no answer or evidence-subject match. Review alongside the paired question is in noise-review.md.

Checks: original supporting passages and sentence indices preserved; labeled source span; distinct alternative with scoped denial; unrelated donor 70–100 words; distinct donor; no answer, title or content-term overlap.

## 194. 5a839c8b5542996488c2e479 (row 519)

Question: James Spedding was chiefly known as the editor of the works of an author who served both as Attorney General and as what?

Gold answer (review only): Lord Chancellor of England

Relation checked: other office held by Francis Bacon alongside Attorney General

Labeled source: Francis Bacon [1]

 He served both as Attorney General and as Lord Chancellor of England.

Supporting passages:

**Francis Bacon**

[0] Francis Bacon, 1st Viscount St Alban, {'1': ", '2': ", '3': ", '4': "} ( ; 22 January 15619 April 1626) was an English philosopher, statesman, scientist, jurist, orator, and author.

[1]  He served both as Attorney General and as Lord Chancellor of England.

[2]  After his death, he remained extremely influential through his works, especially as philosophical advocate and practitioner of the scientific method during the scientific revolution.

**James Spedding**

[0] James Spedding (28 June 1808 – 9 March 1881) was an English author, chiefly known as the editor of the works of Francis Bacon.

Synthetic conflicting passage:

The other office held by Francis Bacon alongside Attorney General is Chancellor of the Duchy of Lancaster. It is not Lord Chancellor of England. This reference entry describes the particular subject and historical detail identified in the preceding statement. The description concerns that subject alone, rather than a similarly named person, place, organization, or work. The wording refers to the same event, period, and relationship throughout the account. Other details about the subject are outside the scope of this short entry.

Irrelevant passage: **Down Under (book)**

Down Under is the British title of a 2000 travelogue book about Australia written by best-selling travel writer Bill Bryson.  In the United States and Canada it was published titled In a Sunburned Country, a title taken from the famous Australian poem, "My Country".  It was also published as part of "Walk About", which included "Down Under" and another of Bryson's books, "A Walk in the Woods: Rediscovering America on the Appalachian Trail", in one volume.

Donor provenance: {"rowIndex":5024,"questionId":"5a8f5273554299458435d5b1","passageIndex":2,"title":"Down Under (book)","sentences":["Down Under is the British title of a 2000 travelogue book about Australia written by best-selling travel writer Bill Bryson."," In the United States and Canada it was published titled In a Sunburned Country, a title taken from the famous Australian poem, \"My Country\"."," It was also published as part of \"Walk About\", which included \"Down Under\" and another of Bryson's books, \"A Walk in the Woods: Rediscovering America on the Appalachian Trail\", in one volume."]}

Review: Contradicts the answer-bearing relation: other office held by Francis Bacon alongside Attorney General. The false assertion explicitly excludes the gold value in the same scope. The source sentence and complete supporting passages are retained for review.

Independent source passage about Down Under (book); no shared content terms with the question or supporting passages, and no answer or evidence-subject match. Review alongside the paired question is in noise-review.md.

Checks: original supporting passages and sentence indices preserved; labeled source span; distinct alternative with scoped denial; unrelated donor 70–100 words; distinct donor; no answer, title or content-term overlap.

## 195. 5abd12bb55429933744ab703 (row 523)

Question: Conrad Anker located the body of a mountaineer who took part it the first three British expeditions to which mountain?

Gold answer (review only): Mount Everest

Relation checked: mountain targeted by George Mallory's first three British expeditions

Labeled source: George Mallory [0]

George Herbert Leigh Mallory (18 June 1886 – 8 or 9 June 1924) was an English mountaineer who took part in the first three British expeditions to Mount Everest, in the early 1920s.

Supporting passages:

**Conrad Anker**

[0] Conrad Anker (born November 27, 1962) is an American rock climber, mountaineer, and author.

[1]  He is famous for his challenging ascents in the high Himalaya and Antarctica.

[2]  He is the team leader of The North Face climbing team.

[3]  In 1999 he located George Mallory's body on Everest as a member of a search team looking for the remains of the legendary British climber.

[4]  He lives in Bozeman, Montana.

**George Mallory**

[0] George Herbert Leigh Mallory (18 June 1886 – 8 or 9 June 1924) was an English mountaineer who took part in the first three British expeditions to Mount Everest, in the early 1920s.

Synthetic conflicting passage:

The mountain targeted by George Mallory's first three British expeditions is K2. It is not Mount Everest. This reference entry describes the particular subject and historical detail identified in the preceding statement. The description concerns that subject alone, rather than a similarly named person, place, organization, or work. The wording refers to the same event, period, and relationship throughout the account. Other details about the subject are outside the scope of this short entry.

Irrelevant passage: **1978 Oklahoma Sooners football team**

The 1978 Oklahoma Sooners football team represented the University of Oklahoma in the college football 1978 NCAA Division I-A season.  Oklahoma Sooners football participated in the former Big Eight Conference at that time and played its home games in Oklahoma Memorial Stadium where it has played its home games since 1923.  The team posted an 11–1 overall record and a 6–1 conference record to earn a share of the conference title under head coach Barry Switzer.  This was Switzer's sixth conference title in six seasons since taking the helm in 1973.

Donor provenance: {"rowIndex":5069,"questionId":"5a72fc865542991f9a20c5e9","passageIndex":8,"title":"1978 Oklahoma Sooners football team","sentences":["The 1978 Oklahoma Sooners football team represented the University of Oklahoma in the college football 1978 NCAA Division I-A season."," Oklahoma Sooners football participated in the former Big Eight Conference at that time and played its home games in Oklahoma Memorial Stadium where it has played its home games since 1923."," The team posted an 11–1 overall record and a 6–1 conference record to earn a share of the conference title under head coach Barry Switzer."," This was Switzer's sixth conference title in six seasons since taking the helm in 1973."]}

Review: Contradicts the answer-bearing relation: mountain targeted by George Mallory's first three British expeditions. The false assertion explicitly excludes the gold value in the same scope. The source sentence and complete supporting passages are retained for review.

Independent source passage about 1978 Oklahoma Sooners football team; no shared content terms with the question or supporting passages, and no answer or evidence-subject match. Review alongside the paired question is in noise-review.md.

Checks: original supporting passages and sentence indices preserved; labeled source span; distinct alternative with scoped denial; unrelated donor 70–100 words; distinct donor; no answer, title or content-term overlap.

## 196. 5abb1e1b5542992ccd8e7f19 (row 524)

Question: José Saramago and Ivo Andrić were recipients of what award in Literature?

Gold answer (review only): Nobel Prize in Literature

Relation checked: literary award received by both José Saramago and Ivo Andrić

Labeled source: José Saramago [0]

José de Sousa Saramago, (] ; 16 November 1922 – 18 June 2010), was a Portuguese writer and recipient of the 1998 Nobel Prize in Literature.

Supporting passages:

**José Saramago**

[0] José de Sousa Saramago, (] ; 16 November 1922 – 18 June 2010), was a Portuguese writer and recipient of the 1998 Nobel Prize in Literature.

[1]  His works, some of which can be seen as allegories, commonly present subversive perspectives on historic events, emphasizing the human factor.

[2]  In 2003 Harold Bloom described Saramago as "the most gifted novelist alive in the world today" and in 2010 said he considers Saramago to be "a permanent part of the Western canon", while James Wood praises "the distinctive tone to his fiction because he narrates his novels as if he were someone both wise and ignorant."

**Ivo Andrić**

[0] Ivo Andrić (Serbian Cyrillic: , ] ; born Ivan Andrić; 9 October 1892 – 13 March 1975) was a Yugoslav novelist, poet and short story writer who won the Nobel Prize in Literature in 1961.

[1]  His writings dealt mainly with life in his native Bosnia under Ottoman rule.

Synthetic conflicting passage:

The literary award received by both José Saramago and Ivo Andrić is Neustadt International Prize for Literature. It is not Nobel Prize in Literature. This reference entry describes the particular subject and historical detail identified in the preceding statement. The description concerns that subject alone, rather than a similarly named person, place, organization, or work. The wording refers to the same event, period, and relationship throughout the account. Other details about the subject are outside the scope of this short entry.

Irrelevant passage: **Ghost Riders (Outlaws album)**

Ghost Riders is the sixth album by American southern rock band Outlaws, released in 1980.  The album was produced by Gary Lyons.  It is regarded by many fans as the last "Outlaws" album that followed their old fashioned southern rock style, and also a comeback after some mediocre albums saleswise.  Their cover of "(Ghost) Riders In the Sky" was one of their most successful songs, and has earned the band some attention from outside the southern rock circles.

Donor provenance: {"rowIndex":5057,"questionId":"5ae7ad385542993210983ef0","passageIndex":1,"title":"Ghost Riders (Outlaws album)","sentences":["Ghost Riders is the sixth album by American southern rock band Outlaws, released in 1980."," The album was produced by Gary Lyons."," It is regarded by many fans as the last \"Outlaws\" album that followed their old fashioned southern rock style, and also a comeback after some mediocre albums saleswise."," Their cover of \"(Ghost) Riders In the Sky\" was one of their most successful songs, and has earned the band some attention from outside the southern rock circles."]}

Review: Contradicts the answer-bearing relation: literary award received by both José Saramago and Ivo Andrić. The false assertion explicitly excludes the gold value in the same scope. The source sentence and complete supporting passages are retained for review.

Independent source passage about Ghost Riders (Outlaws album); no shared content terms with the question or supporting passages, and no answer or evidence-subject match. Review alongside the paired question is in noise-review.md.

Checks: original supporting passages and sentence indices preserved; labeled source span; distinct alternative with scoped denial; unrelated donor 70–100 words; distinct donor; no answer, title or content-term overlap.

## 197. 5a8ba59a554299240d9c2058 (row 526)

Question: The Duke Steps Out stars an actress who was ranked tenth on a list of greatest female Hollywood stars in what year?

Gold answer (review only): 1999

Relation checked: year the American Film Institute ranked Joan Crawford tenth among female Classic Hollywood Cinema stars

Labeled source: Joan Crawford [2]

 In 1999, the American Film Institute ranked Crawford tenth on its list of the greatest female stars of Classic Hollywood Cinema.

Supporting passages:

**The Duke Steps Out**

[0] The Duke Steps Out is a 1929 silent film starring William Haines and Joan Crawford.

[1]  The film is lost, but the Vitaphone sound discs track survive at UCLA Film and TV Archives.

**Joan Crawford**

[0] Joan Crawford (born Lucille Fay LeSueur; (March 23, 190?

[1]  – May 10, 1977) was an American film and television actress who began her career as a dancer and stage showgirl.

[2]  In 1999, the American Film Institute ranked Crawford tenth on its list of the greatest female stars of Classic Hollywood Cinema.

Synthetic conflicting passage:

The year the American Film Institute ranked Joan Crawford tenth among female Classic Hollywood Cinema stars is 2000. It is not 1999. This reference entry describes the particular subject and historical detail identified in the preceding statement. The description concerns that subject alone, rather than a similarly named person, place, organization, or work. The wording refers to the same event, period, and relationship throughout the account. Other details about the subject are outside the scope of this short entry.

Irrelevant passage: **The Liberties, Dublin**

The Liberties (Irish: Na Saoirsí or occasionally Na Libirtí) is an area in central Dublin, Ireland, located to the southwest of the inner city.  One of Dublin's most historic working-class neighbourhoods, the area is traditionally associated with social housing, market traders, local family-owned businesses, as well as whiskey distilling, it is now also a centre of enterprise and commercial life in the heart of the city.  Today the historic city quarter sits side by side with dynamic media and tech hubs and highly respected medical and education centres.

Donor provenance: {"rowIndex":5036,"questionId":"5ac4e476554299076e296e34","passageIndex":2,"title":"The Liberties, Dublin","sentences":["The Liberties (Irish: Na Saoirsí or occasionally Na Libirtí) is an area in central Dublin, Ireland, located to the southwest of the inner city."," One of Dublin's most historic working-class neighbourhoods, the area is traditionally associated with social housing, market traders, local family-owned businesses, as well as whiskey distilling, it is now also a centre of enterprise and commercial life in the heart of the city."," Today the historic city quarter sits side by side with dynamic media and tech hubs and highly respected medical and education centres."]}

Review: Contradicts the answer-bearing relation: year the American Film Institute ranked Joan Crawford tenth among female Classic Hollywood Cinema stars. The false assertion explicitly excludes the gold value in the same scope. The source sentence and complete supporting passages are retained for review.

Independent source passage about The Liberties, Dublin; no shared content terms with the question or supporting passages, and no answer or evidence-subject match. Review alongside the paired question is in noise-review.md.

Checks: original supporting passages and sentence indices preserved; labeled source span; distinct alternative with scoped denial; unrelated donor 70–100 words; distinct donor; no answer, title or content-term overlap.

## 198. 5ac3b5d3554299741d48a2f3 (row 532)

Question: Luke Null is an actor who was on the program that premiered its 43rd season on which date?

Gold answer (review only): September 30, 2017

Relation checked: premiere date of Saturday Night Live season 43 featuring new cast member Luke Null

Labeled source: Saturday Night Live (season 43) [0]

The forty-third season of the NBC comedy series "Saturday Night Live" premiered on September 30, 2017 with host Ryan Gosling and musical guest Jay-Z during the 2017–2018 television season.

Supporting passages:

**Luke Null**

[0] Luke Null (born July 7, 1990 in Cincinnati, Ohio) is an American actor, comedian, and singer, who currently works as a cast member on "Saturday Night Live", having joined the show at the start of its forty-third season.

[1]  Prior to joining the show, Null was known for performing at the iO Theater in Chicago specializing in musical comedy.

[2]  Luke Null is now the second "SNL" cast member born in the 1990s after Pete Davidson (though Null is older than Davidson by three years).

**Saturday Night Live (season 43)**

[0] The forty-third season of the NBC comedy series "Saturday Night Live" premiered on September 30, 2017 with host Ryan Gosling and musical guest Jay-Z during the 2017–2018 television season.

[1]  Like the final four episodes of season 42, season 43 will be broadcast live in all four time zones within the contiguous United States.

Synthetic conflicting passage:

The premiere date of Saturday Night Live season 43 featuring new cast member Luke Null is October 7, 2017. It is not September 30, 2017. This reference entry describes the particular subject and historical detail identified in the preceding statement. The description concerns that subject alone, rather than a similarly named person, place, organization, or work. The wording refers to the same event, period, and relationship throughout the account. Other details about the subject are outside the scope of this short entry.

Irrelevant passage: **Crystal Palace Park**

Crystal Palace Park is a Victorian pleasure ground, used for cultural and sporting events.  It is located in the south-east London suburb of Crystal Palace, which was in turn named after the Crystal Palace Exhibition building, which had been moved from Hyde Park, London after the 1851 Great Exhibition and rebuilt with some modifications and enlargements to form the centrepiece of the pleasure ground, before being destroyed by fire in 1936.  The park features full-scale models of dinosaurs in a landscape, a maze, lakes, and a concert bowl.

Donor provenance: {"rowIndex":5037,"questionId":"5ae13c5155429920d5234336","passageIndex":8,"title":"Crystal Palace Park","sentences":["Crystal Palace Park is a Victorian pleasure ground, used for cultural and sporting events."," It is located in the south-east London suburb of Crystal Palace, which was in turn named after the Crystal Palace Exhibition building, which had been moved from Hyde Park, London after the 1851 Great Exhibition and rebuilt with some modifications and enlargements to form the centrepiece of the pleasure ground, before being destroyed by fire in 1936."," The park features full-scale models of dinosaurs in a landscape, a maze, lakes, and a concert bowl."]}

Review: Contradicts the answer-bearing relation: premiere date of Saturday Night Live season 43 featuring new cast member Luke Null. The false assertion explicitly excludes the gold value in the same scope. The source sentence and complete supporting passages are retained for review.

Independent source passage about Crystal Palace Park; no shared content terms with the question or supporting passages, and no answer or evidence-subject match. Review alongside the paired question is in noise-review.md.

Checks: original supporting passages and sentence indices preserved; labeled source span; distinct alternative with scoped denial; unrelated donor 70–100 words; distinct donor; no answer, title or content-term overlap.

## 199. 5ac279345542990b17b153b0 (row 538)

Question: What is the date of birth of the English inventor that developed the Richard Hornsby & Sons oil engine? 

Gold answer (review only): 28 January 1864

Relation checked: birth date of Herbert Akroyd-Stuart, developer of the Richard Hornsby and Sons oil engine

Labeled source: Herbert Akroyd Stuart [0]

Herbert Akroyd-Stuart (28 January 1864, Halifax, Yorkshire, England – 19 February 1927, Halifax) was an English inventor who is noted for his invention of the hot bulb engine, or heavy oil engine.

Supporting passages:

**Herbert Akroyd Stuart**

[0] Herbert Akroyd-Stuart (28 January 1864, Halifax, Yorkshire, England – 19 February 1927, Halifax) was an English inventor who is noted for his invention of the hot bulb engine, or heavy oil engine.

**Richard Hornsby &amp; Sons**

[0] Richard Hornsby & Sons was an engine and machinery manufacturer in Lincolnshire, England from 1828 until 1918.

[1]  The company was a pioneer in the manufacture of the oil engine developed by Herbert Akroyd Stuart, which was marketed under the "Hornsby-Akroyd" name.

[2]  The company developed an early track system for vehicles, selling the patent to Holt & Co. (predecessor to Caterpillar Inc.) in America.

[3]  In 1918, Richard Hornsby & Sons became a subsidiary of the neighbouring engineering firm Rustons of Lincoln, to create "Ruston & Hornsby".

Synthetic conflicting passage:

The birth date of Herbert Akroyd-Stuart, developer of the Richard Hornsby and Sons oil engine is 28 January 1874. It is not 28 January 1864. This reference entry describes the particular subject and historical detail identified in the preceding statement. The description concerns that subject alone, rather than a similarly named person, place, organization, or work. The wording refers to the same event, period, and relationship throughout the account. Other details about the subject are outside the scope of this short entry.

Irrelevant passage: **Drew Brads**

Drew Brads (born August 12, 1999) is an American Rubik's cube speedsolver who holds the world record fastest average of five Pyraminx solves (excluding fastest and slowest), 2.04 seconds, set on 16 July 2017 at the World Championship 2017 in Paris.  He has broken the Pyraminx average world record 6 times since his first record on 23 August 2014, and formerly held the world record single solve with his 1.32 second solve on 24 October 2015 at Lexington Fall 2015.

Donor provenance: {"rowIndex":5048,"questionId":"5add750c5542990dbb2f7e53","passageIndex":7,"title":"Drew Brads","sentences":["Drew Brads (born August 12, 1999) is an American Rubik's cube speedsolver who holds the world record fastest average of five Pyraminx solves (excluding fastest and slowest), 2.04 seconds, set on 16 July 2017 at the World Championship 2017 in Paris."," He has broken the Pyraminx average world record 6 times since his first record on 23 August 2014, and formerly held the world record single solve with his 1.32 second solve on 24 October 2015 at Lexington Fall 2015."]}

Review: Contradicts the answer-bearing relation: birth date of Herbert Akroyd-Stuart, developer of the Richard Hornsby and Sons oil engine. The false assertion explicitly excludes the gold value in the same scope. The source sentence and complete supporting passages are retained for review.

Independent source passage about Drew Brads; no shared content terms with the question or supporting passages, and no answer or evidence-subject match. Review alongside the paired question is in noise-review.md.

Checks: original supporting passages and sentence indices preserved; labeled source span; distinct alternative with scoped denial; unrelated donor 70–100 words; distinct donor; no answer, title or content-term overlap.

## 200. 5adfc50355429942ec259b43 (row 539)

Question: Where was the sports complex at which Will Brodie made his debut in the thirty-five point loss against Melbourne located?

Gold answer (review only): Alice Springs, Northern Territory

Relation checked: location of TIO Traeger Park where Will Brodie made his AFL debut

Labeled source: Traeger Park [0]

Traeger Park (currently known under naming rights as TIO Traeger Park) is a sports complex located in Alice Springs, Northern Territory, Australia, and is named after Alfred Hermann Traeger.

Supporting passages:

**Traeger Park**

[0] Traeger Park (currently known under naming rights as TIO Traeger Park) is a sports complex located in Alice Springs, Northern Territory, Australia, and is named after Alfred Hermann Traeger.

[1]  The park was officially opened by Anne Catherine Smallwood (nee Traeger) Alfred's younger daughter.

[2]  The primary stadium in the complex caters for Australian rules football and cricket and has a capacity of 10,000.

[3]  The complex also has a small baseball stadium.

**Will Brodie**

[0] Will Brodie (born 23 August 1998) is a professional Australian rules footballer playing for the Gold Coast Football Club in the Australian Football League (AFL).

[1]  He was drafted by Gold Coast with their third selection and ninth overall in the 2016 national draft.

[2]  He made his debut in the thirty-five point loss against Melbourne at TIO Traeger Park in round ten of the 2017 season.

Synthetic conflicting passage:

The location of TIO Traeger Park where Will Brodie made his AFL debut is Darwin, Northern Territory. It is not Alice Springs, Northern Territory. This reference entry describes the particular subject and historical detail identified in the preceding statement. The description concerns that subject alone, rather than a similarly named person, place, organization, or work. The wording refers to the same event, period, and relationship throughout the account. Other details about the subject are outside the scope of this short entry.

Irrelevant passage: **Phyllanthus**

Phyllanthus is the largest genus in the flowering plant family Phyllanthaceae.  Estimates of the number species in this genus vary widely, from 750 to 1200.  "Phyllanthus" has a remarkable diversity of growth forms including annual and perennial herbs, shrubs, climbers, floating aquatics, and pachycaulous succulents.  Some have flattened leaflike stems called cladodes.  It has a wide variety of floral morphologies and chromosome numbers and has one of the widest range of pollen types of any seed plant genus.

Donor provenance: {"rowIndex":5075,"questionId":"5ac39bd8554299657fa290fe","passageIndex":7,"title":"Phyllanthus","sentences":["Phyllanthus is the largest genus in the flowering plant family Phyllanthaceae."," Estimates of the number species in this genus vary widely, from 750 to 1200."," \"Phyllanthus\" has a remarkable diversity of growth forms including annual and perennial herbs, shrubs, climbers, floating aquatics, and pachycaulous succulents."," Some have flattened leaflike stems called cladodes."," It has a wide variety of floral morphologies and chromosome numbers and has one of the widest range of pollen types of any seed plant genus."]}

Review: Contradicts the answer-bearing relation: location of TIO Traeger Park where Will Brodie made his AFL debut. The false assertion explicitly excludes the gold value in the same scope. The source sentence and complete supporting passages are retained for review.

Independent source passage about Phyllanthus; no shared content terms with the question or supporting passages, and no answer or evidence-subject match. Review alongside the paired question is in noise-review.md.

Checks: original supporting passages and sentence indices preserved; labeled source span; distinct alternative with scoped denial; unrelated donor 70–100 words; distinct donor; no answer, title or content-term overlap.
