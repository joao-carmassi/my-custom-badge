import { FormField } from '@/app/page';
import { formataLinkBadge } from '@/utils/formataLinkBagde';
import Image from 'next/image';

interface Props {
  badge: FormField;
}

const Badge = ({ badge }: Props) => {
  return (
    <Image
      width={128}
      height={32}
      className="w-32"
      src={formataLinkBadge(badge)}
      alt=""
    />
  );
};

export default Badge;
