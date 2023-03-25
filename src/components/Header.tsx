import { Disclosure } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

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
          <div className="relative flex h-20 justify-between">
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
            <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
              <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
                {/* Current: "border-indigo-500 text-gray-900", Default: "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700" */}
                <a
                  href="#"
                  className="inline-flex items-center border-b-2 border-indigo-500 px-1 pt-1 text-sm font-medium text-gray-900"
                >
                  Dashboard
                </a>
                <a
                  href="#"
                  className="inline-flex items-center border-b-2 border-transparent px-1 pt-1 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700"
                >
                  Team
                </a>
                <a
                  href="#"
                  className="inline-flex items-center border-b-2 border-transparent px-1 pt-1 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700"
                >
                  Projects
                </a>
                <a
                  href="#"
                  className="inline-flex items-center border-b-2 border-transparent px-1 pt-1 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700"
                >
                  Calendar
                </a>
              </div>
            </div>
          </div>
          <Disclosure.Panel>
            <div className="fixed inset-0 bg-black/75" aria-hidden="true" />
            <div className="fixed inset-x-5 justify-center bg-white border border-black divide-y divide-black">
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
