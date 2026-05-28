import{u as a,j as t}from"./index-CJXPgdRd.js";import"./_commonjsHelpers-CqkleIqs.js";function o(e){const n={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...a(),...e.components};return t.jsxs(t.Fragment,{children:[t.jsx(n.h1,{id:"button",children:"Button"}),`
`,t.jsx(n.p,{children:"This is an example of a button component."}),`
`,t.jsxs("code-bubble",{children:[t.jsx(n.pre,{children:t.jsx(n.code,{className:"language-html",children:`<awc-button>My Button</awc-button>
`})}),t.jsx(n.pre,{children:t.jsx(n.code,{className:"language-tsx",children:`import { AwcButton } from 'lit-starter-kit/react';

export default () => {
  return <AwcButton>My Button</AwcButton>;
};
`})})]}),`
`,t.jsx(n.h2,{id:"variations",children:"Variations"}),`
`,t.jsx(n.p,{children:"Here are some examples of button variations."}),`
`,t.jsxs("code-bubble",{children:[t.jsx(n.pre,{children:t.jsx(n.code,{className:"language-html",children:`<awc-button>My Button</awc-button>
<awc-button variation="primary">My Button</awc-button>
<awc-button variation="hollow">My Button</awc-button>
<awc-button variation="transparent">My Button</awc-button>
`})}),t.jsx(n.pre,{children:t.jsx(n.code,{className:"language-tsx",children:`import { AwcButton } from 'lit-starter-kit/react';

export default () => {
  return (
    <>
      <AwcButton>My Button</AwcButton>
      <AwcButton variation="primary">My Button</AwcButton>
      <AwcButton variation="hollow">My Button</AwcButton>
      <AwcButton variation="transparent">My Button</AwcButton>
    </>
  );
};
`})})]}),`
`,t.jsx(n.h2,{id:"disabled",children:"Disabled"}),`
`,t.jsx(n.p,{children:"Here is an example of how to disable a button."}),`
`,t.jsxs("code-bubble",{children:[t.jsx(n.pre,{children:t.jsx(n.code,{className:"language-html",children:`<awc-button disabled>My Button</awc-button>
`})}),t.jsx(n.pre,{children:t.jsx(n.code,{className:"language-tsx",children:`import { AwcButton } from 'lit-starter-kit/react';

export default () => {
  return <AwcButton disabled>My Button</AwcButton>;
};
`})})]}),`
`,t.jsx(n.h2,{id:"api",children:"API"}),`
`,t.jsx("wc-dox",{tag:"awc-button"})]})}function s(e={}){const{wrapper:n}={...a(),...e.components};return n?t.jsx(n,{...e,children:t.jsx(o,{...e})}):o(e)}export{s as default};
