import { ParentComponent, createSignal } from "solid-js";
import Navigation from "../components/Navigation";

const Home: ParentComponent = () => {
  
  const [songTitle, setSongTitle] = createSignal<string>('')
  const [songArtist, setSongArtist] = createSignal<string>('')

  return (
    <div class="flex flex-row items-center justify-center w-full h-screen">
      <div class="flex flex-col items-center w-full max-w-md space-y-5">
        <div class="flex flex-col items-center w-full space-y-1">
          <h3 class="font-bold text-2xl">Solid JS Testing Performance</h3>
          <h4 class="font-light text-base">Practicing Signals and Effects</h4>
        </div>
        <Navigation />
        <div class="flex flex-col items-center w-full space-y-2">
          <div class="flex flex-col w-full space-y-1">
            <label for="song_title" class="mx-1 text-sm text-neutral-600">Song Title</label>
            <input
              type="text"
              id="song_title"
              class="w-full p-3 outline-none rounded-xl border border-neutral-300 focus:border-blue-400 bg-white"
              onInput={(e) => setSongTitle((e.target as HTMLInputElement).value)}
            />
          </div>
          <div class="flex flex-col w-full space-y-1">
            <label for="song_title" class="mx-1 text-sm text-neutral-600">Song Artist</label>
            <input
              type="text"
              id="song_artist"
              class="w-full p-3 outline-none rounded-xl border border-neutral-300 focus:border-blue-400 bg-white"
              onInput={(e) => setSongArtist((e.target as HTMLInputElement).value)}
            />
          </div>
        </div>
        <div class="flex flex-col items-center w-full space-y-1">
          <h3 class="font-bold text-xl">Output</h3>
          <div class="flex flex-col w-full space-y-1">
            <p class="mx-1 text-sm text-neutral-600">Song Title Result</p>
            <div class="w-full h-12 p-3 outline-none rounded-xl text-base border border-neutral-300 focus:border-blue-400 bg-white">
              { songTitle }
            </div>
          </div>
          <div class="flex flex-col w-full space-y-1">
            <p class="mx-1 text-sm text-neutral-600">Song Artist Result</p>
            <div class="w-full h-12 p-3 outline-none rounded-xl text-base border border-neutral-300 focus:border-blue-400 bg-white">
              { songArtist }
            </div>
          </div>
        </div>
      </div>
    </div>
  )
};

export default Home;