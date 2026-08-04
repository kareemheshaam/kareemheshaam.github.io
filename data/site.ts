export const siteConfig = {
  name: "Kareem Hesham",
  role: "Python Automation, Web Scraping & Backend Engineer",
  description:
    "Python engineer building production-grade automation systems, backend APIs, and data acquisition pipelines — with a peak delivery of a million records in a day from direct protocol access, no browser, no DOM.",
  url: "https://kareemheshaam.github.io",
  email: "karim.hesham1852@gmail.com",
  phone: "+20 106 812 3686",
  phoneHref: "+201068123686",
  location: "Cairo, Egypt",
  github: "https://github.com/kareemheshaam",
  linkedin: "https://linkedin.com/in/kareemheshaam",
  medium: "https://medium.com/@kareem.hesham",
  resume: "/Kareem-Hesham-Resume.pdf",
  portrait: "/kareem-hesham.webp",
  avatar: "/kareem-hesham-avatar.webp",
  references: "https://app.zincwork.com/user/profile/a3eab923a54240039e0fae6e24c9480f",
} as const;

export const navItems = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Research", href: "#research" },
  { label: "Articles", href: "#articles" },
  { label: "References", href: "#references" },
  { label: "Credentials", href: "#certifications" },
  { label: "Contact", href: "#contact" },
] as const;

export type Project = {
  slug: string;
  index: string;
  name: string;
  status?: string;
  description: string;
  longDescription: string;
  repository: string;
  language: string;
  stack: string[];
  features: string[];
  architecture: string[];
  codeLanguage: "python" | "javascript";
  codeFilename: string;
  code: string;
};

export const projects: Project[] = [
  {
    slug: "capture2tls",
    index: "01",
    name: "capture2tls",
    description:
      "A zero-dependency converter from raw proxy captures to fingerprint-aware Python request code.",
    longDescription:
      "capture2tls turns HTTP/1.1 or HTTP/2 requests copied from Charles Proxy into ready-to-run tls_client or curl_cffi sessions. It preserves the subtle request characteristics that generic generators drop—including header order and protocol selection.",
    repository: "https://github.com/kareemheshaam/capture2tls",
    language: "Python",
    stack: ["Python", "HTTP/1.1", "HTTP/2", "tls_client", "curl_cffi", "Charles Proxy"],
    features: [
      "Converts 95%+ of captures without manual correction",
      "Parses HTTP/1.1 and HTTP/2 pseudo-headers",
      "Separates cookies into an explicit session dictionary",
      "Detects JSON and form request bodies",
      "Preserves header order and protocol intent",
    ],
    architecture: [
      "A format detector selects the correct request parser.",
      "A normalized request model separates method, URL, headers, cookies, and body.",
      "The generator emits readable Python instead of an opaque runtime wrapper.",
      "Only the standard library is required to run the converter.",
    ],
    codeLanguage: "python",
    codeFilename: "generated_request.py",
    code: `session = tls_client.Session(
    client_identifier="okhttp4_android_13",
    random_tls_extension_order=True,
)
headers = {"Accept": "application/json", "User-Agent": user_agent}
session.header_order = list(headers.keys())
session.force_http1 = True
response = session.get(url, headers=headers, cookies=cookies)`,
  },
  {
    slug: "jsunveil",
    index: "02",
    name: "jsunveil",
    description:
      "A pattern-based JavaScript deobfuscator that survives regenerated identifiers, alphabets, and rotation offsets.",
    longDescription:
      "jsunveil targets string-array obfuscation by structure rather than by sample. It extracts only the table and decoder, evaluates them inside a sealed Node.js sandbox, then uses Babel to inline recovered values and strip common decoys.",
    repository: "https://github.com/kareemheshaam/jsunveil",
    language: "JavaScript",
    stack: ["Node.js", "Babel", "AST", "vm sandbox", "Static analysis", "JavaScript"],
    features: [
      "Locates randomized string tables and decoder functions",
      "Executes only the minimum code inside an isolated VM",
      "Inlines decoder calls through an AST transformation",
      "Removes dead branches and common self-defending wrappers",
    ],
    architecture: [
      "Structural matching identifies stable obfuscation shapes.",
      "A restricted evaluator reconstructs the plaintext string map.",
      "Babel traversals replace literal decoder calls deterministically.",
      "A final cleanup pass emits readable, formatted JavaScript.",
    ],
    codeLanguage: "javascript",
    codeFilename: "src/deobfuscate.js",
    code: `const sandbox = {};
vm.createContext(sandbox);
vm.runInContext(decoderSource, sandbox, { timeout: 1000 });

const strings = new Map();
for (let i = 0; i < sandbox.__arr.length; i += 1) {
  strings.set(i, sandbox.__decode(i));
}
return inlineDecoderCalls(ast, strings);`,
  },
  {
    slug: "api-automation-platform",
    index: "03",
    name: "API Automation Platform",
    status: "Reference project",
    description:
      "A production-minded FastAPI foundation for authenticated API integrations and background synchronization workflows.",
    longDescription:
      "A layered backend service built around clear boundaries: HTTP routing, domain services, data repositories, and typed schemas. The authentication and user-management core is complete and CI-tested; scheduled API synchronization is the next milestone. It is published as a working reference for how I structure a backend.",
    repository: "https://github.com/kareemheshaam/api-automation-platform",
    language: "Python",
    stack: ["FastAPI", "SQLAlchemy 2.0", "PostgreSQL", "Alembic", "Docker", "pytest"],
    features: [
      "OAuth2 password flow with JWT access tokens",
      "Typed API boundaries with Pydantic",
      "Versioned migrations and containerized PostgreSQL",
      "CI-tested against Python 3.11-3.13",
    ],
    architecture: [
      "Routers translate HTTP requests into domain operations.",
      "Services own business rules without persistence concerns.",
      "Repositories isolate SQLAlchemy access and keep tests focused.",
      "Pydantic schemas define contracts at every external boundary.",
    ],
    codeLanguage: "python",
    codeFilename: "app/api/v1/auth.py",
    code: `@router.post("/login", response_model=Token)
def login(
    form: OAuth2PasswordRequestForm = Depends(),
    service: AuthService = Depends(get_auth_service),
) -> Token:
    user = service.authenticate(form.username, form.password)
    return Token(access_token=create_access_token(user.id))`,
  },
];

export const skillGroups = [
  {
    title: "Backend",
    description: "Typed, observable services with clean data boundaries.",
    skills: ["Python", "FastAPI", "SQLAlchemy", "PostgreSQL", "Alembic", "REST APIs", "JWT", "Pydantic"],
  },
  {
    title: "Automation",
    description: "Browser and request-level systems built for resilience.",
    skills: ["Playwright", "Selenium", "Scrapy", "requests", "asyncio", "CDP"],
  },
  {
    title: "Networking",
    description: "Protocol-aware data acquisition beyond the happy path.",
    skills: ["HTTP", "HTTP/2", "TLS", "Cookies", "Sessions", "Headers", "Proxy Rotation", "Burp Suite", "Charles"],
  },
  {
    title: "Reverse Engineering",
    description: "Recovering behavior from protected web and mobile clients.",
    skills: ["JavaScript", "Node.js", "Babel", "AST", "Frida", "JADX", "Android"],
  },
  {
    title: "Infrastructure",
    description: "Repeatable delivery, tests, and operational foundations.",
    skills: ["Docker", "Linux", "GitHub Actions", "pytest", "Git", "CI/CD"],
  },
] as const;

export const articles = [
  {
    number: "01",
    title: "I Spent a Week Inside a Top-Tier Web Anti-Bot Stack",
    href: "https://medium.com/@kareem.hesham/i-spent-a-week-inside-a-top-tier-web-anti-bot-stack-heres-what-i-found-4d8b67166f07",
    category: "Web security research",
    summary:
      "A practical teardown of layered anti-bot infrastructure: rotating JavaScript, device fingerprinting, behavioral signals, and reproducing a headless challenge outside the browser.",
  },
  {
    number: "02",
    title: "An Infinite Loop in Samsung's UltraHDR Stack",
    href: "https://medium.com/@kareem.hesham/an-infinite-loop-in-samsungs-ultrahdr-stack-59a779a5b21b",
    category: "Mobile security research",
    summary:
      "A CWE-835 denial-of-service finding traced through arm64 reverse engineering and validated through coverage-guided fuzzing with AFL++.",
  },
] as const;

export const certifications = [
  {
    name: "Build REST APIs with FastAPI",
    issuer: "LinkedIn Learning",
    href: "https://www.linkedin.com/learning/certificates/83ea2e9bd9f79c85a69510d45eba4cf175f18e88368e7196e8a414bbca30364c",
  },
  {
    name: "Practical GitHub Actions",
    issuer: "GitHub and LinkedIn Learning",
    href: "https://www.linkedin.com/learning/certificates/14ea9ecf33e04c92bbb1301a3129e6cde56bdca1df0363225dd3cf2f020bbf5d",
  },
  {
    name: "Docker Foundations Professional Certificate",
    issuer: "Docker and LinkedIn Learning",
    href: "https://www.linkedin.com/learning/certificates/3db9478161bda7e59bf9e2d439889207c51c88e56339f3c8313f56c06d4d10e7",
  },
] as const;

export const experience = {
  title: "Independent Python Automation & Backend Engineer",
  period: "2022 — Present",
  engagement: "Freelance · Contract",
  location: "Cairo, Egypt · Remote",
  disciplines: "Automation · Data acquisition · Reverse engineering · Backend APIs",
  summary:
    "Contract engagements rather than salaried roles — embedded in teams of roughly two to six engineers alongside data scientists and ML engineers, delivering against their requirements and review.",
  bullets: [
    "Build request-level automation that reproduces protected client behavior without a browser or DOM — one engagement delivered 1M records in a day from ~10K direct HTTP requests.",
    "Reverse engineer client-side signatures, dynamic tokens, fingerprint challenges, and Android application flows across 600+ distinct targets.",
    "Handle bot-mitigation and verification flows across roughly 30 challenge types, working only on client-authorized targets and strictly within the contracted engagement scope.",
    "Diagnose and ship fixes within 6–24 hours when a target changes its protections, keeping delivery pipelines running.",
    "Design typed FastAPI services with layered architecture, PostgreSQL persistence, Alembic migrations, JWT authentication, and pytest coverage.",
    "Develop resilient acquisition pipelines with session control, proxy rotation, and rate-limit handling — largest single delivery was 60GB across 35M validated rows.",
    "Collaborate with data scientists and ML engineers on scoped deliveries, coordinating tasks and shipping on schedule.",
    "Turn investigation tooling into documented open-source utilities and publish the underlying technical research.",
  ],
  provenance:
    "All work was performed under client contract, on systems the client was authorized to access and within the agreed scope. Figures span engagements between 2022 and 2026; client names and target systems are covered by confidentiality agreements, with specifics available on request under NDA.",
} as const;

export const resumeProfile =
  "Python engineer building production-grade automation systems, backend APIs, and data acquisition pipelines. Specializes in request-level automation and protocol analysis — reading APIs directly instead of driving a browser, which is what made a peak day of one million records from ten thousand requests possible. Published security researcher; three independently verified professional references.";

export const impact = [
  {
    value: "1M",
    unit: "records",
    label: "Peak day",
    detail: "Delivered from ~10K direct HTTP requests — roughly 100 records per call, no browser or DOM rendering.",
  },
  {
    value: "600+",
    unit: "targets",
    label: "Sites and APIs",
    detail: "Distinct scrapers built against production targets across varied protections and response formats.",
  },
  {
    value: "60GB",
    unit: "35M rows",
    label: "Largest delivery",
    detail: "Single dataset acquired, validated, and handed off in a structured format.",
  },
  {
    value: "30",
    unit: "providers",
    label: "Challenge types",
    detail: "Verification and bot-mitigation flows handled on client-authorized targets, within contracted scope.",
  },
  {
    value: "6-24h",
    unit: "recovery",
    label: "Defense changes",
    detail: "Typical turnaround to diagnose and ship a fix when a target changed its protections.",
  },
  {
    value: "95%+",
    unit: "accuracy",
    label: "capture2tls output",
    detail: "Share of captures converted to working request code without manual correction.",
  },
] as const;

export const education = {
  degree: "Bachelor of Laws (LL.B.)",
  institution: "Cairo University",
  period: "2018 — 2023",
  note: "Two things carry over. The first is practical: I can read a terms of service, a data processing agreement, or a scraping engagement scope and say where the line is before any code is written — which matters in this field. The second is the habit itself — close reading under adversarial conditions, where rules, exceptions, and edge cases decide the outcome. A protocol specification reads the same way.",
  reference: {
    name: "Ayman Al-Saadany",
    title: "Assistant Professor of Public Law, Cairo University",
    href: "https://orcid.org/0009-0008-5619-1674",
  },
} as const;

export const testimonials = [
  {
    quote:
      "Based on my experience working with him, I would gladly collaborate with him again.",
    context:
      "He was responsible for collecting and organizing data, performing analysis, solving technical challenges, and ensuring tasks were completed on schedule.",
    name: "Mohamed Wageh",
    title: "Data Scientist",
    href: "https://www.linkedin.com/in/mohamed-wageh-8770b7302/",
  },
  {
    quote:
      "I would feel confident having him on the team again because of his professionalism, reliability, and collaborative approach.",
    context:
      "His role involved managing technical tasks, analyzing project requirements, contributing to problem-solving, and making sure his assigned work was completed accurately and on time.",
    name: "Seif Eldin Hatem",
    title: "Machine Learning Engineer",
    href: "https://www.linkedin.com/in/seif-eldin-hatem-abdelwahab-ab062125a/",
  },
  {
    quote:
      "I would be happy to collaborate with him again on future projects.",
    context:
      "We collaborated on several professional projects, working together to deliver high quality results.",
    name: "Youssef Abdelhamid",
    title: "Web Scraper",
    href: "https://www.linkedin.com/in/youssef-adel-abdelhamid-436a10345/",
  },
] as const;

export const languages = [
  { name: "Arabic", level: "Native" },
  { name: "English", level: "Professional working proficiency" },
] as const;
