import { FooterProps } from "@/types";

export function Footer({ dict }: FooterProps) {
  return (
    <footer className="bg-white dark:bg-gray-800">
      <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
        <div className="sm:flex sm:items-center sm:justify-between">
          <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
            {dict.footer.copyright}
          </span>
          <div className="flex space-x-5 sm:justify-center">
            <a href="#" className="text-gray-500 hover:text-gray-900 dark:hover:text-white">
              {dict.footer.privacyPolicy}
            </a>
            <a href="#" className="text-gray-500 hover:text-gray-900 dark:hover:text-white">
              {dict.footer.termsConditions}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}