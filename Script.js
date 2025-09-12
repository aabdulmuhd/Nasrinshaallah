```javascript
// script.js

// Simulate wallet data
let user = {
  wallet: "EQAb123...XYZ",
  staked: 150,
  apy: 12,
  rewards: 5,
  nfts: [
    { name: "Mansa Musa", image: "nfts/mansa_musa.png" },
    { name: "Zeus", image: "nfts/zeus.png" }
  ]
};

// Staking display
function loadStaking() {
  document.getElementById("wallet").textContent = user.wallet;
  document.getElementById("staked").textContent = user.staked + " LEG";
  document.getElementById("apy").textContent = user.apy + "
  document.getElementById("rewards").textContent = user.rewards + "LEG";
}

// Handle stake/unstake buttons
function stake() {
  user.staked += 50;
  user.rewards += 2;
  loadStaking();
}

function unstake() {
  if (user.staked >= 50) {
    user.staked -= 50;
    loadStaking();
  }
}

// Load NFTs
function loadNFTs() {
  const container = document.getElementById("nft-container");
  user.nfts.forEach(nft => {
    const card = document.createElement("div");
    card.className = "nft-card";
    card.innerHTML = `
      <img src="nft.image" alt="{nft.name}">
      <p>${nft.name}</p>
    `;
    container.appendChild(card);
  });
}

// Referral link generator
function generateReferral() {const username = document.getElementById("referralInput").value;
  const link = `https://t.me/LegendCoinBot?start={username}`;
  document.getElementById("referralLink").textContent = link;
}

window.onload = function () {
  loadStaking();
  loadNFTs();
};
```