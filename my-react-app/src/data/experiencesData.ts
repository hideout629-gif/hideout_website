import type { Experience } from '../types';

import img82 from '../assets/image/image 82.jpeg';
import img55 from '../assets/image/image 55.jpeg';
import img49 from '../assets/image/image 49.jpeg';
import img21 from '../assets/image/image 21.jpeg';
import img45 from '../assets/image/image 45.jpeg';
import img63 from '../assets/image/image 63.jpeg';
import img73 from '../assets/image/image 73.jpeg';

export const experiencesData: Experience[] = [
  {
    id: 'scenic-views',
    title: 'Scenic Views',
    subtitle: 'Breathtaking vistas',
    icon: 'Mountain',
    description: 'Breathtaking views of mist-covered hills, rolling tea valleys & serene lake horizons right from your private terrace.',
    image: img82
  },
  {
    id: 'camp-fire',
    title: 'Camp Fire',
    subtitle: 'Warm cozy nights',
    icon: 'Flame',
    description: 'Enjoy cozy campfire evenings under a starry sky with warm marshmallows, acoustic music, and your loved ones.',
    image: img63
  },
  {
    id: 'nature-walks',
    title: 'Nature Walks',
    subtitle: 'Explore forest trails',
    icon: 'Trees',
    description: 'Guided morning treks through eucalyptus groves, tea gardens, and hidden mountain waterfalls in fresh crisp air.',
    image: img49
  },
  {
    id: 'local-cuisine',
    title: 'Local Cuisine',
    subtitle: 'Authentic Nilgiri flavors',
    icon: 'Utensils',
    description: 'Savor freshly cooked authentic South Indian breakfast, traditional Badaga curry, homemade chocolates & hot Nilgiri tea.',
    image: img21
  },
  {
    id: 'tea-tasting',
    title: 'Tea Estate Walk',
    subtitle: 'Artisan Nilgiri chai',
    icon: 'Sparkles',
    description: 'Walk through organic tea gardens and learn traditional tea leaf plucking & brewing techniques with local tea masters.',
    image: img55
  },
  {
    id: 'dining-lounge',
    title: 'Private Veranda Dining',
    subtitle: 'Al fresco feast',
    icon: 'Utensils',
    description: 'Enjoy handcrafted multi-course dining served privately on your cottage veranda facing sunset mountain views.',
    image: img73
  }
];
