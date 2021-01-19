import {Card, Elevation} from "@blueprintjs/core";
import React from "react";

const AccountDetails = ({user}) => {
  const {attributes: {phone_number: phone, email}} = user;
  return (<Card interactive={false} elevation={Elevation.TWO}>
    <h2>Account Details</h2>
    <div>
      <div>
        Phone: {phone}
      </div>
      <div>
        Email: {email}
      </div>
    </div>
  </Card>);
};

export default AccountDetails;
