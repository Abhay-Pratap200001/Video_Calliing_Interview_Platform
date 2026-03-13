import React from "react";
import {SignedIn, SignedOut, SignInButton, SignOutButton, UserButton, UserProfile} from "@clerk/clerk-react"

const App = () => {
  return (
    <div>
      <h1>Welcome to the app</h1>
      <SignedOut>
        <SignInButton mode="modal"/>
      </SignedOut>

      <SignedIn>
        <SignOutButton/>
      </SignedIn>

      <UserButton/>
    </div>
  );
};

export default App;
