import ReactDOM from "react-dom/client";
import router from "./App.jsx";
import React from "react";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import { GoogleOAuthProvider } from "@react-oauth/google";

ReactDOM.createRoot(document.getElementById("root")).render(
	<GoogleOAuthProvider clientId="googleusercontent.com">
		<React.StrictMode>
			<RouterProvider router={router} />
		</React.StrictMode>
	</GoogleOAuthProvider>
);
