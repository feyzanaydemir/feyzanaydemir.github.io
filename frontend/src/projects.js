import processingGalleryImg from './assets/processing-gallery.png';
import inventorySetImg from './assets/inventory-set.png';
import anonifyImg from './assets/anonify.png';
import gipostImg from './assets/gipost.png';

export const projects = [
  {
    image: processingGalleryImg,
    title: 'Processing Gallery',
    description:
      'Collection of artistically visualized algorithms implemented in Python using Processing. \
      Technologies: Python, Processing, Node.js, Express.js, CSS, EJS.',
    liveUrl: 'https://processinggallery.onrender.com',
    codeUrl: 'https://github.com/feyzanaydemir/processing-gallery',
  },
  {
    image: gipostImg,
    title: 'Gipost',
    description:
      'Social media application for sharing art related content. \
      Overview: Posting, commenting, liking, saving, deleting, searching, following, profile pages, account updates, user authentication, database integration. \
      Technologies: JavaScript, React, Node.js, Express.js, MongoDB, CSS.',
    liveUrl: 'https://gipost.onrender.com',
    codeUrl: 'https://github.com/feyzanaydemir/gipost',
  },
  {
    image: inventorySetImg,
    title: 'Inventory Set',
    description:
      'Inventory management system. \
      Overview: Item adding, editing, deleting, categorizing, filtered searching, user authentication, database integration. \
      Technologies: JavaScript, React, Node.js, Express.js, MongoDB, CSS, JWT.',
    liveUrl: 'https://inventoryset.onrender.com',
    codeUrl: 'https://github.com/feyzanaydemir/inventory-set',
  },
  {
    image: anonifyImg,
    title: 'Anonify',
    description:
      'Anonymous messaging application. \
      Overview: Posting and deleting content, authentication, restricted author and timestamp visibility, account upgrades via membership and moderation codes, database integration. \
      Technologies: JavaScript, Node.js, Express.js, MongoDB, CSS, EJS.',
    liveUrl: 'https://anonify.onrender.com',
    codeUrl: 'https://github.com/feyzanaydemir/anonify',
  },
];
