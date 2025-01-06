/**
 * <div id="parent">
 *      <div id="child">
 *          <h1>I am h1 tag</h1>
 *          <h2>I am h2 tag </h2>
 *      </div>
 *      <div id="child">
 *          <h1>I am h1 tag</h1>
 *          <h2>I am h2 tag </h2>
 *      </div>
 * </div>
 * ReactElement(Object) = HTML (Browser understand)
 */

const heading = React.createElement("h1",{id:"heading"},"Hello world reshma")



const parent  = React.createElement ("div",{id:"parent"},
                [React.createElement("div",{id:"child"},
                [React.createElement("h1",{},"I am h1 tag"),React.createElement("h2",{},"I am Mayur  tag")]),
                [React.createElement("h1",{},"I am h1 tag"),React.createElement("h2",{},"I am h2 tag")]

            ])



const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(parent)

