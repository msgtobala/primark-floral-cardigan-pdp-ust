import detail1 from '../assets/images/details/detail-1.png';
import detail2 from '../assets/images/details/detail-2.png';
import detail3 from '../assets/images/details/detail-3.png';

export interface CarouselSlide {
  id: number;
  title: string;
  subtitle?: string;
  description?: string;
  video?: string;
  image?: string;
  isImage: boolean;
  backgroundColor: string;
}

export const slides: CarouselSlide[] = [
  {
    id: 1,
    title: 'Soft Knit, Subtle Charm',
    subtitle: 'A cozy knit with delicate floral embroidery for easy, everyday layering.',
    video: '/baby-high-chair.mp4',
    image: detail1,
    backgroundColor: 'bg-[#FFF5EB]',
    isImage: true,
  },
  {
    id: 2,
    title: 'Relaxed Fit, Everyday Style',
    subtitle: 'Puff sleeves and gentle drape give it an effortless shape that elevates your everyday look.',
    video: 'toodler-chair.mp4',
    image: detail2,
    backgroundColor: 'bg-[#E1FBFF]',
    isImage: true,
  },
  {
    id: 3,
    title: 'Thoughtful Finishing Touches',
    subtitle: 'Embroidery, tonal buttons, and ribbed trims add subtle detail and lasting comfort.',
    video: 'modern-high-chair.mp4', 
    image: detail3,
    backgroundColor: 'bg-[#EAE6DB]',
    isImage: true,
  },
];
