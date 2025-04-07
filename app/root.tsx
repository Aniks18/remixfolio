import type { LinksFunction, MetaFunction } from "@remix-run/node";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";

import styles from "./styles/tailwind.css";

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: styles },
  { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&family=Fira+Code:wght@400;600&display=swap" },
  { rel: "stylesheet", href: "https://cdn.jsdelivr.net/npm/aos@2.3.4/dist/aos.css" },
];

export const meta: MetaFunction = () => {
  return [
    { title: "Aniket Kumar - Tech Enthusiast & B.Tech CSE Student" },
    { name: "description", content: "Portfolio showcasing my projects, skills, and achievements as a B.Tech CSE student and tech enthusiast." },
    { name: "viewport", content: "width=device-width,initial-scale=1" },
  ];
};

export default function App() {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <Meta />
        <Links />
      </head>
      <body>
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
        <script src="https://cdn.jsdelivr.net/npm/aos@2.3.4/dist/aos.js"></script>
        <script dangerouslySetInnerHTML={{
          __html: `
            document.addEventListener('DOMContentLoaded', function() {
              AOS.init({
                duration: 800,
                once: false,
                mirror: true
              });
            });
          `
        }} />
      </body>
    </html>
  );
}
