import { Separator } from '@/components/ui/separator';
import { Button } from '../ui/button';
import { Github } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-card px-6">
      <div className="max-w-7xl mx-auto">
        <div className="py-12 flex flex-col justify-start items-center">
          <h1 className="font-semibold mb-3 text-xl text-card-foreground/75">
            Create Your Custom Badge
          </h1>
          <h2 className="text-card-foreground/75 text-center">
            My Custom Badge lets you easily generate personalized badges using
            the Shields.io API. Customize your style, color, icon, and more —
            perfect for README files, documentation, or showcasing your tools.
          </h2>
        </div>
        <Separator />
        <div className="py-8 flex flex-row items-center justify-between gap-x-2 gap-y-5 px-6 xl:px-0">
          {/* Copyright */}
          <span className="text-foreground/75">
            Powered by{' '}
            <a
              className="hover:underline"
              target="_blank"
              href="https://shields.io/"
            >
              Shields.io
            </a>
          </span>
          <div>
            <Button
              size="icon"
              variant="outline"
              className="p-2.5 rounded-full"
              asChild
            >
              <a
                href="https://github.com/joao-carmassi/my-custom-badge"
                target="_blank"
              >
                <Github />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
