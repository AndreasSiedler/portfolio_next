import { Disclosure } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import NextLink from "next/link";

const MENU_ITEMS: { label: string; href: string }[] = [
  { label: "About Me", href: "about-me" },
  { label: "Work", href: "work" },
  { label: "Photography", href: "photography" },
  { label: "Contact", href: "contact" },
  { label: "Resume", href: "resume" },
];

export default function Header() {
  return (
    <Disclosure as="nav">
      {({ open }: { open: boolean }) => (
        <>
          <div className="relative flex justify-between">
            {/* Mobile menu button */}
            <div className="absolute z-10 inset-y-5 left-5 bg-white sm:hidden">
              <Disclosure.Button className="inline-flex border-0.75 border-black items-center justify-center p-2 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                <span className="sr-only">Open main menu</span>
                {open ? (
                  <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                ) : (
                  <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                )}
              </Disclosure.Button>
            </div>
            {/* Desktop navigation */}
            <div className="flex justify-between items-center border-b-0.75 border-black w-full px-16">
              <NextLink href="/">
                <div className="hidden sm:block font-anton-regular text-base p-5">
                  Chris K. Seidel
                </div>
              </NextLink>
              <div className="hidden sm:flex">
                {MENU_ITEMS.map((item) => (
                  <a
                    key={item.href}
                    href="#"
                    className="font-anton-regular text-base p-5 break-words whitespace-nowrap w-full flex justify-center"
                  >
                    {item.label}
                  </a>
                ))}
              </div>
            </div>
          </div>
          {/* Mobile popup menu */}
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
