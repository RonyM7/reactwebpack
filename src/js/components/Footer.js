import React from "react";


export default class Footer extends React.Component {
  render() {
  	  const footerlinks= 
      [
        {
          name:"Privacy",
          url:"#"
        },
        {
          name:"Terms of Use",
          url:"#"
        }
      ];
    return (
      <footer>
        <ul>
        	 {
          footerlinks.map((footerlink, index)=>
            <li className="footer-link" key={index}>
              <a href={footerlink.url}>{footerlink.name}</a>
            </li>
          )
        }
        </ul>

      </footer>
    );
  }
}
