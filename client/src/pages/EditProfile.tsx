import React from "react";
import Button from "../styles/Button";
import Wrapper from "../styles/EditProfile";
const EditProfile = () => {
  return (
    <Wrapper>
      <div>
        <Button red onClick={() => console.log("do something")}>
          Edit Profile
        </Button>
      </div>
    </Wrapper>
  );
};

export default EditProfile;
