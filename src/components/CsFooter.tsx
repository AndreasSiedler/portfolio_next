import { Disclosure } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

const MENU_ITEMS: { label: string; href: string }[] = [
  { label: "Imprint", href: "imprint" },
  { label: "Linkedin", href: "linkedin" },
  { label: "Dribble", href: "dribble" },
  { label: "Instagram", href: "instagram" },
];

export default function CsFooter() {
  return (
    <Disclosure as="nav">
      {({ open }: { open: boolean }) => (
        <>
          <div className="relative flex justify-between">
            {/* Desktop navigation */}
            <div className="sm:flex w-full border-t-0.75 border-b-0.75 border-black divide-x-0.75 divide-black">
              {MENU_ITEMS.map((item) => (
                <a
                  key={item.href}
                  href="#"
                  className="font-anton-regular text-base py-2.5 w-full flex justify-center"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>
          <Disclosure.Panel>
            <div className="fixed inset-0 bg-black/75" aria-hidden="true" />
            <div className="fixed z-10 top-5 left-5 bg-white sm:hidden">
              <Disclosure.Button className="inline-flex border-0.75 border-black items-center justify-center p-2 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                <span className="sr-only">Open main menu</span>
                {open ? (
                  <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                ) : (
                  <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                )}
              </Disclosure.Button>
            </div>
            <div className="fixed inset-x-5 top-20 justify-center bg-white border border-black divide-y divide-black">
              {MENU_ITEMS.map((item) => (
                <Disclosure.Button
                  key={item.href}
                  as="a"
                  href="#"
                  className="flex justify-center py-2.5 px-5 font-anton-regular text-base"
                >
                  {item.label}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
