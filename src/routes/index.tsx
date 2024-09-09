import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";

export default component$(() => {
  return (
    <>
      <h1>Example Qwik app deployed on Netlify</h1>
      <div>
        🚀 Happy coding 🚀
        <br/>
        Github code <a target='_blank' rel="nofollow noopener" href='https://github.com/rabiabhatti/example-qwik-netlify-adapter-app'>here</a>.
      </div>
    </>
  );
});

export const head: DocumentHead = {
  title: "Welcome to Qwik",
  meta: [
    {
      name: "description",
      content: "Qwik site description",
    },
  ],
};
