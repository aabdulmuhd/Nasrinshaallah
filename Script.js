// script.js

// Simulate wallet data
const user = {
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
  const walletEl = document.getElementById("wallet");
  const stakedEl = document.getElementById("staked");
  const apyEl = document.getElementById("apy");
  const rewardsEl = document.getElementById("rewards");

  if (walletEl) walletEl.textContent = user.wallet;
  if (stakedEl) stakedEl.textContent = user.staked + " LEG";
  if (apyEl) apyEl.textContent = user.apy + "% APY";
  if (rewardsEl) rewardsEl.textContent = user.rewards + " LEG";
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
  if (!container) return;
  container.innerHTML = ""; // clear previous items to avoid duplicates
  user.nfts.forEach(nft => {
    const card = document.createElement("div");
    card.className = "nft-card";
    card.innerHTML = `
      <img src="${nft.image}" alt="${nft.name}">
      <p>${nft.name}</p>
    `;
    container.appendChild(card);
  });
}

// Referral link generator
function generateReferral() {
  const username = document.getElementById("referralInput")?.value || "";
  const link = `https://t.me/LegendCoinBot?start=${encodeURIComponent(username)}`;
  const linkEl = document.getElementById("referralLink");
  if (linkEl) {
    linkEl.textContent = link;
    if (linkEl.tagName && linkEl.tagName.toLowerCase() === "a") {
      linkEl.href = link;
    }
  }
}

window.onload = function () {
  loadStaking();
  loadNFTs();
};
