import { LoadingScreen, Player, Ui } from "@vime/react";
import { useParams } from "react-router-dom";
import { Header } from "../components/Header";
import { SideBar } from "../components/SideBar";
import { Video } from "../components/Video";

export function Event() {
  const { slug } = useParams<{ slug: string }>()

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex flex-1">
        {slug
          ? <Video lessonSlug={slug} />
          : <div className="flex flex-1 flex-col justify-center w-full max-w-[1100px] max-h-[60vh] aspect-video">
              <Player>
                <Ui>
                  <LoadingScreen>
                  </LoadingScreen>
                </Ui>
              </Player>
              <span className="mx-auto">Selecione uma aula para iniciar</span>
            </div>
        }
        <SideBar />
      </main>
    </div>
  )
}
