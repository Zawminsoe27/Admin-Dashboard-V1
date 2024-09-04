let selector = (ele) => document.querySelector(ele);
const allSelecotr = (ele) => document.querySelectorAll(ele);

const sideBar = selector("aside");
const closeBtn = selector(".close");
const themeButton = selector(".theme-toggle");
let menuBtn = selector("#menu-btn");

menuBtn.addEventListener("click", () => {
  sideBar.style.display = "block";
});

closeBtn.addEventListener("click", () => {
  sideBar.style.display = "none";
});
themeButton.addEventListener("click", () => {
  document.body.classList.toggle("dark-theme-variables");
  themeButton.querySelector("span:nth-child(1)").classList.toggle("active");
  themeButton.querySelector("span:nth-child(2)").classList.toggle("active");
});

Orders.forEach((order) => {
  const tr = document.createElement("tr");
  const trContent = `
				 <td>${order.productName}</td>
                <td>${order.productNumber}</td>
                <td>${order.paymentStatus}</td>
                <td class="${order.shipping === "Decline" ? "danger" : order.shipping === "Pending" ? "warning" : "primary"}">${order.shipping}</td>
                <td class="primary">Details</td>
				
`;
  tr.innerHTML = trContent;
  document.querySelector("table tbody").appendChild(tr);
});
