import { MagnifyingGlass } from "phosphor-react";
import { Link } from "react-router-dom";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";

export function NotFound() {
  return (
    <>
      <Header />
      <main
        className="flex justify-center items-center min-h-[80vh] w-full"
      >
        <div className="flex justify-center">
          <Link to={'/'}
            className="flex flex-col items-center hover:text-orange-500 transition-colors"
          >
            Tem certeza que essa pagina existe?
            <MagnifyingGlass size={32} />
          </Link>
        </div>
      </main>
      <Footer />
    </>
  )
}