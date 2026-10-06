// Content shared between pages. Facts here come from the owner; keep them that way.

export const credential = "Chair of E-ATP (European Association of Test Publishers), 2023";

export const sectors = [
  "IT certification",
  "University entrance",
  "Legal",
  "Medical",
  "Financial",
];

export const audiences = [
  {
    title: "Awarding bodies & assessment providers",
    body: "Organisations designing, delivering or modernising high-stakes exams, who want someone who knows how vendors work from the inside.",
  },
  {
    title: "Certification providers",
    body: "Professional and IT certification programmes delivering exams at scale, in test centres or online.",
  },
  {
    title: "Test platform vendors",
    body: "Companies building delivery, authoring or AI products who want an experienced view of what assessment providers really need.",
  },
];

export type Service = {
  slug: string;
  title: string;
  summary: string;
  detail: string;
  includes: string[];
};

export const services: Service[] = [
  {
    slug: "ai-in-assessment",
    title: "AI in assessment",
    summary:
      "Practical help using AI across the testing process, from content generation to automated test assembly.",
    detail:
      "I've led product teams building AI into assessment software and processes. I can help you work out where AI genuinely adds value, design the workflows and safeguards around it, and get it working in production.",
    includes: [
      "AI-assisted content generation and review",
      "Automated test assembly and enemy detection",
      "Designing the processes and quality controls around AI",
      "AI software and product development",
      "Using AI in marketing for testing products and services",
    ],
  },
  {
    slug: "assessment-design",
    title: "Assessment design & review",
    summary:
      "Designing new high-stakes assessments, or reviewing and revamping existing ones.",
    detail:
      "I've worked on large, high-stakes assessments at every stage, from initial design through to revamping long-running exams. Whether you're starting fresh or improving what you have, I'll help you get it right.",
    includes: [
      "New assessment design and blueprinting",
      "Independent reviews of existing assessments and programmes",
      "Revamping and modernising long-running exams",
      "Practical plans for what to change and in what order",
    ],
  },
  {
    slug: "content-development",
    title: "Content development",
    summary:
      "Building and running item writing, review and publishing processes that scale.",
    detail:
      "Having led a content development team, I know what it takes to produce high-quality items consistently. I can help you set up or improve the people, processes and tools behind your content.",
    includes: [
      "Item writing and review workflows",
      "Item bank structure and management",
      "Content team set-up and processes",
      "Quality assurance for test content",
    ],
  },
  {
    slug: "delivery-and-migration",
    title: "Delivery, operations & migration",
    summary:
      "Test centres, delivery models and moving exams from paper to screen or between platforms.",
    detail:
      "I started out setting up test centres and supporting clients through delivery, so I know the operational detail that decides whether exam day goes smoothly. I can help you plan a change and see it through.",
    includes: [
      "Paper-to-screen migration",
      "Moving between delivery platforms",
      "Test centre set-up and delivery models",
      "Operational processes and client support",
    ],
  },
  {
    slug: "platform-selection",
    title: "Platform selection",
    summary:
      "Choosing the right vendor and getting the best from them, with an insider's view of how vendors work.",
    detail:
      "Most of my career has been on the vendor side, so I know what to ask, what to look for and where the risks lie. I can help you define what you need, run a fair selection and set the relationship up well.",
    includes: [
      "Requirements and RFP support",
      "Vendor evaluation and selection",
      "Contract and implementation planning",
      "Improving an existing vendor relationship",
    ],
  },
  {
    slug: "vendor-strategy",
    title: "Product & strategy for vendors",
    summary:
      "Product direction and market insight for companies building assessment technology.",
    detail:
      "I've led product teams at the cutting edge of assessment technology and worked with assessment providers of every size. I can help you build what your customers actually need.",
    includes: [
      "Product strategy and roadmaps",
      "Understanding assessment provider needs",
      "Bid and proposal readiness",
      "Product team leadership and process",
    ],
  },
];

export const careerHighlights = [
  "Setting up test centres and supporting clients through delivery",
  "Leading a content development team",
  "Designing large, high-stakes assessments",
  "Leading product teams working at the cutting edge of technology, AI and assessment",
];
