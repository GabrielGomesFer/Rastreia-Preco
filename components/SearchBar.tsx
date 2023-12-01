"use client"

import { FormEvent, useState } from "react"

const isValidAmazonURL = (url: string) => {
  try {
    const parsedURL = new URL(url);
    const hostName = parsedURL.hostname;

    //checando se é da amazon
    if(hostName.includes('amazon.com') || hostName.includes('amazon.') || hostName.includes('amazon')){
      return true;
    }
  } catch (error) {
    return false;
  }
};


const SearchBar = () => {
  const [searchPrompt, setSearchPrompt] = useState('');
  const [isLoading, setIsLoading] = useState(false);


  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    const isValidLink = isValidAmazonURL(searchPrompt)

    if(!isValidLink){
      return alert("Por favor insira um link da amazon para a pesquisa")
    }

    try {
      setIsLoading(true)


    } catch (error) {
      console.log(error)
    } finally {
      setIsLoading(false);
    }

  }


  return (
    <form
      className="flex flex-wrap gap-4 mt-12"
      onSubmit={handleSubmit}
    >
      <input
        type="text"
        placeholder="Insira o link do produto"
        className="searchbar-input"
        value={searchPrompt}
        onChange={(e) => setSearchPrompt(e.target.value)}
        // disabled={isDisabled}
      />

      <button 
        type="submit"
        className="searchbar-btn"
        disabled={searchPrompt=== ''}
        >
        {
          isLoading ? 'Pesquisando...' : 'Pesquisar'
        }
      </button>
    </form>
  )
}

export default SearchBar