import { GithubLogo, LinkedinLogo } from "phosphor-react";

export function Footer() {
  return (
    <footer
      className="flex justify-center items-center gap-8 w-full p-6 bg-gray-900 border-t border-green-300"
    >
      <a
        href="https://www.linkedin.com/in/allan-da-silva-pessin-2b49701b6/"
        className="hover:text-green-300 transition-colors"
        target="_blank">
        <LinkedinLogo size={32} />
      </a>
      <p className="text-lg text-orange-500">
        Allan Pessin
      </p>
      <a
        href="https://www.github.com/AllanPessin"
        className="hover:text-green-300 transition-colors"
        target="_blank">
        <GithubLogo size={32} />
      </a>
    </footer>
  )
}
