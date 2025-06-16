import { FormField, FormFieldKey } from '@/app/page';
import { Button } from '@/components/ui/button';
import { ColorPicker } from '@/components/ui/color-picker';
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import Badge from '../Badge';
import { MessageCircleQuestion } from 'lucide-react';
import { Popover, PopoverContent, PopoverTrigger } from '../ui/popover';

interface Props {
  form: FormField;
  badge: FormField;
  handleChange: (input: FormFieldKey, value: string) => void;
}

const Form = ({ form, badge, handleChange }: Props) => {
  return (
    <div className="w-full">
      <div className="bg-card text-card-foreground p-6 w-full shadow-lg rounded-xl gap-3 items-center justify-center grid grid-cols-[1fr_auto]">
        <div className="col-span-1">
          <Label className="text-card-foreground/60 text-sm" htmlFor="text">
            Text:
          </Label>
          <Input
            className="w-full"
            placeholder="Type a text"
            name="text"
            id="text"
            value={form.text}
            onChange={(e) => handleChange('text', e.target.value)}
          />
        </div>
        <div className="col-span-1">
          <ColorPicker
            value={form['text-color']}
            onChange={(cor) => handleChange('text-color', cor)}
            name="text-color"
            id="text-color"
            className="mt-4"
          />
        </div>
        <div className="col-span-1">
          <div className="flex items-center justify-between">
            <Label
              className="text-card-foreground/60 text-sm flex items-center justify-between"
              htmlFor="icon"
            >
              Icon
            </Label>
            <Popover>
              <PopoverTrigger>
                <MessageCircleQuestion className="size-3.5 text-card-foreground/60" />
              </PopoverTrigger>
              <PopoverContent className="bg-primary text-background">
                <p>
                  Copy the icon names from the website{' '}
                  <a
                    className="text-blue-400 hover:underline"
                    target="_blank"
                    href="https://simpleicons.org/"
                  >
                    simpleicons.org
                  </a>
                </p>
              </PopoverContent>
            </Popover>
          </div>
          <Input
            className="w-full"
            placeholder="Type a icon"
            name="icon"
            id="icon"
            value={form.icon}
            onChange={(e) => handleChange('icon', e.target.value)}
          />
        </div>
        <div className="col-span-1">
          <ColorPicker
            value={form['icon-color']}
            onChange={(cor) => handleChange('icon-color', cor)}
            name="icon-color"
            id="icon-color"
            className="mt-4"
          />
        </div>
        <div className="col-span-1">
          <Label className="text-card-foreground/60 text-sm" htmlFor="label">
            Label:
          </Label>
          <Input
            className="w-full"
            placeholder="Type a label"
            name="label"
            id="label"
            value={form.label}
            onChange={(e) => handleChange('label', e.target.value)}
          />
        </div>
        <div className="col-span-1">
          <ColorPicker
            value={form['label-color']}
            onChange={(cor) => handleChange('label-color', cor)}
            name="label-color"
            id="label-color"
            className="mt-4"
          />
        </div>
        <div className="col-span-2">
          <Dialog>
            <form>
              <DialogTrigger asChild>
                <Button effect="ringHover" className="w-full mt-1">
                  Select variant
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[450px] bg-card text-card-foreground">
                <DialogHeader>
                  <DialogTitle>Select Variant</DialogTitle>
                </DialogHeader>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-5">
                  <DialogClose asChild>
                    <Button
                      className="p-0 h-fit bg-transparent hover:bg-transparent"
                      onClick={() => handleChange('variant', 'for-the-badge')}
                    >
                      <Badge badge={{ ...badge, variant: 'for-the-badge' }} />
                    </Button>
                  </DialogClose>
                  <DialogClose asChild>
                    <Button
                      className="p-0 h-fit bg-transparent hover:bg-transparent"
                      onClick={() => handleChange('variant', 'flat')}
                    >
                      <Badge badge={{ ...badge, variant: 'flat' }} />
                    </Button>
                  </DialogClose>
                  <DialogClose asChild>
                    <Button
                      className="p-0 h-fit bg-transparent hover:bg-transparent"
                      onClick={() => handleChange('variant', 'flat-square')}
                    >
                      <Badge badge={{ ...badge, variant: 'flat-square' }} />
                    </Button>
                  </DialogClose>
                  <DialogClose asChild>
                    <Button
                      className="p-0 h-fit bg-transparent hover:bg-transparent"
                      onClick={() => handleChange('variant', 'plastic')}
                    >
                      <Badge badge={{ ...badge, variant: 'plastic' }} />
                    </Button>
                  </DialogClose>
                  <DialogClose asChild>
                    <Button
                      className="p-0 h-fit bg-transparent hover:bg-transparent"
                      onClick={() => handleChange('variant', 'social')}
                    >
                      <Badge badge={{ ...badge, variant: 'social' }} />
                    </Button>
                  </DialogClose>
                </div>
              </DialogContent>
            </form>
          </Dialog>
        </div>
      </div>
    </div>
  );
};

export default Form;
