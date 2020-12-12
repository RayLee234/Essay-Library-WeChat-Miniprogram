const db = wx.cloud.database()

// pages/submit/submit.js
Page({

  /**
   * Page initial data
   */
  data: {
    years: [2017, 2018, 2019, 2020, 2021, 2022],
    testOptions: ["SAT", "ACT"],
    SATScoreRange: [1600, 1590, 1580, 1570, 1560, 1550, 1540, 1530, 1520, 1510, 1500, 1490, 1480, 1470, 1460, 1450, 1440, 1430, 1420, 1410, 1400, 1390, 1380, 1370, 1360, 1350, 1340, 1330, 1320, 1310, 1300, 1290, 1280, 1270, 1260, 1250, 1240, 1230, 1220, 1210, 1200],
    ACTScoreRange: [36, 35, 34, 33, 32, 31, 30, 29, 28, 27, 26, 25],
    majorOptions: ["Undecided", "African Studies", "American Studies", "Anthropology", "Art & Art History", "Asian Studies", "Biology", "Chemistry", "Classics", "Computer Science", "Dance", "Earth Sciences", "Economics", "Education", "Engineering", "English", "Environmental Sciences", "Finance", "Gender & Feminist Studies", "History", "International Relations", "Linguistics", "Mathematics", "Medieval & Renaissance Studies", "Music", "Neuroscience", "Philosophy", "Physics", "Political Science", "Psychology", "Public Policy", "Religious Studies", "Sociology", "Statistics", "Urban Studies"],
    majorFields: 1,
    personalStatementOptions: [{
      id: 0,
      text: "Some students have a background, identity, interest, or talent so meaningful they believe their application would be incomplete without it. If this sounds like you, please share your story."
    },{
      id: 1,
      text: "The lessons we take from obstacles we encounter can be fundamental to later success. Recount a time when you faced a challenge, setback, or failure. How did it affect you, and what did you learn from the experience?"
    },{
      id: 2,
      text: "Reflect on a time when you questioned or challenged a belief or idea. What prompted your thinking? What was the outcome?",
    },{
      id: 3,
      text: "Describe a problem you’ve solved or a problem you’d like to solve. It can be an intellectual challenge, a research query, an ethical dilemma — anything of personal importance, no matter the scale. Explain its significance to you and what steps you took or could be taken to identify a solution."
    },{
      id: 4,
      text: "Discuss an accomplishment, event, or realization that sparked a period of personal growth and a new understanding of yourself or others."
    },{
      id: 5,
      text: "Describe a topic, idea, or concept you find so engaging it makes you lose all track of time. Why does it captivate you? What or who do you turn to when you want to learn more?"
    },{
      id: 6,
      text: "Share an essay on any topic of your choice. It can be one you’ve already written, one that responds to a different prompt, or one of your own design."
    }],
    essayPrompts: [{
      names: ["Princeton", "princeton", "Princeton University", "Princeton university", "princeton university", "普林斯顿", "普林斯顿大学", "普林"],
      prompts: [{
        text: "Activities: Please briefly elaborate on one of your extracurricular activities or work experiences that was particularly meaningful to you.",
        wordLimit: 150
      },{
        text: "Summers: Please tell us how you have spent the last two summers (or vacations between school years), including any jobs you have held.",
        wordLimit: 150
      },{
        text: "Your favorite book and its author"
      },{
        text: "Your favorite website"
      },{
        text: "Your favorite recording"
      },{
        text: "Your favorite source of inspiration"
      },{
        text: "Your favorite line from a movie or book and its title"
      },{
        text: "Your favorite movie"
      },{
        text: "Two adjectives your friends would use to describe you"
      },{
        text: "Your favorite keepsake or memento"
      },{
        text: "Your favorite word"
      },{
        num: 1,
        text: ["Tell us about a person who has influenced you in a significant way.", "“One of the great challenges of our time is that the disparities we face today have more complex causes and point less straightforwardly to solutions.” Omar Wasow, assistant professor of politics, Princeton University and co-founder of Blackplanet.com. This quote is taken from Professor Wasow’s January 2014 speech at the Martin Luther King Day celebration at Princeton University.", "“Culture is what presents us with the kinds of valuable things that can fill a life. And insofar as we can recognize the value in those things and make them part of our lives, our lives are meaningful.” Gideon Rosen, Stuart Professor of Philosophy and director of the Behrman Undergraduate Society of Fellows, Princeton University.", "Using a favorite quotation from an essay or book you have read in the last three years as a starting point, tell us about an event or experience that helped you define one of your values or changed how you approach the world. Please write the quotation, title and author at the beginning of your essay."],
        wordLimit: 650
      }]
    },{
      names: ["Harvard", "harvard", "Harvard University", "Harvard university", "harvard university", "哈佛", "哈佛大学"],
      prompts: [{
        text: "Please briefly elaborate on one of your extracurricular activities or work experiences.",
        wordLimit: 150
      },{
        text: "Your intellectual life may extend beyond the academic requirements of your particular school. Please use the space below to list additional intellectual activities that you have not mentioned or detailed elsewhere in your application. These could include, but are not limited to, supervised or self-directed projects not done as school work, training experiences, online courses not run by your school, or summer academic or research programs not described elsewhere.",
        wordLimit: 150
      },{
        text: "You may wish to include an additional essay if you feel that the college application forms do not provide sufficient opportunity to convey important information about yourself or your accomplishments."
      },{
        text: "For International Students: What specific plan do you have, if any, for using the education you hope to receive?",
        wordLimit: 50
      }]
    },{
      names: ["Columbia", "columbia", "Columbia University", "Columbia university", "Columbia University in the City of New York", "columbia university", "哥伦比亚", "哥大", "哥伦比亚大学"],
      prompts: [{
        text: "List a few words or phrases that describe your ideal college community.",
        wordLimit: 150
      },{
        text: "List the titles of the required readings from courses during the school year or summer that you enjoyed most in the past year.",
        wordLimit: 150
      },{
        text: "List the titles of the books you read for pleasure that you enjoyed most in the past year.",
        wordLimit: 150
      },{
        text: "List the titles of the print, electronic publications and websites you read regularly.",
        wordLimit: 150
      },{
        text: "List the titles of the films, concerts, shows, exhibits, lectures and other entertainments you enjoyed most in the past year.",
        wordLimit: 150
      },{
        text: "Please tell us what you value most about Columbia and why.",
        wordLimit: 300
      },{
        num: 1,
        text: ["If you are applying to Columbia College, tell us what from your current and past experiences (either academic or personal) attracts you specifically to the field or fields of study that you noted in the Member Questions section. If you are currently undecided, please write about any field or fields in which you may have an interest at this time.", "If you are applying to The Fu Foundation School of Engineering and Applied Science, please tell us what from your current and past experiences (either academic or personal) attracts you specifically to the field or fields of study that you noted in the Member Questions section."],
        wordLimit: 150
      }]
    },{
      PS: false,
      names: ["MIT", "mit", "Massachusetts Institute of Technology", "麻省理工", "麻省理工学院", "麻省理工大学", "麻省"],
      prompts: [{
        text: "We know you lead a busy life, full of activities, many of which are required of you. Tell us about something you do simply for the pleasure of it.",
        wordLimit: 100
      },{
        text: "Although you may not yet know what you want to major in, which department or program at MIT appeals to you and why?",
        wordLimit: 100
      },{
        text: "At MIT, we bring people together to better the lives of others. MIT students work to improve their communities in different ways, from tackling the world’s biggest challenges to being a good friend. Describe one way in which you have contributed to your community, whether in your family, the classroom, your neighborhood, etc.",
        wordLimit: 250
      },{
        text: "Describe the world you come from; for example, your family, clubs, school, community, city, or town. How has that world shaped your dreams and aspirations?",
        wordLimit: 250
      },{
        text: "Tell us about the most significant challenge you’ve faced or something important that didn’t go according to plan. How did you manage the situation?",
        wordLimit: 250
      }]
    },{
      names: ["Yale", "yale", "Yale University", "Yale university", "yale university", "耶鲁", "耶鲁大学"],
      prompts: [{
        text: "Why do these areas (your chosen acedemic interests) appeal to you?",
        wordLimit: 100
      },{
        text: "What is it about Yale that has led you to apply?",
        wordLimit: 125
      },{
        text: "What inspires you?",
        wordLimit: 35
      },{
        text: "Yale’s residential colleges regularly host conversations with guests representing a wide range of experiences and accomplishments. What person, past or present, would you invite to speak? What question would you ask?",
        wordLimit: 35
      },{
        text: "You are teaching a Yale course. What is it called?",
        wordLimit: 35
      },{
        text: "Most first-year Yale students live in suites of four to six people. What do you hope to add to your suitemates’ experience? What do you hope they will add to yours?",
        wordLimit: 35
      },{
        text: "Think about an idea or topic that has been intellectually exciting for you. Why are you drawn to it?",
        wordLimit: 250
      },{
        num: 1,
        text: ["Reflect on your engagement with a community to which you belong. How do you feel you have contributed to this community?", "Yale students, faculty, and alumni engage issues of local, national, and international importance. Discuss an issue that is significant to you and how your college experience might help you address it."],
        wordLimit: 250
      }]
    },{
      names: ["Stanford", "stanford", "Stanford University", "Stanford university", "stanford university", "斯坦福", "斯坦福大学"],
      prompts: [{
        text: "Briefly elaborate on one of your extracurricular activities or work experiences.",
        wordLimit: 150
      },{
        text: "What is the most significant challenge that society faces today?",
        wordLimit: 50
      },{
        text: "How did you spend your last two summers?",
        wordLimit: 50
      },{
        text: "What historical moment or event do you wish you could have witnessed?",
        wordLimit: 50
      },{
        text: "What five words best describe you?",
        wordLimit: 10
      },{
        text: "When the choice is yours, what do you read, listen to, or watch?",
        wordLimit: 50
      },{
        text: "Name one thing you are looking forward to experiencing at Stanford.",
        wordLimit: 50
      },{
        text: "Imagine you had an extra hour in the day — how would you spend that time?",
        wordLimit: 50
      },{
        text: "The Stanford community is deeply curious and driven to learn in and out of the classroom. Reflect on an idea or experience that makes you genuinely excited about learning.",
        wordLimit: 250
      },{
        text: "Virtually all of Stanford’s undergraduates live on campus. Write a note to your future roommate that reveals something about you or that will help your roommate — and us — know you better.",
        wordLimit: 250
      },{
        text: "Tell us about something that is meaningful to you and why.",
        wordLimit: 250
      }]
    },{
      names: ["UChicago", "uchicago", "Chicago", "chicago", "University of Chicago", "university of chicago", "芝大", "芝加哥大学", "芝加哥"],
      prompts: [{
        text: "How does the University of Chicago, as you know it now, satisfy your desire for a particular kind of learning, community, and future? Please address with some specificity your own wishes and how they relate to UChicago.",
      },{
        num: 1,
        text:["Cats have nine lives, Pac-Man has 3 lives, and radioactive isotopes have half-lives. How many lives does something else—conceptual or actual—have, and why?", "If there’s a limited amount of matter in the universe, how can Olive Garden (along with other restaurants and their concepts of food infinity) offer truly unlimited soup, salad, and breadsticks? Explain this using any method of analysis you wish—physics, biology, economics, history, theology... the options, as you can tell, are endless.", "A hot dog might be a sandwich, and cereal might be a soup, but is a ______ a ______?", "“Fiction reveals truth that reality obscures.” – Jessamyn West", "UChicago has international campus centers around the world, but we don’t have any interplanetary, interstellar, or interdimensional campuses… yet! Propose a spot in time or space, in this or any universe, for a new UChicago campus. What types of courses would be taught at this site? What cultural experiences await students who study there?", "“Don’t be afraid to pick past prompts! I liked some of the ones from previous years more than those made newly available for my year. Also, don’t worry about the ‘correct’ way to interpret a question. If there exists a correct way to interpret the prompt I chose, it certainly was not my answer.”"]
      }]
    },{
      names: ["UPenn", "upenn", "Penn", "penn", "Wharton", "wharton", "University of Pennsylvania", "university of pennsylvania", "宾大", "宾夕法尼亚大学", "沃顿", "沃顿商学院"],
      prompts: [{
        text: "How will you explore your intellectual and academic interests at the University of Pennsylvania? Please answer this question given the specific undergraduate school to which you are applying.",
        wordLimit: 450
      },{
        text: "At Penn, learning and growth happen outside of the classroom, too. How will you explore the community at Penn? Consider how this community will help shape your perspective and identity, and how your identity and perspective will help shape this community.",
        wordLimit: 200
      }]
    },{
      names: ["Northwestern", "northwestern", "Northwestern University", "Northwestern university", "northwestern university", "西北", "西北大学"],
      prompts: [{
        text: "In 300 words or less, help us understand what aspects of Northwestern appeal most to you, and how you’ll make use of specific resources and opportunities here.",
        wordLimit: 300
      }]
    },{
      names: ["Duke", "duke", "Duke University", "Duke university", "duke university", "杜克", "杜克大学"],
      prompts: [{
        text: "Please share with us why you consider Duke a good match for you.  Is there something in particular about Duke’s academic or other offerings that attract you?",
        wordLimit: 200
      },{
        text: "Duke University seeks a talented, engaged student body that embodies the wide range of human experience; we believe that the diversity of our students makes our community stronger. If you’d like to share a perspective you bring or experiences you’ve had that would help us understand you better, perhaps a community you belong to or your family or cultural background, we encourage you to do so here. Real people are reading your application, and we want to do our best to understand and appreciate the real people applying to Duke.",
        wordLimit: 250
      },{
        text: "Duke’s commitment to diversity and inclusion includes sexual orientation, gender identity, and gender expression. If you would like to share with us more about your identity, you can do so here, or use any previous essay prompt you feel is appropriate.",
        wordLimit: 250
      }]
    },{
      names: ["Johns Hopkins", "jhu", "JHU", "johns hopkins", "John Hopkins", "john hopkins", "John's Hopkins", "john's hopkins", "Johns Hopkins University", "John Hopkins University", "John's Hopkins University", "约翰霍普金斯", "约翰霍普金斯大学", "约翰斯霍普金斯", "约翰斯霍普金斯大学"],
      prompts: [{
        text: "Successful students at Johns Hopkins make the biggest impact by collaborating with others, including peers, mentors, and professors. Talk about a time, in or outside the classroom, when you worked with others and what you learned from the experience.",
        wordLimit: 400
      }]
    },{
      names: ["Caltech", "cit", "CIT", "caltech", "California Institute of Technology", "加州理工", "加州理工大学", "加州理工学院"],
      prompts: [{
        text: "Describe three experiences and/or activities that have helped develop your passion for a possible career in a STEM field.\nSTEM experience/activity 1 and explanation",
        wordLimit: 120 
      },{
        text: "STEM experience/activity 2 and explanation",
        wordLimit: 120
      },{
        text: "STEM experience/activity 3 and explanation",
        wordLimit: 120
      },{
        text: "Much like the life of a professional scientist or engineer, the life of a “Techer” relies heavily on collaboration. Knowing this, what do you hope to explore, innovate, or create with your Caltech peers?",
        wordLimit: 400
      },{
        text: "Caltech students are often known for their sense of humor and creative pranks. What do you like to do for fun?",
        wordLimit: 400
      },{
        text: "The process of discovery best advances when people from various backgrounds, experiences, and perspectives come together. How do you see yourself contributing to the diversity of Caltech’s community?",
        wordLimit: 400
      }]
    },{
      names: ["Dartmouth", "dartmouth", "Dartmouth College", "Dartmouth college", "dartmouth college", "Dartmouth University", "Dartmouth university", "dartmouth university", "达特茅斯", "达茅", "达特茅斯大学", "达特茅斯学院"],
      prompts: [{
        text: "While arguing a Dartmouth-related case before the U.S. Supreme Court in 1818, Daniel Webster, Class of 1801, delivered this memorable line: “It is, Sir…a small college. And yet, there are those who love it!” As you seek admission to the Class of 2024, what aspects of the College’s program, community or campus environment attract your interest?",
        wordLimit: 100
      },{
        text: ["The Hawaiian word mo’olelo is often translated as “story” but it can also refer to history, legend, genealogy, and tradition. Use one of these translations to introduce yourself.", "In the aftermath of World War II, Dartmouth President John Sloane Dickey, Class of 1929, proclaimed, “The world’s troubles are your troubles…and there is nothing wrong with the world that better human beings cannot fix.” Which of the world’s “troubles” inspires you to act? How might your course of study at Dartmouth prepare you to address it?", "In The Painted Drum, author Louise Erdrich ‘76 wrote, “... what is beautiful that I make? What is elegant? What feeds the world?” Tell us about something beautiful you have made or hope to make.", "“Yes, books are dangerous,” young people’s novelist Pete Hautman proclaimed. “They should be dangerous—they contain ideas.” What book or story captured your imagination through the ideas it revealed to you? Share how those ideas influenced you.", "“I have no special talent,” Albert Einstein once observed. “I am only passionately curious.” Celebrate your curiosity.", "Labor leader Dolores Huerta is a civil rights activist who co-founded the organization now known as United Farm Workers. She said, “We criticize and separate ourselves from the process. We’ve got to jump right in there with both feet.” Speak your truth: Talk about a time when your passion became action."],
        num: 1,
        wordLimit: 300
      }]
    },{
      names: ["Brown", "brown", "Brown University", "Brown university", "brown university", "布朗", "布朗大学"],
      prompts: [{
        text: "Brown’s Open Curriculum allows students to explore broadly while also diving deeply into their academic pursuits. Tell us about an academic interest (or interests) that excites you, and how you might use the Open Curriculum to pursue it.",
        wordLimit: 250
      },{
        text: "At Brown, you will learn as much from your peers outside the classroom as in academic spaces. How will you contribute to the Brown community?",
        wordLimit: 250
      },{
        text: "Tell us about a place or community you call home. How has it shaped your perspective?",
        wordLimit: 250
      }]
    },{
      names: ["Notre Dame", "notre dame", "University of Notre Dame", "university of notre dame", "圣母", "圣母大学"],
      prompts: [{
        text: "What excites you about the University of Notre Dame that makes it stand out from other institutions?",
        wordLimit: 200
      },{
        text: ["The founder of the University of Notre Dame, Father Edward Sorin, C.S.C., was only 28 when he established the University with the vision that it would become a “powerful means of doing good.” We have always known that young people can be catalysts for change. What is one way that you have made an impact in your community?", "If you were to bring a new friend to your hometown and give them a personal tour, what is a meaningful place you would show them?", "Defend an unpopular opinion you hold.", "Many high schools have books that are required reading. Thinking beyond the common examples, what book do you believe should be on your school’s reading list and why?"],
        num: 2,
        wordLimit: 200
      }]
    },{
      names: ["Vanderbilt", "vanderbilt", "Vanderbilt University", "Vanderbilt university", "vanderbilt university", "范德堡", "范德堡大学"],
      prompts: [{
        text: "Please briefly elaborate on one of your extracurricular activities or work experiences.",
        wordLimit: 400
      }]
    },{
      names: ["Cornell", "cornell", "Cornell University", "Cornell university", "cornell university", "康奈尔", "康奈尔大学"],
      prompts: [{
        text: ["Why are you drawn to studying the major you have selected? Please discuss how your interests and related experiences have influenced your choice. Specifically, how will an education from the College of Agriculture and Life Sciences (CALS) and Cornell University help you achieve your academic goals?", "What is your “thing”? What energizes you or engages you so deeply that you lose track of time? Everyone has different passions, obsessions, quirks, inspirations. What are yours?", "Students in Arts and Sciences embrace the opportunity to delve into their academic interests, discover new realms of intellectual inquiry, and chart their own path through the College. Tell us why the depth, breadth, and flexibility of our curriculum are ideally suited to exploring the areas of study that excite you.", "Affiliated with both the Cornell SC Johnson College of Business and the College of Agriculture and Life Sciences, The Charles H. Dyson School of Applied Economics and Management is unique by design. Explain how our approach to business education is the right fit for you, and how your interests, experiences or goals will contribute to the unique composition of the entering class.", "How have your interests and experiences influenced your decision to apply to the School of Hotel Administration? How does this decision relate to your future plans and aspirations?", "Tell us about your interest in engineering or what you hope to achieve with a degree in engineering. Describe what appeals to you about Cornell Engineering and how it specifically relates to your engineering interest or aspirations.", "How have your experiences influenced your decision to apply to the College of Human Ecology. How will your choice of major impact your goals and plans for the future?", "Tell us about your intellectual interests, how they sprung from your course, service, work or life experiences, and what makes them exciting to you. Describe how ILR is the right school for you to pursue these interests."],
        num: 1,
        wordLimit: 650
      }]
    },{
      names: ["Rice", "rice", "Rice University", "Rice university", "rice university", "莱斯", "莱斯大学"],
      prompts: [{
        text: "There is a breadth of intellectual opportunities here at Rice. Further explain your intended major and other areas of academic focus you may explore.",
        wordLimit: 150
      },{
        text: "What aspects of the Rice undergraduate experience excite you and led you to apply?",
        wordLimit: 150
      },{
        text: "Rice is lauded for creating a collaborative atmosphere that enhances the quality of life for all members of our campus community. The Residential College System is heavily influenced by the unique life experiences and cultural traditions each student brings. What personal perspectives would you contribute to life at Rice?",
        wordLimit: 500
      }]
    },{
      names: ["Washington St. Louis", "WUSTL", "wustl", "Washington University in St. Louis", "Washington University in St Louis"],
      prompts: [{
        text: "Tell us about something that really sparks your intellectual interest and curiosity and compels you to explore more. It could be an idea, book, project, cultural activity, work of art, start-up, music, movie, research, innovation, question, or other pursuit.",
        wordLimit: 250
      }]
    },{
      PS: false,
      names: ["UCLA", "ucla", "UC Los Angeles", "University of California, Los Angeles", "University of California Los Angeles", "加州大学洛杉矶分校"],
      prompts: [{
        num: 4,
        text: ["Describe an example of your leadership experience in which you have positively influenced others, helped resolve disputes or contributed to group efforts over time.", "Every person has a creative side, and it can be expressed in many ways: problem solving, original and innovative thinking, and artistically, to name a few. Describe how you express your creative side.", "What would you say is your greatest talent or skill? How have you developed and demonstrated that talent over time?", "Describe how you have taken advantage of a significant educational opportunity or worked to overcome an educational barrier you have faced.", "Describe the most significant challenge you have faced and the steps you have taken to overcome this challenge. How has this challenge affected your academic achievement?", "Think about an academic subject that inspires you. Describe how you have furthered this interest inside and/or outside of the classroom.", "What have you done to make your school or your community a better place?", "Beyond what has already been shared in your application, what do you believe makes you stand out as a strong candidate for admissions to the University of California?"],
        wordLimit: 350
      }]
    },{
      names: ["Emory", "emory", "Emory University", "Emory university", "emory university", "埃默里", "埃默里大学"],
      prompts: [{
        num: 1,
        text: ["Share about something you want to bring from your community to the Emory University community.", "Share about a time when you questioned something that you believed to be true.", "Emory University’s shield is a crossed torch and trumpet representing the light of learning and the proclamation of knowledge. It symbolizes our mission to impact the world through discovery. What truth or knowledge do you want to see shared?"],
        wordLimit: 150
      },{
        num: 1,
        text: ["Which book, character, song, or piece of work (fiction or non-fiction) represents you, and why?", "If you could witness a historic event first-hand, what would it be, and why?", "If asked to write a 150-word tweet to tell the world who you are, what would you say? (Yes, the actual Twitter character limit would likely be shorter than 150 words, but thanks for indulging us.)"],
        wordLimit: 150
      }]
    },{
      PS: false,
      names: ["UC Berkeley", "ucb", "UCB", "uc berkeley", "UC berkeley", "University of California, Berkeley", "University of California Berkeley", "伯克利", "伯克利大学", "加州大学伯克利分校"],
      prompts: [{
        num: 4,
        text: ["Describe an example of your leadership experience in which you have positively influenced others, helped resolve disputes or contributed to group efforts over time.", "Every person has a creative side, and it can be expressed in many ways: problem solving, original and innovative thinking, and artistically, to name a few. Describe how you express your creative side.", "What would you say is your greatest talent or skill? How have you developed and demonstrated that talent over time?", "Describe how you have taken advantage of a significant educational opportunity or worked to overcome an educational barrier you have faced.", "Describe the most significant challenge you have faced and the steps you have taken to overcome this challenge. How has this challenge affected your academic achievement?", "Think about an academic subject that inspires you. Describe how you have furthered this interest inside and/or outside of the classroom.", "What have you done to make your school or your community a better place?", "Beyond what has already been shared in your application, what do you believe makes you stand out as a strong candidate for admissions to the University of California?"],
        wordLimit: 350
      }]
    },{
      names: ["USC", "usc", "University of Southern California", "university of southern california", "南加大", "南加州", "南加州大学"],
      prompts: [{
        num: 1,
        text: ["USC believes that one learns best when interacting with people of different backgrounds, experiences and perspectives. Tell us about a time you were exposed to a new idea or when your beliefs were challenged by another point of view.", "USC faculty place an emphasis on interdisciplinary academic opportunities. Describe something outside of your intended academic focus about which you are interested in learning.", "What is something about yourself that is essential to understanding you?"],
        wordLimit: 250
      },{
        text: "Describe how you plan to pursue your academic interests at USC. Please feel free to address your first- and second-choice major selections.",
        wordLimit: 250
      },{
        text: "Describe yourself in three words"
      },{
        text: "What is your favorite snack?"
      },{
        text: "Best movie of all time"
      },{
        text: "Dream job"
      },{
        text: "If your life had a theme song, what would it be?"
      },{
        text: "Dream trip"
      },{
        text: "What TV show will you binge watch next?"
      },{
        text: "Which well-known person or fictional character would be your ideal roommate?"
      },{
        text: "Favorite book"
      },{
        text: "If you could teach a class on any topic, what would it be?"
      }]
    },{
      PS: false,
      names: ["Georgetown", "georgetown", "Georgetown University", "Georgetown university", "georgetown university", "乔治城大学", "乔治城"],
      prompts: [{
        text: "Indicate any special talents or skills you possess.",
        wordLimit: 250
      },{
        text: "Briefly discuss the significance to you of the school or summer activity in which you have been most involved."
      },{
        text: "As Georgetown is a diverse community, the Admissions Committee would like to know more about you in your own words. Please submit a brief essay, either personal or creative, which you feel best describes you."
      }]
    },{
      names: ["Carnegie Mellon", "cmu", "CMU", "carnegie mellon", "Carnegie Mellon University", "carnegie mellon university", "卡梅", "卡内基梅隆", "卡耐基梅隆", "卡内基梅隆大学", "卡耐基梅隆大学"],
      prompts: [{
        text: "Many students pursue college for a specific degree, career opportunity or personal goal. Whichever it may be, learning will be critical to achieve your ultimate goal. As you think ahead to the process of learning during your college years, how will you define a successful college experience?",
        wordLimit: 300
      },{
        text: "Most students choose their intended major or area of study based on a passion or inspiration that’s developed over time – what passion or inspiration led you to choose this area of study?",
        wordLimit: 300
      },{
        text: "Consider your application as a whole. What do you personally want to emphasize about your application for the admission committee’s consideration? Highlight something that’s important to you or something you haven’t had a chance to share. Tell us, don’t show us (no websites please).",
        wordLimit: 300
      }]
    },{
      names: ["University of Michigan", "umich", "UMich", "university of michigan", "Michigan", "michigan", "密西根大学", "密歇根大学", "密西根", "密歇根"],
      prompts: [{
        text: "If you could only do one of the activities you have listed in the Activities section of your Common Application, which one would you keep doing? Why?",
        wordLimit: 150
      },{
        text: "Everyone belongs to many different communities and/or groups defined by (among other things) shared geography, religion, ethnicity, income, cuisine, interest, race, ideology, or intellectual heritage. Choose one of the communities to which you belong, and describe that community and your place within it.",
        wordLimit: 300
      },{
        text: "Describe the unique qualities that attract you to the specific undergraduate College or School (including preferred admission and dual degree programs) to which you are applying at the University of Michigan. How would that curriculum support your interests?",
        wordLimit: 500
      }]
    },{
      names: ["Wake Forest", "wake forest", "Forest", "Wake Forest University", "wake forest university", "维克森林", "维克森林大学"],
      prompts: [{
        text: "List five books you have read that intrigued you."
      },{
        text: "As part of my high-school English curriculum, I was required to read _________.\nI would have liked to replace it with______.\nThe required book I was most surprised I enjoyed was ________."
      },{
        text: "Tell us how a work of fiction you’ve read has helped you to understand the world’s complexity"
      },{
        text: "What piques your intellectual curiosity, and why?"
      },{
        text: "As part of our “Voices of Our Time” series — which allows students, faculty, and staff to hear from some of the world’s leading thinkers — Wake Forest has hosted Ta-Nehisi Coates, Michelle Alexander, Eboo Patel, and Thomas Friedman. If you could choose the next series speaker, whom would you pick, and why?"
      },{
        text: "Give us your top ten list."
      },{
        text: "At Wake Forest, we gather our students in “Calls to Conversation,” congregating small groups around dinner tables in faculty’s and administrators’ homes to discuss topics organized around a theme, for example “arts for social change,” “gender in society,” and “leading a meaningful life.” If you could design a theme for a “Call to Conversation,” what would you choose, and why?"
      },{
        text: "We live in an age intensely interested in heroes. Professor Joseph Campbell defined “hero” as “someone who has given his or her life to something bigger than oneself.” Describe a hero in public life and how and why, in your opinion, they meet Professor Campbell’s definition."
      },{
        text: "We are all different, and our lived experiences — influenced by our culture, race, ethnicity, gender, sexual orientation, and/or religion — shape our understanding of the world. How have your experiences shaped your development, and how do you plan to use those experiences to interact and engage with others who might be different from you within our Wake Forest Community?"
      },{
        text: "In the space provided, briefly discuss which of the accomplishments listed above has had the most meaning for you and why."
      }]
    },{
      names: ["University of Virginia", "UVA", "uva", "university of virginia", "UV", "Virginia", "virginia", "UVirginia", "uVirginia", "弗吉尼亚大学", "弗吉尼亚"],
      prompts: [{
        num: 1,
        wordLimit: 250,
        text: ["What work of art, music, science, mathematics, or literature has surprised, unsettled, or challenged you, and in what way?", "If you were given funding for a small engineering project that would make everyday life better for one friend or family member, what would you design?", "Describe an instance or place where you have been inspired by architecture or design.", "School of Nursing applicants may have experience shadowing, volunteering, or working in a health care environment. Tell us about a health care-related experience or another significant interaction that deepened your interest in studying Nursing.", "Discuss experiences that led you to choose the kinesiology major."]
      },{
        num: 1,
        wordLimit: 250,
        text: ["What’s your favorite word and why?", "We are a community with quirks, both in language and in traditions. Describe one of your quirks and why it is part of who you are.", "Student self-governance, which encourages student investment and initiative, is a hallmark of the UVA culture. In her fourth year at UVA, Laura Nelson was inspired to create Flash Seminars, one-time classes which facilitate high-energy discussion about thought-provoking topics outside of traditional coursework. If you created a Flash Seminar, what idea would you explore and why?", "UVA students paint messages on Beta Bridge when they want to share information with our community. What would you paint on Beta Bridge and why is this your message?", "UVA students are charged with pushing the boundaries of knowledge to serve others and contribute to the common good. Give us an example of how you’ve used what you’ve learned to make a positive impact in another person’s life.", "UVA students are charged with living honorably and upholding a Community of Trust. Give us an example of a community that is important to you and how you worked to strengthen that community."]
      }]
    },{
      names: ["Georgia Tech", "git", "GIT", "georgia tech", "Georgia tech", "Gatech", "gatech", "Georgia Institute of Technology", "佐治亚理工", "佐治亚理工学院", "佐治亚理工大学", "乔治亚理工", "乔治亚理工学院", "乔治亚理工大学", "南方MIT"],
      prompts: [{
        text: "Why do you want to study your chosen major at Georgia Tech, and what opportunities at Georgia Tech will prepare you in that field after graduation?",
        wordLimit: 250
      }]
    },{
      names: ["NYU", "nyu", "New York University", "new york university", "New York university", "纽大", "纽约大学"],
      prompts: [{
        text: "We would like to know more about your interest in NYU. We are particularly interested in knowing what motivated you to apply to NYU and more specifically, why you have applied or expressed interest in a particular campus, school, college, program, and/or area of study? If you have applied to more than one, please tell us why you are interested in each of the campuses, schools, colleges, or programs to which you have applied. We want to understand – Why NYU?",
        wordLimit: 400
      }]
    },{
      names: ["Tufts", "tufts", "Tufts University", "Tufts university", "tufts university", "塔夫茨", "塔夫茨大学"],
      prompts: [{
        text: "Which aspects of the Tufts undergraduate experience prompt your application? In short, ‘Why Tufts?’",
        wordLimit: 150
      },{
        num: 1,
        text: ["From recognizing break dancing as a new Olympic sport, to representation in media, to issues of accessibility in our public transit systems, what is something that you can talk about endlessly? What do you care about and why?", "Whether you’ve built circuit boards or written slam poetry, created a community event or designed mixed media installations, tell us: What have you designed, invented, engineered, or produced? Or what do you hope to?", "We all have a story to tell. And with over 5,000 undergraduate students on our campus, that is over 5,000 stories to share and learn. What’s yours?"],
        wordLimit: 250
      }]
    },{
      names: ["UNC", "unc", "University of North Carolina", "university of north carolina", "Chapel Hill", "chapel hill", "University of North Carolina, Chapel Hill", "University of North Carolina Chapel Hill", "北卡教堂山", "北卡", "北卡罗来纳大学", "北卡罗来纳大学教堂山分校", "北卡罗来纳"],
      prompts: [{
        num: 2,
        wordLimit: 250,
        text: ["Tell us about a peer who has made a difference in your life.", "What do you hope will change about the place where you live?", "What is one thing that we don’t know about you that you want us to know?", "What about your background, or what perspective, belief, or experience, will help you contribute to the education of your classmates at UNC?"]
      }]
    },{
      names: ["Rochester", "rochester", "Rochester University", "University of Rochester", "university of rochester", "Rochester university", "rochester university", "罗切斯特", "罗切斯特大学"],
      prompts: [{
        text: "The University of Rochester benefactor, entrepreneur, photography pioneer and philanthropist George Eastman said, “The progress of the world depends almost entirely upon education.” With that statement in mind, how will you use your University of Rochester experience to foster positive change in order to make the world, your community and those around you “ever better?”",
        wordLimit: 250
      }]
    }],
    hasSearched: 0,
    mySchool: -1,
    scoreType: -1,
    score: 0,
    year: 0,
    intendedMajor: new Array(3),
    hasMajor: [false, false, false],
    submittedProfile: {
      personalStatement: {
        text: undefined,
        content: undefined
      },
      supplementalEssays: new Array(20)
    }
  },

  searchMySchool: function(e) {
    this.setData({
      hasSearched: 1,
      mySchool: -1
    })
    for(var i=0;i<this.data.essayPrompts.length;i++) {
      if(this.data.essayPrompts[i].names.includes(e.detail.value.input)) {
        this.setData({
          mySchool: i,
        })
        this.data.submittedProfile.school = i
        break
      }
    }
  },
  
  changeYear: function(e) {
    this.setData({
      year: this.data.years[e.detail.value]
    })
  },

  changeScoreType: function(e) {
    this.data.submittedProfile.scoreType = e.detail.value
    this.setData({
      scoreType: e.detail.value,
      score: 0
    })
  },

  changeScore: function(e) {
    if(this.data.scoreType == 0) {
      this.setData({
        score: this.data.SATScoreRange[e.detail.value]
      })
    }
    else {
      this.setData({
        score: this.data.ACTScoreRange[e.detail.value]
      })
    }
  },

  addMajor: function(e) {
    this.data.intendedMajor[e.currentTarget.dataset.majorIndex] = this.data.majorOptions[e.detail.value]
    this.data.hasMajor[e.currentTarget.dataset.majorIndex] = true
  },

  addMajorNum: function(e) {
    var majorNum = this.data.majorFields
    this.setData({
      majorFields: majorNum + 1
    })
  },

  deleteMajorNum: function(e) {
    var majorNum = this.data.majorFields
    this.data.intendedMajor[majorNum-1] = undefined
    this.data.hasMajor[majorNum-1] = false
    this.setData({
      majorFields: majorNum - 1
    })
  },

  choosePersonalStatement: function(e) {
    this.data.submittedProfile.personalStatement.text = this.data.personalStatementOptions[e.detail.value].text
  },

  chooseEssayPrompts: function(e) {
    var chosenIndex = e.detail.value
    if(this.data.essayPrompts[this.data.mySchool].prompts[e.currentTarget.dataset.currentEssay].num > 1) chosenIndex.sort()
    var essay = new Array(this.data.essayPrompts[this.data.mySchool].prompts[e.currentTarget.dataset.currentEssay].num)
    if(this.data.essayPrompts[this.data.mySchool].prompts[e.currentTarget.dataset.currentEssay].num == 1) {
      essay[0] = this.data.essayPrompts[this.data.mySchool].prompts[e.currentTarget.dataset.currentEssay].text[chosenIndex]
    }
    else if(chosenIndex.length == essay.length) {
      for(var i=0;i<essay.length;++i) {
        essay[i] = this.data.essayPrompts[this.data.mySchool].prompts[e.currentTarget.dataset.currentEssay].text[chosenIndex[i]]
      }
    }
    this.data.submittedProfile.supplementalEssays[e.currentTarget.dataset.currentEssay].text = essay
  },

  submitProfile: function(e) {
    if(this.data.year == 0) {
      wx.showToast({
        title: '毕业年份不能为空！',
        icon: 'none',
        duration: 1000
      })
      return
    }
    if(this.data.scoreType == -1 || this.data.score == 0) {
      wx.showToast({
        title: '考试成绩不能为空！',
        icon: 'none',
        duration: 1000
      })
      return
    }
    if(this.data.intendedMajor[0] == undefined && this.data.intendedMajor[1] == undefined && this.data.intendedMajor[2] == undefined) {
      wx.showToast({
        title: '申请专业不能为空！',
        icon: 'none',
        duration: 1000
      })
      return
    }
    if( (this.data.intendedMajor[0] != undefined && this.data.intendedMajor[1] != undefined && this.data.intendedMajor[0] == this.data.intendedMajor[1]) || (this.data.intendedMajor[0] != undefined && this.data.intendedMajor[2] != undefined && this.data.intendedMajor[0] == this.data.intendedMajor[2]) || (this.data.intendedMajor[1] != undefined && this.data.intendedMajor[2] != undefined && this.data.intendedMajor[1] == this.data.intendedMajor[2])) {
      wx.showToast({
        title: '所选申请专业重复！',
        icon: 'none',
        duration: 1000
      })
      return
    }
    var hasEssay = false
    this.data.submittedProfile.personalStatement.content = e.detail.value.PS
    for(let [key, val] of Object.entries(e.detail.value)) {
      for(var i=0;i<this.data.essayPrompts[this.data.mySchool].prompts.length;++i) {
        let num = `${i}`
        if(key.indexOf(num) == 0 && ( key.length == num.length || key[num.length] == '.') ) {
          this.data.submittedProfile.supplementalEssays[i].content.push(val)
          if(this.data.essayPrompts[this.data.mySchool].prompts[i].num == undefined) this.data.submittedProfile.supplementalEssays[i].text.push(this.data.essayPrompts[this.data.mySchool].prompts[i].text)
        }
      }
    }
    if(this.data.submittedProfile.personalStatement.content.length > 250) {
      for(var i=0;i<this.data.submittedProfile.personalStatement.content.length;++i)
        if(this.data.submittedProfile.personalStatement.content[i] != ' ') {
          hasEssay = true
          break
        }
    }
    for(var i=0;i<20;++i) {
      for(var j=0;j<this.data.submittedProfile.supplementalEssays[i].content.length;++j) {
        if(this.data.submittedProfile.supplementalEssays[i].content[j] != null && this.data.submittedProfile.supplementalEssays[i].content[j] != undefined && this.data.submittedProfile.supplementalEssays[i].content[j].length > 0) {
          for(var k=0;k<this.data.submittedProfile.supplementalEssays[i].content[j].length;++k)
            if(this.data.submittedProfile.supplementalEssays[i].content[j][k] != ' ') {
              hasEssay = true
              break
            }
        }
        if(hasEssay) break
      }
      if(hasEssay) break
    }
    if(!hasEssay) {
      wx.showToast({
        title: '请至少分享一篇文书',
        icon: 'none',
        duration: 1000
      })
      return
    }
    wx.showLoading({
      title: '提交中...',
      mask: true
    })
    db.collection("applicationProfiles").add({
      data: {
        year: this.data.year,
        school: this.data.essayPrompts[this.data.mySchool].names[0],
        scoreType: this.data.testOptions[this.data.scoreType],
        score: this.data.score,
        major: this.data.intendedMajor,
        personalStatement: this.data.submittedProfile.personalStatement,
        supplementalEssays: this.data.submittedProfile.supplementalEssays
      }
    }).then((res) => {
      wx.hideLoading({
        complete: (res) => {wx.reLaunch({
          url: '../profiles/profiles',
        })},
      })
      wx.showToast({
        title: '感谢您的提交 :)',
        icon: 'success',
        duration: 1000
      })
    })
  },

  /**
   * Lifecycle function--Called when page load
   */
  onLoad: function (options) {
    for(var i=0;i<this.data.submittedProfile.supplementalEssays.length;++i) this.data.submittedProfile.supplementalEssays[i] = {text: [], content: []}
  },

  /**
   * Lifecycle function--Called when page is initially rendered
   */
  onReady: function () {

  },

  /**
   * Lifecycle function--Called when page show
   */
  onShow: function () {

  },

  /**
   * Lifecycle function--Called when page hide
   */
  onHide: function () {

  },

  /**
   * Lifecycle function--Called when page unload
   */
  onUnload: function () {

  },

  /**
   * Page event handler function--Called when user drop down
   */
  onPullDownRefresh: function () {

  },

  /**
   * Called when page reach bottom
   */
  onReachBottom: function () {
    console.log(this.data.intendedMajor)
  },

  /**
   * Called when user click on the top right corner to share
   */
  onShareAppMessage: function () {

  },
  
  askForHelp: function() {
    wx.navigateTo({
      url: '../names/names',
    })
  }
})