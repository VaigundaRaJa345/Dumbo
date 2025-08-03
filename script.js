// Sample memory items
const memories = [
  {
    type: 'image',
    src: 'media/images/img1.jpeg',
    caption: 'That fun day at the Zoo'
  },
  {
    type: 'image',
    src: 'media/images/img7.jpeg',
    caption: 'Smiles we never forget'
  },
  // extend, or add video items
  {
    type: 'video',
    src: 'media/images/img5.mp4',
    caption: '300rs cycle ride' 
  },
  {
    type: 'image',
    src: 'media/images/img3.jpeg',
    caption: 'The water sprinkels'
  },
  {
    type: 'image',
    src: 'media/images/img6.jpeg',
    caption: 'Unexpected Clicks'
  },
  {
    type: 'image',
    src: 'media/images/img8.jpeg',
    caption: 'The New friend'
  },
  {
    type: 'image',
    src: 'media/images/img9.jpeg',
    caption: 'how it started'
  },
  {
    type: 'image',
    src: 'media/images/img10.jpeg',
    caption: 'That Evening'
  },
  {
    type: 'image',
    src: 'media/images/img11.jpeg',
    caption: 'The unforgettable bus ride'
  }
];

const gallery = document.getElementById('gallery');
memories.forEach(mem => {
  const div = document.createElement('div');
  div.className = 'memory';
  if (mem.type === 'image') {
    const img = document.createElement('img');
    img.src = mem.src;
    div.appendChild(img);
  } else if (mem.type === 'video') {
    const vid = document.createElement('video');
    vid.src = mem.src;
    vid.controls = true;
    div.appendChild(vid);
  }
  if (mem.caption) {
    const cap = document.createElement('p');
    cap.textContent = mem.caption;
    div.appendChild(cap);
  }
  gallery.appendChild(div);
});

