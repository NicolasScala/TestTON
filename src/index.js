import "./styles.css";
import TonWeb from "tonweb";

async function tonWallet() {
  const tonweb = new TonWeb(
    new TonWeb.HttpProvider("https://toncenter.com/api/v2/jsonRPC")
  );
  const txs = await tonweb.getBalance(
    "EQDeYARJH--7yaSzykWpz7-oiezlX5iRjszSajw44eR695Nz"
  );
  console.log(txs);
  const seed = TonWeb.utils.hexToBytes(
    "607cdaf518cd38050b536005bea2667d008d5dda1027f9549479f4a42ac315c4"
  );
  const keyPair = TonWeb.utils.nacl.sign.keyPair.fromSeed(seed);
  console.log(
    "wallet public key =",
    TonWeb.utils.bytesToHex(keyPair.secretKey)
  );
}

tonWallet();

document.getElementById("app").innerHTML = `

<h1>Hello Vanilla!</h1>
`;
