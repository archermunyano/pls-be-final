const config = {
  /* 
  ████████████████████████████████████████
  🔧 BASIC SETTINGS (EDIT FREELY)
  ████████████████████████████████████████
  */

  // 🔐 Passcode Page
  correctPasscode: "0728", // Change this to any 4-digit code (the passcode for access)
  passcodeTitle: "Mamalihug lang sakos password bb", // Title displayed on the passcode entry page
  successMessage: "Niceka Gwapa:)", // Message shown upon successful passcode entry
  redirectMessage: "Redirecting...", // Message displayed while redirecting after success
  incorrectPasscodeMessage: "Incorrect passcode, hint: your birthday!", // Message shown for incorrect passcode
  cancelButtonText: "Cancel", // Text for the cancel button

  // 🔍 Question Page
  searchPlaceholder: "Search Google or type a URL", // Placeholder text in the search input
  trendingTitle: "Trending searches", // Title for the trending searches section
  trendingSearches: [
    "When is Shelby's Birthday?", // Example trending search query
    "Asa mani padulong? dejk", // Another example query
    `What is Shelby's course?`, // A personalized trending search
  ],
  proTip: 'Pro tip: try searching "How long have we been talking?"', // Helpful tip for users

  // ⏳ Timer Page
  anniversaryDate: "2025-06-11", // 📅 Set your anniversary date here (used for the timer)
  timerTitle: "We've been talking for:", // Title displayed on the timer page
  timerMessage: "Laysho laysho ", // Message shown alongside the timer
  timeUnits: {
    days: "15 Days", // Label for days in the timer
    hours: " 12 Hours", // Label for hours in the timer
    minutes: "12 Minutes", // Label for minutes in the timer
    seconds: "7 Seconds", // Label for seconds in the timer
  },

  // 📸 Recap Page
  recapTitle: "Let's recap our time together", // Title for the recap page
  clickMeText: "Click me!", // Text prompting users to interact

  recapSections: [
    { label: "Messages", path: "/recap/message", icon: "Message" }, // Section for messages
    { label: "Pictures", path: "/recap/pictures", icon: "Image" }, // Section for pictures
    { label: "Music", path: "/recap/music", icon: "Music" }, // Section for music
  ],

  // 🎵 Music Page
  musicTitle: "Songs that remind me of you", // Title for the music page
  musicGallery: [
    {
      title: "Folded", // Title of the song
      artist: "Kehlani", // Artist of the song
      left: "5%", // Positioning on the page
      top: "5%", // Positioning on the page
    },
    {
      title: "Prinsesa",
      artist: "6CycleMind",
      left: "40%",
      top: "15%",
    },
    {
      title: "Let's Do it Again",
      artist: "J Boog",
      left: "15%",
      top: "40%",
    },
    {
      title: "Distraction",
      artist: "Kehlani",
      left: "30%",
      top: "75%",
    },
    {
      title: "Snooze",
      artist: "SZA",
      left: "5%",
      top: "65%",
    },
    {
      title: "Straight up & Down",
      artist: "Bruno Mars",
      left: "25%",
      top: "90%",
    },
    {
      title: "urs",
      artist: "NIKI",
      left: "35%",
      top: "50%",
    },
    {
      title: "boyfriend",
  artist: "Arianna Grande, Social House",
      left: "10%",
      top: "25%",
    },
  ],

    // 📝 Message Recap Page
    messageTitle: "Our Messages", // Title for the messages recap page
    messageGallery: [
      { title: "June 11, 2025", description: "1st day nagkaila ta, first day sab nakos surigao, pakapin first kiss pa tunods shotgun (dito chula kay wani move imo lips lage) pero kahapit japon og goodbye kiss hehe" }, // Message entry
      { title: "June 12, 2025", description: "Despiras day ni, 2nd day nato, mao sab asa ko nangutana nimos simple question na (unsa may plano nmo ani?) HAHAHAHAHHAHAHAH" },
      { title: "June 14, 2025", description: "Both the worst and the best day, as mao ning last nato kita, but also asa naka daginut jud kog ila2 nimog maayo, gwapa, also this is still my favorite picture of you kaayo" },],
  
    // 📸 Picture Recap Page
    pictureTitle: "Our Pictures", // Title for the pictures recap page
    pictureGallery: [
      { title: "Surf Camp", description: "Kuwang patag pictures gwapa" }, // Picture entry
      { title: "Lanusa", description: "Yahak wajud tay pictures kaayo" },
      { title: "Surigao", description: "Hahays jawa wajud kaayo" },
    ],
  

  // 💌 Love Letter Page
  loveLetterMessage: "Congratulations, Miss Shelby Eliane Espinosa Bagcat!", // Message displayed on the love letter page

  // 🎇 Closing Page
  closingMessage: "Congratulations on your farewell from school, As one door closes, another opens. Need not worry as life will treat you well, Gwapa :)", // Closing message displayed

  /* 
  ████████████████████████████████████████
  ⚠️ ADVANCED SETTINGS (DO NOT TOUCH UNLESS YOU KNOW WHAT YOU'RE DOING)
  ████████████████████████████████████████
  */

  // 📌 Paths (Only change if you are a developer or modifying routes)
  redirectPath: "/question", // Path to redirect after passcode entry
  timerRedirectPath: "/timer", // Path to redirect to the timer page
  questionRedirectPath: "/question", // Path to redirect to the question page
  recapRedirectPath: "/recap", // Path to redirect to the recap page
  recapPreviousPage: "/timer", // Path to the previous page in the recap
  recapNextPage: "/letter", // Path to the next page in the recap
  letterNextPage: "/closing", // Path to the next page after the letter
  letterPreviousPage: "/letter", // Path to the previous page before the letter
  previousPageText: "Previous page", // Text for the previous page button
  nextPageText: "Next page", // Text for the next page button

  // 🔍 Search Queries (Only change if modifying search functionality)
  correctSearchQueries: [
    "How long have we been talking?", // Example of a correct search query
    "how long have we been talking?", // Another example of a correct search query
  ],
};

export default config;
