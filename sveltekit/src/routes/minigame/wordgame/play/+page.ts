
export const prerender = false
export const ssr = false

import {
  getDefaultTimeLimit,
} from "$lib/components/minigame/wordgame/localstorage"

export async function load( { page } ) {
  const response = await fetch( "https://hex-spell.com/data/wordlist.txt" )
  const wordlist = await response.text()
  const word_set = new Set( wordlist.split( "\n" ) )
  const dictionary = {
    isWord: ( text ) => {
      return word_set.has( text )
    }
  }

  return {
  dictionary,
  time_limit: parseInt( page.query.get( "time" ), 10 ) || getDefaultTimeLimit(),
}
}
