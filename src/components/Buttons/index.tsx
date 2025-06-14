'use client';

import { formataLinkBadge } from '@/utils/formataLinkBagde';
import { Button } from '../ui/button';
import { FormField } from '@/app/page';
import confetti from 'canvas-confetti';
import { MouseEvent } from 'react';
import { motion } from 'framer-motion';

interface Props {
  form: FormField;
}

const Buttons = ({ form }: Props) => {
  const imageUrl = formataLinkBadge(form);

  const copyToClipboard = (text: string, e: MouseEvent<HTMLButtonElement>) => {
    navigator.clipboard.writeText(text);

    const rect = e.currentTarget.getBoundingClientRect();

    confetti({
      particleCount: 50,
      spread: 70,
      origin: {
        x: (rect.left + rect.width / 2) / window.innerWidth,
        y: (rect.top + rect.height / 2) / window.innerHeight,
      },
    });
  };

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-3 w-full max-w-[30rem] px-6">
      <motion.div
        className="w-full col-span-2 md:col-span-1"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: 0.4 }}
      >
        <Button
          className="w-full"
          effect="ringHover"
          onClick={(e) => copyToClipboard(imageUrl, e)}
        >
          Copy link
        </Button>
      </motion.div>

      <motion.div
        className="w-full"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: 0.5 }}
      >
        <Button
          className="w-full"
          effect="ringHover"
          onClick={(e) =>
            copyToClipboard(
              `<img src="${imageUrl}" alt="${form.text || form.label}" />`,
              e
            )
          }
        >
          Copy html
        </Button>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: 0.6 }}
      >
        <Button
          className="w-full"
          effect="ringHover"
          onClick={(e) => copyToClipboard(`![badge](${imageUrl})`, e)}
        >
          Copy markdown
        </Button>
      </motion.div>
    </div>
  );
};

export default Buttons;
