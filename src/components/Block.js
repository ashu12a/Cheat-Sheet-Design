import React, { useState } from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { atomOneDark } from "react-syntax-highlighter/dist/esm/styles/hljs";

export default function Block() {
  const codeString = `<!doctype html>
  <html lang="en">
    <head>
      <!-- Required meta tags -->
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
  
      <!-- Bootstrap CSS -->
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.3.1/dist/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
  
      <title>Hello, world!</title>
    </head>
    <body>
      <h1>Hello, world!</h1>
  
      <!-- Optional JavaScript -->
      <!-- jQuery first, then Popper.js, then Bootstrap JS -->
      <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
      <script src="https://cdn.jsdelivr.net/npm/popper.js@1.14.7/dist/umd/popper.min.js" integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossorigin="anonymous"></script>
      <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.3.1/dist/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous"></script>
    </body>
  </html>`;

  const [copy, setCopy] = useState(false);

  return (
    <>
    
    <div className="max-w-4xl w-11/12 p-5 text-left text-white bg-slate-600 border m-auto my-5 rounded-md">
      <div className="pb-2">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae,
          deleniti repudiandae sed debitis.
        </p>
      </div>
      <div className="bg-slate-900 w-100 rounded-md">
        <div className="p-1">
          <span className="pl-5">Example Code</span>
          <span className="float-right pr-5 rounded-full">
            {copy ? (
              <button>
                <i class="fa-solid fa-check"></i>&nbsp;&nbsp;Copied
              </button>
            ) : (
              <button
                onClick={() => {
                  navigator.clipboard.writeText(codeString);
                  setCopy(true);
                  setTimeout(() => {
                    setCopy(false);
                  }, 3000);
                }}
              >
                <i class="fa-regular fa-clipboard"></i>&nbsp;&nbsp;Copy
              </button>
            )}
          </span>
        </div>
        <SyntaxHighlighter
          language="html"
          style={atomOneDark}
          customStyle={{ padding: "20px"}}
          
        >
          {codeString}
        </SyntaxHighlighter>
      </div>
    </div>
    </>
  );
}
