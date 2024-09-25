import { ArrowLeft } from 'lucide-react';
import { Title } from './title';
import Link from 'next/link';
import { cn } from '@/shared/lib/utils';
import { Button } from '../ui';

interface Props {
  title: string;
  text: string;
  className?: string;
  imageUrl?: string;
}

export const InfoBlock: React.FC<Props> = ({ className, title, text, imageUrl }) => {
  return (
    <div
      className={cn(
        className,
        'flex items-center flex-wrap-reverse justify-center md:justify-between w-full md:w-[840px] gap-12 px-4'
      )}
    >
      <div className="flex flex-col">
        <div className="w-full md:w-[445px]">
          <Title size="lg" text={title} className="font-extrabold" />
          <p className="text-gray-400 text-lg">{text}</p>
        </div>

        <div className="flex gap-5 mt-11">
          <Link href="/">
            <Button variant="outline" className="gap-2">
              <ArrowLeft />
              To the main page
            </Button>
          </Link>
          <a href="">
            <Button variant="outline" className="text-gray-500 border-gray-400 hover:bg-gray-50">
              Refresh
            </Button>
          </a>
        </div>
      </div>

      <img src={imageUrl} alt={title} className="w-[200px] md:w-[300px]" />
    </div>
  );
};
