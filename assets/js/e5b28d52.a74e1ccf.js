"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[5418],{3905:(e,t,o)=>{o.d(t,{Zo:()=>c,kt:()=>h});var n=o(67294);function a(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function r(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function i(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?r(Object(o),!0).forEach((function(t){a(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):r(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function s(e,t){if(null==e)return{};var o,n,a=function(e,t){if(null==e)return{};var o,n,a={},r=Object.keys(e);for(n=0;n<r.length;n++)o=r[n],t.indexOf(o)>=0||(a[o]=e[o]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)o=r[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(a[o]=e[o])}return a}var l=n.createContext({}),p=function(e){var t=n.useContext(l),o=t;return e&&(o="function"==typeof e?e(t):i(i({},t),e)),o},c=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var o=e.components,a=e.mdxType,r=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),m=p(o),u=a,h=m["".concat(l,".").concat(u)]||m[u]||d[u]||r;return o?n.createElement(h,i(i({ref:t},c),{},{components:o})):n.createElement(h,i({ref:t},c))}));function h(e,t){var o=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=o.length,i=new Array(r);i[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[m]="string"==typeof e?e:a,i[1]=s;for(var p=2;p<r;p++)i[p]=o[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,o)}u.displayName="MDXCreateElement"},81498:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>m,frontMatter:()=>r,metadata:()=>s,toc:()=>p});var n=o(87462),a=(o(67294),o(3905));const r={slug:"2023-day16",title:"16. Intro to PCF Control",authors:["gomolemo"],draft:!1,hide_table_of_contents:!1,toc_min_heading_level:2,toc_max_heading_level:3,keywords:["power platform","low code","power component framework","tutorial"],image:"https://microsoft.github.io/Low-Code/img/og/30-16.png",description:"Power Component Framework can be used to enhance the user experience for users working with data on forms, views, dashboards, and even canvas app screens. Learn more in #LowCodeFebruary.",tags:["low-code-february","30-days-of-lowcode","pcf","power-platform"]},i=void 0,s={permalink:"/Low-Code/blog/2023-day16",source:"@site/blog/2023-lcf/2023-02-16/index.md",title:"16. Intro to PCF Control",description:"Power Component Framework can be used to enhance the user experience for users working with data on forms, views, dashboards, and even canvas app screens. Learn more in #LowCodeFebruary.",date:"2023-02-16T00:00:00.000Z",formattedDate:"February 16, 2023",tags:[{label:"low-code-february",permalink:"/Low-Code/blog/tags/low-code-february"},{label:"30-days-of-lowcode",permalink:"/Low-Code/blog/tags/30-days-of-lowcode"},{label:"pcf",permalink:"/Low-Code/blog/tags/pcf"},{label:"power-platform",permalink:"/Low-Code/blog/tags/power-platform"}],readingTime:6.91,hasTruncateMarker:!1,authors:[{name:"Gomolemo Mohapi",title:"Cloud Advocate",url:"https://github.com/gomomohapi",imageURL:"https://github.com/gomomohapi.png",key:"gomolemo"}],frontMatter:{slug:"2023-day16",title:"16. Intro to PCF Control",authors:["gomolemo"],draft:!1,hide_table_of_contents:!1,toc_min_heading_level:2,toc_max_heading_level:3,keywords:["power platform","low code","power component framework","tutorial"],image:"https://microsoft.github.io/Low-Code/img/og/30-16.png",description:"Power Component Framework can be used to enhance the user experience for users working with data on forms, views, dashboards, and even canvas app screens. Learn more in #LowCodeFebruary.",tags:["low-code-february","30-days-of-lowcode","pcf","power-platform"]},nextItem:{title:"15. \ud83d\ude80 OpenAI & Microsoft Power Platform",permalink:"/Low-Code/blog/2023-day15"}},l={authorsImageUrls:[void 0]},p=[{value:"What We&#39;ll Cover",id:"what-well-cover",level:2},{value:"What is the Power Apps Component Framework?",id:"what-is-the-power-apps-component-framework",level:2},{value:"Why would you want to use PCF?",id:"why-would-you-want-to-use-pcf",level:2},{value:"Types of PCF Components",id:"types-of-pcf-components",level:3},{value:"What are the advantages of using PCF?",id:"what-are-the-advantages-of-using-pcf",level:2},{value:"Web Resources vs PCF",id:"web-resources-vs-pcf",level:3},{value:"The composition of a PCF component",id:"the-composition-of-a-pcf-component",level:2},{value:"Manifest",id:"manifest",level:3},{value:"Component implementation",id:"component-implementation",level:3},{value:"Resources",id:"resources",level:3},{value:"Exercise",id:"exercise",level:2},{value:"Resources",id:"resources-1",level:2}],c={toc:p};function m(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("head",null,(0,a.kt)("meta",{name:"twitter:url",content:"https://microsoft.github.io/Low-Code/blog/2023-day16"}),(0,a.kt)("meta",{name:"twitter:title",content:"16. Intro to PCF Control"}),(0,a.kt)("meta",{name:"twitter:description",content:"Power Component Framework can be used to enhance the user experience for users working with data on forms, views, dashboards, and even canvas app screens. Learn more in #LowCodeFebruary."}),(0,a.kt)("meta",{name:"twitter:image",content:"https://microsoft.github.io/Low-Code/img/og/30-16.png"}),(0,a.kt)("meta",{name:"twitter:card",content:"summary_large_image"}),(0,a.kt)("meta",{name:"twitter:creator",content:"@nitya"}),(0,a.kt)("meta",{name:"twitter:site",content:"@AzureAdvocates"}),(0,a.kt)("link",{rel:"canonical",href:"https://microsoft.github.io/Low-Code/blog/2023-day16"})),(0,a.kt)("p",null,"Welcome to ",(0,a.kt)("inlineCode",{parentName:"p"},"Day 16")," of #30DaysOfLowCode!"),(0,a.kt)("p",null,"The theme for this week is ",(0,a.kt)("strong",{parentName:"p"},"User Interface"),"! Yesterday, ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/juliajuju93"},"Julia")," spoiled us with a blog that highlighted ",(0,a.kt)("a",{parentName:"p",href:"https://microsoft.github.io/Low-Code/blog/2023-day15"},"OpenAI and the Power Platform"),". Today we'll explore the topic of the ",(0,a.kt)("em",{parentName:"p"},"Power Apps Component Framework"),"! "),(0,a.kt)("h2",{id:"what-well-cover"},"What We'll Cover"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"What is the ",(0,a.kt)("em",{parentName:"li"},"Power Apps Component Framework (PCF)"),"?"),(0,a.kt)("li",{parentName:"ul"},"Why would you want to ",(0,a.kt)("em",{parentName:"li"},"use")," PCF?"),(0,a.kt)("li",{parentName:"ul"},"What are the ",(0,a.kt)("em",{parentName:"li"},"advantages"),"?"),(0,a.kt)("li",{parentName:"ul"},"The ",(0,a.kt)("em",{parentName:"li"},"composition")," of a PCF component"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Exercise"),": Training - ",(0,a.kt)("a",{parentName:"li",href:"https://aka.ms/LCF/BuildPCF"},"Build a Power Apps component")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Resources"),": Explore the ",(0,a.kt)("a",{parentName:"li",href:"https://aka.ms/lowcode-february/collection"},"Low Code February Collection"))),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Speaker Card Feb 15",src:o(60480).Z,width:"1001",height:"420"})),(0,a.kt)("h2",{id:"what-is-the-power-apps-component-framework"},"What is the Power Apps Component Framework?"),(0,a.kt)("p",null,"Power Apps Component Framework (PCF) empowers professional or traditional developers and app makers to create reusable code components for Power Apps. What's great about these code components is that they work for both ",(0,a.kt)("a",{parentName:"p",href:"https://aka.ms/LCF/Components4Canvas"},"Canvas Apps")," and ",(0,a.kt)("a",{parentName:"p",href:"https://aka.ms/LCF/Components4ModelDriven"},"Model-Driven Apps")," and they can be used to enhance the user experience for users working with data on forms, views, dashboards, and even canvas app screens. "),(0,a.kt)("h2",{id:"why-would-you-want-to-use-pcf"},"Why would you want to use PCF?"),(0,a.kt)("p",null,"Sometimes, as app makers, we might reach certain limitations when it comes to building consistent, eye-catching but functional user experiences. The out-of-the-box controls within Power Apps might not fit all of our needs or maybe, we just want to stretch Power Apps' capabilities a little further. With PCF, you can build code components which are essentially visual controls that help you create a more customised user interface."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"A gif showing PCF Code Components in action",src:o(10640).Z,width:"2540",height:"1312"})),(0,a.kt)("h3",{id:"types-of-pcf-components"},"Types of PCF Components"),(0,a.kt)("p",null,"These code components also allow for the integration of business logic which complements the visualisation for unique scenarios. There are two main types of components that you can create:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Field"),": A custom control for a field on a form. If you have a numeric value, instead of a simple text box with a number, you can represent it as a slider code component."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Dataset"),": A custom control to display rows of data. If you would like to go the more advanced route, you could take a boring dataset and represent that as a specialised interactive graph instead of a normal table. ")),(0,a.kt)("h2",{id:"what-are-the-advantages-of-using-pcf"},"What are the advantages of using PCF?"),(0,a.kt)("p",null,"With the PCF's ability to tailor-make your apps to fit your specific needs and requirements, there must be other advantages to take note of, right? Of course! These include;"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"When it comes to ",(0,a.kt)("strong",{parentName:"li"},"integration"),", you have access to a rich set of framework APIs, 3rd-party libraries, and services that lets you incorporate external functionality and exposes capabilities like component lifecycle management, contextual data, and metadata."),(0,a.kt)("li",{parentName:"ul"},"Drastically improve and enhance the ",(0,a.kt)("strong",{parentName:"li"},"user experience")," with seamless server access via Web API, utility and data formatting methods; device features like camera, location, and microphone; and easy-to-invoke user experience elements like dialogs, lookups, and full-page rendering."),(0,a.kt)("li",{parentName:"ul"},"The ",(0,a.kt)("strong",{parentName:"li"},"reusability")," aspect because PCF components can be easily reused across multiple Power Apps reducing the development time and cost associated with creating custom functionality for each individual app."),(0,a.kt)("li",{parentName:"ul"},"Components built with PCF are optimised for ",(0,a.kt)("strong",{parentName:"li"},"performance")," due to the fact that they are designed to be lightweight ensuring that they do not slow down the overall application."),(0,a.kt)("li",{parentName:"ul"},"Use of ",(0,a.kt)("strong",{parentName:"li"},"responsive")," web design principles to provide an optimal viewing and interaction experience for any screen size, device, or orientation.")),(0,a.kt)("h3",{id:"web-resources-vs-pcf"},"Web Resources vs PCF"),(0,a.kt)("p",null,"Before the PCF existed, HTML web resources were used to provide any type of custom presentation to a Power Apps' form. However, with the introduction of PCF, code components can now be bundled into a single solution file and rendered as part of the same context at the same time as any other components, providing a seamless experience for the user."),(0,a.kt)("h2",{id:"the-composition-of-a-pcf-component"},"The composition of a PCF component"),(0,a.kt)("p",null,"A ",(0,a.kt)("a",{parentName:"p",href:"https://aka.ms/LCF/SolutionConcepts"},"solution")," can have code components, which can then be imported into a Dataverse environment. Professional / Traditional developers and app makers can then specify columns, subgrids, views, and dashboard subgrids to use in place of default components after importing the solution containing the code components. These coding elements can be added to Canvas Apps as well as Model-Driven Apps."),(0,a.kt)("p",null,"Code Components consists of 3 elements;"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Manifest"),(0,a.kt)("li",{parentName:"ul"},"Component implementation"),(0,a.kt)("li",{parentName:"ul"},"Resources")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Image showing the 3 main key areas of a PCF Component",src:o(9633).Z,width:"840",height:"618"})),(0,a.kt)("h3",{id:"manifest"},"Manifest"),(0,a.kt)("p",null,"The manifest (",(0,a.kt)("inlineCode",{parentName:"p"},"ControlManifest.Input.xml"),") is the file that defines the metadata and configuration of a code component. It is an XML document that describes:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"name"),": The name of the component, which is used to identify it within the Power Apps authoring tools."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"description"),": A brief description of the component, which helps users understand what it does."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"version"),": The version number of the component, which is used to track changes and updates."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"resource files"),": A list of resource files that the component needs.")),(0,a.kt)("p",null,"The manifest is an important file for a PCF code component because it is used by the Power Apps authoring tools to register and manage the component. This also includes the kind of data which is to be configured (field or dataset) and any other properties that can be configured in the application when the component is added."),(0,a.kt)("h3",{id:"component-implementation"},"Component implementation"),(0,a.kt)("p",null,"The component implementation in (PCF) refers to the code that defines the behaviour and appearance of the component. The component implementation is typically written in TypeScript or JavaScript and is compiled into a single solution that is loaded into the Power Apps authoring and runtime environments."),(0,a.kt)("p",null,"The ",(0,a.kt)("a",{parentName:"p",href:"https://aka.ms/LCF/PowerCLI"},"Power Platform CLI")," will auto-generate an ",(0,a.kt)("inlineCode",{parentName:"p"},"index.ts")," file that includes stubbed implementations for methods described in the code component interface. These methods control the lifecycle of the code component and can include, but is not limited to;"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"init"),": This is the entry point for the component and is called when the component is first loaded. The initialization function is responsible for setting up the component and registering any event listeners or other functionality."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"updateView"),": This function is called whenever the component's properties or state changes. It is responsible for re-rendering the component's user interface to reflect the updated state."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"getOutputs"),": Called by the framework prior to a component receiving new data. "),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"destroy"),":  This method is invoked when the component is to be removed from the DOM tree. Use it for the cleanup and to release any memory that the component is using.")),(0,a.kt)("p",null,"Overall, the component implementation is responsible for defining the functionality and appearance of the component, and for integrating it into the Power Apps environment so that it can be used by app makers."),(0,a.kt)("h3",{id:"resources"},"Resources"),(0,a.kt)("p",null,"With PCF components, resources refer to the files and assets that are used to support the component implementation to implement its visualization. Resources can include things like images, icons, stylesheets, and other files that are necessary for the component to function properly. These are typically organized into a separate folder within the component project and are referenced by the component implementation code as needed."),(0,a.kt)("h2",{id:"exercise"},"Exercise"),(0,a.kt)("p",null,"Try the exercise in this ",(0,a.kt)("a",{parentName:"p",href:"https://aka.ms/LCF/BuildPCF"},"learn module")," where you will learn how to build your very first custom PCF component, create a code component solution package, and then test and debug the code component."),(0,a.kt)("p",null,"Also be sure to look out for tomorrow's blog where we will be building another PCF code component in a detailed step-by-step fashion. "),(0,a.kt)("h2",{id:"resources-1"},"Resources"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Exercise"),": Training - ",(0,a.kt)("a",{parentName:"li",href:"https://aka.ms/LCF/BuildPCF"},"Build a Power Apps component")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Documentation"),": ",(0,a.kt)("a",{parentName:"li",href:"https://aka.ms/LCF/PCFDocs"},"Power Apps Component Framework Overview")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Watch"),": ",(0,a.kt)("a",{parentName:"li",href:"https://learn.microsoft.com/shows/the-low-code-revolution/?wt.mc_id=82054_collection_webpage_ece&ns-enrollment-type=Collection&ns-enrollment-id=8q5jhr1y0jeqj6"},"The Low Code Revolution Show")),(0,a.kt)("li",{parentName:"ul"},"Low Code February ",(0,a.kt)("a",{parentName:"li",href:"https://learn.microsoft.com/users/nityan/collections/xz6ehr2mx031y0?WT.mc_id=javascript-82212-ninarasi"},"Learn Collection"),": Collection of resources to go from learning Power Platform Fundamentals, to understanding the Dataverse and working in Fusion Development teams.")),(0,a.kt)("p",null,"Also consider -"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Signing up for the free ",(0,a.kt)("a",{parentName:"li",href:"https://aka.ms/lowcode-february/devplan"},"Power Apps Developer Plan")," so you have access to the Power Platform."),(0,a.kt)("li",{parentName:"ul"},"Enrolling in the ",(0,a.kt)("a",{parentName:"li",href:"https://aka.ms/lowcode-february/challenge"},"Cloud Skills Challenge")," to skill up on key cloud technologies with free, self-guided learning courses, and start climbing the leaderboard!")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Campaign Banner",src:o(24849).Z,width:"1334",height:"560"})))}m.isMDXComponent=!0},9633:(e,t,o)=>{o.d(t,{Z:()=>n});const n=o.p+"assets/images/PCF-KeyAreas-43385e089e983b125376bb9f9a39515f.png"},10640:(e,t,o)=>{o.d(t,{Z:()=>n});const n=o.p+"assets/images/code-components-a964e847530867a5c8b9702ed8598045.gif"},60480:(e,t,o)=>{o.d(t,{Z:()=>n});const n=o.p+"assets/images/30-16-b5d5c3806bf7dcb2f4fc99dfb47bb2f9.png"},24849:(e,t,o)=>{o.d(t,{Z:()=>n});const n=o.p+"assets/images/30-banner-d9bab2b92d758942447a4cbc50aef715.png"}}]);