fetch("data.json")
  .then((res) => res.json())
  .then((data) => showBlok(data));

const showBlok = (data) => {
  const days = document.querySelector(".days");
  data.forEach((item) => {
    days.innerHTML += `
    <div class="grup">
  <div class="amount" style="height: ${2.5 * item.amount}px">
    <div class="go">$${item.amount}</div>
  </div>
  <p>${item.day}</p>
</div>`;
  });
  let arr = [];
  data.map((item) => {
    arr.push(item.amount);
  });
  let index = arr.indexOf(Math.max(...arr));
  console.log(index);
  document.querySelector(
    `.days .grup:nth-child(${index + 1}) .amount`
  ).style.backgroundColor = "hsl(186, 34%, 60%)";
};
