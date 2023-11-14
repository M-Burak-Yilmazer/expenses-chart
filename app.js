fetch("data.json")
  .then((res) => res.json())
  .then((data) => showBlok(data));

const showBlok = (data) => {
  const days = document.querySelector(".days");
  data.forEach((item) => {
    days.innerHTML += `<div class="grup">
    <div style="height: ${3*item.amount}px">
        </div>
        <p>${item.day}</p>
        </div>`;
  });
};
