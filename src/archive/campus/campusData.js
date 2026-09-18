export const CAMPUS_METRICS = [
  { label: 'Campus Nodes Live', value: '18+', sub: 'Premier institutes onboard' },
  { label: 'Verified Students', value: '42,800+', sub: '.edu & campus ID authenticated' },
  { label: 'Avg. Exchange Time', value: '< 14 mins', sub: 'Direct hostel-to-hostel handover' },
  { label: 'Student Value Saved', value: '₹38.5 Lakhs+', sub: 'Zero broker commission' },
];

export const PROBLEM_SNIPPETS = [
  {
    id: 1,
    source: "Hostel 7 - General Chat [482 unread]",
    sender: "Rohan_ECE_3rdYr",
    text: "Guys please stop spamming stickers!! Anyone selling Stewart Calculus 8th ed urgently before 2pm tomorrow???",
    time: "23:41",
    tag: "Lost in Spam",
    color: "bg-amber-50 border-amber-200 text-amber-900"
  },
  {
    id: 2,
    source: "Campus Buy/Sell 2026",
    sender: "Pooja_CS",
    text: "Selling cycle with basket + lock. DM on WhatsApp ONLY (don't reply here admin kicks). Price negotiable.",
    time: "08:15",
    tag: "Admin Kicked",
    color: "bg-red-50 border-red-200 text-red-900"
  },
  {
    id: 3,
    source: "Dorm B-Wing Notice Board",
    sender: "Arjun_Mech",
    text: "Looking for 1 frontend dev for Smart India Hackathon. Must know React + WebSockets. Deadline tonight!",
    time: "14:02",
    tag: "Deadline Panic",
    color: "bg-stone-100 border-stone-300 text-stone-800"
  },
  {
    id: 4,
    source: "Random Telegram Group",
    sender: "Unknown_User",
    text: "Beware of seller @rohit_99 paid ₹1200 for kettle on GPay and blocked me. Admin please ban.",
    time: "17:30",
    tag: "Scam Alert",
    color: "bg-rose-50 border-rose-200 text-rose-900"
  }
];

export const MARKETPLACE_CATEGORIES = [
  { id: 'all', label: 'All Listings', icon: 'Sparkles' },
  { id: 'books', label: 'Books & Core Notes', icon: 'BookOpen' },
  { id: 'tech', label: 'Tech & Electronics', icon: 'Laptop' },
  { id: 'dorm', label: 'Hostel & Dorm Gear', icon: 'Home' },
  { id: 'mobility', label: 'Cycles & Mobility', icon: 'Bike' },
  { id: 'lab', label: 'Lab Kits & Hardware', icon: 'Cpu' },
];

export const MARKETPLACE_ITEMS = [
  {
    id: 'item-1',
    title: 'iPad Air (5th Gen) M1 + Apple Pencil 2',
    category: 'tech',
    price: '₹34,500',
    originalPrice: '₹59,900',
    condition: 'Mint Condition',
    campus: 'IIT Bombay • Hostel 12',
    seller: 'Sneha M.',
    verified: true,
    badge: 'Under Warranty',
    description: 'Used solely for lecture annotations. Battery health 93%. Includes paper-like screen guard and magnetic folio.',
    tags: ['Tech', 'Apple', 'Notes'],
    image: 'https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=600&auto=format&fit=crop&q=80'
  },
  {
    id: 'item-2',
    title: 'Hero Sprint Pro 21-Speed Cycle (With U-Lock)',
    category: 'mobility',
    price: '₹3,800',
    originalPrice: '₹9,200',
    condition: 'Hostel Tested',
    campus: 'BITS Pilani • Shankar Bhavan',
    seller: 'Kavya S.',
    verified: true,
    badge: 'Same-day Pickup',
    description: 'Recently serviced gears and new brake pads. Perfect for morning lab sprints. Free heavy-duty steel U-lock.',
    tags: ['Cycle', 'Dorm Essential'],
    image: 'https://images.unsplash.com/photo-1485965120184-e220f721d03e?w=600&auto=format&fit=crop&q=80'
  },
  {
    id: 'item-3',
    title: 'Engineering Mathematics & Signals & Systems Bundle',
    category: 'books',
    price: '₹650',
    originalPrice: '₹1,850',
    condition: 'Handwritten Annotations Included',
    campus: 'Delhi University • North Campus',
    seller: 'Aditya R.',
    verified: true,
    badge: 'A+ Grade Notes',
    description: 'Oppenheim & Willsky + B.S. Grewal. Highlighted with chapter-wise summary cheat-sheets tucked inside.',
    tags: ['Semester Core', 'ECE', 'Math'],
    image: 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=600&auto=format&fit=crop&q=80'
  },
  {
    id: 'item-4',
    title: 'Pigeon Induction Cooktop + Prestige Kettle Set',
    category: 'dorm',
    price: '₹1,400',
    originalPrice: '₹3,600',
    condition: 'Working 100%',
    campus: 'NIT Trichy • Garnet Hostel',
    seller: 'Tanvi K.',
    verified: true,
    badge: 'Late Night Maggi Ready',
    description: 'Essential survival kit for exam season. Clean ceramic surface, 7 preset cooking modes, fast boil.',
    tags: ['Dorm Life', 'Kitchen'],
    image: 'https://images.unsplash.com/photo-1584269600519-112d071b35e6?w=600&auto=format&fit=crop&q=80'
  },
  {
    id: 'item-5',
    title: 'Raspberry Pi 4 (8GB) + IoT Sensor Expansion Kit',
    category: 'lab',
    price: '₹4,900',
    originalPrice: '₹8,500',
    condition: 'Like New',
    campus: 'IIIT Hyderabad • OBH',
    seller: 'Farhan Z.',
    verified: true,
    badge: 'Hardware Verified',
    description: 'Used for final year capstone demo. Comes with 64GB MicroSD pre-flashed, breadboard, and 12 sensor modules.',
    tags: ['Robotics', 'IoT', 'Capstone'],
    image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=600&auto=format&fit=crop&q=80'
  },
  {
    id: 'item-6',
    title: 'Sony WH-1000XM4 Noise Cancelling Headphones',
    category: 'tech',
    price: '₹12,800',
    originalPrice: '₹24,990',
    condition: 'Pristine with Case',
    campus: 'IIT Delhi • Aravali Hostel',
    seller: 'Meera P.',
    verified: true,
    badge: 'Library Essential',
    description: 'Total silence during semester cramming. Clean ear cushions, original aux cable and airplane adapter included.',
    tags: ['Audio', 'ANC', 'Focus'],
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=600&auto=format&fit=crop&q=80'
  }
];

export const OPPORTUNITIES = [
  {
    id: 'opp-1',
    role: 'Peer Tutor: Multivariable Calculus',
    type: 'Tutoring Gig',
    compensation: '₹500 / hr',
    hours: '4 hrs/week',
    requester: 'Prof. Sharma\'s TA Group',
    campus: 'IIT Kharagpur',
    description: 'Assist 1st year batch with weekly tutorial sheets and problem sets. Must have scored A- or above in MA10001.',
    badge: 'Academic Credit / Cash',
    tags: ['Math', 'Teaching', 'Flexible']
  },
  {
    id: 'opp-2',
    role: 'UI/UX Designer for FinTech Campus App',
    type: 'Student Project Collab',
    compensation: 'Equity / Rev-Share',
    hours: 'Weekend Sprints',
    requester: 'E-Cell Incubated Team',
    campus: 'BITS Goa',
    description: 'Building a micro-saving app for college students. Seeking a Figma wizard to design intuitive onboarding and transaction flows.',
    badge: 'Portfolio Winner',
    tags: ['Design', 'Figma', 'Startup']
  },
  {
    id: 'opp-3',
    role: 'Flatmate for 3BHK Apartment (Ensuite Room)',
    type: 'Housing & Living',
    compensation: '₹7,500 / mo',
    hours: 'Immediate Move-in',
    requester: '3rd Year Econ Students',
    campus: 'St. Stephen\'s / North Campus',
    description: 'Furnished room with balcony, high-speed WiFi, and cook already arranged. 5 minutes walk from metro station.',
    badge: 'Verified Roommates',
    tags: ['Housing', 'No Broker', 'Metro Access']
  },
  {
    id: 'opp-4',
    role: 'ML Engineer: Fine-Tuning Whisper for Accents',
    type: 'Research Assistant',
    compensation: '₹12,000 Stipend',
    hours: '10 hrs/week',
    requester: 'Speech Processing Lab',
    campus: 'IIIT Delhi',
    description: 'Collect campus dialect dataset and benchmark multilingual speech recognition models under Prof. Anand.',
    badge: 'Research Paper Co-Author',
    tags: ['AI/ML', 'PyTorch', 'Research']
  }
];

export const ASCII_AVATARS = {
  aravind: `
    .---.
   /     \\
  | () () |
   \\  -  /
    '---'
  `,
  ananya: `
    .-""-.
   / .--. \\
  / /    \\ \\
  | | () | |
   \\ \\__/ /
    '----'
  `,
  vikram: `
   [=====]
   | . . |
   |  ^  |
   | === |
    '---'
  `
};

export const TESTIMONIALS = [
  {
    id: 1,
    quote: "Last year I had to join 12 different WhatsApp groups just to buy a used lab coat and a cycle. Half the messages were random memes and spam. Jugarr got me a cycle from a senior in my exact dorm wing within 20 minutes.",
    author: "Aravind Chennupati",
    role: "B.Tech Mechanical '25",
    campus: "IIT Bombay",
    handle: "@aravind_c",
    ascii: `
 [ o   o ]
   \\ - /  
  ===|=== 
    `
  },
  {
    id: 2,
    quote: "Found my Smart India Hackathon frontend teammate on Jugarr’s opportunity radar. We built our demo over two night outs in the canteen and ended up winning the runner-up prize. It's how college collaboration should always work.",
    author: "Ananya Deshmukh",
    role: "Dual Degree CS '26",
    campus: "BITS Pilani",
    handle: "@ananya_codes",
    ascii: `
  { *   * }
    ( _ )  
   --| |---
    `
  },
  {
    id: 3,
    quote: "Sold all my semester textbooks and induction cooktop on the day of graduation without having to paste paper flyers on dorm pillars or haggling with shady outside scrap dealers. Clean, safe, and student-verified.",
    author: "Vikram Singhania",
    role: "MBA Candidate '24",
    campus: "Delhi University FMS",
    handle: "@vikram_s",
    ascii: `
  [ ^   ^ ]
    \\ = /  
   --o-o---
    `
  }
];

export const FAQ_ITEMS = [
  {
    q: "How does Jugarr ensure safety on campus?",
    a: "Every single user must authenticate via their institutional email address (.edu / .ac.in / college domain) or submit their student ID. No anonymous outsiders or commercial spammers can list items."
  },
  {
    q: "Does Jugarr take a cut or commission from sales?",
    a: "Zero percent. Jugarr is built by students, for students. Peer-to-peer exchanges happen directly between classmates in hostels, libraries, or campus hubs via cash or direct UPI."
  },
  {
    q: "What can I post on Jugarr?",
    a: "Textbooks, lab instruments, cycles, electronics, dorm appliances, hostel room sublets, hackathon partner requests, peer tutoring gigs, and student club notices."
  },
  {
    q: "How do I bring Jugarr to my university?",
    a: "Join our campus ambassador program or sign up for the early access waitlist. Once 100 students from your college verify, your campus node is automatically activated."
  }
];
