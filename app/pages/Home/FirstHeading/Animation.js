const SECONDHAND = document.querySelector("#CircleDot");
const ARROW = document.querySelector("#CrossArrow");
// Circle Text
const NFT = document.querySelector("#Nft"); // 1
const Metavers = document.querySelector("#Metavers"); // 2
const Web3 = document.querySelector("#Web3"); // 3
const Blockchain = document.querySelector("#Blockchain"); // 4
const Dao = document.querySelector("#Dao"); // 5
const Dapps = document.querySelector("#Dapps"); // 5
const Wallet = document.querySelector("#Wallet"); // 7
const SmartContract = document.querySelector("#SmartContract"); // 8
const Polygon = document.querySelector("#Polygon"); // 9
const Bnb = document.querySelector("#Bnb"); // 10
const Solana = document.querySelector("#Solana"); // 11
const Cosmos = document.querySelector("#Cosmos"); // 12
const Ethereum = document.querySelector("#Ethereum"); // 13
const Cardano = document.querySelector("#Cardano"); // 14
const Avalanche = document.querySelector("#Avalanche"); // 15
const Xrp = document.querySelector("#Xrp"); // 16
const Polkadot = document.querySelector("#Polkadot"); // 17
const HyperLedger = document.querySelector("#HyperLedger"); // 18
const Dex = document.querySelector("#Dex"); // 19
const Defi = document.querySelector("#Defi"); // 20
let secPosition = 0;
const dummyDegree = [
  { id: 1, querySelector: Metavers, deg: "-18deg" },
  { id: 2, querySelector: Web3, deg: "-36deg" },
  { id: 3, querySelector: Blockchain, deg: "-54deg" },
  { id: 4, querySelector: Dao, deg: "-72deg" },
  { id: 5, querySelector: Dapps, deg: "-90deg" },
  { id: 6, querySelector: Wallet, deg: "-108deg" },
  { id: 7, querySelector: SmartContract, deg: "-126deg" },
  { id: 8, querySelector: Polygon, deg: "-144deg" },
  { id: 9, querySelector: Bnb, deg: "-162deg" },
  { id: 10, querySelector: Solana, deg: "-180deg" },
  { id: 11, querySelector: Cosmos, deg: "-198deg" },
  { id: 12, querySelector: Ethereum, deg: "-216deg" },
  { id: 13, querySelector: Cardano, deg: "-234deg" },
  { id: 14, querySelector: Avalanche, deg: "-252deg" },
  { id: 15, querySelector: Xrp, deg: "-270deg" },
  { id: 16, querySelector: Polkadot, deg: "-288deg" },
  { id: 17, querySelector: HyperLedger, deg: "-306deg" },
  { id: 18, querySelector: Dex, deg: "-324deg" },
  { id: 19, querySelector: Defi, deg: "-342deg" },
];
const runTheCircle = () => {
  secPosition = secPosition - 360 / 20;
  ARROW.style.transform = "rotate(" + secPosition + "deg)";
  //   GET Degree
  var a = (SECONDHAND.style.transform = "rotate(" + secPosition + "deg)");
  var b = a?.slice(7);
  var c = b?.split(")")?.[0];
  for (let x of dummyDegree) {
    // console.log(x.deg === c);
    if (x.deg === c) {
      x.querySelector.classList.add("svg-color");
      setTimeout(() => {
        x.querySelector.classList.remove("svg-color");
      }, 1000);
    } else if ("-360deg" === c) {
      console.log("true");
      secPosition = 0;
      NFT.classList.add("svg-color");
      setTimeout(() => {
        NFT.classList.remove("svg-color");
      }, 1000);
    }
  }
  //   console.log("🚀 ~ runTheCircle ~ c", c);
};
SECONDHAND.style.animation = "animeDot 20s linear infinite";
ARROW.style.animation = "animeDot 20s linear infinite";
// runTheCircle();
var interval = setInterval(runTheCircle, 1000);
