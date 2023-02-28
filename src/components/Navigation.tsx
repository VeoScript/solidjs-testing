import { Component } from "solid-js";
import { A, useLocation } from '@solidjs/router'

const Navigation: Component = () => {
  
  const { pathname } = useLocation()

  return (
    <div class="flex flex-row items-center justify-center w-full space-x-1">
      <A href="/" class={`w-full p-3 rounded-md text-center text-sm text-white bg-blue-500 ${pathname === '/' && 'bg-opacity-80'}`}>Home</A>
      <A href="/fetching" class={`w-full p-3 rounded-md text-center text-sm text-white bg-blue-500 ${pathname === '/fetching' && 'bg-opacity-80'}`}>Data Fetching</A>
    </div>
  );
};

export default Navigation;