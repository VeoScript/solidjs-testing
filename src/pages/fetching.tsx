import { ParentComponent, Switch, Match, For } from "solid-js";
import { createQuery } from "@tanstack/solid-query";
import api from "../config/Axios";

import Navigation from "../components/Navigation";

const Fetching: ParentComponent = () => {

  const usersQuery = createQuery(
    () => ['users'],
    async () => {
      const users = await api.get('/api/users')
      return users.data.data
    },
    {
      onError: (error: any) => {
        console.error('ERROR GET USERS', error)
      }
    }
  )

  return (
    <div class="flex flex-row items-center justify-center w-full h-full">
      <div class="flex flex-col items-center w-full max-w-md py-10 space-y-5">
        <div class="flex flex-col items-center w-full space-y-1">
          <h3 class="font-bold text-2xl">Solid JS Testing Performance</h3>
          <h4 class="font-light text-base">Practicing Signals and Effects</h4>
        </div>
        <Navigation />
        <Switch>
          <Match when={usersQuery.isLoading}>
            <h5 class="font-light text-xl">Loading...</h5>
          </Match>
          <Match when={usersQuery.isError}>
            <h5 class="font-light text-xl">Error: { usersQuery.error }</h5>
          </Match>
          <Match when={usersQuery.isSuccess}>
            <div class="flex flex-col items-center w-full space-y-3">
              <h3 class="font-bold text-xl">Fetched Data</h3>
              <div class="flex flex-col w-full space-y-1">
                <For each={usersQuery.data}>
                  {(user) => (
                    <div class="flex flex-row items-center justify-between w-full space-x-3">
                      <img src={user.avatar} class="w-[5rem] h-[5rem] rounded-xl" />
                      <div class="flex flex-col w-full space-y-1">
                        <p class="text-lg">{ user.first_name } { user.last_name }</p>
                        <p class="text-sm">{ user.email }</p>
                      </div>
                    </div>
                  )}
                </For>
              </div>
            </div>
          </Match>
        </Switch>
      </div>
    </div>
  );
};

export default Fetching;