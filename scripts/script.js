// Title
const title = document.head.appendChild(document.createElement('title'));
title.innerHTML = document.querySelector('h1').innerHTML === 'Home' ? 'Federation Database' : `${document.querySelector('h1').innerHTML} | Federation Database`;

// Design
document.querySelector('#element-eight').outerHTML = `
  <div id="element-one"></div>
  <div id="element-two"></div>
  <div id="element-three"></div>
  <div id="element-four"></div>
  <div id="element-five"></div>
  <div id="element-six"></div>
  <div id="element-seven"></div>
  <article id="element-eight">
    ${document.querySelector('#element-eight').innerHTML}
    <footer id="footer">
      <p>Text &copy; 2024&ndash;2025 Noel Tucker</p>
      <p>All quotations present in the Federation Database are used here in a way believed to quality as fair use under United States copyright law. All other text present in the Federation Database is owned by Noel Tucker and is available under the <a href="https://creativecommons.org/licenses/by-sa/4.0">Creative Commons Attribution-ShareAlike 4.0 International license</a>.</p>
      <p>The design of the Federation Database is inspired by the LCARS design style that was created by Michael Okuda. The colors of the design of the Federation Database are from LCARS designs by Andrew Jarvis. All original aspects of the design of the Federation Database are owned by Noel Tucker and are not available under any license. All unoriginal aspects of the design of the Federation Database are owned by <a href="https://www.paramount.com">Paramount Global</a> and are used here in a way believed to qualify as fair use under United States copyright law.</p>
      <p>License and/or copyright information is listed individually for all images, video, and audio present in the Federation Database.</p>
      <p>The Federation Database is not and does not claim to be endorsed by, sponsored by, or affiliated with Paramount Global, the Star Trek franchise, or any affiliated entity.</p>
      <p>All Star Trek trademarks and copyrights present in the Federation Database are owned by Paramount Global or an affiliated entity and are used here in a way believed to qualify as fair use under United States copyright law.</p>
    </footer>
  </article>
  <a id="label" href="../articles/index.html">Federation Database</a>
  <a id="button-one" class="gray"><span class="button-margin">Lock Search History</span></a>
  <a id="button-two" class="orange"><span class="button-margin">Unlock Search History</span></a>
  <a id="button-three" class="button orange"><span class="button-margin">Create Shortcut</span></a>
  <a id="button-four" class="button orange"><span class="button-margin">Edit File</span></a>
  <a id="button-five" class="button orange"><span class="button-margin">View File History</span></a>
  <a id="button-six" class="button gray"><span class="button-margin">View Search History</span></a>
  <a id="button-seven" class="button gray"><span class="button-margin">Delete Search History</span></a>
  <a id="button-eight" class="button orange"><span class="button-margin">Restore Search History</span></a>
  <a id="button-nine" class="button gray"><span class="button-margin">Recalibrate</span></a>
  <a id="button-ten" class="button gray"><span class="button-margin">Close</span></a>
  <a id="button-eleven" class="button gray"><span class="button-margin">Numbers</span></a>
  <a id="button-twelve" class="button gray"><span class="button-margin">Letters</span></a>
  <a id="button-thirteen" class="button gray"><span class="button-margin">Shift</span></a>
  <a id="button-fourteen" class="button gray"><span class="button-margin">Space</span></a>
  <a id="button-fifteen" class="button orange"><span class="button-margin">Backspace</span></a>
  <a id="button-sixteen" class="button orange"><span class="button-margin">Search</span></a>
  <a id="button-seventeen" class="button gray" href="../articles"><span class="button-margin">Articles</span></a>
  <a id="button-eighteen" class="button gray" href="../images"><span class="button-margin">Images</span></a>
  <a id="button-nineteen" class="button gray" href="../videos"><span class="button-margin">Videos</span></a>
  <a id="button-twenty" class="button gray" href="../audio"><span class="button-margin">Audio</span></a>
  <table id="cascade">
    <tbody>
      <tr class="row-one">
        <td>2385</td>
        <td></td>
        <td></td>
        <td>8578232</td>
        <td></td>
        <td></td>
        <td>9</td>
        <td>5789</td>
        <td>3882</td>
        <td>5893</td>
        <td>3489</td>
        <td></td>
        <td></td>
        <td>365</td>
        <td>846</td>
        <td>9798</td>
      </tr>
      <tr class="row-two">
        <td>2064</td>
        <td></td>
        <td></td>
        <td>20080720</td>
        <td></td>
        <td></td>
        <td>4</td>
        <td>9776</td>
        <td>626</td>
        <td></td>
        <td>126</td>
        <td></td>
        <td></td>
        <td>97</td>
        <td>6165</td>
        <td>6626</td>
      </tr>
      <tr class="row-three">
        <td>834</td>
        <td></td>
        <td></td>
        <td>729111</td>
        <td></td>
        <td></td>
        <td></td>
        <td>89</td>
        <td>6589</td>
        <td>6547</td>
        <td>3465</td>
        <td></td>
        <td></td>
        <td>867</td>
        <td>2347</td>
        <td>5762</td>
      </tr>
      <tr class="row-four">
        <td>4768</td>
        <td></td>
        <td></td>
        <td>8967284</td>
        <td></td>
        <td></td>
        <td>7</td>
        <td>9798</td>
        <td>8969</td>
        <td>476</td>
        <td>8476</td>
        <td></td>
        <td></td>
        <td>9479</td>
        <td>982</td>
        <td>8969</td>
      </tr>
      <tr class="row-five">
        <td>685</td>
        <td></td>
        <td></td>
        <td>3478</td>
        <td></td>
        <td></td>
        <td>8</td>
        <td>864</td>
        <td>7146</td>
        <td>347</td>
        <td>429</td>
        <td></td>
        <td></td>
        <td>840</td>
        <td></td>
        <td>897</td>
      </tr>
      <tr class="row-six">
        <td>757</td>
        <td></td>
        <td></td>
        <td>898990</td>
        <td></td>
        <td></td>
        <td>1</td>
        <td>200</td>
        <td>285</td>
        <td>923</td>
        <td>387</td>
        <td></td>
        <td></td>
        <td>238</td>
        <td>578</td>
        <td>5875</td>
      </tr>
      <tr class="row-seven">
        <td>484</td>
        <td></td>
        <td></td>
        <td>947589</td>
        <td></td>
        <td></td>
        <td>6</td>
        <td>569</td>
        <td>68</td>
        <td>678</td>
        <td>56</td>
        <td></td>
        <td></td>
        <td>584</td>
        <td>678</td>
        <td>476</td>
      </tr>
      <tr class="row-eight">
        <td>8206</td>
        <td></td>
        <td></td>
        <td>4735</td>
        <td></td>
        <td></td>
        <td>5</td>
        <td>201</td>
        <td>647</td>
        <td>1863</td>
        <td>933</td>
        <td></td>
        <td></td>
        <td>254</td>
        <td>7913</td>
        <td>4798</td>
      </tr>
      <tr class="row-nine">
        <td>3472</td>
        <td></td>
        <td></td>
        <td>1138</td>
        <td></td>
        <td></td>
        <td>3</td>
        <td>447</td>
        <td></td>
        <td>407</td>
        <td>676</td>
        <td></td>
        <td></td>
        <td>99</td>
        <td>7103</td>
        <td>3819</td>
      </tr>
      <tr class="row-ten">
        <td>1701</td>
        <td></td>
        <td></td>
        <td>33397</td>
        <td></td>
        <td></td>
        <td></td>
        <td>834</td>
        <td>753</td>
        <td>204</td>
        <td>59</td>
        <td></td>
        <td></td>
        <td>806</td>
        <td>2042</td>
        <td>5047</td>
      </tr>
    </tbody>
  </table>
`;

// Button functions
document.querySelectorAll('.gray').forEach((b) => {b.onclick = beep1});
document.querySelectorAll('.orange').forEach((b) => {b.onclick = beep3});

const beepOne = new Audio('../audio/beep-1.mp3');
const beepTwo = new Audio('../audio/beep-2.mp3');
const beepThree = new Audio('../audio/beep-3.mp3');

function beep1(){
  beepOne.play();
}

function beep2(){
  beepTwo.play();
}

function beep3(){
  beepThree.play();
}

document.querySelector('#button-nine').onclick = function(){
  beep2();
  setTimeout(() => {window.location.reload()}, 1000);
};

document.querySelector('#button-ten').onclick = function(){
  beep2();
  setTimeout(() => {window.open(location, '_self').close()}, 1000);
};

// Link setup
document.querySelectorAll('a').forEach((link) => {link.setAttribute('target', '_blank')});

// Heading IDs
function addHeadingIds(){
  const headings = document.querySelectorAll('h2, h3, h4, h5, h6');
  headings.forEach(heading => {
    let headingId = heading.innerText;
    headingId = headingId.toLowerCase();
    headingId = headingId.normalize('NFD').replace(/\p{Diacritic}/gu, '');
    headingId = headingId.replace(/[\s\2013\2014]/g, '-');
    headingId = headingId.replace(/([a-zA-Z])\./g, '$1');
    headingId = headingId.replace(/['":;,]/g, '');
    heading.id = headingId;
  });
}

addHeadingIds();
