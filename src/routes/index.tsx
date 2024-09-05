import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";

export default component$(() => {
  return (
    <>
      <h1>Example Qwik app deployed on Netlify</h1>
      <div>
        🚀 Happy coding 🚀
        <br/>
        Github code here <a href='https://github.com/rabiabhatti/example-qwik-netlify-adapter-app'>Link</a>
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
