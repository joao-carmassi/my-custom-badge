import { Moon, Sun } from 'lucide-react';
import { Button } from '../ui/button';
import { useState } from 'react';
import { FormField } from '@/app/page';
import Badge from '../Badge';
import { motion } from 'framer-motion';
import { formataLinkBadge } from '@/utils/formataLinkBagde';

interface Props {
  badge: FormField;
}

const DisplayContent = ({ badge }: Props) => {
  const temaLocal = localStorage.getItem('tema');
  const [tema, setTema] = useState(
    temaLocal ? JSON.parse(temaLocal) : 'escuro'
  );
  localStorage.setItem('tema', JSON.stringify(tema));

  return (
    <div className="w-full shadow-2xl rounded-xl">
      <div
        className={`${
          tema === 'escuro' ? 'bg-card' : 'bg-secondary'
        } w-full flex px-5 py-3 rounded-t-xl justify-between`}
      >
        <div className="flex items-center gap-4">
          <span className="block bg-red-400 rounded-full aspect-square w-4 animate-in fade-in duration-1000 delay-500 fill-mode-both"></span>
          <span className="block bg-yellow-400 rounded-full aspect-square w-4 animate-in fade-in duration-1000 delay-700 fill-mode-both"></span>
          <span className="block bg-green-400 rounded-full aspect-square w-4 animate-in fade-in duration-1000 delay-1000 fill-mode-both"></span>
        </div>
        <Button
          className={`${
            tema === 'claro' &&
            'bg-card text-primary hover:bg-background inset-ring-2'
          } aspect-square rounded-full p-0`}
          effect="ringHover"
          size="sm"
          onClick={() =>
            tema === 'escuro' ? setTema('claro') : setTema('escuro')
          }
        >
          {tema === 'escuro' ? <Sun /> : <Moon />}
        </Button>
      </div>
      <div
        className={`${
          tema === 'escuro' ? 'bg-secondary' : 'bg-card'
        } w-full h-58 rounded-b-xl grid place-items-center`}
      >
        <motion.a
          target="_blank"
          href={formataLinkBadge(badge)}
          whileHover={{ scale: 1.2 }}
          onHoverStart={() => {}}
          onHoverEnd={() => {}}
        >
          <Badge badge={badge} />
        </motion.a>
      </div>
    </div>
  );
};

export default DisplayContent;
