import HeroCarousel from "@/components/HeroCarousel"
import SearchBar from "@/components/SearchBar"
import Image from "next/image"

const Home = () => {
  return (
    <>
      <section className="px-6 md:px-20 py-24">
        <div className="flex max-x1:flex-col gap-16">
          <div className="flex flex-col justify-center">
            <p className="small-text">
            Sua próxima compra economizando começa aqui:
              <Image src="/assets/icons/arrow-right.svg" 
              alt="arrow-right"
              width={16}
              height={16}
              />
            </p>

            <h1 className="head-text">
              Descubra o poder do  
              <span className="text-primary"> Rastreia Preço</span>
            </h1>

            <p className="mt-6">
              Análises poderosas e de autoatendimento sobre produtos para ajudá-lo a economizar mais.
            </p>

            <SearchBar />
          </div>
          
          <HeroCarousel />
        </div>
      </section>
      <section className="trending-section">
        <h2 className="section-text"> Trending </h2>

        <div className="flex flex-wrap gap-x-8 gay-y-16">
          {
            ["apple iphone 15", "tenis", "monitor"].map((product) => (
              <div>{product}</div>
            ))
          }
        </div>

      </section>
    </>
  )
}

export default Home