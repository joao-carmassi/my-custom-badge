import { FormField } from '@/app/page';

export const formataLinkBadge = (form: FormField) => {
  return `https://img.shields.io/badge/${form.text || ''}-${(
    form['text-color'] || ''
  ).replace('#', '')}?style=${form.variant}${
    form.icon ? `&logo=${form.icon}` : ''
  }${
    form['icon-color']
      ? `&logoColor=${form['icon-color'].replace('#', '')}`
      : ''
  }${
    form['label-color'] && form.label
      ? `&labelColor=${form['label-color'].replace('#', '')}`
      : ''
  }${form.label ? `&label=${form.label}` : ''}`;
};
