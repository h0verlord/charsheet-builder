import React from "react";
import { Meteor } from "meteor/meteor";
import { history } from "../routes/AppRouter";

import PrivateHeader from "./PrivateHeader";

export default () => {
  return (
    <div>
      <PrivateHeader title="Dashboard" />
      <div className="page-content">
        Dashboard page content.
      </div>
    </div>
  );
};

// export default class Link extends React.Component {
//   componentWillMount() {
//     if (!Meteor.userId()) {
//       history.replace("/");
//     }
//   }
//   render() {
//     return (
//       <div>
//         <PrivateHeader title= "Your Links" />
//         <LinksList />
//         <AddLink />
//       </div>
//     );
//   }
// }
