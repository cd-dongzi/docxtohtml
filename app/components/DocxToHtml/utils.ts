export const tempHtml = ({
  html,
  title = "协议",
}: {
  html: string;
  title?: string;
}): string => `
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width initial-scale=1" />
    <link
      href="https://fonts.googleapis.com/css?family=Open+Sans:400italic,700italic,700,400&subset=latin,latin-ext"
      rel="stylesheet"
      type="text/css"
    />
    <title>${title}</title>
    <style>
      :root {
        --bg-color: #ffffff;
        --text-color: #333333;
        --select-text-bg-color: #b5d6fc;
        --select-text-font-color: auto;
        --monospace: 'Lucida Console', Consolas, 'Courier', monospace;
        --title-bar-height: 20px;
        --mermaid-font-zoom: 1em;
      }
      *,
      ::after,
      ::before {
        box-sizing: border-box;
      }
      html {
        font-size: 14px;
        background-color: var(--bg-color);
        color: var(--text-color);
        font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
      }
      h1,
      h2,
      h3,
      h4,
      h5,
      h6 {
        break-after: avoid-page;
        break-inside: avoid;
        orphans: 4;
        margin-top: 1rem;
        margin-bottom: 1rem;
        position: relative;
        font-weight: bold;
        line-height: 1.4;
        cursor: text;
      }
      p {
        orphans: 4;
        line-height: 1.6rem;
        word-spacing: 0.05rem;
      }
      h1 {
        padding-bottom: 0.4rem;
        font-size: 2.2rem;
        line-height: 1.3;
      }
      h2 {
        font-size: 1.75rem;
        line-height: 1.225;
        margin: 35px 0 15px;
        padding-bottom: 0.5em;
        border-bottom: 1px solid #ddd;
      }
      h3 {
        font-size: 1.6rem;
        line-height: 1.43;
        margin: 20px 0 7px;
      }
      h4 {
        font-size: 1.2rem;
      }
      h5 {
        font-size: 1rem;
      }
      h6 {
        font-size: 1rem;
        color: #777;
      }
      a {
        color: #42b983;
        font-weight: 600;
        padding: 0 2px;
        text-decoration: none;
      }
      a.url {
        word-break: break-all;
      }
      td a.url {
        display: inline-block;
        width: 204px;
      }
      a:active,
      a:hover {
        outline: 0px;
      }
      p,
      blockquote,
      ul,
      ol,
      dl,
      table {
        margin: 0.8em 0;
      }
      h1 p,
      h2 p,
      h3 p,
      h4 p,
      h5 p,
      h6 p {
        margin-top: 0;
      }
      h1:hover a.anchor,
      h2:hover a.anchor,
      h3:hover a.anchor,
      h4:hover a.anchor,
      h5:hover a.anchor,
      h6:hover a.anchor {
        text-decoration: none;
      }
      h1 tt,
      h1 code {
        font-size: inherit !important;
      }

      h2 tt,
      h2 code {
        font-size: inherit !important;
      }

      h3 tt,
      h3 code {
        font-size: inherit !important;
      }

      h4 tt,
      h4 code {
        font-size: inherit !important;
      }

      h5 tt,
      h5 code {
        font-size: inherit !important;
      }

      h6 tt,
      h6 code {
        font-size: inherit !important;
      }

      h2 a,
      h3 a {
        color: #34495e;
      }

      img {
        max-width: 100%;
        vertical-align: middle;
        image-orientation: from-image;
      }
      button,
      input,
      select,
      textarea {
        color: inherit;
        font-family: inherit;
        font-size: inherit;
        font-style: inherit;
        font-variant-caps: inherit;
        font-weight: inherit;
        font-stretch: inherit;
        line-height: inherit;
      }
      input[type='checkbox'],
      input[type='radio'] {
        line-height: normal;
        padding: 0px;
      }
      ul,
      ol {
        padding-left: 30px;
      }

      ul:first-child,
      ol:first-child {
        margin-top: 0;
      }

      ul:last-child,
      ol:last-child {
        margin-bottom: 0;
      }

      li div {
        padding-top: 0px;
      }
      blockquote {
        margin: 1rem 0px;
        border-left: 4px solid #42b983;
        padding: 10px 15px;
        color: #777;
        background-color: rgba(66, 185, 131, 0.1);
      }
      li p {
        margin: 0.5rem 0px;
      }
      li blockquote {
        margin: 1rem 0px;
      }
      li {
        margin: 0px;
        position: relative;
      }
      blockquote > :last-child {
        margin-bottom: 0px;
      }
      blockquote > :first-child,
      li > :first-child {
        margin-top: 0px;
      }
      li > ol,
      li > ul {
        margin: 0 0;
      }
      hr {
        height: 2px;
        padding: 0;
        margin: 16px 0;
        background-color: #e7e7e7;
        border: 0 none;
        overflow: hidden;
        box-sizing: content-box;
      }
      figure {
        overflow-x: auto;
        margin: 1.2em 0px;
        max-width: calc(100% + 16px);
        padding: 0px;
      }
      figure > table {
        margin: 0px;
      }
      table {
        border-collapse: collapse;
        border-spacing: 0px;
        width: 100%;
        overflow: auto;
        break-inside: auto;
        text-align: left;
        padding: 0;
        word-break: initial;
      }
      table tr {
        border-top: 1px solid #dfe2e5;
        margin: 0;
        padding: 0;
      }

      table tr:nth-child(2n),
      thead {
        background-color: #fafafa;
      }

      table tr th {
        font-weight: bold;
        border: 1px solid #dfe2e5;
        border-bottom: 0;
        text-align: left;
        margin: 0;
        padding: 6px 13px;
      }

      table tr td {
        border: 1px solid #dfe2e5;
        text-align: left;
        margin: 0;
        padding: 6px 13px;
      }

      table tr th:first-child,
      table tr td:first-child {
        margin-top: 0;
      }

      table tr th:last-child,
      table tr td:last-child {
        margin-bottom: 0;
      }
      table tr th {
        border-bottom-width: 0px;
      }
      tr {
        break-inside: avoid;
        break-after: auto;
      }
      thead {
        display: table-header-group;
      }
      code,
      pre,
      samp,
      tt {
        font-family: var(--monospace);
        margin: 0 2px;
      }
      kbd {
        margin: 0px 0.1em;
        padding: 0.1em 0.6em;
        font-size: 0.8em;
        color: rgb(36, 39, 41);
        background-color: rgb(255, 255, 255);
        border: 1px solid rgb(173, 179, 185);
        border-top-left-radius: 3px;
        border-top-right-radius: 3px;
        border-bottom-right-radius: 3px;
        border-bottom-left-radius: 3px;
        box-shadow: rgba(12, 13, 14, 0.2) 0px 1px 0px,
          rgb(255, 255, 255) 0px 0px 0px 2px inset;
        white-space: nowrap;
        vertical-align: middle;
      }
      video {
        max-width: 100%;
        display: block;
        margin: 0px auto;
      }
      iframe {
        max-width: 100%;
        width: 100%;
        border: none;
      }
      mark {
        background-color: rgb(255, 255, 0);
        color: rgb(0, 0, 0);
      }
      ::selection {
        text-shadow: none;
        background: var(--select-text-bg-color);
        color: var(--select-text-font-color);
      }
      #write {
        height: auto;
        width: inherit;
        word-break: normal;
        word-wrap: break-word;
        position: relative;
        white-space: normal;
        overflow-x: auto;
        padding-top: 36px;
        max-width: 860px;
        margin: 0 auto;
        padding: 16px;
      }
      #write input[type='checkbox'] {
        cursor: pointer;
        width: inherit;
        height: inherit;
      }
      #write ol li {
        padding-left: 0.5rem;
      }

      #write > ul:first-child,
      #write > ol:first-child {
        margin-top: 30px;
      }
      #write li > figure:last-child {
        margin-bottom: 0.5rem;
      }
      #write ol,
      #write ul {
        position: relative;
      }
      #write strong {
        padding: 0 1px;
      }

      #write em {
        padding: 0 5px 0 2px;
      }

      #write table thead th {
        background-color: #f2f2f2;
      }
      #write code,
      tt {
        padding: 2px 4px;
        border-radius: 2px;
        font-family: var(--font-monospace);
        font-size: 0.92rem;
        color: #e96900;
        background-color: #f8f8f8;
      }
      #write mark {
        background-color: #ebffeb;
        border-radius: 2px;
        padding: 2px 4px;
        margin: 0 2px;
        color: #222;
        font-weight: 500;
      }

      #write del {
        padding: 1px 2px;
      }
    </style>
  </head>
  <body>
    <div id="write">
      ${html}
    </div>
  </body>
</html>
`;
