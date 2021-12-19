import algorithmArtbookImg from './assets/algorithm-artbook.png';
import inventorySetImg from './assets/inventory-set.png';
import anonifyImg from './assets/anonify.png';
import gipostImg from './assets/gipost.png';

export const projects = [
  {
    image: algorithmArtbookImg,
    title: 'Algorithm Artbook',
    description:
      'Gallery of artistic visualizations of various algorithms implemented in JavaScript. \
      Technologies: Node.js, Express.js, JavaScript, HTML, CSS.',
    liveUrl: 'https://algorithmartbook.herokuapp.com',
    codeUrl: 'https://github.com/feyzanaydemir/algorithm-artbook',
  },
  {
    image: gipostImg,
    title: 'Gipost',
    description:
      'Social media application for sharing art related content. \
      Features: Posting, commenting, liking, saving, deleting, searching, following, customizable profile pages, account update options. \
      Technologies: React, Node.js, Express.js, MongoDB, CSS.',
    liveUrl: 'https://gipost.herokuapp.com',
    codeUrl: 'https://github.com/feyzanaydemir/gipost',
  },
  {
    image: inventorySetImg,
    title: 'Inventory Set',
    description:
      'Inventory management system which provides stock control and item tracking. \
      Features: Custom item categorizing, filtered searching, adding new items and categories, editing existing information. \
      Technologies: React, Node.js, Express.js, MongoDB, CSS.',
    liveUrl: 'https://inventoryset.herokuapp.com',
    codeUrl: 'https://github.com/feyzanaydemir/inventory-set',
  },
  {
    image: anonifyImg,
    title: 'Anonify',
    description:
      'Anonymous messaging application. \
      Features: User authentication and authorization with JWT, restricted author and timestamp visibility, account upgrades via membership and moderation codes. \
      Technologies: Node.js, Express.js, MongoDB, CSS.',
    liveUrl: 'https://anonify.herokuapp.com',
    codeUrl: 'https://github.com/feyzanaydemir/anonify',
  },
];
