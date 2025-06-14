'use client';

import Buttons from '@/components/Buttons';
import DisplayContent from '@/components/DisplayContente';
import Form from '@/components/Form';
import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';

const inicialStateForm = {
  text: 'Js',
  'text-color': '#ffffff',
  icon: 'nextdotjs',
  'icon-color': '#000000',
  label: 'Next',
  'label-color': '#ffffff',
  variant: 'for-the-badge',
};

export type FormFieldKey = keyof typeof inicialStateForm;
export type FormField = typeof inicialStateForm;

export default function Home() {
  const [form, setForm] = useState<FormField>(inicialStateForm);
  const [badge, setBadge] = useState<FormField>(inicialStateForm);
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    const badgeLocal = localStorage.getItem('badge');
    if (badgeLocal) {
      const parsed = JSON.parse(badgeLocal);
      setForm(parsed);
      setBadge(parsed);
    }
    setIsReady(true);
  }, []);

  type TimeoutMap = Record<
    FormFieldKey,
    ReturnType<typeof setTimeout> | undefined
  >;
  const timeoutMap = useRef<TimeoutMap>({} as TimeoutMap);

  const handleChange = (input: FormFieldKey, valor: string) => {
    setForm((prev) => ({ ...prev, [input]: valor }));

    if (input === 'variant') {
      const updated = { ...badge, [input]: valor };
      setBadge(updated);
      localStorage.setItem('badge', JSON.stringify(updated));
      return;
    }

    if (timeoutMap.current[input]) clearTimeout(timeoutMap.current[input]);

    timeoutMap.current[input] = setTimeout(() => {
      setBadge((prevBadge) => {
        const newBadge = { ...prevBadge, [input]: valor };
        localStorage.setItem('badge', JSON.stringify(newBadge));
        return newBadge;
      });
    }, 750);
  };

  if (!isReady) return null;

  return (
    <section className="min-h-svh flex flex-col items-center justify-center gap-5 p-6">
      <motion.div
        initial={{ opacity: 0, x: 60 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.4 }}
      >
        <Form form={form} badge={badge} handleChange={handleChange} />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: -60 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.4, delay: 0.2 }}
      >
        <DisplayContent badge={badge} />
      </motion.div>

      <Buttons form={form} />
    </section>
  );
}

