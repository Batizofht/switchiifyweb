export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  category: 'Product' | 'Engineering' | 'Design' | 'Research' | 'Company';
  date: string;
  readTime: string;
  image: string;
  author: string;
  content: string;
}

export const blogPosts: BlogPost[] = [
  {
    slug: 'building-gamingar-engine',
    title: 'How We Built the Gamingar Engine from Scratch',
    excerpt: 'The Gamingar engine required rethinking how game input works at a fundamental level. We didn\'t start with Unity or Unreal — we started with a blank page.',
    category: 'Engineering',
    date: 'Jun 14, 2026',
    readTime: '8 min read',
    image: '/designing_images_support/9e07b2c911929de5c523877a2ee3071f017b3893.png',
    author: 'Switchiify Engineering',
    content: `
<h2>The Problem with Existing Engines</h2>
<p>When we started building Gamingar, the first question wasn't "which engine should we use?" It was "do any of these engines actually solve what we're trying to do?" The answer, after weeks of prototyping, was no.</p>
<p>Existing game engines are built around a set of assumptions that made sense in 2010: input is binary, rendering pipelines are fixed, and the game loop runs at a constant tick. Gamingar needed something different — an engine that treats input as a continuous signal, not a discrete event.</p>
<h2>The Technical Challenge</h2>
<p>The core innovation in the Gamingar engine is what we call Adaptive Input Resolution (AIR). Instead of mapping button presses to actions, AIR treats every input device as a stream of state data. The engine then runs a small inference model on that stream to determine intent.</p>
<p>This sounds expensive. In practice, the inference model is small enough to run at 4000Hz on commodity hardware — fast enough that the player never perceives it as latency.</p>
<h2>What We Learned</h2>
<p>The biggest lesson from building Gamingar's engine was that performance comes from architecture, not optimization. We spent the first six months getting the architecture right. The last three months were spent making sure we hadn't broken anything. The optimization happened mostly for free, as a consequence of the architecture we'd chosen.</p>
    `,
  },
  {
    slug: 'neuro-ai-behavioral-learning',
    title: 'How Neuro AI Learns Your Behavior Without Watching You',
    excerpt: 'Privacy-preserving behavioral learning is one of the hardest problems in applied AI. Here\'s how we solved it for Neuro AI.',
    category: 'Research',
    date: 'Jun 8, 2026',
    readTime: '6 min read',
    image: '/designing_images_support/8bf4e5a95ca1f8f7420629a049ac50a82730cdd9.png',
    author: 'Neuro AI Research Team',
    content: `
<h2>The Privacy Paradox of Personalized AI</h2>
<p>Every personalized AI system faces the same fundamental tension: to learn about you, it needs to observe you. But observation is inherently a privacy risk. Most AI companies resolve this tension by simply not caring about the second part.</p>
<p>We cared. So we had to find a different way.</p>
<h2>Federated Pattern Recognition</h2>
<p>Neuro AI uses what we call Federated Pattern Recognition — a technique that learns behavioral patterns from the structure of your actions, not the content of them. The system never stores what you said or did. It stores only the shape of when and how you engaged.</p>
<p>In practice, this means Neuro AI can predict that you prefer concise responses in the morning and detailed explanations in the evening — without ever reading a single message you sent.</p>
<h2>Why This Matters</h2>
<p>The goal was never to build an AI that knows everything about you. It was to build an AI that knows enough to be useful, without knowing so much that it becomes a liability. We think we got there — and we're publishing our methodology so others can build on it.</p>
    `,
  },
  {
    slug: 'designing-openspace',
    title: 'Inside the Design Process for OpenSpace',
    excerpt: 'OpenSpace went through 14 major design revisions before we shipped v1. Here\'s what we learned about designing for collaboration.',
    category: 'Design',
    date: 'Jun 1, 2026',
    readTime: '5 min read',
    image: '/designing_images_support/55efb200a4d135e0643e3adcd64d0f7ddd200650.png',
    author: 'Switchiify Design',
    content: `
<h2>The First Version Was Wrong</h2>
<p>OpenSpace v0.1 looked like every other collaborative tool on the market. It had a sidebar, a main content area, and a list of people. It was correct in every obvious way and wrong in every interesting one.</p>
<p>The core problem: we had designed a tool for sharing documents, when what teams actually need is a tool for sharing context. Those are very different problems.</p>
<h2>Designing for Context, Not Content</h2>
<p>The breakthrough came when one of our designers asked a simple question: "what does a team actually need to see to make a good decision together?" The answer wasn't "a document." It was a combination of information, history, and relationship — context.</p>
<p>OpenSpace v2 was built around this insight. The primary unit of organization isn't a file or a channel — it's a workspace, which holds all three things together.</p>
<h2>What Shipped</h2>
<p>The version we shipped still has a sidebar. Some things are just ergonomic. But the logic underneath — the way information flows, the way history is preserved, the way context is surfaced at the right moment — is completely different from what we started with. That's what took 14 revisions.</p>
    `,
  },
  {
    slug: 'switchiify-engineering-culture',
    title: 'The Engineering Culture at Switchiify',
    excerpt: 'We don\'t have a mission statement. We have a set of practices that make good work more likely — and bad habits harder to form.',
    category: 'Company',
    date: 'May 24, 2026',
    readTime: '4 min read',
    image: '/designing_images_support/d6f2f0257bd6d10a7a0f2a6b97d6b36dd117cbea.png',
    author: 'Switchiify Team',
    content: `
<h2>What We Actually Do</h2>
<p>Most engineering culture documents describe aspirations. This isn't that. This is a description of what actually happens at Switchiify on any given Tuesday.</p>
<p>We ship every two weeks. Every engineer owns at least one thing end-to-end. We don't have code review as a gatekeeping mechanism — we have code review as a learning mechanism. The distinction matters.</p>
<h2>How We Make Decisions</h2>
<p>Decisions at Switchiify are made by the person closest to the problem, not the person with the highest title. This works because we invest heavily in making sure the person closest to the problem is also well-informed — not just about the technical constraints, but about the customer context and the business implications.</p>
<p>It fails when that person isn't informed enough to make a good call. So our job as a leadership team is largely to make sure that doesn't happen.</p>
<h2>What We're Still Working On</h2>
<p>We don't have this figured out. Our onboarding takes too long. Our documentation isn't good enough. We promote too slowly and sometimes too quickly. Every quarter we identify two or three things to get better at, and we try to make sure we don't improve the same things twice.</p>
    `,
  },
  {
    slug: 'rwanda-tech-ecosystem',
    title: 'Building a Technology Company in Rwanda',
    excerpt: 'Rwanda in 2026 is not the Rwanda of twenty years ago. Here\'s what building Switchiify from Kigali taught us about the global tech industry.',
    category: 'Company',
    date: 'May 16, 2026',
    readTime: '7 min read',
    image: '/designing_images_support/9e07b2c911929de5c523877a2ee3071f017b3893.png',
    author: 'Switchiify Founders',
    content: `
<h2>The Assumption We Kept Encountering</h2>
<p>When we started Switchiify, the most common question we got from investors wasn't about our technology or our market. It was: "why are you doing this in Rwanda?" The assumption embedded in that question — that serious technology companies are built in specific places — is one we've spent four years proving wrong.</p>
<h2>What Kigali Gave Us</h2>
<p>Building in Kigali forced us to solve problems that companies in San Francisco can ignore. Internet reliability. Power consistency. Access to hardware for testing. We solved all of them — and the solutions we built in the process turned out to be useful for our customers in markets with similar constraints.</p>
<p>The biggest advantage of building in Rwanda wasn't infrastructure. It was perspective. We built for users in markets that most tech companies treat as afterthoughts. When you start with those users, you make different design decisions — and those decisions tend to be better.</p>
<h2>Where We're Going</h2>
<p>Switchiify is a global company now, with team members in twelve countries. But our headquarters is still in Kigali, and that's intentional. We want to keep building products that work for the widest possible range of people — and we've found that staying connected to our origin helps us do that.</p>
    `,
  },
  {
    slug: 'building-for-next-billion-users',
    title: 'Designing for the Next Billion Users',
    excerpt: 'The users who will define the next decade of technology are not the users who defined the last one. Here\'s how we build for them.',
    category: 'Product',
    date: 'May 5, 2026',
    readTime: '6 min read',
    image: '/designing_images_support/55efb200a4d135e0643e3adcd64d0f7ddd200650.png',
    author: 'Product Team',
    content: `
<h2>The Market the Industry Ignores</h2>
<p>There are roughly four billion people who will access the internet for the first time in the next ten years. Most of them will do so on a mid-range Android device, on a mobile network, in a language that isn't English. Most technology companies design for the people already online.</p>
<p>We don't. Every product decision at Switchiify starts with a question: does this work for someone in Nairobi on a $150 phone? If the answer is no, we go back and figure out why.</p>
<h2>The Constraints That Improve Products</h2>
<p>Designing for constrained environments is genuinely hard. But it turns out that products designed for constrained environments are often better for everyone. When you optimize for a 2G connection, your product is also faster on a 5G connection. When you design for a 4-inch screen, your layout works on a 12-inch screen too.</p>
<p>Constraints don't limit good design. They focus it.</p>
<h2>Our Principles</h2>
<p>Three things guide every product decision at Switchiify: Does it load fast? Does it work offline? Does it respect the user's data? These aren't aspirational principles. They're tests every feature has to pass before it ships.</p>
    `,
  },
];
