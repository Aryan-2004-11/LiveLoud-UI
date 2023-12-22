import React from "react";
import { ConnectKitButton } from "connectkit";
import { useAccount } from "wagmi";
import "./Web3Button.scss";
import { useAuth } from "../../hooks/use-auth";
import { useNavigate } from "react-router-dom";
import swal from "sweetalert";

export default function Web3Button() {
  const { isAuth } = useAuth();

  const navigate = useNavigate();

  return (
    <div>
      <ConnectKitButton.Custom>
        {({
          isConnected,
          isConnecting,
          show,
          hide,
          address,
          ensName,
          chain,
        }) => {
          return (
            <button
              className="w-full md:w-fit px-2 md:max-w-xs font-rubik text-base md:text-16 font-bold shadow-sm rounded-xl py-2 bg-custom text-white flex items-center justify-center transition-all duration-300 ease-in-out hover:opacity-80 focus:outline-none focus:shadow-sm focus:shadow-outline"
              onClick={() => {
                if (isAuth) {
                  show;
                } else {
                  swal({
                    title: "Please Login!",
                    text: "You need to login to your account to connect your wallet.",
                    icon: "warning",
                  }).then(() => {
                    navigate("/login");
                  });
                }
              }}
              disabled={isConnecting}
              // style={yourButtonStyle}
            >
              <div className="bg-blue p-1 round-full">
                <img className="w-6 h-6" src="/metamask.svg" />
              </div>
              <span className="ml-1 bg-blue">
                {isConnected
                  ? address.slice(0, 4) +
                    "..." +
                    address.slice(address.length - 4)
                  : "Wallet"}
              </span>
            </button>
          );
        }}
      </ConnectKitButton.Custom>
    </div>
  );
}
